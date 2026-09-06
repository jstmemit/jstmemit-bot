import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const arobmiSistineBlush2: Template = {
    name: "arobmiSistineBlush2",
    displayName: buildLocales("Sistine blush 2", {
        [Locale.Russian]: "Систина краснеет 2",
        [Locale.Ukrainian]: "Сістіна червоніє 2",
        [Locale.Dutch]: "Sistine bloost 2",
        [Locale.French]: "Sistine rougit 2",
        [Locale.German]: "Sistine errötet 2",
        [Locale.Polish]: "Sistine się rumieni 2",
        [Locale.SpanishES]: "Sistine sonrojada 2",
        [Locale.SpanishLATAM]: "Sistine sonrojada 2",
        [Locale.PortugueseBR]: "Sistine corada 2",
        [Locale.Turkish]: "Sistine kızarıyor 2",
        [Locale.Italian]: "Sistine arrossisce 2",
        [Locale.Indonesian]: "Sistine tersipu 2",
        [Locale.Czech]: "Sistine se červená 2",
        [Locale.Japanese]: "システィーナ 照れ 2",
        [Locale.Korean]: "시스티나 얼굴 붉힘 2",
        [Locale.ChineseCN]: "希丝缇娜脸红 2",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AkashicRecords],
    types: [Type.TextBottomWithBackground],
    width: 540,
    height: 583,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/arobmiSistineBlush2.png"
                width={540}
                height={483}
                style={{ position: "absolute", top: 0, right: 0 }}
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
