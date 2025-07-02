import { file, write } from "bun";
import"./src/blocks";

write("./dist/manifest.json", file("./manifest.json"));
