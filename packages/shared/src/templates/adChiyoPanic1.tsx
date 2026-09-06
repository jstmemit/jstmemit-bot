import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const adChiyoPanic1: Template = {
    name: "adChiyoPanic1",
    displayName: buildLocales("Chiyo panic 1", {
        [Locale.Russian]: "Чиё в панике 1",
        [Locale.Ukrainian]: "Чійо в паніці 1",
        [Locale.Dutch]: "Chiyo in paniek 1",
        [Locale.French]: "Chiyo en panique 1",
        [Locale.German]: "Chiyo in Panik 1",
        [Locale.Polish]: "Chiyo w panice 1",
        [Locale.SpanishES]: "Chiyo en pánico 1",
        [Locale.SpanishLATAM]: "Chiyo en pánico 1",
        [Locale.PortugueseBR]: "Chiyo em pânico 1",
        [Locale.Turkish]: "Chiyo panikte 1",
        [Locale.Italian]: "Chiyo nel panico 1",
        [Locale.Indonesian]: "Chiyo panik 1",
        [Locale.Czech]: "Chiyo panikaří 1",
        [Locale.Japanese]: "ちよ パニック 1",
        [Locale.Korean]: "치요 패닉 1",
        [Locale.ChineseCN]: "千代慌乱 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextTopWithBackground],
    width: 540,
    height: 449,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/adChiyoPanic1.png"
                width={540}
                height={349}
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
