import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const arobmiSistineAndRumiaShocked1: Template = {
    name: "arobmiSistineAndRumiaShocked1",
    displayName: buildLocales("Sistine and Rumia shocked 1", {
        [Locale.Russian]: "Систина и Румия в шоке 1",
        [Locale.Ukrainian]: "Сістіна та Румія в шоці 1",
        [Locale.Dutch]: "Sistine en Rumia geschokt 1",
        [Locale.French]: "Sistine et Rumia choquées 1",
        [Locale.German]: "Sistine und Rumia geschockt 1",
        [Locale.Polish]: "Sistine i Rumia w szoku 1",
        [Locale.SpanishES]: "Sistine y Rumia en shock 1",
        [Locale.SpanishLATAM]: "Sistine y Rumia en shock 1",
        [Locale.PortugueseBR]: "Sistine e Rumia chocadas 1",
        [Locale.Turkish]: "Sistine ve Rumia şokta 1",
        [Locale.Italian]: "Sistine e Rumia scioccate 1",
        [Locale.Indonesian]: "Sistine dan Rumia terkejut 1",
        [Locale.Czech]: "Sistine a Rumia v šoku 1",
        [Locale.Japanese]: "ショックを受けるシスティーナとルミア 1",
        [Locale.Korean]: "시스티나와 루미아 충격 1",
        [Locale.ChineseCN]: "希丝缇娜和露米娅震惊 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AkashicRecords],
    types: [Type.TextTopWithBackground],
    width: 500,
    height: 381,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/arobmiSistineAndRumiaShocked1.png"
                width={500}
                height={281}
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
