# Monument of Greed 💵💔

> **"Unusable money issues solved."**

Monument of Greed is a professional utility application engineered to help individuals and businesses assess, catalog, and redeem mutilated, torn, or damaged paper and polymer banknotes from around the world. Whether dealing with United States Dollars (USD), Euros (EUR), British Pounds (GBP), Jamaican Dollars (JMD), Canadian Dollars (CAD), Australian Dollars (AUD), or Japanese Yen (JPY), Monument of Greed guides you through verified statutory redemption channels to salvage the full face value of your currency.

---

## 🏛️ The Real-World Banking Solution

A torn banknote is **not** worthless paper. Most global central banks maintain formal legal standards and specialized reclamation divisions dedicated to replacing damaged legal tender free of charge.

### The Universal Global Redemption Rules
1. **The >50% Surface Area Standard (Global Rule):**
   * **United States (31 CFR Part 100):** If more than 50% of a genuine USD note is present, it is redeemable at 100% face value through the Bureau of Engraving and Printing (BEP) or participating Federal Reserve member banks. If 50% or less remains, redemption requires a sworn affidavit proving the missing portion was totally destroyed.
   * **Eurozone (ECB Decision 2013/10):** Euro banknotes are replaced if more than 50% of the banknote surface is presented, or if 50% or less is presented but proof is provided that the missing parts were destroyed.
   * **United Kingdom (Currency & Bank Notes Act):** The Bank of England pays face value on damaged polymer or paper notes if more than half of the original note remains, or if satisfied the remaining portion has been destroyed.
   * **Jamaica (Bank of Jamaica Act Sec 28):** Bank of Jamaica redeems genuine polymer and paper notes where greater than 50% of the surface area remains with at least one complete serial number.
   * **Japan (Bank of Japan Act):** BOJ exchanges notes at:
     * **100% Value:** If 2/3 or more of the original banknote remains.
     * **50% Value:** If 2/5 to less than 2/3 of the banknote remains.
     * **0% Value:** If less than 2/5 remains.
2. **Serial Numbers & Security Features:**
   * Central and commercial banks require at least one complete, unadulterated serial number matching the series.
   * Security elements—such as watermarks, polymer transparent windows, metallic threads, and color-shifting ink—must show authentic physical composition.
3. **Redemption Channels:**
   * **Over-the-Counter:** Commercial banks exchange moderately damaged notes (torn edges, soiled, taped) over the counter for account holders.
   * **Central Bank Direct Filing:** Severely damaged, charred, or fragmented notes are submitted directly to the national central bank's mutilated currency division with an official claim packet.

---

## 📱 App Capabilities

* 📷 **Optical Surface Area Scanner:** High-precision computer vision pipeline using HTML5 Canvas 2D and camera capture. Analyzes pixel luminance, color contrast, and contour geometry to calculate the exact percentage of surface area remaining against official banknote aspect ratios.
* 📐 **Interactive Grid Audit:** A manual 100-cell precision overlay grid allowing users to trace torn edges and calculate remaining surface percentage when lighting or extreme charring prevents automated contour extraction.
* 📚 **Global Redemption Database:** Comprehensive, statutory redemption protocols for 12+ international currencies, including step-by-step instructions, official claim forms (BEP Form 5283, BoE Claim Form, ECB Mutilated Banknote Request, BOJ Exchange Form), and verbatim teller talk tracks.
* 📍 **Central Bank & Teller Locator:** Directory of central bank redemption windows, regional Federal Reserve banks, and major commercial institutions with verified addresses, phone numbers, and direct Google Maps navigation links.
* 📄 **Official Claim Dossier Generator:** Compiles banknote fragment imagery, calculated surface area percentage, serial numbers, security feature audits, and user declarations into a professional, printable redemption dossier ready for bank presentation or postal submission.
* 🎨 **5 Tactile Live Themes:**
  * **Warm Clay & Peach:** Inspired by modern creative tool interfaces with soft terracotta cards and vibrant circular action triggers.
  * **Vault Emerald:** Deep banking green with high-contrast mint accents.
  * **Obsidian OLED:** True black (`#000000`) with high-legibility cyan borders.
  * **Royal Gold & Navy:** Traditional sovereign treasury aesthetic.
  * **Cyber Mint:** High-voltage slate and neon mint styling.

---

## 🔒 Privacy & Local Processing

* **Zero Cloud Dependence:** All optical edge detection, image thresholding, and surface area calculations run locally in the browser/WebView sandbox.
* **Camera Privacy:** Captured banknote images never leave your local device.
* **No Telemetry / No Tracking:** Your currency holdings, serial numbers, and claim dossiers remain completely private on your hardware.

---

## 🚀 Native Android Standalone APK Build

Monument of Greed is packaged as a standalone Android APK using hardware acceleration and local assets.

```bash
# Build the native Android APK
cd android_build
bash build_apk.sh

# Install directly to an Android device or emulator
adb install -r monument_of_greed.apk
```

---

## 💻 Web Application Usage

Run the web application locally with any static web server:

```bash
cd web_app
python3 -m http.server 8080
# Open http://localhost:8080 in your browser
```

---

## ⚖️ Disclaimer

*Monument of Greed provides automated optical measurements and statutory banking guidance for educational and claim preparation purposes. Final redemption determination is made solely by the authorized central banking institution or commercial bank in accordance with local currency laws.*

*Licensed under the Alumungandr Master Charter © 2026. All rights reserved.*
