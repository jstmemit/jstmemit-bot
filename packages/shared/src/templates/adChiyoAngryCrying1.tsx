import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const adChiyoAngryCrying1: Template = {
    name: "adChiyoAngryCrying1",
    displayName: buildLocales("Chiyo angry crying 1", {
        [Locale.Russian]: "Чиё плачет от злости 1",
        [Locale.Ukrainian]: "Чійо плаче від злості 1",
        [Locale.Dutch]: "Chiyo huilt boos 1",
        [Locale.French]: "Chiyo pleurant de colère 1",
        [Locale.German]: "Chiyo weint wütend 1",
        [Locale.Polish]: "Chiyo płacze ze złości 1",
        [Locale.SpanishES]: "Chiyo llorando enojada 1",
        [Locale.SpanishLATAM]: "Chiyo llorando enojada 1",
        [Locale.PortugueseBR]: "Chiyo chorando de raiva 1",
        [Locale.Turkish]: "Chiyo sinirle ağlıyor 1",
        [Locale.Italian]: "Chiyo piange di rabbia 1",
        [Locale.Indonesian]: "Chiyo menangis marah 1",
        [Locale.Czech]: "Chiyo pláče vzteky 1",
        [Locale.Japanese]: "ちよ 怒り泣き 1",
        [Locale.Korean]: "화나서 우는 치요 1",
        [Locale.ChineseCN]: "千代气哭 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextTopWithBackground],
    width: 540,
    height: 504,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/adChiyoAngryCrying1.png"
                width={540}
                height={404}
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
