//add all modules
//possibly highlite search results (not necessary since others dissapear)
//add to git ignore
//consider adding a checkbox that shows all tables
//consider making objects expandable with more details


const initialDetails = [
    {
        id: 1,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APADV',
        TITLE: 'PAYMENT ADVICES'
    },
    {
        id: 2,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APAGED',
        TITLE: 'AGED DOCUMENTS'
    },
    {
        id: 3,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APBTA',
        TITLE: 'PAYMENT AND ADJUSTMENT BATCHES'
    },
    {
        id: 4,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APCCS',
        TITLE: '1099 / CPRS AMOUNTS'
    },
    {
        id: 5,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APCLX',
        TITLE: '1099 / CPRS CODES'
    },
    {
        id: 6,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APCMMTP',
        TITLE: 'COMMENT TYPES'
    },
    {
        id: 7,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APDSD',
        TITLE: 'DISTRIBUTION SET DETAILS'
    },
    {
        id: 8,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APDSH',
        TITLE: 'DISTRIBUTION SETS'
    },
    {
        id: 9,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APGLREF',
        TITLE: 'G/L REFERENCE INTEGRATION'
    },
    {
        id: 10,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APIBC',
        TITLE: 'INVOICE BATCHES'
    },
    {
        id: 11,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APIBD',
        TITLE: 'INVOICE DETAILS'
    },
    {
        id: 12,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APIBDA',
        TITLE: 'INVOICE DETAIL SAGE FIXED ASSETS FIELDS'
    },
    {
        id: 13,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APIBDO',
        TITLE: 'INVOICE DETAIL OPTIONAL FIELDS'
    },
    {
        id: 14,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APIBH',
        TITLE: 'INVOICES'
    },
    {
        id: 15,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APIBHO',
        TITLE: 'INVOICE OPTIONAL FIELDS'
    },
    {
        id: 16,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APIBS',
        TITLE: 'INVOICE PAYMENT SCHEDULES'
    },
    {
        id: 17,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APIBT',
        TITLE: 'INVOICE DETAIL COMMENTS'
    },
    {
        id: 18,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APINTCK',
        TITLE: 'INTEGRITY CHECKER'
    },
    {
        id: 19,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APJTR',
        TITLE: 'JOB COSTING TRANSACTIONS'
    },
    {
        id: 20,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APMSG',
        TITLE: 'EMAIL MESSAGES'
    },
    {
        id: 21,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APOBL',
        TITLE: 'DOCUMENTS'
    },
    {
        id: 22,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APOBLJ',
        TITLE: 'OPEN DOCUMENT DETAILS'
    },
    {
        id: 23,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APOBLJO',
        TITLE: 'OPEN DOC. DETAIL OPTIONAL FIELDS'
    },
    {
        id: 24,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APOBLJP',
        TITLE: 'DOCUMENT DETAIL PAYMENTS'
    },
    {
        id: 25,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APOBLO',
        TITLE: 'OPEN DOCUMENT OPTIONAL FIELDS'
    },
    {
        id: 26,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APOBP',
        TITLE: 'DOCUMENT PAYMENTS'
    },
    {
        id: 27,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APOBS',
        TITLE: 'DOCUMENT SCHED. PAYMENTS'
    },
    {
        id: 28,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APOFD',
        TITLE: 'OPTIONAL FIELDS'
    },
    {
        id: 29,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APOFH',
        TITLE: 'OPTIONAL FIELD LOCATIONS'
    },
    {
        id: 30,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APP01',
        TITLE: 'COMPANY OPTIONS'
    },
    {
        id: 31,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APP02',
        TITLE: 'INVOICING OPTIONS'
    },
    {
        id: 32,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APP03',
        TITLE: 'PAYMENT AND AGING OPTIONS'
    },
    {
        id: 33,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APP04',
        TITLE: 'INTEGRATION OPTIONS'
    },
    {
        id: 34,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APP05',
        TITLE: 'VENDOR OPTIONS'
    },
    {
        id: 35,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APPJAID',
        TITLE: 'POSTING JOURNAL GENERATED AP DETAILS'
    },
    {
        id: 36,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APPJAIH',
        TITLE: 'POSTING JOURNAL GENERATED AP ENTRIES'
    },
    {
        id: 37,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APPJD',
        TITLE: 'POSTING JOURNAL DETAILS'
    },
    {
        id: 38,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APPJDO',
        TITLE: 'POSTING JOURNAL DETAIL OPTIONAL FIELDS'
    },
    {
        id: 39,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APPJGID',
        TITLE: 'POSTING JOURNAL GENERATED GL DETAILS'
    },
    {
        id: 40,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APPJH',
        TITLE: 'POSTING JOURNAL ENTRIES'
    },
    
    
    /*
    'APPJHO: POSTING JOURNAL ENTRY OPTIONAL FIELDS',
    'APPJS: POSTING JOURNALS',
    'APPOOP: CREATE OPEN DOCUMENT LIST',
    'APPTER: POSTING ERROR MESSAGES',
    'APPTP: PAYMENT CODES',
    'APPYM: POSTED PAYMENTS',
    'APRAS: ACCOUNT SETS',
    'APRDC: DISTRIBUTION CODES',
    'APRPD: RECURRING PAYABLE DETAILS',
    'APRPDO: RECURRING PAYABLE DETAIL FIELDS',        
    'APRPH: RECURRING PAYABLES',
    'APRPHO: RECURRING PAYABLE OPTIONAL FIELDS',
    'APRSTRT: RESTART',
    'APRTA: TERMS',
    'APRTB: TERMS PAYMENT SCHEDULE',
    'APRTG: RETAINAGE OPEN DOUCMENTS',
    'APRVL: REVALUATION DETAILS',
    'APRVLLOG: REVALUATION HISTORY',
    'APRVLO: REVALUATION OPTIONAL FIELDS',
    'APSLD: SELECTION CRITERIA DETAILS',
    'APSLH: SELECTION CRITERIA HEADER',
    'APSLHO: SELECTION CRITERIA OPT. FIELDS',
    'APSLVEN: SELECTED VENDORS',
    'APTCC: ADVANCE CREDITS',
    'APTCN: MISCELLANEOUS PAYMENTS',
    'APTCP: APPLIED PAYMENTS',
    'APTCR: PAYMENTS/ADJUSTMENTS',
    'APTCRO: PAYMENT/ADJUSTMENT OPTIONAL FIELDS',
    'APTCT: PAYMENT TAX WITHHOLDINGS',
    'APTCU: ADJUSTMENT G/L DISTRIBUTIONS',
    'APTRK: PAYMENT G/L DISTRIBUTIONS',
    'APVCM: VENDOR COMMENTS',
    'APVCMD: VENDOR COMMENT DETAILS',
    'APVEN: VENDORS',
    'APVENC: VENDOR CONTACTS',
    'APVENCF: VENDOR CONTACT FORMS',
    'APVENO: VENDOR OPTOINAL FIELD VALUES',
    'APVGR: VENDOR GROUPS',
    'APGFRO: VENDOR GROUP OPTIONAL FIELD VALUES',
    'APVGS: VENDOR GROUP STATISTICS',
    'APVNR: REMIT-TO LOCATIONS',
    'APVNRO: REMIT-TO LOCATION OPTIONAL FIELD VALUES',
    'APVSM: VENDOR STATISTICS' */
]


export default initialDetails