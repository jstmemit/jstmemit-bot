import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const adChiyoCrying: Template = {
    name: "adChiyoCrying",
    displayName: buildLocales("Chiyo crying", {
        [Locale.Russian]: "Чиё плачет",
        [Locale.Ukrainian]: "Чійо плаче",
        [Locale.Dutch]: "Chiyo huilt",
        [Locale.French]: "Chiyo pleure",
        [Locale.German]: "Chiyo weint",
        [Locale.Polish]: "Chiyo płacze",
        [Locale.SpanishES]: "Chiyo llorando",
        [Locale.SpanishLATAM]: "Chiyo llorando",
        [Locale.PortugueseBR]: "Chiyo chorando",
        [Locale.Turkish]: "Chiyo ağlıyor",
        [Locale.Italian]: "Chiyo piange",
        [Locale.Indonesian]: "Chiyo menangis",
        [Locale.Czech]: "Chiyo pláče",
        [Locale.Japanese]: "泣くちよ",
        [Locale.Korean]: "우는 치요",
        [Locale.ChineseCN]: "千代哭泣",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextTopWithBackground],
    width: 498,
    height: 463,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/adChiyoCrying.png"
                width={498}
                height={373}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "90px",
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
