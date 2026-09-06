import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const adKaguraPanic2: Template = {
    name: "adKaguraPanic2",
    displayName: buildLocales("Kagura panic 2", {
        [Locale.Russian]: "Кагура в панике 2",
        [Locale.Ukrainian]: "Кагура в паніці 2",
        [Locale.Dutch]: "Kagura in paniek 2",
        [Locale.French]: "Kagura en panique 2",
        [Locale.German]: "Kagura in Panik 2",
        [Locale.Polish]: "Kagura w panice 2",
        [Locale.SpanishES]: "Kagura en pánico 2",
        [Locale.SpanishLATAM]: "Kagura en pánico 2",
        [Locale.PortugueseBR]: "Kagura em pânico 2",
        [Locale.Turkish]: "Kagura panikte 2",
        [Locale.Italian]: "Kagura nel panico 2",
        [Locale.Indonesian]: "Kagura panik 2",
        [Locale.Czech]: "Kagura v panice 2",
        [Locale.Japanese]: "神楽 パニック 2",
        [Locale.Korean]: "카구라 패닉 2",
        [Locale.ChineseCN]: "神乐慌乱 2",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextTopWithBackground],
    width: 540,
    height: 504,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/adKaguraPanic2.png"
                width={540}
                height={404}
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
