import { blacklist } from "../src/blocks";

export const isBlocked = (url: string) =>
    blacklist.some(reg => reg.test(url));
