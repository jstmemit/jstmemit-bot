export const commands = [
    {
        name: 'meme',
        name_localizations: {
            'ru': 'мем',
            'uk': 'мем',
        },
        description: 'Generate a meme with a random template',
        description_localizations: {
            'ru': 'Сгенерировать случайный мем',
            'nl': 'Genereer een random meme',
            'fr': 'Générer un mème aléatoire',
            'de': 'Erzeuge ein zufälliges Meme',
            'uk': 'Згенерувати рандомний мем',
        },
        contexts: [0],
    },
    {
        name: 'enable',
        name_localizations: {
            'ru': 'включить',
            'nl': 'inschakelen',
            'fr': 'activer',
            'de': 'aktivieren',
            'uk': 'увімкнути',
        },
        description: 'Enable or disable generating memes in this channel',
        description_localizations: {
            'ru': 'Включить или отключить генерацию мемов в этом канале',
            'nl': 'Meme generatie in dit kanaal in- of uitschakelen',
            'fr': 'Activer ou désactiver la génération de mèmes dans ce canal',
            'de': 'Meme-Generierung in diesem Kanal aktivieren oder deaktivieren',
            'uk': 'Увімкнути або вимкнути генерацію мемів у цьому каналі',
        },
    },
    {
        name: 'settings',
        name_localizations: {
            'ru': 'настройки',
            'nl': 'instellingen',
            'fr': 'paramètres',
            'de': 'einstellungen',
            'uk': 'налаштування',
        },
        description: 'Change bot settings for this channel',
        description_localizations: {
            'ru': 'Изменить настройки бота для этого канала',
            'nl': 'Bot instellingen voor dit kanaal wijzigen',
            'fr': 'Modifier les paramètres du bot pour ce canal',
            'de': 'Bot-Einstellungen für diesen Kanal ändern',
            'uk': 'Змінити налаштування бота для цього каналу',
        },
    }
];