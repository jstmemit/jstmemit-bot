import {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ContainerBuilder,
    SectionBuilder,
    SelectMenuOptionBuilder,
    SeparatorBuilder,
    SeparatorSpacingSize,
    StringSelectMenuBuilder,
    TextDisplayBuilder,
    ThumbnailBuilder
} from 'discord.js';
import {getChannelSettings} from "#database/queries/getChannelSettings.js";
import {t} from "#src/discord/i18n/utils.js";

const shortSurveyId = uuid => uuid.replace(/-/g, '').substring(0, 8);
const shortUserId = userId => BigInt(userId).toString(36);

const getRatingComponents = (question, surveyId, userId, questionIndex) => {
    const components = [];

    // if (question.lowerBoundLabel || question.upperBoundLabel) {
    //     components.push({
    //         type: 'textDisplay',
    //         component: new TextDisplayBuilder().setContent(
    //             `**${question.lowerBoundLabel || ''}** ← → **${question.upperBoundLabel || ''}**`
    //         )
    //     });
    // }

    if (question.display === 'number' && question.scale <= 5) {
        const buttonRow = new ActionRowBuilder();
        for (let i = 1; i <= question.scale; i++) {
            buttonRow.addComponents(
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Primary)
                    .setLabel(i.toString())
                    .setCustomId(generateSurveyId("rt", surveyId, question.id, i, userId))
            );
        }
        components.push({
            type: 'actionRow',
            component: buttonRow
        });
    } else {
        const options = [];
        for (let i = 1; i <= question.scale; i++) {
            options.push(
                new SelectMenuOptionBuilder()
                    .setLabel(i.toString())
                    .setValue(i.toString())
                    .setDescription(`${i}/${question.scale}`)
            );
        }

        components.push({
            type: 'actionRow',
            component: new ActionRowBuilder().addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId(generateSurveyId("rs", surveyId, question.id, "", userId))
                    .addOptions(options)
            )
        });
    }

    return components;
};

const getMultipleChoiceComponents = (question, surveyId, userId, questionIndex, language) => {
    const options = question.choices.map(choice =>
        new SelectMenuOptionBuilder()
            .setLabel(choice)
            .setValue(choice)
    );

    return [{
        type: 'actionRow',
        component: new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId(generateSurveyId("mc", surveyId, question.id, "", userId))
                .setPlaceholder(t("surveySelectOptionsPlaceholder", language))
                .setMinValues(1)
                .setMaxValues(Math.min(question.choices.length, 25))
                .addOptions(options)
        )
    }];
};

const getSingleChoiceComponents = (question, surveyId, userId, questionIndex) => {
    const options = question.choices.map(choice =>
        new SelectMenuOptionBuilder()
            .setLabel(choice)
            .setValue(choice)
    );

    return [{
        type: 'actionRow',
        component: new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId(generateSurveyId("sc", surveyId, question.id, "", userId))
                .setPlaceholder(t("surveySelectOptionPlaceholder", "english"))
                .addOptions(options)
        )
    }];
};

const getOpenTextComponents = (question, surveyId, userId, questionIndex, language) => [{
    type: 'actionRow',
    component: new ActionRowBuilder().addComponents(
        new ButtonBuilder()
            .setStyle(ButtonStyle.Primary)
            .setLabel(t("surveyWriteYourResponse", language))
            .setCustomId(generateSurveyId("op", surveyId, question.id, "", userId))
    )
}];

const getLinkComponents = (question, surveyId, userId, questionIndex) => {
    const components = [];

    if (question.link) {
        components.push({
            type: 'actionRow',
            component: new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Link)
                    .setLabel("🔗")
                    .setURL(question.link)
            )
        });
    }

    components.push({
        type: 'actionRow',
        component: new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setStyle(ButtonStyle.Success)
                .setLabel("✅")
                .setCustomId(generateSurveyId("lk", surveyId, question.id, "", userId))
        )
    });

    return components;
};

const getQuestionComponents = (question, surveyId, userId, questionIndex, language) => {
    const components = [];

    switch (question.type) {
        case 'rating':
            components.push(...getRatingComponents(question, surveyId, userId, questionIndex));
            break;
        case 'multiple_choice':
            components.push(...getMultipleChoiceComponents(question, surveyId, userId, questionIndex, language));
            break;
        case 'single_choice':
            components.push(...getSingleChoiceComponents(question, surveyId, userId, questionIndex));
            break;
        case 'open':
            components.push(...getOpenTextComponents(question, surveyId, userId, questionIndex, language));
            break;
        case 'link':
            components.push(...getLinkComponents(question, surveyId, userId, questionIndex));
            break;
    }

    return components;
};

const generateSurveyId = (type, surveyId, questionId, value, userId) => {
    const parts = [
        type.substring(0, 2),
        shortSurveyId(surveyId),
        shortSurveyId(questionId),
        value,
        shortUserId(userId)
    ];
    return parts.join('-');
};

export const constructSurveyEmbed = async (surveyId, userId, currentQuestionIndex, surveyData, channelId) => {
    const channelSettings = await getChannelSettings(channelId);
    const language = channelSettings?.language || "english";

    const currentQuestion = surveyData.questions[currentQuestionIndex];
    const totalQuestions = surveyData.questions.length;
    // const progressBar = createProgressBar(currentQuestionIndex + 1, totalQuestions, totalQuestions);

    const container = new ContainerBuilder()
        .addSectionComponents(
            new SectionBuilder()
                .setThumbnailAccessory(
                    new ThumbnailBuilder()
                        .setURL("https://jstmemit.com/assets/logo.png")
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(`# 💡  ${surveyData.name}`),
                    new TextDisplayBuilder().setContent(t("surveyDescription", language)),
                )
        )
        .addSeparatorComponents(
            new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true),
        )
        .addTextDisplayComponents(
            new TextDisplayBuilder().setContent(`${t("surveyProgress", language)} **${currentQuestionIndex + 1}/${totalQuestions}**`),
            new TextDisplayBuilder().setContent(`### ${currentQuestion.question}`),
        );

    if (currentQuestion.description) {
        container.addTextDisplayComponents(
            new TextDisplayBuilder().setContent(currentQuestion.description),
        );
    }

    const questionComponents = getQuestionComponents(currentQuestion, surveyId, userId, currentQuestionIndex, language);
    questionComponents.forEach(component => {
        if (component.type === 'actionRow') {
            container.addActionRowComponents(component.component);
        } else if (component.type === 'textDisplay') {
            container.addTextDisplayComponents(component.component);
        }
    });

    const navigationRow = new ActionRowBuilder();

    if (navigationRow.components.length > 0) {
        container.addActionRowComponents(navigationRow);
    }

    return [container];
};
