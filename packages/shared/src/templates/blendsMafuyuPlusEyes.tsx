import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const blendsMafuyuPlusEyes: Template = {
    name: "blendsMafuyuPlusEyes",
    displayName: buildLocales("Mafuyu plus eyes", {
        [Locale.Russian]: "Мафую с глазами-плюсиками",
        [Locale.Ukrainian]: "Мафую з очима-плюсиками",
        [Locale.Dutch]: "Mafuyu met plus-ogen",
        [Locale.French]: "Mafuyu avec des yeux en croix",
        [Locale.German]: "Mafuyu mit Plus-Augen",
        [Locale.Polish]: "Mafuyu z oczami w kształcie plusa",
        [Locale.SpanishES]: "Mafuyu con ojos de cruz",
        [Locale.SpanishLATAM]: "Mafuyu con ojos de cruz",
        [Locale.PortugueseBR]: "Mafuyu com olhos em cruz",
        [Locale.Turkish]: "Mafuyu artı gözlerle",
        [Locale.Italian]: "Mafuyu con occhi a croce",
        [Locale.Indonesian]: "Mafuyu dengan mata plus",
        [Locale.Czech]: "Mafuyu s očima ve tvaru plus",
        [Locale.Japanese]: "麻冬のプラスアイ",
        [Locale.Korean]: "마후유 플러스 눈",
        [Locale.ChineseCN]: "麻冬十字眼",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BlendS],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 675,
    height: 495,
    animationDuration: 1980,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/blendsMaikaPlusEyes.webp"
                width={675}
                height={375}
                style={{ position: "absolute", bottom: 0, right: 0 }}
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
