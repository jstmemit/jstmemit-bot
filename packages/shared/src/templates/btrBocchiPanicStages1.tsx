import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const btrBocchiPanicStages1: Template = {
    name: "btrBocchiPanicStages1",
    displayName: buildLocales("Bocchi panic stages 1", {
        [Locale.Russian]: "Стадии паники Бокки 1",
        [Locale.Ukrainian]: "Стадії паніки Боккі 1",
        [Locale.Dutch]: "Bocchi paniekfases 1",
        [Locale.French]: "Étapes de panique de Bocchi 1",
        [Locale.German]: "Bocchis Panikphasen 1",
        [Locale.Polish]: "Etapy paniki Bocchi 1",
        [Locale.SpanishES]: "Fases de pánico de Bocchi 1",
        [Locale.SpanishLATAM]: "Etapas de pánico de Bocchi 1",
        [Locale.PortugueseBR]: "Estágios de pânico da Bocchi 1",
        [Locale.Turkish]: "Bocchi panik aşamaları 1",
        [Locale.Italian]: "Fasi di panico di Bocchi 1",
        [Locale.Indonesian]: "Tahapan panik Bocchi 1",
        [Locale.Czech]: "Fáze paniky Bocchi 1",
        [Locale.Japanese]: "ぼっちのパニック段階 1",
        [Locale.Korean]: "봇치 패닉 단계 1",
        [Locale.ChineseCN]: "波奇恐慌阶段 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextRight, Type.TextLeft, Type.TwoOption, Type.FaceImage],
    width: 540,
    height: 608,
    texts: [
        { id: 0, description: "first caption", minLength: 1, maxLength: 11 },
        { id: 1, description: "second caption", minLength: 1, maxLength: 11 },
    ],
    images: [{ id: 0, description: "Bocchi`s face" }],
    element: ({ texts, images, font }: TemplateProps) => (
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
            <img
                src={images[0]}
                width={130}
                height={130}
                style={{
                    position: "absolute",
                    top: 40,
                    left: 90,
                    objectFit: "cover",
                    borderRadius: "100%",
                    transform: "rotate(-10deg)",
                }}
            />
            <img
                src={images[0]}
                width={120}
                height={120}
                style={{
                    position: "absolute",
                    top: 369,
                    right: 70,
                    objectFit: "cover",
                    borderRadius: "100%",
                    transform: "rotate(10deg)",
                }}
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
