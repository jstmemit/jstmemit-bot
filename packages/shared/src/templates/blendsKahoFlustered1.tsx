import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const blendsKahoFlustered1: Template = {
    name: "blendsKahoFlustered1",
    displayName: buildLocales("Kaho flustered 1", {
        [Locale.Russian]: "Кахо смущена 1",
        [Locale.Ukrainian]: "Кахо збентежена 1",
        [Locale.Dutch]: "Kaho in de war 1",
        [Locale.French]: "Kaho troublée 1",
        [Locale.German]: "Kaho verlegen 1",
        [Locale.Polish]: "Kaho zakłopotana 1",
        [Locale.SpanishES]: "Kaho aturdida 1",
        [Locale.SpanishLATAM]: "Kaho aturdida 1",
        [Locale.PortugueseBR]: "Kaho atrapalhada 1",
        [Locale.Turkish]: "Kaho şaşkın 1",
        [Locale.Italian]: "Kaho imbarazzata 1",
        [Locale.Indonesian]: "Kaho salah tingkah 1",
        [Locale.Czech]: "Kaho zmatená 1",
        [Locale.Japanese]: "動揺するカホ 1",
        [Locale.Korean]: "당황한 카호 1",
        [Locale.ChineseCN]: "佳穗慌张 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BlendS],
    types: [Type.TextTopWithBackground],
    width: 512,
    height: 388,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/blendsKahoFlustered.png"
                width={512}
                height={288}
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
