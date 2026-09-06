import _ from "lodash";
import type { ITransformService } from "#/interfaces/ITransformService.ts";
import type { ITransformProvider } from "#/interfaces/ITransformProvider.ts";
import type { TemplateText } from "@jstmemit/shared/models/TemplateText";
import { mentionRegex } from "@jstmemit/shared/regex/mentionRegex";
import { linkRegex } from "@jstmemit/shared/regex/linkRegex";

export class TransformService implements ITransformService {
    private readonly _markovProvider: ITransformProvider;

    public constructor(markovProvider: ITransformProvider) {
        this._markovProvider = markovProvider;
    }

    /**
     * Transforms raw strings into a specific amount of template
     * texts
     *
     * @param texts
     * @param context
     *
     * @author Kyrylo Maliuha
     */
    public async transformIntoMultipleTexts(texts: TemplateText[], context: string[]): Promise<string[]> {
        const transformedTexts: string[] = [];
        context = this._filterOutLinks(context);

        for (let i: number = 0; i < texts.length; i++) {
            transformedTexts.push(await this.transformIntoText(texts[i]!, context));
        }

        return transformedTexts;
    }

    /**
     * Decides how to transform a specific string based on amount of
     * raw strings available. If zero, then returns an empty string. If less than 30,
     * then returns a random one. If more, transforms by using MarkovProvider class
     *
     * @param text
     * @param context
     *
     * @author Kyrylo Maliuha
     */
    public async transformIntoText(text: TemplateText, context: string[]): Promise<string> {
        try {
            if (context.length < 1) {
                return "";
            }

            const random: string = this._transformToRequiredMaxLength(_.sample(context) || "", text.maxLength);

            if (context.length < 30) {
                return random;
            }

            try {
                return await this._markovProvider.getTransformedText(text, context);
            } catch {
                return random;
            }
        } catch (error) {
            console.error(error);
            return "";
        }
    }

    private _filterOutLinks(context: string[]): string[] {
        return context
            .map((text: string): string =>
                text
                    .replace(linkRegex, "")
                    .replace(mentionRegex, "")
                    .replace(/\s{2,}/g, " ")
                    .trim(),
            )
            .filter((text: string): boolean => text.length > 0);
    }

    private _transformToRequiredMaxLength(text: string, maxLength: number): string {
        return text.split(" ").slice(0, maxLength).join(" ");
    }
}
