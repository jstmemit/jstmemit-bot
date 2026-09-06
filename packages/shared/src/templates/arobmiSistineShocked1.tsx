import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const arobmiSistineShocked1: Template = {
    name: "arobmiSistineShocked1",
    displayName: buildLocales("Sistine shocked 1", {
        [Locale.Russian]: "Систина в шоке 1",
        [Locale.Ukrainian]: "Сістіна в шоці 1",
        [Locale.Dutch]: "Sistine geschokt 1",
        [Locale.French]: "Sistine choquée 1",
        [Locale.German]: "Sistine geschockt 1",
        [Locale.Polish]: "Sistine w szoku 1",
        [Locale.SpanishES]: "Sistine en shock 1",
        [Locale.SpanishLATAM]: "Sistine en shock 1",
        [Locale.PortugueseBR]: "Sistine chocada 1",
        [Locale.Turkish]: "Sistine şokta 1",
        [Locale.Italian]: "Sistine scioccata 1",
        [Locale.Indonesian]: "Sistine terkejut 1",
        [Locale.Czech]: "Sistine v šoku 1",
        [Locale.Japanese]: "ショックを受けるシスティーナ 1",
        [Locale.Korean]: "시스티나 충격 1",
        [Locale.ChineseCN]: "希丝缇娜震惊 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AkashicRecords],
    types: [Type.TextBottomWithBackground],
    width: 432,
    height: 371,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/arobmiSistineShocked1.png"
                width={432}
                height={281}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
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
