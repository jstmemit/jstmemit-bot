import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const btrBocchiNeutral: Template = {
    name: "btrBocchiNeutral",
    displayName: buildLocales("Bocchi neutral", {
        [Locale.Russian]: "Бокки невозмутима",
        [Locale.Ukrainian]: "Боккі незворушна",
        [Locale.Dutch]: "Bocchi neutraal",
        [Locale.French]: "Bocchi neutre",
        [Locale.German]: "Bocchi neutral",
        [Locale.Polish]: "Bocchi obojętna",
        [Locale.SpanishES]: "Bocchi neutral",
        [Locale.SpanishLATAM]: "Bocchi neutral",
        [Locale.PortugueseBR]: "Bocchi neutra",
        [Locale.Turkish]: "Bocchi ifadesiz",
        [Locale.Italian]: "Bocchi neutrale",
        [Locale.Indonesian]: "Bocchi datar",
        [Locale.Czech]: "Bocchi neutrální",
        [Locale.Japanese]: "無表情のぼっち",
        [Locale.Korean]: "무표정한 봇치",
        [Locale.ChineseCN]: "波奇面无表情",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextTopWithBackground],
    width: 498,
    height: 380,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiNeutral.png"
                width={498}
                height={280}
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
