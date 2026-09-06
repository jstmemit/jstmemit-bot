import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const blendsMaikaSadisticSmile1: Template = {
    name: "blendsMaikaSadisticSmile1",
    displayName: buildLocales("Maika sadistic smile 1", {
        [Locale.Russian]: "Майка с садистской улыбкой 1",
        [Locale.Ukrainian]: "Майка із садистською посмішкою 1",
        [Locale.Dutch]: "Maika met sadistische glimlach 1",
        [Locale.French]: "Maika avec un sourire sadique 1",
        [Locale.German]: "Maika mit sadistischem Lächeln 1",
        [Locale.Polish]: "Maika z sadystycznym uśmiechem 1",
        [Locale.SpanishES]: "Maika con sonrisa sádica 1",
        [Locale.SpanishLATAM]: "Maika con sonrisa sádica 1",
        [Locale.PortugueseBR]: "Maika com sorriso sádico 1",
        [Locale.Turkish]: "Maika sadist gülümsemesiyle 1",
        [Locale.Italian]: "Maika con sorriso sadico 1",
        [Locale.Indonesian]: "Maika dengan senyum sadis 1",
        [Locale.Czech]: "Maika se sadistickým úsměvem 1",
        [Locale.Japanese]: "マイカのサディスティックな笑み 1",
        [Locale.Korean]: "마이카 사디스틱한 미소 1",
        [Locale.ChineseCN]: "麻衣花施虐的微笑 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BlendS],
    types: [Type.TextTopWithBackground],
    width: 690,
    height: 849,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/blendsMaikaSadisticSmile1.png"
                width={690}
                height={719}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "130px",
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
