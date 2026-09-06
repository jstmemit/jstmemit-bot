import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const btrBocchiExcited1: Template = {
    name: "btrBocchiExcited1",
    displayName: buildLocales("Bocchi excited 1", {
        [Locale.Russian]: "Бокки в восторге 1",
        [Locale.Ukrainian]: "Боккі в захваті 1",
        [Locale.Dutch]: "Bocchi enthousiast 1",
        [Locale.French]: "Bocchi excitée 1",
        [Locale.German]: "Bocchi begeistert 1",
        [Locale.Polish]: "Bocchi podekscytowana 1",
        [Locale.SpanishES]: "Bocchi emocionada 1",
        [Locale.SpanishLATAM]: "Bocchi emocionada 1",
        [Locale.PortugueseBR]: "Bocchi animada 1",
        [Locale.Turkish]: "Bocchi heyecanlı 1",
        [Locale.Italian]: "Bocchi entusiasta 1",
        [Locale.Indonesian]: "Bocchi bersemangat 1",
        [Locale.Czech]: "Bocchi nadšená 1",
        [Locale.Japanese]: "はしゃぐぼっち 1",
        [Locale.Korean]: "신난 봇치 1",
        [Locale.ChineseCN]: "波奇兴奋 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextBottomWithBackground],
    width: 498,
    height: 443,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiExcited1.png"
                width={498}
                height={343}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
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
