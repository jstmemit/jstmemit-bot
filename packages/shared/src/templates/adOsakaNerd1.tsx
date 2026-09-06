import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const adOsakaNerd1: Template = {
    name: "adOsakaNerd1",
    displayName: buildLocales("Osaka nerd 1", {
        [Locale.Russian]: "Осака умничает 1",
        [Locale.Ukrainian]: "Осака розумує 1",
        [Locale.Dutch]: "Osaka betweter 1",
        [Locale.French]: "Osaka je-sais-tout 1",
        [Locale.German]: "Osaka Besserwisserin 1",
        [Locale.Polish]: "Osaka mądrala 1",
        [Locale.SpanishES]: "Osaka sabelotodo 1",
        [Locale.SpanishLATAM]: "Osaka sabelotodo 1",
        [Locale.PortugueseBR]: "Osaka sabe-tudo 1",
        [Locale.Turkish]: "Osaka ukala 1",
        [Locale.Italian]: "Osaka saccente 1",
        [Locale.Indonesian]: "Osaka sok tahu 1",
        [Locale.Czech]: "Osaka chytrolínka 1",
        [Locale.Japanese]: "知ったかぶりの大阪 1",
        [Locale.Korean]: "아는 척하는 오사카 1",
        [Locale.ChineseCN]: "大阪说教 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextTopWithBackground, Type.FaceImage],
    width: 680,
    height: 506,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "Osaka`s face" }],
    element: ({ texts, images, font }: TemplateProps) => (
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
            <img
                src={images[0]}
                width={160}
                height={160}
                style={{
                    position: "absolute",
                    top: 170,
                    left: 115,
                    objectFit: "cover",
                    borderRadius: "100%",
                }}
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
