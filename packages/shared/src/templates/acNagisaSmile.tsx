import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const acNagisaSmile: Template = {
    name: "acNagisaSmile",
    displayName: buildLocales("Nagisa smile", {
        [Locale.Russian]: "Нагиса улыбается",
        [Locale.Ukrainian]: "Нагіса усміхається",
        [Locale.Dutch]: "Nagisa lacht",
        [Locale.French]: "Nagisa sourit",
        [Locale.German]: "Nagisa lächelt",
        [Locale.Polish]: "Nagisa się uśmiecha",
        [Locale.SpanishES]: "Nagisa sonríe",
        [Locale.SpanishLATAM]: "Nagisa sonríe",
        [Locale.PortugueseBR]: "Nagisa sorrindo",
        [Locale.Turkish]: "Nagisa gülümsüyor",
        [Locale.Italian]: "Nagisa sorride",
        [Locale.Indonesian]: "Nagisa tersenyum",
        [Locale.Czech]: "Nagisa se usmívá",
        [Locale.Japanese]: "微笑む渚",
        [Locale.Korean]: "미소 짓는 나기사",
        [Locale.ChineseCN]: "渚微笑",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AssassinationClassroom],
    types: [Type.TextTopWithBackground],
    width: 498,
    height: 398,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [],
    element: ({ texts, font }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: font,
            }}
        >
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/acNagisaSmile.png"
                width={498}
                height={298}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
