import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const adTomoAndOsakaStaring: Template = {
    name: "adTomoAndOsakaStaring",
    displayName: buildLocales("Tomo and Osaka staring", {
        [Locale.Russian]: "Томо и Осака смотрят",
        [Locale.Ukrainian]: "Томо і Осака дивляться",
        [Locale.Dutch]: "Tomo en Osaka staren",
        [Locale.French]: "Tomo et Osaka qui fixent",
        [Locale.German]: "Tomo und Osaka starren",
        [Locale.Polish]: "Tomo i Osaka wpatrują się",
        [Locale.SpanishES]: "Tomo y Osaka mirando fijamente",
        [Locale.SpanishLATAM]: "Tomo y Osaka mirando fijamente",
        [Locale.PortugueseBR]: "Tomo e Osaka encarando",
        [Locale.Turkish]: "Tomo ve Osaka dik dik bakıyor",
        [Locale.Italian]: "Tomo e Osaka che fissano",
        [Locale.Indonesian]: "Tomo dan Osaka menatap",
        [Locale.Czech]: "Tomo a Osaka zírají",
        [Locale.Japanese]: "じっと見つめる智と大阪",
        [Locale.Korean]: "빤히 쳐다보는 토모와 오사카",
        [Locale.ChineseCN]: "智和大阪凝视",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextBottom],
    width: 540,
    height: 405,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/adTomoAndOsakaStaring.png"
                width={540}
                height={405}
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
