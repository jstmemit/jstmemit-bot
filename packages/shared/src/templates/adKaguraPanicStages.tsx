import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const adKaguraPanicStages: Template = {
    name: "adKaguraPanicStages",
    displayName: buildLocales("Kagura panic stages", {
        [Locale.Russian]: "Стадии паники Кагуры",
        [Locale.Ukrainian]: "Стадії паніки Кагури",
        [Locale.Dutch]: "Kagura paniekfases",
        [Locale.French]: "Étapes de panique de Kagura",
        [Locale.German]: "Kaguras Panikphasen",
        [Locale.Polish]: "Etapy paniki Kagury",
        [Locale.SpanishES]: "Fases de pánico de Kagura",
        [Locale.SpanishLATAM]: "Etapas de pánico de Kagura",
        [Locale.PortugueseBR]: "Estágios de pânico da Kagura",
        [Locale.Turkish]: "Kagura panik aşamaları",
        [Locale.Italian]: "Fasi di panico di Kagura",
        [Locale.Indonesian]: "Tahapan panik Kagura",
        [Locale.Czech]: "Fáze paniky Kagury",
        [Locale.Japanese]: "神楽のパニック段階",
        [Locale.Korean]: "카구라 패닉 단계",
        [Locale.ChineseCN]: "神乐恐慌阶段",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextRightWithBackground, Type.TwoOption],
    width: 1080,
    height: 808,
    texts: [
        { id: 0, description: "first panic reaction", minLength: 1, maxLength: 9 },
        { id: 1, description: "second panic reaction", minLength: 1, maxLength: 9 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/adKaguraPanic1.png"
                width={540}
                height={404}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    borderRight: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/adKaguraPanic4.png"
                width={540}
                height={404}
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
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
