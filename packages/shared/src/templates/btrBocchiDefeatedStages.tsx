import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const btrBocchiDefeatedStages: Template = {
    name: "btrBocchiDefeatedStages",
    displayName: buildLocales("Bocchi defeated stages", {
        [Locale.Russian]: "Стадии поражения Бокки",
        [Locale.Ukrainian]: "Стадії поразки Боккі",
        [Locale.Dutch]: "Bocchi verslagen fases",
        [Locale.French]: "Étapes de défaite de Bocchi",
        [Locale.German]: "Bocchis Niederlagenphasen",
        [Locale.Polish]: "Etapy porażki Bocchi",
        [Locale.SpanishES]: "Fases de derrota de Bocchi",
        [Locale.SpanishLATAM]: "Etapas de derrota de Bocchi",
        [Locale.PortugueseBR]: "Estágios de derrota da Bocchi",
        [Locale.Turkish]: "Bocchi yenilgi aşamaları",
        [Locale.Italian]: "Fasi di sconfitta di Bocchi",
        [Locale.Indonesian]: "Tahapan kekalahan Bocchi",
        [Locale.Czech]: "Fáze porážky Bocchi",
        [Locale.Japanese]: "ぼっちの敗北段階",
        [Locale.Korean]: "봇치 패배 단계",
        [Locale.ChineseCN]: "波奇战败阶段",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextLeftWithBackground, Type.TwoOption],
    width: 996,
    height: 560,
    texts: [
        { id: 0, description: "first reaction caption", minLength: 1, maxLength: 6 },
        { id: 1, description: "second reaction caption", minLength: 1, maxLength: 6 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiDefeated1.png"
                width={498}
                height={280}
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    objectFit: "cover",
                    borderRight: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiDefeated2.png"
                width={498}
                height={280}
                style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    objectFit: "cover",
                    borderRight: "1px solid #000000",
                    borderTop: "1px solid #000000",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
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
                        lineClamp: 3,
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
                    left: 0,
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
                        lineClamp: 3,
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
