package com.monumentofgreed.pro;

import android.app.Activity;
import android.app.ActivityManager;
import android.app.AlertDialog;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.BatteryManager;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.os.VibrationEffect;
import android.os.Vibrator;
import android.print.PrintAttributes;
import android.print.PrintDocumentAdapter;
import android.print.PrintManager;
import android.util.Base64;
import android.util.Log;
import android.view.View;
import android.webkit.ConsoleMessage;
import android.webkit.JavascriptInterface;
import android.webkit.JsPromptResult;
import android.webkit.JsResult;
import android.webkit.PermissionRequest;
import android.webkit.RenderProcessGoneDetail;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.EditText;
import android.widget.Toast;

import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.util.Date;

public class MainActivity extends Activity {
    private static final String TAG = "MOG_PRO";
    private WebView webView;
    private ValueCallback<Uri[]> filePathCallback;
    private static final int FILE_CHOOSER_REQUEST_CODE = 2001;
    private static final int CAMERA_PERMISSION_CODE = 2002;
    private long lastBackPressTime = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // 1. Global Crash Prevention Handler
        Thread.setDefaultUncaughtExceptionHandler((thread, throwable) -> {
            Log.e(TAG, "FATAL: Uncaught exception in thread " + thread.getName(), throwable);
            try {
                File crashLog = new File(getFilesDir(), "crash_telemetry.log");
                FileWriter fw = new FileWriter(crashLog, true);
                fw.write("\n--- CRASH EVENT AT " + new Date() + " ---\n");
                fw.write("Thread: " + thread.getName() + " (ID: " + thread.getId() + ")\n");
                throwable.printStackTrace(new PrintWriter(fw));
                fw.close();
            } catch (Exception ignored) {}
            finishAffinity();
        });

        // 2. Immersive UI setup compatible with freeform and multi-window
        getWindow().getDecorView().setSystemUiVisibility(
            View.SYSTEM_UI_FLAG_LAYOUT_STABLE
            | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
        );

        // 3. Relax file URI exposure check for easy internal PDF/CSV sharing
        try {
            java.lang.reflect.Method m = android.os.StrictMode.class.getMethod("disableDeathOnFileUriExposure");
            m.invoke(null);
        } catch (Exception ignored) {}

        webView = new WebView(this);
        setContentView(webView);

        configureWebView();
        checkAndRequestPermissions();

