import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const adKaguraLaughing1: Template = {
    name: "adKaguraLaughing1",
    displayName: buildLocales("Kagura laughing 1", {
        [Locale.Russian]: "Кагура смеется 1",
        [Locale.Ukrainian]: "Кагура сміється 1",
        [Locale.Dutch]: "Kagura lacht 1",
        [Locale.French]: "Kagura rit 1",
        [Locale.German]: "Kagura lacht 1",
        [Locale.Polish]: "Kagura się śmieje 1",
        [Locale.SpanishES]: "Kagura riendo 1",
        [Locale.SpanishLATAM]: "Kagura riendo 1",
        [Locale.PortugueseBR]: "Kagura rindo 1",
        [Locale.Turkish]: "Kagura gülüyor 1",
        [Locale.Italian]: "Kagura ride 1",
        [Locale.Indonesian]: "Kagura tertawa 1",
        [Locale.Czech]: "Kagura se směje 1",
        [Locale.Japanese]: "神楽 笑う 1",
        [Locale.Korean]: "카구라 웃음 1",
        [Locale.ChineseCN]: "神乐大笑 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextBottom],
    width: 640,
    height: 480,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/adKaguraLaughing1.png"
                width={640}
                height={480}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "115px",
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
