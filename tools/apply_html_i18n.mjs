import fs from 'fs';

let html = fs.readFileSync('web_app/index.html', 'utf8');

const replacements = [
  // 1. Hero assess buttons
  {
    from: '<span class="section-label">ASSESS DAMAGED NOTE</span>\n            <span class="section-sub-label">STATUTORY AUDIT</span>',
    to: '<span class="section-label" data-i18n="assessDamagedNote">ASSESS DAMAGED NOTE</span>\n            <span class="section-sub-label" data-i18n="statutoryAudit">STATUTORY AUDIT</span>'
  },
  // 2. Themes in drawer
  {
    from: '<span class="theme-dot dot-clay"></span>\n            <span>Warm Clay & Peach</span>',
    to: '<span class="theme-dot dot-clay"></span>\n            <span data-i18n="themeWarmClay">Warm Clay & Peach</span>'
  },
  {
    from: '<span class="theme-dot dot-emerald"></span>\n            <span>Vault Emerald</span>',
    to: '<span class="theme-dot dot-emerald"></span>\n            <span data-i18n="themeVaultEmerald">Vault Emerald</span>'
  },
  {
    from: '<span class="theme-dot dot-obsidian"></span>\n            <span>Obsidian OLED</span>',
    to: '<span class="theme-dot dot-obsidian"></span>\n            <span data-i18n="themeObsidian">Obsidian OLED</span>'
  },
  {
    from: '<span class="theme-dot dot-royal"></span>\n            <span>Royal Gold & Navy</span>',
    to: '<span class="theme-dot dot-royal"></span>\n            <span data-i18n="themeRoyalGold">Royal Gold & Navy</span>'
  },
  {
    from: '<span class="theme-dot dot-cyber"></span>\n            <span>Cyber Mint</span>',
    to: '<span class="theme-dot dot-cyber"></span>\n            <span data-i18n="themeCyberMint">Cyber Mint</span>'
  },
  // 3. Batch table headers
  {
    from: `                <tr>
                  <th>Item #</th>
                  <th>Symbol</th>
                  <th>Currency & Denom</th>
                  <th>Damage Type & Icon</th>
                  <th>Surviving Area</th>
                  <th>Statutory Verdict</th>
                  <th>Action</th>
                </tr>`,
    to: `                <tr>
                  <th data-i18n="tblItemNum">Item #</th>
                  <th data-i18n="tblSymbol">Symbol</th>
                  <th data-i18n="tblCurrencyDenom">Currency & Denom</th>
                  <th data-i18n="tblDamageType">Damage Type & Icon</th>
                  <th data-i18n="tblSurvivingArea">Surviving Area</th>
                  <th data-i18n="tblVerdict">Statutory Verdict</th>
                  <th data-i18n="tblAction">Action</th>
                </tr>`
  },
  // 4. Vault Empty State
  {
    from: `<div class="empty-title">Your Salvage Vault is Empty</div>
          <div class="empty-desc">Scan a mutilated banknote with the camera or grid audit, then click "Save to My Vault" in the Claim Dossier to track your redemption here.</div>`,
    to: `<div class="empty-title" data-i18n="vaultEmptyTitle">Your Salvage Vault is Empty</div>
          <div class="empty-desc" data-i18n="vaultEmptyDesc">Scan a mutilated banknote with the camera or grid audit, then click "Save to My Vault" in the Claim Dossier to track your redemption here.</div>`
  },
  // 5. Official Form Viewer Modal
  {
    from: `<h3 id="modal-form-title" class="modal-title">Official Claim Form Viewer</h3>`,
    to: `<h3 id="modal-form-title" class="modal-title" data-i18n="officialClaimFormTitle">Official Claim Form Viewer</h3>`
  },
  {
    from: `<button id="btn-print-modal-form" class="btn btn-primary">Print Form Template</button>`,
    to: `<button id="btn-print-modal-form" class="btn btn-primary" data-i18n="btnPrintFormTemplate">Print Form Template</button>`
  },
  // 6. Teller Script modal title
  {
    from: `<h3 id="modal-script-title" class="modal-title">Bank Teller Talk Track</h3>`,
    to: `<h3 id="modal-script-title" class="modal-title" data-i18n="tellerScriptTitle">Bank Teller Talk Track</h3>`
  },
  // 7. Affidavit Modal
  {
    from: `<h3 class="modal-title">Sworn Affidavit of Total Destruction</h3>`,
    to: `<h3 class="modal-title" data-i18n="affidavitModalTitle">Sworn Affidavit of Total Destruction</h3>`
  },
  {
    from: `<label for="affidavit-jurisdiction">Applicable Jurisdiction / Authority:</label>`,
    to: `<label for="affidavit-jurisdiction" data-i18n="affidavitJurisdictionLabel">Applicable Jurisdiction / Authority:</label>`
  },
  {
    from: `<label for="affidavit-incident-date">Date of Incident / Destruction:</label>`,
    to: `<label for="affidavit-incident-date" data-i18n="affidavitDateLabel">Date of Incident / Destruction:</label>`
  },
  {
    from: `<label for="affidavit-destruction-cause">Specific Cause of Total Destruction:</label>`,
    to: `<label for="affidavit-destruction-cause" data-i18n="affidavitCauseLabel">Specific Cause of Total Destruction:</label>`
  },
  {
    from: `<label for="affidavit-location">Incident Physical Location (City, State/Province, Country):</label>`,
    to: `<label for="affidavit-location" data-i18n="affidavitLocationLabel">Incident Physical Location (City, State/Province, Country):</label>`
  },
  {
    from: `<label for="affidavit-generated-text">Legal Affidavit Declaration (Editable):</label>`,
    to: `<label for="affidavit-generated-text" data-i18n="affidavitStatementLabel">Legal Affidavit Declaration (Editable):</label>`
  },
  {
    from: `<button id="btn-copy-affidavit" class="btn btn-secondary">📋 Copy Declaration</button>`,
    to: `<button id="btn-copy-affidavit" class="btn btn-secondary" data-i18n="btnCopyAffidavit">📋 Copy Declaration</button>`
  },
  {
    from: `<button id="btn-attach-affidavit" class="btn btn-accent">Attach to Claim Dossier</button>`,
    to: `<button id="btn-attach-affidavit" class="btn btn-accent" data-i18n="btnAttachAffidavit">Attach to Claim Dossier</button>`
  },
  // 8. Onboarding Modal
  {
    from: `<h3 class="modal-title" style="margin:0;">Don't Panic, It's Still Money!</h3>
            <span class="onboarding-sub">Official Bearer Protection Guide</span>`,
    to: `<h3 class="modal-title" style="margin:0;" data-i18n="onboardingTitle">Don't Panic, It's Still Money!</h3>
            <span class="onboarding-sub" data-i18n="onboardingSub">Official Bearer Protection Guide</span>`
  },
  {
    from: `<strong>Under central bank laws worldwide, genuine currency never loses its value simply because it is damaged.</strong>`,
    to: `<strong data-i18n="onboardingLead">Under central bank laws worldwide, genuine currency never loses its value simply because it is damaged.</strong>`
  },
  {
    from: `<h4>Snap or Upload</h4>
            <p>Take a quick photo of your damaged banknote on a dark, flat table.</p>`,
    to: `<h4 data-i18n="onboardingStep1Title">Snap or Upload</h4>
            <p data-i18n="onboardingStep1Desc">Take a quick photo of your damaged banknote on a dark, flat table.</p>`
  },
  {
    from: `<h4>The 50% Rule</h4>
            <p>Our offline scanner checks if you have more than half of the original note intact.</p>`,
    to: `<h4 data-i18n="onboardingStep2Title">The 50% Rule</h4>
            <p data-i18n="onboardingStep2Desc">Our offline scanner checks if you have more than half of the original note intact.</p>`
  },
  {
    from: `<h4>100% Cash Back</h4>
            <p>If >50% remains, any commercial bank will exchange it for crisp fresh cash!</p>`,
    to: `<h4 data-i18n="onboardingStep3Title">100% Cash Back</h4>
            <p data-i18n="onboardingStep3Desc">If >50% remains, any commercial bank will exchange it for crisp fresh cash!</p>`
  },
  {
    from: `<strong>Golden Rule:</strong> Never use scotch tape or glue directly on torn banknote edges! Keep your pieces safe in a clean envelope or plastic sleeve.`,
    to: `<strong data-i18n="onboardingGoldenRuleLabel">Golden Rule:</strong> <span data-i18n="onboardingGoldenRuleText">Never use scotch tape or glue directly on torn banknote edges! Keep your pieces safe in a clean envelope or plastic sleeve.</span>`
  },
  {
    from: `<button id="btn-onboarding-sample" class="btn btn-secondary" type="button">🧪 Try Sample Damaged Bill</button>`,
    to: `<button id="btn-onboarding-sample" class="btn btn-secondary" type="button" data-i18n="btnTrySampleBill">🧪 Try Sample Damaged Bill</button>`
  },
  {
    from: `<button id="btn-onboarding-start" class="btn btn-primary" type="button">🚀 Start My Free Assessment</button>`,
    to: `<button id="btn-onboarding-start" class="btn btn-primary" type="button" data-i18n="btnStartAssessment">🚀 Start My Free Assessment</button>`
  },
  // 9. Gift Modal
  {
    from: `<h3 class="modal-title" style="margin:0;">Complimentary Mutilated Banknote Recovery Kit</h3>
            <span class="onboarding-sub">$49 Statutory Tool Unlocked Free of Charge</span>`,
    to: `<h3 class="modal-title" style="margin:0;" data-i18n="giftModalTitle">Complimentary Mutilated Banknote Recovery Kit</h3>
            <span class="onboarding-sub" data-i18n="giftModalSub">$49 Statutory Tool Unlocked Free of Charge</span>`
  },
  {
    from: `<strong>Bearer Protection Guarantee:</strong> Under 31 CFR § 100 and ECB Decision 2013/10, central banks are legally mandated to replace damaged notes. Use this free packet at any commercial bank counter or mail it directly to the Treasury forensic lab.`,
    to: `<strong data-i18n="reciprocityTitle">Bearer Protection Guarantee:</strong> <span data-i18n="giftWelcomeAlert">Under 31 CFR § 100 and ECB Decision 2013/10, central banks are legally mandated to replace damaged notes. Use this free packet at any commercial bank counter or mail it directly to the Treasury forensic lab.</span>`
  },
  {
    from: `<button id="btn-close-gift-modal" class="btn btn-primary" type="button">Got It, Thanks!</button>`,
    to: `<button id="btn-close-gift-modal" class="btn btn-primary" type="button" data-i18n="btnGotItThanks">Got It, Thanks!</button>`
  },
  // 10. Vault Security PIN Modal
  {
    from: `<h3 id="vault-auth-title" class="vault-auth-title">Salvage Vault Security Lock</h3>
        <p id="vault-auth-subtitle" class="vault-auth-subtitle">Enter your 4-digit security PIN to unlock financial records</p>`,
    to: `<h3 id="vault-auth-title" class="vault-auth-title" data-i18n="pinModalTitle">Salvage Vault Security Lock</h3>
        <p id="vault-auth-subtitle" class="vault-auth-subtitle" data-i18n="pinModalSubtitle">Enter your 4-digit security PIN to unlock financial records</p>`
  },
  // 11. Purge Modal
  {
    from: `<h3 class="purge-title">CONFIRM PERMANENT VAULT PURGE</h3>
      <p class="purge-desc">This action will immediately and irreversibly delete all salvaged banknotes, claimant PII, serial numbers, and postal tracking receipts stored in your local ledger. No cloud backup exists.</p>`,
    to: `<h3 class="purge-title" data-i18n="dangerZoneTitle">CONFIRM PERMANENT VAULT PURGE</h3>
      <p class="purge-desc" data-i18n="dangerZoneDesc">This action will immediately and irreversibly delete all salvaged banknotes, claimant PII, serial numbers, and postal tracking receipts stored in your local ledger. No cloud backup exists.</p>`
  },
  // 12. Banking Disclaimer Modal
  {
    from: `<h3 class="modal-title" style="margin:0;">Statutory Banking Disclaimer</h3>
            <span style="font-size:12px;color:var(--text-muted);">Federal &amp; Central Bank Regulatory Notice</span>`,
    to: `<h3 class="modal-title" style="margin:0;" data-i18n="disclaimerModalTitle">Statutory Banking Disclaimer</h3>
            <span style="font-size:12px;color:var(--text-muted);" data-i18n="disclaimerModalText">Federal &amp; Central Bank Regulatory Notice</span>`
  },
  // 13. Privacy Modal
  {
    from: `<h3 class="modal-title" style="margin:0;">Data Safety &amp; Offline Privacy</h3>
            <span style="font-size:12px;color:var(--text-muted);">Zero Cloud Transmission Guarantee</span>`,
    to: `<h3 class="modal-title" style="margin:0;" data-i18n="privacyModalTitle">Data Safety &amp; Offline Privacy</h3>
            <span style="font-size:12px;color:var(--text-muted);" data-i18n="privacyModalText">Zero Cloud Transmission Guarantee</span>`
  },
  // 14. Counter Shield Modal
  {
    from: `<div class="shield-badge-tag">
            <span class="shield-pulse-dot"></span>
            <span>BANK-GRADE STATUTORY COUNTER SHIELD</span>
          </div>`,
    to: `<div class="shield-badge-tag">
            <span class="shield-pulse-dot"></span>
            <span data-i18n="shieldTitle">BANK-GRADE STATUTORY COUNTER SHIELD</span>
          </div>`
  },
  {
    from: `<span class="shield-alert-eyebrow">OFFICIAL BEARER LEGAL NOTICE</span>`,
    to: `<span class="shield-alert-eyebrow" data-i18n="shieldStatuteHeader">OFFICIAL BEARER LEGAL NOTICE</span>`
  },
  {
    from: `<p class="qr-sub">Scan with branch terminal or mobile camera to open the official government regulation page:</p>`,
    to: `<p class="qr-sub" data-i18n="shieldQrHint">Scan with branch terminal or mobile camera to open the official government regulation page:</p>`
  }
];

let applied = 0;
for (const { from, to } of replacements) {
  if (html.includes(from)) {
    html = html.replace(from, to);
    applied++;
  } else {
    console.warn("Could not find block:\n" + from.slice(0, 80));
  }
}

fs.writeFileSync('web_app/index.html', html, 'utf8');
console.log(`Applied ${applied} of ${replacements.length} template replacements to index.html`);
