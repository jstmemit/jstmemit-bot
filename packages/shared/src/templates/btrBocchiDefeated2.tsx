import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const btrBocchiDefeated2: Template = {
    name: "btrBocchiDefeated2",
    displayName: buildLocales("Bocchi defeated 2", {
        [Locale.Russian]: "Бокки повержена 2",
        [Locale.Ukrainian]: "Боккі переможена 2",
        [Locale.Dutch]: "Bocchi verslagen 2",
        [Locale.French]: "Bocchi vaincue 2",
        [Locale.German]: "Bocchi geschlagen 2",
        [Locale.Polish]: "Bocchi pokonana 2",
        [Locale.SpanishES]: "Bocchi derrotada 2",
        [Locale.SpanishLATAM]: "Bocchi derrotada 2",
        [Locale.PortugueseBR]: "Bocchi derrotada 2",
        [Locale.Turkish]: "Bocchi yenilmiş 2",
        [Locale.Italian]: "Bocchi sconfitta 2",
        [Locale.Indonesian]: "Bocchi kalah 2",
        [Locale.Czech]: "Bocchi poražená 2",
        [Locale.Japanese]: "打ちひしがれるぼっち 2",
        [Locale.Korean]: "패배한 봇치 2",
        [Locale.ChineseCN]: "波奇被击垮 2",
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiDefeated2.png"
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
