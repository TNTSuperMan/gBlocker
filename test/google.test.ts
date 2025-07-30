import { describe, test, expect } from "bun:test";
import { isBlocked } from "./util";

describe("google", () => {
    const shouldMatch = [
        "https://google.com",
        "http://www.google.com/",
        "http://google.com",
        "https://map.google.com",
    ];
    const shouldNotMatch = [
        "https://google.com.example.com",
        "https://www.google.com.virus.com",
        "http://evil-google.com",
        "https://notgoogle.com/google",
    ];
    for(const url of shouldMatch) {
        test(`should match: ${url}`, () => {
            expect(isBlocked(url)).toBeTrue();
        });
    }
    for(const url of shouldNotMatch) {
        test(`should NOT match: ${url}`, () => {
            expect(isBlocked(url)).toBeFalse();
        });
    }
})
