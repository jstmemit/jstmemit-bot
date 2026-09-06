import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const adOsakaZonedOut: Template = {
    name: "adOsakaZonedOut",
    displayName: buildLocales("Osaka zoned out", {
        [Locale.Russian]: "Осака зависла",
        [Locale.Ukrainian]: "Осака зависла",
        [Locale.Dutch]: "Osaka afwezig",
        [Locale.French]: "Osaka déconnectée",
        [Locale.German]: "Osaka abwesend",
        [Locale.Polish]: "Osaka zawieszona",
        [Locale.SpanishES]: "Osaka ida",
        [Locale.SpanishLATAM]: "Osaka ida",
        [Locale.PortugueseBR]: "Osaka desligada",
        [Locale.Turkish]: "Osaka dalmış",
        [Locale.Italian]: "Osaka assente",
        [Locale.Indonesian]: "Osaka melamun",
        [Locale.Czech]: "Osaka mimo",
        [Locale.Japanese]: "放心状態の大阪",
        [Locale.Korean]: "넋 나간 오사카",
        [Locale.ChineseCN]: "大阪放空",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextBottom],
    width: 640,
    height: 480,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/adOsakaZonedOut%C2%A0.png"
                width={640}
                height={480}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "130px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
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
