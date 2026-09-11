import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const reactionQuadruple: Template = {
    name: "reactionQuadruple",
    displayName: buildLocales("Quadruple reaction", {
        [Locale.Russian]: "Четверная реакция",
        [Locale.Ukrainian]: "Четверна реакція",
        [Locale.Dutch]: "Viervoudige reactie",
        [Locale.French]: "Quadruple réaction",
        [Locale.German]: "Vierfache Reaktion",
        [Locale.Polish]: "Poczwórna reakcja",
        [Locale.SpanishES]: "Cuádruple reacción",
        [Locale.SpanishLATAM]: "Cuádruple reacción",
        [Locale.PortugueseBR]: "Reação quádrupla",
        [Locale.Turkish]: "Dörtlü tepki",
        [Locale.Italian]: "Quadrupla reazione",
        [Locale.Indonesian]: "Reaksi kuadrupel",
        [Locale.Czech]: "Čtyřnásobná reakce",
        [Locale.Japanese]: "4連リアクション",
        [Locale.Korean]: "4단 리액션",
        [Locale.ChineseCN]: "四重反应",
    }),
    topics: [Topic.Reaction],
    types: [Type.TextRightWithBackground, Type.FourOption, Type.ObjectImage, Type.FaceImage],
    width: 800,
    height: 1600,
    texts: [
        { id: 0, description: "first reaction caption", minLength: 1, maxLength: 12 },
        { id: 1, description: "second reaction caption", minLength: 1, maxLength: 12 },
        { id: 2, description: "third reaction caption", minLength: 1, maxLength: 12 },
        { id: 3, description: "fourth reaction caption", minLength: 1, maxLength: 12 },
    ],
    images: [
        { id: 0, description: "first reaction image" },
        { id: 1, description: "second reaction image" },
        { id: 2, description: "third reaction image" },
        { id: 3, description: "fourth reaction image" },
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
                    bottom: 400,
                    left: 0,
                    objectFit: "cover",
                    borderRight: "1px solid #000000",
                    borderTop: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                }}
            />
            <img
                src={images[3]}
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
                    height: "25%",
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
                    height: "25%",
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
                    bottom: 400,
                    width: "50%",
                    height: "25%",
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
                        fontSize: fontSize(texts[2]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[2]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "50%",
                    height: "25%",
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
                        fontSize: fontSize(texts[3]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[3]}
                </div>
            </div>
        </div>
    ),
};
