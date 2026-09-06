import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const adOsakaPool1: Template = {
    name: "adOsakaPool1",
    displayName: buildLocales("Osaka pool 1", {
        [Locale.Russian]: "Осака в бассейне 1",
        [Locale.Ukrainian]: "Осака в басейні 1",
        [Locale.Dutch]: "Osaka in het zwembad 1",
        [Locale.French]: "Osaka à la piscine 1",
        [Locale.German]: "Osaka im Pool 1",
        [Locale.Polish]: "Osaka na basenie 1",
        [Locale.SpanishES]: "Osaka en la piscina 1",
        [Locale.SpanishLATAM]: "Osaka en la piscina 1",
        [Locale.PortugueseBR]: "Osaka na piscina 1",
        [Locale.Turkish]: "Osaka havuzda 1",
        [Locale.Italian]: "Osaka in piscina 1",
        [Locale.Indonesian]: "Osaka di kolam renang 1",
        [Locale.Czech]: "Osaka v bazénu 1",
        [Locale.Japanese]: "大阪 プール 1",
        [Locale.Korean]: "오사카 수영장 1",
        [Locale.ChineseCN]: "大阪游泳池 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextBottom],
    width: 540,
    height: 404,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/adOsakaPool1.png"
                width={540}
                height={404}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
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
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
