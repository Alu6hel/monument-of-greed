import fs from 'fs';

const NEW_KEYS = {
  databaseSubtitle: {
    en: "Official statutory banking codes, redemption thresholds, and claim procedures worldwide",
    hi: "दुनिया भर में आधिकारिक वैधानिक बैंकिंग कोड, मोचन सीमाएं और दावा प्रक्रियाएं",
    es: "Códigos bancarios estatutarios oficiales, umbrales de canje y procedimientos de reclamo en todo el mundo",
    de: "Offizielle gesetzliche Bankencodes, Erstattungsgrenzen und Antragsverfahren weltweit",
    fr: "Codes bancaires statutaires officiels, seuils de remboursement et procédures de réclamation dans le monde entier",
    ja: "世界各国の公式法定銀行コード、引換基準値、および請求手続き",
    zh: "全球官方法定银行法规、兑付标准门槛及申报程序"
  },
  dbFilterCaribbean: {
    en: "Caribbean",
    hi: "कैरेबियन",
    es: "Caribe",
    de: "Karibik",
    fr: "Caraïbes",
    ja: "カリブ海諸国",
    zh: "加勒比地区"
  },
  locatorSubtitle: {
    en: "Verified redemption windows, Federal Reserve cash offices, and commercial depository branches",
    hi: "सत्यापित मोचन काउंटर, फेडरल रिजर्व कैश कार्यालय और वाणिज्यिक डिपॉजिटरी शाखाएं",
    es: "Ventanillas de canje verificadas, oficinas de efectivo de la Reserva Federal y sucursales depositarias comerciales",
    de: "Verifizierte Erstattungsstellen, Federal Reserve Bargeldbüros und Geschäftsbankfilialen",
    fr: "Guichets de remboursement vérifiés, bureaux d'espèces de la Réserve fédérale et succursales dépositaires commerciales",
    ja: "確認済み引換窓口、連邦準備銀行現金取扱窓口、および商業預金取扱銀行支店",
    zh: "经认证的兑换柜台、美联储现金业务窗口及商业存款银行网点"
  },
  databaseScopeBannerText: {
    en: "Displaying statutory redemption codex for",
    hi: "वैधानिक मोचन कोडेक्स प्रदर्शित कर रहा है:",
    es: "Mostrando el código estatutario de canje para",
    de: "Gesetzlicher Erstattungskodex wird angezeigt für",
    fr: "Affichage du codex statutaire de remboursement pour",
    ja: "法定引換法典を表示中:",
    zh: "正在显示以下法定兑付规范："
  },
  locatorScopeBannerText: {
    en: "Showing verified redemption windows for",
    hi: "के लिए सत्यापित मोचन काउंटर दिखा रहा है:",
    es: "Mostrando ventanillas de canje verificadas para",
    de: "Verifizierte Erstattungsstellen werden angezeigt für",
    fr: "Affichage des guichets de remboursement vérifiés pour",
    ja: "確認済み引換窓口を表示中:",
    zh: "正在显示以下经认证的兑换网点："
  },
  btnFocusCodex: {
    en: "🔒 Focus {code} Codex",
    hi: "🔒 {code} कोडेक्स पर केंद्रित करें",
    es: "🔒 Enfocar Código {code}",
    de: "🔒 Auf {code}-Kodex fokussieren",
    fr: "🔒 Cibler le Codex {code}",
    ja: "🔒 {code} 法典に絞り込み",
    zh: "🔒 聚焦 {code} 规范"
  },
  btnViewOtherCurrencies: {
    en: "🌐 View Other Currencies",
    hi: "🌐 अन्य मुद्राएं देखें",
    es: "🌐 Ver Otras Monedas",
    de: "🌐 Andere Währungen anzeigen",
    fr: "🌐 Voir les Autres Devises",
    ja: "🌐 他の通貨を表示",
    zh: "🌐 查看其他货币"
  },
  btnFocusLocator: {
    en: "🔒 Focus {code} Windows",
    hi: "🔒 {code} काउंटरों पर केंद्रित करें",
    es: "🔒 Enfocar Ventanillas {code}",
    de: "🔒 Auf {code}-Filialen fokussieren",
    fr: "🔒 Cibler les Guichets {code}",
    ja: "🔒 {code} 窓口に絞り込み",
    zh: "🔒 聚焦 {code} 网点"
  },
  btnViewAllCurrencies: {
    en: "🌐 View All Currencies",
    hi: "🌐 सभी मुद्राएं देखें",
    es: "🌐 Ver Todas las Monedas",
    de: "🌐 Alle Währungen anzeigen",
    fr: "🌐 Voir Toutes les Devises",
    ja: "🌐 すべての通貨を表示",
    zh: "🌐 查看所有货币"
  }
};

let i18nContent = fs.readFileSync('web_app/i18n.js', 'utf8');

// For each language, inject the new keys before the closing brace of that language object
const LOCALES = ['en', 'hi', 'es', 'de', 'fr', 'ja', 'zh'];

LOCALES.forEach(loc => {
  let injection = `\n      // Enriched Database & Scope Keys (${loc})\n`;
  for (const [key, map] of Object.entries(NEW_KEYS)) {
    injection += `      ${key}: ${JSON.stringify(map[loc])},\n`;
  }

  // Find the location in i18nContent:
  // Each locale in TRANSLATIONS ends before the next locale or the closing of TRANSLATIONS:
  // e.g. "    en: {" ... "\n    },"
  // Let's find "tellerScriptTitle:" which is near the end of each locale object in i18n.js!
  const regex = new RegExp(`(${loc}:\\s*\\{[\\s\\S]*?tellerScriptTitle:\\s*['\"][^'\"]+['\"][^\\n]*\\n)`, 'm');
  const match = i18nContent.match(regex);
  if (match) {
    i18nContent = i18nContent.replace(match[0], match[0] + injection);
    console.log(`Injected keys into locale: ${loc}`);
  } else {
    console.error(`Could not find anchor for locale: ${loc}`);
  }
});

fs.writeFileSync('web_app/i18n.js', i18nContent, 'utf8');
console.log("Successfully updated web_app/i18n.js!");
