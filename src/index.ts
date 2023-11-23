import fs from "fs/promises";
const contents = (await fs.readFile("hello.txt")).toString();
console.log(contents);
