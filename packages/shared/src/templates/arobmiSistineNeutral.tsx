import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const arobmiSistineNeutral: Template = {
    name: "arobmiSistineNeutral",
    displayName: buildLocales("Sistine neutral", {
        [Locale.Russian]: "Систина невозмутима",
        [Locale.Ukrainian]: "Сістіна незворушна",
        [Locale.Dutch]: "Sistine neutraal",
        [Locale.French]: "Sistine neutre",
        [Locale.German]: "Sistine neutral",
        [Locale.Polish]: "Sistine obojętna",
        [Locale.SpanishES]: "Sistine neutral",
        [Locale.SpanishLATAM]: "Sistine neutral",
        [Locale.PortugueseBR]: "Sistine neutra",
        [Locale.Turkish]: "Sistine ifadesiz",
        [Locale.Italian]: "Sistine neutrale",
        [Locale.Indonesian]: "Sistine datar",
        [Locale.Czech]: "Sistine neutrální",
        [Locale.Japanese]: "無表情のシスティーナ",
        [Locale.Korean]: "무표정한 시스티나",
        [Locale.ChineseCN]: "希丝蒂娜面无表情",
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/arrobmiSistineNeutral.png"
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
