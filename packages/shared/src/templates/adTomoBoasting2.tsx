import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const adTomoBoasting2: Template = {
    name: "adTomoBoasting2",
    displayName: buildLocales("Tomo boasting 2", {
        [Locale.Russian]: "Томо хвастается 2",
        [Locale.Ukrainian]: "Томо хвалиться 2",
        [Locale.Dutch]: "Tomo schept op 2",
        [Locale.French]: "Tomo se vante 2",
        [Locale.German]: "Tomo gibt an 2",
        [Locale.Polish]: "Tomo się chwali 2",
        [Locale.SpanishES]: "Tomo presumiendo 2",
        [Locale.SpanishLATAM]: "Tomo presumiendo 2",
        [Locale.PortugueseBR]: "Tomo se gabando 2",
        [Locale.Turkish]: "Tomo böbürleniyor 2",
        [Locale.Italian]: "Tomo si vanta 2",
        [Locale.Indonesian]: "Tomo menyombongkan diri 2",
        [Locale.Czech]: "Tomo se chlubí 2",
        [Locale.Japanese]: "自慢する智 2",
        [Locale.Korean]: "뽐내는 토모 2",
        [Locale.ChineseCN]: "智自夸 2",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextTopWithBackground, Type.FaceImage],
    width: 498,
    height: 463,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "Tomo`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/adTomoBoasting1.png"
                width={498}
                height={373}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    top: 130,
                    right: 90,
                    objectFit: "cover",
                    borderRadius: "100%",
                    transform: "rotate(15deg)",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "90px",
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
