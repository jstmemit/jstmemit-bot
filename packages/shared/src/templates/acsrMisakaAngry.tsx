import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const acsrMisakaAngry: Template = {
    name: "acsrMisakaAngry",
    displayName: buildLocales("Misaka angry", {
        [Locale.Russian]: "Мисака злится",
        [Locale.Ukrainian]: "Місака злиться",
        [Locale.Dutch]: "Misaka boos",
        [Locale.French]: "Misaka en colère",
        [Locale.German]: "Misaka wütend",
        [Locale.Polish]: "Misaka wściekła",
        [Locale.SpanishES]: "Misaka enfadada",
        [Locale.SpanishLATAM]: "Misaka enojada",
        [Locale.PortugueseBR]: "Misaka com raiva",
        [Locale.Turkish]: "Misaka kızgın",
        [Locale.Italian]: "Misaka arrabbiata",
        [Locale.Indonesian]: "Misaka marah",
        [Locale.Czech]: "Misaka naštvaná",
        [Locale.Japanese]: "怒る御坂",
        [Locale.Korean]: "화난 미사카",
        [Locale.ChineseCN]: "御坂生气",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.ACertainScientificRailgun],
    types: [Type.TextTopWithBackground],
    width: 1280,
    height: 950,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/acsrMisakaAngry.png"
                width={1280}
                height={720}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "230px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "20px",
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
