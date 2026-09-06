import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const arobmiSistineUtterlyConfused: Template = {
    name: "arobmiSistineUtterlyConfused",
    displayName: buildLocales("Sistine utterly confused", {
        [Locale.Russian]: "Систина совсем запуталась",
        [Locale.Ukrainian]: "Сістіна геть заплуталася",
        [Locale.Dutch]: "Sistine compleet in de war",
        [Locale.French]: "Sistine complètement perdue",
        [Locale.German]: "Sistine völlig verwirrt",
        [Locale.Polish]: "Sistine kompletnie zdezorientowana",
        [Locale.SpanishES]: "Sistine totalmente confundida",
        [Locale.SpanishLATAM]: "Sistine totalmente confundida",
        [Locale.PortugueseBR]: "Sistine totalmente confusa",
        [Locale.Turkish]: "Sistine tamamen şaşkın",
        [Locale.Italian]: "Sistine totalmente confusa",
        [Locale.Indonesian]: "Sistine benar-benar bingung",
        [Locale.Czech]: "Sistine úplně zmatená",
        [Locale.Japanese]: "完全に混乱したシスティーナ",
        [Locale.Korean]: "완전히 혼란한 시스티나",
        [Locale.ChineseCN]: "希丝蒂娜彻底懵了",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AkashicRecords],
    types: [Type.TextRightWithBackground],
    width: 730,
    height: 304,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 9 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/arrobmiSistineUtterlyConfused.png"
                width={365}
                height={304}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 5,
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
