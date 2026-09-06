import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const adTomoBoasting1: Template = {
    name: "adTomoBoasting1",
    displayName: buildLocales("Tomo boasting 1", {
        [Locale.Russian]: "Томо хвастается 1",
        [Locale.Ukrainian]: "Томо хвалиться 1",
        [Locale.Dutch]: "Tomo schept op 1",
        [Locale.French]: "Tomo se vante 1",
        [Locale.German]: "Tomo gibt an 1",
        [Locale.Polish]: "Tomo się chwali 1",
        [Locale.SpanishES]: "Tomo presumiendo 1",
        [Locale.SpanishLATAM]: "Tomo presumiendo 1",
        [Locale.PortugueseBR]: "Tomo se gabando 1",
        [Locale.Turkish]: "Tomo böbürleniyor 1",
        [Locale.Italian]: "Tomo si vanta 1",
        [Locale.Indonesian]: "Tomo menyombongkan diri 1",
        [Locale.Czech]: "Tomo se chlubí 1",
        [Locale.Japanese]: "自慢する智 1",
        [Locale.Korean]: "뽐내는 토모 1",
        [Locale.ChineseCN]: "智自夸 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextTopWithBackground],
    width: 498,
    height: 473,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/adTomoBoasting1.png"
                width={498}
                height={373}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
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
