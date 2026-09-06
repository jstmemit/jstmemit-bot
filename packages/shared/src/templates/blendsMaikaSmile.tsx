import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const blendsMaikaSmile: Template = {
    name: "blendsMaikaSmile",
    displayName: buildLocales("Maika smile", {
        [Locale.Russian]: "Майка улыбается",
        [Locale.Ukrainian]: "Майка усміхається",
        [Locale.Dutch]: "Maika lacht",
        [Locale.French]: "Maika sourit",
        [Locale.German]: "Maika lächelt",
        [Locale.Polish]: "Maika się uśmiecha",
        [Locale.SpanishES]: "Maika sonríe",
        [Locale.SpanishLATAM]: "Maika sonríe",
        [Locale.PortugueseBR]: "Maika sorrindo",
        [Locale.Turkish]: "Maika gülümsüyor",
        [Locale.Italian]: "Maika sorride",
        [Locale.Indonesian]: "Maika tersenyum",
        [Locale.Czech]: "Maika se usmívá",
        [Locale.Japanese]: "微笑む麻衣花",
        [Locale.Korean]: "미소 짓는 마이카",
        [Locale.ChineseCN]: "麻衣花微笑",
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/blendsMaikaSmile.png"
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
