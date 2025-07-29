import { file, write } from "bun";
import { blacklist } from "./src/blocks";

const json = blacklist.map((e,i)=>({
    id: i+1,
    priority: 1,
    action: { type: "block" },
    condition: {
        regexFilter: e.source,
        resourceTypes: [ "main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "csp_report", "media", "websocket", "webtransport", "webbundle", "other" ]
    }
}))

write("./dist/block.json", JSON.stringify(json));

write("./dist/manifest.json", file("./manifest.json"));