        if (savedInstanceState != null) {
            webView.restoreState(savedInstanceState);
        } else {
            // Load local web application assets
            webView.loadUrl("file:///android_asset/web_app/index.html");
        }
    }

    private void configureWebView() {
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(true);
        settings.setAllowFileAccessFromFileURLs(true);
        settings.setAllowUniversalAccessFromFileURLs(true);
        settings.setMediaPlaybackRequiresUserGesture(false);
        settings.setSupportZoom(false);
        settings.setBuiltInZoomControls(false);

        // Enable Chrome DevTools inspection
        WebView.setWebContentsDebuggingEnabled(true);

        // Hardware acceleration
        webView.setLayerType(View.LAYER_TYPE_HARDWARE, null);

        // Native JavaScript Bridge
        webView.addJavascriptInterface(new AndroidBridge(), "AndroidBridge");

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                if (request != null && request.getUrl() != null) {
                    return handleUrl(request.getUrl().toString());
                }
                return false;
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                return handleUrl(url);
            }

            private boolean handleUrl(String url) {
                if (url == null) return false;
                if (url.startsWith("tel:") || url.startsWith("mailto:") || url.contains("google.com/maps") || url.startsWith("https://maps.google.com")) {
                    try {
                        Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                        startActivity(intent);
                        return true;
                    } catch (Exception e) {
                        Log.e(TAG, "Cannot launch external handler for: " + url, e);
                        return false;
                    }
                }
                return false;
            }

            // CRITICAL: Prevent "app suddenly stopped" if Chromium renderer crashes or is killed by OS
            @Override
            public boolean onRenderProcessGone(WebView view, RenderProcessGoneDetail detail) {
                Log.e(TAG, "CRITICAL: WebView render process gone! Did crash: "
                    + (detail != null && detail.didCrash()));
                try {
                    if (view != null) {
                        view.destroy();
                    }
                } catch (Exception ignored) {}
                // Gracefully restart activity without throwing a fatal crash dialog
                recreate();
                return true; // Tells Android the host app handled the condition
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
                if (request != null && request.isForMainFrame()) {
                    Log.w(TAG, "WebView main frame error: " + (error != null ? error.getDescription() : "unknown"));
                }
            }
        });

        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onConsoleMessage(ConsoleMessage cm) {
                Log.d("MOG_WEB", cm.message() + " -- Line " + cm.lineNumber() + " (" + cm.sourceId() + ")");
                return true;
            }

            @Override
            public void onPermissionRequest(final PermissionRequest request) {
                runOnUiThread(() -> {
                    try {
                        request.grant(request.getResources());
                    } catch (Exception e) {
                        Log.e(TAG, "Error granting web permission", e);
                    }
                });
            }

            @Override
            public boolean onJsAlert(WebView view, String url, String message, JsResult result) {
                new AlertDialog.Builder(MainActivity.this)
                    .setTitle("Monument of Greed")
                    .setMessage(message)
                    .setPositiveButton(android.R.string.ok, (dialog, which) -> result.confirm())
                    .setOnCancelListener(dialog -> result.cancel())
                    .show();
                return true;
            }

            @Override
            public boolean onJsConfirm(WebView view, String url, String message, JsResult result) {
                new AlertDialog.Builder(MainActivity.this)
                    .setTitle("Monument of Greed")
                    .setMessage(message)
                    .setPositiveButton(android.R.string.ok, (dialog, which) -> result.confirm())
                    .setNegativeButton(android.R.string.cancel, (dialog, which) -> result.cancel())
                    .setOnCancelListener(dialog -> result.cancel())
                    .show();
                return true;
            }

            @Override
            public boolean onJsPrompt(WebView view, String url, String message, String defaultValue, JsPromptResult result) {
                final EditText input = new EditText(MainActivity.this);
                if (defaultValue != null) {
                    input.setText(defaultValue);
                    input.setSelection(defaultValue.length());
                }
                new AlertDialog.Builder(MainActivity.this)
                    .setTitle("Monument of Greed")
                    .setMessage(message)
                    .setView(input)
                    .setPositiveButton(android.R.string.ok, (dialog, which) -> result.confirm(input.getText().toString()))
                    .setNegativeButton(android.R.string.cancel, (dialog, which) -> result.cancel())
                    .setOnCancelListener(dialog -> result.cancel())
                    .show();
                return true;
            }

            @Override
            public boolean onShowFileChooser(WebView webView, ValueCallback<Uri[]> filePathCallback, FileChooserParams fileChooserParams) {
                if (MainActivity.this.filePathCallback != null) {
                    MainActivity.this.filePathCallback.onReceiveValue(null);
                }
                MainActivity.this.filePathCallback = filePathCallback;

                Intent intent = new Intent(Intent.ACTION_GET_CONTENT);
                intent.addCategory(Intent.CATEGORY_OPENABLE);
                intent.setType("image/*");

                try {
                    startActivityForResult(Intent.createChooser(intent, "Select Banknote Specimen Image"), FILE_CHOOSER_REQUEST_CODE);
                } catch (Exception e) {
                    MainActivity.this.filePathCallback = null;
                    Toast.makeText(MainActivity.this, "File picker unavailable", Toast.LENGTH_SHORT).show();
                    return false;
                }
                return true;
            }
        });
    }

    public class AndroidBridge {
        @JavascriptInterface
        public void printDocument(final String title) {
            runOnUiThread(() -> {
                try {
                    PrintManager printManager = (PrintManager) getSystemService(Context.PRINT_SERVICE);
                    if (printManager != null) {
                        String docName = (title != null && !title.isEmpty()) ? title : "MonumentOfGreed_Dossier";
                        PrintDocumentAdapter adapter = webView.createPrintDocumentAdapter(docName);
                        printManager.print(docName, adapter, new PrintAttributes.Builder().build());
                    }
                } catch (Exception e) {
                    Log.e(TAG, "Error initiating Android print", e);
                }
            });
        }

        @JavascriptInterface
        public boolean savePdfToStorage(final String base64Data, final String filename) {
            try {
                byte[] pdfBytes = Base64.decode(base64Data, Base64.DEFAULT);
                String safeName = (filename != null && !filename.isEmpty()) ? filename : "Monument_Claim_Package.pdf";
                File savedFile = writeBytesToFile(pdfBytes, Environment.DIRECTORY_DOWNLOADS, safeName);
                if (savedFile != null) {
                    runOnUiThread(() -> {
                        Toast.makeText(MainActivity.this, "📄 Courtroom PDF Saved: " + savedFile.getName(), Toast.LENGTH_LONG).show();
                    });
                    return true;
                }
                return false;
            } catch (Exception e) {
                Log.e(TAG, "Error saving PDF to storage", e);
                return false;
            }
        }

        @JavascriptInterface
        public boolean saveCsvToStorage(final String csvContent, final String filename) {
            try {
                String safeName = (filename != null && !filename.isEmpty()) ? filename : "IRS_Form_4684_Casualty_Loss_Schedule.csv";
                byte[] csvBytes = csvContent.getBytes("UTF-8");
                File savedFile = writeBytesToFile(csvBytes, Environment.DIRECTORY_DOWNLOADS, safeName);
                if (savedFile != null) {
                    runOnUiThread(() -> {
                        Toast.makeText(MainActivity.this, "📊 IRS Form 4684 CSV Saved: " + savedFile.getName(), Toast.LENGTH_LONG).show();
                    });
                    return true;
                }
                return false;
            } catch (Exception e) {
                Log.e(TAG, "Error saving CSV to storage", e);
                return false;
            }
        }

        @JavascriptInterface
        public boolean saveImageToStorage(final String base64Data, final String filename) {
            try {
                String cleanBase64 = base64Data.replaceFirst("^data:image/[^;]+;base64,", "");
                byte[] imgBytes = Base64.decode(cleanBase64, Base64.DEFAULT);
                String safeName = (filename != null && !filename.isEmpty()) ? filename : "Forensic_Evidence_Card.png";
                File savedFile = writeBytesToFile(imgBytes, Environment.DIRECTORY_PICTURES, safeName);
                if (savedFile != null) {
                    runOnUiThread(() -> {
                        Toast.makeText(MainActivity.this, "📸 Forensic Evidence Card Saved: " + savedFile.getName(), Toast.LENGTH_LONG).show();
                    });
                    return true;
                }
                return false;
            } catch (Exception e) {
                Log.e(TAG, "Error saving image to storage", e);
                return false;
            }
        }

        @JavascriptInterface
        public boolean sharePdf(final String base64Data, final String filename) {
            try {
                byte[] pdfBytes = Base64.decode(base64Data, Base64.DEFAULT);
                File cacheFile = new File(getCacheDir(), filename != null && !filename.isEmpty() ? filename : "Monument_Claim.pdf");
                FileOutputStream fos = new FileOutputStream(cacheFile);
                fos.write(pdfBytes);
                fos.flush();
                fos.close();

                Intent shareIntent = new Intent(Intent.ACTION_SEND);
                shareIntent.setType("application/pdf");
                shareIntent.putExtra(Intent.EXTRA_STREAM, Uri.fromFile(cacheFile));
                shareIntent.putExtra(Intent.EXTRA_SUBJECT, "Mutilated Currency Forensic Claim Package");
                shareIntent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
                startActivity(Intent.createChooser(shareIntent, "Share Claim Dossier PDF"));
                return true;
            } catch (Exception e) {
                Log.e(TAG, "Error sharing PDF", e);
                return false;
            }
        }

        @JavascriptInterface
        public boolean shareCsv(final String csvContent, final String filename) {
            try {
                File cacheFile = new File(getCacheDir(), filename != null && !filename.isEmpty() ? filename : "IRS_Form_4684_Schedule.csv");
                FileWriter fw = new FileWriter(cacheFile);
                fw.write(csvContent);
                fw.close();

                Intent shareIntent = new Intent(Intent.ACTION_SEND);
                shareIntent.setType("text/csv");
                shareIntent.putExtra(Intent.EXTRA_STREAM, Uri.fromFile(cacheFile));
                shareIntent.putExtra(Intent.EXTRA_SUBJECT, "IRS Form 4684 Casualty Loss Schedule");
                shareIntent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
                startActivity(Intent.createChooser(shareIntent, "Share Casualty Loss Schedule"));
                return true;
            } catch (Exception e) {
                Log.e(TAG, "Error sharing CSV", e);
                return false;
            }
        }

        @JavascriptInterface
        public boolean shareImage(final String base64Data, final String filename) {
            try {
                String cleanBase64 = base64Data.replaceFirst("^data:image/[^;]+;base64,", "");
                byte[] imgBytes = Base64.decode(cleanBase64, Base64.DEFAULT);
                File cacheFile = new File(getCacheDir(), filename != null && !filename.isEmpty() ? filename : "Forensic_Photo_Card.png");
                FileOutputStream fos = new FileOutputStream(cacheFile);
                fos.write(imgBytes);
                fos.flush();
                fos.close();

                Intent shareIntent = new Intent(Intent.ACTION_SEND);
                shareIntent.setType("image/png");
                shareIntent.putExtra(Intent.EXTRA_STREAM, Uri.fromFile(cacheFile));
                shareIntent.putExtra(Intent.EXTRA_SUBJECT, "Mutilated Currency Forensic Evidence Card");
                shareIntent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
                startActivity(Intent.createChooser(shareIntent, "Share Forensic Photo Card"));
                return true;
            } catch (Exception e) {
                Log.e(TAG, "Error sharing image", e);
                return false;
            }
        }

        @JavascriptInterface
        public void copyToClipboard(final String text) {
            runOnUiThread(() -> {
                try {
                    android.content.ClipboardManager cm = (android.content.ClipboardManager) getSystemService(Context.CLIPBOARD_SERVICE);
                    if (cm != null) {
                        android.content.ClipData clip = android.content.ClipData.newPlainText("Monument of Greed", text);
                        cm.setPrimaryClip(clip);
                        Toast.makeText(MainActivity.this, "Copied to clipboard", Toast.LENGTH_SHORT).show();
                    }
                } catch (Exception e) {
                    Log.e(TAG, "Error copying to clipboard", e);
                }
            });
        }

        @JavascriptInterface
        public void showToast(final String msg) {
            runOnUiThread(() -> {
                Toast.makeText(MainActivity.this, msg, Toast.LENGTH_SHORT).show();
            });
        }

        @JavascriptInterface
        public boolean isNativeApp() {
            return true;
        }

        @JavascriptInterface
        public void vibrate(long milliseconds) {
            try {
                Vibrator v = (Vibrator) getSystemService(Context.VIBRATOR_SERVICE);
                if (v != null && v.hasVibrator()) {
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                        v.vibrate(VibrationEffect.createOneShot(milliseconds, VibrationEffect.DEFAULT_AMPLITUDE));
                    } else {
                        v.vibrate(milliseconds);
                    }
                }
            } catch (Exception e) {
                Log.e(TAG, "Vibrate error", e);
            }
        }

        private boolean isTorchOn = false;

        @JavascriptInterface
        public boolean setTorchMode(final boolean on) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                try {
                    android.hardware.camera2.CameraManager camManager = (android.hardware.camera2.CameraManager) getSystemService(Context.CAMERA_SERVICE);
                    if (camManager != null) {
                        String[] cameraIds = camManager.getCameraIdList();
                        for (String id : cameraIds) {
                            android.hardware.camera2.CameraCharacteristics chars = camManager.getCameraCharacteristics(id);
                            Boolean hasFlash = chars.get(android.hardware.camera2.CameraCharacteristics.FLASH_INFO_AVAILABLE);
                            Integer facing = chars.get(android.hardware.camera2.CameraCharacteristics.LENS_FACING);
                            if (hasFlash != null && hasFlash && facing != null && facing == android.hardware.camera2.CameraCharacteristics.LENS_FACING_BACK) {
                                camManager.setTorchMode(id, on);
                                isTorchOn = on;
                                return true;
                            }
                        }
                    }
                } catch (Exception e) {
                    Log.e(TAG, "Error setting torch mode", e);
                }
            }
            return false;
        }

        @JavascriptInterface
        public boolean toggleTorch() {
            return setTorchMode(!isTorchOn);
        }

        @JavascriptInterface
        public boolean isTorchOn() {
            return isTorchOn;
        }

        @JavascriptInterface
        public String getSystemTelemetry() {
            try {
                org.json.JSONObject obj = new org.json.JSONObject();
                obj.put("deviceModel", Build.MANUFACTURER + " " + Build.MODEL);
                obj.put("androidVersion", Build.VERSION.RELEASE);
                obj.put("sdkInt", Build.VERSION.SDK_INT);

                Intent batteryIntent = registerReceiver(null, new IntentFilter(Intent.ACTION_BATTERY_CHANGED));
                if (batteryIntent != null) {
                    int level = batteryIntent.getIntExtra(BatteryManager.EXTRA_LEVEL, -1);
                    int scale = batteryIntent.getIntExtra(BatteryManager.EXTRA_SCALE, -1);
                    float batteryPct = (level != -1 && scale != -1) ? (level * 100 / (float) scale) : -1f;
                    obj.put("batteryPct", batteryPct);
                }

                ActivityManager actMgr = (ActivityManager) getSystemService(Context.ACTIVITY_SERVICE);
                if (actMgr != null) {
                    ActivityManager.MemoryInfo memInfo = new ActivityManager.MemoryInfo();
                    actMgr.getMemoryInfo(memInfo);
                    obj.put("availMemMB", memInfo.availMem / (1024 * 1024));
                    obj.put("totalMemMB", memInfo.totalMem / (1024 * 1024));
                    obj.put("lowMemory", memInfo.lowMemory);
                }
                return obj.toString();
            } catch (Exception e) {
                return "{}";
            }
        }
    }

    private File writeBytesToFile(byte[] bytes, String envDirectory, String filename) {
        File file = null;
        try {
            File publicDir = Environment.getExternalStoragePublicDirectory(envDirectory);
            if (!publicDir.exists()) publicDir.mkdirs();
            file = new File(publicDir, filename);
            FileOutputStream fos = new FileOutputStream(file);
            fos.write(bytes);
            fos.flush();
            fos.close();
            return file;
        } catch (Exception permEx) {
            Log.w(TAG, "Public directory write restricted, saving to app internal storage", permEx);
            try {
                File appDir = getExternalFilesDir(envDirectory);
                if (appDir == null) appDir = getFilesDir();
                if (!appDir.exists()) appDir.mkdirs();
                file = new File(appDir, filename);
                FileOutputStream fos = new FileOutputStream(file);
                fos.write(bytes);
                fos.flush();
                fos.close();
                return file;
            } catch (Exception inner) {
                Log.e(TAG, "Fatal failure saving file", inner);
                return null;
            }
        }
    }

    private void checkAndRequestPermissions() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            String[] permissions = {
                android.Manifest.permission.CAMERA
            };
            boolean needsRequest = false;
            for (String perm : permissions) {
                if (checkSelfPermission(perm) != PackageManager.PERMISSION_GRANTED) {
                    needsRequest = true;
                    break;
                }
            }
            if (needsRequest) {
                requestPermissions(permissions, CAMERA_PERMISSION_CODE);
            }
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == FILE_CHOOSER_REQUEST_CODE) {
            if (filePathCallback == null) return;
            Uri[] results = null;
            if (resultCode == Activity.RESULT_OK && data != null) {
                String dataString = data.getDataString();
                if (dataString != null) {
                    results = new Uri[]{Uri.parse(dataString)};
                }
            }
            filePathCallback.onReceiveValue(results);
            filePathCallback = null;
        } else {
            super.onActivityResult(requestCode, resultCode, data);
        }
    }

    // 4. Robust Hardware Back Handler preventing unexpected sudden stops
    @Override
    public void onBackPressed() {
        if (filePathCallback != null) {
            filePathCallback.onReceiveValue(null);
            filePathCallback = null;
            return;
        }

        if (webView != null) {
            // First check if JavaScript handled closing open modals, drawers, or navigated back
            webView.evaluateJavascript("window.handleAndroidBack ? window.handleAndroidBack() : false", value -> {
                boolean handledInJs = "true".equalsIgnoreCase(value);
                if (!handledInJs) {
                    // Not handled in JS: check web history or require double-back press to exit
                    if (webView.canGoBack()) {
                        webView.goBack();
                    } else {
                        runOnUiThread(() -> {
                            new AlertDialog.Builder(MainActivity.this)
                                .setTitle("Monument of Greed")
                                .setMessage("Do you want to exit the currency salvage console?")
                                .setPositiveButton("Exit App", (dialog, which) -> finishAffinity())
                                .setNegativeButton("Stay", (dialog, which) -> dialog.dismiss())
                                .show();
                        });
                    }
                }
            });
        } else {
            super.onBackPressed();
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (webView != null) {
            webView.onPause();
            webView.pauseTimers();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (webView != null) {
            webView.onResume();
            webView.resumeTimers();
        }
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        if (webView != null) {
            webView.saveState(outState);
        }
    }

    @Override
    protected void onRestoreInstanceState(Bundle savedInstanceState) {
        super.onRestoreInstanceState(savedInstanceState);
        if (webView != null) {
            webView.restoreState(savedInstanceState);
        }
    }

    @Override
    protected void onDestroy() {
        if (webView != null) {
            webView.loadUrl("about:blank");
            webView.stopLoading();
            webView.clearHistory();
            webView.removeAllViews();
            webView.destroy();
            webView = null;
        }
        super.onDestroy();
    }
}
