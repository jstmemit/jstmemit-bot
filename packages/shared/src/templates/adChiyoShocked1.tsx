import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const adChiyoShocked1: Template = {
    name: "adChiyoShocked1",
    displayName: buildLocales("Chiyo shocked 1", {
        [Locale.Russian]: "Чиё в шоке 1",
        [Locale.Ukrainian]: "Чійо в шоці 1",
        [Locale.Dutch]: "Chiyo geschokt 1",
        [Locale.French]: "Chiyo choquée 1",
        [Locale.German]: "Chiyo geschockt 1",
        [Locale.Polish]: "Chiyo w szoku 1",
        [Locale.SpanishES]: "Chiyo en shock 1",
        [Locale.SpanishLATAM]: "Chiyo en shock 1",
        [Locale.PortugueseBR]: "Chiyo chocada 1",
        [Locale.Turkish]: "Chiyo şokta 1",
        [Locale.Italian]: "Chiyo scioccata 1",
        [Locale.Indonesian]: "Chiyo terkejut 1",
        [Locale.Czech]: "Chiyo v šoku 1",
        [Locale.Japanese]: "ちよ ショック 1",
        [Locale.Korean]: "치요 충격 1",
        [Locale.ChineseCN]: "千代震惊 1",
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/adChiyoShocked1.png"
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
