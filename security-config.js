// File terpisah untuk konfigurasi keamanan (opsional)
const SECURITY_CONFIG = {
    // Daftar IP yang diizinkan (kosongkan untuk semua IP)
    ALLOWED_IPS: [],
    
    // Daftar User-Agent yang diblokir
    BLOCKED_USER_AGENTS: [
        'curl',
        'wget',
        'python',
        'postman',
        'insomnia'
    ],
    
    // Waktu maksimal untuk menyelesaikan login (detik)
    MAX_LOGIN_TIME: 300,
    
    // Jumlah maksimal request per menit
    RATE_LIMIT_PER_MINUTE: 10,
    
    // Daftar kata kunci yang mencurigakan
    SUSPICIOUS_KEYWORDS: [
        'script',
        'eval',
        'function',
        'console',
        'debug'
    ]
};
