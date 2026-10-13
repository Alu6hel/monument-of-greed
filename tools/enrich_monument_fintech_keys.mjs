import fs from 'fs';

const i18nPath = '/home/davidalujones/.gemini/antigravity/scratch/monument-of-greed/web_app/i18n.js';
const htmlPath = '/home/davidalujones/.gemini/antigravity/scratch/monument-of-greed/web_app/index.html';

const newTranslations = {
  en: {
    fintechTotalLabel: 'Total Verified Salvage Potential',
    fintechGuaranteedPill: '↑ 100% Guaranteed Payout',
    btnClaimVoucher: 'Claim',
    contrastBadge: 'MAIN STREET BEARER PROTECTION',
    contrastHeadline: '100% FACE VALUE STATUTORY REPLACEMENT',
    contrastSubtext: 'Central bank regulations protect everyday consumers: damaged, washed, or torn banknotes retain 100% value once surface area is verified above 50%.',
    statutoryPayoutLabel: 'Statutory Face Value Payout',
    immediateExchangeLabel: 'Immediate Bank Window Exchange',
    tactileChartBadge: 'TACTILE DATA ENGINE',
    tactileChartTitle: 'Salvage Yield by Package Item',
    tactileChartSubtitle: 'Touch, drag, or hover across bars for fluid feedback, harmonic tones, and valuation breakdown',
    redemptionStandardsTitle: 'REDEMPTION STANDARDS & FORMS',
    redemptionStandardsSub: 'Official central bank regulations, submission checklists, and direct mail laboratory slips',
    freeRecoveryBtn: '⚡ Access Free Recovery Packet'
  },
  hi: {
    fintechTotalLabel: 'कुल सत्यापित रिकवरी क्षमता',
    fintechGuaranteedPill: '↑ 100% गारंटीकृत भुगतान',
    btnClaimVoucher: 'दावा करें',
    contrastBadge: 'आम नागरिक धारक संरक्षण',
    contrastHeadline: '100% अंकित मूल्य वैधानिक प्रतिस्थापन',
    contrastSubtext: 'केंद्रीय बैंक नियम उपभोक्ताओं की रक्षा करते हैं: क्षतिग्रस्त, धुले या फटे नोट 50% से अधिक सतह होने पर 100% मूल्य बनाए रखते हैं।',
    statutoryPayoutLabel: 'वैधानिक अंकित मूल्य भुगतान',
    immediateExchangeLabel: 'तत्काल बैंक काउंटर विनिमय',
    tactileChartBadge: 'स्पर्श डेटा इंजन',
    tactileChartTitle: 'पैकेज मद अनुसार रिकवरी उपज',
    tactileChartSubtitle: 'प्रतिक्रिया, टोन और मूल्यांकन विवरण के लिए बार पर स्पर्श करें या खींचें',
    redemptionStandardsTitle: 'मोचन मानक एवं प्रपत्र',
    redemptionStandardsSub: 'आधिकारिक केंद्रीय बैंक विनियम, चेकलिस्ट और डाक प्रयोगशाला प्रपत्र',
    freeRecoveryBtn: '⚡ मुफ़्त रिकवरी पैकेट प्राप्त करें'
  },
  es: {
    fintechTotalLabel: 'Potencial de Recuperación Verificado Total',
    fintechGuaranteedPill: '↑ 100% Pago Garantizado',
    btnClaimVoucher: 'Reclamar',
    contrastBadge: 'PROTECCIÓN AL PORTADOR CIUDADANO',
    contrastHeadline: '100% VALOR NOMINAL REEMPLAZO ESTATUTARIO',
    contrastSubtext: 'Las normativas de bancos centrales protegen al consumidor: billetes rotos o dañados conservan el 100% de su valor al superar el 50% de superficie.',
    statutoryPayoutLabel: 'Pago Estatutario a Valor Nominal',
    immediateExchangeLabel: 'Canje Directo e Inmediato en Ventanilla',
    tactileChartBadge: 'MOTOR DE DATOS TÁCTIL',
    tactileChartTitle: 'Rendimiento de Salvamento por Paquete',
    tactileChartSubtitle: 'Toque o deslice sobre las barras para respuesta dinámica, tonos armónicos y desglose',
    redemptionStandardsTitle: 'NORMAS Y FORMULARIOS DE CANJE',
    redemptionStandardsSub: 'Reglamentos oficiales de bancos centrales, listas de verificación y envíos a laboratorio',
    freeRecoveryBtn: '⚡ Acceder a Paquete de Canje Gratuito'
  },
  de: {
    fintechTotalLabel: 'Gesamtes verifiziertes Bergungspotenzial',
    fintechGuaranteedPill: '↑ 100% Garantierte Auszahlung',
    btnClaimVoucher: 'Beanspruchen',
    contrastBadge: 'VERBRAUCHERSCHUTZ FÜR INHABER',
    contrastHeadline: '100% NENNWERT GESETZLICHER ERSATZ',
    contrastSubtext: 'Zentralbankvorschriften schützen Verbraucher: Beschädigte oder gewaschene Banknoten behalten 100% ihres Nennwerts, wenn über 50% erhalten sind.',
    statutoryPayoutLabel: 'Gesetzliche Auszahlung zum Nennwert',
    immediateExchangeLabel: 'Sofortiger Umtausch am Bankschalter',
    tactileChartBadge: 'TAKTILER DATEN-MOTOR',
    tactileChartTitle: 'Bergungsertrag nach Notenpaket',
    tactileChartSubtitle: 'Berühren oder wischen Sie für flüssiges Feedback, harmonische Töne und Werterfassung',
    redemptionStandardsTitle: 'UMTAUSCHSTANDARDS & FORMULARE',
    redemptionStandardsSub: 'Offizielle Zentralbankvorschriften, Einreichungs-Checklisten und Laborscheine',
    freeRecoveryBtn: '⚡ Kostenloses Bergungs-Paket öffnen'
  },
  fr: {
    fintechTotalLabel: 'Potentiel Total de Remboursement Vérifié',
    fintechGuaranteedPill: '↑ 100% Paiement Garanti',
    btnClaimVoucher: 'Réclamer',
    contrastBadge: 'PROTECTION LÉGALE DU PORTEUR',
    contrastHeadline: '100% VALEUR NOMINALE REMPLACEMENT LÉGAL',
    contrastSubtext: 'Les règlements des banques centrales protègent les usagers: les billets endommagés conservent 100% de leur valeur si plus de 50% subsistent.',
    statutoryPayoutLabel: 'Paiement Légal à Valeur Nominale',
    immediateExchangeLabel: 'Échange Immédiat au Guichet Bancaire',
    tactileChartBadge: 'MOTEUR DE DONNÉES TACTILE',
    tactileChartTitle: 'Rendement de Remboursement par Billet',
    tactileChartSubtitle: 'Touchez ou glissez sur les barres pour un retour fluide, sons harmoniques et détail',
    redemptionStandardsTitle: 'NORMES ET FORMULAIRES DE REMBOURSEMENT',
    redemptionStandardsSub: 'Directives officielles des banques centrales, listes de contrôle et bordereaux d\'envoi',
    freeRecoveryBtn: '⚡ Accéder au Kit de Récupération Gratuit'
  },
  ja: {
    fintechTotalLabel: '検証済み引換可能総額',
    fintechGuaranteedPill: '↑ 100% 満額引換保証',
    btnClaimVoucher: '申請する',
    contrastBadge: '一般所持者法定保護制度',
    contrastHeadline: '100% 額面全額 法定引換制度',
    contrastSubtext: '中央銀行の規定により、破損や汚損した紙幣でも表面積が50%超残存していれば100%満額で交換されます。',
    statutoryPayoutLabel: '法令に基づく額面通りの支払',
    immediateExchangeLabel: '銀行窓口での即時引換 (T+0)',
    tactileChartBadge: '触覚データエンジン',
    tactileChartTitle: '紙幣パッケージ別 引換回収率',
    tactileChartSubtitle: 'バーをタップまたはドラッグして、サウンドと詳細な価値内訳を確認',
    redemptionStandardsTitle: '引換基準および公式申請様式',
    redemptionStandardsSub: '各国中央銀行の公式鑑定基準、提出前チェックリスト、郵送用鑑定依頼票',
    freeRecoveryBtn: '⚡ 無料引換パケットを利用'
  },
  zh: {
    fintechTotalLabel: '经核实的可兑换全额潜力',
    fintechGuaranteedPill: '↑ 100% 全额兑付保障',
    btnClaimVoucher: '立即领取',
    contrastBadge: '普通持票人法定保护法案',
    contrastHeadline: '100% 面额全额 法定兑换标准',
    contrastSubtext: '央行法规全面保护消费者权益：残缺、水洗或撕裂的纸币，只要存留面积超过 50%，即保留 100% 全额法定面值。',
    statutoryPayoutLabel: '按法定面值全额兑付',
    immediateExchangeLabel: '银行柜台当场即时兑换 (T+0)',
    tactileChartBadge: '触感交互数据引擎',
    tactileChartTitle: '残钞包各券别回收率明细',
    tactileChartSubtitle: '轻触或滑动图表条形，感受动效声效与估值分解',
    redemptionStandardsTitle: '官方兑换标准与申办表格',
    redemptionStandardsSub: '各国央行法定残损币兑换法规、柜台清单及司法鉴定邮寄单',
    freeRecoveryBtn: '⚡ 获取免费兑换申领包'
  }
};

