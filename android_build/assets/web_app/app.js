/**
 * MONUMENT OF GREED — CORE APPLICATION LOGIC
 * Optical Banknote Surface Assessment, Central Banking Standards & Dossier Compilation
 * 100% Offline Optical Computer Vision • Zero Cloud Dependency
 * Certified under Alumungandr Master Charter © 2026
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. WEB AUDIO SYNTHESIZER & HAPTIC FEEDBACK ENGINE
  // =========================================================================
  class AudioFx {
    constructor() {
      this.ctx = null;
      this.muted = localStorage.getItem('mog_muted') === 'true';
    }

    init() {
      if (this.muted) return;
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

    toggleMute() {
      this.muted = !this.muted;
      localStorage.setItem('mog_muted', this.muted);
      this.updateToggleButton();
      if (!this.muted) {
        this.tap();
      }
      return this.muted;
    }

    updateToggleButton() {
      const btn = document.getElementById('btn-sound-toggle');
      if (btn) {
        btn.textContent = this.muted ? '🔇' : '🔊';
        btn.title = this.muted ? 'Sound Muted (Click to Unmute)' : 'Sound Active (Click to Mute)';
      }
    }

    vibrate(pattern = 15) {
      if ('vibrate' in navigator) {
        try {
          navigator.vibrate(pattern);
        } catch (e) {
          // ignore error if disabled by system policy
        }
      }
      if (window.AndroidBridge && typeof window.AndroidBridge.vibrate === 'function') {
        try {
          window.AndroidBridge.vibrate(pattern);
        } catch (e) {}
      }
    }

    tap() {
      this.vibrate(12);
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      try {
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
      } catch (e) {}
    }

    shutter() {
      this.vibrate(25);
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      try {
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
      } catch (e) {}
    }

    successChord() {
      this.vibrate([15, 30, 25]);
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      try {
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
      } catch (e) {}
    }

    warningBuzz() {
      this.vibrate([40, 20, 40]);
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      try {
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
      } catch (e) {}
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
      symbol: '$',
      flag: '🇺🇸',
      statutoryCode: '31 CFR Part 100 (Exchange of Mutilated Paper Currency)',
      authority: 'Bureau of Engraving and Printing (BEP) / Federal Reserve',
      thresholdRule: '> 50.0% surface area required for 100% face-value reimbursement. If ≤ 50% remains, requires sworn affidavit proving missing portion was completely destroyed.',
      aspectRatio: 2.353, // 156.0mm x 66.3mm
      formName: 'BEP Form 5283 (Mutilated Currency Claim Form)',
      formId: 'BEP5283',
      talkTrack: `"Hello, I have an authentic United States banknote that sustained physical damage. According to Federal Reserve guidelines and 31 CFR § 100.5, because more than 50% of the original note remains intact with legible serial markers, this note qualifies for direct face-value exchange. I would like to deposit or exchange this note, or have you submit it to the Federal Reserve Cash Office on my behalf."`,
      submissionAddress: 'Bureau of Engraving and Printing, Mutilated Currency Branch, Room 344-A, 14th and C Streets SW, Washington, DC 20228',
      officialUrl: 'https://www.bep.gov/services/mutilated-currency'
    },
    {
      code: 'EUR',
      name: 'Euro (Eurosystem Series)',
      country: 'Eurozone',
      region: 'Europe',
      symbol: '€',
      flag: '🇪🇺',
      statutoryCode: 'Decision of the European Central Bank ECB/2013/10',
      authority: 'European Central Bank (ECB) & National Central Banks (Bundesbank, Banque de France, etc.)',
      thresholdRule: '> 50.0% of original banknote surface area presented. If 50% or less is presented, claimant must prove that missing parts have been destroyed.',
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
      symbol: '£',
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
      symbol: 'J$',
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
      symbol: 'CA$',
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
      symbol: 'A$',
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
      symbol: '¥',
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
      symbol: 'CHF',
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
      code: 'MXN',
      name: 'Mexican Peso (Series G Polymer & Paper)',
      country: 'Mexico',
      region: 'Latin America',
      symbol: 'Mex$',
      flag: '🇲🇽',
      statutoryCode: 'Banco de México — Reglas para Canje de Billetes Deteriorados (Regla 10/2006)',
      authority: 'Banco de México (Banxico)',
      thresholdRule: '> 50.0% continuous surface area required. When repaired or joined from fragments, pieces must belong to the exact same banknote. Valid for commercial bank counter exchange.',
      aspectRatio: 2.308, // 120mm x 52mm for polymer, 154mm x 66mm for paper
      formName: 'Banxico Formulario de Dictamen para Canje de Billetes',
      formId: 'BANXICO_DICTAMEN',
      talkTrack: `"Buenas tardes. Conforme a las Reglas para el Canje de Billetes Deteriorados del Banco de México (Regla 10/2006), los billetes con más del 50% de su superficie original conservan su valor nominal. Solicito el canje en ventanilla o su envío al Banco de México para dictamen."`,
      submissionAddress: 'Banco de México, Gante No. 20, Colonia Centro, Alcaldía Cuauhtémoc, C.P. 06000, Ciudad de México, México',
      officialUrl: 'https://www.banxico.org.mx/billetes-y-monedas/canje-de-billetes-y-monedas.html'
    },
    {
      code: 'INR',
      name: 'Indian Rupee (Mahatma Gandhi New Series)',
      country: 'India',
      region: 'Asia & Pacific',
      symbol: '₹',
      flag: '🇮🇳',
      statutoryCode: 'Reserve Bank of India (Note Refund) Rules, 2009 / 2018',
      authority: 'Reserve Bank of India (RBI) — Issue Department',
      thresholdRule: 'Full Value if single undivided piece is ≥ 80% (≥ 75% for ₹50 and above). Half Value if between 40% and 80% (or 40-75% for ₹50+). Zero value if undivided area < 40%.',
      aspectRatio: 2.212, // 146mm x 66mm avg
      formName: 'RBI Note Refund Application & Receipt Form',
      formId: 'RBI_NOTE_REFUND',
      talkTrack: `"Namaste. Under the Reserve Bank of India (Note Refund) Rules 2018, any public or commercial bank branch is designated to accept soiled and mutilated banknotes. As this note has over 80% surface area intact with visible security features, it qualifies for full value exchange at your branch counter."`,
      submissionAddress: 'Reserve Bank of India, Issue Department, Shahid Bhagat Singh Marg, Fort, Mumbai 400001, Maharashtra, India',
      officialUrl: 'https://www.rbi.org.in/scripts/FS_Overview.aspx?fn=2752'
    },
    {
      code: 'CNY',
      name: 'Chinese Yuan Renminbi (5th Series)',
      country: 'China',
      region: 'Asia & Pacific',
      symbol: '¥',
      flag: '🇨🇳',
      statutoryCode: 'People’s Bank of China Regulations on Damaged Renminbi Exchange (中国人民银行残缺污损人民币兑换办法)',
      authority: 'People’s Bank of China (PBOC)',
      thresholdRule: 'Full Value if remaining surface ≥ 3/4 (75.0%). Half Value if remaining surface is between 1/2 (50.0%) and 3/4 (75.0%). Zero value if remaining surface < 1/2 (50.0%).',
      aspectRatio: 2.088, // 155mm x 77mm for ¥100
      formName: 'PBOC Damaged Renminbi Assessment Certificate (残缺污损人民币鉴定证明)',
      formId: 'PBOC_EXCHANGE',
      talkTrack: `"您好。根据中国人民银行《残缺污损人民币兑换办法》，票面剩余四分之三以上且图案文字清晰的，应当予以全额兑换；剩余二分之一至四分之三的予以半额兑换。请在柜台办理残损币兑换手续。"`,
      submissionAddress: 'People’s Bank of China, Cash Operations Dept, 32 Chengfang St, Xicheng District, Beijing 100800, China',
      officialUrl: 'http://www.pbc.gov.cn/'
    },
    {
      code: 'TTD',
      name: 'Trinidad and Tobago Dollar',
      country: 'Trinidad and Tobago',
      region: 'Caribbean',
      symbol: 'TT$',
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
      symbol: 'B$',
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
      symbol: 'NZ$',
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
      symbol: 'S$',
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
      name: 'Banco de México — Ventanilla de Canje de Billetes',
      type: 'central',
      category: 'Central Banking Authority',
      city: 'Ciudad de México',
      country: 'Mexico',
      address: 'Gante No. 20, Colonia Centro, Cuauhtémoc, 06000 Ciudad de México, CDMX',
      phone: '+52 800 226 9426',
      notes: 'Direct official redemption counter applying Regla 10/2006 for mutilated MXN notes.',
      hours: 'Mon - Fri: 9:00 AM - 1:00 PM CST',
      mapsQuery: 'Banco de Mexico, Gante 20, Centro Historico, Ciudad de Mexico'
    },
    {
      name: 'Reserve Bank of India — Mumbai Regional Office',
      type: 'central',
      category: 'Central Banking Authority',
      city: 'Mumbai',
      country: 'India',
      address: 'Shahid Bhagat Singh Marg, Fort, Mumbai 400001, Maharashtra',
      phone: '+91 22 2260 1000',
      notes: 'Special Issue Department counter adjudicating mutilated and adjudicated notes under 2018 Rules.',
      hours: 'Mon - Fri: 10:00 AM - 2:30 PM IST',
      mapsQuery: 'Reserve Bank of India, Shahid Bhagat Singh Marg, Fort, Mumbai'
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
      unwarpedCanvas: null,
      unwarpedCtx: null,
      currencyCode: 'USD',
      denomination: '20',
      threshold: 110,
      gain: 1.2,
      highlightMask: true,
      highlightMissing: true,
      measuredPercent: 58.4,
      fragmentPixels: 0,
      targetPixels: 0,
      animFrameId: null,
      // Perspective Warp State
      perspectiveEnabled: false,
      activePin: null,
      perspectivePins: {
        tl: { x: 0.12, y: 0.18 },
        tr: { x: 0.88, y: 0.14 },
        br: { x: 0.86, y: 0.82 },
        bl: { x: 0.14, y: 0.86 }
      },
      // Polymer & Dual-Side State
      polymerFilter: false,
      activeSide: 'front',
      sidesData: {
        front: { canvas: null, percent: 58.4, px: 0 },
        back: { canvas: null, percent: 0, px: 0 }
      }
    },
    grid100: {
      cells: new Array(100).fill(true),
      isDrawing: false,
      drawState: true,
      backdropOpacity: 0.40
    },
    batchNotes: [],
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
    initAmbientMotion();
    initNavigation();
    initSoundToggle();
    initFintechSummary();
    initOnboarding();
    initOpticalScanner();
    init3DBanknoteInspector();
    initPerspectivePins();
    init100GridAudit();
    initDatabaseView();
    initLocatorView();
    initDossierView();
    initBatchEnvelope();
    initAffidavitGenerator();
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

    if (ambientMotionEngine) {
      ambientMotionEngine.setTheme(themeName);
    }
  }

  // =========================================================================
  // 7. NAVIGATION & DRAWER SYSTEM
  // =========================================================================
  function initNavigation() {
    // Drawer Elements
    const drawerOpenBtn = document.getElementById('btn-drawer-open');
    const drawerCloseBtn = document.getElementById('btn-drawer-close');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const appDrawer = document.getElementById('app-drawer');
    const pillQuickMenu = document.getElementById('pill-quick-menu');

    function openDrawer() {
      if (appDrawer) appDrawer.classList.add('active');
      if (drawerOverlay) drawerOverlay.classList.add('active');
      audio.tap();
    }

    function closeDrawer() {
      if (appDrawer) appDrawer.classList.remove('active');
      if (drawerOverlay) drawerOverlay.classList.remove('active');
    }

    if (drawerOpenBtn) drawerOpenBtn.addEventListener('click', openDrawer);
    if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

    // Decouple pill-quick-menu from category filter and bind directly to openDrawer
    if (pillQuickMenu) {
      pillQuickMenu.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openDrawer();
      });
    }

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
        if (fileInputUpload) fileInputUpload.click();
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

    // Category Pill Filters (Home Tab) - filter only standard pills
    const categoryPills = document.querySelectorAll('#home-category-pills .filter-pill:not(#pill-quick-menu)');
    categoryPills.forEach(pill => {
      pill.addEventListener('click', () => {
        categoryPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const cat = pill.dataset.category || 'all';
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

    // If entering 100-grid tab, sync aspect ratio
    if (tabId === 'tab-grid') {
      updateGridAspectBox();
    }
  }

  function renderFeedCards(category) {
    const cards = document.querySelectorAll('#home-feed-cards .guide-feed-card');
    cards.forEach(card => {
      const cardCat = card.dataset.cat;
      if (!category || category === 'all' || category === cardCat || (category === 'forms' && card.querySelector('.btn-open-form'))) {
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
    if (state.scanner.canvasEl) {
      state.scanner.ctx = state.scanner.canvasEl.getContext('2d', { willReadFrequently: true });
    }

    // Persistent offscreen buffer canvas to preserve original image
    state.scanner.sourceCanvas = document.createElement('canvas');
    state.scanner.sourceCtx = state.scanner.sourceCanvas.getContext('2d', { willReadFrequently: true });

    // Persistent unwarped buffer canvas
    state.scanner.unwarpedCanvas = document.createElement('canvas');
    state.scanner.unwarpedCtx = state.scanner.unwarpedCanvas.getContext('2d', { willReadFrequently: true });

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
        const fileInput = document.getElementById('file-input-upload');
        if (fileInput) fileInput.click();
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
        updateGridAspectBox();
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

    // Dual-side buttons (Front / Back)
    const btnSideFront = document.getElementById('btn-side-front');
    const btnSideBack = document.getElementById('btn-side-back');

    if (btnSideFront) {
      btnSideFront.addEventListener('click', () => {
        setScannerSide('front');
        audio.tap();
      });
    }

    if (btnSideBack) {
      btnSideBack.addEventListener('click', () => {
        setScannerSide('back');
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
        if (valThreshold) valThreshold.textContent = state.scanner.threshold;
        recalculateSurfaceArea();
      });
    }

    if (sliderGain) {
      sliderGain.addEventListener('input', (e) => {
        state.scanner.gain = parseFloat(e.target.value);
        if (valGain) valGain.textContent = state.scanner.gain.toFixed(1);
        recalculateSurfaceArea();
      });
    }

    // Auto Otsu Button
    const btnAutoOtsu = document.getElementById('btn-auto-otsu');
    if (btnAutoOtsu) {
      btnAutoOtsu.addEventListener('click', () => {
        runOtsuAutoThreshold();
        audio.successChord();
      });
    }

    // Perspective Warp Toggle
    const btnTogglePerspective = document.getElementById('btn-toggle-perspective');
    if (btnTogglePerspective) {
      btnTogglePerspective.addEventListener('click', () => {
        state.scanner.perspectiveEnabled = !state.scanner.perspectiveEnabled;
        btnTogglePerspective.classList.toggle('active', state.scanner.perspectiveEnabled);
        const overlay = document.getElementById('perspective-overlay');
        if (overlay) overlay.style.display = state.scanner.perspectiveEnabled ? 'block' : 'none';
        if (state.scanner.perspectiveEnabled) {
          updatePerspectiveSvg();
        }
        recalculateSurfaceArea();
        audio.tap();
      });
    }

    // Polymer Filter Toggle
    const btnTogglePolymer = document.getElementById('btn-toggle-polymer');
    if (btnTogglePolymer) {
      btnTogglePolymer.addEventListener('click', () => {
        state.scanner.polymerFilter = !state.scanner.polymerFilter;
        btnTogglePolymer.classList.toggle('active', state.scanner.polymerFilter);
        recalculateSurfaceArea();
        audio.tap();
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

  function setScannerSide(side) {
    if (side === state.scanner.activeSide) return;

    // Cache current side canvas
    const current = state.scanner.activeSide;
    const sCanvas = state.scanner.sourceCanvas;
    if (sCanvas && sCanvas.width > 0) {
      const copy = document.createElement('canvas');
      copy.width = sCanvas.width;
      copy.height = sCanvas.height;
      copy.getContext('2d').drawImage(sCanvas, 0, 0);
      state.scanner.sidesData[current].canvas = copy;
      state.scanner.sidesData[current].percent = state.scanner.measuredPercent;
      state.scanner.sidesData[current].px = state.scanner.fragmentPixels;
    }

    state.scanner.activeSide = side;

    const btnSideFront = document.getElementById('btn-side-front');
    const btnSideBack = document.getElementById('btn-side-back');
    if (btnSideFront) btnSideFront.classList.toggle('active', side === 'front');
    if (btnSideBack) btnSideBack.classList.toggle('active', side === 'back');

    // Restore side if previously saved
    if (state.scanner.sidesData[side].canvas) {
      const saved = state.scanner.sidesData[side].canvas;
      sCanvas.width = saved.width;
      sCanvas.height = saved.height;
      state.scanner.sourceCtx.drawImage(saved, 0, 0);
      recalculateSurfaceArea();
    } else {
      loadSampleDamagedBill();
    }
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

        const flipBtn = document.getElementById('btn-switch-camera');
        if (flipBtn) flipBtn.style.display = 'inline-flex';
        const statusText = document.getElementById('scanner-status-text');
        if (statusText) statusText.textContent = 'LIVE CAMERA ACTIVE';
        audio.shutter();

        runVideoPipeline();
      })
      .catch(err => {
        console.warn('Camera stream error:', err);
        const statusText = document.getElementById('scanner-status-text');
        if (statusText) statusText.textContent = 'CAMERA UNAVAILABLE — USE UPLOAD';
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

        const statusText = document.getElementById('scanner-status-text');
        if (statusText) statusText.textContent = 'IMAGE LOADED';
        switchTab('tab-scanner');
        recalculateSurfaceArea();
        audio.shutter();
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  const DAMAGE_SCENARIOS = [
    {
      id: 'fire_charred_usd20',
      currency: 'USD',
      denom: '20',
      name: 'Fire-Charred US $20',
      tag: '🔥 31 CFR § 100.5 (USA)',
      paperColorStart: '#e8f0e6',
      paperColorEnd: '#c8dac5',
      cutType: 'fire',
      tearRatio: 0.584,
      serial: 'MF 89234812 B',
      status: 'Fire / Heat Charred Fragment'
    },
    {
      id: 'washing_machine_eur50',
      currency: 'EUR',
      denom: '50',
      name: 'Laundry-Macerated Euro €50',
      tag: '🌊 ECB Decision 2013/10 (EU)',
      paperColorStart: '#fff7ed',
      paperColorEnd: '#fed7aa',
      cutType: 'maceration',
      tearRatio: 0.642,
      serial: 'EB 4920194881',
      status: 'Laundry / Detergent Bleach Erosion'
    },
    {
      id: 'industrial_shredder_gbp20',
      currency: 'GBP',
      denom: '20',
      name: 'Mechanical-Shredded BoE £20',
      tag: '⚙️ Bank of England Policy (UK)',
      paperColorStart: '#f1f5f9',
      paperColorEnd: '#cbd5e1',
      cutType: 'shred',
      tearRatio: 0.528,
      serial: 'CL 93810294',
      status: 'Industrial Paper Shredder Slices'
    },
    {
      id: 'flood_waterlogged_cad100',
      currency: 'CAD',
      denom: '100',
      name: 'Flood-Waterlogged Canada $100',
      tag: '💧 Bank of Canada Redemption',
      paperColorStart: '#fef3c7',
      paperColorEnd: '#fde68a',
      cutType: 'flood',
      tearRatio: 0.710,
      serial: 'FKA 2948192',
      status: 'Flood / Silt Degradation'
    },
    {
      id: 'domestic_pet_torn_mxn500',
      currency: 'MXN',
      denom: '500',
      name: 'Pet-Torn Banxico $500',
      tag: '🐾 Regla 10/2006 (Banxico)',
      paperColorStart: '#ecfdf5',
      paperColorEnd: '#bbf7d0',
      cutType: 'pet',
      tearRatio: 0.546,
      serial: 'U 9481029 B',
      status: 'Domestic Animal Serrated Tear'
    }
  ];
  let activeScenarioIndex = 0;

  /**
   * Generates an authentic simulated damaged banknote fragment for immediate testing
   * Cycles through 5 certified central bank damage scenarios from the internal asset library
   */
  function loadSampleDamagedBill() {
    stopCameraStream();
    const sc = DAMAGE_SCENARIOS[activeScenarioIndex % DAMAGE_SCENARIOS.length];
    activeScenarioIndex++;

    state.scanner.currencyCode = sc.currency;
    state.scanner.denomination = sc.denom;

    // Sync dropdown controls
    const selectCurrency = document.getElementById('select-scanner-currency');
    const selectDenom = document.getElementById('select-scanner-denom');
    if (selectCurrency) selectCurrency.value = sc.currency;
    if (selectDenom) selectDenom.value = sc.denom;

    const sCanvas = state.scanner.sourceCanvas;
    const sCtx = state.scanner.sourceCtx;

    sCanvas.width = 640;
    sCanvas.height = 360;

    // Dark table surface background
    sCtx.fillStyle = '#1e293b';
    sCtx.fillRect(0, 0, sCanvas.width, sCanvas.height);

    // Banknote aspect ratio
    const reg = CURRENCY_REGISTRY.find(c => c.code === sc.currency) || CURRENCY_REGISTRY[0];
    const targetW = sCanvas.width * 0.82;
    const targetH = targetW / reg.aspectRatio;
    const noteX = Math.round((sCanvas.width - targetW) / 2);
    const noteY = Math.round((sCanvas.height - targetH) / 2);
    const noteW = Math.round(targetW);
    const noteH = Math.round(targetH);

    // Save state
    sCtx.save();

    // Create authentic damage contour tailored to scenario
    sCtx.beginPath();
    sCtx.moveTo(noteX, noteY); // Top-left
    const tearX = noteX + noteW * sc.tearRatio;
    sCtx.lineTo(tearX + (sc.cutType === 'pet' ? -15 : 12), noteY);

    if (sc.cutType === 'fire') {
      // Jagged charred burn contour
      sCtx.lineTo(tearX - 8, noteY + noteH * 0.22);
      sCtx.lineTo(tearX + 16, noteY + noteH * 0.45);
      sCtx.lineTo(tearX - 12, noteY + noteH * 0.68);
      sCtx.lineTo(tearX + 8, noteY + noteH * 0.86);
      sCtx.lineTo(tearX, noteY + noteH);
    } else if (sc.cutType === 'shred') {
      // Mechanical shredder stepped vertical shear
      sCtx.lineTo(tearX, noteY + noteH * 0.33);
      sCtx.lineTo(tearX + 14, noteY + noteH * 0.33);
      sCtx.lineTo(tearX + 14, noteY + noteH * 0.66);
      sCtx.lineTo(tearX - 10, noteY + noteH * 0.66);
      sCtx.lineTo(tearX - 10, noteY + noteH);
    } else if (sc.cutType === 'pet') {
      // Canine teeth punctures & triangular bites
      sCtx.lineTo(tearX - 20, noteY + noteH * 0.25);
      sCtx.lineTo(tearX + 5, noteY + noteH * 0.35);
      sCtx.lineTo(tearX - 25, noteY + noteH * 0.55);
      sCtx.lineTo(tearX + 10, noteY + noteH * 0.75);
      sCtx.lineTo(tearX - 15, noteY + noteH);
    } else {
      // Soft water erosion & maceration
      sCtx.bezierCurveTo(tearX - 15, noteY + noteH * 0.3, tearX + 20, noteY + noteH * 0.6, tearX, noteY + noteH);
    }

    sCtx.lineTo(noteX, noteY + noteH); // Bottom-left
    sCtx.closePath();
    sCtx.clip();

    // Banknote Paper Background
    const grad = sCtx.createLinearGradient(noteX, noteY, noteX + noteW, noteY + noteH);
    grad.addColorStop(0, sc.paperColorStart);
    grad.addColorStop(0.5, '#ffffff');
    grad.addColorStop(1, sc.paperColorEnd);
    sCtx.fillStyle = grad;
    sCtx.fillRect(noteX, noteY, noteW, noteH);

    // Fine Banknote Guilloche Borders & Intaglio Engravings
    sCtx.strokeStyle = sc.currency === 'USD' ? '#2d5a38' : (sc.currency === 'EUR' ? '#1e3a8a' : (sc.currency === 'GBP' ? '#831843' : '#b45309'));
    sCtx.lineWidth = 4;
    sCtx.strokeRect(noteX + 8, noteY + 8, noteW - 16, noteH - 16);

    sCtx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
    sCtx.lineWidth = 1;
    sCtx.strokeRect(noteX + 14, noteY + 14, noteW - 28, noteH - 28);

    // Intaglio Text & Numerals
    sCtx.fillStyle = '#0f172a';
    sCtx.font = 'bold 36px serif';
    sCtx.fillText(sc.denom, noteX + 24, noteY + 54);

    sCtx.font = 'bold 14px sans-serif';
    sCtx.fillText(`${sc.currency} LEGAL TENDER`, noteX + 75, noteY + 45);

    sCtx.font = '10px serif';
    sCtx.fillText(reg.authority, noteX + 75, noteY + 62);

    // Left Serial Number (Intact)
    sCtx.fillStyle = '#065f46';
    sCtx.font = 'bold 13px monospace';
    sCtx.fillText(sc.serial, noteX + 24, noteY + 110);
    sCtx.fillText('OFFLINE-SPEC-2026', noteX + 24, noteY + 128);

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
    sCtx.ellipse(noteX + 195, noteY + 105, 32, 44, 0, 0, Math.PI * 2);
    sCtx.fillStyle = 'rgba(0, 0, 0, 0.12)';
    sCtx.fill();

    // Polymer transparent security window if applicable
    if (sc.currency === 'GBP' || sc.currency === 'CAD' || sc.currency === 'MXN') {
      sCtx.beginPath();
      sCtx.ellipse(noteX + 70, noteY + 80, 16, 26, 0, 0, Math.PI * 2);
      sCtx.fillStyle = 'rgba(255, 255, 255, 0.45)';
      sCtx.fill();
      sCtx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
      sCtx.lineWidth = 1.5;
      sCtx.stroke();
    }

    sCtx.restore();

    // Draw charred burn halo along the tear edge if fire scenario
    if (sc.cutType === 'fire') {
      sCtx.save();
      sCtx.strokeStyle = 'rgba(20, 10, 5, 0.85)';
      sCtx.lineWidth = 4;
      sCtx.beginPath();
      sCtx.moveTo(tearX + 12, noteY);
      sCtx.lineTo(tearX - 8, noteY + noteH * 0.22);
      sCtx.lineTo(tearX + 16, noteY + noteH * 0.45);
      sCtx.lineTo(tearX - 12, noteY + noteH * 0.68);
      sCtx.lineTo(tearX + 8, noteY + noteH * 0.86);
      sCtx.lineTo(tearX, noteY + noteH);
      sCtx.stroke();
      sCtx.restore();
    }

    updateScannerAspectGuide();
    updateGridAspectBox();

    const statusText = document.getElementById('scanner-status-text');
    if (statusText) statusText.textContent = `${sc.name.toUpperCase()} (${sc.tag})`;

    recalculateSurfaceArea();
  }

  // =========================================================================
  // 8B. 4-CORNER PERSPECTIVE WARP ENGINE (Quadrilateral Bilinear Rectifier)
  // =========================================================================
  function initPerspectivePins() {
    const pins = ['pin-tl', 'pin-tr', 'pin-br', 'pin-bl'];
    const overlay = document.getElementById('perspective-overlay');
    if (!overlay) return;

    pins.forEach(pinId => {
      const pinEl = document.getElementById(pinId);
      if (!pinEl) return;
      const corner = pinEl.dataset.corner;

      // Pointer event dragging with setPointerCapture
      pinEl.addEventListener('pointerdown', (e) => {
        state.scanner.activePin = corner;
        pinEl.setPointerCapture(e.pointerId);
        pinEl.classList.add('dragging');
        audio.tap();
      });

      pinEl.addEventListener('pointermove', (e) => {
        if (state.scanner.activePin === corner) {
          const rect = overlay.getBoundingClientRect();
          const clientX = Math.max(rect.left, Math.min(rect.right, e.clientX));
          const clientY = Math.max(rect.top, Math.min(rect.bottom, e.clientY));

          const normX = (clientX - rect.left) / rect.width;
          const normY = (clientY - rect.top) / rect.height;

          state.scanner.perspectivePins[corner].x = normX;
          state.scanner.perspectivePins[corner].y = normY;

          updatePerspectivePinPositions();
          updatePerspectiveSvg();
          recalculateSurfaceArea();
        }
      });

      pinEl.addEventListener('pointerup', (e) => {
        if (state.scanner.activePin === corner) {
          state.scanner.activePin = null;
          pinEl.classList.remove('dragging');
          try { pinEl.releasePointerCapture(e.pointerId); } catch(err){}
        }
      });

      pinEl.addEventListener('pointercancel', (e) => {
        if (state.scanner.activePin === corner) {
          state.scanner.activePin = null;
          pinEl.classList.remove('dragging');
          try { pinEl.releasePointerCapture(e.pointerId); } catch(err){}
        }
      });
    });

    updatePerspectivePinPositions();
    updatePerspectiveSvg();
  }

  function updatePerspectivePinPositions() {
    const overlay = document.getElementById('perspective-overlay');
    if (!overlay) return;
    const pins = state.scanner.perspectivePins;

    ['tl', 'tr', 'br', 'bl'].forEach(corner => {
      const pinEl = document.getElementById(`pin-${corner}`);
      if (pinEl) {
        pinEl.style.left = `${pins[corner].x * 100}%`;
        pinEl.style.top = `${pins[corner].y * 100}%`;
      }
    });
  }

  function updatePerspectiveSvg() {
    const svg = document.getElementById('perspective-svg');
    const overlay = document.getElementById('perspective-overlay');
    if (!svg || !overlay) return;

    const rect = overlay.getBoundingClientRect();
    const w = rect.width || 400;
    const h = rect.height || 300;
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

    const pins = state.scanner.perspectivePins;
    const pts = [
      `${pins.tl.x * w},${pins.tl.y * h}`,
      `${pins.tr.x * w},${pins.tr.y * h}`,
      `${pins.br.x * w},${pins.br.y * h}`,
      `${pins.bl.x * w},${pins.bl.y * h}`
    ].join(' ');

    svg.innerHTML = `
      <polygon points="${pts}" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="2" stroke-dasharray="4,4"/>
    `;
  }

  /**
   * Bilinear backward-mapping quadrilateral warp into standard rectified rectangle
   */
  function applyBilinearPerspectiveWarp(srcCanvas, dstCanvas, aspect) {
    const srcW = srcCanvas.width;
    const srcH = srcCanvas.height;
    if (srcW === 0 || srcH === 0) return;

    const outW = Math.round(srcW * 0.8);
    const outH = Math.round(outW / aspect);
    dstCanvas.width = outW;
    dstCanvas.height = outH;

    const srcCtx = srcCanvas.getContext('2d');
    const dstCtx = dstCanvas.getContext('2d');

    const srcImgData = srcCtx.getImageData(0, 0, srcW, srcH);
    const srcData = srcImgData.data;

    const dstImgData = dstCtx.createImageData(outW, outH);
    const dstData = dstImgData.data;

    const pins = state.scanner.perspectivePins;
    const pTL = { x: pins.tl.x * srcW, y: pins.tl.y * srcH };
    const pTR = { x: pins.tr.x * srcW, y: pins.tr.y * srcH };
    const pBR = { x: pins.br.x * srcW, y: pins.br.y * srcH };
    const pBL = { x: pins.bl.x * srcW, y: pins.bl.y * srcH };

    for (let y = 0; y < outH; y++) {
      const v = y / (outH - 1 || 1);
      const rowOffset = y * outW * 4;

      for (let x = 0; x < outW; x++) {
        const u = x / (outW - 1 || 1);

        // Bilinear interpolation of the quadrilateral corners
        const topX = (1 - u) * pTL.x + u * pTR.x;
        const topY = (1 - u) * pTL.y + u * pTR.y;
        const botX = (1 - u) * pBL.x + u * pBR.x;
        const botY = (1 - u) * pBL.y + u * pBR.y;

        const srcX = Math.round((1 - v) * topX + v * botX);
        const srcY = Math.round((1 - v) * topY + v * botY);

        if (srcX >= 0 && srcX < srcW && srcY >= 0 && srcY < srcH) {
          const srcIdx = (srcY * srcW + srcX) * 4;
          const dstIdx = rowOffset + x * 4;
          dstData[dstIdx] = srcData[srcIdx];
          dstData[dstIdx + 1] = srcData[srcIdx + 1];
          dstData[dstIdx + 2] = srcData[srcIdx + 2];
          dstData[dstIdx + 3] = srcData[srcIdx + 3];
        }
      }
    }

    dstCtx.putImageData(dstImgData, 0, 0);
  }

  // =========================================================================
  // 8C. OTSU AUTOMATIC BIMODAL THRESHOLDING
  // =========================================================================
  function runOtsuAutoThreshold() {
    const sCanvas = state.scanner.sourceCanvas;
    if (!sCanvas || sCanvas.width === 0) return;

    const sCtx = state.scanner.sourceCtx;
    const imgData = sCtx.getImageData(0, 0, sCanvas.width, sCanvas.height);
    const data = imgData.data;

    // Build 256-bin grayscale luminance histogram
    const hist = new Uint32Array(256);
    let total = 0;

    for (let i = 0; i < data.length; i += 4) {
      const lum = Math.round(0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]);
      hist[lum]++;
      total++;
    }

    if (total === 0) return;

    let sum = 0;
    for (let t = 0; t < 256; t++) {
      sum += t * hist[t];
    }

    let sumB = 0;
    let wB = 0;
    let maxVariance = 0;
    let optimalT = 110;

    for (let t = 0; t < 256; t++) {
      wB += hist[t];
      if (wB === 0) continue;
      const wF = total - wB;
      if (wF === 0) break;

      sumB += t * hist[t];
      const mB = sumB / wB;
      const mF = (sum - sumB) / wF;

      const betweenClassVariance = wB * wF * (mB - mF) * (mB - mF);
      if (betweenClassVariance > maxVariance) {
        maxVariance = betweenClassVariance;
        optimalT = t;
      }
    }

    state.scanner.threshold = optimalT;

    const slider = document.getElementById('slider-threshold');
    const valDisplay = document.getElementById('val-threshold');
    if (slider) slider.value = optimalT;
    if (valDisplay) valDisplay.textContent = optimalT;

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

    let targetX = 0, targetY = 0, targetW = 0, targetH = 0;
    let data = null;

    if (state.scanner.perspectiveEnabled) {
      // Perspective Warp is Active: Unwarp quad region into rectangular buffer
      applyBilinearPerspectiveWarp(state.scanner.sourceCanvas, state.scanner.unwarpedCanvas, targetAspect);
      targetW = state.scanner.unwarpedCanvas.width;
      targetH = state.scanner.unwarpedCanvas.height;
      targetX = 0;
      targetY = 0;
      const uCtx = state.scanner.unwarpedCanvas.getContext('2d');
      data = uCtx.getImageData(0, 0, targetW, targetH).data;
    } else {
      // Standard Central Bounding Box Guide
      targetW = width * 0.82;
      targetH = targetW / targetAspect;

      if (targetH > height * 0.85) {
        targetH = height * 0.85;
        targetW = targetH * targetAspect;
      }

      targetX = Math.round((width - targetW) / 2);
      targetY = Math.round((height - targetH) / 2);

      const sCtx = state.scanner.sourceCtx;
      data = sCtx.getImageData(targetX, targetY, targetW, targetH).data;
    }

    const targetAreaPixels = Math.round(targetW * targetH);
    let fragmentPixelCount = 0;
    const threshold = state.scanner.threshold;
    const gain = state.scanner.gain;
    const polymerFilter = state.scanner.polymerFilter;

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
      let isBanknote = luminance > threshold;

      // Polymer filter: protect transparent security windows from false background classification
      if (!isBanknote && polymerFilter) {
        // Transparent window signature: high transmission, minimal color variance
        const maxVal = Math.max(r, g, b);
        const minVal = Math.min(r, g, b);
        const sat = maxVal === 0 ? 0 : (maxVal - minVal) / maxVal;
        if (sat < 0.12 && luminance > threshold * 0.45) {
          isBanknote = true;
        }
      }

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

    // Cache to current side
    const currentSide = state.scanner.activeSide;
    state.scanner.sidesData[currentSide].percent = percent;
    state.scanner.sidesData[currentSide].px = fragmentPixelCount;

    // Draw the overlay mask on top of the original image with transparency
    if (state.scanner.highlightMask || state.scanner.highlightMissing) {
      mCtx.putImageData(maskData, 0, 0);
      if (state.scanner.perspectiveEnabled) {
        // In perspective mode, also show unwarped view on canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(state.scanner.unwarpedCanvas, targetX, targetY);
        ctx.drawImage(maskCanvas, targetX, targetY);
      } else {
        ctx.drawImage(maskCanvas, targetX, targetY);
      }
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

    // Threshold check (standard is >50%, JPY has 2-tier 66.7% / 40.0%, INR has 80% / 40%, CNY has 75% / 50%)
    const isJPY = reg.code === 'JPY';
    const isINR = reg.code === 'INR';
    const isCNY = reg.code === 'CNY';

    let passed = false;
    let marginal = false;

    if (isJPY) {
      if (valThreshold) valThreshold.textContent = '≥ 66.7% (100%)';
      if (percent >= 66.7) passed = true;
      else if (percent >= 40.0) marginal = true;
    } else if (isINR) {
      if (valThreshold) valThreshold.textContent = '≥ 80.0% (100%)';
      if (percent >= 80.0) passed = true;
      else if (percent >= 40.0) marginal = true;
    } else if (isCNY) {
      if (valThreshold) valThreshold.textContent = '≥ 75.0% (100%)';
      if (percent >= 75.0) passed = true;
      else if (percent >= 50.0) marginal = true;
    } else {
      if (valThreshold) valThreshold.textContent = '> 50.0%';
      if (percent >= 50.5) {
        passed = true;
      } else if (percent >= 49.0) {
        marginal = true;
      }
    }

    if (verdictBadge && verdictTitle && verdictIcon && verdictDetails) {
      verdictBadge.className = 'verdict-pill';
      if (passed) {
        verdictBadge.classList.add('verdict-pass');
        verdictIcon.textContent = '✅';
        verdictTitle.textContent = 'STATUTORY STANDARD MET';
        verdictDetails.innerHTML = `<strong>Eligible for 100% Full Face Value Replacement.</strong> Measured fragment surface area (${percent.toFixed(1)}%) satisfies statutory requirements under <strong>${reg.statutoryCode}</strong>. Authorized for immediate counter exchange or deposit.`;
        if (btnExport) btnExport.removeAttribute('disabled');
      } else if (marginal) {
        verdictBadge.classList.add('verdict-marginal');
        verdictIcon.textContent = '⚠️';
        verdictTitle.textContent = 'MARGINAL / TIERED VALUE';
        verdictDetails.innerHTML = `<strong>Partial / Borderline Value Tier.</strong> At ${percent.toFixed(1)}%, this note falls into a tiered statutory category or forensic threshold. Tellers may accept for partial value or require forwarding to the central bank.`;
        if (btnExport) btnExport.removeAttribute('disabled');
      } else {
        verdictBadge.classList.add('verdict-fail');
        verdictIcon.textContent = '❌';
        verdictTitle.textContent = 'SUB-50% THRESHOLD (AFFIDAVIT REQUIRED)';
        verdictDetails.innerHTML = `<strong>Special Affidavit Required.</strong> Remaining surface area (${percent.toFixed(1)}%) is ≤50%. Under <strong>${reg.statutoryCode}</strong>, bearer must execute a sworn affidavit of total destruction to claim reimbursement.`;
        if (btnExport) btnExport.removeAttribute('disabled');
      }
    }

    if (typeof update3DShowcase === 'function') {
      update3DShowcase();
    }
  }

  function transferScanToDossier() {
    state.dossier.surfacePercent = state.scanner.measuredPercent.toFixed(1) + '%';
    state.dossier.currency = `${state.scanner.currencyCode} ${state.scanner.denomination} Note`;

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
    if (inputArea) inputArea.value = `${state.dossier.surfacePercent} (${state.scanner.measuredPercent >= 50.5 ? 'Statutory Standard Met' : 'Special Affidavit'})`;
    if (inputCurr) inputCurr.value = state.dossier.currency;

    updateDossierSheet();
  }

  // =========================================================================
  // 9. INTERACTIVE 100-GRID AUDIT ENGINE (Tactile Pointer Events & Backdrop)
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
      gridContainer.appendChild(cell);
    }

    // Unified Pointer Events on Container (prevents scrolling, supports mouse/touch/stylus smoothly)
    gridContainer.addEventListener('pointerdown', (e) => {
      state.grid100.isDrawing = true;
      gridContainer.setPointerCapture(e.pointerId);

      const targetCell = getCellFromPoint(e.clientX, e.clientY);
      if (targetCell) {
        state.grid100.drawState = targetCell.classList.contains('destroyed');
        toggleCell(targetCell, state.grid100.drawState);
        audio.tap();
      }
    });

    gridContainer.addEventListener('pointermove', (e) => {
      if (!state.grid100.isDrawing) return;
      const targetCell = getCellFromPoint(e.clientX, e.clientY);
      if (targetCell) {
        const isDestroyed = targetCell.classList.contains('destroyed');
        // Toggle if cell does not already match target drawState
        if (state.grid100.drawState && isDestroyed) {
          toggleCell(targetCell, true);
          audio.vibrate(8);
        } else if (!state.grid100.drawState && !isDestroyed) {
          toggleCell(targetCell, false);
          audio.vibrate(8);
        }
      }
    });

    const stopDrawing = (e) => {
      if (state.grid100.isDrawing) {
        state.grid100.isDrawing = false;
        try { gridContainer.releasePointerCapture(e.pointerId); } catch(err){}
      }
    };

    gridContainer.addEventListener('pointerup', stopDrawing);
    gridContainer.addEventListener('pointercancel', stopDrawing);

    // Photo Backdrop Slider & Button Controls
    const sliderBackdrop = document.getElementById('slider-backdrop-opacity');
    const valBackdrop = document.getElementById('val-backdrop-opacity');
    const btnLoadPhotoToGrid = document.getElementById('btn-load-photo-to-grid');

    if (sliderBackdrop) {
      sliderBackdrop.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10);
        state.grid100.backdropOpacity = val / 100;
        if (valBackdrop) valBackdrop.textContent = `${val}%`;
        const backdropCanvas = document.getElementById('grid-photo-backdrop');
        if (backdropCanvas) backdropCanvas.style.opacity = state.grid100.backdropOpacity;
      });
    }

    if (btnLoadPhotoToGrid) {
      btnLoadPhotoToGrid.addEventListener('click', () => {
        projectScanUnderGrid();
        audio.shutter();
      });
    }

    // Grid Presets & Tool Buttons
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

        renderGridToDossierCanvas();
        updateDossierSheet();
        switchTab('tab-dossier');
        audio.successChord();
      });
    }

    updateGridAspectBox();
    if (btn51) btn51.click();
  }

  function getCellFromPoint(clientX, clientY) {
    const el = document.elementFromPoint(clientX, clientY);
    if (el && el.classList.contains('grid-cell')) {
      return el;
    }
    return null;
  }

  function toggleCell(cell, makeIntact) {
    if (makeIntact) {
      cell.classList.remove('destroyed');
    } else {
      cell.classList.add('destroyed');
    }
    updateGridCalculations();
  }

  function updateGridAspectBox() {
    const reg = CURRENCY_REGISTRY.find(c => c.code === state.scanner.currencyCode) || CURRENCY_REGISTRY[0];
    const aspectBox = document.getElementById('grid-aspect-box');
    const indicator = document.getElementById('grid-aspect-indicator');
    if (aspectBox) {
      aspectBox.style.aspectRatio = `${reg.aspectRatio} / 1`;
    }
    if (indicator) {
      indicator.textContent = `Aspect: ${reg.aspectRatio.toFixed(3)}:1 (${reg.code} Standard)`;
    }
  }

  function projectScanUnderGrid() {
    const backdropCanvas = document.getElementById('grid-photo-backdrop');
    const sCanvas = state.scanner.sourceCanvas;
    if (!backdropCanvas || !sCanvas || sCanvas.width === 0) {
      loadSampleDamagedBill();
    }
    const bCtx = backdropCanvas.getContext('2d');
    backdropCanvas.width = 400;
    backdropCanvas.height = Math.round(400 / (CURRENCY_REGISTRY.find(c => c.code === state.scanner.currencyCode)?.aspectRatio || 2.353));
    bCtx.drawImage(state.scanner.canvasEl || state.scanner.sourceCanvas, 0, 0, backdropCanvas.width, backdropCanvas.height);
    backdropCanvas.style.opacity = state.grid100.backdropOpacity;
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
          <div class="banner-title">❌ SUB-50% SURFACE REMAINING (${intactCount}%)</div>
          <div class="banner-desc">Does not meet default counter exchange. Requires Sworn Affidavit of Total Destruction to be processed by central bank laboratories.</div>
        `;
      }
    }
  }

  function renderGridToDossierCanvas() {
    const dCanvas = document.getElementById('dossier-snapshot-canvas');
    if (!dCanvas) return;
    const dCtx = dCanvas.getContext('2d');
    dCanvas.width = 400;
    dCanvas.height = 170;

    dCtx.fillStyle = '#0f172a';
    dCtx.fillRect(0, 0, dCanvas.width, dCanvas.height);

    const cells = document.querySelectorAll('.grid-cell');
    const cellW = (dCanvas.width - 20) / 10;
    const cellH = (dCanvas.height - 20) / 10;

    cells.forEach((c, idx) => {
      const col = idx % 10;
      const row = Math.floor(idx / 10);
      const x = 10 + col * cellW;
      const y = 10 + row * cellH;

      if (c.classList.contains('destroyed')) {
        dCtx.fillStyle = 'rgba(239, 68, 68, 0.45)';
      } else {
        dCtx.fillStyle = 'rgba(16, 185, 129, 0.7)';
      }
      dCtx.fillRect(x + 1, y + 1, cellW - 2, cellH - 2);
    });

    dCtx.strokeStyle = '#334155';
    dCtx.lineWidth = 1;
    dCtx.strokeRect(10, 10, dCanvas.width - 20, dCanvas.height - 20);
  }

  // =========================================================================
  // 10. MULTI-NOTE SALVAGE BATCH ENVELOPE
  // =========================================================================
  function initBatchEnvelope() {
    const btnAdd = document.getElementById('btn-add-to-batch');
    const btnClear = document.getElementById('btn-clear-batch');

    if (btnAdd) {
      btnAdd.addEventListener('click', () => {
        addCurrentToBatch();
        audio.successChord();
      });
    }

    if (btnClear) {
      btnClear.addEventListener('click', () => {
        if (state.batchNotes.length === 0) return;
        if (confirm('Clear all notes from this salvage envelope?')) {
          state.batchNotes = [];
          renderBatchTable();
          audio.tap();
        }
      });
    }

    renderBatchTable();
  }

  function addCurrentToBatch() {
    const reg = CURRENCY_REGISTRY.find(c => c.code === state.scanner.currencyCode) || CURRENCY_REGISTRY[0];
    const denom = state.scanner.denomination || '20';
    const percent = state.scanner.measuredPercent || 58.4;
    const passed = percent >= 50.5;

    const noteItem = {
      id: Date.now(),
      currency: reg.code,
      currencyName: reg.name,
      symbol: reg.symbol || '$',
      denom: denom,
      faceValue: parseFloat(denom) || 0,
      percent: percent,
      verdict: passed ? 'Eligible (100%)' : 'Affidavit Required (≤50%)',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    state.batchNotes.push(noteItem);
    renderBatchTable();
  }

  function renderBatchTable() {
    const tbody = document.getElementById('batch-notes-tbody');
    const countBadge = document.getElementById('batch-notes-count');
    const totalBadge = document.getElementById('batch-total-value');
    if (!tbody) return;

    if (state.batchNotes.length === 0) {
      tbody.innerHTML = '<tr class="empty-batch-row"><td colspan="6">No notes added to envelope yet. Assess a note in the Scanner or Grid, then click below to add.</td></tr>';
      if (countBadge) countBadge.textContent = '0 Notes';
      if (totalBadge) totalBadge.textContent = '$0.00 Total Salvage Value';
      return;
    }

    tbody.innerHTML = '';
    let totalVal = 0;
    const firstSymbol = state.batchNotes[0]?.symbol || '$';

    state.batchNotes.forEach((note, idx) => {
      totalVal += note.faceValue;
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>#${idx + 1}</strong></td>
        <td>${note.currency} — ${note.currencyName}</td>
        <td><strong>${note.symbol}${note.denom}</strong></td>
        <td><span class="badge ${note.percent >= 50.5 ? 'badge-success' : 'badge-danger'}">${note.percent.toFixed(1)}%</span></td>
        <td>${note.verdict}</td>
        <td><button class="btn-batch-del" data-id="${note.id}" title="Remove note">&times;</button></td>
      `;

      const delBtn = tr.querySelector('.btn-batch-del');
      if (delBtn) {
        delBtn.addEventListener('click', () => {
          state.batchNotes = state.batchNotes.filter(n => n.id !== note.id);
          renderBatchTable();
          audio.tap();
        });
      }

      tbody.appendChild(tr);
    });

    if (countBadge) countBadge.textContent = `${state.batchNotes.length} Note${state.batchNotes.length === 1 ? '' : 's'}`;
    if (totalBadge) totalBadge.textContent = `${firstSymbol}${totalVal.toFixed(2)} Total Salvage Value`;
  }

  // =========================================================================
  // 11. SWORN DESTRUCTION AFFIDAVIT GENERATOR (For ≤50% Claims)
  // =========================================================================
  function initAffidavitGenerator() {
    const btnOpen = document.getElementById('btn-open-affidavit-modal');
    const modal = document.getElementById('modal-affidavit-generator');
    const btnClose = document.getElementById('btn-affidavit-close');
    const btnDismiss = document.getElementById('btn-dismiss-affidavit');
    const btnCopy = document.getElementById('btn-copy-affidavit');
    const btnAttach = document.getElementById('btn-attach-affidavit');

    const selectJurisdiction = document.getElementById('affidavit-jurisdiction');
    const inputDate = document.getElementById('affidavit-incident-date');
    const selectCause = document.getElementById('affidavit-destruction-cause');
    const inputLoc = document.getElementById('affidavit-location');

    // Pre-fill today's date
    if (inputDate && !inputDate.value) {
      inputDate.value = new Date().toISOString().split('T')[0];
    }

    function openModal() {
      if (modal) {
        updateAffidavitText();
        modal.classList.add('active');
        audio.tap();
      }
    }

    function closeModal() {
      if (modal) modal.classList.remove('active');
    }

    if (btnOpen) btnOpen.addEventListener('click', openModal);
    if (btnClose) btnClose.addEventListener('click', closeModal);
    if (btnDismiss) btnDismiss.addEventListener('click', closeModal);

    [selectJurisdiction, inputDate, selectCause, inputLoc].forEach(input => {
      if (input) input.addEventListener('input', updateAffidavitText);
    });

    if (btnCopy) {
      btnCopy.addEventListener('click', () => {
        const textEl = document.getElementById('affidavit-generated-text');
        if (textEl) {
          navigator.clipboard.writeText(textEl.value).then(() => {
            btnCopy.textContent = '✅ Copied!';
            setTimeout(() => { btnCopy.textContent = '📋 Copy Declaration'; }, 2000);
            audio.tap();
          });
        }
      });
    }

    if (btnAttach) {
      btnAttach.addEventListener('click', () => {
        const textEl = document.getElementById('affidavit-generated-text');
        const narrativeInput = document.getElementById('dossier-narrative');
        if (textEl && narrativeInput) {
          narrativeInput.value = textEl.value;
          updateDossierSheet();
          closeModal();
          switchTab('tab-dossier');
          audio.successChord();
          alert('Sworn Affidavit text successfully attached to the Claim Dossier Narrative field.');
        }
      });
    }
  }

  function updateAffidavitText() {
    const textEl = document.getElementById('affidavit-generated-text');
    if (!textEl) return;

    const jur = document.getElementById('affidavit-jurisdiction')?.value || 'US';
    const date = document.getElementById('affidavit-incident-date')?.value || new Date().toISOString().split('T')[0];
    const cause = document.getElementById('affidavit-destruction-cause')?.value || 'Thermal / House Fire';
    const loc = document.getElementById('affidavit-location')?.value || 'Austin, Texas, USA';
    const claimant = document.getElementById('dossier-claimant-name')?.value || 'Legal Currency Bearer';
    const currency = state.scanner.currencyCode;
    const denom = state.scanner.denomination;
    const percent = state.scanner.measuredPercent.toFixed(1);

    let statCite = '31 CFR § 100.5 (Mutilated Paper Currency Claims)';
    let authority = 'Bureau of Engraving and Printing / Federal Reserve System';

    if (jur === 'EU') {
      statCite = 'ECB Decision ECB/2013/10, Article 3';
      authority = 'European Central Bank & Eurosystem National Central Banks';
    } else if (jur === 'UK') {
      statCite = 'Currency and Bank Notes Act (Damaged Banknote Scheme)';
      authority = 'Bank of England';
    } else if (jur === 'MX') {
      statCite = 'Reglas para el Canje de Billetes Deteriorados (Regla 10/2006)';
      authority = 'Banco de México';
    } else if (jur === 'CA') {
      statCite = 'Bank of Canada Act, Section 25';
      authority = 'Bank of Canada';
    }

    const affidavitText = 
`SWORN AFFIDAVIT OF COMPLETE AND TOTAL DESTRUCTION
Pursuant to ${statCite} & Regulations of the ${authority}

I, the undersigned Claimant, ${claimant}, solemnly swear and declare under penalty of perjury under the laws of the applicable jurisdiction that:

1. Identification of Tender: I am the lawful holder and bearer of the genuine ${currency} $${denom} banknote described herein, presenting approximately ${percent}% remaining surface area.

2. Incident of Destruction: On or about ${date}, at or near ${loc}, the missing fragment of this banknote was subjected to irreversible catastrophic trauma resulting from:
   CAUSE: ${cause}.

3. Non-Recovery & Total Destruction: The missing fragment(s) was completely destroyed, incinerated, dissolved, or irretrievably obliterated. No portion of the missing fragment exists, can be reconstructed, or will ever be tendered, surrendered, or deposited for value by myself or any third party.

4. Good Faith: This claim is submitted in full good faith. I have not previously received compensation, insurance indemnification, or reimbursement for this note.

Declared under penalty of perjury on this ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.

Claimant Signature: ___________________________________   Date: ________________________`;

    textEl.value = affidavitText;
  }

  // =========================================================================
  // 12. CENTRAL BANKING DATABASE VIEW
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
        listContainer.innerHTML = '<div style="padding:24px;text-align:center;color:var(--text-muted);">No matching currencies found. Try searching USD, EUR, GBP, JMD, MXN, INR, or CNY.</div>';
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
              <button class="btn-sm btn-outline btn-view-form" data-form="${item.formId}">View Official Slip</button>
            </div>
          </div>
        `;

        const summary = div.querySelector('.db-item-summary');
        summary.addEventListener('click', () => {
          div.classList.toggle('open');
          audio.tap();
        });

        const btnScript = div.querySelector('.btn-view-script');
        btnScript.addEventListener('click', (e) => {
          e.stopPropagation();
          showTellerScript(item.code);
          audio.tap();
        });

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
  // 13. CENTRAL BANK & TELLER LOCATOR VIEW
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
        gridContainer.innerHTML = '<div style="padding:24px;text-align:center;color:var(--text-muted);">No locations match your search. Try searching Washington, Frankfurt, London, Kingston, Mexico, or Mumbai.</div>';
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
  // 14. OFFICIAL CLAIM DOSSIER VIEW & PURE-JS OFFLINE PDF GENERATOR
  // =========================================================================
  function initDossierView() {
    const btnUpdatePreview = document.getElementById('btn-update-preview');
    const btnPrintDossier = document.getElementById('btn-print-dossier');
    const btnDownloadPdf = document.getElementById('btn-download-pdf');

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

        // Check if Android Native PrintManager Bridge is active
        if (window.AndroidBridge && typeof window.AndroidBridge.printDocument === 'function') {
          const dossierHtml = generatePrintableHtml();
          window.AndroidBridge.printDocument(`Monument_of_Greed_${state.dossier.refId}`, dossierHtml);
        } else {
          window.print();
        }
      });
    }

    if (btnDownloadPdf) {
      btnDownloadPdf.addEventListener('click', () => {
        downloadClaimPdf();
        audio.successChord();
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
        dCanvas.width = 400;
        dCanvas.height = 170;
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

  function generatePrintableHtml() {
    const dossierEl = document.getElementById('printable-dossier');
    const content = dossierEl ? dossierEl.innerHTML : '';
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Monument of Greed — Banknote Claim Dossier</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; margin: 20px; color: #0f172a; line-height: 1.5; }
    .printable-dossier-sheet { max-width: 800px; margin: 0 auto; border: 2px solid #0f172a; padding: 24px; border-radius: 8px; }
    table { width: 100%; border-collapse: collapse; margin-top: 15px; }
    th, td { border: 1px solid #cbd5e1; padding: 8px; font-size: 0.85rem; }
    th { background: #f1f5f9; text-align: left; }
    .dossier-sheet-header { border-bottom: 2px solid #0f172a; padding-bottom: 12px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; }
    .sheet-title { font-size: 1.3rem; font-weight: 900; margin: 0; }
    .dossier-badge-approved { background: #dcfce7; color: #166534; font-weight: bold; padding: 4px 10px; border-radius: 999px; }
  </style>
</head>
<body>
  <div class="printable-dossier-sheet">
    ${content}
  </div>
</body>
</html>`;
  }

  /**
   * 100% OFFLINE BINARY PDF 1.4 COMPILER (Pure JavaScript)
   * Builds an authentic, downloadable PDF without any CDN or external libraries
   */
  function downloadClaimPdf() {
    const claimant = document.getElementById('dossier-claimant-name')?.value || 'Legal Currency Bearer';
    const phone = document.getElementById('dossier-phone')?.value || '+1 (555) 234-5678';
    const currency = document.getElementById('dossier-currency')?.value || 'USD $20 Federal Reserve Note';
    const area = document.getElementById('dossier-surface-area')?.value || '58.4% (Threshold Satisfied)';
    const serialL = document.getElementById('dossier-serial-left')?.value || 'MF 89234812 B';
    const serialR = document.getElementById('dossier-serial-right')?.value || 'MF 89234812 B';
    const narrative = document.getElementById('dossier-narrative')?.value || 'Accidental damage under domestic circumstances.';
    const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const refId = state.dossier.refId;

    // Sanitize string for PDF literal strings (escape parenthesis and backslashes)
    const esc = (str) => String(str || '').replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');

    // PDF Stream Builder
    const streamParts = [];
    streamParts.push('BT');
    
    // Header
    streamParts.push('/F1 16 Tf');
    streamParts.push('50 780 Td');
    streamParts.push(`(MONUMENT OF GREED - BANKNOTE SALVAGE DOSSIER) Tj`);
    
    streamParts.push('/F1 9 Tf');
    streamParts.push('0 -15 Td');
    streamParts.push(`(Official Surface Area Audit & Statutory Redemption Affidavit - Pro Edition) Tj`);

    streamParts.push('0 -12 Td');
    streamParts.push(`(Certified under Alumungandr Master Charter 2026 | Pure Offline Computer Vision) Tj`);

    // Divider Line
    streamParts.push('ET');
    streamParts.push('0.5 w');
    streamParts.push('50 745 m 562 745 l S');
    streamParts.push('BT');

    // Case Details Table
    streamParts.push('/F1 11 Tf');
    streamParts.push('50 725 Td');
    streamParts.push(`(CASE REFERENCE: ${esc(refId)}) Tj`);
    streamParts.push('300 0 Td');
    streamParts.push(`(DATE: ${esc(dateStr)}) Tj`);

    streamParts.push('-300 -20 Td');
    streamParts.push('/F1 10 Tf');
    streamParts.push(`(CLAIMANT NAME: ${esc(claimant)}) Tj`);
    streamParts.push('300 0 Td');
    streamParts.push(`(CONTACT: ${esc(phone)}) Tj`);

    streamParts.push('-300 -18 Td');
    streamParts.push(`(CURRENCY & DENOM: ${esc(currency)}) Tj`);
    streamParts.push('300 0 Td');
    streamParts.push(`(MEASURED SURFACE: ${esc(area)}) Tj`);

    streamParts.push('-300 -18 Td');
    streamParts.push(`(SERIAL NUMBER (L): ${esc(serialL)}) Tj`);
    streamParts.push('300 0 Td');
    streamParts.push(`(SERIAL NUMBER (R): ${esc(serialR)}) Tj`);

    // Divider
    streamParts.push('ET');
    streamParts.push('50 640 m 562 640 l S');
    streamParts.push('BT');

    // Statutory Determination
    streamParts.push('/F1 11 Tf');
    streamParts.push('50 620 Td');
    const isPass = state.scanner.measuredPercent >= 50.5;
    streamParts.push(`(STATUTORY STATUS: ${isPass ? 'COMPLIANT (>50.0% THRESHOLD MET)' : 'SPECIAL AFFIDAVIT REQUIRED (<=50%)'}) Tj`);

    streamParts.push('/F1 9 Tf');
    streamParts.push('0 -16 Td');
    streamParts.push(`(CITATIONS: US 31 CFR Part 100 | ECB Decision 2013/10 | BOE Damaged Note Scheme | Banxico R-10/2006) Tj`);

    // Narrative Block (wrap text roughly)
    streamParts.push('/F1 10 Tf');
    streamParts.push('0 -24 Td');
    streamParts.push(`(SWORN DECLARATION & CASUALTY NARRATIVE:) Tj`);

    streamParts.push('/F1 8.5 Tf');
    const narrativeLines = narrative.match(/.{1,85}(\s|$)/g) || [narrative];
    narrativeLines.slice(0, 10).forEach(line => {
      streamParts.push('0 -12 Td');
      streamParts.push(`(${esc(line.trim())}) Tj`);
    });

    // Batch Envelope Summary if batch notes exist
    if (state.batchNotes.length > 0) {
      streamParts.push('0 -20 Td');
      streamParts.push('/F1 10 Tf');
      streamParts.push(`(MULTI-NOTE SALVAGE BATCH SUMMARY (${state.batchNotes.length} Notes in Envelope):) Tj`);
      streamParts.push('/F1 8 Tf');
      state.batchNotes.slice(0, 6).forEach((bn, idx) => {
        streamParts.push('0 -11 Td');
        streamParts.push(`(Item #${idx + 1}: ${esc(bn.currency)} ${esc(bn.symbol)}${esc(bn.denom)} | Surface: ${bn.percent.toFixed(1)}% | Status: ${esc(bn.verdict)}) Tj`);
      });
    }

    // Signature Block at Bottom
    streamParts.push('ET');
    streamParts.push('50 120 m 562 120 l S');
    streamParts.push('BT');
    streamParts.push('/F1 9 Tf');
    streamParts.push('50 100 Td');
    streamParts.push(`(CLAIMANT SIGNATURE: ___________________________________      DATE: ______________________) Tj`);
    streamParts.push('0 -18 Td');
    streamParts.push(`(RECEIVING BANK TELLER / CASHIER STAMP & SIGNATURE: ______________________________________) Tj`);
    streamParts.push('0 -16 Td');
    streamParts.push('/F1 7.5 Tf');
    streamParts.push(`(This document is generated by Monument of Greed offline forensic assessment engine under statutory authority.) Tj`);
    streamParts.push('ET');

    const contentText = streamParts.join('\n');
    const contentLen = contentText.length;

    // Assemble PDF Object graph
    const obj1 = '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n';
    const obj2 = '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n';
    const obj3 = '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n';
    const obj4 = `4 0 obj\n<< /Length ${contentLen} >>\nstream\n${contentText}\nendstream\nendobj\n`;
    const obj5 = '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n';

    const header = '%PDF-1.4\n';
    const offset1 = header.length;
    const offset2 = offset1 + obj1.length;
    const offset3 = offset2 + obj2.length;
    const offset4 = offset3 + obj3.length;
    const offset5 = offset4 + obj4.length;
    const xrefOffset = offset5 + obj5.length;

    const pad10 = (n) => String(n).padStart(10, '0');

    const xref = `xref
0 6
0000000000 65535 f 
${pad10(offset1)} 00000 n 
${pad10(offset2)} 00000 n 
${pad10(offset3)} 00000 n 
${pad10(offset4)} 00000 n 
${pad10(offset5)} 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
${xrefOffset}
%%EOF`;

    const pdfData = header + obj1 + obj2 + obj3 + obj4 + obj5 + xref;
    const blob = new Blob([pdfData], { type: 'application/pdf' });
    const blobUrl = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = `Monument_of_Greed_Dossier_${refId}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => { URL.revokeObjectURL(blobUrl); }, 10000);
  }

  // =========================================================================
  // 15. MODALS & OFFICIAL FORM TEMPLATES
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
    } else if (formId === 'BANXICO_DICTAMEN') {
      title.textContent = 'Banco de México — Solicitud de Dictamen y Canje';
      contentHtml = `
        <div style="border:1px solid #cbd5e1;padding:16px;border-radius:8px;background:#ffffff;color:#1e293b;">
          <div style="text-align:center;border-bottom:2px solid #0f172a;padding-bottom:10px;margin-bottom:14px;">
            <h4 style="margin:0;font-size:1.1rem;font-weight:900;">BANCO DE MÉXICO</h4>
            <div style="font-size:0.75rem;color:#64748b;">SOLICITUD DE DICTAMEN DE BILLETES Y FRACCIONES DE BILLETES</div>
            <div style="font-size:0.7rem;color:#64748b;">Conforme a la Regla 10/2006 de Banxico</div>
          </div>
          <div style="font-size:0.8rem;line-height:1.6;">
            <p><strong>Criterios de Validez:</strong> Conserva su valor si la fracción presentada corresponde a una sola pieza y su superficie es mayor al 50% de un billete completo de la misma denominación y tipo.</p>
            <p style="margin-top:8px;"><strong>Centros de Canje:</strong> Cualquier sucursal bancaria del territorio nacional que ofrezca servicio de canje de billetes y monedas.</p>
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

  // =========================================================================
  // 17. AMBIENT MOTION ENGINE (Dynamic Live Atmosphere & Micro-Interactions)
  // =========================================================================
  class AmbientMotionEngine {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.particles = [];
      this.waves = [];
      this.animId = null;
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.currentTheme = state.currentTheme || 'theme-clay-peach';
      this.pointerX = -1000;
      this.pointerY = -1000;
      this.time = 0;
      this.isPaused = false;

      this.init();
    }

    init() {
      this.resize();
      window.addEventListener('resize', () => this.resize(), { passive: true });

      // Track pointer / touch coordinates for tactile physical response
      window.addEventListener('pointermove', (e) => {
        this.pointerX = e.clientX;
        this.pointerY = e.clientY;
      }, { passive: true });

      window.addEventListener('pointerleave', () => {
        this.pointerX = -1000;
        this.pointerY = -1000;
      });

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.pause();
        } else {
          this.resume();
        }
      });

      this.initParticles();
      this.start();
    }

    resize() {
      if (!this.canvas) return;
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
    }

    setTheme(newTheme) {
      this.currentTheme = newTheme;
      this.initParticles();
    }

    initParticles() {
      this.particles = [];
      const count = this.width < 480 ? 30 : 50;

      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          radius: Math.random() * 2.5 + 1.2,
          baseRadius: Math.random() * 2.5 + 1.2,
          vx: (Math.random() - 0.5) * 0.4,
          vy: - (Math.random() * 0.5 + 0.2), // gentle upward float
          alpha: Math.random() * 0.5 + 0.25,
          phase: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          rot: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.03
        });
      }
    }

    pause() {
      this.isPaused = true;
      if (this.animId) {
        cancelAnimationFrame(this.animId);
        this.animId = null;
      }
    }

    resume() {
      if (this.isPaused) {
        this.isPaused = false;
        this.start();
      }
    }

    start() {
      const render = () => {
        if (this.isPaused) return;
        this.time += 0.02;
        this.draw();
        this.animId = requestAnimationFrame(render);
      };
      this.animId = requestAnimationFrame(render);
    }

    draw() {
      const ctx = this.ctx;
      if (!ctx) return;
      ctx.clearRect(0, 0, this.width, this.height);

      if (this.currentTheme === 'theme-obsidian-oled') {
        // High-contrast Obsidian Slate: Warm Floating Amber Embers & Tactile Sparks (Photo 3)
        this.drawObsidianEmbers(ctx);
      } else if (this.currentTheme === 'theme-vault-emerald') {
        // Central Bank Intaglio: Weaving Guilloche Security Sine Curves
        this.drawVaultGuilloche(ctx);
      } else if (this.currentTheme === 'theme-clay-peach') {
        // Soft & Approachable: Gentle Breathing Warm Clay/Peach Bokeh Orbs
        this.drawClayBokeh(ctx);
      } else if (this.currentTheme === 'theme-royal-gold') {
        // Imperial Treasury: Shimmering Gold Flakes & Micro-Bullion Shimmer
        this.drawRoyalGold(ctx);
      } else {
        // Cyber Mint: Precision Laser Scanlines & Neural Grid Nodes
        this.drawCyberMint(ctx);
      }
    }

    drawObsidianEmbers(ctx) {
      for (let p of this.particles) {
        p.y += p.vy;
        p.x += Math.sin(this.time + p.phase) * 0.35 + p.vx;

        // Pointer repulsion / tactile reaction
        const dx = p.x - this.pointerX;
        const dy = p.y - this.pointerY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120 && dist > 0) {
          const force = (120 - dist) / 120;
          p.x += (dx / dist) * force * 2.5;
          p.y += (dy / dist) * force * 2.5;
          p.alpha = Math.min(1.0, p.alpha + 0.03);
        }

        if (p.y < -10) {
          p.y = this.height + 10;
          p.x = Math.random() * this.width;
        }

        const pulse = 0.5 + 0.5 * Math.sin(this.time * 2 + p.phase);
        const curAlpha = p.alpha * (0.6 + 0.4 * pulse);

        // Glowing warm amber ember
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2.8);
        grad.addColorStop(0, `rgba(251, 146, 60, ${curAlpha})`);
        grad.addColorStop(0.4, `rgba(234, 88, 12, ${curAlpha * 0.7})`);
        grad.addColorStop(1, 'rgba(234, 88, 12, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.8, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    drawVaultGuilloche(ctx) {
      // 3 Layers of Undulating Intaglio Security Sine Curves
      const waveCount = 3;
      for (let i = 0; i < waveCount; i++) {
        ctx.beginPath();
        const baseH = this.height * (0.35 + i * 0.18);
        const amp = 30 + i * 15;
        const freq = 0.0025 + i * 0.001;
        const speed = 0.6 + i * 0.4;

        ctx.moveTo(0, baseH + Math.sin(this.time * speed) * amp);
        for (let x = 0; x <= this.width; x += 15) {
          const y = baseH + Math.sin(x * freq + this.time * speed) * amp + Math.cos(x * 0.005 - this.time * 0.5) * 12;
          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = i === 0 ? 'rgba(16, 185, 129, 0.15)' : (i === 1 ? 'rgba(52, 211, 153, 0.12)' : 'rgba(5, 150, 105, 0.10)');
        ctx.lineWidth = 1.8;
        ctx.stroke();
      }

      // Micro intaglio security dust
      for (let p of this.particles) {
        p.x += p.vx * 0.5;
        p.y += p.vy * 0.6;
        if (p.y < 0) p.y = this.height;
        if (p.x < 0) p.x = this.width;
        if (p.x > this.width) p.x = 0;

        ctx.fillStyle = `rgba(52, 211, 153, ${p.alpha * 0.45})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.9, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    drawClayBokeh(ctx) {
      // Soft, approachable breathing pastel bokeh circles
      for (let p of this.particles) {
        p.x += Math.sin(this.time * 0.5 + p.phase) * 0.4;
        p.y += p.vy * 0.5;
        if (p.y < -30) p.y = this.height + 30;

        const pulse = 1.0 + 0.3 * Math.sin(this.time + p.phase);
        const rad = p.radius * 3.5 * pulse;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, rad);
        grad.addColorStop(0, `rgba(224, 122, 95, ${p.alpha * 0.22})`);
        grad.addColorStop(0.6, `rgba(244, 162, 97, ${p.alpha * 0.14})`);
        grad.addColorStop(1, 'rgba(244, 162, 97, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, rad, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    drawRoyalGold(ctx) {
      // Glistening gold leaf flakes
      for (let p of this.particles) {
        p.y -= p.vy * 0.7; // drift downward like fine gold flakes
        p.x += Math.sin(this.time * 1.5 + p.phase) * 0.6;
        p.rot += p.rotSpeed;
        if (p.y > this.height + 10) p.y = -10;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = `rgba(245, 158, 11, ${p.alpha * 0.45})`;
        ctx.fillRect(-p.radius, -p.radius * 0.6, p.radius * 2, p.radius * 1.2);
        ctx.restore();
      }
    }

    drawCyberMint(ctx) {
      // Matrix nodes and laser scanline
      const scanY = ((this.time * 80) % (this.height + 200)) - 100;
      ctx.fillStyle = 'rgba(6, 182, 212, 0.04)';
      ctx.fillRect(0, scanY, this.width, 2);

      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];
        p.x += p.vx * 0.8;
        p.y += p.vy * 0.8;
        if (p.y < 0) p.y = this.height;
        if (p.x < 0) p.x = this.width;
        if (p.x > this.width) p.x = 0;

        ctx.fillStyle = 'rgba(6, 182, 212, 0.4)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.8, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < this.particles.length; j++) {
          const p2 = this.particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 90) {
            ctx.strokeStyle = `rgba(6, 182, 212, ${(1 - dist / 90) * 0.12})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    }
  }

  let ambientMotionEngine = null;
  function initAmbientMotion() {
    ambientMotionEngine = new AmbientMotionEngine('ambient-motion-canvas');
    window.ambientMotionEngine = ambientMotionEngine;
  }

  // =========================================================================
  // 18. 3D HOLOGRAPHIC BANKNOTE SHOWCASE STAGE
  // =========================================================================
  let isCardFlipped = false;

  function init3DBanknoteInspector() {
    const scene = document.getElementById('card-3d-scene');
    const card = document.getElementById('card-3d-object');
    const btnFlip = document.getElementById('btn-flip-3d-card');
    const btnShimmer = document.getElementById('btn-shimmer-3d');
    const sheenFront = document.getElementById('holo-sheen-front');
    const sheenBack = document.getElementById('holo-sheen-back');

    if (!scene || !card) return;

    // Flip 180° Button
    if (btnFlip) {
      btnFlip.addEventListener('click', () => {
        isCardFlipped = !isCardFlipped;
        card.classList.toggle('flipped', isCardFlipped);
        card.style.transform = isCardFlipped
          ? 'perspective(1000px) rotateY(180deg)'
          : 'perspective(1000px) rotateY(0deg)';
        audio.tap();
      });
    }

    // Specular Holographic Glint Button
    if (btnShimmer) {
      btnShimmer.addEventListener('click', () => {
        triggerHolographicShimmer();
        audio.tap();
      });
    }

    // Pointer / Touch 3D Tilt Interaction
    function handlePointerMove(e) {
      const rect = scene.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      const normX = Math.max(-1, Math.min(1, ((clientX - rect.left) / rect.width) * 2 - 1));
      const normY = Math.max(-1, Math.min(1, ((clientY - rect.top) / rect.height) * 2 - 1));

      const rotX = -normY * 18;
      const rotY = normX * 22;

      if (isCardFlipped) {
        card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${180 - rotY}deg)`;
      } else {
        card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      }

      // Dynamic Holographic Foil Sheen Displacement
      const sheenX = 50 + normX * 40;
      const sheenY = 50 + normY * 40;
      if (sheenFront) sheenFront.style.backgroundPosition = `${sheenX}% ${sheenY}%`;
      if (sheenBack) sheenBack.style.backgroundPosition = `${100 - sheenX}% ${sheenY}%`;
    }

    function resetCardTilt() {
      card.style.transition = 'transform 0.4s ease-out';
      card.style.transform = isCardFlipped
        ? 'perspective(1000px) rotateY(180deg)'
        : 'perspective(1000px) rotateY(0deg)';
      setTimeout(() => {
        card.style.transition = '';
      }, 400);
    }

    scene.addEventListener('pointermove', handlePointerMove, { passive: true });
    scene.addEventListener('pointerleave', resetCardTilt);
    scene.addEventListener('touchmove', handlePointerMove, { passive: true });
    scene.addEventListener('touchend', resetCardTilt);

    // Initial render of 3D card
    update3DShowcase();
  }

  function triggerHolographicShimmer() {
    const sheenFront = document.getElementById('holo-sheen-front');
    const sheenBack = document.getElementById('holo-sheen-back');
    [sheenFront, sheenBack].forEach(sheen => {
      if (!sheen) return;
      sheen.style.opacity = '0.9';
      let progress = 0;
      const anim = setInterval(() => {
        progress += 5;
        sheen.style.backgroundPosition = `${progress * 2}% ${50 + Math.sin(progress * 0.1) * 30}%`;
        if (progress >= 100) {
          clearInterval(anim);
          sheen.style.opacity = '';
        }
      }, 16);
    });
  }

  function update3DShowcase() {
    const cFront = document.getElementById('canvas-3d-front');
    const cBack = document.getElementById('canvas-3d-back');
    if (!cFront || !cBack) return;

    const reg = CURRENCY_REGISTRY.find(c => c.code === state.scanner.currencyCode) || CURRENCY_REGISTRY[0];
    const aspect = reg.aspectRatio || 2.35;
    const targetW = 480;
    const targetH = Math.round(targetW / aspect);

    cFront.width = targetW;
    cFront.height = targetH;
    cBack.width = targetW;
    cBack.height = targetH;

    const ctxF = cFront.getContext('2d');
    const ctxB = cBack.getContext('2d');

    // 1. OBVERSE (FRONT) FACE
    if (state.scanner.canvasEl && state.scanner.canvasEl.width > 0) {
      ctxF.drawImage(state.scanner.canvasEl, 0, 0, targetW, targetH);
    } else {
      // Fallback clean specimen
      ctxF.fillStyle = '#1e293b';
      ctxF.fillRect(0, 0, targetW, targetH);
      ctxF.strokeStyle = '#10b981';
      ctxF.lineWidth = 3;
      ctxF.strokeRect(6, 6, targetW - 12, targetH - 12);
      ctxF.fillStyle = '#10b981';
      ctxF.font = 'bold 20px monospace';
      ctxF.fillText(`${reg.code} ${state.scanner.denomination}`, 24, 40);
    }

    // Add fine intaglio micro-embossed corner clips
    ctxF.strokeStyle = 'rgba(217, 119, 6, 0.4)';
    ctxF.lineWidth = 1;
    ctxF.strokeRect(4, 4, targetW - 8, targetH - 8);

    // 2. REVERSE (BACK) FACE — Central Bank Engraving & Intaglio Vignette
    ctxB.save();
    // Currency specific backplate colors
    let bgGrad = ctxB.createLinearGradient(0, 0, targetW, targetH);
    if (reg.code === 'USD') {
      bgGrad.addColorStop(0, '#1c3e25');
      bgGrad.addColorStop(0.5, '#285834');
      bgGrad.addColorStop(1, '#15321d');
    } else if (reg.code === 'EUR') {
      bgGrad.addColorStop(0, '#1e293b');
      bgGrad.addColorStop(0.5, '#334155');
      bgGrad.addColorStop(1, '#0f172a');
    } else if (reg.code === 'GBP') {
      bgGrad.addColorStop(0, '#4a1d24');
      bgGrad.addColorStop(0.5, '#6e2b36');
      bgGrad.addColorStop(1, '#2b0d13');
    } else if (reg.code === 'CAD') {
      bgGrad.addColorStop(0, '#312e81');
      bgGrad.addColorStop(0.5, '#4338ca');
      bgGrad.addColorStop(1, '#1e1b4b');
    } else {
      bgGrad.addColorStop(0, '#1f2937');
      bgGrad.addColorStop(0.5, '#374151');
      bgGrad.addColorStop(1, '#111827');
    }

    ctxB.fillStyle = bgGrad;
    ctxB.fillRect(0, 0, targetW, targetH);

    // Intaglio Lathe-Cut Guilloche Oval on Reverse
    ctxB.strokeStyle = 'rgba(255, 255, 255, 0.18)';
    ctxB.lineWidth = 2;
    ctxB.strokeRect(10, 10, targetW - 20, targetH - 20);

    for (let i = 0; i < 6; i++) {
      ctxB.beginPath();
      ctxB.ellipse(targetW / 2, targetH / 2, targetW * 0.35 - i * 8, targetH * 0.35 - i * 5, 0, 0, Math.PI * 2);
      ctxB.strokeStyle = i % 2 === 0 ? 'rgba(255, 255, 255, 0.15)' : 'rgba(217, 119, 6, 0.2)';
      ctxB.lineWidth = 1;
      ctxB.stroke();
    }

    // Central Bank Reverse Vignette Text
    ctxB.fillStyle = '#ffffff';
    ctxB.font = 'bold 36px serif';
    ctxB.textAlign = 'center';
    ctxB.textBaseline = 'middle';
    ctxB.fillText(state.scanner.denomination, targetW / 2, targetH / 2);

    ctxB.font = 'bold 12px sans-serif';
    ctxB.fillStyle = 'rgba(255, 255, 255, 0.85)';
    ctxB.fillText(`${reg.country.toUpperCase()} • CENTRAL BANK REVERSE`, targetW / 2, targetH * 0.25);

    // Microprinted horizontal security thread across reverse
    ctxB.fillStyle = 'rgba(217, 119, 6, 0.3)';
    ctxB.fillRect(0, targetH * 0.72, targetW, 14);
    ctxB.fillStyle = '#fef08a';
    ctxB.font = 'bold 8px monospace';
    ctxB.fillText('★ MONUMENT OF GREED STATUTORY REVERSE • VERIFIED 100% BEARER VALUE ★', targetW / 2, targetH * 0.72 + 10);

    ctxB.restore();
  }

  // =========================================================================
  // 19. FINTECH REVENUE & CONTRAST FRAMING CONTROLLER
  // =========================================================================
  function initFintechSummary() {
    const elRolling = document.getElementById('rolling-salvage-total');
    const btnClaim = document.getElementById('btn-quick-claim-voucher');

    // Smoothly animate rolling number counter on load
    if (elRolling) {
      animateRollingCounter(elRolling, 0, 5062.19, 1400);
    }

    if (btnClaim) {
      btnClaim.addEventListener('click', () => {
        audio.successChord();
        switchTab('tab-dossier');
        showOfficialForm('BEP5283');
      });
    }
  }

  function animateRollingCounter(el, startVal, endVal, duration = 1200) {
    if (!el) return;
    const startTime = performance.now();
    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1.0);
      const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const cur = startVal + (endVal - startVal) * ease;
      el.textContent = cur.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      if (progress < 1.0) {
        requestAnimationFrame(tick);
      }
    }
    requestAnimationFrame(tick);
  }

  // =========================================================================
  // 20. SOFT MAINSTREAM ONBOARDING CONTROLLER
  // =========================================================================
  function initOnboarding() {
    const modal = document.getElementById('modal-onboarding');
    const btnHelp = document.getElementById('btn-help-onboarding');
    const btnClose = document.getElementById('btn-onboarding-close');
    const btnStart = document.getElementById('btn-onboarding-start');
    const btnSample = document.getElementById('btn-onboarding-sample');

    function openOnboarding() {
      if (modal) {
        modal.classList.add('active');
        audio.tap();
      }
    }

    function closeOnboarding() {
      if (modal) {
        modal.classList.remove('active');
        audio.tap();
      }
    }

    if (btnHelp) btnHelp.addEventListener('click', openOnboarding);
    if (btnClose) btnClose.addEventListener('click', closeOnboarding);

    if (btnStart) {
      btnStart.addEventListener('click', () => {
        closeOnboarding();
        switchTab('tab-scanner');
        audio.tap();
      });
    }

    if (btnSample) {
      btnSample.addEventListener('click', () => {
        closeOnboarding();
        switchTab('tab-scanner');
        loadSampleDamagedBill();
        audio.successChord();
      });
    }

    // Auto-display on very first launch
    const shown = localStorage.getItem('mog_onboarding_shown_v2');
    if (!shown) {
      setTimeout(() => {
        openOnboarding();
        localStorage.setItem('mog_onboarding_shown_v2', 'true');
      }, 700);
    }
  }

  // =========================================================================
  // 21. SOUND TOGGLE CONTROLLER
  // =========================================================================
  function initSoundToggle() {
    const btnSound = document.getElementById('btn-sound-toggle');
    if (btnSound) {
      audio.updateToggleButton();
      btnSound.addEventListener('click', () => {
        audio.toggleMute();
      });
    }
  }

})();
