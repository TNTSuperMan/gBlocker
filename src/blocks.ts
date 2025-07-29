import { write } from "bun";

const blacklist = [
    /^https?:\/\/(\w*\.)*(google)(\.\w{1,3}){1,2}\//,
    "||google-analytics.com",
    "||googletagmanager.com",
    "||youtube.com",
    "||googlesyndication.com",
    "||doubleclick.net",
    "||gstatic.com",
    "||googleapis.com",
    "||googleusercontent.com",
    "||googleemail.com",
    "||googlecode.com",
    "||googlehosted.com",
    "||googledrive.com",
    "||googleearth.com",
    "||googlefonts.com",
] as (RegExp | string)[];

const json = blacklist.map((e,i)=>({
    id: i+1,
    priority: 1,
    action: { type: "block" },
    condition: {
        regexFilter: e instanceof RegExp ? e.source : undefined,
        urlFilter: typeof e === "string" ? e : undefined,
        resourceTypes: [ "main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "csp_report", "media", "websocket", "webtransport", "webbundle", "other" ]
    }
}))

write("./dist/block.json", JSON.stringify(json));
