import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const btrBocchiNo1: Template = {
    name: "btrBocchiNo1",
    displayName: buildLocales("Bocchi no 1", {
        [Locale.Russian]: "Бокки говорит нет 1",
        [Locale.Ukrainian]: "Боккі каже ні 1",
        [Locale.Dutch]: "Bocchi zegt nee 1",
        [Locale.French]: "Bocchi dit non 1",
        [Locale.German]: "Bocchi sagt nein 1",
        [Locale.Polish]: "Bocchi mówi nie 1",
        [Locale.SpanishES]: "Bocchi dice que no 1",
        [Locale.SpanishLATAM]: "Bocchi dice que no 1",
        [Locale.PortugueseBR]: "Bocchi diz não 1",
        [Locale.Turkish]: "Bocchi hayır diyor 1",
        [Locale.Italian]: "Bocchi dice no 1",
        [Locale.Indonesian]: "Bocchi bilang tidak 1",
        [Locale.Czech]: "Bocchi říká ne 1",
        [Locale.Japanese]: "「イヤ」のぼっち 1",
        [Locale.Korean]: "봇치 노 1",
        [Locale.ChineseCN]: "波奇说不 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextTopWithBackground],
    width: 498,
    height: 454,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiNo1.png"
                width={498}
                height={354}
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
