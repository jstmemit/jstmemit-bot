import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const btrBocchiHiding1: Template = {
    name: "btrBocchiHiding1",
    displayName: buildLocales("Bocchi hiding 1", {
        [Locale.Russian]: "Бокки прячется 1",
        [Locale.Ukrainian]: "Боккі ховається 1",
        [Locale.Dutch]: "Bocchi verstopt zich 1",
        [Locale.French]: "Bocchi se cache 1",
        [Locale.German]: "Bocchi versteckt sich 1",
        [Locale.Polish]: "Bocchi się chowa 1",
        [Locale.SpanishES]: "Bocchi escondiéndose 1",
        [Locale.SpanishLATAM]: "Bocchi escondiéndose 1",
        [Locale.PortugueseBR]: "Bocchi se escondendo 1",
        [Locale.Turkish]: "Bocchi saklanıyor 1",
        [Locale.Italian]: "Bocchi che si nasconde 1",
        [Locale.Indonesian]: "Bocchi bersembunyi 1",
        [Locale.Czech]: "Bocchi se schovává 1",
        [Locale.Japanese]: "隠れるぼっち 1",
        [Locale.Korean]: "숨는 봇치 1",
        [Locale.ChineseCN]: "波奇躲藏 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextTopWithBackground],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiHiding1.png"
                width={498}
                height={280}
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
