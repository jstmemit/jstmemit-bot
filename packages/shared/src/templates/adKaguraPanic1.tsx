import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const adKaguraPanic1: Template = {
    name: "adKaguraPanic1",
    displayName: buildLocales("Kagura panic 1", {
        [Locale.Russian]: "Кагура в панике 1",
        [Locale.Ukrainian]: "Кагура в паніці 1",
        [Locale.Dutch]: "Kagura in paniek 1",
        [Locale.French]: "Kagura en panique 1",
        [Locale.German]: "Kagura in Panik 1",
        [Locale.Polish]: "Kagura w panice 1",
        [Locale.SpanishES]: "Kagura en pánico 1",
        [Locale.SpanishLATAM]: "Kagura en pánico 1",
        [Locale.PortugueseBR]: "Kagura em pânico 1",
        [Locale.Turkish]: "Kagura panikte 1",
        [Locale.Italian]: "Kagura nel panico 1",
        [Locale.Indonesian]: "Kagura panik 1",
        [Locale.Czech]: "Kagura v panice 1",
        [Locale.Japanese]: "神楽 パニック 1",
        [Locale.Korean]: "카구라 패닉 1",
        [Locale.ChineseCN]: "神乐慌乱 1",
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/adKaguraPanic1.png"
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
