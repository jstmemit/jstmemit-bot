import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const barakamonNaruSlapHuh: Template = {
    name: "barakamonNaruSlapHuh",
    displayName: buildLocales("Naru huh", {
        [Locale.Russian]: "Нару не поняла",
        [Locale.Ukrainian]: "Нару не зрозуміла",
        [Locale.Dutch]: "Naru huh",
        [Locale.French]: "Naru hein",
        [Locale.German]: "Naru häh",
        [Locale.Polish]: "Naru co",
        [Locale.SpanishES]: "Naru eh",
        [Locale.SpanishLATAM]: "Naru eh",
        [Locale.PortugueseBR]: "Naru hein",
        [Locale.Turkish]: "Naru ha",
        [Locale.Italian]: "Naru eh",
        [Locale.Indonesian]: "Naru hah",
        [Locale.Czech]: "Naru cože",
        [Locale.Japanese]: "「はぁ？」なる",
        [Locale.Korean]: "어리둥절한 나루",
        [Locale.ChineseCN]: "阿娜露一脸问号",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Barakamon],
    types: [Type.TextTopWithBackground],
    width: 540,
    height: 404,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/barakamonNaruSlapHuh.png"
                width={540}
                height={304}
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
