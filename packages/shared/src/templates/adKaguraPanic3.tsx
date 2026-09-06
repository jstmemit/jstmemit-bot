import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const adKaguraPanic3: Template = {
    name: "adKaguraPanic3",
    displayName: buildLocales("Kagura panic 3", {
        [Locale.Russian]: "Кагура в панике 3",
        [Locale.Ukrainian]: "Кагура в паніці 3",
        [Locale.Dutch]: "Kagura in paniek 3",
        [Locale.French]: "Kagura en panique 3",
        [Locale.German]: "Kagura in Panik 3",
        [Locale.Polish]: "Kagura w panice 3",
        [Locale.SpanishES]: "Kagura en pánico 3",
        [Locale.SpanishLATAM]: "Kagura en pánico 3",
        [Locale.PortugueseBR]: "Kagura em pânico 3",
        [Locale.Turkish]: "Kagura panikte 3",
        [Locale.Italian]: "Kagura nel panico 3",
        [Locale.Indonesian]: "Kagura panik 3",
        [Locale.Czech]: "Kagura v panice 3",
        [Locale.Japanese]: "神楽 パニック 3",
        [Locale.Korean]: "카구라 패닉 3",
        [Locale.ChineseCN]: "神乐慌乱 3",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextBottomWithBackground],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/adKaguraPanic3.png"
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
