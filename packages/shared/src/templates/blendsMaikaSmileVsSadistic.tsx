import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const blendsMaikaSmileVsSadistic: Template = {
    name: "blendsMaikaSmileVsSadistic",
    displayName: buildLocales("Smiling vs Sadistic Maika", {
        [Locale.Russian]: "Улыбающаяся vs садистичная Майка",
        [Locale.Ukrainian]: "Усміхнена vs садистична Майка",
        [Locale.Dutch]: "Lachende vs sadistische Maika",
        [Locale.French]: "Maika souriante vs sadique",
        [Locale.German]: "Lächelnde vs sadistische Maika",
        [Locale.Polish]: "Uśmiechnięta vs sadystyczna Maika",
        [Locale.SpanishES]: "Maika sonriente vs sádica",
        [Locale.SpanishLATAM]: "Maika sonriente vs sádica",
        [Locale.PortugueseBR]: "Maika sorridente vs sádica",
        [Locale.Turkish]: "Gülümseyen vs Sadist Maika",
        [Locale.Italian]: "Maika sorridente vs sadica",
        [Locale.Indonesian]: "Maika tersenyum vs sadis",
        [Locale.Czech]: "Usmívající se vs sadistická Maika",
        [Locale.Japanese]: "笑顔 vs ドSな苺香",
        [Locale.Korean]: "미소 짓는 vs 사디스틱한 마이카",
        [Locale.ChineseCN]: "微笑 vs 抖S的莓香",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BlendS],
    types: [Type.TextLeftWithBackground, Type.TwoOption],
    width: 1380,
    height: 1438,
    texts: [
        { id: 0, description: "first reaction caption", minLength: 1, maxLength: 12 },
        { id: 1, description: "second reaction caption", minLength: 1, maxLength: 12 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/blendsMaikaSmile.png"
                width={690}
                height={719}
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/blendsMaikaSadisticSmile1.png"
                width={690}
                height={719}
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
                    padding: "25px",
                    backgroundColor: "white",
                    borderLeft: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
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
                    padding: "25px",
                    backgroundColor: "white",
                    borderLeft: "1px solid #000000",
                    borderTop: "1px solid #000000",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
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
