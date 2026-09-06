export const FontValues = {
    Default: "default",
    ComicSansMS: "Comic Sans MS",
    Impact: "Impact",
    Minecraft: "Minecraft",
    OpenDyslexic: "OpenDyslexic",
} as const;

export type FontValueType = (typeof FontValues)[keyof typeof FontValues];

export interface Font {
    label: string;
    value: FontValueType;
    description: string;
    emoji: string;
}
