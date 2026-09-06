import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const acNagisaNotes2: Template = {
    name: "acNagisaNotes2",
    displayName: buildLocales("Nagisa notes 2", {
        [Locale.Russian]: "Нагиса записывает 2",
        [Locale.Ukrainian]: "Нагіса занотовує 2",
        [Locale.Dutch]: "Nagisa maakt notities 2",
        [Locale.French]: "Nagisa prend des notes 2",
        [Locale.German]: "Nagisa macht Notizen 2",
        [Locale.Polish]: "Nagisa notuje 2",
        [Locale.SpanishES]: "Nagisa toma notas 2",
        [Locale.SpanishLATAM]: "Nagisa toma notas 2",
        [Locale.PortugueseBR]: "Nagisa anotando 2",
        [Locale.Turkish]: "Nagisa not alıyor 2",
        [Locale.Italian]: "Nagisa prende appunti 2",
        [Locale.Indonesian]: "Nagisa mencatat 2",
        [Locale.Czech]: "Nagisa si dělá poznámky 2",
        [Locale.Japanese]: "渚 メモ 2",
        [Locale.Korean]: "나기사 메모 2",
        [Locale.ChineseCN]: "渚 记笔记 2",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AssassinationClassroom],
    types: [Type.TextLeftWithBackground, Type.FaceImage],
    width: 936,
    height: 498,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
    images: [{ id: 0, description: "Nagisa`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/acNagisaNotes2.png"
                width={468}
                height={498}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={214}
                height={214}
                style={{
                    position: "absolute",
                    top: 112,
                    right: 132,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
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
        </div>
    ),
};
