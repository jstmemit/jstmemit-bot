import {settings} from "#config/settings.js";

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
        dm_permission: false,
        options: [
            {
                type: 3,
                name: 'engine',
                name_localizations: {
                    'ru': 'движок',
                    'nl': 'engine',
                    'fr': 'engine',
                    'de': 'engine',
                    'uk': 'движок',
                    'pl': 'engine',
                },
                description: 'Choose what engine to use for meme text transformation',
                description_localizations: {
                    'ru': 'Выберите движок для преобразования текста на меме',
                    'nl': 'Kies welke engine gebruikt moet worden voor het genereren van meme tekst',
                    'fr': 'Choisissez le moteur à utiliser pour la transformation du texte du mème',
                    'de': 'Wählen Sie die Engine für die Textumwandlung des Memes',
                    'uk': 'Оберіть движок для перетворення тексту на мемі',
                    'pl': 'Wybierz silnik do przetwarzania tekstu mema',
                },
                required: false,
                choices: [
                    {
                        name: '🔗 v1 - Markov chains (good for speed)',
                        value: 'v1'
                    },
                    {
                        name: '💡 v2-alpha - LLMs (good for quality)',
                        value: 'v2-alpha'
                    },
                    {
                        name: '💡 v2-alpha-qwen - LLMs (good for privacy, but slow)',
                        value: 'v2-alpha-qwen'
                    }
                ]
            },
            {
                type: 3,
                name: 'template',
                name_localizations: {
                    'ru': 'шаблон',
                    'nl': 'sjabloon',
                    'fr': 'modèle',
                    'de': 'vorlage',
                    'uk': 'шаблон',
                    'pl': 'szablon',
                },
                description: 'Choose a meme template',
                description_localizations: {
                    'ru': 'Выберите шаблон мема',
                    'nl': 'Kies een meme sjabloon',
                    'fr': 'Choisissez un modèle de mème',
                    'de': 'Wählen Sie eine Meme-Vorlage',
                    'uk': 'Оберіть шаблон мема',
                    'pl': 'Wybierz szablon mema',
                },
                required: false,
                choices: [
                    {
                        name: 'test 1',
                        value: 'test_1'
                    },
                    {
                        name: 'test 2',
                        value: 'test_2'
                    },
                    {
                        name: 'test 3',
                        value: 'test_3'
                    }
                ]
            },
            {
                type: 5,
                name: 'ephemeral',
                name_localizations: {
                    'ru': 'скрытый',
                    'nl': 'tijdelijk',
                    'fr': 'ephemere',
                    'de': 'ephemer',
                    'uk': 'тимчасовий',
                    'pl': 'tymczasowy',
                },
                description: 'Make the response visible only to you',
                description_localizations: {
                    'ru': 'Сделать ответ видимым только для вас',
                    'nl': 'Maak het antwoord alleen voor jou zichtbaar',
                    'fr': 'Rendre la réponse visible uniquement pour vous',
                    'de': 'Antwort nur für Sie sichtbar machen',
                    'uk': 'Зробити відповідь видимою тільки для вас',
                    'pl': 'Uczyń odpowiedź widoczną tylko dla ciebie',
                },
                required: false
            }
        ],
    },
    {
        name: 'voice',
        name_localizations: {
            'ru': 'озвучить',
            'uk': 'озвучити',
            'nl': 'voice',
            'fr': 'voice',
            'de': 'voice',
            'pl': 'voice',
        },
        description: 'Narrate selected message using a funny voice',
        description_localizations: {
            'ru': 'Озвучить выбранное сообщение смешным голосом',
            'nl': 'Vertel het geselecteerde bericht met een grappige stem',
            'fr': 'Raconter le message sélectionné avec une voix amusante',
            'de': 'Erzählen Sie die ausgewählte Nachricht mit einer lustigen Stimme',
            'uk': 'Озвучити вибране повідомлення смішним голосом',
            'pl': 'Opowiedz wybraną wiadomość zabawnym głosem',
        },
        contexts: [0],
        dm_permission: false,
        options: [
            {
                type: 3,
                name: 'text',
                name_localizations: {
                    ru: 'текст',
                    nl: 'tekst',
                    fr: 'texte',
                    de: 'text',
                    uk: 'текст',
                    pl: 'tekst'
                },
                description: 'Text to narrate',
                description_localizations: {
                    ru: 'Текст для озвучивания',
                    nl: 'Tekst om te vertellen',
                    fr: 'Texte à narrer',
                    de: 'Text zum Erzählen',
                    uk: 'Текст для озвучення',
                    pl: 'Tekst do narracji'
                },
                required: true
            },
            {
                type: 3,
                name: 'voice',
                name_localizations: {
                    'ru': 'голос',
                    'nl': 'stem',
                    'fr': 'voix',
                    'de': 'stimme',
                    'uk': 'голос',
                    'pl': 'głos',
                },
                description: 'Choose a voice for narration',
                description_localizations: {
                    'ru': 'Выберите голос для озвучивания',
                    'nl': 'Kies een stem voor de narratie',
                    'fr': 'Choisissez une voix pour la narration',
                    'de': 'Wählen Sie eine Stimme für die Erzählung',
                    'uk': 'Оберіть голос для озвучення',
                    'pl': 'Wybierz głos do narracji',
                },
                required: false,
                choices: settings.voices.map(voice => ({
                    name: voice.name,
                    value: voice.id
                }))
            },
            {
                type: 5,
                name: 'ephemeral',
                name_localizations: {
                    'ru': 'скрытый',
                    'nl': 'tijdelijk',
                    'fr': 'ephemere',
                    'de': 'ephemer',
                    'uk': 'тимчасовий',
                    'pl': 'tymczasowy',
                },
                description: 'Make the response visible only to you',
                description_localizations: {
                    'ru': 'Сделать ответ видимым только для вас',
                    'nl': 'Maak het antwoord alleen voor jou zichtbaar',
                    'fr': 'Rendre la réponse visible uniquement pour vous',
                    'de': 'Antwort nur für Sie sichtbar machen',
                    'uk': 'Зробити відповідь видимою тільки для вас',
                    'pl': 'Uczyń odpowiedź widoczną tylko dla ciebie',
                },
                required: false
            }
        ],
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