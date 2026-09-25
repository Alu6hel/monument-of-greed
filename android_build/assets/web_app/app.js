/**
 * MONUMENT OF GREED — CORE APPLICATION LOGIC
 * Optical Banknote Surface Assessment, Central Banking Standards & Dossier Compilation
 * 100% Offline Optical Computer Vision • Zero Cloud Dependency
 * Certified under Alumungandr Master Charter © 2026
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. WEB AUDIO SYNTHESIZER (Tactile Acoustic Feedback)
  // =========================================================================
  class AudioFx {
    constructor() {
      this.ctx = null;
    }

    init() {
      if (!this.ctx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          this.ctx = new AudioContextClass();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    tap() {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(480, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(220, this.ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    }

    shutter() {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    }

    successChord() {
      this.init();
      if (!this.ctx) return;
      const freqs = [523.25, 659.25, 783.99, 1046.50]; // C Major Chord
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.05);
        gain.gain.setValueAtTime(0.06, this.ctx.currentTime + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35 + idx * 0.05);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + idx * 0.05);
        osc.stop(this.ctx.currentTime + 0.4 + idx * 0.05);
      });
    }

    warningBuzz() {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.2);
    }
  }

  const audio = new AudioFx();

  // =========================================================================
  // 2. GLOBAL DATA: CENTRAL BANKING REGISTRY & REDEMPTION CODES
  // =========================================================================
  const CURRENCY_REGISTRY = [
    {
      code: 'USD',
      name: 'United States Dollar',
      country: 'United States',
      region: 'North America',
      flag: '🇺🇸',
      statutoryCode: '31 CFR Part 100 (Exchange of Mutilated Paper Currency)',
      authority: 'Bureau of Engraving and Printing (BEP) / Federal Reserve',
      thresholdRule: '> 50.0% surface area required for 100% face-value reimbursement. If ≤ 50% remains, requires sworn affidavit that missing portion was completely destroyed.',
      aspectRatio: 2.353, // 156.0mm x 66.3mm
      formName: 'BEP Form 5283 (Mutilated Currency Claim Form)',
      formId: 'BEP5283',
      talkTrack: `"Hello, I have an authentic United States banknote that sustained physical damage. According to Federal Reserve guidelines and 31 CFR § 100.5, because more than 50% of the original note remains intact with legible serial markers, this note qualifies for direct face-value exchange. I would like to deposit or exchange this note, or have you submit it to the Federal Reserve Cash Office on my behalf."`,
      submissionAddress: 'Bureau of Engraving and Printing, Mutilated Currency Branch, Room 344-A, 14th and C Streets SW, Washington, DC 20228',
      officialUrl: 'https://www.bep.gov/services/mutilated-currency'
    },
    {
      code: 'EUR',
      name: 'Euro Note',
      country: 'Eurozone (20 Member States)',
      region: 'Europe',
      flag: '🇪🇺',
      statutoryCode: 'ECB Decision 2013/10 (Article 3: Exchange of Mutilated Euro Banknotes)',
      authority: 'European Central Bank (ECB) & National Central Banks (Bundesbank, Banque de France, Banca d’Italia, etc.)',
      thresholdRule: '> 50.0% of the original banknote surface area presented. If 50% or less is presented, claimant must prove that the missing parts have been destroyed.',
      aspectRatio: 1.818, // €50 standard (140mm x 77mm)
      formName: 'ECB / NCB Request for Exchange of Damaged Euro Banknotes',
      formId: 'ECB_REQUEST',
      talkTrack: `"Good morning. Under European Central Bank Decision ECB/2013/10, Article 3, euro banknotes with more than 50% of their surface intact qualify for immediate 1-to-1 face value replacement. I am presenting this damaged genuine note for replacement into my account."`,
      submissionAddress: 'European Central Bank, Sonnemannstrasse 20, 60314 Frankfurt am Main, Germany (or any National Central Bank counter)',
      officialUrl: 'https://www.ecb.europa.eu/euro/banknotes/damaged/html/index.en.html'
    },
    {
      code: 'GBP',
      name: 'British Pound Sterling (Polymer & Paper)',
      country: 'United Kingdom',
      region: 'Europe',
      flag: '🇬🇧',
      statutoryCode: 'Currency and Bank Notes Act (Damaged Banknote Scheme)',
      authority: 'Bank of England — Damaged Banknote Section',
      thresholdRule: 'Bank of England pays full face value if more than half (>50%) of the banknote is presented, or if satisfied the remaining part has been destroyed.',
      aspectRatio: 1.904, // £20 polymer (139mm x 73mm)
      formName: 'Bank of England Damaged Banknote Application Form',
      formId: 'BOE_CLAIM',
      talkTrack: `"Hello. I am presenting a damaged Bank of England banknote. As more than 50% of the polymer note is physically intact, Bank of England guidelines permit commercial banks to accept it for deposit, or direct me to the Debden Damaged Banknote facility."`,
      submissionAddress: 'Department DBM, Bank of England, Langston Road, Loughton, Essex IG10 3TN, United Kingdom',
      officialUrl: 'https://www.bankofengland.co.uk/banknotes/damaged-and-mutilated-banknotes'
    },
    {
      code: 'JMD',
      name: 'Jamaican Dollar (Polymer Series)',
      country: 'Jamaica',
      region: 'Caribbean',
      flag: '🇯🇲',
      statutoryCode: 'Bank of Jamaica Act, Section 28 (Mutilated Tender Recovery)',
      authority: 'Bank of Jamaica (BOJ) — Currency Department',
      thresholdRule: 'More than 50% of the banknote surface must be present, with at least one complete and readable serial number, and security substrate elements verified.',
      aspectRatio: 2.132, // 145mm x 68mm
      formName: 'Bank of Jamaica Mutilated Currency Examination Slip',
      formId: 'BOJ_FORM',
      talkTrack: `"Good day. Under the Bank of Jamaica Act Section 28, genuine Jamaican currency notes with more than half of the surface area and a clear serial number are redeemable for full face value. I request this note be exchanged or forwarded to the BOJ Currency Counter at Nethersole Place."`,
      submissionAddress: 'Bank of Jamaica, Currency Department, Nethersole Place, Kingston, Jamaica',
      officialUrl: 'https://boj.org.jm/currency/currency-faqs/'
    },
    {
      code: 'CAD',
      name: 'Canadian Dollar (Frontier Polymer)',
      country: 'Canada',
      region: 'North America',
      flag: '🇨🇦',
      statutoryCode: 'Bank of Canada Act, Section 25 (Redemption Policy)',
      authority: 'Bank of Canada — Bank Note Redemption Service',
      thresholdRule: 'Bank of Canada redeems bank notes if more than three-fifths (60%) or more than half (>50%) is presented with intact security features.',
      aspectRatio: 2.162, // 152.4mm x 70.0mm
      formName: 'Bank of Canada Mutilated Bank Note Claim Submission',
      formId: 'BOC_CLAIM',
      talkTrack: `"Hello, I would like to exchange this damaged Canadian banknote. As more than half of the polymer substrate and serial numbers are present, it qualifies under the Bank of Canada redemption policy."`,
      submissionAddress: 'Bank of Canada, Bank Note Redemption Service, 234 Wellington Street, Ottawa, ON K1A 0G9, Canada',
      officialUrl: 'https://www.bankofcanada.ca/banknotes/bank-note-redemption-service/'
    },
    {
      code: 'AUD',
      name: 'Australian Dollar (Next Gen Polymer)',
      country: 'Australia',
      region: 'Asia & Pacific',
      flag: '🇦🇺',
      statutoryCode: 'Reserve Bank Act 1959 & RBA Damaged Banknotes Policy',
      authority: 'Reserve Bank of Australia (RBA) — Note Issue Department',
      thresholdRule: 'Full Value if ≥ 80% remains. Pro-rata value if between 20% and 80% remains (e.g., 60% remaining pays 60% of face value). Zero value under 20%.',
      aspectRatio: 2.000,
      formName: 'RBA Damaged Banknotes Claim Form',
      formId: 'RBA_CLAIM',
      talkTrack: `"Hello. Under Reserve Bank of Australia Damaged Banknotes Policy, damaged polymer currency can be redeemed through commercial banks. This note has over 50% remaining and is eligible for statutory payment."`,
      submissionAddress: 'Reserve Bank of Australia, Note Issue Department, 65 Martin Place, Sydney NSW 2000, Australia',
      officialUrl: 'https://banknotes.rba.gov.au/damaged-banknotes/'
    },
    {
      code: 'JPY',
      name: 'Japanese Yen',
      country: 'Japan',
      region: 'Asia & Pacific',
      flag: '🇯🇵',
      statutoryCode: 'Bank of Japan Act (Standards for Exchange of Damaged Currency)',
      authority: 'Bank of Japan (Nihon Ginko)',
      thresholdRule: '100% Value if ≥ 2/3 (66.7%) remaining. 50% Value if between 2/5 (40.0%) and 2/3 remaining. Zero Value if < 2/5 (< 40.0%) remaining.',
      aspectRatio: 2.000, // 150mm x 76mm
      formName: 'Bank of Japan Damaged Currency Exchange Request',
      formId: 'BOJ_JAPAN',
      talkTrack: `"Sumimasen. Nihon Ginko damaged currency exchange standards state that banknotes with 2/3 or more remaining receive 100% face value. I would like to exchange this note at your teller window."`,
      submissionAddress: 'Bank of Japan Head Office, 2-1-1 Nihonbashi-Hongokucho, Chuo-ku, Tokyo 103-0021, Japan',
      officialUrl: 'https://www.boj.or.jp/en/about/services/bn/hikikae.htm'
    },
    {
      code: 'CHF',
      name: 'Swiss Franc (9th Series)',
      country: 'Switzerland',
      region: 'Europe',
      flag: '🇨🇭',
      statutoryCode: 'Federal Act on Currency and Payment Instruments (CPIA)',
      authority: 'Swiss National Bank (SNB)',
      thresholdRule: '> 50.0% surface area presented, or claimant presents proof that missing fragments were destroyed.',
      aspectRatio: 2.000,
      formName: 'SNB Cash Office Application for Exchange of Damaged Notes',
      formId: 'SNB_CLAIM',
      talkTrack: `"Grüezi. Under Swiss National Bank rules, banknotes with more than 50% surface area intact are replaced at full nominal value. I wish to submit this note for replacement."`,
      submissionAddress: 'Swiss National Bank, Cash Division, Bundesplatz 1, CH-3003 Berne, Switzerland',
      officialUrl: 'https://www.snb.ch/en/iabout/cash'
    },
    {
      code: 'TTD',
      name: 'Trinidad and Tobago Dollar',
      country: 'Trinidad and Tobago',
      region: 'Caribbean',
      flag: '🇹🇹',
      statutoryCode: 'Central Bank Act Chapter 79:02, Section 23',
      authority: 'Central Bank of Trinidad and Tobago',
      thresholdRule: '> 50.0% of polymer note presented with at least one complete serial number.',
      aspectRatio: 2.100,
      formName: 'CBTT Mutilated Note Certificate',
      formId: 'CBTT_FORM',
      talkTrack: `"Good morning. Under Central Bank Act regulations, polymer notes possessing more than 50% of the surface area are eligible for redemption at face value."`,
      submissionAddress: 'Central Bank of Trinidad and Tobago, Eric Williams Plaza, Independence Square, Port of Spain',
      officialUrl: 'https://www.central-bank.org.tt/'
    },
    {
      code: 'BSD',
      name: 'Bahamian Dollar (CRISP Series)',
      country: 'Bahamas',
      region: 'Caribbean',
      flag: '🇧🇸',
      statutoryCode: 'Central Bank of The Bahamas Act (Mutilated Tender Protocol)',
      authority: 'Central Bank of The Bahamas',
      thresholdRule: '> 50.0% surface area with identifiable serial number.',
      aspectRatio: 2.150,
      formName: 'CBOB Mutilated Note Declaration',
      formId: 'CBOB_FORM',
      talkTrack: `"Hello. Under Central Bank of The Bahamas guidelines, genuine banknotes retaining >50% surface area can be redeemed at face value."`,
      submissionAddress: 'Central Bank of The Bahamas, Frederick Street, Nassau, Bahamas',
      officialUrl: 'https://www.centralbankbahamas.com/'
    },
    {
      code: 'NZD',
      name: 'New Zealand Dollar (Brighter Money Polymer)',
      country: 'New Zealand',
      region: 'Asia & Pacific',
      flag: '🇳🇿',
      statutoryCode: 'Reserve Bank of New Zealand Act 2021',
      authority: 'Reserve Bank of New Zealand (Te Pūtea Matua)',
      thresholdRule: '> 66% remaining = 100% value. Between 33% and 66% = 50% value. < 33% = 0% value.',
      aspectRatio: 2.000,
      formName: 'RBNZ Mutilated Currency Claim Form',
      formId: 'RBNZ_CLAIM',
      talkTrack: `"Kia ora. I am submitting this damaged banknote under Reserve Bank of New Zealand damaged currency exchange criteria."`,
      submissionAddress: 'Reserve Bank of New Zealand, 2 The Terrace, Wellington 6011, New Zealand',
      officialUrl: 'https://www.rbnz.govt.nz/'
    },
    {
      code: 'SGD',
      name: 'Singapore Dollar (Portrait Series)',
      country: 'Singapore',
      region: 'Asia & Pacific',
      flag: '🇸🇬',
      statutoryCode: 'Currency Act (Chapter 69, Section 19)',
      authority: 'Monetary Authority of Singapore (MAS)',
      thresholdRule: 'Full value if intact surface exceeds 2/3 and serial numbers are identifiable.',
      aspectRatio: 2.050,
      formName: 'MAS Mutilated Currency Assessment Voucher',
      formId: 'MAS_CLAIM',
      talkTrack: `"Good day. Under MAS Currency Act guidelines, notes exceeding the statutory threshold qualify for replacement at face value."`,
      submissionAddress: 'Monetary Authority of Singapore, 10 Shenton Way, MAS Building, Singapore 079117',
      officialUrl: 'https://www.mas.gov.sg/'
    }
  ];

  // =========================================================================
  // 3. GLOBAL DATA: CENTRAL BANK & TELLER LOCATOR DIRECTORY
  // =========================================================================
  const BANK_LOCATOR_REGISTRY = [
    {
      name: 'Bureau of Engraving and Printing — Mutilated Currency Division',
      type: 'central',
      category: 'Central Banking Authority',
      city: 'Washington, DC',
      country: 'United States',
      address: '14th & C Streets SW, Room 344-A, Washington, DC 20228',
      phone: '+1 (866) 575-2361',
      notes: 'Direct mail submissions or walk-in appointment. Processes severely charred, water-damaged, and fragmented USD.',
      hours: 'Mon - Fri: 8:00 AM - 4:00 PM EST',
      mapsQuery: 'Bureau of Engraving and Printing, 14th & C Streets SW, Washington, DC 20228'
    },
    {
      name: 'Federal Reserve Bank of New York — Cash Services',
      type: 'central',
      category: 'Federal Reserve Bank',
      city: 'New York, NY',
      country: 'United States',
      address: '33 Liberty Street, New York, NY 10045',
      phone: '+1 (212) 720-5000',
      notes: 'Accepts institutional deposits and inquiries regarding mutilated US currency forwarding.',
      hours: 'Mon - Fri: 8:30 AM - 5:00 PM EST',
      mapsQuery: 'Federal Reserve Bank of New York, 33 Liberty Street, New York, NY'
    },
    {
      name: 'JPMorgan Chase — Metro Flagship Cash Center',
      type: 'commercial',
      category: 'Commercial Bank Exchange',
      city: 'New York, NY',
      country: 'United States',
      address: '270 Park Avenue, New York, NY 10017',
      phone: '+1 (212) 270-6000',
      notes: 'Over-the-counter replacement for account holders with notes meeting 31 CFR >50% threshold.',
      hours: 'Mon - Fri: 9:00 AM - 5:00 PM EST',
      mapsQuery: 'JPMorgan Chase, 270 Park Avenue, New York, NY'
    },
    {
      name: 'Bank of England — Damaged Banknotes Section',
      type: 'mail',
      category: 'Central Postal Division',
      city: 'Loughton, Essex',
      country: 'United Kingdom',
      address: 'Department DBM, Bank of England, Langston Road, Loughton, Essex IG10 3TN',
      phone: '+44 (0)20 3461 4878',
      notes: 'Primary national examination laboratory for UK paper and polymer mutilated currency.',
      hours: 'Postal Submissions Accepted 24/7 (Courier Tracked Recommended)',
      mapsQuery: 'Bank of England, Langston Road, Loughton, Essex IG10 3TN'
    },
    {
      name: 'Deutsche Bundesbank — Filiale Frankfurt am Main',
      type: 'central',
      category: 'Eurosystem National Central Bank',
      city: 'Frankfurt am Main',
      country: 'Germany',
      address: 'Taunusanlage 5, 60329 Frankfurt am Main, Germany',
      phone: '+49 69 9566 3500',
      notes: 'Free on-site exchange of damaged Euro banknotes for individuals under ECB Decision 2013/10.',
      hours: 'Mon - Fri: 8:00 AM - 1:00 PM CET',
      mapsQuery: 'Deutsche Bundesbank Filiale Frankfurt, Taunusanlage 5, Frankfurt'
    },
    {
      name: 'Banque de France — Caisse Centrale Paris',
      type: 'central',
      category: 'Eurosystem National Central Bank',
      city: 'Paris',
      country: 'France',
      address: '39 Rue Croix des Petits Champs, 75001 Paris, France',
      phone: '+33 1 42 92 42 92',
      notes: 'National central cashier window for exchanging mutilated euros exceeding 50% surface area.',
      hours: 'Mon - Fri: 9:00 AM - 12:00 PM CET',
      mapsQuery: 'Banque de France, 39 Rue Croix des Petits Champs, 75001 Paris'
    },
    {
      name: 'Bank of Jamaica — Currency Department Teller Window',
      type: 'central',
      category: 'Central Bank Cash Office',
      city: 'Kingston',
      country: 'Jamaica',
      address: 'Nethersole Place, Kingston, Jamaica',
      phone: '+1 (876) 922-0750',
      notes: 'Public banking counter for exchange of damaged JMD polymer and paper notes under BOJ Act Sec 28.',
      hours: 'Mon - Fri: 9:00 AM - 2:00 PM EST',
      mapsQuery: 'Bank of Jamaica, Nethersole Place, Kingston, Jamaica'
    },
    {
      name: 'National Commercial Bank (NCB) — Kingston Atrium Branch',
      type: 'commercial',
      category: 'Commercial Bank Exchange',
      city: 'Kingston',
      country: 'Jamaica',
      address: '32 Trafalgar Road, Kingston 10, Jamaica',
      phone: '+1 (888) 622-3477',
      notes: 'Accepts torn polymer notes with verified >50% surface for account deposit or BOJ forwarding.',
      hours: 'Mon - Fri: 8:30 AM - 3:00 PM EST',
      mapsQuery: 'National Commercial Bank, 32 Trafalgar Road, Kingston, Jamaica'
    },
    {
      name: 'Bank of Japan — Head Office Operations Department',
      type: 'central',
      category: 'Central Banking Authority',
      city: 'Tokyo',
      country: 'Japan',
      address: '2-1-1 Nihonbashi-Hongokucho, Chuo-ku, Tokyo 103-0021, Japan',
      phone: '+81 3-3279-1111',
      notes: 'Direct assessment window applying the 2/3 (100%) and 2/5 (50%) redemption ratio standards.',
      hours: 'Mon - Fri: 9:00 AM - 3:00 PM JST',
      mapsQuery: 'Bank of Japan, 2-1-1 Nihonbashi-Hongokucho, Chuo-ku, Tokyo'
    },
    {
      name: 'Bank of Canada — Bank Note Redemption Service',
      type: 'mail',
      category: 'Central Postal Division',
      city: 'Ottawa, ON',
      country: 'Canada',
      address: '234 Wellington Street, Ottawa, ON K1A 0G9, Canada',
      phone: '+1 (800) 303-1282',
      notes: 'Statutory examination service for Canadian polymer notes and obsolete legal tender.',
      hours: 'Mail-in Service Only (Registered Mail Recommended)',
      mapsQuery: 'Bank of Canada, 234 Wellington Street, Ottawa, ON K1A 0G9'
    },
    {
      name: 'Reserve Bank of Australia — Note Issue Department',
      type: 'central',
      category: 'Central Banking Authority',
      city: 'Sydney, NSW',
      country: 'Australia',
      address: '65 Martin Place, Sydney NSW 2000, Australia',
      phone: '+61 2 9551 8111',
      notes: 'Assessment facility providing pro-rata payment for damaged Australian polymer notes.',
      hours: 'Mon - Fri: 9:30 AM - 4:00 PM AEST',
      mapsQuery: 'Reserve Bank of Australia, 65 Martin Place, Sydney NSW'
    },
    {
      name: 'Swiss National Bank — Cash Division Berne',
      type: 'central',
      category: 'Central Banking Authority',
      city: 'Berne',
      country: 'Switzerland',
      address: 'Bundesplatz 1, CH-3003 Berne, Switzerland',
      phone: '+41 58 631 00 00',
      notes: 'Counter service for Swiss Francs conforming to statutory 50% surface area requirements.',
      hours: 'Mon - Fri: 8:00 AM - 12:00 PM, 1:30 PM - 4:30 PM CET',
      mapsQuery: 'Swiss National Bank, Bundesplatz 1, Berne, Switzerland'
    }
  ];

  // =========================================================================
  // 4. APP STATE MANAGEMENT
  // =========================================================================
  const state = {
    activeTab: 'tab-home',
    currentTheme: 'theme-clay-peach',
    scanner: {
      stream: null,
      facingMode: 'environment',
      cameraActive: false,
      videoEl: null,
      canvasEl: null,
      ctx: null,
      sourceCanvas: null,
      sourceCtx: null,
      currencyCode: 'USD',
      denomination: '20',
      threshold: 110,
      gain: 1.2,
      highlightMask: true,
      highlightMissing: true,
      measuredPercent: 58.4,
      fragmentPixels: 0,
      targetPixels: 0,
      animFrameId: null
    },
    grid100: {
      cells: new Array(100).fill(true), // true = intact, false = destroyed
      isDrawing: false,
      drawState: true
    },
    dossier: {
      refId: 'MOG-2026-9812-US',
      claimantName: 'Legal Currency Bearer',
      phone: '+1 (555) 234-5678',
      currency: 'USD $20 Federal Reserve Note',
      surfacePercent: '58.4%',
      serialLeft: 'MF 89234812 B',
      serialRight: 'MF 89234812 B',
      cause: 'Accidentally torn during pocket extraction',
      narrative: 'The presented banknote was damaged accidentally under ordinary domestic circumstances. More than 50% of the genuine original note remains physically intact with legible serial identifiers. No portion of this banknote has been previously redeemed or tendered for duplicate value.'
    }
  };

  // =========================================================================
  // 5. INITIALIZATION & DOM BINDINGS
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    initOpticalScanner();
    init100GridAudit();
    initDatabaseView();
    initLocatorView();
    initDossierView();
    initModals();
    renderFeedCards('all');
  });

  // =========================================================================
  // 6. THEME ENGINE (5 Live Themes)
  // =========================================================================
  function initTheme() {
    const savedTheme = localStorage.getItem('mog_theme') || 'theme-clay-peach';
    applyTheme(savedTheme);

    const themeButtons = document.querySelectorAll('.theme-select-btn');
    themeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const theme = btn.dataset.theme;
        applyTheme(theme);
        audio.tap();
      });
    });

    const quickThemeBtn = document.getElementById('btn-theme-quick');
    if (quickThemeBtn) {
      const themes = ['theme-clay-peach', 'theme-vault-emerald', 'theme-obsidian-oled', 'theme-royal-gold', 'theme-cyber-mint'];
      quickThemeBtn.addEventListener('click', () => {
        const currentIndex = themes.indexOf(state.currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        applyTheme(themes[nextIndex]);
        audio.tap();
      });
    }
  }

  function applyTheme(themeName) {
    document.body.className = themeName;
    state.currentTheme = themeName;
    localStorage.setItem('mog_theme', themeName);

    const themeButtons = document.querySelectorAll('.theme-select-btn');
    themeButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === themeName);
    });
  }

  // =========================================================================
  // 7. NAVIGATION & DRAWER SYSTEM
  // =========================================================================
  function initNavigation() {
    // Drawer Toggles
    const drawerOpenBtn = document.getElementById('btn-drawer-open');
    const drawerCloseBtn = document.getElementById('btn-drawer-close');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const appDrawer = document.getElementById('app-drawer');

    function openDrawer() {
      appDrawer.classList.add('active');
      drawerOverlay.classList.add('active');
      audio.tap();
    }

    function closeDrawer() {
      appDrawer.classList.remove('active');
      drawerOverlay.classList.remove('active');
    }

    if (drawerOpenBtn) drawerOpenBtn.addEventListener('click', openDrawer);
    if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

    // Header title click -> Home
    const headerTitle = document.getElementById('brand-header-link');
    if (headerTitle) {
      headerTitle.addEventListener('click', () => {
        switchTab('tab-home');
        audio.tap();
      });
    }

    // Bottom Navigation Tabs
    const bottomNavButtons = document.querySelectorAll('.bottom-nav .nav-tab-btn');
    bottomNavButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.dataset.tab;
        switchTab(targetTab);
        audio.tap();
      });
    });

    // Drawer Navigation Links
    const drawerLinks = document.querySelectorAll('.drawer-nav-link');
    drawerLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetTab = link.dataset.tab;
        switchTab(targetTab);
        closeDrawer();
        audio.tap();
      });
    });

    // Home Action Triggers (The 3 Circular Hero Buttons)
    const triggerLiveScan = document.getElementById('trigger-live-scan');
    const triggerUploadPhoto = document.getElementById('trigger-upload-photo');
    const triggerGridAudit = document.getElementById('trigger-grid-audit');
    const fileInputUpload = document.getElementById('file-input-upload');

    if (triggerLiveScan) {
      triggerLiveScan.addEventListener('click', () => {
        switchTab('tab-scanner');
        audio.tap();
        startCameraStream();
      });
    }

    if (triggerUploadPhoto) {
      triggerUploadPhoto.addEventListener('click', () => {
        audio.tap();
        fileInputUpload.click();
      });
    }

    if (fileInputUpload) {
      fileInputUpload.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          const file = e.target.files[0];
          loadImageFromFile(file);
        }
      });
    }

    if (triggerGridAudit) {
      triggerGridAudit.addEventListener('click', () => {
        switchTab('tab-grid');
        audio.tap();
      });
    }

    // Category Pill Filters (Home Tab)
    const categoryPills = document.querySelectorAll('#home-category-pills .filter-pill');
    categoryPills.forEach(pill => {
      pill.addEventListener('click', () => {
        categoryPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const cat = pill.dataset.category;
        renderFeedCards(cat);
        audio.tap();
      });
    });

    // See all database button
    const btnSeeAll = document.getElementById('btn-see-all-db');
    if (btnSeeAll) {
      btnSeeAll.addEventListener('click', () => {
        switchTab('tab-database');
        audio.tap();
      });
    }

    // Pro crown button
    const btnCrown = document.getElementById('btn-pro-crown');
    if (btnCrown) {
      btnCrown.addEventListener('click', () => {
        audio.successChord();
        alert('Monument of Greed Pro Edition: Statutory Banking Compliance System active.\nCertified under Alumungandr Master Charter © 2026.');
      });
    }
  }

  function switchTab(tabId) {
    state.activeTab = tabId;

    // Panes
    const panes = document.querySelectorAll('.tab-pane');
    panes.forEach(pane => {
      pane.classList.toggle('active', pane.id === tabId);
    });

    // Bottom Nav Buttons
    const bottomNavButtons = document.querySelectorAll('.bottom-nav .nav-tab-btn');
    bottomNavButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });

    // Drawer Nav Links
    const drawerLinks = document.querySelectorAll('.drawer-nav-link');
    drawerLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.tab === tabId);
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Stop camera if navigating away from scanner
    if (tabId !== 'tab-scanner' && state.scanner.cameraActive) {
      stopCameraStream();
    }

    // If entering scanner tab, render frame
    if (tabId === 'tab-scanner') {
      recalculateSurfaceArea();
    }
  }

  function renderFeedCards(category) {
    const cards = document.querySelectorAll('#home-feed-cards .guide-feed-card');
    cards.forEach(card => {
      const cardCat = card.dataset.cat;
      if (category === 'all' || category === cardCat || (category === 'forms' && card.querySelector('.btn-open-form'))) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // =========================================================================
  // 8. OPTICAL NOTE SCANNER ENGINE (Canvas 2D Edge & Area Calculation)
  // =========================================================================
  function initOpticalScanner() {
    state.scanner.videoEl = document.getElementById('scanner-video');
    state.scanner.canvasEl = document.getElementById('scanner-canvas');
    state.scanner.ctx = state.scanner.canvasEl.getContext('2d', { willReadFrequently: true });

    // Create persistent offscreen buffer canvas to preserve original image
    state.scanner.sourceCanvas = document.createElement('canvas');
    state.scanner.sourceCtx = state.scanner.sourceCanvas.getContext('2d', { willReadFrequently: true });

    // Buttons
    const btnStartCamera = document.getElementById('btn-start-camera');
    const btnSwitchCamera = document.getElementById('btn-switch-camera');
    const btnTriggerUpload = document.getElementById('btn-trigger-upload');
    const btnLoadSample = document.getElementById('btn-load-sample');
    const selectCurrency = document.getElementById('select-scanner-currency');
    const selectDenom = document.getElementById('select-scanner-denom');

    if (btnStartCamera) {
      btnStartCamera.addEventListener('click', () => {
        if (state.scanner.cameraActive) {
          stopCameraStream();
          btnStartCamera.innerHTML = '<span class="btn-icon">📷</span><span>Start Camera</span>';
        } else {
          startCameraStream();
          btnStartCamera.innerHTML = '<span class="btn-icon">⏹️</span><span>Freeze Frame</span>';
        }
        audio.tap();
      });
    }

    if (btnSwitchCamera) {
      btnSwitchCamera.addEventListener('click', () => {
        state.scanner.facingMode = state.scanner.facingMode === 'environment' ? 'user' : 'environment';
        stopCameraStream();
        startCameraStream();
        audio.tap();
      });
    }

    if (btnTriggerUpload) {
      btnTriggerUpload.addEventListener('click', () => {
        document.getElementById('file-input-upload').click();
        audio.tap();
      });
    }

    if (btnLoadSample) {
      btnLoadSample.addEventListener('click', () => {
        loadSampleDamagedBill();
        audio.tap();
      });
    }

    if (selectCurrency) {
      selectCurrency.addEventListener('change', (e) => {
        state.scanner.currencyCode = e.target.value;
        updateScannerAspectGuide();
        recalculateSurfaceArea();
        audio.tap();
      });
    }

    if (selectDenom) {
      selectDenom.addEventListener('change', (e) => {
        state.scanner.denomination = e.target.value;
        recalculateSurfaceArea();
        audio.tap();
      });
    }

    // Sliders
    const sliderThreshold = document.getElementById('slider-threshold');
    const sliderGain = document.getElementById('slider-edge-gain');
    const valThreshold = document.getElementById('val-threshold');
    const valGain = document.getElementById('val-gain');

    if (sliderThreshold) {
      sliderThreshold.addEventListener('input', (e) => {
        state.scanner.threshold = parseInt(e.target.value, 10);
        valThreshold.textContent = state.scanner.threshold;
        recalculateSurfaceArea();
      });
    }

    if (sliderGain) {
      sliderGain.addEventListener('input', (e) => {
        state.scanner.gain = parseFloat(e.target.value);
        valGain.textContent = state.scanner.gain.toFixed(1);
        recalculateSurfaceArea();
      });
    }

    // Toggles
    const btnToggleMask = document.getElementById('btn-toggle-mask');
    const btnToggleMissing = document.getElementById('btn-toggle-missing');
    const btnRecalculate = document.getElementById('btn-recalculate');

    if (btnToggleMask) {
      btnToggleMask.addEventListener('click', () => {
        state.scanner.highlightMask = !state.scanner.highlightMask;
        btnToggleMask.classList.toggle('active', state.scanner.highlightMask);
        recalculateSurfaceArea();
        audio.tap();
      });
    }

    if (btnToggleMissing) {
      btnToggleMissing.addEventListener('click', () => {
        state.scanner.highlightMissing = !state.scanner.highlightMissing;
        btnToggleMissing.classList.toggle('active', state.scanner.highlightMissing);
        recalculateSurfaceArea();
        audio.tap();
      });
    }

    if (btnRecalculate) {
      btnRecalculate.addEventListener('click', () => {
        recalculateSurfaceArea();
        audio.tap();
      });
    }

    // Export to Dossier
    const btnExportDossier = document.getElementById('btn-export-to-dossier');
    if (btnExportDossier) {
      btnExportDossier.addEventListener('click', () => {
        transferScanToDossier();
        switchTab('tab-dossier');
        audio.successChord();
      });
    }

    // Initialize with sample banknote
    updateScannerAspectGuide();
    loadSampleDamagedBill();
  }

  function updateScannerAspectGuide() {
    const reg = CURRENCY_REGISTRY.find(c => c.code === state.scanner.currencyCode) || CURRENCY_REGISTRY[0];
    const aspectGuide = document.getElementById('aspect-guide-box');
    if (!aspectGuide) return;
    const ratio = reg.aspectRatio;
    aspectGuide.style.aspectRatio = `${ratio} / 1`;
  }

  function startCameraStream() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert('Camera access is not supported by your browser environment. You can upload a photo of the damaged note or use the Sample Bill button.');
      return;
    }

    const constraints = {
      video: {
        facingMode: state.scanner.facingMode,
        width: { ideal: 1280 },
        height: { ideal: 720 }
      }
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => {
        state.scanner.stream = stream;
        state.scanner.videoEl.srcObject = stream;
        state.scanner.videoEl.play();
        state.scanner.cameraActive = true;

        document.getElementById('btn-switch-camera').style.display = 'inline-flex';
        document.getElementById('scanner-status-text').textContent = 'LIVE CAMERA ACTIVE';
        audio.shutter();

        runVideoPipeline();
      })
      .catch(err => {
        console.warn('Camera stream error:', err);
        document.getElementById('scanner-status-text').textContent = 'CAMERA UNAVAILABLE — USE UPLOAD';
        alert('Could not start camera (' + err.message + '). Please use the Upload Photo button or test with the Sample Bill.');
      });
  }

  function stopCameraStream() {
    if (state.scanner.stream) {
      state.scanner.stream.getTracks().forEach(track => track.stop());
      state.scanner.stream = null;
    }
    state.scanner.cameraActive = false;
    if (state.scanner.animFrameId) {
      cancelAnimationFrame(state.scanner.animFrameId);
      state.scanner.animFrameId = null;
    }
    const statusText = document.getElementById('scanner-status-text');
    if (statusText) statusText.textContent = 'SCANNER READY';
  }

  function runVideoPipeline() {
    if (!state.scanner.cameraActive) return;

    const video = state.scanner.videoEl;
    const sCanvas = state.scanner.sourceCanvas;
    const sCtx = state.scanner.sourceCtx;

    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      sCanvas.width = video.videoWidth || 640;
      sCanvas.height = video.videoHeight || 480;

      // Copy camera frame to source buffer
      sCtx.drawImage(video, 0, 0, sCanvas.width, sCanvas.height);

      // Perform optical measurement
      recalculateSurfaceArea();
    }

    state.scanner.animFrameId = requestAnimationFrame(runVideoPipeline);
  }

  function loadImageFromFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        stopCameraStream();
        const sCanvas = state.scanner.sourceCanvas;
        const sCtx = state.scanner.sourceCtx;

        sCanvas.width = img.width;
        sCanvas.height = img.height;
        sCtx.drawImage(img, 0, 0);

        document.getElementById('scanner-status-text').textContent = 'IMAGE LOADED';
        switchTab('tab-scanner');
        recalculateSurfaceArea();
        audio.shutter();
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  /**
   * Generates an authentic simulated damaged banknote fragment for immediate testing
   */
  function loadSampleDamagedBill() {
    stopCameraStream();
    const sCanvas = state.scanner.sourceCanvas;
    const sCtx = state.scanner.sourceCtx;

    sCanvas.width = 640;
    sCanvas.height = 360;

    // Dark table surface background
    sCtx.fillStyle = '#1e293b';
    sCtx.fillRect(0, 0, sCanvas.width, sCanvas.height);

    // Banknote aspect ratio 2.353:1
    const reg = CURRENCY_REGISTRY.find(c => c.code === state.scanner.currencyCode) || CURRENCY_REGISTRY[0];
    const targetW = sCanvas.width * 0.82;
    const targetH = targetW / reg.aspectRatio;
    const noteX = Math.round((sCanvas.width - targetW) / 2);
    const noteY = Math.round((sCanvas.height - targetH) / 2);
    const noteW = Math.round(targetW);
    const noteH = Math.round(targetH);

    // Save state
    sCtx.save();

    // Create an authentic irregular torn path for the banknote fragment (58.4% remaining)
    sCtx.beginPath();
    sCtx.moveTo(noteX, noteY); // Top-left
    sCtx.lineTo(noteX + noteW * 0.62, noteY); // Top edge to tear point

    // Jagged torn edge downwards
    sCtx.lineTo(noteX + noteW * 0.59, noteY + noteH * 0.20);
    sCtx.lineTo(noteX + noteW * 0.64, noteY + noteH * 0.38);
    sCtx.lineTo(noteX + noteW * 0.57, noteY + noteH * 0.55);
    sCtx.lineTo(noteX + noteW * 0.63, noteY + noteH * 0.72);
    sCtx.lineTo(noteX + noteW * 0.56, noteY + noteH * 0.88);
    sCtx.lineTo(noteX + noteW * 0.584, noteY + noteH); // Bottom edge tear point

    sCtx.lineTo(noteX, noteY + noteH); // Bottom-left
    sCtx.closePath();
    sCtx.clip();

    // Banknote Paper Background (warm treasury green / intaglio texture)
    const grad = sCtx.createLinearGradient(noteX, noteY, noteX + noteW, noteY + noteH);
    grad.addColorStop(0, '#e8f0e6');
    grad.addColorStop(0.5, '#d5e4d2');
    grad.addColorStop(1, '#c8dac5');
    sCtx.fillStyle = grad;
    sCtx.fillRect(noteX, noteY, noteW, noteH);

    // Fine Banknote Guilloche Borders & Intaglio Engravings
    sCtx.strokeStyle = '#2d5a38';
    sCtx.lineWidth = 4;
    sCtx.strokeRect(noteX + 8, noteY + 8, noteW - 16, noteH - 16);

    sCtx.strokeStyle = '#4a7c59';
    sCtx.lineWidth = 1;
    sCtx.strokeRect(noteX + 14, noteY + 14, noteW - 28, noteH - 28);

    // Intaglio Text & Numerals
    sCtx.fillStyle = '#1c3e25';
    sCtx.font = 'bold 36px serif';
    sCtx.fillText('20', noteX + 24, noteY + 54);

    sCtx.font = 'bold 16px sans-serif';
    sCtx.fillText('THE UNITED STATES OF AMERICA', noteX + 75, noteY + 45);

    sCtx.font = '10px serif';
    sCtx.fillText('FEDERAL RESERVE NOTE', noteX + 140, noteY + 62);

    // Left Serial Number (Intact)
    sCtx.fillStyle = '#065f46';
    sCtx.font = 'bold 14px monospace';
    sCtx.fillText('MF 89234812 B', noteX + 24, noteY + 110);
    sCtx.fillText('F6', noteX + 32, noteY + 130);

    // Treasury Seal
    sCtx.beginPath();
    sCtx.arc(noteX + 110, noteY + 120, 22, 0, Math.PI * 2);
    sCtx.fillStyle = 'rgba(6, 95, 70, 0.2)';
    sCtx.fill();
    sCtx.strokeStyle = '#065f46';
    sCtx.lineWidth = 2;
    sCtx.stroke();

    // Portrait Silhouette
    sCtx.beginPath();
    sCtx.ellipse(noteX + 210, noteY + 105, 36, 48, 0, 0, Math.PI * 2);
    sCtx.fillStyle = 'rgba(45, 90, 56, 0.25)';
    sCtx.fill();

    sCtx.restore();

    document.getElementById('scanner-status-text').textContent = 'SAMPLE BILL LOADED (58.4%)';
    recalculateSurfaceArea();
  }

  function recalculateSurfaceArea() {
    const sCanvas = state.scanner.sourceCanvas;
    const canvas = state.scanner.canvasEl;
    const ctx = state.scanner.ctx;
    if (!sCanvas || !canvas || !ctx || sCanvas.width === 0) return;

    canvas.width = sCanvas.width;
    canvas.height = sCanvas.height;

    // Draw clean source frame
    ctx.drawImage(sCanvas, 0, 0);

    // Process optical calculation
    processOpticalFrame(canvas, ctx);
  }

  /**
   * Optical Edge Detection & Pixel Surface Area Calculation Pipeline
   */
  function processOpticalFrame(canvas, ctx) {
    const width = canvas.width;
    const height = canvas.height;
    if (width === 0 || height === 0) return;

    // Target Banknote Aspect Ratio Guide
    const reg = CURRENCY_REGISTRY.find(c => c.code === state.scanner.currencyCode) || CURRENCY_REGISTRY[0];
    const targetAspect = reg.aspectRatio;

    // Define standard central bounding box for the banknote target
    let targetW = width * 0.82;
    let targetH = targetW / targetAspect;

    if (targetH > height * 0.85) {
      targetH = height * 0.85;
      targetW = targetH * targetAspect;
    }

    const targetX = Math.round((width - targetW) / 2);
    const targetY = Math.round((height - targetH) / 2);
    const targetAreaPixels = Math.round(targetW * targetH);

    // Read pixel data from source canvas in target bounding box
    const sCtx = state.scanner.sourceCtx;
    const imgData = sCtx.getImageData(targetX, targetY, targetW, targetH);
    const data = imgData.data;

    let fragmentPixelCount = 0;
    const threshold = state.scanner.threshold;
    const gain = state.scanner.gain;

    // Create an overlay mask buffer
    const maskCanvas = document.createElement('canvas');
    maskCanvas.width = targetW;
    maskCanvas.height = targetH;
    const mCtx = maskCanvas.getContext('2d');
    const maskData = mCtx.createImageData(targetW, targetH);
    const maskPixels = maskData.data;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      // Luminance Y formula
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) * gain;

      // Banknote fragment detection: distinct from dark background
      const isBanknote = luminance > threshold;

      if (isBanknote) {
        fragmentPixelCount++;
        if (state.scanner.highlightMask) {
          maskPixels[i] = 16;       // R (Emerald)
          maskPixels[i + 1] = 185;  // G
          maskPixels[i + 2] = 129;  // B
          maskPixels[i + 3] = 95;   // Alpha
        }
      } else {
        if (state.scanner.highlightMissing) {
          maskPixels[i] = 239;      // R (Missing Area Red)
          maskPixels[i + 1] = 68;   // G
          maskPixels[i + 2] = 68;   // B
          maskPixels[i + 3] = 85;   // Alpha
        }
      }
    }

    // Calculate percentage
    let percent = (fragmentPixelCount / targetAreaPixels) * 100.0;
    if (percent > 100.0) percent = 100.0;
    if (percent < 0.0) percent = 0.0;

    state.scanner.measuredPercent = percent;
    state.scanner.fragmentPixels = fragmentPixelCount;
    state.scanner.targetPixels = targetAreaPixels;

    // Draw the overlay mask on top of the original image with transparency
    if (state.scanner.highlightMask || state.scanner.highlightMissing) {
      mCtx.putImageData(maskData, 0, 0);
      ctx.drawImage(maskCanvas, targetX, targetY);
    }

    // Update gauge & verdict
    updateGaugeAndVerdict(percent, fragmentPixelCount, targetAreaPixels, reg);
  }

  function updateGaugeAndVerdict(percent, fragmentPx, targetPx, reg) {
    const percentDisplay = document.getElementById('meter-percent-display');
    const needle = document.getElementById('gauge-needle');
    const activeArc = document.getElementById('gauge-active-arc');
    const verdictBadge = document.getElementById('verdict-badge');
    const verdictTitle = document.getElementById('verdict-status-title');
    const verdictIcon = document.getElementById('verdict-status-icon');
    const verdictDetails = document.getElementById('verdict-details');
    const valFragment = document.getElementById('val-fragment-px');
    const valTarget = document.getElementById('val-target-px');
    const valThreshold = document.getElementById('val-legal-threshold');
    const btnExport = document.getElementById('btn-export-to-dossier');

    // Display formatted percent
    if (percentDisplay) percentDisplay.textContent = percent.toFixed(1) + '%';
    if (valFragment) valFragment.textContent = fragmentPx.toLocaleString() + ' px';
    if (valTarget) valTarget.textContent = targetPx.toLocaleString() + ' px';

    // Speedometer needle angle: -90deg is 0%, +90deg is 100%
    const angle = -90 + (percent / 100.0) * 180;
    if (needle) needle.setAttribute('transform', `rotate(${angle} 100 100)`);

    // SVG dashoffset for gauge arc (251.2 is half-circle perimeter)
    const dashoffset = 251.2 - (percent / 100.0) * 251.2;
    if (activeArc) {
      activeArc.style.strokeDashoffset = dashoffset;
      activeArc.style.color = percent >= 50.5 ? '#10b981' : (percent >= 49.0 ? '#f59e0b' : '#ef4444');
    }

    // Threshold check (standard is >50%, JPY has 2-tier 66.7% / 40.0%)
    const isJPY = reg.code === 'JPY';
    let passed = false;
    let marginal = false;

    if (isJPY) {
      if (valThreshold) valThreshold.textContent = '≥ 66.7% (100%)';
      if (percent >= 66.7) {
        passed = true;
      } else if (percent >= 40.0) {
        marginal = true;
      }
    } else {
      if (valThreshold) valThreshold.textContent = '> 50.0%';
      if (percent >= 51.0) {
        passed = true;
      } else if (percent >= 49.0 && percent < 51.0) {
        marginal = true;
      }
    }

    // Verdict Badge & Text
    if (verdictBadge && verdictTitle && verdictDetails) {
      verdictBadge.className = 'verdict-pill';

      if (passed) {
        verdictBadge.classList.add('verdict-pass');
        verdictIcon.textContent = '✅';
        verdictTitle.textContent = isJPY ? '100% REDEMPTION ELIGIBLE' : 'STATUTORY STANDARD MET (>50%)';
        verdictDetails.innerHTML = `<strong>Eligible for 100% Full Face Value Replacement.</strong> Measured fragment surface area (${percent.toFixed(1)}%) satisfies the statutory requirement under <strong>${reg.statutoryCode}</strong>. Commercial bank tellers and central bank redemption counters are authorized to exchange this bill.`;
        if (btnExport) btnExport.removeAttribute('disabled');
      } else if (marginal) {
        verdictBadge.classList.add('verdict-marginal');
        verdictIcon.textContent = '⚠️';
        verdictTitle.textContent = isJPY ? '50% REDEMPTION TIER' : 'MARGINAL BOUNDARY (50% ± 1%)';
        verdictDetails.innerHTML = isJPY 
          ? `<strong>Eligible for 50% Face Value.</strong> Surface area (${percent.toFixed(1)}%) falls in the Bank of Japan secondary tier (between 40% and 66.7%).`
          : `<strong>Borderline Measurement.</strong> At ${percent.toFixed(1)}%, this note is on the exact boundary line. A commercial bank branch may require forwarding to the central bank forensic laboratory for micrometer paper mass determination.`;
        if (btnExport) btnExport.removeAttribute('disabled');
      } else {
        verdictBadge.classList.add('verdict-fail');
        verdictIcon.textContent = '❌';
        verdictTitle.textContent = 'BELOW 50% STATUTORY THRESHOLD';
        verdictDetails.innerHTML = `<strong>Special Affidavit Required.</strong> Remaining surface area (${percent.toFixed(1)}%) is less than half. Under <strong>${reg.statutoryCode}</strong>, this note cannot be redeemed across commercial bank counters unless accompanied by a sworn affidavit proving the missing portion was completely destroyed.`;
        if (btnExport) btnExport.removeAttribute('disabled');
      }
    }
  }

  function transferScanToDossier() {
    state.dossier.surfacePercent = state.scanner.measuredPercent.toFixed(1) + '%';
    state.dossier.currency = `${state.scanner.currencyCode} $${state.scanner.denomination} Note`;

    // Render snapshot onto dossier preview canvas
    const dossierCanvas = document.getElementById('dossier-snapshot-canvas');
    if (dossierCanvas && state.scanner.canvasEl) {
      const dCtx = dossierCanvas.getContext('2d');
      dossierCanvas.width = 400;
      dossierCanvas.height = 170;
      dCtx.drawImage(state.scanner.canvasEl, 0, 0, dossierCanvas.width, dossierCanvas.height);
    }

    // Update input fields in dossier tab
    const inputArea = document.getElementById('dossier-surface-area');
    const inputCurr = document.getElementById('dossier-currency');
    if (inputArea) inputArea.value = `${state.dossier.surfacePercent} (${state.scanner.measuredPercent >= 51.0 ? 'Statutory Standard Met' : 'Special Affidavit'})`;
    if (inputCurr) inputCurr.value = state.dossier.currency;

    updateDossierSheet();
  }

  // =========================================================================
  // 9. INTERACTIVE 100-GRID AUDIT ENGINE
  // =========================================================================
  function init100GridAudit() {
    const gridContainer = document.getElementById('grid-100');
    if (!gridContainer) return;

    gridContainer.innerHTML = '';

    // Create 100 cells
    for (let i = 0; i < 100; i++) {
      const cell = document.createElement('div');
      cell.className = 'grid-cell';
      cell.dataset.index = i;

      // Desktop/Mouse events
      cell.addEventListener('mousedown', (e) => {
        state.grid100.isDrawing = true;
        state.grid100.drawState = cell.classList.contains('destroyed');
        toggleCell(cell, state.grid100.drawState);
        audio.tap();
      });

      cell.addEventListener('mouseenter', () => {
        if (state.grid100.isDrawing) {
          toggleCell(cell, state.grid100.drawState);
        }
      });

      // Touch events for mobile
      cell.addEventListener('touchstart', (e) => {
        state.grid100.isDrawing = true;
        state.grid100.drawState = cell.classList.contains('destroyed');
        toggleCell(cell, state.grid100.drawState);
        audio.tap();
      }, { passive: true });

      gridContainer.appendChild(cell);
    }

    window.addEventListener('mouseup', () => { state.grid100.isDrawing = false; });
    window.addEventListener('touchend', () => { state.grid100.isDrawing = false; });

    // Buttons
    const btnAll = document.getElementById('btn-grid-all');
    const btnClear = document.getElementById('btn-grid-clear');
    const btn51 = document.getElementById('btn-grid-51');
    const btnInvert = document.getElementById('btn-grid-invert');
    const btnGridToDossier = document.getElementById('btn-grid-to-dossier');

    if (btnAll) {
      btnAll.addEventListener('click', () => {
        document.querySelectorAll('.grid-cell').forEach(c => c.classList.remove('destroyed'));
        updateGridCalculations();
        audio.tap();
      });
    }

    if (btnClear) {
      btnClear.addEventListener('click', () => {
        document.querySelectorAll('.grid-cell').forEach(c => c.classList.add('destroyed'));
        updateGridCalculations();
        audio.tap();
      });
    }

    if (btn51) {
      btn51.addEventListener('click', () => {
        // Set exactly 51 cells intact, 49 destroyed
        const cells = document.querySelectorAll('.grid-cell');
        cells.forEach((c, idx) => {
          if (idx < 51) {
            c.classList.remove('destroyed');
          } else {
            c.classList.add('destroyed');
          }
        });
        updateGridCalculations();
        audio.successChord();
      });
    }

    if (btnInvert) {
      btnInvert.addEventListener('click', () => {
        document.querySelectorAll('.grid-cell').forEach(c => c.classList.toggle('destroyed'));
        updateGridCalculations();
        audio.tap();
      });
    }

    if (btnGridToDossier) {
      btnGridToDossier.addEventListener('click', () => {
        const intact = 100 - document.querySelectorAll('.grid-cell.destroyed').length;
        state.dossier.surfacePercent = intact.toFixed(1) + '% (100-Grid Audit)';
        const inputArea = document.getElementById('dossier-surface-area');
        if (inputArea) inputArea.value = state.dossier.surfacePercent;

        // Render grid onto dossier snapshot canvas
        renderGridToDossierCanvas();
        updateDossierSheet();
        switchTab('tab-dossier');
        audio.successChord();
      });
    }

    // Default to 51% preset
    if (btn51) btn51.click();
  }

  function toggleCell(cell, makeIntact) {
    if (makeIntact) {
      cell.classList.remove('destroyed');
    } else {
      cell.classList.add('destroyed');
    }
    updateGridCalculations();
  }

  function updateGridCalculations() {
    const destroyedCount = document.querySelectorAll('.grid-cell.destroyed').length;
    const intactCount = 100 - destroyedCount;

    const percentDisplay = document.getElementById('grid-percent-display');
    const intactDisplay = document.getElementById('grid-intact-count');
    const destroyedDisplay = document.getElementById('grid-destroyed-count');
    const verdictBanner = document.getElementById('grid-verdict-banner');

    if (percentDisplay) percentDisplay.textContent = intactCount.toFixed(1) + '%';
    if (intactDisplay) intactDisplay.textContent = intactCount;
    if (destroyedDisplay) destroyedDisplay.textContent = destroyedCount;

    if (verdictBanner) {
      if (intactCount >= 51) {
        verdictBanner.className = 'verdict-banner banner-green';
        verdictBanner.innerHTML = `
          <div class="banner-title">✅ STATUTORY >50% THRESHOLD MET (${intactCount}%)</div>
          <div class="banner-desc">Meets US 31 CFR § 100.5, ECB Decision 2013/10, and Bank of England standard. Eligible for 100% face-value reimbursement.</div>
        `;
      } else {
        verdictBanner.className = 'verdict-banner banner-red';
        verdictBanner.innerHTML = `
          <div class="banner-title">❌ BELOW STATUTORY THRESHOLD (${intactCount}%)</div>
          <div class="banner-desc">Does not meet the standard >50% rule. Requires a sworn legal affidavit proving the missing segments were completely destroyed.</div>
        `;
      }
    }
  }

  function renderGridToDossierCanvas() {
    const canvas = document.getElementById('dossier-snapshot-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 170;

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const cellW = (canvas.width - 24) / 10;
    const cellH = (canvas.height - 24) / 10;

    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach((c, idx) => {
      const col = idx % 10;
      const row = Math.floor(idx / 10);
      const x = 12 + col * cellW;
      const y = 12 + row * cellH;

      if (!c.classList.contains('destroyed')) {
        ctx.fillStyle = '#10b981';
      } else {
        ctx.fillStyle = 'rgba(239, 68, 68, 0.4)';
      }
      ctx.fillRect(x + 1, y + 1, cellW - 2, cellH - 2);
    });

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1;
    ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);
  }

  // =========================================================================
  // 10. GLOBAL REDEMPTION DATABASE VIEW
  // =========================================================================
  function initDatabaseView() {
    const listContainer = document.getElementById('db-currency-list');
    const searchInput = document.getElementById('db-search-input');
    const regionPills = document.querySelectorAll('.db-region-pills .filter-pill');

    function renderList(filterText = '', filterRegion = 'all') {
      if (!listContainer) return;
      listContainer.innerHTML = '';

      const query = filterText.toLowerCase().trim();

      const filtered = CURRENCY_REGISTRY.filter(item => {
        const matchesQuery = !query || 
          item.code.toLowerCase().includes(query) ||
          item.name.toLowerCase().includes(query) ||
          item.country.toLowerCase().includes(query) ||
          item.statutoryCode.toLowerCase().includes(query) ||
          item.authority.toLowerCase().includes(query);

        const matchesRegion = filterRegion === 'all' || item.region === filterRegion;

        return matchesQuery && matchesRegion;
      });

      if (filtered.length === 0) {
        listContainer.innerHTML = '<div style="padding:24px;text-align:center;color:var(--text-muted);">No matching currencies found. Try searching USD, EUR, GBP, JMD, or BEP.</div>';
        return;
      }

      filtered.forEach(item => {
        const div = document.createElement('div');
        div.className = 'db-currency-item';
        div.innerHTML = `
          <div class="db-item-summary">
            <div class="db-item-main">
              <span class="db-currency-flag">${item.flag}</span>
              <div class="db-item-titles">
                <h4>${item.code} — ${item.name}</h4>
                <span>${item.authority}</span>
              </div>
            </div>
            <div class="db-item-chevron">▼</div>
          </div>
          <div class="db-item-details">
            <div class="db-detail-block">
              <h5>STATUTORY REGULATION</h5>
              <p><strong>${item.statutoryCode}</strong></p>
              <p style="margin-top:4px;">${item.thresholdRule}</p>
            </div>
            <div class="db-detail-block">
              <h5>POSTAL SUBMISSION LABORATORY</h5>
              <p>${item.submissionAddress}</p>
            </div>
            <div class="db-item-actions">
              <button class="btn-sm btn-accent btn-view-script" data-currency="${item.code}">Teller Talk Track</button>
              <button class="btn-sm btn-outline btn-view-form" data-form="${item.formId}">View ${item.formName.split(' ')[0]} Form</button>
            </div>
          </div>
        `;

        // Accordion click
        const summary = div.querySelector('.db-item-summary');
        summary.addEventListener('click', () => {
          div.classList.toggle('open');
          audio.tap();
        });

        // Script button
        const btnScript = div.querySelector('.btn-view-script');
        btnScript.addEventListener('click', (e) => {
          e.stopPropagation();
          showTellerScript(item.code);
          audio.tap();
        });

        // Form button
        const btnForm = div.querySelector('.btn-view-form');
        btnForm.addEventListener('click', (e) => {
          e.stopPropagation();
          showOfficialForm(item.formId);
          audio.tap();
        });

        listContainer.appendChild(div);
      });
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const activeRegion = document.querySelector('.db-region-pills .filter-pill.active')?.dataset.dbregion || 'all';
        renderList(e.target.value, activeRegion);
      });
    }

    regionPills.forEach(pill => {
      pill.addEventListener('click', () => {
        regionPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const region = pill.dataset.dbregion;
        const text = searchInput ? searchInput.value : '';
        renderList(text, region);
        audio.tap();
      });
    });

    renderList();

    // Attach listeners to Home feed buttons as well
    document.addEventListener('click', (e) => {
      if (e.target.matches('.btn-open-guide')) {
        const code = e.target.dataset.currency;
        showTellerScript(code);
        audio.tap();
      } else if (e.target.matches('.btn-open-form')) {
        const formId = e.target.dataset.form;
        showOfficialForm(formId);
        audio.tap();
      } else if (e.target.matches('.btn-open-locator')) {
        switchTab('tab-locator');
        audio.tap();
      }
    });
  }

  // =========================================================================
  // 11. CENTRAL BANK & TELLER LOCATOR VIEW
  // =========================================================================
  function initLocatorView() {
    const gridContainer = document.getElementById('bank-locations-grid');
    const searchInput = document.getElementById('locator-search-input');
    const typeTabs = document.querySelectorAll('.locator-type-tabs .type-tab');

    function renderLocations(filterText = '', filterType = 'all') {
      if (!gridContainer) return;
      gridContainer.innerHTML = '';

      const query = filterText.toLowerCase().trim();

      const filtered = BANK_LOCATOR_REGISTRY.filter(loc => {
        const matchesQuery = !query ||
          loc.name.toLowerCase().includes(query) ||
          loc.city.toLowerCase().includes(query) ||
          loc.country.toLowerCase().includes(query) ||
          loc.notes.toLowerCase().includes(query);

        const matchesType = filterType === 'all' || loc.type === filterType;

        return matchesQuery && matchesType;
      });

      if (filtered.length === 0) {
        gridContainer.innerHTML = '<div style="padding:24px;text-align:center;color:var(--text-muted);">No locations match your search. Try searching Washington, Frankfurt, London, or Kingston.</div>';
        return;
      }

      filtered.forEach(loc => {
        const card = document.createElement('div');
        card.className = 'bank-location-card';

        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.mapsQuery)}`;
        const telUrl = `tel:${loc.phone.replace(/[^+\d]/g, '')}`;

        card.innerHTML = `
          <div class="location-top-row">
            <h4 class="location-name">${loc.name}</h4>
            <span class="location-type-tag">${loc.category}</span>
          </div>
          <div class="location-address">📍 ${loc.address}</div>
          <div class="location-notes">ℹ️ ${loc.notes} • <strong>Hours:</strong> ${loc.hours}</div>
          <div class="location-actions">
            <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-sm btn-accent" style="text-decoration:none;">🗺️ Open in Google Maps</a>
            <a href="${telUrl}" class="btn-sm btn-secondary" style="text-decoration:none;">📞 Call Office</a>
          </div>
        `;

        gridContainer.appendChild(card);
      });
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const activeType = document.querySelector('.locator-type-tabs .type-tab.active')?.dataset.type || 'all';
        renderLocations(e.target.value, activeType);
      });
    }

    typeTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        typeTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const type = tab.dataset.type;
        const text = searchInput ? searchInput.value : '';
        renderLocations(text, type);
        audio.tap();
      });
    });

    renderLocations();
  }

  // =========================================================================
  // 12. OFFICIAL CLAIM DOSSIER VIEW
  // =========================================================================
  function initDossierView() {
    const btnUpdatePreview = document.getElementById('btn-update-preview');
    const btnPrintDossier = document.getElementById('btn-print-dossier');

    if (btnUpdatePreview) {
      btnUpdatePreview.addEventListener('click', () => {
        updateDossierSheet();
        audio.tap();
      });
    }

    if (btnPrintDossier) {
      btnPrintDossier.addEventListener('click', () => {
        updateDossierSheet();
        audio.shutter();
        window.print();
      });
    }

    // Set today's date
    const sheetDate = document.getElementById('sheet-date');
    if (sheetDate) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      sheetDate.textContent = new Date().toLocaleDateString('en-US', options);
    }

    // Initialize snapshot canvas with default bill if empty
    setTimeout(() => {
      const dCanvas = document.getElementById('dossier-snapshot-canvas');
      if (dCanvas && state.scanner.canvasEl) {
        const dCtx = dCanvas.getContext('2d');
        dCtx.drawImage(state.scanner.canvasEl, 0, 0, dCanvas.width, dCanvas.height);
      }
    }, 500);

    updateDossierSheet();
  }

  function updateDossierSheet() {
    const claimantName = document.getElementById('dossier-claimant-name')?.value || 'Legal Currency Bearer';
    const phone = document.getElementById('dossier-phone')?.value || '+1 (555) 234-5678';
    const currency = document.getElementById('dossier-currency')?.value || 'USD $20 Federal Reserve Note';
    const surfaceArea = document.getElementById('dossier-surface-area')?.value || '58.4% (Threshold Satisfied)';
    const serialLeft = document.getElementById('dossier-serial-left')?.value || 'MF 89234812 B';
    const serialRight = document.getElementById('dossier-serial-right')?.value || 'MF 89234812 B';
    const narrative = document.getElementById('dossier-narrative')?.value || 'The presented banknote was damaged accidentally under ordinary domestic circumstances. More than 50% of the genuine original note remains physically intact with legible serial identifiers.';

    const sheetName = document.getElementById('sheet-name');
    const sheetContact = document.getElementById('sheet-contact');
    const sheetCurrency = document.getElementById('sheet-currency');
    const sheetArea = document.getElementById('sheet-area');
    const sheetSerialL = document.getElementById('sheet-serial-l');
    const sheetSerialR = document.getElementById('sheet-serial-r');
    const sheetNarrative = document.getElementById('sheet-narrative-text');

    if (sheetName) sheetName.textContent = claimantName;
    if (sheetContact) sheetContact.textContent = phone;
    if (sheetCurrency) sheetCurrency.textContent = currency;
    if (sheetArea) sheetArea.textContent = surfaceArea;
    if (sheetSerialL) sheetSerialL.textContent = serialLeft;
    if (sheetSerialR) sheetSerialR.textContent = serialRight;
    if (sheetNarrative) sheetNarrative.textContent = narrative;
  }

  // =========================================================================
  // 13. MODALS & OFFICIAL FORM TEMPLATES
  // =========================================================================
  function initModals() {
    const modalForm = document.getElementById('modal-form-viewer');
    const modalScript = document.getElementById('modal-teller-script');

    const btnModalClose = document.getElementById('btn-modal-close');
    const btnDismissModal = document.getElementById('btn-dismiss-modal');
    const btnPrintModal = document.getElementById('btn-print-modal-form');

    const btnScriptClose = document.getElementById('btn-script-close');
    const btnDismissScript = document.getElementById('btn-dismiss-script');

    function closeAllModals() {
      if (modalForm) modalForm.classList.remove('active');
      if (modalScript) modalScript.classList.remove('active');
    }

    if (btnModalClose) btnModalClose.addEventListener('click', closeAllModals);
    if (btnDismissModal) btnDismissModal.addEventListener('click', closeAllModals);
    if (btnScriptClose) btnScriptClose.addEventListener('click', closeAllModals);
    if (btnDismissScript) btnDismissScript.addEventListener('click', closeAllModals);

    if (btnPrintModal) {
      btnPrintModal.addEventListener('click', () => {
        window.print();
      });
    }

    if (modalForm) {
      modalForm.addEventListener('click', (e) => {
        if (e.target === modalForm) closeAllModals();
      });
    }

    if (modalScript) {
      modalScript.addEventListener('click', (e) => {
        if (e.target === modalScript) closeAllModals();
      });
    }
  }

  function showTellerScript(currencyCode) {
    const reg = CURRENCY_REGISTRY.find(c => c.code === currencyCode) || CURRENCY_REGISTRY[0];
    const modal = document.getElementById('modal-teller-script');
    const title = document.getElementById('modal-script-title');
    const body = document.getElementById('modal-script-content');

    if (!modal || !title || !body) return;

    title.textContent = `Bank Teller Talk Track: ${reg.code} (${reg.country})`;
    body.innerHTML = `
      <div style="background:var(--bg-card-subtle);padding:14px;border-radius:12px;margin-bottom:14px;border-left:4px solid var(--border-active);">
        <p style="font-size:0.95rem;line-height:1.6;font-style:italic;">${reg.talkTrack}</p>
      </div>

      <h5 style="margin-bottom:6px;font-weight:800;letter-spacing:0.04em;">KEY STATUTORY CITATION:</h5>
      <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:12px;"><strong>${reg.statutoryCode}</strong> — If the teller hesitates, politely ask them to refer to their internal currency operations manual under Mutilated Currency / Fragment Exchange.</p>

      <h5 style="margin-bottom:6px;font-weight:800;letter-spacing:0.04em;">CHECKLIST TO PRESENT:</h5>
      <ul style="padding-left:18px;font-size:0.82rem;color:var(--text-main);line-height:1.6;">
        <li>Damaged banknote secured in a clear protective sleeve (do not apply scotch tape to torn edges).</li>
        <li>Your government-issued photo ID (for commercial bank account holder verification).</li>
        <li>Printed <strong>Claim Dossier</strong> generated from Monument of Greed showing verified surface area exceeding 50%.</li>
      </ul>
    `;

    modal.classList.add('active');
  }

  function showOfficialForm(formId) {
    const modal = document.getElementById('modal-form-viewer');
    const title = document.getElementById('modal-form-title');
    const body = document.getElementById('modal-form-content');

    if (!modal || !title || !body) return;

    let contentHtml = '';

    if (formId === 'BEP5283') {
      title.textContent = 'BEP Form 5283 — Mutilated Currency Claim';
      contentHtml = `
        <div style="border:1px solid #cbd5e1;padding:16px;border-radius:8px;background:#ffffff;color:#1e293b;font-family:sans-serif;">
          <div style="text-align:center;border-bottom:2px solid #0f172a;padding-bottom:10px;margin-bottom:14px;">
            <h4 style="margin:0;font-size:1.1rem;font-weight:900;">DEPARTMENT OF THE TREASURY</h4>
            <h5 style="margin:2px 0 0 0;font-size:0.85rem;font-weight:700;">BUREAU OF ENGRAVING AND PRINTING</h5>
            <div style="font-size:0.75rem;color:#64748b;">MUTILATED CURRENCY DIVISION • WASHINGTON, DC 20228</div>
          </div>

          <h5 style="margin:0 0 8px 0;font-size:0.85rem;">SECTION 1: CLAIMANT IDENTIFICATION</h5>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:0.78rem;margin-bottom:14px;">
            <div><strong>Claimant Name:</strong> _______________________</div>
            <div><strong>Social Security / Tax ID:</strong> ______________</div>
            <div><strong>Street Address:</strong> ______________________</div>
            <div><strong>Telephone:</strong> __________________________</div>
          </div>

          <h5 style="margin:0 0 8px 0;font-size:0.85rem;">SECTION 2: REMITTANCE ESTIMATE</h5>
          <div style="font-size:0.78rem;margin-bottom:14px;">
            <p><strong>Total Claim Value:</strong> $_________________ USD</p>
            <p><strong>Denominations Included:</strong> [ ] $1  [ ] $5  [ ] $10  [ ] $20  [ ] $50  [ ] $100</p>
          </div>

          <h5 style="margin:0 0 8px 0;font-size:0.85rem;">SECTION 3: CAUSE OF MUTILATION (CHECK APPLICABLE)</h5>
          <div style="font-size:0.75rem;display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:14px;">
            <div>[ ] Fire / Heat Charring</div>
            <div>[ ] Water Saturation / Deterioration</div>
            <div>[ ] Animal / Pet Damage</div>
            <div>[ ] Buried in Earth / Soil Decay</div>
            <div>[ ] Accidental Maceration / Laundry</div>
            <div>[ ] Mechanical / Industrial Shredding</div>
          </div>

          <div style="font-size:0.72rem;border-top:1px solid #e2e8f0;padding-top:10px;color:#475569;">
            <strong>Mailing Instructions:</strong> Package the mutilated fragments without tape or glue. Send via USPS Registered Mail with Postal Tracking to: <em>Bureau of Engraving and Printing, MCD/OFM, Room 344-A, 14th & C Streets SW, Washington, DC 20228</em>.
          </div>
        </div>
      `;
    } else if (formId === 'ECB_REQUEST') {
      title.textContent = 'Eurosystem — Damaged Euro Banknote Application';
      contentHtml = `
        <div style="border:1px solid #cbd5e1;padding:16px;border-radius:8px;background:#ffffff;color:#1e293b;">
          <div style="text-align:center;border-bottom:2px solid #0f172a;padding-bottom:10px;margin-bottom:14px;">
            <h4 style="margin:0;font-size:1.1rem;font-weight:900;">EUROPEAN CENTRAL BANK / EUROSYSTEM</h4>
            <div style="font-size:0.75rem;color:#64748b;">APPLICATION FOR THE EXCHANGE OF MUTILATED EURO BANKNOTES</div>
            <div style="font-size:0.7rem;color:#64748b;">Pursuant to ECB Decision ECB/2013/10</div>
          </div>
          <div style="font-size:0.8rem;line-height:1.6;">
            <p><strong>Article 3 Compliance:</strong> National Central Banks shall exchange mutilated euro banknotes provided more than 50% of the banknote surface is presented, or the applicant establishes that the missing parts have been destroyed.</p>
            <p style="margin-top:8px;"><strong>Applicant Details:</strong> Name, National ID / Passport Number, IBAN for bank transfer.</p>
            <p style="margin-top:8px;"><strong>Submission Windows:</strong> Any public counter of the Deutsche Bundesbank, Banque de France, Banca d'Italia, Banco de España, or designated Eurosystem NCB.</p>
          </div>
        </div>
      `;
    } else {
      title.textContent = 'Central Bank Statutory Examination Slip';
      contentHtml = `
        <div style="border:1px solid #cbd5e1;padding:16px;border-radius:8px;background:#ffffff;color:#1e293b;">
          <h4 style="margin:0 0 10px 0;">Official Damaged Currency Examination Form</h4>
          <p style="font-size:0.82rem;line-height:1.5;">This official submission voucher can be printed and presented directly to the authorized central bank cash department along with your physical banknote fragments and the Monument of Greed Claim Dossier.</p>
        </div>
      `;
    }

    body.innerHTML = contentHtml;
    modal.classList.add('active');
  }

})();
