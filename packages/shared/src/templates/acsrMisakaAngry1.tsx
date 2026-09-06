import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const acsrMisakaAngry1: Template = {
    name: "acsrMisakaAngry1",
    displayName: buildLocales("Misaka angry 1", {
        [Locale.Russian]: "Мисака злится 1",
        [Locale.Ukrainian]: "Місака злиться 1",
        [Locale.Dutch]: "Misaka boos 1",
        [Locale.French]: "Misaka en colère 1",
        [Locale.German]: "Misaka wütend 1",
        [Locale.Polish]: "Misaka wściekła 1",
        [Locale.SpanishES]: "Misaka enfadada 1",
        [Locale.SpanishLATAM]: "Misaka enojada 1",
        [Locale.PortugueseBR]: "Misaka com raiva 1",
        [Locale.Turkish]: "Misaka kızgın 1",
        [Locale.Italian]: "Misaka arrabbiata 1",
        [Locale.Indonesian]: "Misaka marah 1",
        [Locale.Czech]: "Misaka naštvaná 1",
        [Locale.Japanese]: "怒る御坂 1",
        [Locale.Korean]: "화난 미사카 1",
        [Locale.ChineseCN]: "御坂生气 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.ACertainScientificRailgun],
    types: [Type.TextTopWithBackground],
    width: 640,
    height: 544,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/acsrMisakaAngry1.png"
                width={640}
                height={429}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "115px",
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