// 1. Inject into i18n.js
let i18nCode = fs.readFileSync(i18nPath, 'utf8');

for (const [lang, keys] of Object.entries(newTranslations)) {
  const langRegex = new RegExp(`(${lang}:\\s*\\{[\\s\\S]*?)(\\n\\s*\\}(?:,|;))`);
  const match = i18nCode.match(langRegex);
  if (!match) {
    console.error(`Could not match locale block: ${lang}`);
    process.exit(1);
  }

  const linesToAdd = Object.entries(keys)
    .map(([k, v]) => `      ${k}: ${JSON.stringify(v)},`)
    .join('\n');

  i18nCode = i18nCode.replace(langRegex, `$1,\n${linesToAdd}$2`);
  console.log(`Injected ${Object.keys(keys).length} keys into locale: ${lang}`);
}

fs.writeFileSync(i18nPath, i18nCode, 'utf8');
console.log('Successfully updated i18n.js!');

// 2. Update web_app/index.html with data-i18n tags
let htmlCode = fs.readFileSync(htmlPath, 'utf8');

// Replace reciprocity claim button
htmlCode = htmlCode.replace(
  '<span>⚡ Access Free Recovery Packet</span>',
  '<span data-i18n="freeRecoveryBtn">⚡ Access Free Recovery Packet</span>'
);

