import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const arobmiSistineConfusionStages1: Template = {
    name: "arobmiSistineConfusionStages1",
    displayName: buildLocales("Sistine confusion stages 1", {
        [Locale.Russian]: "Стадии замешательства Систины 1",
        [Locale.Ukrainian]: "Стадії збентеження Сістіни 1",
        [Locale.Dutch]: "Sistine verwarringsfases 1",
        [Locale.French]: "Étapes de confusion de Sistine 1",
        [Locale.German]: "Sistines Verwirrungsphasen 1",
        [Locale.Polish]: "Etapy dezorientacji Sistine 1",
        [Locale.SpanishES]: "Fases de confusión de Sistine 1",
        [Locale.SpanishLATAM]: "Etapas de confusión de Sistine 1",
        [Locale.PortugueseBR]: "Estágios de confusão da Sistine 1",
        [Locale.Turkish]: "Sistine kafa karışıklığı aşamaları 1",
        [Locale.Italian]: "Fasi di confusione di Sistine 1",
        [Locale.Indonesian]: "Tahapan kebingungan Sistine 1",
        [Locale.Czech]: "Fáze zmatení Sistine 1",
        [Locale.Japanese]: "システィーナの困惑段階 1",
        [Locale.Korean]: "시스티나 혼란 단계 1",
        [Locale.ChineseCN]: "希丝缇娜困惑阶段 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AkashicRecords],
    types: [Type.TextRightWithBackground, Type.TwoOption],
    width: 730,
    height: 608,
    texts: [
        { id: 0, description: "first reaction caption", minLength: 1, maxLength: 9 },
        { id: 1, description: "second reaction caption", minLength: 1, maxLength: 9 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/arobmiSistineNeutral.png"
                width={365}
                height={304}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    objectFit: "cover",
                    borderRight: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/arobmiSistineUtterlyConfused.png"
                width={365}
                height={304}
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    objectFit: "cover",
                    borderRight: "1px solid #000000",
                    borderTop: "1px solid #000000",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                    borderLeft: "1px solid #000000",
                    borderBottom: "1px solid #000000",
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
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                    borderLeft: "1px solid #000000",
                    borderTop: "1px solid #000000",
                }}
            >
                <div
                    style={{
                        lineClamp: 5,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[1]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
