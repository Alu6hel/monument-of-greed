import fs from 'fs';

const NEW_KEYS = {
  assessDamagedNote: {
    en: "ASSESS DAMAGED NOTE",
    hi: "क्षतिग्रस्त बैंकनोट का आकलन करें",
    es: "EVALUAR BILLETE DAÑADO",
    de: "BESCHÄDIGTE BANKNOTE BEWERTEN",
    fr: "ÉVALUER LE BILLET ENDOMMAGÉ",
    ja: "損傷紙幣の査定",
    zh: "评估残缺污损纸币"
  },
  statutoryAudit: {
    en: "STATUTORY AUDIT",
    hi: "वैधानिक लेखापरीक्षा",
    es: "AUDITORÍA ESTATUTARIA",
    de: "GESETZLICHE PRÜFUNG",
    fr: "AUDIT STATUTAIRE",
    ja: "法定監査",
    zh: "法定核验"
  },
  tellerHesitatesHint: {
    en: "If the teller hesitates, politely ask them to refer to their internal currency operations manual under Mutilated Currency / Fragment Exchange.",
    hi: "यदि टेलर झिझकता है, तो विनम्रतापूर्वक उनसे विकृत मुद्रा / टुकड़ा विनिमय के तहत अपने आंतरिक मुद्रा संचालन मैनुअल को देखने का अनुरोध करें।",
    es: "Si el cajero duda, pídale cortésmente que consulte su manual interno de operaciones de divisas en la sección de Moneda Mutilada / Canje de Fracciones.",
    de: "Zögert der Schalterbeamte, bitten Sie ihn höflich, in der internen Dienstanweisung unter Beschädigtes Bargeld / Banknotenumtausch nachzuschlagen.",
    fr: "Si le guichetier hésite, demandez-lui poliment de consulter ses procédures internes dans la section Monnaie Mutilée / Échange de Coupures.",
    ja: "窓口係が躊躇した場合は、行内業務マニュアルの「損傷紙幣／分割紙幣の引換規定」を参照するよう丁寧にお伝えください。",
    zh: "若柜员犹豫，请礼貌地请其查阅银行内部《残缺污损人民币/外币兑换管理办法》相关规定。"
  },
  tellerChecklistHeader: {
    en: "CHECKLIST TO PRESENT:",
    hi: "प्रस्तुत करने हेतु चेकलिस्ट:",
    es: "LISTA DE CONTROL PARA PRESENTAR:",
    de: "VORZULEGENDE PRÜFLISTE:",
    fr: "DOCUMENTS À PRÉSENTER :",
    ja: "提示チェックリスト:",
    zh: "办理出示清单："
  },
  tellerChecklist1: {
    en: "Damaged banknote secured in a clear protective sleeve (do not apply scotch tape to torn edges).",
    hi: "क्षतिग्रस्त बैंकनोट पारदर्शी सुरक्षात्मक स्लीव में सुरक्षित (फटे किनारों पर चिपकने वाली टेप न लगाएं)।",
    es: "Billete dañado asegurado en una funda protectora transparente (no aplique cinta adhesiva en los bordes rotos).",
    de: "Beschädigte Banknote in transparenter Schutzhülle gesichert (kein Klebeband auf Risskanten kleben).",
    fr: "Billet endommagé sécurisé dans une pochette transparente (ne pas appliquer de ruban adhésif sur les déchirures).",
    ja: "透明な保護スリーブに収められた損傷紙幣（破れ目にセロハンテープを貼らないでください）。",
    zh: "装入透明保护袋内的破损纸币（切勿在撕裂边缘粘贴透明胶带）。"
  },
  tellerChecklist2: {
    en: "Your government-issued photo ID (for commercial bank account holder verification).",
    hi: "आपकी सरकार द्वारा जारी फोटो पहचान पत्र (वाणिज्यिक बैंक खाताधारक सत्यापन के लिए)।",
    es: "Su identificación oficial con fotografía (para verificación de titularidad de cuenta bancaria comercial).",
    de: "Ihr amtlicher Lichtbildausweis (zur Überprüfung als Geschäftsbank-Kontoinhaber).",
    fr: "Votre pièce d'identité officielle avec photo (pour vérification du titulaire du compte bancaire commercial).",
    ja: "公的機関発行の顔写真付き身分証明書（預金口座名義人の本人確認用）。",
    zh: "政府颁发的有效身份证件（用于商业银行账户持有人身份核验）。"
  },
  tellerChecklist3: {
    en: "Printed Claim Dossier generated from Monument of Greed showing verified surface area exceeding 50%.",
    hi: "Monument of Greed से उत्पन्न मुद्रित क्लेम डोजियर जिसमें 50% से अधिक सत्यापित सतह क्षेत्र दिखाया गया है।",
    es: "Expediente de reclamación impreso generado desde Monument of Greed que demuestra un área superficial verificada superior al 50%.",
    de: "Ausgedrucktes Schadensdossier aus Monument of Greed mit nachgewiesener Restfläche von über 50 %.",
    fr: "Dossier de réclamation imprimé généré depuis Monument of Greed attestant d'une surface vérifiée supérieure à 50%.",
    ja: "残存面積が50%超であることを証明する、Monument of Greedで生成された印刷済み申請書類。",
    zh: "从 Monument of Greed 生成并打印的理赔卷宗，证明残留面积已超过50%。"
  },
  onboardingTitle: {
    en: "Don't Panic, It's Still Money!",
    hi: "घबराएं नहीं, यह अभी भी असली पैसा है!",
    es: "¡No se preocupe, sigue siendo dinero!",
    de: "Keine Panik, es ist immer noch Geld!",
    fr: "Pas de panique, c'est toujours de l'argent !",
    ja: "ご安心ください、まだ立派なお金です！",
    zh: "别慌，它依然具备法定货币价值！"
  },
  onboardingSub: {
    en: "Official Bearer Protection Guide",
    hi: "आधिकारिक धारक सुरक्षा गाइड",
    es: "Guía oficial de protección al portador",
    de: "Offizieller Leitfaden zum Inhaberschutz",
    fr: "Guide officiel de protection du porteur",
    ja: "公式所持者保護ガイド",
    zh: "持有人权益法定保障指南"
  },
  onboardingLead: {
    en: "Under central bank laws worldwide, genuine currency never loses its value simply because it is damaged.",
    hi: "दुनिया भर में केंद्रीय बैंक कानूनों के तहत, वास्तविक मुद्रा केवल क्षतिग्रस्त होने के कारण अपना मूल्य नहीं खोती है।",
    es: "Bajo las leyes de los bancos centrales de todo el mundo, la moneda auténtica nunca pierde su valor simplemente por estar dañada.",
    de: "Nach den Gesetzen der Zentralbanken weltweit verliert echtes Geld seinen Wert nicht allein dadurch, dass es beschädigt ist.",
    fr: "Selon les lois des banques centrales du monde entier, la monnaie authentique ne perd jamais sa valeur simplement parce qu'elle est endommagée.",
    ja: "世界各国の法において、真正な紙幣は損傷しているという理由だけでその価値を失うことはありません。",
    zh: "根据全球各国央行法规，真币绝不会仅仅因为受到物理损坏而丧失法定面值。"
  },
  onboardingStep1Title: {
    en: "Snap or Upload",
    hi: "फोटो लें या अपलोड करें",
    es: "Fotografiar o Subir",
    de: "Fotografieren oder Hochladen",
    fr: "Photographier ou Téléverser",
    ja: "撮影またはアップロード",
    zh: "拍照或上传"
  },
  onboardingStep1Desc: {
    en: "Take a quick photo of your damaged banknote on a dark, flat table.",
    hi: "एक गहरे, सपाट मेज पर अपने क्षतिग्रस्त बैंकनोट की त्वरित तस्वीर लें।",
    es: "Tome una foto rápida de su billete dañado sobre una mesa oscura y plana.",
    de: "Machen Sie ein schnelles Foto Ihrer beschädigten Banknote auf einem dunklen, flachen Tisch.",
    fr: "Prenez une photo de votre billet endommagé sur une table sombre et plane.",
    ja: "暗い色の平らな机の上に置き、損傷紙幣の写真を撮影してください。",
    zh: "将残缺纸币平放在深色桌面上，快速拍摄清晰照片。"
  },
  onboardingStep2Title: {
    en: "The 50% Rule",
    hi: "50% का नियम",
    es: "La Regla del 50%",
    de: "Die 50%-Regel",
    fr: "La Règle des 50%",
    ja: "50%基準ルール",
    zh: "法定50%标准"
  },
  onboardingStep2Desc: {
    en: "Our offline scanner checks if you have more than half of the original note intact.",
    hi: "हमारा ऑफलाइन स्कैनर जांचता है कि क्या आपके पास मूल नोट का आधे से अधिक हिस्सा बरकरार है।",
    es: "Nuestro escáner sin conexión comprueba si conserva más de la mitad del billete original intacto.",
    de: "Unser Offline-Scanner prüft, ob mehr als die Hälfte der Originalnote intakt ist.",
    fr: "Notre scanner hors ligne vérifie si vous possédez plus de la moitié du billet original intact.",
    ja: "オフラインスキャナーが、原紙の半分以上が残存しているかを精密に判定します。",
    zh: "本地离线扫描仪将精密核验您的纸币完整面积是否超过原始大小的半数。"
  },
  onboardingStep3Title: {
    en: "100% Cash Back",
    hi: "100% नकद वापसी",
    es: "100% Devolución en Efectivo",
    de: "100% Barauszahlung",
    fr: "100% Remboursement en Espèces",
    ja: "100% 全額現金換金",
    zh: "100% 全额现金兑付"
  },
  onboardingStep3Desc: {
    en: "If >50% remains, any commercial bank will exchange it for crisp fresh cash!",
    hi: "यदि 50% से अधिक शेष है, तो कोई भी वाणिज्यिक बैंक इसे नए नकदी में बदल देगा!",
    es: "¡Si queda más del 50%, cualquier banco comercial lo cambiará por dinero en efectivo nuevo!",
    de: "Wenn mehr als 50% übrig sind, tauscht jede Geschäftsbank die Note gegen frisches Bargeld um!",
    fr: "S'il reste plus de 50%, toute banque commerciale l'échangera contre des espèces neuves !",
    ja: "50%超が残っていれば、あらゆる商業銀行で新品の現金と交換できます！",
    zh: "只要剩余面积超过50%，任何商业银行网点均依法为您全额兑换崭新现钞！"
  },
  onboardingGoldenRuleLabel: {
    en: "Golden Rule:",
    hi: "स्वर्ण नियम:",
    es: "Regla de Oro:",
    de: "Goldene Regel:",
    fr: "Règle d'Or :",
    ja: "最重要ルール:",
    zh: "黄金铁律："
  },
  onboardingGoldenRuleText: {
    en: "Never use scotch tape or glue directly on torn banknote edges! Keep your pieces safe in a clean envelope or plastic sleeve.",
    hi: "फटे बैंकनोट के किनारों पर कभी भी चिपकने वाली टेप या गोंद का उपयोग न करें! अपने टुकड़ों को साफ लिफाफे या प्लास्टिक स्लीव में सुरक्षित रखें।",
    es: "¡Nunca use cinta adhesiva o pegamento en los bordes rotos del billete! Guarde sus fragmentos en un sobre limpio o funda de plástico.",
    de: "Verwenden Sie niemals Klebeband oder Klebstoff auf den Risskanten! Bewahren Sie Teile in einem sauberen Umschlag oder Schutzumschlag auf.",
    fr: "N'utilisez jamais de ruban adhésif ou de colle sur les bords déchirés ! Conservez les morceaux dans une enveloppe propre ou une pochette.",
    ja: "破れた紙幣の縁にセロハンテープや接着剤を貼らないでください！清潔な封筒やプラスチックスリーブに大切に保管してください。",
    zh: "切勿在破损纸币边缘粘贴任何胶带或胶水！请将所有碎片妥善放入干净信封或塑料保护袋中。"
  },
  btnTrySampleBill: {
    en: "🧪 Try Sample Damaged Bill",
    hi: "🧪 नमूना क्षतिग्रस्त नोट आजमाएं",
    es: "🧪 Probar Billete de Muestra Dañado",
    de: "🧪 Muster-Banknote ausprobieren",
    fr: "🧪 Essayer un Billet Spécimen Endommagé",
    ja: "🧪 サンプル損傷紙幣で試す",
    zh: "🧪 体验示例残损纸币"
  },
  btnStartAssessment: {
    en: "🚀 Start My Free Assessment",
    hi: "🚀 मेरा निःशुल्क मूल्यांकन शुरू करें",
    es: "🚀 Iniciar Mi Evaluación Gratuita",
    de: "🚀 Kostenlose Bewertung starten",
    fr: "🚀 Démarrer Mon Évaluation Gratuite",
    ja: "🚀 無料査定を開始する",
    zh: "🚀 开始免费核验"
  },
  giftModalTitle: {
    en: "Complimentary Mutilated Banknote Recovery Kit",
    hi: "निःशुल्क विकृत बैंकनोट रिकवरी किट",
    es: "Kit Gratuito de Recuperación de Billetes Mutilados",
    de: "Kostenloses Wiederherstellungsset für beschädigte Banknoten",
    fr: "Kit Gratuit de Récupération de Billets Mutilés",
    ja: "損傷紙幣回収キット（無償提供）",
    zh: "免费残缺污损钞票兑领服务包"
  },
  giftModalSub: {
    en: "$49 Statutory Tool Unlocked Free of Charge",
    hi: "$49 वैधानिक उपकरण निःशुल्क अनलॉक किया गया",
    es: "Herramienta legal de $49 desbloqueada gratis",
    de: "Gesetzliches Werkzeug im Wert von 49 $ kostenlos freigeschaltet",
    fr: "Outil réglementaire d'une valeur de 49 $ débloqué gratuitement",
    ja: "49ドル相当の法定回収ツールを無料開放",
    zh: "价值$49的法定兑付工具已免费解锁"
  },
  giftWelcomeAlert: {
    en: "Under 31 CFR § 100 and ECB Decision 2013/10, central banks are legally mandated to replace damaged notes. Use this free packet at any commercial bank counter or mail it directly to the Treasury forensic lab.",
    hi: "31 CFR § 100 और ईसीबी निर्णय 2013/10 के तहत, केंद्रीय बैंक क्षतिग्रस्त नोटों को बदलने के लिए कानूनी रूप से बाध्य हैं। इस मुफ्त पैकेट का उपयोग किसी भी वाणिज्यिक बैंक काउंटर पर करें या इसे सीधे ट्रेजरी फोरेंसिक लैब को भेजें।",
    es: "Conforme a 31 CFR § 100 y la Decisión BCE 2013/10, los bancos centrales están obligados por ley a reemplazar billetes dañados. Utilice este paquete gratuito en cualquier ventanilla bancaria o envíelo al laboratorio forense del Tesoro.",
    de: "Gemäß 31 CFR § 100 und EZB-Beschluss 2013/10 sind Zentralbanken gesetzlich verpflichtet, beschädigte Banknoten umzutauschen. Nutzen Sie dieses kostenlose Paket an jedem Bankschalter oder senden Sie es an das Labor der Zentralbank.",
    fr: "Selon le 31 CFR § 100 et la décision BCE 2013/10, les banques centrales sont tenues de remplacer les billets endommagés. Utilisez ce dossier gratuit à tout guichet bancaire ou envoyez-le directement au laboratoire de la banque centrale.",
    ja: "米連邦規則第31編第100条およびECB決定2013/10に基づき、中央銀行は損傷紙幣を交換する法的義務を負っています。本キットを商業銀行窓口で提示するか、中央銀行鑑定課へ直接郵送してください。",
    zh: "依据美国联邦法规第31篇第100条及欧洲央行2013/10号决议，中央银行依法承担残缺纸币兑换义务。您可在任何商业银行柜台出示本工具包，或直接邮寄至官方鉴定实验室。"
  },
  btnGotItThanks: {
    en: "Got It, Thanks!",
    hi: "समझ गया, धन्यवाद!",
    es: "¡Entendido, gracias!",
    de: "Verstanden, danke!",
    fr: "Compris, merci !",
    ja: "了解しました",
    zh: "明白了，谢谢！"
  },
  vaultEmptyTitle: {
    en: "Your Salvage Vault is Empty",
    hi: "आपकी साल्वेज वॉल्ट खाली है",
    es: "Su Bóveda de Rescate está Vacía",
    de: "Ihr Bergungstresor ist leer",
    fr: "Votre Coffre de Récupération est Vide",
    ja: "保管庫は空です",
    zh: "您的追索保险箱暂无记录"
  },
  vaultEmptyDesc: {
    en: 'Scan a mutilated banknote with the camera or grid audit, then click "Save to My Vault" in the Claim Dossier to track your redemption here.',
    hi: 'कैमरे या ग्रिड ऑडिट से विकृत बैंकनोट को स्कैन करें, फिर मोचन को ट्रैक करने के लिए क्लेम डोजियर में "मेरी वॉल्ट में सहेजें" पर क्लिक करें।',
    es: 'Escanee un billete mutilado con la cámara o auditoría de cuadrícula, luego haga clic en "Guardar en Mi Bóveda" en el Expediente de Reclamo.',
    de: 'Scannen Sie eine beschädigte Banknote mit der Kamera oder Rasterprüfung und klicken Sie im Schadensdossier auf "In meinem Tresor speichern".',
    fr: 'Numérisez un billet mutilé avec la caméra ou la grille, puis cliquez sur "Enregistrer dans Mon Coffre" dans le Dossier de Réclamation.',
    ja: 'カメラまたはグリッド監査で損傷紙幣をスキャンし、申請書類で「保管庫に保存」をクリックして進捗を記録してください。',
    zh: '使用相机或网格核验扫描残缺纸币，并在索赔卷宗中点击“保存至保险箱”以持续追踪兑领进展。'
  },
  officialClaimFormTitle: {
    en: "Official Claim Form Viewer",
    hi: "आधिकारिक दावा प्रपत्र दर्शक",
    es: "Visor de Formulario Oficial de Reclamo",
    de: "Offizielles Antragsformular-Anzeige",
    fr: "Visualiseur de Formulaire Officiel de Réclamation",
    ja: "公式請求書ビューア",
    zh: "官方索赔申报表查看器"
  },
  btnPrintFormTemplate: {
    en: "Print Form Template",
    hi: "फॉर्म टेम्प्लेट प्रिंट करें",
    es: "Imprimir Plantilla de Formulario",
    de: "Formularvorlage drucken",
    fr: "Imprimer le Modèle de Formulaire",
    ja: "申請書式を印刷",
    zh: "打印申报表模版"
  },
  btnGotIt: {
    en: "Got It",
    hi: "समझ गया",
    es: "Entendido",
    de: "Verstanden",
    fr: "Compris",
    ja: "了解",
    zh: "知道了"
  },
  themeWarmClay: {
    en: "Warm Clay & Peach",
    hi: "वार्म क्ले और पीच",
    es: "Arcilla Cálida y Melocotón",
    de: "Warmes Terrakotta & Pfirsich",
    fr: "Argile Chaude & Pêche",
    ja: "ウォームクレイ＆ピーチ",
    zh: "暖陶粉桃"
  },
  themeVaultEmerald: {
    en: "Vault Emerald",
    hi: "वॉल्ट एमराल्ड",
    es: "Esmeralda de Bóveda",
    de: "Tresor-Smaragd",
    fr: "Émeraude de Coffre",
    ja: "ボルトエメラルド",
    zh: "金库翡翠"
  },
  themeObsidian: {
    en: "Obsidian OLED",
    hi: "ओब्सीडियन ओएलईडी",
    es: "Obsidiana OLED",
    de: "Obsidian OLED",
    fr: "Obsidienne OLED",
    ja: "黒曜石OLED",
    zh: "黑曜深渊OLED"
  },
  themeRoyalGold: {
    en: "Royal Gold & Navy",
    hi: "रॉयल गोल्ड और नेवी",
    es: "Oro Real y Marino",
    de: "Königliches Gold & Marine",
    fr: "Or Royal & Marine",
    ja: "ロイヤルゴールド＆ネイビー",
    zh: "皇家金蓝"
  },
  themeCyberMint: {
    en: "Cyber Mint",
    hi: "साइबर मिंट",
    es: "Ciber Menta",
    de: "Cyber-Minze",
    fr: "Cyber Menthe",
    ja: "サイバーミント",
    zh: "赛博薄荷"
  }
};

let i18nContent = fs.readFileSync('web_app/i18n.js', 'utf8');

const LOCALES = ['en', 'hi', 'es', 'de', 'fr', 'ja', 'zh'];

LOCALES.forEach(loc => {
  let injection = `\n      // Additional Enriched Keys (${loc})\n`;
  for (const [key, map] of Object.entries(NEW_KEYS)) {
    injection += `      ${key}: ${JSON.stringify(map[loc])},\n`;
  }

  // Inject before "btnViewAllCurrencies:" or right before "    }," at the end of each locale
  // Let's find "btnViewAllCurrencies:" in this locale:
  const localeRegex = new RegExp(`(${loc}:\\s*\\{[\\s\\S]*?btnViewAllCurrencies:\\s*['\"][^'\"]+['\"][^\\n]*\\n)`, 'm');
  const match = i18nContent.match(localeRegex);
  if (match) {
    i18nContent = i18nContent.replace(match[0], match[0] + injection);
    console.log(`Injected additional keys into locale: ${loc}`);
  } else {
    console.error(`Could not find anchor for locale: ${loc}`);
  }
});

fs.writeFileSync('web_app/i18n.js', i18nContent, 'utf8');
console.log("Successfully enriched web_app/i18n.js with all new keys!");
