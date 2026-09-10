import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const adChiyoShockedVsCrying: Template = {
    name: "adChiyoShockedVsCrying",
    displayName: buildLocales("Shocked vs Crying Chiyo", {
        [Locale.Russian]: "Шокированная против плачущей Чиё",
        [Locale.Ukrainian]: "Шокована проти плачучої Чійо",
        [Locale.Dutch]: "Geschokte vs Huilende Chiyo",
        [Locale.French]: "Chiyo choquée vs en pleurs",
        [Locale.German]: "Geschockte vs weinende Chiyo",
        [Locale.Polish]: "Zszokowana vs płacząca Chiyo",
        [Locale.SpanishES]: "Chiyo sorprendida vs llorando",
        [Locale.SpanishLATAM]: "Chiyo en shock vs llorando",
        [Locale.PortugueseBR]: "Chiyo chocada vs chorando",
        [Locale.Turkish]: "Şok olmuş vs Ağlayan Chiyo",
        [Locale.Italian]: "Chiyo scioccata vs piangente",
        [Locale.Indonesian]: "Chiyo terkejut vs menangis",
        [Locale.Czech]: "Šokovaná vs plačící Chiyo",
        [Locale.Japanese]: "ショックを受けるちよ vs 泣くちよ",
        [Locale.Korean]: "충격받은 치요 vs 우는 치요",
        [Locale.ChineseCN]: "震惊 vs 哭泣的千代",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextLeftWithBackground, Type.TwoOption],
    width: 996,
    height: 746,
    texts: [
        { id: 0, description: "shocked reaction", minLength: 1, maxLength: 9 },
        { id: 1, description: "crying reaction", minLength: 1, maxLength: 9 },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/adChiyoShocked1.png"
                width={498}
                height={373}
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    borderRight: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/adChiyoCrying.png"
                width={498}
                height={373}
                style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    borderRight: "1px solid #000000",
                    borderTop: "1px solid #000000",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                    borderLeft: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                }}
            >
                <div
                    style={{
                        lineClamp: 5,
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
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                    borderLeft: "1px solid #000000",
                    borderTop: "1px solid #000000",
                }}
            >
                <div
                    style={{
                        lineClamp: 5,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[1]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
