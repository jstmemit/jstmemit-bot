import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const adOsakaNerd: Template = {
    name: "adOsakaNerd",
    displayName: buildLocales("Osaka nerd", {
        [Locale.Russian]: "Осака умничает",
        [Locale.Ukrainian]: "Осака розумує",
        [Locale.Dutch]: "Osaka betweter",
        [Locale.French]: "Osaka je-sais-tout",
        [Locale.German]: "Osaka Besserwisserin",
        [Locale.Polish]: "Osaka mądrala",
        [Locale.SpanishES]: "Osaka sabelotodo",
        [Locale.SpanishLATAM]: "Osaka sabelotodo",
        [Locale.PortugueseBR]: "Osaka sabe-tudo",
        [Locale.Turkish]: "Osaka ukala",
        [Locale.Italian]: "Osaka saccente",
        [Locale.Indonesian]: "Osaka sok tahu",
        [Locale.Czech]: "Osaka chytrolínka",
        [Locale.Japanese]: "知ったかぶりの大阪",
        [Locale.Korean]: "아는 척하는 오사카",
        [Locale.ChineseCN]: "大阪说教",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextTopWithBackground],
    width: 680,
    height: 506,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/adOsakaNerd.png"
                width={680}
                height={386}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "120px",
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
