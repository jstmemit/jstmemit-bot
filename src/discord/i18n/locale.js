export const locale = {
    english: {
        settingsTitle: "Settings",
        settingsDescription: "Here you can change bot's behaviour in this channel.",

        settingsMemesTitle: "Memes in the chat",
        settingsMemesDescription: "This section contains options related to random memes in the chat. You can control how often bot is going to send memes and also what memes do you want to see.",
        settingsMemesFrequencyTitle: "Frequency",
        settingsMemesFrequencyDescription: "How often should the bot send a random meme in the chat without being asked to?",

        settingsMemesFrequencyOptionNeverTitle: "Never",
        settingsMemesFrequencyOptionNeverDescription: "Don't send memes, unless requested via a command",

        settingsMemesFrequencyOptionHardlyEverTitle: "Hardly ever",
        settingsMemesFrequencyOptionHardlyEverDescription: "Once every ~100 messages",

        settingsMemesFrequencyOptionRarelyTitle: "Rarely",
        settingsMemesFrequencyOptionRarelyDescription: "Once every ~50 messages",

        settingsMemesFrequencyOptionSometimesTitle: "Sometimes",
        settingsMemesFrequencyOptionSometimesDescription: "Once every ~20 messages (recommended)",

        settingsMemesFrequencyOptionOftenTitle: "Often",
        settingsMemesFrequencyOptionOftenDescription: "Once every ~10 messages",

        settingsMemesTemplatesTitle: "What memes are going to be sent?",
        settingsMemesTemplatesDescription: "You can choose what memes you want to see in the chat. You can also disable some of them if you don't like them.",

        settingsMemesTemplatesOptionWojakPointingTitle: "Wojak Pointing",
        settingsMemesTemplatesOptionUncannyTitle: "Uncanny",
        settingsMemesTemplatesOptionSteppedInShitTitle: "Stepped in shit",
        settingsMemesTemplatesOptionSpeechbubbleTitle: "Speech bubble",
        settingsMemesTemplatesOptionLooksAtPaperAngryTitle: "Looks at paper angry",
        settingsMemesTemplatesOptionFancyBearTitle: "Winnie the Pooh",
        settingsMemesTemplatesOptionCycleTitle: "Cycle",
        settingsMemesTemplatesOptionGreentextTitle: "Greentext",
        settingsMemesTemplatesOptionIsThisAPigeonTitle: "Is this a pigeon?",
        settingsMemesTemplatesOptionYesChadTitle: "Yes Chad",
        settingsMemesTemplatesOptionTextingTitle: "Texting",
        settingsMemesTemplatesOptionConnorTitle: "Connor",
        settingsMemesTemplatesOptionBigThumbsUpTitle: "Big Thumbs Up",
        settingsMemesTemplatesOptionBuzzTitle: "Buzz",
        settingsMemesTemplatesOptionSpongebobTitle: "SpongeBob",
        settingsMemesTemplatesOptionCryingTitle: "Crying",
        settingsMemesTemplatesOptionAbsoluteCinemaTitle: "Absolute Cinema",

        settingsDataRetentionTitle: "Data Retention",
        settingsDataRetentionDescription: "You can choose how long the bot will keep the data related to this channel. If you want to erase all data, you can also do it here.",

        settingsDataRetentionHowLongTitle: "How long should the bot keep the data?",
        settingsDataRetentionHowLongDescription: "After this amount of days, bot will delete saved messages for this channel. More context = better memes.",

        settingsDataRetentionHowLongOption2DaysTitle: "2 days",
        settingsDataRetentionHowLongOption2DaysDescription: "For very active channels",

        settingsDataRetentionHowLongOption7DaysTitle: "7 days",
        settingsDataRetentionHowLongOption7DaysDescription: "For active channels",

        settingsDataRetentionHowLongOption14DaysTitle: "14 days",
        settingsDataRetentionHowLongOption14DaysDescription: "For channels with medium activity (recommended)",

        settingsDataRetentionHowLongOption30DaysTitle: "30 days",
        settingsDataRetentionHowLongOption30DaysDescription: "For channels with low activity",

        settingsDataRetentionUserImagesTitle: "Should bot use user sent images in memes?",
        settingsDataRetentionUserImagesDescription: "If set to **yes**, sometimes instead of using avatars it will use user sent images instead. Only images sent no more than 24 hours ago will be used. __Cannot be disabled due to new Intents limitations, will be fixes soon.__",

        settingsFooterChannelId: "Channel ID:",

        settingsStatusEnabled: "🟢 Bot is **working** in this channel!",
        settingsStatusDisabled: "🔴 Bot is **disabled** in this channel!",

        notEnoughContextTitle: "Not enough training data",
        notEnoughContextDescription: "Bot failed to generate text for the meme. This could be because there is not enough training data. Try again after sending about **{{amount}}** more messages.",

        noPermissionsTitle: "You don't have permissions to do that",
        noPermissionsDescription: "You must have **{{permission}}** permission in order to use this command.",

        enableDescription: "If you want to change this, click the button below. There are also more fine-tuned options available in the settings menu.",


        premiumTitle: "Premium",
        premiumDescription: "You can support the development of this bot by subscribing to premium. This server will receive access to **more customization**, **ability to link channels together** and some other features, which you can see below. More things are coming in the near future!\n\nEverybody on this server will receive **Premium** benefits even if only one person subscribes.\n\n*Sometimes Discord doesn't render the button propery, if it says \"Product unavailable\" you can still get premium in the bot's profile store.*",
        premiumDescriptionSettingsVariant: "You can support the development of this bot by subscribing to premium. This server will receive access to **more customization**, **ability to link channels together** and some other features. More things are coming in the near future!\n\nEverybody on this server will receive **Premium** benefits even if only one person subscribes.",
        premiumStatusActive: "Premium is **active** on this server!",
        premiumStatusInactive: "Premium is **not active** on this server",

        premiumCustomizationTitle: "More customization",
        premiumCustomizationDescription: "These features will give you more control over how the bot looks and behaves in this channel. Features are isolated on the channel level, so you can have different settings in different channels.",

        premiumSetOwnWatermarkTitle: "Set your own watermark",
        premiumSetOwnWatermarkDescription: "By default there are no watermarks on memes, but with premium you can set your own server logo as a watermark on memes. It will be placed in the bottom right corner of the meme.",
        premiumSetOwnWatermarkActive: "✔️  Your own watermark is **set**!",
        premiumSetOwnWatermarkInactive: "❌  No watermark is set",

        premiumLinkChannelsTogetherTitle: "Link channels training data together",
        premiumLinkChannelsTogetherDescription: "If you don't want to flood your general chat with memes, you can link a \"flood\" channel. Bot will operate there with training data from this channel, so it will be able to generate memes based on the context of this channel.",
        premiumLinkChannelsTogetherActive: "✔️  <#{{thischannel}}> and <#{{floodchannel}}> are **linked together**!",
        premiumLinkChannelsTogetherInactive: "❌  No channel is linked",
        premiumSelectChannelPlaceholder: "🔗  Select channel to link",

        premiumTurnOffMentionsTitle: "Replace @mentions in text memes with usernames",
        premiumTurnOffMentionsDescription: "By default bot can in some occasions mention users in text memes. Although @everyone and @here mentions are always turned off even in free version.",
        premiumTurnOffMentionsActive: "✔️  Mentions are **being replaced** in text memes!",
        premiumTurnOffMentionsInactive: "❌  Mentions are **not being replaced** in text memes",

        btnDisable: "Disable",
        btnEnable: "Enable",
        btnEraseData: "Erase Data",
        btnSettings: "Settings",
        btnPremiumActive: "Premium is active!",
        btnManagePremium: "Premium settings",
        btnLearnMore: "Learn more",
        btnTurnOn: "Turn on",
        btnTurnOff: "Turn off",
        btnLink: "Link channels",
        btnLinkBelow: "Use menu below to link channels",
        btnUnlink: "Unlink channels",
        btnSetWatermark: "Set watermark",
        btnRemoveWatermark: "Remove watermark",

        loading: "Loading...",

        yes: "Yes",
        no: "No",
    },
    russian: {
        settingsTitle: "Настройки",
        settingsDescription: "Тут вы можете настроить как бот будет себя вести в этом канале.",

        settingsMemesTitle: "Мемы в чате",
        settingsMemesDescription: "Тут вы можете настроить как и какие мемы бот будет отправлять в чат без запроса.",
        settingsMemesFrequencyTitle: "Вероятность",
        settingsMemesFrequencyDescription: "Как часто бот будет отправлять случайный мем?",

        settingsMemesFrequencyOptionNeverTitle: "Никогда",
        settingsMemesFrequencyOptionNeverDescription: "Вообще не отправлять мемы без запроса",

        settingsMemesFrequencyOptionHardlyEverTitle: "Очень редко",
        settingsMemesFrequencyOptionHardlyEverDescription: "Раз в ~100 сообщений",

        settingsMemesFrequencyOptionRarelyTitle: "Редко",
        settingsMemesFrequencyOptionRarelyDescription: "Раз в ~50 сообщений",

        settingsMemesFrequencyOptionSometimesTitle: "Иногда",
        settingsMemesFrequencyOptionSometimesDescription: "Раз в ~20 сообщений (рекомендуется)",

        settingsMemesFrequencyOptionOftenTitle: "Часто",
        settingsMemesFrequencyOptionOftenDescription: "Раз в ~10 сообщений",

        settingsMemesTemplatesTitle: "Какие мемы будут отправляться?",
        settingsMemesTemplatesDescription: "Вы можете выбрать какие мемы вы хотите видеть в чате. Вы также можете отключить некоторые из них, если они вам не нравятся.",

        settingsMemesTemplatesOptionWojakPointingTitle: "Чел указывает пальцем",
        settingsMemesTemplatesOptionUncannyTitle: "Uncanny",
        settingsMemesTemplatesOptionSteppedInShitTitle: "Наступил в говно",
        settingsMemesTemplatesOptionSpeechbubbleTitle: "Сказал что-то",
        settingsMemesTemplatesOptionLooksAtPaperAngryTitle: "Смотрит на бумагу сердито",
        settingsMemesTemplatesOptionFancyBearTitle: "Винни Пух",
        settingsMemesTemplatesOptionCycleTitle: "Цикл",
        settingsMemesTemplatesOptionGreentextTitle: "Гринтекст",
        settingsMemesTemplatesOptionIsThisAPigeonTitle: "Это голубь?",
        settingsMemesTemplatesOptionYesChadTitle: "Чад",
        settingsMemesTemplatesOptionTextingTitle: "Пишет новости",
        settingsMemesTemplatesOptionConnorTitle: "Коннор",
        settingsMemesTemplatesOptionBigThumbsUpTitle: "Молодец, палец вверх",
        settingsMemesTemplatesOptionBuzzTitle: "Баззлайтер",
        settingsMemesTemplatesOptionSpongebobTitle: "Губка Боб",
        settingsMemesTemplatesOptionCryingTitle: "Плачет",
        settingsMemesTemplatesOptionAbsoluteCinemaTitle: "Абсолютное кино",

        settingsDataRetentionTitle: "Хранение данных",
        settingsDataRetentionDescription: "Вы можете выбрать как долго бот будет хранить данные связанные с этим каналом. Если вы хотите удалить все сохраненные сообщения, вы также можете сделать это здесь.",

        settingsDataRetentionHowLongTitle: "Как долго бот будет хранить данные?",
        settingsDataRetentionHowLongDescription: "После этого количества дней бот удалит сохраненные сообщения для этого канала. Но чем больше контекста = тем лучше мемы.",

        settingsDataRetentionHowLongOption2DaysTitle: "2 дня",
        settingsDataRetentionHowLongOption2DaysDescription: "Для очень активных каналов",

        settingsDataRetentionHowLongOption7DaysTitle: "7 дней",
        settingsDataRetentionHowLongOption7DaysDescription: "Для активных каналов",

        settingsDataRetentionHowLongOption14DaysTitle: "14 дней",
        settingsDataRetentionHowLongOption14DaysDescription: "Для каналов со средней активностью (рекомендуется)",

        settingsDataRetentionHowLongOption30DaysTitle: "30 дней",
        settingsDataRetentionHowLongOption30DaysDescription: "Для каналов с низкой активностью",

        settingsDataRetentionUserImagesTitle: "Использовать ли отправленные картинки в мемах?",
        settingsDataRetentionUserImagesDescription: "Если включено, то иногда вместо аватаров будут использоваться отправленные картинки. Но только отправленные не более 24 часов назад. __Не может быть отключено из-за новых ограничений Intents у дискорда, будет исправлено скоро.__",

        settingsFooterChannelId: "ID канала:",

        settingsStatusEnabled: "🟢 Бот **включен** и работает в этом канале!",
        settingsStatusDisabled: "🔴 Бот **выключен** в этом канале!",

        notEnoughContextTitle: "Недостаточно данных",
        notEnoughContextDescription: "Бот не смог сгенерировать текст для мема. Скорее всего у него не хватает данных для обучения. Попробуйте сгенерировать мем ещё раз после отправки **{{amount}}** сообщений.",

        noPermissionsTitle: "У вас нет прав",
        noPermissionsDescription: "Вы должны иметь доступ к **{{permission}}**, чтобы использовать эту команду.",

        enableDescription: "Вы можете изменить это нажав на кнопку под сообщением. Намного больше параметров доступны в меню настроек.",


        premiumTitle: "Премиум",
        premiumDescription: "Вы можете поддержать разработку этого бота, подписавшись на премиум. Этот сервер получит доступ к **персонализации бота**, **возможности связывать каналы** и некоторым другим функциям, которые вы можете увидеть ниже.\n\nВсе пользователи на этом сервере получат **Премиум** возможности. Даже если только один человек подпишется.",
        premiumDescriptionSettingsVariant: "Вы можете поддержать разработку этого бота, подписавшись на премиум. Этот сервер получит доступ к **персонализации бота**, **возможности связывать каналы** и некоторым другим функциям. Больше возможностей уже в пути!\n\nВсе пользователи на этом сервере получат **Премиум** возможности. Даже если только один человек подпишется.",
        premiumStatusActive: "Премиум **активен** на этом сервере!",
        premiumStatusInactive: "Премиум **не активен** на этом сервере.",

        premiumCustomizationTitle: "Больше персонализации",
        premiumCustomizationDescription: "Эти функции дадут вам больше контроля над тем, как бот выглядит и ведет себя в этом канале. Функции изолированы на уровне канала, поэтому вы можете иметь разные настройки в разных каналах.",

        premiumSetOwnWatermarkTitle: "Собственный водяной знак",
        premiumSetOwnWatermarkDescription: "По умолчанию на мемах нет вообще никаких водяных знаков, но с премиумом вы можете установить собственный логотип сервера на мемах. Он будет размещен в правом нижнем углу.",
        premiumSetOwnWatermarkActive: "✔️  Собственный водяной знак **установлен**!",
        premiumSetOwnWatermarkInactive: "❌  Водяной знак не установлен",

        premiumLinkChannelsTogetherTitle: "Связать каналы",
        premiumLinkChannelsTogetherDescription: "Если вы не хотите засорять общий чат мемами, вы можете привязать канал для \"флуда\". Бот будет работать там с данными из этого канала, так что он сможет генерировать мемы на основе контекста этого канала.",
        premiumLinkChannelsTogetherActive: "✔️  <#{{thischannel}}> и <#{{floodchannel}}> **связаны**!",
        premiumLinkChannelsTogetherInactive: "❌  Каналы не связаны",
        premiumSelectChannelPlaceholder: "🔗  Выберите канал для связи",

        premiumTurnOffMentionsTitle: "Отключить @упоминания в текстовых мемах",
        premiumTurnOffMentionsDescription: "По умолчанию бот может в некоторых случаях упоминать пользователей в текстовых мемах. Хотя упоминания @everyone и @here всегда отключены даже в бесплатной версии.",
        premiumTurnOffMentionsActive: "✔️  Упоминания **заменяются** в текстовых мемах!",
        premiumTurnOffMentionsInactive: "❌  Упоминания **не заменяются** в текстовых мемах",

        btnDisable: "Отключить",
        btnEnable: "Включить",
        btnEraseData: "Очистить данные",
        btnSettings: "Настройки",
        btnPremiumActive: "Премиум активен!",
        btnManagePremium: "Настройки премиума",
        btnLearnMore: "Узнать больше",
        btnTurnOn: "Включить",
        btnTurnOff: "Выключить",
        btnLink: "Связать каналы",
        btnLinkBelow: "Используйте меню ниже для связи каналов",
        btnUnlink: "Отвязать каналы",
        btnSetWatermark: "Установить водяной знак",
        btnRemoveWatermark: "Убрать водяной знак",

        loading: "Загрузка...",

        yes: "Да",
        no: "Нет",
    },
    dutch: {
        settingsTitle: "Instellingen",
        settingsDescription: "Hier kun je het gedrag van de bot in deze kanaal aanpassen.",

        settingsMemesTitle: "Meme's in de chat",
        settingsMemesDescription: "In deze sectie kun je de meme's aanpassen die de bot in de chat zal sturen zonder dat erom gevraagd wordt.",
        settingsMemesFrequencyTitle: "Frequentie",
        settingsMemesFrequencyDescription: "Hoe vaak moet de bot een meme in de chat sturen zonder dat erom gevraagd wordt?",

        settingsMemesFrequencyOptionNeverTitle: "Nooit",
        settingsMemesFrequencyOptionNeverDescription: "Stuur geen meme's, tenzij erom gevraagd wordt via een command",

        settingsMemesFrequencyOptionHardlyEverTitle: "Zeer zelden",
        settingsMemesFrequencyOptionHardlyEverDescription: "Een keer in de ~100 berichten",

        settingsMemesFrequencyOptionRarelyTitle: "Zelden",
        settingsMemesFrequencyOptionRarelyDescription: "Een keer in de ~50 berichten",

        settingsMemesFrequencyOptionSometimesTitle: "Soms",
        settingsMemesFrequencyOptionSometimesDescription: "Een keer in de ~20 berichten (aanbevolen)",

        settingsMemesFrequencyOptionOftenTitle: "Vaak",
        settingsMemesFrequencyOptionOftenDescription: "Een keer in de ~10 berichten",

        settingsMemesTemplatesTitle: "Welke meme's worden er gestuurd?",
        settingsMemesTemplatesDescription: "Je kunt kiezen welke meme's je wilt zien in de chat. Je kunt ook sommige meme's uitschakelen als je ze niet leuk vindt.",

        settingsMemesTemplatesOptionWojakPointingTitle: "Wojak wijst",
        settingsMemesTemplatesOptionUncannyTitle: "Uncanny",
        settingsMemesTemplatesOptionSteppedInShitTitle: "In de stront gestapt",
        settingsMemesTemplatesOptionSpeechbubbleTitle: "Speechbubble",
        settingsMemesTemplatesOptionLooksAtPaperAngryTitle: "Kijkt boos naar papier",
        settingsMemesTemplatesOptionFancyBearTitle: "Winnie de Poeh",
        settingsMemesTemplatesOptionCycleTitle: "Cycle",
        settingsMemesTemplatesOptionGreentextTitle: "Greentext",
        settingsMemesTemplatesOptionIsThisAPigeonTitle: "Is dit een vogel?",
        settingsMemesTemplatesOptionYesChadTitle: "Ja Chad",
        settingsMemesTemplatesOptionTextingTitle: "Texting",
        settingsMemesTemplatesOptionConnorTitle: "Connor",
        settingsMemesTemplatesOptionBigThumbsUpTitle: "Duim omhoog",
        settingsMemesTemplatesOptionBuzzTitle: "Buzz",
        settingsMemesTemplatesOptionSpongebobTitle: "SpongeBob",
        settingsMemesTemplatesOptionCryingTitle: "Huilen",
        settingsMemesTemplatesOptionAbsoluteCinemaTitle: "Absoluut cinema",

        settingsDataRetentionTitle: "Gegevensbewaring",
        settingsDataRetentionDescription: "Je kunt kiezen hoe lang de bot gegevens met betrekking tot dit kanaal bewaart. Als je alle gegevens wilt wissen, kun je dat hier ook doen.",

        settingsDataRetentionHowLongTitle: "Hoe lang moet de bot de gegevens bewaren?",
        settingsDataRetentionHowLongDescription: "Na dit aantal dagen zal de bot opgeslagen berichten voor dit kanaal verwijderen. Meer context = betere meme's.",

        settingsDataRetentionHowLongOption2DaysTitle: "2 dagen",
        settingsDataRetentionHowLongOption2DaysDescription: "Voor zeer actieve kanalen",

        settingsDataRetentionHowLongOption7DaysTitle: "7 dagen",
        settingsDataRetentionHowLongOption7DaysDescription: "Voor actieve kanalen",

        settingsDataRetentionHowLongOption14DaysTitle: "14 dagen",
        settingsDataRetentionHowLongOption14DaysDescription: "Voor kanalen met gemiddelde activiteit (aanbevolen)",

        settingsDataRetentionHowLongOption30DaysTitle: "30 dagen",
        settingsDataRetentionHowLongOption30DaysDescription: "Voor kanalen met lage activiteit",

        settingsDataRetentionUserImagesTitle: "Kan de bot verzonden afbeeldingen gebruiken in meme's?",
        settingsDataRetentionUserImagesDescription: "Als dit is ingesteld op **ja**, zal de bot soms in plaats van avatars afbeeldingen gebruiken die door gebruikers zijn verzonden. Alleen afbeeldingen die niet ouder zijn dan 24 uur worden gebruikt. __Kan niet worden uitgeschakeld vanwege nieuwe Intents beperkingen, wordt binnenkort opgelost.__",

        settingsFooterChannelId: "Kanaal ID:",

        settingsStatusEnabled: "🟢 Bot is **aan** en werkt in dit kanaal!",
        settingsStatusDisabled: "🔴 Bot is **uit** in dit kanaal!",

        notEnoughContextTitle: "Niet genoeg trainingsdata",
        notEnoughContextDescription: "De bot kon geen tekst genereren voor de meme. Dit kan komen doordat er niet genoeg trainingsdata is. Probeer het opnieuw nadat je nog ongeveer **{{amount}}** berichten hebt verzonden.",

        noPermissionsTitle: "Je hebt geen rechten om dit te doen",
        noPermissionsDescription: "Je moet de **{{permission}}** recht hebben om deze command te gebruiken.",

        enableDescription: "Je kunt dit wijzigen door op de knop onder het bericht te klikken. Er zijn nog veel meer parameters beschikbaar in het instellingenmenu.",

        premiumTitle: "Premium",
        premiumDescription: "Je kunt de ontwikkeling van deze bot ondersteunen door deze server te abonneren op premium. Deze server krijgt toegang tot **meer personalizatie**, **de mogelijkheid om kanalen aan elkaar te koppelen** en enkele andere functies, die je hieronder kunt zien.\n\nIedereen op deze server krijgt **Premium** voordelen, zelfs als maar een persoon zich abonneert.",
        premiumDescriptionSettingsVariant: "Je kunt de ontwikkeling van deze bot ondersteunen door deze server te abonneren op premium. Deze server krijgt toegang tot **meer personalizatie**, **de mogelijkheid om kanalen aan elkaar te koppelen** en enkele andere functies. Meer dingen komen binnenkort!\n\nIedereen op deze server krijgt **Premium** voordelen, zelfs als maar een persoon zich abonneert.",

        premiumStatusActive: "Premium is **actief** op deze server!",
        premiumStatusInactive: "Premium is **niet actief** op deze server.",

        premiumCustomizationTitle: "Meer personalisatie",
        premiumCustomizationDescription: "Deze functies geven je meer controle over hoe de bot eruit ziet en zich gedraagt in dit kanaal. Functies zijn geïsoleerd op het niveau van het kanaal, zodat je verschillende instellingen kunt hebben in verschillende kanalen.",

        premiumSetOwnWatermarkTitle: "Stel je eigen watermerk in",
        premiumSetOwnWatermarkDescription: "Standaard zijn er geen watermerken op meme's, maar met premium kun je je eigen serverlogo instellen als watermerk op meme's. Het wordt geplaatst in de rechterbenedenhoek van de meme.",
        premiumSetOwnWatermarkActive: "✔️  Je eigen watermerk is **ingesteld**!",
        premiumSetOwnWatermarkInactive: "❌  Geen watermerk ingesteld",

        premiumLinkChannelsTogetherTitle: "Koppel kanalen samen",
        premiumLinkChannelsTogetherDescription: "Als je je algemene chat niet wilt vervuilen met meme's, kun je een \"flood\" kanaal koppelen. De bot zal daar werken met trainingsdata van dit kanaal, zodat het memes kan genereren op basis van de context van dit kanaal.",
        premiumLinkChannelsTogetherActive: "✔️  <#{{thischannel}}> en <#{{floodchannel}}> zijn **gekoppeld**!",
        premiumLinkChannelsTogetherInactive: "❌  Geen kanaal gekoppeld",
        premiumSelectChannelPlaceholder: "🔗  Selecteer kanaal om te koppelen",

        premiumTurnOffMentionsTitle: "Schakel @mentions uit in tekst meme's",
        premiumTurnOffMentionsDescription: "Standaard kan de bot in sommige gevallen gebruikers vermelden in tekst meme's. Hoewel @everyone en @here vermeldingen altijd zijn uitgeschakeld, zelfs in de gratis versie.",
        premiumTurnOffMentionsActive: "✔️  Mentions worden **vervangen** in tekst meme's!",
        premiumTurnOffMentionsInactive: "❌  Mentions worden **niet vervangen** in tekst meme's",

        btnDisable: "Uitzetten",
        btnEnable: "Aanzetten",
        btnEraseData: "Gegevens wissen",
        btnSettings: "Instellingen",
        btnPremiumActive: "Premium is actief!",
        btnManagePremium: "Premium instellingen",
        btnLearnMore: "Meer informatie",
        btnTurnOn: "Aanzetten",
        btnTurnOff: "Uitzetten",
        btnLink: "Kanalen koppelen",
        btnLinkBelow: "Gebruik onderstaand menu om kanalen te koppelen",
        btnUnlink: "Kanalen ontkoppelen",
        btnSetWatermark: "Watermerk instellen",
        btnRemoveWatermark: "Watermerk verwijderen",

        loading: "Loading...",

        yes: "Ja",
        no: "Nee",
    },
    ukrainian: {
        settingsTitle: "Налаштування",
        settingsDescription: "Тут ви можете змінити як працює бот у цьому каналі.",

        settingsMemesTitle: "Меми в чаті",
        settingsMemesDescription: "Тут ви можете налаштувати як і які меми бот буде надсилати в чат без запиту.",
        settingsMemesFrequencyTitle: "Частота",
        settingsMemesFrequencyDescription: "Як часто бот буде надсилати рандомний мем?",

        settingsMemesFrequencyOptionNeverTitle: "Ніколи",
        settingsMemesFrequencyOptionNeverDescription: "Не надсилати меми без запиту",

        settingsMemesFrequencyOptionHardlyEverTitle: "Дуже рідко",
        settingsMemesFrequencyOptionHardlyEverDescription: "Раз в ~100 повідомлень",

        settingsMemesFrequencyOptionRarelyTitle: "Рідко",
        settingsMemesFrequencyOptionRarelyDescription: "Раз в ~50 повідомлень",

        settingsMemesFrequencyOptionSometimesTitle: "Іноді",
        settingsMemesFrequencyOptionSometimesDescription: "Раз в ~20 повідомлень (рекомендується)",

        settingsMemesFrequencyOptionOftenTitle: "Часто",
        settingsMemesFrequencyOptionOftenDescription: "Раз в ~10 повідомлень",

        settingsMemesTemplatesTitle: "Які меми будуть надсилатися?",
        settingsMemesTemplatesDescription: "Ви можете вибрати які меми ви хочете бачити в чаті. Ви також можете вимкнути деякі з них, якщо вони вам не подобаються.",

        settingsMemesTemplatesOptionWojakPointingTitle: "Чел вказує пальцем",
        settingsMemesTemplatesOptionUncannyTitle: "Uncanny",
        settingsMemesTemplatesOptionSteppedInShitTitle: "Наступив в лайно",
        settingsMemesTemplatesOptionSpeechbubbleTitle: "Сказав щось",
        settingsMemesTemplatesOptionLooksAtPaperAngryTitle: "Дивиться на папір сердито",
        settingsMemesTemplatesOptionFancyBearTitle: "Вінні Пух",
        settingsMemesTemplatesOptionCycleTitle: "Цикл",
        settingsMemesTemplatesOptionGreentextTitle: "Гринтекст",
        settingsMemesTemplatesOptionIsThisAPigeonTitle: "Це голуб?",
        settingsMemesTemplatesOptionYesChadTitle: "Так Чад",
        settingsMemesTemplatesOptionTextingTitle: "Пише новини",
        settingsMemesTemplatesOptionConnorTitle: "Коннор",
        settingsMemesTemplatesOptionBigThumbsUpTitle: "Молодець, великий палець вгору",
        settingsMemesTemplatesOptionBuzzTitle: "Баззлайтер",
        settingsMemesTemplatesOptionSpongebobTitle: "Губка Боб",
        settingsMemesTemplatesOptionCryingTitle: "Плаче",
        settingsMemesTemplatesOptionAbsoluteCinemaTitle: "Абсолютне кіно",

        settingsDataRetentionTitle: "Зберігання даних",
        settingsDataRetentionDescription: "Ви можете вибрати як довго бот буде зберігати дані, пов'язані з цим каналом. Якщо ви хочете видалити всі збережені повідомлення, ви також можете зробити це тут.",

        settingsDataRetentionHowLongTitle: "Як довго бот буде зберігати дані?",
        settingsDataRetentionHowLongDescription: "Після цього часу бот видалить збережені повідомлення для цього каналу. Але чим більше контексту = тим кращі меми.",

        settingsDataRetentionHowLongOption2DaysTitle: "2 дні",
        settingsDataRetentionHowLongOption2DaysDescription: "Для дуже активних каналів",

        settingsDataRetentionHowLongOption7DaysTitle: "7 днів",
        settingsDataRetentionHowLongOption7DaysDescription: "Для активних каналів",

        settingsDataRetentionHowLongOption14DaysTitle: "14 днів",
        settingsDataRetentionHowLongOption14DaysDescription: "Для каналів із середньою активністю (рекомендується)",

        settingsDataRetentionHowLongOption30DaysTitle: "30 днів",
        settingsDataRetentionHowLongOption30DaysDescription: "Для каналів з низькою активністю",

        settingsDataRetentionUserImagesTitle: "Використовувати чи ні надіслані зображення в мемах?",
        settingsDataRetentionUserImagesDescription: "Якщо встановлено **так**, то іноді замість аватарів будуть використовуватися надіслані зображення. Але тільки ті, що були надіслані не більше 24 годин тому. __Не може бути відключено через нові обмеження Intents, буде виправлено незабаром.__",

        settingsFooterChannelId: "ID каналу:",

        settingsStatusEnabled: "🟢 Бот **увімкнений** і працює в цьому каналі!",
        settingsStatusDisabled: "🔴 Бот **вимкнений** в цьому каналі!",

        notEnoughContextTitle: "Недостатньо даних",
        notEnoughContextDescription: "Бот не зміг згенерувати текст для мему. Це може бути через те, що у нього недостатньо даних. Спробуйте ще раз після відправки приблизно **{{amount}}** повідомлень.",

        noPermissionsTitle: "У вас немає прав",
        noPermissionsDescription: "Вам потрібно **{{permission}}** право, щоб використати цю команду.",

        enableDescription: "Ви можете змінити це натиснувши на кнопку під повідомленням. Набагато більше параметрів доступні в меню налаштувань.",

        premiumTitle: "Преміум",
        premiumDescription: "Ви можете підтримати розробку цього бота підписавшись на преміум. Цей сервер отримає доступ до **більшої персоналізації**, **можливості пов'язувати канали** та деяких інших функцій, які ви можете побачити нижче.\n\nВсі користувачі на цьому сервері отримають **Преміум** можливості. Навіть якщо тільки одна людина підпишеться.",
        premiumDescriptionSettingsVariant: "Ви можете підтримати розробку цього бота підписавшись на преміум. Цей сервер отримає доступ до **більшої персоналізації**, **можливості пов'язувати канали** та деяких інших функцій. Більше можливостей вже в дорозі!\n\nВсі користувачі на цьому сервері отримають **Преміум** можливості. Навіть якщо тільки одна людина підпишеться.",

        premiumStatusActive: "Преміум **активний** на цьому сервері!",
        premiumStatusInactive: "Преміум **не активний** на цьому сервері.",

        premiumCustomizationTitle: "Більше персоналізації",
        premiumCustomizationDescription: "Ці функції дадуть вам більше контролю над тим, як бот виглядає і поводиться в цьому каналі. Функції ізольовані на рівні каналу, тому ви можете мати різні налаштування в різних каналах.",

        premiumSetOwnWatermarkTitle: "Встановити власний водяний знак",
        premiumSetOwnWatermarkDescription: "За замовчуванням на мемах немає водяних знаків, але з преміумом ви можете встановити власний логотип сервера як водяний знак на мемах. Він буде розміщений у правому нижньому куті мему.",
        premiumSetOwnWatermarkActive: "✔️  Власний водяний знак **встановлено**!",
        premiumSetOwnWatermarkInactive: "❌  Водяний знак не встановлено",

        premiumLinkChannelsTogetherTitle: "Зв'язати канали разом",
        premiumLinkChannelsTogetherDescription: "Якщо ви не хочете засмічувати загальний чат мемами, ви можете прив'язати канал для \"флуду\". Бот буде працювати там з даними з цього каналу, тому він зможе генерувати меми на основі контексту цього каналу.",
        premiumLinkChannelsTogetherActive: "✔️  <#{{thischannel}}> та <#{{floodchannel}}> **пов'язані**!",
        premiumLinkChannelsTogetherInactive: "❌  Канали не пов'язані",
        premiumSelectChannelPlaceholder: "🔗  Оберіть канал для зв'язку",

        premiumTurnOffMentionsTitle: "Вимкнути @згадування в текстових мемах",
        premiumTurnOffMentionsDescription: "За замовчуванням бот може в деяких випадках згадувати користувачів у текстових мемах. Хоча @everyone і @here згадки завжди вимкнені навіть у безкоштовній версії.",
        premiumTurnOffMentionsActive: "✔️  Згадування **замінюються** в текстових мемах!",
        premiumTurnOffMentionsInactive: "❌  Згадування **не замінюються** в текстових мемах",

        btnDisable: "Вимкнути",
        btnEnable: "Увімкнути",
        btnEraseData: "Очистити дані",
        btnSettings: "Налаштування",
        btnPremiumActive: "Преміум активний!",
        btnManagePremium: "Налаштування преміум",
        btnLearnMore: "Дізнатися більше",
        btnTurnOn: "Увімкнути",
        btnTurnOff: "Вимкнути",
        btnLink: "Зв'язати канали",
        btnLinkBelow: "Використовуйте меню нижче для зв'язку каналів",
        btnUnlink: "Розв'язати канали",
        btnSetWatermark: "Встановити водяний знак",
        btnRemoveWatermark: "Видалити водяний знак",

        loading: "Загрузка...",

        yes: "Так",
        no: "Ні",
    },
}