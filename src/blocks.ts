import { write } from "bun";

const blacklist = [
    /^https?:\/\/(\w*\.)*(google|google-analytics|googletagmanager|youtube|googlesyndication|doubleclick|gstatic|googleapis|googleusercontent|googleemail|googlecode|googlehosted|googledrive|googleearth|googlefonts)(\.\w{1,3}){1,2}\//,
] as RegExp[];

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
