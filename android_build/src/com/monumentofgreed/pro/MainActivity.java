package com.monumentofgreed.pro;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.print.PrintAttributes;
import android.print.PrintDocumentAdapter;
import android.print.PrintManager;
import android.util.Log;
import android.view.View;
import android.webkit.ConsoleMessage;
import android.webkit.JavascriptInterface;
import android.webkit.JsResult;
import android.webkit.JsPromptResult;
import android.webkit.PermissionRequest;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends Activity {
    private static final String TAG = "MOG_PRO";
    private WebView webView;
    private ValueCallback<Uri[]> filePathCallback;
    private static final int FILE_CHOOSER_REQUEST_CODE = 2001;
    private static final int CAMERA_PERMISSION_CODE = 2002;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Immersive UI setup compatible with freeform and multi-window
        getWindow().getDecorView().setSystemUiVisibility(
            View.SYSTEM_UI_FLAG_LAYOUT_STABLE
            | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
        );

        // Relax file URI exposure check for easy internal PDF sharing across Android versions
        try {
            java.lang.reflect.Method m = android.os.StrictMode.class.getMethod("disableDeathOnFileUriExposure");
            m.invoke(null);
        } catch (Exception ignored) {}

        webView = new WebView(this);
        setContentView(webView);

        configureWebView();
        checkAndRequestPermissions();

        // Load local web application assets
        webView.loadUrl("file:///android_asset/web_app/index.html");
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
        });

        webView.setWebChromeClient(new WebChromeClient() {
            // Forward all JavaScript console messages to Logcat
            @Override
            public boolean onConsoleMessage(ConsoleMessage cm) {
                Log.d("MOG_WEB", cm.message() + " -- From line "
                    + cm.lineNumber() + " of "
                    + cm.sourceId());
                return true;
            }

            // Automatic grant of HTML5 camera/audio permissions inside WebView
            @Override
            public void onPermissionRequest(final PermissionRequest request) {
                runOnUiThread(() -> {
                    request.grant(request.getResources());
                });
            }

            // JavaScript alert dialog that doesn't freeze the WebView
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

            // File Chooser for gallery / photo upload
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
                    startActivityForResult(Intent.createChooser(intent, "Select Banknote Image"), FILE_CHOOSER_REQUEST_CODE);
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
                byte[] pdfBytes = android.util.Base64.decode(base64Data, android.util.Base64.DEFAULT);
                String safeName = (filename != null && !filename.isEmpty()) ? filename : "Monument_Claim_Package.pdf";
                java.io.File pdfFile = null;

                try {
                    java.io.File downloadDir = android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_DOWNLOADS);
                    if (!downloadDir.exists()) downloadDir.mkdirs();
                    pdfFile = new java.io.File(downloadDir, safeName);
                    java.io.FileOutputStream fos = new java.io.FileOutputStream(pdfFile);
                    fos.write(pdfBytes);
                    fos.flush();
                    fos.close();
                } catch (Exception permEx) {
                    Log.w(TAG, "Public download write restricted, falling back to app external files", permEx);
                    java.io.File appDownloadDir = getExternalFilesDir(android.os.Environment.DIRECTORY_DOWNLOADS);
                    if (appDownloadDir == null) appDownloadDir = getFilesDir();
                    if (!appDownloadDir.exists()) appDownloadDir.mkdirs();
                    pdfFile = new java.io.File(appDownloadDir, safeName);
                    java.io.FileOutputStream fos = new java.io.FileOutputStream(pdfFile);
                    fos.write(pdfBytes);
                    fos.flush();
                    fos.close();
                }

                final java.io.File savedFile = pdfFile;
                runOnUiThread(() -> {
                    Toast.makeText(MainActivity.this, "📄 Courtroom PDF Dossier Saved: " + savedFile.getName(), Toast.LENGTH_LONG).show();
                });
                Log.d(TAG, "PDF successfully saved to: " + savedFile.getAbsolutePath());
                return true;
            } catch (Exception e) {
                Log.e(TAG, "Error saving PDF to storage", e);
                return false;
            }
        }

        @JavascriptInterface
        public boolean sharePdf(final String base64Data, final String filename) {
            try {
                byte[] pdfBytes = android.util.Base64.decode(base64Data, android.util.Base64.DEFAULT);
                java.io.File cacheFile = new java.io.File(getCacheDir(), filename != null && !filename.isEmpty() ? filename : "Monument_Claim.pdf");
                java.io.FileOutputStream fos = new java.io.FileOutputStream(cacheFile);
                fos.write(pdfBytes);
                fos.flush();
                fos.close();

                Intent shareIntent = new Intent(Intent.ACTION_SEND);
                shareIntent.setType("application/pdf");
                Uri fileUri = Uri.fromFile(cacheFile);
                shareIntent.putExtra(Intent.EXTRA_STREAM, fileUri);
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
                android.os.Vibrator v = (android.os.Vibrator) getSystemService(Context.VIBRATOR_SERVICE);
                if (v != null && v.hasVibrator()) {
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                        v.vibrate(android.os.VibrationEffect.createOneShot(milliseconds, android.os.VibrationEffect.DEFAULT_AMPLITUDE));
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

    @Override
    public void onBackPressed() {
        if (filePathCallback != null) {
            filePathCallback.onReceiveValue(null);
            filePathCallback = null;
            return;
        }
        if (webView != null && webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
