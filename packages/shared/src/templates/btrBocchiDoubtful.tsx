import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const btrBocchiDoubtful: Template = {
    name: "btrBocchiDoubtful",
    displayName: buildLocales("Bocchi doubtful", {
        [Locale.Russian]: "Бокки сомневается",
        [Locale.Ukrainian]: "Боккі сумнівається",
        [Locale.Dutch]: "Bocchi twijfelt",
        [Locale.French]: "Bocchi sceptique",
        [Locale.German]: "Bocchi skeptisch",
        [Locale.Polish]: "Bocchi zwątpiła",
        [Locale.SpanishES]: "Bocchi dudando",
        [Locale.SpanishLATAM]: "Bocchi dudando",
        [Locale.PortugueseBR]: "Bocchi em dúvida",
        [Locale.Turkish]: "Bocchi şüpheli",
        [Locale.Italian]: "Bocchi dubbiosa",
        [Locale.Indonesian]: "Bocchi ragu",
        [Locale.Czech]: "Bocchi pochybuje",
        [Locale.Japanese]: "疑うぼっち",
        [Locale.Korean]: "의심하는 봇치",
        [Locale.ChineseCN]: "波奇怀疑",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextBottomWithBackground],
    width: 498,
    height: 380,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiDoubtful.png"
                width={498}
                height={280}
                style={{ position: "absolute", top: 0, left: 0 }}
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
