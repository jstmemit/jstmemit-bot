import { readFile, writeFile } from "node:fs/promises";
import type { HTMLElement } from "node-html-parser";
import { parse } from "node-html-parser";
import type { AtRule, Declaration } from "postcss";
import postcss from "postcss";

const dom: HTMLElement = parse(await readFile("dist/index.html", "utf8"));
const css: string = dom
    .querySelectorAll("style")
    .map((s: HTMLElement): string => s.text)
    .join("\n");

const importantCss: string = (
    await postcss([
        {
            postcssPlugin: "force-important",
            Declaration(declaration: Declaration): void {
                const atRule: AtRule | undefined =
                    declaration.parent?.parent?.type === "atrule" ? declaration.parent.parent : undefined;
                if (atRule && /keyframes$/.test(atRule.name)) return;
                declaration.important = true;
            },
        },
    ]).process(css, { from: undefined })
).css;

const body: string = dom.querySelector("body")?.innerHTML ?? "";
await writeFile("dist/description.html", `<style>${importantCss}</style>${body}`);
