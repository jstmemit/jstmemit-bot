import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const adTomoAndOsakaStaring1: Template = {
    name: "adTomoAndOsakaStaring1",
    displayName: buildLocales("Tomo and Osaka staring 1", {
        [Locale.Russian]: "Томо и Осака смотрят 1",
        [Locale.Ukrainian]: "Томо і Осака дивляться 1",
        [Locale.Dutch]: "Tomo en Osaka staren 1",
        [Locale.French]: "Tomo et Osaka qui fixent 1",
        [Locale.German]: "Tomo und Osaka starren 1",
        [Locale.Polish]: "Tomo i Osaka wpatrują się 1",
        [Locale.SpanishES]: "Tomo y Osaka mirando fijamente 1",
        [Locale.SpanishLATAM]: "Tomo y Osaka mirando fijamente 1",
        [Locale.PortugueseBR]: "Tomo e Osaka encarando 1",
        [Locale.Turkish]: "Tomo ve Osaka dik dik bakıyor 1",
        [Locale.Italian]: "Tomo e Osaka che fissano 1",
        [Locale.Indonesian]: "Tomo dan Osaka menatap 1",
        [Locale.Czech]: "Tomo a Osaka zírají 1",
        [Locale.Japanese]: "じっと見つめる智と大阪 1",
        [Locale.Korean]: "빤히 쳐다보는 토모와 오사카 1",
        [Locale.ChineseCN]: "智和大阪凝视 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextBottom, Type.FaceImage],
    width: 540,
    height: 405,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [
        { id: 0, description: "Tomo`s face" },
        { id: 1, description: "Osaka`s face" },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/adTomoAndOsakaStaring.png"
                width={540}
                height={405}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={150}
                height={150}
                style={{
                    position: "absolute",
                    top: 100,
                    left: 90,
                    objectFit: "cover",
                    borderRadius: "100%",
                }}
            />
            <img
                src={images[1]}
                width={150}
                height={150}
                style={{
                    position: "absolute",
                    top: 130,
                    right: 110,
                    objectFit: "cover",
                    borderRadius: "100%",
                }}
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
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
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
