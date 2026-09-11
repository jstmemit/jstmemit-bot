import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const btrBocchiIntrovertStages2: Template = {
    name: "btrBocchiIntrovertStages2",
    displayName: buildLocales("Bocchi introvert stages 2", {
        [Locale.Russian]: "Стадии интроверта Бокки 2",
        [Locale.Ukrainian]: "Стадії інтроверта Боккі 2",
        [Locale.Dutch]: "Bocchi introvert fases 2",
        [Locale.French]: "Étapes d'introversion de Bocchi 2",
        [Locale.German]: "Bocchis Introvertierten-Phasen 2",
        [Locale.Polish]: "Etapy introwersji Bocchi 2",
        [Locale.SpanishES]: "Fases de introversión de Bocchi 2",
        [Locale.SpanishLATAM]: "Etapas de introversión de Bocchi 2",
        [Locale.PortugueseBR]: "Estágios de introversão da Bocchi 2",
        [Locale.Turkish]: "Bocchi içedönüklük aşamaları 2",
        [Locale.Italian]: "Fasi di introversione di Bocchi 2",
        [Locale.Indonesian]: "Tahapan introver Bocchi 2",
        [Locale.Czech]: "Fáze introverze Bocchi 2",
        [Locale.Japanese]: "ぼっちの陰キャ段階 2",
        [Locale.Korean]: "봇치 내향성 단계 2",
        [Locale.ChineseCN]: "波奇社恐阶段 2",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextRightWithBackground, Type.TwoOption],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiNeutral.png"
                width={498}
                height={280}
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiDoubtful.png"
                width={498}
                height={280}
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
                    height: 280,
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
                    right: 0,
                    bottom: 0,
                    width: "50%",
                    height: 280,
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
