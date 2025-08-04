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
            'pl': 'Wygeneruj losowy mem',
        },
        contexts: [0],
        dm_permission: false
    },
    {
        name: 'enable',
        name_localizations: {
            'ru': 'включить',
            'nl': 'inschakelen',
            'fr': 'activer',
            'de': 'aktivieren',
            'uk': 'увімкнути',
            'pl': 'włącz',
        },
        description: 'Enable or disable generating memes in this channel',
        description_localizations: {
            'ru': 'Включить или отключить генерацию мемов в этом канале',
            'nl': 'Meme generatie in dit kanaal in- of uitschakelen',
            'fr': 'Activer ou désactiver la génération de mèmes dans ce canal',
            'de': 'Meme-Generierung in diesem Kanal aktivieren oder deaktivieren',
            'uk': 'Увімкнути або вимкнути генерацію мемів у цьому каналі',
            'pl': 'Włącz lub wyłącz generowanie memów na tym kanale',
        },
        contexts: [0],
        dm_permission: false
    },
    {
        name: 'settings',
        name_localizations: {
            'ru': 'настройки',
            'nl': 'instellingen',
            'fr': 'paramètres',
            'de': 'einstellungen',
            'uk': 'налаштування',
            'pl': 'ustawienia',
        },
        description: 'Change bot settings for this channel',
        description_localizations: {
            'ru': 'Изменить настройки бота для этого канала',
            'nl': 'Bot instellingen voor dit kanaal wijzigen',
            'fr': 'Modifier les paramètres du bot pour ce canal',
            'de': 'Bot-Einstellungen für diesen Kanal ändern',
            'uk': 'Змінити налаштування бота для цього каналу',
            'pl': 'Zmień ustawienia bota dla tego kanału',
        },
        contexts: [0],
        dm_permission: false
    },
    {
        name: 'premium',
        name_localizations: {
            'ru': 'премиум',
            'nl': 'premium',
            'fr': 'premium',
            'de': 'premium',
            'uk': 'преміум',
            'pl': 'premium',
        },
        description: 'View premium status on this server',
        description_localizations: {
            'ru': 'Посмотреть статус премиума на этом сервере',
            'nl': 'Bekijk de status van premium features op deze server',
            'fr': 'Voir le statut des fonctionnalités premium sur ce serveur',
            'de': 'Premium-Funktionsstatus auf diesem Server anzeigen',
            'uk': 'Переглянути статус преміума на цьому сервері',
            'pl': 'Zobacz status funkcji premium na tym serwerze',
        },
        contexts: [0],
        default_member_permissions: '32',
        dm_permission: false
    }
];