// Replace Total Verified Salvage Potential
htmlCode = htmlCode.replace(
  '<div class="fintech-label">Total Verified Salvage Potential</div>',
  '<div class="fintech-label" data-i18n="fintechTotalLabel">Total Verified Salvage Potential</div>'
);

// Replace ↑ 100% Guaranteed Payout
htmlCode = htmlCode.replace(
  '<span class="fintech-delta-pill positive">↑ 100% Guaranteed Payout</span>',
  '<span class="fintech-delta-pill positive" data-i18n="fintechGuaranteedPill">↑ 100% Guaranteed Payout</span>'
);

// Replace Claim button
htmlCode = htmlCode.replace(
  '<button id="btn-quick-claim-voucher" class="btn-fintech-action" title="Generate Free Instant Bank Voucher">\n              <span>Claim</span>',
  '<button id="btn-quick-claim-voucher" class="btn-fintech-action" title="Generate Free Instant Bank Voucher">\n              <span data-i18n="btnClaimVoucher">Claim</span>'
);

// Replace contrast badge & headline & subtext
htmlCode = htmlCode.replace(
  '<span class="contrast-badge">MAIN STREET BEARER PROTECTION</span>',
  '<span class="contrast-badge" data-i18n="contrastBadge">MAIN STREET BEARER PROTECTION</span>'
);
htmlCode = htmlCode.replace(
  '<h4 class="contrast-headline">100% FACE VALUE STATUTORY REPLACEMENT</h4>',
  '<h4 class="contrast-headline" data-i18n="contrastHeadline">100% FACE VALUE STATUTORY REPLACEMENT</h4>'
);
htmlCode = htmlCode.replace(
  '<p class="contrast-subtext">Central bank regulations protect everyday consumers: damaged, washed, or torn banknotes retain 100% value once surface area is verified above 50%.</p>',
  '<p class="contrast-subtext" data-i18n="contrastSubtext">Central bank regulations protect everyday consumers: damaged, washed, or torn banknotes retain 100% value once surface area is verified above 50%.</p>'
);

// Replace Statutory Face Value Payout
htmlCode = htmlCode.replace(
  '<div class="ft-lbl">Statutory Face Value Payout</div>',
  '<div class="ft-lbl" data-i18n="statutoryPayoutLabel">Statutory Face Value Payout</div>'
);

// Replace Immediate Bank Window Exchange
htmlCode = htmlCode.replace(
  '<div class="ft-lbl">Immediate Bank Window Exchange</div>',
  '<div class="ft-lbl" data-i18n="immediateExchangeLabel">Immediate Bank Window Exchange</div>'
);

// Replace Tactile Chart Badge, Title, Subtitle
htmlCode = htmlCode.replace(
  '<span class="tactile-chart-badge">TACTILE DATA ENGINE</span>',
  '<span class="tactile-chart-badge" data-i18n="tactileChartBadge">TACTILE DATA ENGINE</span>'
);
htmlCode = htmlCode.replace(
  '<h3 class="tactile-chart-title">Salvage Yield by Package Item</h3>',
  '<h3 class="tactile-chart-title" data-i18n="tactileChartTitle">Salvage Yield by Package Item</h3>'
);
htmlCode = htmlCode.replace(
  '<p class="tactile-chart-subtitle">Touch, drag, or hover across bars for fluid feedback, harmonic tones, and valuation breakdown</p>',
  '<p class="tactile-chart-subtitle" data-i18n="tactileChartSubtitle">Touch, drag, or hover across bars for fluid feedback, harmonic tones, and valuation breakdown</p>'
);

// Replace REDEMPTION STANDARDS & FORMS
htmlCode = htmlCode.replace(
  '<span class="standards-badge">REDEMPTION STANDARDS &amp; FORMS</span>',
  '<span class="standards-badge" data-i18n="redemptionStandardsTitle">REDEMPTION STANDARDS &amp; FORMS</span>'
);
htmlCode = htmlCode.replace(
  '<p class="standards-sub">Official central bank regulations, submission checklists, and direct mail laboratory slips</p>',
  '<p class="standards-sub" data-i18n="redemptionStandardsSub">Official central bank regulations, submission checklists, and direct mail laboratory slips</p>'
);

fs.writeFileSync(htmlPath, htmlCode, 'utf8');
console.log('Successfully updated index.html with data-i18n tags!');
