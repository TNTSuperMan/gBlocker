const gen_reg = (name: string) =>
    new RegExp(`^https?://(\\w*\\.)*${name}(\\.\\w{1,5}){1,5}/?`)

export const blacklist = [
    ...[
        "google",
        "google-analytics",
        "googletagmanager",
        "youtube",
        "googlesyndication",
        "doubleclick",
        "gstatic",
        "googleapis",
        "googleusercontent",
        "googleemail",
        "googlecode",
        "googlehosted",
        "googledrive",
        "googleearth",
        "googlefonts",
    ].map(gen_reg)
] as RegExp[];
