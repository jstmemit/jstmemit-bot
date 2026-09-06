import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const btrBocchiPanic2: Template = {
    name: "btrBocchiPanic2",
    displayName: buildLocales("Bocchi panic 2", {
        [Locale.Russian]: "Бокки в панике 2",
        [Locale.Ukrainian]: "Боккі в паніці 2",
        [Locale.Dutch]: "Bocchi in paniek 2",
        [Locale.French]: "Bocchi paniquée 2",
        [Locale.German]: "Bocchi in Panik 2",
        [Locale.Polish]: "Bocchi w panice 2",
        [Locale.SpanishES]: "Bocchi en pánico 2",
        [Locale.SpanishLATAM]: "Bocchi en pánico 2",
        [Locale.PortugueseBR]: "Bocchi em pânico 2",
        [Locale.Turkish]: "Bocchi panikte 2",
        [Locale.Italian]: "Bocchi in preda al panico 2",
        [Locale.Indonesian]: "Bocchi panik 2",
        [Locale.Czech]: "Bocchi v panice 2",
        [Locale.Japanese]: "パニックのぼっち 2",
        [Locale.Korean]: "패닉 봇치 2",
        [Locale.ChineseCN]: "波奇恐慌 2",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextLeft],
    width: 540,
    height: 304,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 11 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiPanic2.png"
                width={540}
                height={304}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "40%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
                    backgroundImage: "linear-gradient(to left, transparent, rgba(0, 0, 0, 0.5))",
                }}
            >
                <div
                    style={{
                        lineClamp: 8,
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
