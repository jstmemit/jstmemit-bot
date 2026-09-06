import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const blendsMaikaBlush1: Template = {
    name: "blendsMaikaBlush1",
    displayName: buildLocales("Maika blush 1", {
        [Locale.Russian]: "Майка краснеет 1",
        [Locale.Ukrainian]: "Майка червоніє 1",
        [Locale.Dutch]: "Maika bloost 1",
        [Locale.French]: "Maika qui rougit 1",
        [Locale.German]: "Maika errötet 1",
        [Locale.Polish]: "Maika się rumieni 1",
        [Locale.SpanishES]: "Maika sonrojada 1",
        [Locale.SpanishLATAM]: "Maika sonrojada 1",
        [Locale.PortugueseBR]: "Maika corada 1",
        [Locale.Turkish]: "Maika kızarıyor 1",
        [Locale.Italian]: "Maika arrossisce 1",
        [Locale.Indonesian]: "Maika tersipu 1",
        [Locale.Czech]: "Maika se červená 1",
        [Locale.Japanese]: "マイカの照れ顔 1",
        [Locale.Korean]: "마이카 얼굴 빨개짐 1",
        [Locale.ChineseCN]: "麻衣花脸红 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BlendS],
    types: [Type.TextBottomWithBackground],
    width: 640,
    height: 472,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/blendsMaikaBlush1.png"
                width={640}
                height={357}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
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
