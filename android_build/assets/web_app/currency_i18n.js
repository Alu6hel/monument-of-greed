/**
 * Monument of Greed — Comprehensive Currency Localizations
 * Provides localized metadata for all 15 global currencies across 7 locales.
 */
(function(window) {
  'use strict';

  const CURRENCY_LOCALIZATIONS = {
  "USD": {
    "name": {
      "en": "United States Dollar",
      "hi": "अमेरिकी डॉलर",
      "es": "Dólar Estadounidense",
      "de": "US-Dollar",
      "fr": "Dollar Américain",
      "ja": "米ドル",
      "zh": "美元"
    },
    "country": {
      "en": "United States",
      "hi": "संयुक्त राज्य अमेरिका",
      "es": "Estados Unidos",
      "de": "Vereinigte Staaten",
      "fr": "États-Unis",
      "ja": "アメリカ合衆国",
      "zh": "美国"
    },
    "authority": {
      "en": "Bureau of Engraving and Printing (BEP) / Federal Reserve",
      "hi": "ब्यूरो ऑफ एनग्रेविंग एंड प्रिंटिंग (BEP) / फेडरल रिजर्व",
      "es": "Oficina de Grabado e Impresión (BEP) / Reserva Federal",
      "de": "Bureau of Engraving and Printing (BEP) / Federal Reserve",
      "fr": "Bureau of Engraving and Printing (BEP) / Réserve Fédérale",
      "ja": "米国製版印刷局 (BEP) / 連邦準備制度",
      "zh": "美国制版印刷局 (BEP) / 联邦储备系统"
    },
    "statutoryCode": {
      "en": "31 CFR Part 100 (Exchange of Mutilated Paper Currency)",
      "hi": "31 CFR भाग 100 (विकृत कागजी मुद्रा का विनिमय)",
      "es": "31 CFR Parte 100 (Canje de Moneda de Papel Mutilada)",
      "de": "31 CFR Teil 100 (Umtausch beschädigter Papierwährung)",
      "fr": "31 CFR Partie 100 (Échange de Billets Mutilés)",
      "ja": "31 CFR 第100部 (損傷紙幣の引換基準)",
      "zh": "美国联邦法规 31 CFR 第100部分 (残损纸币兑换规范)"
    },
    "thresholdRule": {
      "en": "> 50.0% surface area required for 100% face-value reimbursement. If ≤ 50% remains, requires sworn affidavit proving missing portion was completely destroyed.",
      "hi": "100% अंकित मूल्य प्रतिपूर्ति के लिए 50.0% से अधिक सतह क्षेत्र की आवश्यकता होती है। यदि ≤ 50% रहता है, तो शपथ पत्र की आवश्यकता होती है।",
      "es": "> 50.0% de área superficial requerida para el 100% de reembolso de valor nominal. Si queda ≤ 50%, requiere declaración jurada probando destrucción completa.",
      "de": "> 50,0 % verbleibende Oberfläche erforderlich für 100 % Nennwert-Erstattung. Bei ≤ 50 % ist eine eidesstattliche Versicherung über die Zerstörung des Restes erforderlich.",
      "fr": "> 50,0 % de surface requise pour un remboursement à 100 % de la valeur faciale. Si ≤ 50 %, une déclaration sous serment de destruction totale est exigée.",
      "ja": "額面100%の引換には紙幣面積の50.0%超の残存が必要です。50%以下の場合は残部滅失の宣誓供述書が義務付けられます。",
      "zh": "票面完整面积超过 50.0% 即可获得 100% 全额面值兑付。若剩余 ≤ 50%，须出具宣誓证明确认遗失部分已完全毁灭。"
    },
    "talkTrack": {
      "en": "Hello, I have an authentic United States banknote that sustained physical damage. According to Federal Reserve guidelines and 31 CFR § 100.5, because more than 50% of the original note remains intact with legible serial markers, this note qualifies for direct face-value exchange. I would like to deposit or exchange this note, or have you submit it to the Federal Reserve Cash Office on my behalf.",
      "hi": "नमस्ते, मेरे पास एक प्रामाणिक अमेरिकी बैंकनोट है जो क्षतिग्रस्त हो गया है। 31 CFR § 100.5 और फेडरल रिजर्व दिशानिर्देशों के अनुसार, 50% से अधिक बरकरार रहने के कारण यह सीधे अंकित मूल्य विनिमय का हकदार है।",
      "es": "Hola, tengo un billete auténtico de EE. UU. que sufrió daños físicos. Según las directrices de la Reserva Federal y 31 CFR § 100.5, al conservar más del 50% intacto, califica para canje directo por su valor nominal.",
      "de": "Guten Tag, ich besitze einen echten US-Banknotenbeleg mit Beschädigung. Nach Federal Reserve Richtlinien und 31 CFR § 100.5 qualifiziert sich die Note bei über 50% Erhalt direkt für den vollen Nennwertumtausch.",
      "fr": "Bonjour, je présente un billet américain authentique endommagé. Selon les directives de la Réserve fédérale et 31 CFR § 100.5, plus de 50% de la surface étant intacte, ce billet donne droit à un remboursement immédiat à valeur nominale.",
      "ja": "こんにちは。損傷した真正な米ドル紙幣を持参しました。米連邦準備制度規定および31 CFR § 100.5に基づき、50％以上の面積が識別可能な記番号と共に残存しているため、額面全額での引換資格を満たしています。",
      "zh": "您好，我持有一张受损的真正美元纸币。根据美联储准则与联邦法规 31 CFR § 100.5，因票面残存面积大于 50% 且序列号清晰，符合全额兑付标准，特此申请窗口兑换。"
    }
  },
  "EUR": {
    "name": {
      "en": "Euro (Eurosystem Series)",
      "hi": "यूरो (यूरोसिस्टम श्रृंखला)",
      "es": "Euro (Serie Eurosistema)",
      "de": "Euro (Eurosystem-Serie)",
      "fr": "Euro (Série Eurosystème)",
      "ja": "ユーロ (ユーロシステムシリーズ)",
      "zh": "欧元 (欧元系统系列)"
    },
    "country": {
      "en": "Eurozone",
      "hi": "यूरोज़ोन",
      "es": "Zona Euro",
      "de": "Eurozone",
      "fr": "Zone Euro",
      "ja": "ユーロ圏",
      "zh": "欧元区"
    },
    "authority": {
      "en": "European Central Bank (ECB) & National Central Banks",
      "hi": "यूरोपीय सेंट्रल बैंक (ECB) एवं राष्ट्रीय केंद्रीय बैंक",
      "es": "Banco Central Europeo (BCE) y Bancos Centrales Nacionales",
      "de": "Europäische Zentralbank (EZB) & Nationale Zentralbanken",
      "fr": "Banque Centrale Européenne (BCE) & Banques Centrales Nationales",
      "ja": "欧州中央銀行 (ECB) および各国の中央銀行",
      "zh": "欧洲中央银行 (ECB) 及成员国国家中央银行"
    },
    "statutoryCode": {
      "en": "Decision of the European Central Bank ECB/2013/10",
      "hi": "यूरोपीय सेंट्रल बैंक का निर्णय ECB/2013/10",
      "es": "Decisión del Banco Central Europeo BCE/2013/10",
      "de": "Beschluss der Europäischen Zentralbank EZB/2013/10",
      "fr": "Décision de la Banque Centrale Européenne BCE/2013/10",
      "ja": "欧州中央銀行決定 ECB/2013/10",
      "zh": "欧洲中央银行决定 ECB/2013/10"
    },
    "thresholdRule": {
      "en": "> 50.0% of original banknote surface area presented. If 50% or less is presented, claimant must prove that missing parts have been destroyed.",
      "hi": "मूल बैंकनोट का > 50.0% सतह क्षेत्र प्रस्तुत किया जाना चाहिए। यदि 50% या उससे कम है, तो आवेदक को यह साबित करना होगा कि लापता भाग नष्ट हो गए हैं।",
      "es": "> 50.0% de la superficie original del billete presentada. Si se presenta 50% o menos, el solicitante debe demostrar la destrucción de las partes faltantes.",
      "de": "> 50,0 % der ursprünglichen Banknotenoberfläche vorgelegt. Bei 50 % oder weniger muss der Antragsteller nachweisen, dass die fehlenden Teile zerstört wurden.",
      "fr": "> 50,0 % de la surface d'origine présentée. Si 50 % ou moins est présenté, le demandeur doit prouver la destruction des parties manquantes.",
      "ja": "紙幣面積の50.0%超が提示されていること。50%以下の場合は欠落部分の滅失を立証する必要があります。",
      "zh": "呈递票面原始面积超过 50.0%。若呈递面积 ≤ 50%，持有人须证明缺失部分已被完全销毁。"
    },
    "talkTrack": {
      "en": "Good morning. Under European Central Bank Decision ECB/2013/10, Article 3, euro banknotes with more than 50% of their surface intact qualify for immediate 1-to-1 face value replacement.",
      "hi": "शुभ प्रभात। यूरोपीय सेंट्रल बैंक निर्णय ECB/2013/10 के अनुच्छेद 3 के तहत, 50% से अधिक बरकरार यूरो नोट तत्काल 1-से-1 अंकित मूल्य प्रतिस्थापन के पात्र हैं।",
      "es": "Buenos días. Conforme a la Decisión BCE/2013/10 del Banco Central Europeo, Artículo 3, los billetes en euros con más del 50% de superficie intacta califican para reemplazo inmediato 1 a 1 por valor nominal.",
      "de": "Guten Tag. Gemäß Beschluss EZB/2013/10 der Europäischen Zentralbank qualifizieren sich Euro-Banknoten mit über 50 % Erhalt für den sofortigen 1:1 Nennwertumtausch.",
      "fr": "Bonjour. En vertu de la décision BCE/2013/10 de la Banque centrale européenne, article 3, les billets en euros conservant plus de 50 % de leur surface intacte donnent droit au remplacement immédiat à valeur nominale.",
      "ja": "おはようございます。欧州中央銀行決定 ECB/2013/10 第3条に基づき、面積の50％超が保たれているユーロ紙幣は即座に1対1の額面交換対象となります。",
      "zh": "早上好。根据欧洲央行决议 ECB/2013/10 第 3 条，残存表面积大于 50% 的欧元纸币具备 1:1 全额面值兑换资格，申请予以窗口换领。"
    }
  },
  "GBP": {
    "name": {
      "en": "British Pound Sterling (Polymer & Paper)",
      "hi": "ब्रिटिश पाउंड स्टर्लिंग",
      "es": "Libra Esterlina Británica",
      "de": "Britisches Pfund Sterling",
      "fr": "Livre Sterling Britannique",
      "ja": "英ポンド",
      "zh": "英镑"
    },
    "country": {
      "en": "United Kingdom",
      "hi": "यूनाइटेड किंगडम",
      "es": "Reino Unido",
      "de": "Vereinigtes Königreich",
      "fr": "Royaume-Uni",
      "ja": "イギリス",
      "zh": "英国"
    },
    "authority": {
      "en": "Bank of England — Damaged Banknote Section",
      "hi": "बैंक ऑफ इंग्लैंड — क्षतिग्रस्त बैंकनोट प्रभाग",
      "es": "Banco de Inglaterra — Sección de Billetes Deteriorados",
      "de": "Bank of England — Abteilung für beschädigte Banknoten",
      "fr": "Banque d'Angleterre — Section des Billets Endommagés",
      "ja": "イングランド銀行 — 損傷紙幣部門",
      "zh": "英格兰银行 — 残损钞票处理科"
    },
    "statutoryCode": {
      "en": "Currency and Bank Notes Act (Damaged Banknote Scheme)",
      "hi": "मुद्रा एवं बैंक नोट अधिनियम (क्षतिग्रस्त बैंकनोट योजना)",
      "es": "Ley de Moneda y Billetes (Régimen de Billetes Dañados)",
      "de": "Währungs- und Banknotengesetz (Umtauschregelung)",
      "fr": "Loi sur la Monnaie et les Billets de Banque",
      "ja": "通貨および銀行券法 (損傷銀行券引換規則)",
      "zh": "货币与银行钞票法案 (残币回收机制)"
    },
    "thresholdRule": {
      "en": "Bank of England pays full face value if more than half (>50%) of the banknote is presented, or if satisfied the remaining part has been destroyed.",
      "hi": "यदि आधे से अधिक (>50%) नोट प्रस्तुत किया जाता है, तो बैंक ऑफ इंग्लैंड पूरा अंकित मूल्य चुकाता है।",
      "es": "El Banco de Inglaterra paga el valor nominal completo si se presenta más de la mitad (>50%) del billete.",
      "de": "Die Bank of England erstattet den vollen Nennwert, wenn mehr als die Hälfte (>50 %) der Banknote vorgelegt wird.",
      "fr": "La Banque d'Angleterre rembourse la valeur faciale intégrale si plus de la moitié (>50 %) du billet est présentée.",
      "ja": "紙幣の半分超 (>50%) が提示された場合、イングランド銀行は額面全額を払い戻します。",
      "zh": "若呈递钞票面积超过一半 (>50%)，或确信剩余部分已被销毁，英格兰银行将按 100% 面值全额兑付。"
    },
    "talkTrack": {
      "en": "Hello. I am presenting a damaged Bank of England banknote. As more than 50% of the polymer note is physically intact, Bank of England guidelines permit commercial banks to accept it for deposit.",
      "hi": "नमस्ते। मैं बैंक ऑफ इंग्लैंड का क्षतिग्रस्त नोट प्रस्तुत कर रहा हूँ। 50% से अधिक बरकरार होने के कारण यह पूर्ण मूल्य विनिमय का हकदार है।",
      "es": "Hola. Presento un billete dañado del Banco de Inglaterra. Con más del 50% intacto, las pautas permiten su depósito o canje por valor total.",
      "de": "Guten Tag. Ich lege eine beschädigte Banknote der Bank of England vor. Bei mehr als 50 % erhaltener Fläche ist sie für den vollen Nennwertumtausch berechtigt.",
      "fr": "Bonjour. Je présente un billet de la Banque d'Angleterre endommagé. Avec plus de 50 % intact, il est admissible au remboursement à 100 % de sa valeur.",
      "ja": "こんにちは。イングランド銀行の損傷紙幣を提示します。ポリマー券面の50％超が物理的に残存しているため、額面満額での引き換え基準を満たしています。",
      "zh": "您好。我持有一张受损的英格兰银行钞票。鉴于票面完整度超过 50%，符合英格兰银行全额面值承兑标准，申请办理窗口交兑。"
    }
  },
  "JMD": {
    "name": {
      "en": "Jamaican Dollar (Polymer Series)",
      "hi": "जमैकन डॉलर",
      "es": "Dólar Jamaiquino",
      "de": "Jamaika-Dollar",
      "fr": "Dollar Jamaïcain",
      "ja": "ジャマイカ・ドル",
      "zh": "牙买加元"
    },
    "country": {
      "en": "Jamaica",
      "hi": "जमैका",
      "es": "Jamaica",
      "de": "Jamaika",
      "fr": "Jamaïque",
      "ja": "ジャマイカ",
      "zh": "牙买加"
    },
    "authority": {
      "en": "Bank of Jamaica (BOJ) — Currency Department",
      "hi": "बैंक ऑफ जमैका (BOJ) — मुद्रा विभाग",
      "es": "Banco de Jamaica (BOJ) — Departamento de Moneda",
      "de": "Bank of Jamaica (BOJ) — Währungsabteilung",
      "fr": "Banque de Jamaïque (BOJ) — Département de la Monnaie",
      "ja": "ジャマイカ銀行 (BOJ) — 通貨部",
      "zh": "牙买加银行 (BOJ) — 货币发行部"
    },
    "statutoryCode": {
      "en": "Bank of Jamaica Act, Section 28 (Mutilated Tender Recovery)",
      "hi": "बैंक ऑफ जमैका अधिनियम, धारा 28",
      "es": "Ley del Banco de Jamaica, Sección 28",
      "de": "Bank of Jamaica Act, Abschnitt 28",
      "fr": "Loi sur la Banque de Jamaïque, Section 28",
      "ja": "ジャマイカ銀行法 第28条 (損傷通貨引換基準)",
      "zh": "牙买加银行法案 第28条 (残损货币赎回条款)"
    },
    "thresholdRule": {
      "en": "More than 50% of the banknote surface must be present, with at least one complete and readable serial number, and security substrate elements verified.",
      "hi": "बैंक नोट की सतह का 50% से अधिक मौजूद होना चाहिए, साथ ही कम से कम एक पूरा पठनीय क्रमांक होना चाहिए।",
      "es": "Se debe presentar más del 50% de la superficie, con al menos un número de serie completo y legible.",
      "de": "Mehr als 50 % der Banknotenoberfläche müssen vorhanden sein, zusammen mit mindestens einer vollständigen und lesbaren Seriennummer.",
      "fr": "Plus de 50 % de la surface du billet doit être présente, avec au moins un numéro de série complet et lisible.",
      "ja": "紙幣表面の50％超が残存し、少なくとも1つの完全で判読可能な通し番号が確認できる必要があります。",
      "zh": "票面存留面积须超过 50%，且至少保留一组完整可辨读的字轨序列号及防伪聚合物特征。"
    },
    "talkTrack": {
      "en": "Good day. Under the Bank of Jamaica Act Section 28, genuine Jamaican currency notes with more than half of the surface area and a clear serial number are redeemable for full face value.",
      "hi": "शुभ दिन। बैंक ऑफ जमैका अधिनियम धारा 28 के तहत, आधे से अधिक हिस्से वाले जमैकन नोट पूर्ण अंकित मूल्य पर प्रतिदेय हैं।",
      "es": "Buenos días. Conforme al Artículo 28 de la Ley del Banco de Jamaica, los billetes genuinos con más de la mitad de superficie y serie legible son canjeables al 100% de valor nominal.",
      "de": "Guten Tag. Nach Abschnitt 28 des Bank of Jamaica Act sind echte Banknoten mit über 50 % Erhalt und lesbarer Seriennummer zu 100 % erstattungsfähig.",
      "fr": "Bonjour. En vertu de la section 28 de la loi sur la Banque de Jamaïque, les billets authentiques conservant plus de la moitié de leur surface sont remboursables à pleine valeur nominale.",
      "ja": "こんにちは。ジャマイカ銀行法第28条に基づき、面積の過半と通し番号が確認できる真正な紙幣は全額面引換が可能です。",
      "zh": "您好。根据牙买加银行法案第 28 条，票面面积超过一半且序列号清晰的纸币，具备 100% 全额法定价值赎回权益。"
    }
  },
  "CAD": {
    "name": {
      "en": "Canadian Dollar (Frontier Polymer)",
      "hi": "कनाडाई डॉलर",
      "es": "Dólar Canadiense",
      "de": "Kanadischer Dollar",
      "fr": "Dollar Canadien",
      "ja": "カナダ・ドル",
      "zh": "加拿大元"
    },
    "country": {
      "en": "Canada",
      "hi": "कनाडा",
      "es": "Canadá",
      "de": "Kanada",
      "fr": "Canada",
      "ja": "カナダ",
      "zh": "加拿大"
    },
    "authority": {
      "en": "Bank of Canada — Bank Note Redemption Service",
      "hi": "बैंक ऑफ कनाडा — बैंक नोट मोचन सेवा",
      "es": "Banco de Canadá — Servicio de Canje de Billetes",
      "de": "Bank of Canada — Banknoten-Umtauschdienst",
      "fr": "Banque du Canada — Service de Rachat de Billets",
      "ja": "カナダ銀行 — 銀行券引換サービス",
      "zh": "加拿大银行 — 钞票赎回兑换处"
    },
    "statutoryCode": {
      "en": "Bank of Canada Act, Section 25 (Redemption Policy)",
      "hi": "बैंक ऑफ कनाडा अधिनियम, धारा 25",
      "es": "Ley del Banco de Canadá, Sección 25",
      "de": "Bank of Canada Act, Abschnitt 25",
      "fr": "Loi sur la Banque du Canada, Section 25",
      "ja": "カナダ銀行法 第25条 (引換規則)",
      "zh": "加拿大银行法案 第25条 (赎回政策)"
    },
    "thresholdRule": {
      "en": "Bank of Canada redeems bank notes if more than three-fifths (60%) or more than half (>50%) is presented with intact security features.",
      "hi": "बैंक ऑफ कनाडा 50% से अधिक या तीन-पांचवें (60%) हिस्से के साथ सुरक्षित विशेषताओं वाले नोटों को भुनाता है।",
      "es": "El Banco de Canadá canjea billetes si se presenta más de tres quintos (60%) o más de la mitad (>50%) con características de seguridad intactas.",
      "de": "Die Bank of Canada tauscht Banknoten um, wenn mehr als drei Fünftel (60 %) oder mehr als die Hälfte (>50 %) mit intakten Sicherheitsmerkmalen vorgelegt werden.",
      "fr": "La Banque du Canada rachète les billets si plus des trois cinquièmes (60 %) ou plus de la moitié (>50 %) sont présentés avec des éléments de sécurité intacts.",
      "ja": "カナダ銀行は、偽造防止特徴が確認でき、3/5 (60%) 超または半分超 (>50%) が提示された紙幣を引換します。",
      "zh": "加拿大银行对于呈递面积超过五分之三 (60%) 或过半 (>50%) 且防伪特征完整的钞票予以面值兑现。"
    },
    "talkTrack": {
      "en": "Hello, I would like to exchange this damaged Canadian banknote. As more than half of the polymer substrate and serial numbers are present, it qualifies under the Bank of Canada redemption policy.",
      "hi": "नमस्ते, मैं इस क्षतिग्रस्त कनाडाई बैंकनोट को बदलना चाहता हूँ। 50% से अधिक होने के कारण यह बैंक ऑफ कनाडा नीति के तहत योग्य है।",
      "es": "Hola, deseo canjear este billete canadiense dañado. Al tener más de la mitad del sustrato de polímero y los números de serie presentes, califica según la política del Banco de Canadá.",
      "de": "Guten Tag, ich möchte diese beschädigte kanadische Banknote umtauschen. Da mehr als die Hälfte des Polymersubstrats vorhanden ist, erfüllt sie die Richtlinien der Bank of Canada.",
      "fr": "Bonjour, je souhaite échanger ce billet canadien endommagé. Comme plus de la moitié du substrat polymère et les numéros de série sont présents, il est admissible selon la politique de la Banque du Canada.",
      "ja": "こんにちは。破損したカナダドル紙幣の交換をお願いします。ポリマー素材と通し番号の半分以上が現存しているため、カナダ銀行の引換基準を満たしています。",
      "zh": "您好，我希望兑换这张受损的加拿大元纸币。由于保留了超过一半的聚合物基质和序列号，符合加拿大银行的赎回标准。"
    }
  },
  "AUD": {
    "name": {
      "en": "Australian Dollar (Next Gen Polymer)",
      "hi": "ऑस्ट्रेलियाई डॉलर",
      "es": "Dólar Australiano",
      "de": "Australischer Dollar",
      "fr": "Dollar Australien",
      "ja": "オーストラリア・ドル",
      "zh": "澳大利亚元"
    },
    "country": {
      "en": "Australia",
      "hi": "ऑस्ट्रेलिया",
      "es": "Australia",
      "de": "Australien",
      "fr": "Australie",
      "ja": "オーストラリア",
      "zh": "澳大利亚"
    },
    "authority": {
      "en": "Reserve Bank of Australia (RBA) — Note Issue Department",
      "hi": "रिज़र्व बैंक ऑफ़ ऑस्ट्रेलिया (RBA) — नोट निर्गम विभाग",
      "es": "Banco de la Reserva de Australia (RBA) — Departamento de Emisión",
      "de": "Reserve Bank of Australia (RBA) — Notenausgabeabteilung",
      "fr": "Banque de Réserve d'Australie (RBA) — Département de l'Émission",
      "ja": "オーストラリア準備銀行 (RBA) — 発券部",
      "zh": "澳大利亚储备银行 (RBA) — 钞票发行部"
    },
    "statutoryCode": {
      "en": "Reserve Bank Act 1959 & RBA Damaged Banknotes Policy",
      "hi": "रिज़र्व बैंक अधिनियम 1959 एवं RBA क्षतिग्रस्त बैंकनोट नीति",
      "es": "Ley del Banco de la Reserva de 1959 y Política de Billetes Dañados de la RBA",
      "de": "Reserve Bank Act 1959 & RBA-Richtlinie für beschädigte Banknoten",
      "fr": "Loi sur la Banque de Réserve de 1959 et Politique des Billets Endommagés de la RBA",
      "ja": "豪州準備銀行法 1959 および RBA 損傷銀行券ポリシー",
      "zh": "1959年澳大利亚储备银行法案及残币回收政策"
    },
    "thresholdRule": {
      "en": "Full Value if ≥ 80% remains. Pro-rata value if between 20% and 80% remains. Zero value under 20%.",
      "hi": "यदि ≥ 80% रहता है तो पूरा मूल्य। 20% और 80% के बीच रहने पर आनुपातिक मूल्य। 20% से कम पर शून्य मूल्य।",
      "es": "Valor completo si queda ≥ 80%. Valor prorrateado si queda entre 20% y 80%. Cero valor por debajo del 20%.",
      "de": "Voller Wert bei ≥ 80 % Erhalt. Anteiliger Wert bei 20 % bis 80 %. Kein Wert bei unter 20 %.",
      "fr": "Pleine valeur si ≥ 80 % restant. Valeur proportionnelle si entre 20 % et 80 % restant. Aucune valeur sous 20 %.",
      "ja": "80%以上残存で全額支給。20%から80%の間は残存割合に応じた按分支給。20%未満は無価値。",
      "zh": "保留面积 ≥ 80% 兑付全额。保留面积在 20% 至 80% 之间按比例折算兑付。低于 20% 不予兑付。"
    },
    "talkTrack": {
      "en": "Hello. Under Reserve Bank of Australia Damaged Banknotes Policy, damaged polymer currency can be redeemed through commercial banks. This note has over 50% remaining and is eligible for statutory payment.",
      "hi": "नमस्ते। RBA नीति के तहत, क्षतिग्रस्त नोटों का वाणिज्यिक बैंकों के माध्यम से विनिमय किया जा सकता है।",
      "es": "Hola. Bajo la Política de Billetes Dañados del RBA, la moneda de polímero dañada se puede canjear en bancos comerciales.",
      "de": "Guten Tag. Gemäß der RBA-Richtlinie können beschädigte Polymernoten bei Geschäftsbanken umgetauscht werden.",
      "fr": "Bonjour. En vertu de la politique de la RBA, les billets en polymère endommagés peuvent être remboursés via les banques commerciales.",
      "ja": "こんにちは。オーストラリア準備銀行の損傷紙幣規定に基づき、ポリマー紙幣の引換を申請します。",
      "zh": "您好。根据澳大利亚储备银行残损聚合物钞票政策，经商业银行核验残损比例，申请依法承付。"
    }
  },
  "JPY": {
    "name": {
      "en": "Japanese Yen",
      "hi": "जापानी येन",
      "es": "Yen Japonés",
      "de": "Japanischer Yen",
      "fr": "Yen Japonais",
      "ja": "日本円",
      "zh": "日元"
    },
    "country": {
      "en": "Japan",
      "hi": "जापान",
      "es": "Japón",
      "de": "Japan",
      "fr": "Japon",
      "ja": "日本",
      "zh": "日本"
    },
    "authority": {
      "en": "Bank of Japan (Nihon Ginko)",
      "hi": "बैंक ऑफ जापान (निप्पॉन गिंको)",
      "es": "Banco de Japón (Nippon Ginko)",
      "de": "Bank of Japan (Nippon Ginko)",
      "fr": "Banque du Japon (Nippon Ginko)",
      "ja": "日本銀行 (日本銀行本支店窓口)",
      "zh": "日本银行 (Nippon Ginko)"
    },
    "statutoryCode": {
      "en": "Bank of Japan Act (Standards for Exchange of Damaged Currency)",
      "hi": "बैंक ऑफ जापान अधिनियम (क्षतिग्रस्त मुद्रा विनिमय मानक)",
      "es": "Ley del Banco de Japón (Normas para el Canje de Moneda Dañada)",
      "de": "Bank of Japan Act (Standards für den Umtausch beschädigter Währung)",
      "fr": "Loi sur la Banque du Japon (Normes d'Échange de Monnaie Endommagée)",
      "ja": "日本銀行法 (損傷現金引換基準)",
      "zh": "日本银行法 (损伤现金兑换基准)"
    },
    "thresholdRule": {
      "en": "100% Value if ≥ 2/3 (66.7%) remaining. 50% Value if between 2/5 (40.0%) and 2/3 remaining. Zero Value if < 2/5 (< 40.0%) remaining.",
      "hi": "≥ 2/3 रहने पर 100% मूल्य। 2/5 और 2/3 के बीच रहने पर 50% मूल्य। 2/5 से कम पर शून्य मूल्य।",
      "es": "100% de valor si queda ≥ 2/3 (66.7%). 50% de valor si queda entre 2/5 (40.0%) y 2/3. Cero valor si queda < 2/5.",
      "de": "100 % Wert bei ≥ 2/3 Erhalt. 50 % Wert bei 2/5 bis 2/3 Erhalt. Kein Wert bei < 2/5 Erhalt.",
      "fr": "Valeur à 100 % si ≥ 2/3 restant. Valeur à 50 % si entre 2/5 et 2/3 restant. Zéro valeur si < 2/5 restant.",
      "ja": "面積が2/3以上残存する場合は全額引換。2/5以上2/3未満残存する場合は半額引換。2/5未満は無効。",
      "zh": "票面剩余三分之二以上全额兑换；剩余五分之二以上至三分之二以下半额兑换；不足五分之二不予兑换。"
    },
    "talkTrack": {
      "en": "Sumimasen. Nihon Ginko damaged currency exchange standards state that banknotes with 2/3 or more remaining receive 100% face value. I would like to exchange this note at your teller window.",
      "hi": "क्षमा करें। निप्पॉन गिंको मानकों के अनुसार 2/3 या उससे अधिक शेष रहने पर 100% मूल्य मिलता है।",
      "es": "Disculpe. Las normas del Banco de Japón establecen que los billetes con 2/3 o más reciben el 100% de valor nominal.",
      "de": "Entschuldigung. Gemäß den Standards der Bank of Japan erhalten Noten mit mindestens 2/3 Erhalt 100 % Nennwert.",
      "fr": "Excusez-moi. Selon les normes de la Banque du Japon, les billets ayant 2/3 ou plus reçoivent 100 % de la valeur faciale.",
      "ja": "恐れ入ります。日本銀行の損傷銀行券引換基準に則り、券面の3分の2以上が現存しているため全額引換の対象となります。窓口での確認とお手続きをお願いいたします。",
      "zh": "您好。根据日本银行损伤现金兑换基准，票面残存面积在三分之二以上，符合全额兑换标准，请在柜台予以受理。"
    }
  },
  "CHF": {
    "name": {
      "en": "Swiss Franc (9th Series)",
      "hi": "स्विस फ्रैंक",
      "es": "Franco Suizo",
      "de": "Schweizer Franken",
      "fr": "Franc Suisse",
      "ja": "スイス・フラン",
      "zh": "瑞士法郎"
    },
    "country": {
      "en": "Switzerland",
      "hi": "स्विट्जरलैंड",
      "es": "Suiza",
      "de": "Schweiz",
      "fr": "Suisse",
      "ja": "スイス",
      "zh": "瑞士"
    },
    "authority": {
      "en": "Swiss National Bank (SNB)",
      "hi": "स्विस नेशनल बैंक (SNB)",
      "es": "Banco Nacional Suizo (BNS)",
      "de": "Schweizerische Nationalbank (SNB)",
      "fr": "Banque Nationale Suisse (BNS)",
      "ja": "スイス国立銀行 (SNB)",
      "zh": "瑞士国家银行 (SNB)"
    },
    "statutoryCode": {
      "en": "Federal Act on Currency and Payment Instruments (CPIA)",
      "hi": "मुद्रा एवं भुगतान साधन पर संघीय अधिनियम (CPIA)",
      "es": "Ley Federal sobre la Moneda y los Instrumentos de Pago (CPIA)",
      "de": "Bundesgesetz über die Währung und die Zahlungsmittel (WZG)",
      "fr": "Loi fédérale sur l'unité monétaire et les moyens de paiement (LUMP)",
      "ja": "通貨および支払手段に関する連邦法 (CPIA)",
      "zh": "瑞士货币与支付工具联邦法案 (CPIA)"
    },
    "thresholdRule": {
      "en": "> 50.0% surface area presented, or claimant presents proof that missing fragments were destroyed.",
      "hi": "50.0% से अधिक सतह क्षेत्र प्रस्तुत किया गया हो, या आवेदक यह साबित करे कि लापता टुकड़े नष्ट हो गए थे।",
      "es": "> 50.0% de superficie presentada, o el solicitante presenta prueba de que los fragmentos faltantes fueron destruidos.",
      "de": "> 50,0 % der Fläche vorgelegt, oder der Antragsteller weist nach, dass fehlende Bruchstücke zerstört wurden.",
      "fr": "> 50,0 % de surface présentée, ou preuve apportée que les fragments manquants ont été détruits.",
      "ja": "紙幣面積の50.0%超が提示されているか、欠落部分が滅失した証明が提示される必要があります。",
      "zh": "呈递票面面积超过 50.0%，或持有人能够提供确实证明证实缺失部分已被销毁。"
    },
    "talkTrack": {
      "en": "Grüezi. Under Swiss National Bank rules, banknotes with more than 50% surface area intact are replaced at full nominal value. I wish to submit this note for replacement.",
      "hi": "नमस्ते। स्विस नेशनल बैंक के नियमों के तहत, 50% से अधिक बरकरार नोटों को पूरे नाममात्र मूल्य पर बदला जाता है।",
      "es": "Grüezi. Según las normas del Banco Nacional Suizo, los billetes con más del 50% intacto se reemplazan por su valor total.",
      "de": "Grüezi. Gemäß den Bestimmungen der Schweizerischen Nationalbank werden Banknoten mit über 50 % intakter Fläche zum vollen Nennwert ersetzt.",
      "fr": "Bonjour. Selon les règles de la Banque nationale suisse, les billets intacts à plus de 50 % sont remplacés à leur valeur nominale totale.",
      "ja": "Grüezi. スイス国立銀行の規定に基づき、面積の50％超が残存する紙幣は額面全額で交換されます。",
      "zh": "您好。根据瑞士国家银行规定，完整度超过 50% 的法郎纸币可全额按面值换发新钞。"
    }
  },
  "MXN": {
    "name": {
      "en": "Mexican Peso (Series G)",
      "hi": "मैक्सिकन पेसो",
      "es": "Peso Mexicano (Serie G)",
      "de": "Mexikanischer Peso",
      "fr": "Peso Mexicain",
      "ja": "メキシコ・ペソ",
      "zh": "墨西哥比索"
    },
    "country": {
      "en": "Mexico",
      "hi": "मेक्सिको",
      "es": "México",
      "de": "Mexiko",
      "fr": "Mexique",
      "ja": "メキシコ",
      "zh": "墨西哥"
    },
    "authority": {
      "en": "Banco de México (Banxico)",
      "hi": "बैंको डी मेक्सिको (Banxico)",
      "es": "Banco de México (Banxico)",
      "de": "Banco de México (Banxico)",
      "fr": "Banque du Mexique (Banxico)",
      "ja": "メキシコ銀行 (Banxico)",
      "zh": "墨西哥银行 (Banxico)"
    },
    "statutoryCode": {
      "en": "Banco de México — Reglas para Canje de Billetes Deteriorados (Regla 10/2006)",
      "hi": "बैंको डी मेक्सिको — क्षतिग्रस्त नोट विनिमय नियम (नियम 10/2006)",
      "es": "Banco de México — Reglas para Canje de Billetes Deteriorados (Regla 10/2006)",
      "de": "Banco de México — Regeln für den Umtausch beschädigter Banknoten (Regel 10/2006)",
      "fr": "Banque du Mexique — Règles pour l'Échange de Billets Détériorés (Règle 10/2006)",
      "ja": "メキシコ銀行 — 損傷紙幣引換規則 (規則 10/2006)",
      "zh": "墨西哥银行 — 破损纸币兑换细则 (第 10/2006 号规章)"
    },
    "thresholdRule": {
      "en": "> 50.0% continuous surface area required. When repaired or joined from fragments, pieces must belong to the exact same banknote. Valid for commercial bank counter exchange.",
      "hi": "> 50.0% निरंतर सतह क्षेत्र आवश्यक है। यदि टुकड़ों से जोड़ा गया हो, तो टुकड़े उसी नोट के होने चाहिए।",
      "es": "> 50.0% de superficie continua requerida. Las partes unidas deben pertenecer exactamente al mismo billete. Válido para canje en ventanilla bancaria.",
      "de": "> 50,0 % zusammenhängende Fläche erforderlich. Zusammengesetzte Teile müssen zur exakt gleichen Banknote gehören.",
      "fr": "> 50,0 % de surface continue requise. Les morceaux recollés doivent provenir du même billet.",
      "ja": "50.0%超の連続した面積が必要です。破片を接合した場合は同一紙幣に属していなければなりません。",
      "zh": "须保留连续面积超过 50.0%。若由拼片粘合，各拼片必须属于同一张纸币。可在所有商业银行柜台直接兑换。"
    },
    "talkTrack": {
      "en": "Buenas tardes. Conforme a las Reglas para el Canje de Billetes Deteriorados del Banco de México, los billetes con más del 50% de su superficie original conservan su valor nominal.",
      "hi": "नमस्ते। बैंको डी मेक्सिको नियमों के तहत 50% से अधिक सतह वाले नोट अपना पूर्ण मूल्य बनाए रखते हैं।",
      "es": "Buenas tardes. Conforme a las Reglas para el Canje de Billetes Deteriorados del Banco de México (Regla 10/2006), los billetes con más del 50% de su superficie original conservan su valor nominal. Solicito el canje en ventanilla o su envío al Banco de México para dictamen.",
      "de": "Guten Tag. Nach den Regeln der Banco de México behalten Noten mit über 50 % Fläche ihren vollen Nennwert.",
      "fr": "Bonjour. Conformément aux règles de la Banque du Mexique, les billets conservant plus de 50 % gardent leur valeur nominale.",
      "ja": "こんにちは。メキシコ銀行の引換規則に準拠し、元の面積の50％超を保つ紙幣は額面価値が保証されます。",
      "zh": "下午好。根据墨西哥银行破损钞票兑换细则，凡保留原始票面 50% 以上者均具备全额法定价值，特申请窗口交兑。"
    }
  },
  "INR": {
    "name": {
      "en": "Indian Rupee (Mahatma Gandhi New Series)",
      "hi": "भारतीय रुपया (महात्मा गांधी नई श्रृंखला)",
      "es": "Rupia India",
      "de": "Indische Rupie",
      "fr": "Roupie Indienne",
      "ja": "インド・ルピー",
      "zh": "印度卢比"
    },
    "country": {
      "en": "India",
      "hi": "भारत",
      "es": "India",
      "de": "Indien",
      "fr": "Inde",
      "ja": "インド",
      "zh": "印度"
    },
    "authority": {
      "en": "Reserve Bank of India (RBI) — Issue Department",
      "hi": "भारतीय रिज़र्व बैंक (RBI) — निर्गम विभाग",
      "es": "Banco de la Reserva de la India (RBI) — Departamento de Emisión",
      "de": "Reserve Bank of India (RBI) — Emissionsabteilung",
      "fr": "Banque de Réserve de l'Inde (RBI) — Département des Émissions",
      "ja": "インド準備銀行 (RBI) — 発券部",
      "zh": "印度储备银行 (RBI) — 发行部"
    },
    "statutoryCode": {
      "en": "Reserve Bank of India (Note Refund) Rules, 2009 / 2018",
      "hi": "भारतीय रिज़र्व बैंक (नोट वापसी) नियम, 2009 / 2018",
      "es": "Reglas de Reembolso de Billetes del Banco de la Reserva de la India, 2009/2018",
      "de": "Reserve Bank of India (Note Refund) Rules, 2009 / 2018",
      "fr": "Règles de Remboursement des Billets de la Banque de Réserve de l'Inde (2009/2018)",
      "ja": "インド準備銀行 (紙幣払戻) 規則 2009 / 2018",
      "zh": "印度储备银行 (钞票退换) 规程 2009 / 2018"
    },
    "thresholdRule": {
      "en": "Full Value if single undivided piece is ≥ 80% (≥ 75% for ₹50 and above). Half Value if between 40% and 80% (or 40-75% for ₹50+). Zero value if undivided area < 40%.",
      "hi": "यदि एकल अखंड टुकड़ा ≥ 80% है (₹50 और उससे अधिक के लिए ≥ 75%) तो पूरा मूल्य। 40% और 80% के बीच आधा मूल्य। 40% से कम पर शून्य मूल्य।",
      "es": "Valor total si la pieza indivisa es ≥ 80% (≥ 75% para ₹50 y superior). Mitad del valor si está entre 40% y 80%. Cero valor si es < 40%.",
      "de": "Voller Wert bei ungeteilter Fläche ≥ 80 % (≥ 75 % ab ₹50). Halber Wert bei 40 % bis 80 %. Kein Wert unter 40 %.",
      "fr": "Valeur intégrale si la pièce indivise est ≥ 80 % (≥ 75 % pour ₹50 et plus). Demi-valeur entre 40 % et 80 %. Nulle en dessous de 40 %.",
      "ja": "単一の未分割部分が80％以上（₹50以上は75％以上）で全額支給。40％〜80％で半額支給。40％未満は無効。",
      "zh": "单一未分割连通面积 ≥ 80%（50卢比及以上券别为 ≥ 75%）全额兑付；在 40% 至 80% 之间半额兑付；低于 40% 不予承付。"
    },
    "talkTrack": {
      "en": "Namaste. Under the Reserve Bank of India (Note Refund) Rules 2018, any public or commercial bank branch is designated to accept soiled and mutilated banknotes. As this note has over 80% surface area intact with visible security features, it qualifies for full value exchange at your branch counter.",
      "hi": "नमस्ते। RBI (नोट वापसी) नियम 2018 के तहत, कोई भी बैंक शाखा विकृत नोट स्वीकार करने के लिए अधिकृत है। इस नोट में 80% से अधिक हिस्सा सुरक्षित है, अतः यह पूरे मूल्य पर बदले जाने का हकदार है।",
      "es": "Namaste. Según las Reglas de Reembolso de Billetes del RBI de 2018, cualquier sucursal bancaria está obligada a aceptar billetes deteriorados.",
      "de": "Namaste. Gemäß den RBI-Bestimmungen 2018 ist jede Bankfiliale verpflichtet, beschädigte Noten anzunehmen.",
      "fr": "Namaste. En vertu des règles de la RBI 2018, toute agence bancaire est désignée pour accepter les billets abîmés.",
      "ja": "Namaste. インド準備銀行規則2018に基づき、券面の80％以上が保たれているため窓口での全額引換をお願いします。",
      "zh": "您好。依据印度储备银行2018年残损钞票退换规程，所有商业银行网点均须无条件受理残钞，该券面完整度超80%，符合全额承付标准。"
    }
  },
  "CNY": {
    "name": {
      "en": "Chinese Yuan Renminbi (5th Series)",
      "hi": "चीनी युआन रैनमिन्बी",
      "es": "Yuan Chino Renminbi",
      "de": "Chinesischer Yuan Renminbi",
      "fr": "Yuan Chinois Renminbi",
      "ja": "人民元 (第5版)",
      "zh": "中国人民币 (第五套)"
    },
    "country": {
      "en": "China",
      "hi": "चीन",
      "es": "China",
      "de": "China",
      "fr": "Chine",
      "ja": "中国",
      "zh": "中国"
    },
    "authority": {
      "en": "People’s Bank of China (PBOC)",
      "hi": "पीपुल्स बैंक ऑफ चाइना (PBOC)",
      "es": "Banco Popular de China (BPC)",
      "de": "Chinesische Volksbank (PBOC)",
      "fr": "Banque Populaire de Chine (PBOC)",
      "ja": "中国人民銀行 (PBOC)",
      "zh": "中国人民银行 (PBOC)"
    },
    "statutoryCode": {
      "en": "People’s Bank of China Regulations on Damaged Renminbi Exchange (中国人民银行残缺污损人民币兑换办法)",
      "hi": "पीपुल्स बैंक ऑफ चाइना क्षतिग्रस्त रैनमिन्बी विनिमय विनियम",
      "es": "Reglamento del Banco Popular de China para el Canje de Renminbi Dañado",
      "de": "Vorschriften der Chinesischen Volksbank zum Umtausch beschädigter Renminbi",
      "fr": "Règlement de la Banque Populaire de Chine sur l'Échange de Renminbi Endommagé",
      "ja": "中国人民銀行 残欠・汚損人民元引換弁法",
      "zh": "中国人民银行《残缺污损人民币兑换办法》"
    },
    "thresholdRule": {
      "en": "Full Value if remaining surface ≥ 3/4 (75.0%). Half Value if remaining surface is between 1/2 (50.0%) and 3/4 (75.0%). Zero value if remaining surface < 1/2 (50.0%).",
      "hi": "≥ 3/4 रहने पर पूरा मूल्य। 1/2 और 3/4 के बीच आधा मूल्य। 1/2 से कम पर शून्य मूल्य।",
      "es": "Valor total si la superficie restante es ≥ 3/4 (75.0%). Mitad del valor si está entre 1/2 (50.0%) y 3/4. Cero valor si es < 1/2.",
      "de": "Voller Wert bei verbleibender Fläche ≥ 3/4 (75,0 %). Halber Wert zwischen 1/2 und 3/4. Kein Wert bei < 1/2.",
      "fr": "Pleine valeur si surface restante ≥ 3/4 (75 %). Demi-valeur si entre 1/2 et 3/4. Aucune valeur si < 1/2.",
      "ja": "残存面積が3/4以上で全額引換。1/2以上3/4未満で半額引換。1/2未満は引換不可。",
      "zh": "票面剩余四分之三以上且图案文字清晰的，予以全额兑换；剩余二分之一至四分之三的，予以半额兑换；不足二分之一不予兑换。"
    },
    "talkTrack": {
      "en": "Hello. Under People’s Bank of China Damaged Renminbi Exchange regulations, banknotes retaining 3/4 or more qualify for full face value, and 1/2 to 3/4 receive half value.",
      "hi": "नमस्ते। पीपुल्स बैंक ऑफ चाइना नियमों के तहत 3/4 से अधिक नोट पूर्ण मूल्य पर बदले जाते हैं।",
      "es": "Hola. Conforme a las normas del Banco Popular de China, los billetes con 3/4 o más califican para el valor total.",
      "de": "Guten Tag. Nach den Bestimmungen der PBOC erhalten Renminbi-Noten ab 3/4 Erhalt den vollen Nennwert.",
      "fr": "Bonjour. Selon le règlement de la PBOC, les billets conservant au moins 3/4 donnent droit à un remboursement intégral.",
      "ja": "こんにちは。中国人民銀行の残欠人民元引換弁法に基づき、残存面積が3/4以上あるため全額交換の手続きをお願いします。",
      "zh": "您好。根据中国人民银行《残缺污损人民币兑换办法》，票面剩余四分之三以上且图案文字清晰的，应当予以全额兑换；剩余二分之一至四分之三的予以半额兑换。请在柜台办理残损币兑换手续。"
    }
  },
  "TTD": {
    "name": {
      "en": "Trinidad and Tobago Dollar",
      "hi": "त्रिनिदाद और टोबैगो डॉलर",
      "es": "Dólar de Trinidad y Tobago",
      "de": "Trinidad-und-Tobago-Dollar",
      "fr": "Dollar de Trinité-et-Tobago",
      "ja": "トリニダード・トバゴ・ドル",
      "zh": "特立尼达和多巴哥元"
    },
    "country": {
      "en": "Trinidad and Tobago",
      "hi": "त्रिनिदाद और टोबैगो",
      "es": "Trinidad y Tobago",
      "de": "Trinidad und Tobago",
      "fr": "Trinité-et-Tobago",
      "ja": "トリニダード・トバゴ",
      "zh": "特立尼达和多巴哥"
    },
    "authority": {
      "en": "Central Bank of Trinidad and Tobago",
      "hi": "सेंट्रल बैंक ऑफ त्रिनिदाद एंड टोबैगो",
      "es": "Banco Central de Trinidad y Tobago",
      "de": "Zentralbank von Trinidad und Tobago",
      "fr": "Banque Centrale de Trinité-et-Tobago",
      "ja": "トリニダード・トバゴ中央銀行",
      "zh": "特立尼达和多巴哥中央银行"
    },
    "statutoryCode": {
      "en": "Central Bank Act Chapter 79:02, Section 23",
      "hi": "सेंट्रल बैंक अधिनियम अध्याय 79:02, धारा 23",
      "es": "Ley del Banco Central Capítulo 79:02, Sección 23",
      "de": "Central Bank Act Kapitel 79:02, Abschnitt 23",
      "fr": "Loi sur la Banque Centrale Chapitre 79:02, Section 23",
      "ja": "中央銀行法 第79:02章 第23条",
      "zh": "中央银行法案 第 79:02 章第 23 条"
    },
    "thresholdRule": {
      "en": "> 50.0% of polymer note presented with at least one complete serial number.",
      "hi": "कम से कम एक पूर्ण क्रमांक के साथ 50.0% से अधिक पॉलीमर नोट।",
      "es": "> 50.0% de billete de polímero presentado con al menos un número de serie completo.",
      "de": "> 50,0 % der Polymernote mit mindestens einer vollständigen Seriennummer vorgelegt.",
      "fr": "> 50,0 % du billet en polymère présenté avec au moins un numéro de série complet.",
      "ja": "少なくとも1つの完全な通し番号と共にポリマー紙幣の50.0%超が提示されていること。",
      "zh": "呈递聚合物钞票表面积超过 50.0% 且至少保留一组完整字轨序列号。"
    },
    "talkTrack": {
      "en": "Good morning. Under Central Bank Act regulations, polymer notes possessing more than 50% of the surface area are eligible for redemption at face value.",
      "hi": "शुभ प्रभात। सेंट्रल बैंक नियमों के तहत 50% से अधिक वाले नोट अंकित मूल्य पर बदले जा सकते हैं।",
      "es": "Buenos días. Según las normas del Banco Central, los billetes con más del 50% califican para canje por su valor nominal.",
      "de": "Guten Tag. Nach den Vorschriften der Zentralbank sind Polymernoten mit über 50 % Fläche zum Nennwert umtauschbar.",
      "fr": "Bonjour. En vertu des règlements de la Banque centrale, les billets à plus de 50 % sont échangeables à valeur nominale.",
      "ja": "こんにちは。中央銀行規定に基づき、50％以上の面積を有するポリマー紙幣の全額引換を希望します。",
      "zh": "早上好。依据中央银行法案规程，留存面积超 50% 的聚合物钞票具备法定面值承兑权益。"
    }
  },
  "BSD": {
    "name": {
      "en": "Bahamian Dollar (CRISP Series)",
      "hi": "बहामियन डॉलर",
      "es": "Dólar Bahameño",
      "de": "Bahama-Dollar",
      "fr": "Dollar Bahaméen",
      "ja": "バハマ・ドル",
      "zh": "巴哈马元"
    },
    "country": {
      "en": "Bahamas",
      "hi": "बहामास",
      "es": "Bahamas",
      "de": "Bahamas",
      "fr": "Bahamas",
      "ja": "バハマ",
      "zh": "巴哈马"
    },
    "authority": {
      "en": "Central Bank of The Bahamas",
      "hi": "सेंट्रल बैंक ऑफ द बहामास",
      "es": "Banco Central de Las Bahamas",
      "de": "Zentralbank der Bahamas",
      "fr": "Banque Centrale des Bahamas",
      "ja": "バハマ中央銀行",
      "zh": "巴哈马中央银行"
    },
    "statutoryCode": {
      "en": "Central Bank of The Bahamas Act (Mutilated Tender Protocol)",
      "hi": "सेंट्रल बैंक ऑफ द बहामास अधिनियम",
      "es": "Ley del Banco Central de Las Bahamas",
      "de": "Central Bank of The Bahamas Act",
      "fr": "Loi sur la Banque Centrale des Bahamas",
      "ja": "バハマ中央銀行法 (損傷紙幣取扱プロトコル)",
      "zh": "巴哈马中央银行法案 (残币回收规程)"
    },
    "thresholdRule": {
      "en": "> 50.0% surface area with identifiable serial number.",
      "hi": "पहचानने योग्य क्रमांक के साथ 50.0% से अधिक सतह क्षेत्र।",
      "es": "> 50.0% de superficie con número de serie identificable.",
      "de": "> 50,0 % Fläche mit identifizierbarer Seriennummer.",
      "fr": "> 50,0 % de surface avec numéro de série identifiable.",
      "ja": "識別可能な通し番号と共に紙幣面積の50.0%超が現存すること。",
      "zh": "保留票面面积超过 50.0% 且序列号清晰可辨。"
    },
    "talkTrack": {
      "en": "Hello. Under Central Bank of The Bahamas guidelines, genuine banknotes retaining >50% surface area can be redeemed at face value.",
      "hi": "नमस्ते। 50% से अधिक सतह क्षेत्र वाले बहामियन नोट अंकित मूल्य पर भुनाए जा सकते हैं।",
      "es": "Hola. Bajo las directrices del Banco Central de Las Bahamas, los billetes con >50% se canjean por su valor total.",
      "de": "Guten Tag. Nach den Richtlinien der Zentralbank der Bahamas können Noten mit >50 % Fläche zum Nennwert erstattet werden.",
      "fr": "Bonjour. Selon les directives de la Banque centrale des Bahamas, les billets à >50 % peuvent être remboursés à valeur faciale.",
      "ja": "こんにちは。バハマ中央銀行の指針に基づき、50％超の面積が保たれている紙幣の引換をお願いします。",
      "zh": "您好。按照巴哈马央行准则，真钞票面完整度大于 50% 享有全额面值兑换权益。"
    }
  },
  "NZD": {
    "name": {
      "en": "New Zealand Dollar (Brighter Money Polymer)",
      "hi": "न्यूजीलैंड डॉलर",
      "es": "Dólar Neozelandés",
      "de": "Neuseeland-Dollar",
      "fr": "Dollar Néo-Zélandais",
      "ja": "ニュージーランド・ドル",
      "zh": "新西兰元"
    },
    "country": {
      "en": "New Zealand",
      "hi": "न्यूजीलैंड",
      "es": "Nueva Zelanda",
      "de": "Neuseeland",
      "fr": "Nouvelle-Zélande",
      "ja": "ニュージーランド",
      "zh": "新西兰"
    },
    "authority": {
      "en": "Reserve Bank of New Zealand (Te Pūtea Matua)",
      "hi": "रिज़र्व बैंक ऑफ़ न्यूजीलैंड",
      "es": "Banco de la Reserva de Nueva Zelanda",
      "de": "Reserve Bank of New Zealand",
      "fr": "Banque de Réserve de Nouvelle-Zélande",
      "ja": "ニュージーランド準備銀行",
      "zh": "新西兰储备银行"
    },
    "statutoryCode": {
      "en": "Reserve Bank of New Zealand Act 2021",
      "hi": "रिज़र्व बैंक ऑफ़ न्यूजीलैंड अधिनियम 2021",
      "es": "Ley del Banco de la Reserva de Nueva Zelanda de 2021",
      "de": "Reserve Bank of New Zealand Act 2021",
      "fr": "Loi de 2021 sur la Banque de Réserve de Nouvelle-Zélande",
      "ja": "ニュージーランド準備銀行法 2021",
      "zh": "2021年新西兰储备银行法案"
    },
    "thresholdRule": {
      "en": "> 66% remaining = 100% value. Between 33% and 66% = 50% value. < 33% = 0% value.",
      "hi": "> 66% शेष = 100% मूल्य। 33% और 66% के बीच = 50% मूल्य। < 33% = 0% मूल्य।",
      "es": "> 66% restante = 100% de valor. Entre 33% y 66% = 50% de valor. < 33% = 0% de valor.",
      "de": "> 66 % Erhalt = 100 % Wert. Zwischen 33 % und 66 % = 50 % Wert. < 33 % = 0 % Wert.",
      "fr": "> 66 % restant = valeur à 100 %. Entre 33 % et 66 % = 50 % de valeur. < 33 % = 0 % de valeur.",
      "ja": "66%超残存で全額支給。33%から66%の間で半額支給。33%未満は無価値。",
      "zh": "存留面积 > 66% 兑付 100% 面值；介于 33% 至 66% 兑付 50% 面值；低于 33% 不予承付。"
    },
    "talkTrack": {
      "en": "Kia ora. I am submitting this damaged banknote under Reserve Bank of New Zealand damaged currency exchange criteria.",
      "hi": "Kia ora. मैं रिज़र्व बैंक ऑफ़ न्यूजीलैंड मानदंडों के तहत इस नोट को प्रस्तुत कर रहा हूँ।",
      "es": "Kia ora. Presento este billete dañado conforme a los criterios del Banco de la Reserva de Nueva Zelanda.",
      "de": "Kia ora. Ich reiche diese beschädigte Note nach den Kriterien der Reserve Bank of New Zealand ein.",
      "fr": "Kia ora. Je soumets ce billet endommagé selon les critères de la Banque de Réserve de Nouvelle-Zélande.",
      "ja": "Kia ora. ニュージーランド準備銀行の損傷通貨引換基準に基づき本紙幣を提出します。",
      "zh": "Kia ora. 依据新西兰储备银行损伤纸币兑换规则，呈交此受损纸币申请兑领。"
    }
  },
  "SGD": {
    "name": {
      "en": "Singapore Dollar (Portrait Series)",
      "hi": "सिंगापुर डॉलर",
      "es": "Dólar de Singapur",
      "de": "Singapur-Dollar",
      "fr": "Dollar de Singapour",
      "ja": "シンガポール・ドル",
      "zh": "新加坡元"
    },
    "country": {
      "en": "Singapore",
      "hi": "सिंगापुर",
      "es": "Singapur",
      "de": "Singapur",
      "fr": "Singapour",
      "ja": "シンガポール",
      "zh": "新加坡"
    },
    "authority": {
      "en": "Monetary Authority of Singapore (MAS)",
      "hi": "मॉनेटरी अथॉरिटी ऑफ सिंगापुर (MAS)",
      "es": "Autoridad Monetaria de Singapur (MAS)",
      "de": "Währungsbehörde von Singapur (MAS)",
      "fr": "Autorité Monétaire de Singapour (MAS)",
      "ja": "シンガポール金融管理局 (MAS)",
      "zh": "新加坡金融管理局 (MAS)"
    },
    "statutoryCode": {
      "en": "Currency Act (Chapter 69, Section 19)",
      "hi": "मुद्रा अधिनियम (अध्याय 69, धारा 19)",
      "es": "Ley de la Moneda (Capítulo 69, Sección 19)",
      "de": "Währungsgesetz (Kapitel 69, Abschnitt 19)",
      "fr": "Loi sur la Monnaie (Chapitre 69, Section 19)",
      "ja": "通貨法 (第69章 第19条)",
      "zh": "货币法令 (第69章第19条)"
    },
    "thresholdRule": {
      "en": "Full value if intact surface exceeds 2/3 and serial numbers are identifiable.",
      "hi": "यदि बरकरार सतह 2/3 से अधिक है और क्रमांक पहचान योग्य है तो पूरा मूल्य।",
      "es": "Valor completo si la superficie intacta supera 2/3 y los números de serie son identificables.",
      "de": "Voller Wert, wenn die intakte Oberfläche 2/3 übersteigt und die Seriennummern identifizierbar sind.",
      "fr": "Pleine valeur si la surface intacte dépasse 2/3 et que les numéros de série sont identifiables.",
      "ja": "残存面積が2/3を超え、通し番号が確認できる場合は全額面引換。",
      "zh": "完整票面超过三分之二且序列号清晰可辨认者予以全额承付。"
    },
    "talkTrack": {
      "en": "Good day. Under MAS Currency Act guidelines, notes exceeding the statutory threshold qualify for replacement at face value.",
      "hi": "शुभ दिन। MAS दिशानिर्देशों के तहत वैधानिक सीमा से अधिक नोट अंकित मूल्य पर बदले जा सकते हैं।",
      "es": "Buenos días. Bajo las directrices de la MAS, los billetes que superan el umbral califican para reemplazo nominal.",
      "de": "Guten Tag. Nach den MAS-Richtlinien qualifizieren sich Noten über dem Grenzwert für den vollen Umtausch.",
      "fr": "Bonjour. Selon les directives de la MAS, les billets dépassant le seuil statutaire sont remplacés à valeur faciale.",
      "ja": "こんにちは。MAS通貨法ガイドラインに基づき、基準面積を満たす紙幣の額面引換を申請します。",
      "zh": "您好。依据新加坡金融管理局货币法令指导准则，残损比例符合法定标准的钞票应全额换兑。"
    }
  }
};

  function getLocalizedCurrency(code, lang) {
    const loc = lang || (window.i18n ? window.i18n.getLanguage() : 'en');
    const cData = CURRENCY_LOCALIZATIONS[code] || CURRENCY_LOCALIZATIONS['USD'];
    return {
      name: (cData.name && (cData.name[loc] || cData.name['en'])) || '',
      country: (cData.country && (cData.country[loc] || cData.country['en'])) || '',
      authority: (cData.authority && (cData.authority[loc] || cData.authority['en'])) || '',
      statutoryCode: (cData.statutoryCode && (cData.statutoryCode[loc] || cData.statutoryCode['en'])) || '',
      thresholdRule: (cData.thresholdRule && (cData.thresholdRule[loc] || cData.thresholdRule['en'])) || '',
      talkTrack: (cData.talkTrack && (cData.talkTrack[loc] || cData.talkTrack['en'])) || ''
    };
  }

  window.CURRENCY_LOCALIZATIONS = CURRENCY_LOCALIZATIONS;
  window.getLocalizedCurrency = getLocalizedCurrency;
})(typeof window !== 'undefined' ? window : this);
