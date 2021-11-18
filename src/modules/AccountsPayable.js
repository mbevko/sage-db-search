//add all modules
//possibly highlite search results (not necessary since others dissapear)
//add to git ignore
//consider adding a checkbox that shows all tables
//consider making objects expandable with more details
//add 'x' to search bar
//create an array for each module
//add a link to each table


const AccountsPayable = [
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
    {
        id: 41,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APPJHO',
        TITLE: 'POSTING JOURNAL ENTRY OPTIONAL FIELDS'
    },
    {
        id: 42,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APPJS',
        TITLE: 'POSTING JOURNALS'
    },
    {
        id: 43,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APPOOP',
        TITLE: 'CREATE OPEN DOCUMENT LIST'
    },
    {
        id: 44,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APPTER',
        TITLE: 'POSTING ERROR MESSAGES'
    },
    {
        id: 45,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APPTP',
        TITLE: 'PAYMENT CODES'
    },
    {
        id: 46,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APPYM',
        TITLE: 'POSTED PAYMENTS'
    },
    {
        id: 47,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APRAS',
        TITLE: 'ACCOUNT SETS'
    },
    {
        id: 48,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APRDC',
        TITLE: 'DISTRIBUTION CODES'
    },
    {
        id: 49,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APRPD',
        TITLE: 'RECURRING PAYABLE DETAILS'
    },
    {
        id: 50,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APRPDO',
        TITLE: 'RECURRING PAYABLE DETAIL FIELDS'
    },
    {
        id: 51,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APRPH',
        TITLE: 'RECURRING PAYABLES'
    },
    {
        id: 52,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APRPHO',
        TITLE: 'RECURRING PAYABLE OPTIONAL FIELDS'
    },
    {
        id: 53,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APRSTRT',
        TITLE: 'RESTART'
    },
    {
        id: 54,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APRTA',
        TITLE: 'TERMS'
    },
    {
        id: 55,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APRTS',
        TITLE: 'TERMS PAYMENT SCHEDULE'
    },
    {
        id: 56,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APRTG',
        TITLE: 'RETAINAGE OPEN DOCUMENTS'
    },
    {
        id: 57,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APRVLLOG',
        TITLE: 'REVALUATION HISTORY'
    },
    {
        id: 58,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APRVLO',
        TITLE: 'REVALUATION OPTIONAL FIELDS'
    },
    {
        id: 59,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APSLD',
        TITLE: 'SELECTION CRITERIA DETAILS'
    },
    {
        id: 60,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APSLH',
        TITLE: 'SELECTION CRITERIA HEADER'
    },
    {
        id: 61,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APSLHO',
        TITLE: 'SELECTION CRITERIA OPT. FIELDS'
    },
    {
        id: 62,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APSLVEN',
        TITLE: 'SELECTED VENDORS'
    },
    {
        id: 63,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APTCC',
        TITLE: 'ADVANCE CREDITS'
    },
    {
        id: 64,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APTCN',
        TITLE: 'MISCELLANEOUS PAYMENTS'
    },
    {
        id: 65,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APTCP',
        TITLE: 'APPLIED PAYMENTS'
    },
    {
        id: 66,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APTCR',
        TITLE: 'PAYMENTS/ADJUTSMENTS'
    },
    {
        id: 67,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APTCRO',
        TITLE: 'PAYMENT/ADJUTSMENT OPTIONAL FIELDS'
    },
    {
        id: 68,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APTCT',
        TITLE: 'PAYMENT TAX WITHHOLDINGS'
    },
    {
        id: 69,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APTCU',
        TITLE: 'ADJUSTMENT G/L DISTRIBUTIONS'
    },
    {
        id: 70,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APTRK',
        TITLE: 'PAYMENT G/L DISTRIBUTIONS'
    },
    {
        id: 71,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APVCM',
        TITLE: 'VENDOR COMMENTS'
    },
    {
        id: 72,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APVCMD',
        TITLE: 'VENDOR COMMENT DETAILS'
    },
    {
        id: 73,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APVEN',
        TITLE: 'VENDORS'
    },
    {
        id: 74,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APVENC',
        TITLE: 'VENDOR CONTACTS'
    },
    {
        id: 75,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APVENCF',
        TITLE: 'VENDOR CONTACT FORMS'
    },
    {
        id: 76,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APVENO',
        TITLE: 'VENDOR OPTIONAL FIELD VALUES'
    },
    {
        id: 77,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APVGR',
        TITLE: 'VENDOR GROUPS'
    },
    {
        id: 78,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APGFRO',
        TITLE: 'VENDOR GROUP OPTIONAL FIELD VALUES'
    },
    {
        id: 79,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APVGS',
        TITLE: 'VENDOR GROUP STATISTICS'
    },
    {
        id: 80,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APVNR',
        TITLE: 'REMIT-TO LOCATIONS'
    },
    {
        id: 81,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APVNRO',
        TITLE: 'REMOT-TO LOCATION OPTIONAL FIELD VALUES'
    },
    {
        id: 82,
        MODULE: 'ACCOUNTS PAYABLE',
        TABLE: 'APVSM',
        TITLE: 'VENDOR STATISTICS'
    }
]

export default AccountsPayable