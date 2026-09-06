import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const btrBocchiPanic4: Template = {
    name: "btrBocchiPanic4",
    displayName: buildLocales("Bocchi panic 4", {
        [Locale.Russian]: "Бокки в панике 4",
        [Locale.Ukrainian]: "Боккі в паніці 4",
        [Locale.Dutch]: "Bocchi in paniek 4",
        [Locale.French]: "Bocchi paniquée 4",
        [Locale.German]: "Bocchi in Panik 4",
        [Locale.Polish]: "Bocchi w panice 4",
        [Locale.SpanishES]: "Bocchi en pánico 4",
        [Locale.SpanishLATAM]: "Bocchi en pánico 4",
        [Locale.PortugueseBR]: "Bocchi em pânico 4",
        [Locale.Turkish]: "Bocchi panikte 4",
        [Locale.Italian]: "Bocchi in preda al panico 4",
        [Locale.Indonesian]: "Bocchi panik 4",
        [Locale.Czech]: "Bocchi v panice 4",
        [Locale.Japanese]: "パニックのぼっち 4",
        [Locale.Korean]: "패닉 봇치 4",
        [Locale.ChineseCN]: "波奇恐慌 4",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextLeft, Type.FaceImage],
    width: 540,
    height: 304,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 11 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiPanic2.png"
                width={540}
                height={304}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={120}
                height={120}
                style={{
                    position: "absolute",
                    top: 65,
                    right: 70,
                    objectFit: "cover",
                    borderRadius: "100%",
                    transform: "rotate(10deg)",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "40%",
                    height: "100%",
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
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
