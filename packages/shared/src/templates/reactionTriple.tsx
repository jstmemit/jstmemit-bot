import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const reactionTriple: Template = {
    name: "reactionTriple",
    displayName: buildLocales("Triple reaction", {
        [Locale.Russian]: "Тройная реакция",
        [Locale.Ukrainian]: "Потрійна реакція",
        [Locale.Dutch]: "Drievoudige reactie",
        [Locale.French]: "Triple réaction",
        [Locale.German]: "Dreifache Reaktion",
        [Locale.Polish]: "Potrójna reakcja",
        [Locale.SpanishES]: "Triple reacción",
        [Locale.SpanishLATAM]: "Triple reacción",
        [Locale.PortugueseBR]: "Reação tripla",
        [Locale.Turkish]: "Üçlü tepki",
        [Locale.Italian]: "Tripla reazione",
        [Locale.Indonesian]: "Reaksi tripel",
        [Locale.Czech]: "Trojitá reakce",
        [Locale.Japanese]: "トリプルリアクション",
        [Locale.Korean]: "트리플 리액션",
        [Locale.ChineseCN]: "三重反应",
    }),
    topics: [Topic.Reaction],
    types: [Type.TextRightWithBackground, Type.ThreeOption, Type.ObjectImage, Type.FaceImage],
    width: 800,
    height: 1200,
    texts: [
        { id: 0, description: "first reaction caption", minLength: 1, maxLength: 12 },
        { id: 1, description: "second reaction caption", minLength: 1, maxLength: 12 },
        { id: 2, description: "third reaction caption", minLength: 1, maxLength: 12 },
    ],
    images: [
        { id: 0, description: "first reaction image" },
        { id: 1, description: "second reaction image" },
        { id: 2, description: "third reaction image" },
    ],
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
                src={images[0]}
                width={400}
                height={400}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    objectFit: "cover",
                    borderRight: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                }}
            />
            <img
                src={images[1]}
                width={400}
                height={400}
                style={{
                    position: "absolute",
                    top: 400,
                    left: 0,
                    objectFit: "cover",
                    borderRight: "1px solid #000000",
                    borderTop: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                }}
            />
            <img
                src={images[2]}
                width={400}
                height={400}
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    objectFit: "cover",
                    borderRight: "1px solid #000000",
                    borderTop: "1px solid #000000",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: 400,
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
                        lineClamp: 7,
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
                    right: 0,
                    top: 400,
                    width: "50%",
                    height: 400,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                    borderLeft: "1px solid #000000",
                    borderTop: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
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
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "50%",
                    height: 400,
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
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[2]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[2]}
                </div>
            </div>
        </div>
    ),
};
