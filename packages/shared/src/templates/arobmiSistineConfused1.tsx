import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const arobmiSistineConfused1: Template = {
    name: "arobmiSistineConfused1",
    displayName: buildLocales("Sistine confused 1", {
        [Locale.Russian]: "Систина в замешательстве 1",
        [Locale.Ukrainian]: "Сістіна збентежена 1",
        [Locale.Dutch]: "Sistine in de war 1",
        [Locale.French]: "Sistine confuse 1",
        [Locale.German]: "Sistine verwirrt 1",
        [Locale.Polish]: "Sistine zdezorientowana 1",
        [Locale.SpanishES]: "Sistine confundida 1",
        [Locale.SpanishLATAM]: "Sistine confundida 1",
        [Locale.PortugueseBR]: "Sistine confusa 1",
        [Locale.Turkish]: "Sistine kafası karışık 1",
        [Locale.Italian]: "Sistine confusa 1",
        [Locale.Indonesian]: "Sistine bingung 1",
        [Locale.Czech]: "Sistine zmatená 1",
        [Locale.Japanese]: "困惑するシスティーナ 1",
        [Locale.Korean]: "시스티나 혼란 1",
        [Locale.ChineseCN]: "希丝缇娜困惑 1",
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/arrobmiSistineConfused.png"
                width={365}
                height={304}
                style={{ position: "absolute", bottom: 0, left: 0 }}
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
