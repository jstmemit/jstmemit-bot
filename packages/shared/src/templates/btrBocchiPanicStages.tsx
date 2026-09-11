import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const btrBocchiPanicStages: Template = {
    name: "btrBocchiPanicStages",
    displayName: buildLocales("Bocchi panic stages", {
        [Locale.Russian]: "Стадии паники Бокки",
        [Locale.Ukrainian]: "Стадії паніки Боккі",
        [Locale.Dutch]: "Bocchi paniekfases",
        [Locale.French]: "Étapes de panique de Bocchi",
        [Locale.German]: "Bocchis Panikphasen",
        [Locale.Polish]: "Etapy paniki Bocchi",
        [Locale.SpanishES]: "Fases de pánico de Bocchi",
        [Locale.SpanishLATAM]: "Etapas de pánico de Bocchi",
        [Locale.PortugueseBR]: "Estágios de pânico da Bocchi",
        [Locale.Turkish]: "Bocchi panik aşamaları",
        [Locale.Italian]: "Fasi di panico di Bocchi",
        [Locale.Indonesian]: "Tahapan panik Bocchi",
        [Locale.Czech]: "Fáze paniky Bocchi",
        [Locale.Japanese]: "ぼっちのパニック段階",
        [Locale.Korean]: "봇치 패닉 단계",
        [Locale.ChineseCN]: "波奇恐慌阶段",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextRight, Type.TextLeft, Type.TwoOption],
    width: 540,
    height: 608,
    texts: [
        { id: 0, description: "first caption", minLength: 1, maxLength: 11 },
        { id: 1, description: "second caption", minLength: 1, maxLength: 11 },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiPanic1.png"
                width={540}
                height={304}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiPanic2.png"
                width={540}
                height={304}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "40%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
                    backgroundImage: "linear-gradient(to right, transparent, rgba(0, 0, 0, 0.5))",
                }}
            >
                <div
                    style={{
                        lineClamp: 8,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "40%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
                    backgroundImage: "linear-gradient(to left, transparent, rgba(0, 0, 0, 0.5))",
                }}
            >
                <div
                    style={{
                        lineClamp: 8,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[1]),
                        lineHeight: 1.05,
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
