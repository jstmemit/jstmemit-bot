import { Locale, type LocalizationMap } from "discord.js";
import { buildLocales } from "#/helpers/buildLocales.ts";

export const locale: Record<string, LocalizationMap> = {
    "enable.heading.enabled": buildLocales("🎉 I'm ready to make memes!", {
        [Locale.Russian]: "🎉 Я готов делать мемы!",
        [Locale.Ukrainian]: "🎉 Я готовий робити меми!",
        [Locale.Dutch]: "🎉 Ik ben klaar om memes te maken!",
        [Locale.French]: "🎉 Je suis prêt à faire des mèmes !",
        [Locale.German]: "🎉 Ich bin bereit, Memes zu machen!",
        [Locale.Polish]: "🎉 Jestem gotowy robić memy!",
        [Locale.SpanishES]: "🎉 ¡Estoy listo para hacer memes!",
        [Locale.SpanishLATAM]: "🎉 ¡Estoy listo para hacer memes!",
        [Locale.PortugueseBR]: "🎉 Estou pronto para fazer memes!",
        [Locale.Turkish]: "🎉 Caps yapmaya hazırım!",
        [Locale.Italian]: "🎉 Sono pronto a fare meme!",
        [Locale.Indonesian]: "🎉 Aku siap bikin meme!",
        [Locale.Czech]: "🎉 Jsem připravený dělat memy!",
    }),
    "enable.heading.disabled": buildLocales("🔻 Allow making memes in <#{{channelId}}>?", {
        [Locale.Russian]: "🔻 Разрешить делать мемы в <#{{channelId}}>?",
        [Locale.Ukrainian]: "🔻 Дозволити робити меми в <#{{channelId}}>?",
        [Locale.Dutch]: "🔻 Memes maken in <#{{channelId}}> toestaan?",
        [Locale.French]: "🔻 Autoriser les mèmes dans <#{{channelId}}> ?",
        [Locale.German]: "🔻 Memes in <#{{channelId}}> erlauben?",
        [Locale.Polish]: "🔻 Pozwolić robić memy na <#{{channelId}}>?",
        [Locale.SpanishES]: "🔻 ¿Permitir hacer memes en <#{{channelId}}>?",
        [Locale.SpanishLATAM]: "🔻 ¿Permitir hacer memes en <#{{channelId}}>?",
        [Locale.PortugueseBR]: "🔻 Permitir fazer memes em <#{{channelId}}>?",
        [Locale.Turkish]: "🔻 <#{{channelId}}> kanalında caps yapmaya izin veriyor musun?",
        [Locale.Italian]: "🔻 Permettere di fare meme in <#{{channelId}}>?",
        [Locale.Indonesian]: "🔻 Izinkan bikin meme di <#{{channelId}}>?",
        [Locale.Czech]: "🔻 Povolit dělat memy v <#{{channelId}}>?",
    }),
    "enable.body.enabled": buildLocales(
        "I'll send memes into **<#{{channelId}}>** during active chats from now on. They will get more personalized as you send more messages, images and GIFs. Once I have **30+ messages** in memory, words in sentences will get mixed for more fun.",
        {
            [Locale.Russian]:
                "Теперь я буду присылать мемы в **<#{{channelId}}>** во время активных разговоров. Чем больше сообщений, картинок и GIF вы отправите, тем более личными они станут. Когда у меня будет **30+ сообщений** в памяти, слова в предложениях начнут перемешиваться, так веселее.",
            [Locale.Ukrainian]:
                "Тепер я надсилатиму меми в **<#{{channelId}}>** під час активних розмов. Що більше повідомлень, картинок і GIF ви надішлете, то особистішими вони стануть. Коли в мене буде **30+ повідомлень** у пам'яті, слова в реченнях почнуть перемішуватися, так веселіше.",
            [Locale.Dutch]:
                "Vanaf nu stuur ik memes in **<#{{channelId}}>** tijdens actieve gesprekken. Ze worden persoonlijker naarmate jullie meer berichten, afbeeldingen en GIFs sturen. Zodra ik **30+ berichten** in mijn geheugen heb, ga ik woorden in zinnen door elkaar husselen, dat is leuker.",
            [Locale.French]:
                "À partir de maintenant, j'enverrai des mèmes dans **<#{{channelId}}>** pendant les conversations actives. Ils deviendront plus personnels au fur et à mesure que vous enverrez des messages, des images et des GIF. Dès que j'aurai **30+ messages** en mémoire, je mélangerai les mots dans les phrases, c'est plus drôle.",
            [Locale.German]:
                "Ab jetzt schicke ich Memes in **<#{{channelId}}>**, wenn dort gerade was los ist. Sie werden persönlicher, je mehr Nachrichten, Bilder und GIFs ihr schickt. Sobald ich **30+ Nachrichten** im Speicher habe, mische ich die Wörter in den Sätzen durch, das macht mehr Spaß.",
            [Locale.Polish]:
                "Od teraz będę wysyłać memy na **<#{{channelId}}>** podczas aktywnych rozmów. Będą coraz bardziej osobiste, im więcej wiadomości, obrazków i GIF-ów wyślecie. Gdy będę mieć **30+ wiadomości** w pamięci, zacznę mieszać słowa w zdaniach, tak jest zabawniej.",
            [Locale.SpanishES]:
                "A partir de ahora enviaré memes en **<#{{channelId}}>** durante las conversaciones activas. Se irán volviendo más personales cuantos más mensajes, imágenes y GIF enviéis. Cuando tenga **30+ mensajes** en memoria, empezaré a mezclar las palabras de las frases, así tiene más gracia.",
            [Locale.SpanishLATAM]:
                "A partir de ahora voy a enviar memes en **<#{{channelId}}>** durante las conversaciones activas. Se van a volver más personales mientras más mensajes, imágenes y GIF envíen. Cuando tenga **30+ mensajes** en memoria, voy a empezar a mezclar las palabras de las frases, así es más divertido.",
            [Locale.PortugueseBR]:
                "A partir de agora vou mandar memes em **<#{{channelId}}>** durante as conversas ativas. Eles vão ficando mais pessoais conforme vocês mandam mais mensagens, imagens e GIFs. Quando eu tiver **30+ mensagens** na memória, vou começar a misturar as palavras das frases, fica mais engraçado.",
            [Locale.Turkish]:
                "Bundan sonra sohbet hareketliyken **<#{{channelId}}>** kanalına caps göndereceğim. Ne kadar çok mesaj, görsel ve GIF gönderirseniz o kadar kişisel olacaklar. Hafızamda **30+ mesaj** olunca cümlelerdeki kelimeleri karıştırmaya başlayacağım, böylesi daha eğlenceli.",
            [Locale.Italian]:
                "Da adesso manderò meme in **<#{{channelId}}>** durante le conversazioni attive. Diventeranno più personali man mano che mandate messaggi, immagini e GIF. Quando avrò **30+ messaggi** in memoria, inizierò a mescolare le parole nelle frasi, così è più divertente.",
            [Locale.Indonesian]:
                "Mulai sekarang aku akan mengirim meme ke **<#{{channelId}}>** saat obrolan sedang ramai. Meme akan makin personal seiring kalian mengirim lebih banyak pesan, gambar, dan GIF. Begitu aku punya **30+ pesan** di memori, kata-kata dalam kalimat akan mulai diacak, lebih seru begitu.",
            [Locale.Czech]:
                "Od teď budu posílat memy do **<#{{channelId}}>**, když se tam bude něco dít. Budou osobnější, čím víc zpráv, obrázků a GIFů pošlete. Až budu mít v paměti **30+ zpráv**, začnu míchat slova ve větách, tak je to zábavnější.",
        },
    ),
    "enable.body.disabled.ready": buildLocales(
        "You already have over **{{messagesAmount}} messages** in memory, so Jstmemit is ready to make memes. Just turn the bot back on and it'll start generating them during active chats.",
        {
            [Locale.Russian]:
                "У вас уже больше **{{messagesAmount}} сообщений** в памяти, так что Jstmemit готов делать мемы. Просто включите бота обратно, и он начнёт генерировать их во время активных разговоров.",
            [Locale.Ukrainian]:
                "У вас уже понад **{{messagesAmount}} повідомлень** у пам'яті, тож Jstmemit готовий робити меми. Просто увімкніть бота назад, і він почне генерувати їх під час активних розмов.",
            [Locale.Dutch]:
                "Je hebt al meer dan **{{messagesAmount}} berichten** in het geheugen, dus Jstmemit kan meteen memes maken. Zet de bot gewoon weer aan en hij begint ze te maken tijdens actieve gesprekken.",
            [Locale.French]:
                "Vous avez déjà plus de **{{messagesAmount}} messages** en mémoire, donc Jstmemit est prêt à faire des mèmes. Réactivez simplement le bot et il commencera à en générer pendant les conversations actives.",
            [Locale.German]:
                "Du hast schon über **{{messagesAmount}} Nachrichten** im Speicher, Jstmemit kann also sofort Memes machen. Schalte den Bot einfach wieder ein und er fängt bei aktiven Gesprächen an, welche zu generieren.",
            [Locale.Polish]:
                "Masz już ponad **{{messagesAmount}} wiadomości** w pamięci, więc Jstmemit jest gotowy robić memy. Po prostu włącz bota z powrotem, a zacznie je generować podczas aktywnych rozmów.",
            [Locale.SpanishES]:
                "Ya tienes más de **{{messagesAmount}} mensajes** en memoria, así que Jstmemit está listo para hacer memes. Solo tienes que volver a activar el bot y empezará a generarlos durante las conversaciones activas.",
            [Locale.SpanishLATAM]:
                "Ya tienes más de **{{messagesAmount}} mensajes** en memoria, así que Jstmemit está listo para hacer memes. Solo vuelve a activar el bot y va a empezar a generarlos durante las conversaciones activas.",
            [Locale.PortugueseBR]:
                "Você já tem mais de **{{messagesAmount}} mensagens** na memória, então o Jstmemit está pronto para fazer memes. É só religar o bot que ele começa a gerar memes durante as conversas ativas.",
            [Locale.Turkish]:
                "Hafızada zaten **{{messagesAmount}} mesajdan** fazlası var, yani Jstmemit caps yapmaya hazır. Botu tekrar açman yeterli, sohbet hareketliyken caps üretmeye başlayacak.",
            [Locale.Italian]:
                "Hai già più di **{{messagesAmount}} messaggi** in memoria, quindi Jstmemit è pronto a fare meme. Basta riaccendere il bot e inizierà a generarli durante le conversazioni attive.",
            [Locale.Indonesian]:
                "Kamu sudah punya lebih dari **{{messagesAmount}} pesan** di memori, jadi Jstmemit siap bikin meme. Tinggal nyalakan lagi botnya dan dia akan mulai membuat meme saat obrolan ramai.",
            [Locale.Czech]:
                "Máš už přes **{{messagesAmount}} zpráv** v paměti, takže Jstmemit může rovnou dělat memy. Stačí bota zase zapnout a začne je generovat, když se bude něco dít.",
        },
    ),
    "enable.body.disabled.notReady": buildLocales(
        "Hi! I'm the bot that makes memes from your chat. Talk about anything and I'll turn it into a meme on one of 660+ templates. Click on the button below and let's generate some memes!",
        {
            [Locale.Russian]:
                "Привет! Я бот, который делает мемы из вашего чата. Говорите о чём угодно, а я превращу это в мем на одном из 660+ шаблонов. Нажмите кнопку ниже, и давайте делать мемы!",
            [Locale.Ukrainian]:
                "Привіт! Я бот, який робить меми з вашого чату. Говоріть про що завгодно, а я перетворю це на мем на одному з 660+ шаблонів. Натисніть кнопку нижче, і почнімо робити меми!",
            [Locale.Dutch]:
                "Hoi! Ik ben de bot die memes maakt van jullie chat. Praat waar je maar over wilt en ik maak er een meme van op een van de 660+ templates. Klik op de knop hieronder en we gaan memes maken!",
            [Locale.French]:
                "Salut ! Je suis le bot qui fait des mèmes à partir de votre chat. Parlez de ce que vous voulez et j'en ferai un mème sur un de mes 660+ modèles. Cliquez sur le bouton ci-dessous et c'est parti !",
            [Locale.German]:
                "Hey! Ich bin der Bot, der Memes aus eurem Chat macht. Redet über was ihr wollt und ich mache daraus ein Meme auf einer von 660+ Vorlagen. Klick auf den Button unten und los geht's!",
            [Locale.Polish]:
                "Cześć! Jestem botem, który robi memy z waszego czatu. Gadajcie o czym chcecie, a ja zrobię z tego mema na jednym z 660+ szablonów. Kliknij przycisk poniżej i robimy memy!",
            [Locale.SpanishES]:
                "¡Hola! Soy el bot que hace memes de vuestro chat. Hablad de lo que queráis y lo convertiré en un meme con una de mis 660+ plantillas. ¡Pulsa el botón de abajo y vamos a hacer memes!",
            [Locale.SpanishLATAM]:
                "¡Hola! Soy el bot que hace memes de su chat. Hablen de lo que quieran y lo voy a convertir en un meme con una de mis 660+ plantillas. ¡Presiona el botón de abajo y vamos a hacer memes!",
            [Locale.PortugueseBR]:
                "Oi! Eu sou o bot que faz memes do seu chat. Falem do que quiserem que eu transformo isso em meme com um dos meus 660+ templates. Clica no botão aí embaixo e bora fazer meme!",
            [Locale.Turkish]:
                "Selam! Sohbetinizden caps üreten botum. Ne konuşursanız konuşun, onu 660'ten fazla şablondan biriyle capse çeviririm. Aşağıdaki butona tıkla ve caps yapmaya başlayalım!",
            [Locale.Italian]:
                "Ciao! Sono il bot che fa meme dalla vostra chat. Parlate di quello che vi pare e io lo trasformo in un meme con uno dei miei 660+ template. Clicca il pulsante qui sotto e facciamo un po' di meme!",
            [Locale.Indonesian]:
                "Halo! Aku bot yang bikin meme dari chat kalian. Ngobrolin apa saja dan aku akan mengubahnya jadi meme pakai salah satu dari 660+ template. Klik tombol di bawah dan ayo bikin meme!",
            [Locale.Czech]:
                "Ahoj! Jsem bot, který dělá memy z vašeho chatu. Bavte se o čemkoliv a já z toho udělám mem na jedné z 660+ šablon. Klikni na tlačítko níž a jdeme na to!",
        },
    ),
    "enable.body.checklist.inviteJstmemit": buildLocales("Invite Jstmemit to this server", {
        [Locale.Russian]: "Пригласить Jstmemit на этот сервер",
        [Locale.Ukrainian]: "Запросити Jstmemit на цей сервер",
        [Locale.Dutch]: "Jstmemit uitnodigen in deze server",
        [Locale.French]: "Inviter Jstmemit sur ce serveur",
        [Locale.German]: "Jstmemit auf diesen Server einladen",
        [Locale.Polish]: "Zaprosić Jstmemit na ten serwer",
        [Locale.SpanishES]: "Invitar a Jstmemit a este servidor",
        [Locale.SpanishLATAM]: "Invitar a Jstmemit a este servidor",
        [Locale.PortugueseBR]: "Convidar o Jstmemit para este servidor",
        [Locale.Turkish]: "Jstmemit'i bu sunucuya davet et",
        [Locale.Italian]: "Invitare Jstmemit in questo server",
        [Locale.Indonesian]: "Undang Jstmemit ke server ini",
        [Locale.Czech]: "Pozvat Jstmemit na tento server",
    }),
    "enable.body.checklist.givePermission": buildLocales("Give permission to read/send messages", {
        [Locale.Russian]: "Выдать права на чтение и отправку сообщений",
        [Locale.Ukrainian]: "Надати права на читання та надсилання повідомлень",
        [Locale.Dutch]: "Permissies geven om berichten te lezen en sturen",
        [Locale.French]: "Donner les permissions de lire et envoyer des messages",
        [Locale.German]: "Berechtigungen zum Lesen und Senden von Nachrichten geben",
        [Locale.Polish]: "Nadać uprawnienia do czytania i wysyłania wiadomości",
        [Locale.SpanishES]: "Dar permisos para leer y enviar mensajes",
        [Locale.SpanishLATAM]: "Dar permisos para leer y enviar mensajes",
        [Locale.PortugueseBR]: "Dar permissão para ler e enviar mensagens",
        [Locale.Turkish]: "Mesaj okuma ve gönderme izni ver",
        [Locale.Italian]: "Dare i permessi per leggere e inviare messaggi",
        [Locale.Indonesian]: "Beri izin membaca dan mengirim pesan",
        [Locale.Czech]: "Dát oprávnění číst a posílat zprávy",
    }),
    "enable.body.checklist.allowMakingMemes": buildLocales("Allow making memes in <#{{channelId}}>", {
        [Locale.Russian]: "Разрешить делать мемы в <#{{channelId}}>",
        [Locale.Ukrainian]: "Дозволити робити меми в <#{{channelId}}>",
        [Locale.Dutch]: "Memes maken toestaan in <#{{channelId}}>",
        [Locale.French]: "Autoriser les mèmes dans <#{{channelId}}>",
        [Locale.German]: "Memes in <#{{channelId}}> erlauben",
        [Locale.Polish]: "Pozwolić robić memy na <#{{channelId}}>",
        [Locale.SpanishES]: "Permitir hacer memes en <#{{channelId}}>",
        [Locale.SpanishLATAM]: "Permitir hacer memes en <#{{channelId}}>",
        [Locale.PortugueseBR]: "Permitir fazer memes em <#{{channelId}}>",
        [Locale.Turkish]: "<#{{channelId}}> kanalında caps yapmaya izin ver",
        [Locale.Italian]: "Permettere di fare meme in <#{{channelId}}>",
        [Locale.Indonesian]: "Izinkan bikin meme di <#{{channelId}}>",
        [Locale.Czech]: "Povolit dělat memy v <#{{channelId}}>",
    }),
    "enable.body.disabled.enableToStart": buildLocales(
        "You can always turn me off later or delete everything I've stored if you want to start fresh.",
        {
            [Locale.Russian]:
                "Меня всегда можно выключить позже или удалить всё, что я сохранил, если захотите начать с чистого листа.",
            [Locale.Ukrainian]:
                "Мене завжди можна вимкнути пізніше або видалити все, що я зберіг, якщо захочете почати з чистого аркуша.",
            [Locale.Dutch]:
                "Je kunt me later altijd weer uitzetten of alles wissen wat ik heb opgeslagen als je opnieuw wilt beginnen.",
            [Locale.French]:
                "Vous pouvez toujours me désactiver plus tard ou supprimer tout ce que j'ai gardé si vous voulez repartir de zéro.",
            [Locale.German]:
                "Du kannst mich später jederzeit wieder ausschalten oder alles löschen, was ich gespeichert habe, wenn du neu anfangen willst.",
            [Locale.Polish]:
                "Zawsze możesz mnie później wyłączyć albo usunąć wszystko, co zapisałem, jeśli chcesz zacząć od zera.",
            [Locale.SpanishES]:
                "Siempre puedes desactivarme más tarde o borrar todo lo que he guardado si quieres empezar de cero.",
            [Locale.SpanishLATAM]:
                "Siempre puedes desactivarme después o borrar todo lo que guardé si quieres empezar de cero.",
            [Locale.PortugueseBR]:
                "Você sempre pode me desligar depois ou apagar tudo que eu guardei se quiser começar do zero.",
            [Locale.Turkish]:
                "Beni istediğin zaman kapatabilir ya da sıfırdan başlamak istersen sakladığım her şeyi silebilirsin.",
            [Locale.Italian]:
                "Puoi sempre spegnermi più tardi o cancellare tutto quello che ho salvato se vuoi ricominciare da capo.",
            [Locale.Indonesian]:
                "Kamu selalu bisa mematikan aku nanti atau menghapus semua yang aku simpan kalau mau mulai dari awal.",
            [Locale.Czech]:
                "Kdykoliv mě můžeš zase vypnout nebo smazat všechno, co jsem si uložil, když budeš chtít začít znovu.",
        },
    ),
    "enable.memory.progress": buildLocales("Messages in memory: **{{messagesAmount}}**", {
        [Locale.Russian]: "Сообщений в памяти: **{{messagesAmount}}**",
        [Locale.Ukrainian]: "Повідомлень у пам'яті: **{{messagesAmount}}**",
        [Locale.Dutch]: "Berichten in geheugen: **{{messagesAmount}}**",
        [Locale.French]: "Messages en mémoire : **{{messagesAmount}}**",
        [Locale.German]: "Nachrichten im Speicher: **{{messagesAmount}}**",
        [Locale.Polish]: "Wiadomości w pamięci: **{{messagesAmount}}**",
        [Locale.SpanishES]: "Mensajes en memoria: **{{messagesAmount}}**",
        [Locale.SpanishLATAM]: "Mensajes en memoria: **{{messagesAmount}}**",
        [Locale.PortugueseBR]: "Mensagens na memória: **{{messagesAmount}}**",
        [Locale.Turkish]: "Hafızadaki mesajlar: **{{messagesAmount}}**",
        [Locale.Italian]: "Messaggi in memoria: **{{messagesAmount}}**",
        [Locale.Indonesian]: "Pesan di memori: **{{messagesAmount}}**",
        [Locale.Czech]: "Zpráv v paměti: **{{messagesAmount}}**",
    }),
    "enable.memory.full": buildLocales("Messages in memory: **{{messagesAmount}}**", {
        [Locale.Russian]: "Сообщений в памяти: **{{messagesAmount}}**",
        [Locale.Ukrainian]: "Повідомлень у пам'яті: **{{messagesAmount}}**",
        [Locale.Dutch]: "Berichten in geheugen: **{{messagesAmount}}**",
        [Locale.French]: "Messages en mémoire : **{{messagesAmount}}**",
        [Locale.German]: "Nachrichten im Speicher: **{{messagesAmount}}**",
        [Locale.Polish]: "Wiadomości w pamięci: **{{messagesAmount}}**",
        [Locale.SpanishES]: "Mensajes en memoria: **{{messagesAmount}}**",
        [Locale.SpanishLATAM]: "Mensajes en memoria: **{{messagesAmount}}**",
        [Locale.PortugueseBR]: "Mensagens na memória: **{{messagesAmount}}**",
        [Locale.Turkish]: "Hafızadaki mesajlar: **{{messagesAmount}}**",
        [Locale.Italian]: "Messaggi in memoria: **{{messagesAmount}}**",
        [Locale.Indonesian]: "Pesan di memori: **{{messagesAmount}}**",
        [Locale.Czech]: "Zpráv v paměti: **{{messagesAmount}}**",
    }),
    "enable.permissions.heading": buildLocales("Some permissions are missing!", {
        [Locale.Russian]: "Не хватает некоторых прав!",
        [Locale.Ukrainian]: "Бракує деяких прав!",
        [Locale.Dutch]: "Er ontbreken een paar permissies!",
        [Locale.French]: "Il manque quelques permissions !",
        [Locale.German]: "Ein paar Berechtigungen fehlen!",
        [Locale.Polish]: "Brakuje kilku uprawnień!",
        [Locale.SpanishES]: "¡Faltan algunos permisos!",
        [Locale.SpanishLATAM]: "¡Faltan algunos permisos!",
        [Locale.PortugueseBR]: "Estão faltando algumas permissões!",
        [Locale.Turkish]: "Bazı izinler eksik!",
        [Locale.Italian]: "Mancano alcuni permessi!",
        [Locale.Indonesian]: "Ada beberapa izin yang belum diberikan!",
        [Locale.Czech]: "Chybí nějaká oprávnění!",
    }),
    "enable.permissions.description": buildLocales(
        "Bot needs a couple permissions to work, such as **Attach Files** to be able to send the memes it generated, **View Channel** to get context for the memes or **Embed links** for the {{settings}} menu to work properly:\n",
        {
            [Locale.Russian]:
                "Боту нужна пара прав для работы, например **Прикреплять файлы**, чтобы отправлять сделанные мемы, **Просмотр канала**, чтобы получать контекст для мемов, или **Встраивать ссылки**, чтобы меню {{settings}} работало нормально:\n",
            [Locale.Ukrainian]:
                "Боту потрібна пара прав для роботи, наприклад **Прикріплювати файли**, щоб надсилати зроблені меми, **Переглядати канал**, щоб отримувати контекст для мемів, або **Вставляти посилання**, щоб меню {{settings}} працювало нормально:\n",
            [Locale.Dutch]:
                "De bot heeft een paar permissies nodig om te werken, zoals **Bestanden bijvoegen** om de memes die hij maakt te kunnen sturen, **Kanaal bekijken** om context voor de memes op te halen of **Links insluiten** zodat het {{settings}} menu goed werkt:\n",
            [Locale.French]:
                "Le bot a besoin de quelques permissions pour fonctionner, comme **Joindre des fichiers** pour pouvoir envoyer les mèmes qu'il génère, **Voir le salon** pour récupérer du contexte pour les mèmes ou **Intégrer des liens** pour que le menu {{settings}} marche correctement :\n",
            [Locale.German]:
                "Der Bot braucht ein paar Berechtigungen, um zu funktionieren, zum Beispiel **Dateien anhängen**, um die erstellten Memes senden zu können, **Kanal anzeigen**, um Kontext für die Memes zu bekommen, oder **Links einbetten**, damit das {{settings}} Menü richtig funktioniert:\n",
            [Locale.Polish]:
                "Bot potrzebuje kilku uprawnień, żeby działać, na przykład **Załączanie plików**, żeby móc wysyłać zrobione memy, **Wyświetlanie kanału**, żeby mieć kontekst do memów, albo **Osadzanie linków**, żeby menu {{settings}} działało poprawnie:\n",
            [Locale.SpanishES]:
                "El bot necesita un par de permisos para funcionar, como **Adjuntar archivos** para poder enviar los memes que genera, **Ver canal** para obtener contexto para los memes o **Insertar enlaces** para que el menú {{settings}} funcione bien:\n",
            [Locale.SpanishLATAM]:
                "El bot necesita un par de permisos para funcionar, como **Adjuntar archivos** para poder enviar los memes que genera, **Ver canal** para obtener contexto para los memes o **Insertar enlaces** para que el menú {{settings}} funcione bien:\n",
            [Locale.PortugueseBR]:
                "O bot precisa de algumas permissões para funcionar, como **Anexar arquivos** para conseguir enviar os memes que ele gera, **Ver canal** para pegar contexto para os memes ou **Inserir links** para o menu {{settings}} funcionar direito:\n",
            [Locale.Turkish]:
                "Botun çalışması için birkaç izne ihtiyacı var, örneğin ürettiği capsleri gönderebilmek için **Dosya Ekle**, capsler için bağlam alabilmek için **Kanalı Görüntüle** ya da {{settings}} menüsünün düzgün çalışması için **Bağlantı Yerleştir**:\n",
            [Locale.Italian]:
                "Al bot servono un paio di permessi per funzionare, come **Allega file** per poter inviare i meme che genera, **Visualizza canale** per avere contesto per i meme o **Incorpora link** perché il menu {{settings}} funzioni bene:\n",
            [Locale.Indonesian]:
                "Bot butuh beberapa izin supaya bisa jalan, misalnya **Lampirkan File** untuk bisa mengirim meme yang dibuatnya, **Lihat Channel** untuk mendapat konteks meme, atau **Sematkan Tautan** supaya menu {{settings}} berfungsi dengan benar:\n",
            [Locale.Czech]:
                "Bot potřebuje pár oprávnění, aby fungoval, třeba **Připojovat soubory**, aby mohl posílat vytvořené memy, **Zobrazit kanál**, aby měl kontext pro memy, nebo **Vkládat odkazy**, aby menu {{settings}} fungovalo správně:\n",
        },
    ),
    "enable.permissions.sendMessages": buildLocales("Send Messages", {
        [Locale.Russian]: "Отправлять сообщения",
        [Locale.Ukrainian]: "Надсилати повідомлення",
        [Locale.Dutch]: "Berichten verzenden",
        [Locale.French]: "Envoyer des messages",
        [Locale.German]: "Nachrichten senden",
        [Locale.Polish]: "Wysyłanie wiadomości",
        [Locale.SpanishES]: "Enviar mensajes",
        [Locale.SpanishLATAM]: "Enviar mensajes",
        [Locale.PortugueseBR]: "Enviar mensagens",
        [Locale.Turkish]: "Mesaj Gönder",
        [Locale.Italian]: "Invia messaggi",
        [Locale.Indonesian]: "Kirim Pesan",
        [Locale.Czech]: "Posílat zprávy",
    }),
    "enable.permissions.attachFiles": buildLocales("Attach Files", {
        [Locale.Russian]: "Прикреплять файлы",
        [Locale.Ukrainian]: "Прикріплювати файли",
        [Locale.Dutch]: "Bestanden bijvoegen",
        [Locale.French]: "Joindre des fichiers",
        [Locale.German]: "Dateien anhängen",
        [Locale.Polish]: "Załączanie plików",
        [Locale.SpanishES]: "Adjuntar archivos",
        [Locale.SpanishLATAM]: "Adjuntar archivos",
        [Locale.PortugueseBR]: "Anexar arquivos",
        [Locale.Turkish]: "Dosya Ekle",
        [Locale.Italian]: "Allega file",
        [Locale.Indonesian]: "Lampirkan File",
        [Locale.Czech]: "Připojovat soubory",
    }),
    "enable.permissions.embedLinks": buildLocales("Embed Links", {
        [Locale.Russian]: "Встраивать ссылки",
        [Locale.Ukrainian]: "Вставляти посилання",
        [Locale.Dutch]: "Links insluiten",
        [Locale.French]: "Intégrer des liens",
        [Locale.German]: "Links einbetten",
        [Locale.Polish]: "Osadzanie linków",
        [Locale.SpanishES]: "Insertar enlaces",
        [Locale.SpanishLATAM]: "Insertar enlaces",
        [Locale.PortugueseBR]: "Inserir links",
        [Locale.Turkish]: "Bağlantı Yerleştir",
        [Locale.Italian]: "Incorpora link",
        [Locale.Indonesian]: "Sematkan Tautan",
        [Locale.Czech]: "Vkládat odkazy",
    }),
    "enable.permissions.readHistory": buildLocales("Read Message History", {
        [Locale.Russian]: "Читать историю сообщений",
        [Locale.Ukrainian]: "Читати історію повідомлень",
        [Locale.Dutch]: "Berichtgeschiedenis lezen",
        [Locale.French]: "Voir les anciens messages",
        [Locale.German]: "Nachrichtenverlauf anzeigen",
        [Locale.Polish]: "Czytanie historii wiadomości",
        [Locale.SpanishES]: "Leer el historial de mensajes",
        [Locale.SpanishLATAM]: "Leer el historial de mensajes",
        [Locale.PortugueseBR]: "Ver histórico de mensagens",
        [Locale.Turkish]: "Mesaj Geçmişini Oku",
        [Locale.Italian]: "Leggi cronologia messaggi",
        [Locale.Indonesian]: "Baca Riwayat Pesan",
        [Locale.Czech]: "Číst historii zpráv",
    }),
    "enable.permissions.viewChannel": buildLocales("View Channel", {
        [Locale.Russian]: "Просмотр канала",
        [Locale.Ukrainian]: "Переглядати канал",
        [Locale.Dutch]: "Kanaal bekijken",
        [Locale.French]: "Voir le salon",
        [Locale.German]: "Kanal anzeigen",
        [Locale.Polish]: "Wyświetlanie kanału",
        [Locale.SpanishES]: "Ver canal",
        [Locale.SpanishLATAM]: "Ver canal",
        [Locale.PortugueseBR]: "Ver canal",
        [Locale.Turkish]: "Kanalı Görüntüle",
        [Locale.Italian]: "Visualizza canale",
        [Locale.Indonesian]: "Lihat Channel",
        [Locale.Czech]: "Zobrazit kanál",
    }),
    "enable.button.turnOff": buildLocales("Turn off", {
        [Locale.Russian]: "Выключить",
        [Locale.Ukrainian]: "Вимкнути",
        [Locale.Dutch]: "Uitzetten",
        [Locale.French]: "Désactiver",
        [Locale.German]: "Ausschalten",
        [Locale.Polish]: "Wyłącz",
        [Locale.SpanishES]: "Desactivar",
        [Locale.SpanishLATAM]: "Desactivar",
        [Locale.PortugueseBR]: "Desligar",
        [Locale.Turkish]: "Kapat",
        [Locale.Italian]: "Spegni",
        [Locale.Indonesian]: "Matikan",
        [Locale.Czech]: "Vypnout",
    }),
    "enable.button.turnOn": buildLocales("Turn on", {
        [Locale.Russian]: "Включить",
        [Locale.Ukrainian]: "Увімкнути",
        [Locale.Dutch]: "Aanzetten",
        [Locale.French]: "Activer",
        [Locale.German]: "Einschalten",
        [Locale.Polish]: "Włącz",
        [Locale.SpanishES]: "Activar",
        [Locale.SpanishLATAM]: "Activar",
        [Locale.PortugueseBR]: "Ligar",
        [Locale.Turkish]: "Aç",
        [Locale.Italian]: "Accendi",
        [Locale.Indonesian]: "Nyalakan",
        [Locale.Czech]: "Zapnout",
    }),
    "enable.button.allowMakingMemes": buildLocales("✔ Allow in this channel", {
        [Locale.Russian]: "✔ Разрешить в этом канале",
        [Locale.Ukrainian]: "✔ Дозволити в цьому каналі",
        [Locale.Dutch]: "✔ Toestaan in dit kanaal",
        [Locale.French]: "✔ Autoriser dans ce salon",
        [Locale.German]: "✔ In diesem Kanal erlauben",
        [Locale.Polish]: "✔ Pozwól na tym kanale",
        [Locale.SpanishES]: "✔ Permitir en este canal",
        [Locale.SpanishLATAM]: "✔ Permitir en este canal",
        [Locale.PortugueseBR]: "✔ Permitir neste canal",
        [Locale.Turkish]: "✔ Bu kanalda izin ver",
        [Locale.Italian]: "✔ Permetti in questo canale",
        [Locale.Indonesian]: "✔ Izinkan di channel ini",
        [Locale.Czech]: "✔ Povolit v tomto kanálu",
    }),
    "enable.button.notNow": buildLocales("No, thanks", {
        [Locale.Russian]: "Нет, спасибо",
        [Locale.Ukrainian]: "Ні, дякую",
        [Locale.Dutch]: "Nee, bedankt",
        [Locale.French]: "Non merci",
        [Locale.German]: "Nein, danke",
        [Locale.Polish]: "Nie, dzięki",
        [Locale.SpanishES]: "No, gracias",
        [Locale.SpanishLATAM]: "No, gracias",
        [Locale.PortugueseBR]: "Não, obrigado",
        [Locale.Turkish]: "Hayır, teşekkürler",
        [Locale.Italian]: "No, grazie",
        [Locale.Indonesian]: "Tidak, terima kasih",
        [Locale.Czech]: "Ne, díky",
    }),
    "enable.button.firstMeme": buildLocales("Generate your first meme", {
        [Locale.Russian]: "Сделать первый мем",
        [Locale.Ukrainian]: "Зробити перший мем",
        [Locale.Dutch]: "Maak je eerste meme",
        [Locale.French]: "Générer votre premier mème",
        [Locale.German]: "Erstes Meme erstellen",
        [Locale.Polish]: "Zrób pierwszego mema",
        [Locale.SpanishES]: "Generar tu primer meme",
        [Locale.SpanishLATAM]: "Generar tu primer meme",
        [Locale.PortugueseBR]: "Gerar seu primeiro meme",
        [Locale.Turkish]: "İlk capsini oluştur",
        [Locale.Italian]: "Genera il tuo primo meme",
        [Locale.Indonesian]: "Bikin meme pertamamu",
        [Locale.Czech]: "Vytvořit první mem",
    }),
    "enable.button.settings": buildLocales("⚙️ Open settings", {
        [Locale.Russian]: "⚙️ Открыть настройки",
        [Locale.Ukrainian]: "⚙️ Відкрити налаштування",
        [Locale.Dutch]: "⚙️ Instellingen openen",
        [Locale.French]: "⚙️ Ouvrir les paramètres",
        [Locale.German]: "⚙️ Einstellungen öffnen",
        [Locale.Polish]: "⚙️ Otwórz ustawienia",
        [Locale.SpanishES]: "⚙️ Abrir ajustes",
        [Locale.SpanishLATAM]: "⚙️ Abrir configuración",
        [Locale.PortugueseBR]: "⚙️ Abrir configurações",
        [Locale.Turkish]: "⚙️ Ayarları aç",
        [Locale.Italian]: "⚙️ Apri impostazioni",
        [Locale.Indonesian]: "⚙️ Buka pengaturan",
        [Locale.Czech]: "⚙️ Otevřít nastavení",
    }),
    "error.heading": buildLocales("⚠️ Something went wrong", {
        [Locale.Russian]: "⚠️ Что-то пошло не так",
        [Locale.Ukrainian]: "⚠️ Щось пішло не так",
        [Locale.Dutch]: "⚠️ Er ging iets mis",
        [Locale.French]: "⚠️ Quelque chose s'est mal passé",
        [Locale.German]: "⚠️ Etwas ist schiefgelaufen",
        [Locale.Polish]: "⚠️ Coś poszło nie tak",
        [Locale.SpanishES]: "⚠️ Algo ha salido mal",
        [Locale.SpanishLATAM]: "⚠️ Algo salió mal",
        [Locale.PortugueseBR]: "⚠️ Algo deu errado",
        [Locale.Turkish]: "⚠️ Bir şeyler ters gitti",
        [Locale.Italian]: "⚠️ Qualcosa è andato storto",
        [Locale.Indonesian]: "⚠️ Ada yang salah",
        [Locale.Czech]: "⚠️ Něco se pokazilo",
    }),
    "error.body": buildLocales(
        "Please try again, and if it keeps happening,\nreport the error so we can look into it.",
        {
            [Locale.Russian]:
                "Попробуйте ещё раз, а если это повторяется,\nсообщите об ошибке, чтобы мы могли разобраться.",
            [Locale.Ukrainian]:
                "Спробуйте ще раз, а якщо це повторюється,\nповідомте про помилку, щоб ми могли розібратися.",
            [Locale.Dutch]:
                "Probeer het opnieuw en als het blijft gebeuren,\nmeld de fout dan even zodat we ernaar kunnen kijken.",
            [Locale.French]: "Réessayez, et si cela continue,\nsignalez l'erreur pour qu'on puisse regarder ça.",
            [Locale.German]:
                "Versuche es erneut, und wenn es weiterhin passiert,\nmelde den Fehler, damit wir uns das ansehen können.",
            [Locale.Polish]:
                "Spróbuj ponownie, a jeśli to się powtarza,\nzgłoś błąd, żebyśmy mogli się temu przyjrzeć.",
            [Locale.SpanishES]:
                "Inténtalo de nuevo y si sigue pasando, informa del\nerror para que podamos investigarlo.",
            [Locale.SpanishLATAM]: "Intenta de nuevo y si sigue pasando,\nreporta el error para que podamos revisarlo.",
            [Locale.PortugueseBR]:
                "Tente de novo e, se continuar acontecendo, reporte\no erro para a gente dar uma olhada.",
            [Locale.Turkish]: "Tekrar dene, sorun devam ederse\nhatayı bildir ki inceleyebilelim.",
            [Locale.Italian]: "Riprova e, se continua a succedere,\nsegnala l'errore così possiamo dare un'occhiata.",
            [Locale.Indonesian]: "Coba lagi, dan kalau terus terjadi,\nlaporkan errornya biar kami bisa cek.",
            [Locale.Czech]: "Zkus to znovu, a pokud se to opakuje,\nnahlas chybu, ať se na to můžeme podívat.",
        },
    ),
    "error.id": buildLocales("-# **Error ID:** {{interactionId}}", {
        [Locale.Russian]: "-# **ID ошибки:** {{interactionId}}",
        [Locale.Ukrainian]: "-# **ID помилки:** {{interactionId}}",
        [Locale.Dutch]: "-# **Fout-ID:** {{interactionId}}",
        [Locale.French]: "-# **ID d'erreur :** {{interactionId}}",
        [Locale.German]: "-# **Fehler-ID:** {{interactionId}}",
        [Locale.Polish]: "-# **ID błędu:** {{interactionId}}",
        [Locale.SpanishES]: "-# **ID de error:** {{interactionId}}",
        [Locale.SpanishLATAM]: "-# **ID de error:** {{interactionId}}",
        [Locale.PortugueseBR]: "-# **ID do erro:** {{interactionId}}",
        [Locale.Turkish]: "-# **Hata ID'si:** {{interactionId}}",
        [Locale.Italian]: "-# **ID errore:** {{interactionId}}",
        [Locale.Indonesian]: "-# **ID error:** {{interactionId}}",
        [Locale.Czech]: "-# **ID chyby:** {{interactionId}}",
    }),
    "error.button.tryAgain": buildLocales("🔁 Try again", {
        [Locale.Russian]: "🔁 Попробовать снова",
        [Locale.Ukrainian]: "🔁 Спробувати ще раз",
        [Locale.Dutch]: "🔁 Opnieuw proberen",
        [Locale.French]: "🔁 Réessayer",
        [Locale.German]: "🔁 Erneut versuchen",
        [Locale.Polish]: "🔁 Spróbuj ponownie",
        [Locale.SpanishES]: "🔁 Intentar de nuevo",
        [Locale.SpanishLATAM]: "🔁 Intentar de nuevo",
        [Locale.PortugueseBR]: "🔁 Tentar de novo",
        [Locale.Turkish]: "🔁 Tekrar dene",
        [Locale.Italian]: "🔁 Riprova",
        [Locale.Indonesian]: "🔁 Coba lagi",
        [Locale.Czech]: "🔁 Zkusit znovu",
    }),
    "error.button.reportError": buildLocales("💬 Report error", {
        [Locale.Russian]: "💬 Сообщить об ошибке",
        [Locale.Ukrainian]: "💬 Повідомити про помилку",
        [Locale.Dutch]: "💬 Fout melden",
        [Locale.French]: "💬 Signaler l'erreur",
        [Locale.German]: "💬 Fehler melden",
        [Locale.Polish]: "💬 Zgłoś błąd",
        [Locale.SpanishES]: "💬 Informar del error",
        [Locale.SpanishLATAM]: "💬 Reportar el error",
        [Locale.PortugueseBR]: "💬 Reportar erro",
        [Locale.Turkish]: "💬 Hatayı bildir",
        [Locale.Italian]: "💬 Segnala l'errore",
        [Locale.Indonesian]: "💬 Laporkan error",
        [Locale.Czech]: "💬 Nahlásit chybu",
    }),
    "notEnoughContext.heading": buildLocales("🤔 I don't know enough for a meme yet", {
        [Locale.Russian]: "🤔 Я пока знаю слишком мало для мема",
        [Locale.Ukrainian]: "🤔 Я поки знаю замало для мема",
        [Locale.Dutch]: "🤔 Ik weet nog te weinig voor een meme",
        [Locale.French]: "🤔 Je n'en sais pas encore assez pour un mème",
        [Locale.German]: "🤔 Ich weiß noch zu wenig für ein Meme",
        [Locale.Polish]: "🤔 Wiem jeszcze za mało na mema",
        [Locale.SpanishES]: "🤔 Todavía no sé lo suficiente para un meme",
        [Locale.SpanishLATAM]: "🤔 Todavía no sé lo suficiente para un meme",
        [Locale.PortugueseBR]: "🤔 Ainda não sei o bastante para um meme",
        [Locale.Turkish]: "🤔 Caps için henüz yeterince bilmiyorum",
        [Locale.Italian]: "🤔 Non so ancora abbastanza per un meme",
        [Locale.Indonesian]: "🤔 Aku belum tahu cukup untuk bikin meme",
        [Locale.Czech]: "🤔 Zatím toho na mem vím málo",
    }),
    "notEnoughContext.body": buildLocales(
        "There were not many messages sent in this channel, so I didn't have enough context to make a meme. Please try again after a few more messages.",
        {
            [Locale.Russian]:
                "В этом канале было отправлено мало сообщений, так что мне не хватило контекста для мема. Попробуйте ещё раз, когда их наберётся немного больше.",
            [Locale.Ukrainian]:
                "У цьому каналі надіслали мало повідомлень, тож мені забракло контексту для мема. Спробуйте ще раз, коли їх набереться трохи більше.",
            [Locale.Dutch]:
                "Er zijn nog niet veel berichten in dit kanaal, dus ik had te weinig context voor een meme. Probeer het opnieuw na een paar berichten meer.",
            [Locale.French]:
                "Il n'y a pas eu beaucoup de messages dans ce salon, donc je n'avais pas assez de contexte pour un mème. Réessayez après quelques messages de plus.",
            [Locale.German]:
                "In diesem Kanal wurden noch nicht viele Nachrichten geschrieben, deshalb hatte ich zu wenig Kontext für ein Meme. Versuch es nach ein paar weiteren Nachrichten nochmal.",
            [Locale.Polish]:
                "Na tym kanale wysłano jeszcze mało wiadomości, więc zabrakło mi kontekstu na mema. Spróbuj ponownie po kilku kolejnych wiadomościach.",
            [Locale.SpanishES]:
                "No se han enviado muchos mensajes en este canal, así que no tenía suficiente contexto para un meme. Vuelve a intentarlo después de unos cuantos mensajes más.",
            [Locale.SpanishLATAM]:
                "No se enviaron muchos mensajes en este canal, así que no tenía suficiente contexto para un meme. Intenta de nuevo después de unos mensajes más.",
            [Locale.PortugueseBR]:
                "Não foram enviadas muitas mensagens neste canal, então não tive contexto suficiente para um meme. Tente de novo depois de mais algumas mensagens.",
            [Locale.Turkish]:
                "Bu kanalda çok fazla mesaj gönderilmemiş, bu yüzden caps için yeterli bağlamım yoktu. Birkaç mesaj daha sonra tekrar dene.",
            [Locale.Italian]:
                "In questo canale non sono stati mandati molti messaggi, quindi non avevo abbastanza contesto per un meme. Riprova dopo qualche messaggio in più.",
            [Locale.Indonesian]:
                "Belum banyak pesan yang dikirim di channel ini, jadi konteksku belum cukup untuk bikin meme. Coba lagi setelah ada beberapa pesan lagi.",
            [Locale.Czech]:
                "V tomto kanálu zatím nepřišlo moc zpráv, takže jsem neměl dost kontextu na mem. Zkus to znovu po pár dalších zprávách.",
        },
    ),
    "unknownTemplate.heading": buildLocales("🤔 I don't know such template", {
        [Locale.Russian]: "🤔 Я не знаю такой шаблон",
        [Locale.Ukrainian]: "🤔 Я не знаю такого шаблону",
        [Locale.Dutch]: "🤔 Die template ken ik niet",
        [Locale.French]: "🤔 Je ne connais pas ce modèle",
        [Locale.German]: "🤔 Diese Vorlage kenne ich nicht",
        [Locale.Polish]: "🤔 Nie znam takiego szablonu",
        [Locale.SpanishES]: "🤔 No conozco esa plantilla",
        [Locale.SpanishLATAM]: "🤔 No conozco esa plantilla",
        [Locale.PortugueseBR]: "🤔 Não conheço esse template",
        [Locale.Turkish]: "🤔 Böyle bir şablon bilmiyorum",
        [Locale.Italian]: "🤔 Non conosco questo template",
        [Locale.Indonesian]: "🤔 Aku tidak kenal template itu",
        [Locale.Czech]: "🤔 Takovou šablonu neznám",
    }),
    "unknownTemplate.body": buildLocales(
        "Make sure to select one of the autocomplete options when choosing a template in {{custom}}",
        {
            [Locale.Russian]: "Обязательно выберите один из вариантов автодополнения при выборе шаблона в {{custom}}",
            [Locale.Ukrainian]: "Обов'язково оберіть один з варіантів автодоповнення при виборі шаблону в {{custom}}",
            [Locale.Dutch]: "Kies zeker een van de autocomplete opties bij het kiezen van een template in {{custom}}",
            [Locale.French]:
                "Veillez à sélectionner une des options d'autocomplétion en choisissant un modèle dans {{custom}}",
            [Locale.German]:
                "Wähle unbedingt eine der Autovervollständigungs-Optionen, wenn du eine Vorlage in {{custom}} auswählst",
            [Locale.Polish]: "Koniecznie wybierz jedną z opcji autouzupełniania przy wyborze szablonu w {{custom}}",
            [Locale.SpanishES]:
                "Asegúrate de seleccionar una de las opciones de autocompletado al elegir una plantilla en {{custom}}",
            [Locale.SpanishLATAM]:
                "Asegúrate de seleccionar una de las opciones de autocompletado al elegir una plantilla en {{custom}}",
            [Locale.PortugueseBR]:
                "Não esqueça de selecionar uma das opções do autocompletar ao escolher um template no {{custom}}",
            [Locale.Turkish]:
                "{{custom}} içinde şablon seçerken otomatik tamamlama seçeneklerinden birini seçtiğinden emin ol",
            [Locale.Italian]:
                "Assicurati di selezionare una delle opzioni di completamento automatico quando scegli un template in {{custom}}",
            [Locale.Indonesian]: "Pastikan memilih salah satu opsi autocomplete saat memilih template di {{custom}}",
            [Locale.Czech]: "Při výběru šablony v {{custom}} určitě vyber jednu z možností automatického doplňování",
        },
    ),
    "wrongFileFormat.heading": buildLocales("🤔 Unknown image file format", {
        [Locale.Russian]: "🤔 Неизвестный формат изображения",
        [Locale.Ukrainian]: "🤔 Невідомий формат зображення",
        [Locale.Dutch]: "🤔 Onbekend afbeeldingsformaat",
        [Locale.French]: "🤔 Format d'image inconnu",
        [Locale.German]: "🤔 Unbekanntes Bildformat",
        [Locale.Polish]: "🤔 Nieznany format obrazka",
        [Locale.SpanishES]: "🤔 Formato de imagen desconocido",
        [Locale.SpanishLATAM]: "🤔 Formato de imagen desconocido",
        [Locale.PortugueseBR]: "🤔 Formato de imagem desconhecido",
        [Locale.Turkish]: "🤔 Bilinmeyen görsel formatı",
        [Locale.Italian]: "🤔 Formato immagine sconosciuto",
        [Locale.Indonesian]: "🤔 Format gambar tidak dikenal",
        [Locale.Czech]: "🤔 Neznámý formát obrázku",
    }),
    "wrongFileFormat.body": buildLocales(
        'The file for "{{file}}" is not an image or a GIF.\nPlease try again with a PNG/JPEG/AVIF/WebP/GIF.',
        {
            [Locale.Russian]: 'Файл для "{{file}}" не является изображением. Попробуйте ещё раз с PNG/JPEG/AVIF/WebP.',
            [Locale.Ukrainian]: 'Файл для "{{file}}" не є зображенням. Спробуйте ще раз із PNG/JPEG/AVIF/WebP.',
            [Locale.Dutch]:
                'Het bestand voor "{{file}}" is geen afbeelding. Probeer het opnieuw met een PNG/JPEG/AVIF/WebP.',
            [Locale.French]: 'Le fichier pour "{{file}}" n\'est pas une image. Réessayez avec un PNG/JPEG/AVIF/WebP.',
            [Locale.German]: 'Die Datei für "{{file}}" ist kein Bild. Versuche es erneut mit einem PNG/JPEG/AVIF/WebP.',
            [Locale.Polish]: 'Plik dla "{{file}}" nie jest obrazkiem. Spróbuj ponownie z PNG/JPEG/AVIF/WebP.',
            [Locale.SpanishES]:
                'El archivo de "{{file}}" no es una imagen. Inténtalo de nuevo con un PNG/JPEG/AVIF/WebP.',
            [Locale.SpanishLATAM]:
                'El archivo de "{{file}}" no es una imagen. Intenta de nuevo con un PNG/JPEG/AVIF/WebP.',
            [Locale.PortugueseBR]: 'O arquivo de "{{file}}" não é uma imagem. Tente de novo com um PNG/JPEG/AVIF/WebP.',
            [Locale.Turkish]: '"{{file}}" için gönderilen dosya bir görsel değil. PNG/JPEG/AVIF/WebP ile tekrar dene.',
            [Locale.Italian]: 'Il file per "{{file}}" non è un\'immagine. Riprova con un PNG/JPEG/AVIF/WebP.',
            [Locale.Indonesian]: 'File untuk "{{file}}" bukan gambar. Coba lagi dengan PNG/JPEG/AVIF/WebP.',
            [Locale.Czech]: 'Soubor pro "{{file}}" není obrázek. Zkus to znovu s PNG/JPEG/AVIF/WebP.',
        },
    ),
    "missingPermissions.heading": buildLocales("🔒 I need someone with permissions", {
        [Locale.Russian]: "🔒 Нужен кто-то с правами",
        [Locale.Ukrainian]: "🔒 Потрібен хтось із правами",
        [Locale.Dutch]: "🔒 Ik heb iemand met permissies nodig",
        [Locale.French]: "🔒 J'ai besoin de quelqu'un qui a les permissions",
        [Locale.German]: "🔒 Ich brauche jemanden mit Berechtigungen",
        [Locale.Polish]: "🔒 Potrzebuję kogoś z uprawnieniami",
        [Locale.SpanishES]: "🔒 Necesito a alguien con permisos",
        [Locale.SpanishLATAM]: "🔒 Necesito a alguien con permisos",
        [Locale.PortugueseBR]: "🔒 Preciso de alguém com permissões",
        [Locale.Turkish]: "🔒 Yetkisi olan birine ihtiyacım var",
        [Locale.Italian]: "🔒 Mi serve qualcuno con i permessi",
        [Locale.Indonesian]: "🔒 Aku butuh orang yang punya izin",
        [Locale.Czech]: "🔒 Potřebuju někoho s oprávněními",
    }),
    "missingPermissions.body": buildLocales(
        "Please tell someone with **Manage Server** or **Manage Channels** permissions that you want to turn me on here or change settings.",
        {
            [Locale.Russian]:
                "Попросите кого-нибудь с правами **Управлять сервером** или **Управлять каналами** включить меня здесь или поменять настройки.",
            [Locale.Ukrainian]:
                "Попросіть когось із правами **Керувати сервером** або **Керувати каналами** увімкнути мене тут чи змінити налаштування.",
            [Locale.Dutch]:
                "Vraag iemand met de permissie **Server beheren** of **Kanalen beheren** om me hier aan te zetten of de instellingen aan te passen.",
            [Locale.French]:
                "Demandez à quelqu'un ayant les permissions **Gérer le serveur** ou **Gérer les salons** de m'activer ici ou de changer les paramètres.",
            [Locale.German]:
                "Bitte jemanden mit den Berechtigungen **Server verwalten** oder **Kanäle verwalten**, mich hier einzuschalten oder die Einstellungen zu ändern.",
            [Locale.Polish]:
                "Poproś kogoś z uprawnieniami **Zarządzanie serwerem** lub **Zarządzanie kanałami**, żeby włączył mnie tutaj albo zmienił ustawienia.",
            [Locale.SpanishES]:
                "Pídele a alguien con permisos de **Gestionar servidor** o **Gestionar canales** que me active aquí o que cambie los ajustes.",
            [Locale.SpanishLATAM]:
                "Pídele a alguien con permisos de **Administrar servidor** o **Administrar canales** que me active aquí o que cambie la configuración.",
            [Locale.PortugueseBR]:
                "Peça para alguém com permissão de **Gerenciar servidor** ou **Gerenciar canais** me ligar aqui ou mudar as configurações.",
            [Locale.Turkish]:
                "**Sunucuyu Yönet** ya da **Kanalları Yönet** yetkisi olan birinden beni burada açmasını veya ayarları değiştirmesini iste.",
            [Locale.Italian]:
                "Chiedi a qualcuno con i permessi **Gestisci server** o **Gestisci canali** di accendermi qui o di cambiare le impostazioni.",
            [Locale.Indonesian]:
                "Minta orang yang punya izin **Kelola Server** atau **Kelola Channel** untuk menyalakan aku di sini atau mengubah pengaturannya.",
            [Locale.Czech]:
                "Požádej někoho s oprávněním **Spravovat server** nebo **Spravovat kanály**, ať mě tady zapne nebo změní nastavení.",
        },
    ),
    "missingPermissions.alternatives": buildLocales(
        "### In the meantime, you can still use these commands:\n**{{custom}}** - Pick any of 660+ templates and fill it in yourself\n**{{voice}}** - Narrate any text in one of 23 voices",
        {
            [Locale.Russian]:
                "### А пока вам всё ещё доступны эти команды:\n**{{custom}}** - Выберите любой из 660+ шаблонов и заполните его сами\n**{{voice}}** - Озвучьте любой текст одним из 23 голосов",
            [Locale.Ukrainian]:
                "### А поки вам усе ще доступні ці команди:\n**{{custom}}** - Оберіть будь-який з 660+ шаблонів і заповніть його самі\n**{{voice}}** - Озвучте будь-який текст одним із 23 голосів",
            [Locale.Dutch]:
                "### Ondertussen kun je deze commando's nog steeds gebruiken:\n**{{custom}}** - Kies een van de 660+ templates en vul hem zelf in\n**{{voice}}** - Laat elke tekst voorlezen door een van de 23 stemmen",
            [Locale.French]:
                "### En attendant, vous pouvez toujours utiliser ces commandes :\n**{{custom}}** - Choisissez un des 660+ modèles et remplissez-le vous-même\n**{{voice}}** - Faites lire n'importe quel texte par une des 23 voix",
            [Locale.German]:
                "### In der Zwischenzeit kannst du diese Befehle trotzdem nutzen:\n**{{custom}}** - Wähl eine von 660+ Vorlagen und füll sie selbst aus\n**{{voice}}** - Lass jeden Text von einer der 23 Stimmen vorlesen",
            [Locale.Polish]:
                "### W międzyczasie nadal możesz używać tych komend:\n**{{custom}}** - Wybierz jeden z 660+ szablonów i wypełnij go sam\n**{{voice}}** - Przeczytaj dowolny tekst jednym z 23 głosów",
            [Locale.SpanishES]:
                "### Mientras tanto, aún puedes usar estos comandos:\n**{{custom}}** - Elige una de las 660+ plantillas y rellénala tú mismo\n**{{voice}}** - Narra cualquier texto con una de las 23 voces",
            [Locale.SpanishLATAM]:
                "### Mientras tanto, todavía puedes usar estos comandos:\n**{{custom}}** - Elige una de las 660+ plantillas y llénala tú mismo\n**{{voice}}** - Narra cualquier texto con una de las 23 voces",
            [Locale.PortugueseBR]:
                "### Enquanto isso, você ainda pode usar estes comandos:\n**{{custom}}** - Escolha um dos 660+ templates e preencha você mesmo\n**{{voice}}** - Narre qualquer texto com uma das 23 vozes",
            [Locale.Turkish]:
                "### Bu arada bu komutları yine de kullanabilirsin:\n**{{custom}}** - 660'tan fazla şablondan birini seç ve kendin doldur\n**{{voice}}** - Herhangi bir metni 23 sesten biriyle okut",
            [Locale.Italian]:
                "### Nel frattempo puoi comunque usare questi comandi:\n**{{custom}}** - Scegli uno dei 660+ template e riempilo tu\n**{{voice}}** - Fai leggere qualsiasi testo da una delle 23 voci",
            [Locale.Indonesian]:
                "### Sementara itu, kamu tetap bisa pakai perintah ini:\n**{{custom}}** - Pilih salah satu dari 660+ template dan isi sendiri\n**{{voice}}** - Bacakan teks apa pun dengan salah satu dari 23 suara",
            [Locale.Czech]:
                "### Zatím můžeš pořád používat tyhle příkazy:\n**{{custom}}** - Vyber si jednu z 660+ šablon a vyplň si ji sám\n**{{voice}}** - Nech si přečíst jakýkoliv text jedním z 23 hlasů",
        },
    ),
    "missingPermissions.userInstall": buildLocales(
        'Those commands will work even in DMs and servers without me there!\nFor this to work you can add me to **"My Apps"** using the button below.',
        {
            [Locale.Russian]:
                "Эти команды работают даже в личных сообщениях и на серверах, где меня нет!\nЧтобы это заработало, добавьте меня в **«Мои приложения»** кнопкой ниже.",
            [Locale.Ukrainian]:
                "Ці команди працюють навіть у приватних повідомленнях і на серверах, де мене немає!\nЩоб це запрацювало, додайте мене до **«Моїх застосунків»** кнопкою нижче.",
            [Locale.Dutch]:
                "Die commando's werken zelfs in DM's en op servers waar ik niet in zit!\nDaarvoor kun je me met de knop hieronder toevoegen aan **\"Mijn apps\"**.",
            [Locale.French]:
                "Ces commandes marchent même en MP et sur les serveurs où je ne suis pas !\nPour ça, vous pouvez m'ajouter à **« Mes applications »** avec le bouton ci-dessous.",
            [Locale.German]:
                'Diese Befehle funktionieren sogar in DMs und auf Servern, auf denen ich nicht bin!\nDafür kannst du mich mit dem Button unten zu **"Meine Apps"** hinzufügen.',
            [Locale.Polish]:
                "Te komendy działają nawet w wiadomościach prywatnych i na serwerach, na których mnie nie ma!\nŻeby to działało, dodaj mnie do **„Moich aplikacji”** przyciskiem poniżej.",
            [Locale.SpanishES]:
                "¡Esos comandos funcionan incluso en MD y en servidores donde no estoy!\nPara eso puedes añadirme a **«Mis aplicaciones»** con el botón de abajo.",
            [Locale.SpanishLATAM]:
                "¡Esos comandos funcionan incluso en MD y en servidores donde no estoy!\nPara eso puedes agregarme a **«Mis aplicaciones»** con el botón de abajo.",
            [Locale.PortugueseBR]:
                'Esses comandos funcionam até em DMs e em servidores onde eu não estou!\nPara isso você pode me adicionar em **"Meus aplicativos"** usando o botão abaixo.',
            [Locale.Turkish]:
                'Bu komutlar DM\'lerde ve benim olmadığım sunucularda bile çalışır!\nBunun için aşağıdaki butonla beni **"Uygulamalarım"a** ekleyebilirsin.',
            [Locale.Italian]:
                'Questi comandi funzionano anche nei DM e nei server dove non ci sono!\nPer farlo puoi aggiungermi a **"Le mie app"** con il pulsante qui sotto.',
            [Locale.Indonesian]:
                'Perintah itu bisa dipakai bahkan di DM dan di server yang tidak ada aku!\nUntuk itu kamu bisa menambahkan aku ke **"Aplikasi Saya"** lewat tombol di bawah.',
            [Locale.Czech]:
                "Tyhle příkazy fungují i v DM a na serverech, kde nejsem!\nStačí si mě tlačítkem níž přidat do **„Moje aplikace“**.",
        },
    ),
    "missingPermissions.button.addToMyApps": buildLocales("🔗 Add to My Apps", {
        [Locale.Russian]: "🔗 Добавить в «Мои приложения»",
        [Locale.Ukrainian]: "🔗 Додати до «Моїх застосунків»",
        [Locale.Dutch]: "🔗 Toevoegen aan Mijn apps",
        [Locale.French]: "🔗 Ajouter à Mes applications",
        [Locale.German]: "🔗 Zu Meine Apps hinzufügen",
        [Locale.Polish]: "🔗 Dodaj do Moich aplikacji",
        [Locale.SpanishES]: "🔗 Añadir a Mis aplicaciones",
        [Locale.SpanishLATAM]: "🔗 Agregar a Mis aplicaciones",
        [Locale.PortugueseBR]: "🔗 Adicionar aos Meus aplicativos",
        [Locale.Turkish]: "🔗 Uygulamalarım'a ekle",
        [Locale.Italian]: "🔗 Aggiungi a Le mie app",
        [Locale.Indonesian]: "🔗 Tambahkan ke Aplikasi Saya",
        [Locale.Czech]: "🔗 Přidat do Moje aplikace",
    }),
    "missingBotPermissions.heading": buildLocales("🔒 Jstmemit can't send memes here", {
        [Locale.Russian]: "🔒 Jstmemit не может отправлять мемы тут",
        [Locale.Ukrainian]: "🔒 Jstmemit не може надсилати меми тут",
        [Locale.Dutch]: "🔒 Jstmemit kan hier geen memes sturen",
        [Locale.French]: "🔒 Jstmemit ne peut pas envoyer de mèmes ici",
        [Locale.German]: "🔒 Jstmemit kann hier keine Memes senden",
        [Locale.Polish]: "🔒 Jstmemit nie może wysyłać memów tutaj",
        [Locale.SpanishES]: "🔒 Jstmemit no puede enviar memes aquí",
        [Locale.SpanishLATAM]: "🔒 Jstmemit no puede enviar memes aquí",
        [Locale.PortugueseBR]: "🔒 O Jstmemit não pode enviar memes aqui",
        [Locale.Turkish]: "🔒 Jstmemit burada caps gönderemez",
        [Locale.Italian]: "🔒 Jstmemit non può inviare meme qui",
        [Locale.Indonesian]: "🔒 Jstmemit tidak bisa mengirim meme di sini",
        [Locale.Czech]: "🔒 Jstmemit tady nemůže posílat memy",
    }),
    "missingBotPermissions.body": buildLocales(
        "Bot is missing some permissions in this channel. Someone who can manage this channel can fix this by going into channel settings and giving them to the bot.\n\nIt's required for auto-generating memes during a conversation, but requesting memes with {{meme}} or {{custom}} is possible without them.",
        {
            [Locale.Russian]:
                "У бота нет некоторых прав в этом канале. Любой, кто может управлять этим каналом, может это исправить, зайдя в настройки канала и выдав их боту.\n\nОни нужны для автогенерации мемов во время переписки, но генерировать мемы через {{meme}} или {{custom}} можно и без них.",
            [Locale.Ukrainian]:
                "У бота немає деяких прав у цьому каналі. Будь-хто, хто може керувати цим каналом, може це виправити, зайшовши в налаштування каналу і надавши їх боту.\n\nВони потрібні для автогенерації мемів під час розмови, але запитувати меми через {{meme}} чи {{custom}} можна й без них.",
            [Locale.Dutch]:
                "De bot mist een paar permissies in dit kanaal. Iemand die dit kanaal kan beheren kan dit oplossen door naar de kanaalinstellingen te gaan en ze aan de bot te geven.\n\nZe zijn nodig om memes automatisch te maken tijdens een gesprek, maar memes genereren via {{meme}} of {{custom}} kan ook zonder.",
            [Locale.French]:
                "Le bot n'a pas certaines permissions dans ce salon. Quelqu'un qui peut gérer ce salon peut corriger ça en allant dans les paramètres du salon et en les donnant au bot.\n\nElles sont nécessaires pour générer des mèmes automatiquement pendant une conversation, mais demander des mèmes avec {{meme}} ou {{custom}} reste possible sans elles.",
            [Locale.German]:
                "Dem Bot fehlen ein paar Berechtigungen in diesem Kanal. Wer diesen Kanal verwalten kann, behebt das in den Kanaleinstellungen, indem er sie dem Bot gibt.\n\nSie sind nötig, um Memes während eines Gesprächs automatisch zu erstellen, aber Memes mit {{meme}} oder {{custom}} anzufordern geht auch ohne sie.",
            [Locale.Polish]:
                "Bot nie ma niektórych uprawnień na tym kanale. Ktoś, kto może zarządzać tym kanałem, może to naprawić, wchodząc w ustawienia kanału i nadając je botowi.\n\nSą one potrzebne do automatycznego robienia memów podczas rozmowy, ale zamawianie memów przez {{meme}} lub {{custom}} działa też bez nich.",
            [Locale.SpanishES]:
                "Al bot le faltan algunos permisos en este canal. Cualquiera que pueda gestionar este canal puede arreglarlo entrando en los ajustes del canal y dándoselos al bot.\n\nHacen falta para generar memes automáticamente durante una conversación, pero pedir memes con {{meme}} o {{custom}} sigue siendo posible sin ellos.",
            [Locale.SpanishLATAM]:
                "Al bot le faltan algunos permisos en este canal. Cualquiera que pueda gestionar este canal puede arreglarlo entrando en la configuración del canal y dándoselos al bot.\n\nHacen falta para generar memes automáticamente durante una conversación, pero pedir memes con {{meme}} o {{custom}} sigue siendo posible sin ellos.",
            [Locale.PortugueseBR]:
                "O bot está sem algumas permissões neste canal. Qualquer pessoa que possa gerenciar este canal consegue resolver isso indo nas configurações do canal e dando as permissões ao bot.\n\nElas são necessárias para gerar memes automaticamente durante uma conversa, mas pedir memes com {{meme}} ou {{custom}} funciona mesmo sem elas.",
            [Locale.Turkish]:
                "Botun bu kanalda bazı izinleri yok. Bu kanalı yönetebilen biri, kanal ayarlarına girip bu izinleri bota vererek bunu düzeltebilir.\n\nSohbet sırasında capslerin otomatik üretilmesi için gerekli, ama {{meme}} veya {{custom}} ile caps istemek bu izinler olmadan da mümkün.",
            [Locale.Italian]:
                "Al bot mancano alcuni permessi in questo canale. Chiunque possa gestire questo canale può risolvere andando nelle impostazioni del canale e dandoglieli.\n\nServono per generare i meme automaticamente durante una conversazione, ma chiedere meme con {{meme}} o {{custom}} è possibile anche senza.",
            [Locale.Indonesian]:
                "Bot tidak punya beberapa izin di channel ini. Siapa saja yang bisa mengelola channel ini bisa memperbaikinya dengan masuk ke pengaturan channel dan memberikan izin-izin itu ke bot.\n\nIzin ini diperlukan untuk membuat meme otomatis selama obrolan, tapi meminta meme lewat {{meme}} atau {{custom}} tetap bisa tanpa izin tersebut.",
            [Locale.Czech]:
                "Bot nemá v tomto kanálu některá oprávnění. Kdokoliv, kdo může tento kanál spravovat, to opraví v nastavení kanálu tím, že mu je udělí.\n\nJsou potřeba pro automatické generování memů během konverzace, ale vyžádat si memy přes {{meme}} nebo {{custom}} jde i bez nich.",
        },
    ),
    "deleteData.confirm.heading": buildLocales("🗑️ Delete all data for this channel?", {
        [Locale.Russian]: "🗑️ Удалить все данные для этого канала?",
        [Locale.Ukrainian]: "🗑️ Видалити всі дані для цього каналу?",
        [Locale.Dutch]: "🗑️ Alle data van dit kanaal verwijderen?",
        [Locale.French]: "🗑️ Supprimer toutes les données de ce salon ?",
        [Locale.German]: "🗑️ Alle Daten für diesen Kanal löschen?",
        [Locale.Polish]: "🗑️ Usunąć wszystkie dane tego kanału?",
        [Locale.SpanishES]: "🗑️ ¿Borrar todos los datos de este canal?",
        [Locale.SpanishLATAM]: "🗑️ ¿Borrar todos los datos de este canal?",
        [Locale.PortugueseBR]: "🗑️ Apagar todos os dados deste canal?",
        [Locale.Turkish]: "🗑️ Bu kanalın tüm verileri silinsin mi?",
        [Locale.Italian]: "🗑️ Eliminare tutti i dati di questo canale?",
        [Locale.Indonesian]: "🗑️ Hapus semua data channel ini?",
        [Locale.Czech]: "🗑️ Smazat všechna data tohoto kanálu?",
    }),
    "deleteData.confirm.body": buildLocales(
        "This permanently deletes all saved messages and image links for this channel from Jstmemit and can't be undone. The bot will also be turned off in this channel, so it stops picking up new messages. You can turn it back on anytime with {{enable}}.",
        {
            [Locale.Russian]:
                "Это навсегда удалит все сохранённые сообщения и ссылки на изображения для этого канала из Jstmemit, и это нельзя отменить. Бот также будет выключен в этом канале, так что он перестанет собирать новые сообщения. Включить его обратно можно в любой момент через {{enable}}.",
            [Locale.Ukrainian]:
                "Це назавжди видалить усі збережені повідомлення та посилання на зображення для цього каналу з Jstmemit, і це не можна скасувати. Бот також буде вимкнено у цьому каналі, тож він перестане збирати нові повідомлення. Увімкнути його назад можна будь-коли через {{enable}}.",
            [Locale.Dutch]:
                "Dit verwijdert permanent alle opgeslagen berichten en afbeeldingslinks van dit kanaal uit Jstmemit en kan niet ongedaan gemaakt worden. De bot wordt ook uitgezet in dit kanaal, dus hij pikt geen nieuwe berichten meer op. Je kunt hem altijd weer aanzetten met {{enable}}.",
            [Locale.French]:
                "Cela supprime définitivement tous les messages et liens d'images enregistrés pour ce salon de Jstmemit, et c'est irréversible. Le bot sera aussi désactivé dans ce salon, il arrêtera donc de récupérer les nouveaux messages. Vous pouvez le réactiver à tout moment avec {{enable}}.",
            [Locale.German]:
                "Das löscht dauerhaft alle gespeicherten Nachrichten und Bildlinks für diesen Kanal aus Jstmemit und kann nicht rückgängig gemacht werden. Der Bot wird außerdem in diesem Kanal ausgeschaltet und nimmt dann keine neuen Nachrichten mehr auf. Du kannst ihn jederzeit mit {{enable}} wieder einschalten.",
            [Locale.Polish]:
                "To trwale usunie wszystkie zapisane wiadomości i linki do obrazków dla tego kanału z Jstmemit i nie można tego cofnąć. Bot zostanie też wyłączony na tym kanale, więc przestanie zbierać nowe wiadomości. W każdej chwili możesz go włączyć z powrotem przez {{enable}}.",
            [Locale.SpanishES]:
                "Esto borra permanentemente todos los mensajes y enlaces de imágenes guardados de este canal en Jstmemit y no se puede deshacer. El bot también se desactivará en este canal, así que dejará de recoger mensajes nuevos. Puedes volver a activarlo cuando quieras con {{enable}}.",
            [Locale.SpanishLATAM]:
                "Esto borra permanentemente todos los mensajes y enlaces de imágenes guardados de este canal en Jstmemit y no se puede deshacer. El bot también se va a desactivar en este canal, así que dejará de guardar mensajes nuevos. Puedes volver a activarlo cuando quieras con {{enable}}.",
            [Locale.PortugueseBR]:
                "Isso apaga permanentemente todas as mensagens e links de imagens salvos deste canal no Jstmemit e não pode ser desfeito. O bot também vai ser desligado neste canal, então ele para de recolher mensagens novas. Você pode ligá-lo de novo quando quiser com {{enable}}.",
            [Locale.Turkish]:
                "Bu, bu kanala ait tüm kayıtlı mesajları ve görsel bağlantılarını Jstmemit'ten kalıcı olarak siler ve geri alınamaz. Bot ayrıca bu kanalda kapatılır, yani yeni mesajları almayı bırakır. İstediğin zaman {{enable}} ile tekrar açabilirsin.",
            [Locale.Italian]:
                "Questo elimina definitivamente tutti i messaggi e i link alle immagini salvati per questo canale da Jstmemit e non può essere annullato. Il bot verrà anche spento in questo canale, quindi smetterà di raccogliere nuovi messaggi. Puoi riaccenderlo quando vuoi con {{enable}}.",
            [Locale.Indonesian]:
                "Ini akan menghapus permanen semua pesan dan tautan gambar yang tersimpan untuk channel ini dari Jstmemit dan tidak bisa dibatalkan. Bot juga akan dimatikan di channel ini, jadi dia berhenti mengambil pesan baru. Kamu bisa menyalakannya lagi kapan saja lewat {{enable}}.",
            [Locale.Czech]:
                "Tím se z Jstmemitu trvale smažou všechny uložené zprávy a odkazy na obrázky pro tento kanál a nejde to vrátit zpět. Bot se navíc v tomto kanálu vypne, takže přestane sbírat nové zprávy. Kdykoliv ho můžeš zase zapnout přes {{enable}}.",
        },
    ),
    "deleteData.success.heading": buildLocales("✅ Data for this channel was removed", {
        [Locale.Russian]: "✅ Данные этого канала удалены",
        [Locale.Ukrainian]: "✅ Дані цього каналу видалено",
        [Locale.Dutch]: "✅ De data van dit kanaal is verwijderd",
        [Locale.French]: "✅ Les données de ce salon ont été supprimées",
        [Locale.German]: "✅ Die Daten dieses Kanals wurden gelöscht",
        [Locale.Polish]: "✅ Dane tego kanału zostały usunięte",
        [Locale.SpanishES]: "✅ Los datos de este canal se han borrado",
        [Locale.SpanishLATAM]: "✅ Los datos de este canal se borraron",
        [Locale.PortugueseBR]: "✅ Os dados deste canal foram apagados",
        [Locale.Turkish]: "✅ Bu kanalın verileri silindi",
        [Locale.Italian]: "✅ I dati di questo canale sono stati eliminati",
        [Locale.Indonesian]: "✅ Data channel ini sudah dihapus",
        [Locale.Czech]: "✅ Data tohoto kanálu byla smazána",
    }),
    "deleteData.success.body": buildLocales(
        "Every saved message and image link for this channel is deleted and I'm switched off here. Turn me back on with {{enable}} or a button below at any time.",
        {
            [Locale.Russian]:
                "Все сохранённые сообщения и ссылки на изображения для этого канала удалены, и здесь я выключен. Включить меня обратно можно в любой момент через {{enable}} или кнопкой ниже.",
            [Locale.Ukrainian]:
                "Усі збережені повідомлення та посилання на зображення для цього каналу видалено, і тут я вимкнений. Увімкнути мене назад можна будь-коли через {{enable}} або кнопкою нижче.",
            [Locale.Dutch]:
                "Elk opgeslagen bericht en elke afbeeldingslink van dit kanaal is verwijderd en ik sta hier uit. Zet me wanneer je maar wilt weer aan met {{enable}} of met de knop hieronder.",
            [Locale.French]:
                "Tous les messages et liens d'images enregistrés pour ce salon sont supprimés et je suis désactivé ici. Réactivez-moi à tout moment avec {{enable}} ou le bouton ci-dessous.",
            [Locale.German]:
                "Alle gespeicherten Nachrichten und Bildlinks für diesen Kanal sind gelöscht und ich bin hier ausgeschaltet. Schalte mich jederzeit mit {{enable}} oder dem Button unten wieder ein.",
            [Locale.Polish]:
                "Wszystkie zapisane wiadomości i linki do obrazków dla tego kanału zostały usunięte, a ja jestem tu wyłączony. Włącz mnie z powrotem w każdej chwili przez {{enable}} albo przyciskiem poniżej.",
            [Locale.SpanishES]:
                "Todos los mensajes y enlaces de imágenes guardados de este canal están borrados y aquí estoy desactivado. Vuelve a activarme cuando quieras con {{enable}} o con el botón de abajo.",
            [Locale.SpanishLATAM]:
                "Todos los mensajes y enlaces de imágenes guardados de este canal están borrados y aquí estoy desactivado. Vuelve a activarme cuando quieras con {{enable}} o con el botón de abajo.",
            [Locale.PortugueseBR]:
                "Todas as mensagens e links de imagens salvos deste canal foram apagados e aqui eu estou desligado. Me ligue de novo quando quiser com {{enable}} ou pelo botão abaixo.",
            [Locale.Turkish]:
                "Bu kanala ait tüm kayıtlı mesajlar ve görsel bağlantıları silindi, burada kapalıyım. İstediğin zaman {{enable}} ile ya da aşağıdaki butonla beni tekrar açabilirsin.",
            [Locale.Italian]:
                "Tutti i messaggi e i link alle immagini salvati per questo canale sono stati eliminati e qui sono spento. Riaccendimi quando vuoi con {{enable}} o con il pulsante qui sotto.",
            [Locale.Indonesian]:
                "Semua pesan dan tautan gambar yang tersimpan untuk channel ini sudah dihapus dan aku dimatikan di sini. Nyalakan aku lagi kapan saja lewat {{enable}} atau tombol di bawah.",
            [Locale.Czech]:
                "Všechny uložené zprávy a odkazy na obrázky pro tento kanál jsou smazané a jsem tu vypnutý. Kdykoliv mě můžeš zase zapnout přes {{enable}} nebo tlačítkem níž.",
        },
    ),
    "deleteData.button.turnBackOn": buildLocales("Turn back on", {
        [Locale.Russian]: "Включить обратно",
        [Locale.Ukrainian]: "Увімкнути назад",
        [Locale.Dutch]: "Weer aanzetten",
        [Locale.French]: "Réactiver",
        [Locale.German]: "Wieder einschalten",
        [Locale.Polish]: "Włącz z powrotem",
        [Locale.SpanishES]: "Volver a activar",
        [Locale.SpanishLATAM]: "Volver a activar",
        [Locale.PortugueseBR]: "Ligar de novo",
        [Locale.Turkish]: "Tekrar aç",
        [Locale.Italian]: "Riaccendi",
        [Locale.Indonesian]: "Nyalakan lagi",
        [Locale.Czech]: "Zase zapnout",
    }),
    "deleteData.button.tellUsWhy": buildLocales("💬 Tell us why", {
        [Locale.Russian]: "💬 Рассказать почему",
        [Locale.Ukrainian]: "💬 Розповісти чому",
        [Locale.Dutch]: "💬 Vertel ons waarom",
        [Locale.French]: "💬 Dites-nous pourquoi",
        [Locale.German]: "💬 Sag uns warum",
        [Locale.Polish]: "💬 Powiedz nam dlaczego",
        [Locale.SpanishES]: "💬 Cuéntanos por qué",
        [Locale.SpanishLATAM]: "💬 Cuéntanos por qué",
        [Locale.PortugueseBR]: "💬 Conte o motivo",
        [Locale.Turkish]: "💬 Nedenini söyle",
        [Locale.Italian]: "💬 Dicci perché",
        [Locale.Indonesian]: "💬 Ceritakan alasannya",
        [Locale.Czech]: "💬 Řekni nám proč",
    }),
    "deleteData.button.cancel": buildLocales("Cancel", {
        [Locale.Russian]: "Отмена",
        [Locale.Ukrainian]: "Скасувати",
        [Locale.Dutch]: "Annuleren",
        [Locale.French]: "Annuler",
        [Locale.German]: "Abbrechen",
        [Locale.Polish]: "Anuluj",
        [Locale.SpanishES]: "Cancelar",
        [Locale.SpanishLATAM]: "Cancelar",
        [Locale.PortugueseBR]: "Cancelar",
        [Locale.Turkish]: "İptal",
        [Locale.Italian]: "Annulla",
        [Locale.Indonesian]: "Batal",
        [Locale.Czech]: "Zrušit",
    }),
    "deleteData.button.delete": buildLocales("Delete all data", {
        [Locale.Russian]: "Удалить все данные",
        [Locale.Ukrainian]: "Видалити всі дані",
        [Locale.Dutch]: "Alle data verwijderen",
        [Locale.French]: "Supprimer toutes les données",
        [Locale.German]: "Alle Daten löschen",
        [Locale.Polish]: "Usuń wszystkie dane",
        [Locale.SpanishES]: "Borrar todos los datos",
        [Locale.SpanishLATAM]: "Borrar todos los datos",
        [Locale.PortugueseBR]: "Apagar todos os dados",
        [Locale.Turkish]: "Tüm verileri sil",
        [Locale.Italian]: "Elimina tutti i dati",
        [Locale.Indonesian]: "Hapus semua data",
        [Locale.Czech]: "Smazat všechna data",
    }),
    "settings.about.heading": buildLocales("<:jstmemit:1533562196980797462> Hey, I'm Jstmemit", {
        [Locale.Russian]: "<:jstmemit:1533562196980797462> Хэй, я Jstmemit",
        [Locale.Ukrainian]: "<:jstmemit:1533562196980797462> Хей, я Jstmemit",
        [Locale.Dutch]: "<:jstmemit:1533562196980797462> Hey, ik ben Jstmemit",
        [Locale.French]: "<:jstmemit:1533562196980797462> Hey, moi c'est Jstmemit",
        [Locale.German]: "<:jstmemit:1533562196980797462> Hey, ich bin Jstmemit",
        [Locale.Polish]: "<:jstmemit:1533562196980797462> Hej, jestem Jstmemit",
        [Locale.SpanishES]: "<:jstmemit:1533562196980797462> Ey, soy Jstmemit",
        [Locale.SpanishLATAM]: "<:jstmemit:1533562196980797462> Ey, soy Jstmemit",
        [Locale.PortugueseBR]: "<:jstmemit:1533562196980797462> Ei, eu sou o Jstmemit",
        [Locale.Turkish]: "<:jstmemit:1533562196980797462> Selam, ben Jstmemit",
        [Locale.Italian]: "<:jstmemit:1533562196980797462> Ehi, sono Jstmemit",
        [Locale.Indonesian]: "<:jstmemit:1533562196980797462> Hai, aku Jstmemit",
        [Locale.Czech]: "<:jstmemit:1533562196980797462> Čau, jsem Jstmemit",
    }),
    "settings.about.body": buildLocales(
        "The bot that makes memes from your chat. Talk about anything and...\nit will turn that into a meme on one of 660+ templates and roast you with it ¯\\_(ツ)_/¯",
        {
            [Locale.Russian]:
                "Бот, который делает мемы из вашего чата. Говорите о чём угодно, а он...\nпревратит это в мем на одном из 660+ шаблонов и постебётся над вами ¯\\_(ツ)_/¯",
            [Locale.Ukrainian]:
                "Бот, який робить меми з вашого чату. Говоріть про що завгодно, а він...\nперетворить це на мем на одному з 660+ шаблонів і постібеться з вас ¯\\_(ツ)_/¯",
            [Locale.Dutch]:
                "De bot die memes maakt van jullie chat. Praat waar je maar over wilt en...\nhij plakt het op een van zijn 660+ meme templates en pest je ermee ¯\\_(ツ)_/¯",
            [Locale.French]:
                "Le bot qui fait des mèmes à partir de votre chat. Parlez de ce que vous voulez et...\nil en fera un mème sur un de ses 660+ modèles pour se moquer de vous ¯\\_(ツ)_/¯",
            [Locale.German]:
                "Der Bot, der Memes aus eurem Chat macht. Redet über was ihr wollt und...\ner macht daraus ein Meme auf einer von 660+ Vorlagen und zieht euch damit auf ¯\\_(ツ)_/¯",
            [Locale.Polish]:
                "Bot, który robi memy z waszego czatu. Gadajcie o czym chcecie, a on...\nwrzuci to na jeden z 660+ szablonów i zrobi sobie z was jaja ¯\\_(ツ)_/¯",
            [Locale.SpanishES]:
                "El bot que hace memes de vuestro chat. Hablad de lo que queráis y...\nlo convertirá en un meme con una de sus 660+ plantillas para reírse de vosotros ¯\\_(ツ)_/¯",
            [Locale.SpanishLATAM]:
                "El bot que hace memes de su chat. Hablen de lo que quieran y...\nlo va a convertir en un meme con una de sus 660+ plantillas para burlarse de ustedes ¯\\_(ツ)_/¯",
            [Locale.PortugueseBR]:
                "O bot que faz memes do seu chat. Falem do que quiserem e...\nele transforma isso em meme com um dos 660+ templates pra tirar sarro de vocês ¯\\_(ツ)_/¯",
            [Locale.Turkish]:
                "Sohbetinizden caps üreten bot. Ne konuşursanız konuşun...\nonu 660'ten fazla şablondan biriyle capse çevirip sizinle dalga geçer ¯\\_(ツ)_/¯",
            [Locale.Italian]:
                "Il bot che fa meme dalla vostra chat. Parlate di quello che vi pare e...\nlo trasforma in un meme con uno dei suoi 660+ template per prendervi in giro ¯\\_(ツ)_/¯",
            [Locale.Indonesian]:
                "Bot yang bikin meme dari chat kalian. Ngobrolin apa saja dan...\ndia bakal jadiin itu meme pakai salah satu dari 660+ template buat nyindir kalian ¯\\_(ツ)_/¯",
            [Locale.Czech]:
                "Bot, který dělá memy z vašeho chatu. Bavte se o čemkoliv a...\nudělá z toho mem na jedné z 660+ šablon a utáhne si z vás ¯\\_(ツ)_/¯",
        },
    ),
    "settings.about.enablePrompt": buildLocales("Enable Jstmemit below to start!", {
        [Locale.Russian]: "Включите Jstmemit чтобы начать!",
        [Locale.Ukrainian]: "Увімкніть Jstmemit, щоб почати!",
        [Locale.Dutch]: "Schakel Jstmemit in om te beginnen!",
        [Locale.French]: "Activez Jstmemit pour commencer !",
        [Locale.German]: "Aktiviere Jstmemit, um loszulegen!",
        [Locale.Polish]: "Włącz Jstmemit, żeby zacząć!",
        [Locale.SpanishES]: "¡Activa Jstmemit para empezar!",
        [Locale.SpanishLATAM]: "¡Activa Jstmemit para empezar!",
        [Locale.PortugueseBR]: "Ative o Jstmemit para começar!",
        [Locale.Turkish]: "Başlamak için Jstmemit'i etkinleştir!",
        [Locale.Italian]: "Attiva Jstmemit per iniziare!",
        [Locale.Indonesian]: "Aktifkan Jstmemit untuk mulai!",
        [Locale.Czech]: "Zapni Jstmemit a začni!",
    }),
    "settings.button.disable": buildLocales("Disable", {
        [Locale.Russian]: "Выключить",
        [Locale.Ukrainian]: "Вимкнути",
        [Locale.Dutch]: "Uitschakelen",
        [Locale.French]: "Désactiver",
        [Locale.German]: "Deaktivieren",
        [Locale.Polish]: "Wyłącz",
        [Locale.SpanishES]: "Desactivar",
        [Locale.SpanishLATAM]: "Desactivar",
        [Locale.PortugueseBR]: "Desativar",
        [Locale.Turkish]: "Kapat",
        [Locale.Italian]: "Disattiva",
        [Locale.Indonesian]: "Nonaktifkan",
        [Locale.Czech]: "Vypnout",
    }),
    "settings.button.enable": buildLocales("Enable", {
        [Locale.Russian]: "Включить",
        [Locale.Ukrainian]: "Увімкнути",
        [Locale.Dutch]: "Inschakelen",
        [Locale.French]: "Activer",
        [Locale.German]: "Aktivieren",
        [Locale.Polish]: "Włącz",
        [Locale.SpanishES]: "Activar",
        [Locale.SpanishLATAM]: "Activar",
        [Locale.PortugueseBR]: "Ativar",
        [Locale.Turkish]: "Etkinleştir",
        [Locale.Italian]: "Attiva",
        [Locale.Indonesian]: "Aktifkan",
        [Locale.Czech]: "Zapnout",
    }),
    "settings.status.enabled": buildLocales("**✅ Jstmemit is turned on in this channel!**", {
        [Locale.Russian]: "**✅ Jstmemit включён в этом канале!**",
        [Locale.Ukrainian]: "**✅ Jstmemit увімкнено у цьому каналі!**",
        [Locale.Dutch]: "**✅ Jstmemit staat aan in dit kanaal!**",
        [Locale.French]: "**✅ Jstmemit est activé dans ce salon !**",
        [Locale.German]: "**✅ Jstmemit ist in diesem Kanal eingeschaltet!**",
        [Locale.Polish]: "**✅ Jstmemit jest włączony na tym kanale!**",
        [Locale.SpanishES]: "**✅ ¡Jstmemit está activado en este canal!**",
        [Locale.SpanishLATAM]: "**✅ ¡Jstmemit está activado en este canal!**",
        [Locale.PortugueseBR]: "**✅ O Jstmemit está ligado neste canal!**",
        [Locale.Turkish]: "**✅ Jstmemit bu kanalda açık!**",
        [Locale.Italian]: "**✅ Jstmemit è acceso in questo canale!**",
        [Locale.Indonesian]: "**✅ Jstmemit menyala di channel ini!**",
        [Locale.Czech]: "**✅ Jstmemit je v tomto kanálu zapnutý!**",
    }),
    "settings.status.disabled": buildLocales("**⚠️ Jstmemit needs to be enabled to make memes here!**", {
        [Locale.Russian]: "**⚠️ Чтобы делать мемы в этом канале нужно включить Jstmemit!**",
        [Locale.Ukrainian]: "**⚠️ Щоб робити меми у цьому каналі, потрібно увімкнути Jstmemit!**",
        [Locale.Dutch]: "**⚠️ Om memes te maken in dit kanaal moet Jstmemit ingeschakeld zijn!**",
        [Locale.French]: "**⚠️ Pour faire des mèmes dans ce salon, il faut activer Jstmemit !**",
        [Locale.German]: "**⚠️ Um in diesem Kanal Memes zu machen, muss Jstmemit aktiviert werden!**",
        [Locale.Polish]: "**⚠️ Żeby robić memy na tym kanale, trzeba włączyć Jstmemit!**",
        [Locale.SpanishES]: "**⚠️ ¡Para hacer memes en este canal hay que activar Jstmemit!**",
        [Locale.SpanishLATAM]: "**⚠️ ¡Para hacer memes en este canal hay que activar Jstmemit!**",
        [Locale.PortugueseBR]: "**⚠️ Para fazer memes neste canal é preciso ativar o Jstmemit!**",
        [Locale.Turkish]: "**⚠️ Bu kanalda caps yapmak için Jstmemit'in etkinleştirilmesi gerek!**",
        [Locale.Italian]: "**⚠️ Per fare meme in questo canale bisogna attivare Jstmemit!**",
        [Locale.Indonesian]: "**⚠️ Untuk bikin meme di channel ini, Jstmemit harus diaktifkan dulu!**",
        [Locale.Czech]: "**⚠️ Aby šlo v tomto kanálu dělat memy, musí se Jstmemit zapnout!**",
    }),
    "settings.meme.heading": buildLocales("💬 Meme settings", {
        [Locale.Russian]: "💬 Настройки мемов",
        [Locale.Ukrainian]: "💬 Налаштування мемів",
        [Locale.Dutch]: "💬 Meme instellingen",
        [Locale.French]: "💬 Paramètres des mèmes",
        [Locale.German]: "💬 Meme-Einstellungen",
        [Locale.Polish]: "💬 Ustawienia memów",
        [Locale.SpanishES]: "💬 Ajustes de memes",
        [Locale.SpanishLATAM]: "💬 Configuración de memes",
        [Locale.PortugueseBR]: "💬 Configurações de memes",
        [Locale.Turkish]: "💬 Caps ayarları",
        [Locale.Italian]: "💬 Impostazioni meme",
        [Locale.Indonesian]: "💬 Pengaturan meme",
        [Locale.Czech]: "💬 Nastavení memů",
    }),
    "settings.meme.body": buildLocales("You can control how often the bot is going to send memes and what's on them", {
        [Locale.Russian]: "Вы можете настроить, как часто бот будет отправлять мемы и что на них будет",
        [Locale.Ukrainian]: "Ви можете налаштувати, як часто бот буде надсилати меми і що на них буде",
        [Locale.Dutch]: "Je kunt instellen hoe vaak de bot memes stuurt en wat erop staat",
        [Locale.French]: "Vous pouvez contrôler la fréquence d'envoi des mèmes et ce qu'ils contiennent",
        [Locale.German]: "Du kannst steuern, wie oft der Bot Memes schickt und was darauf zu sehen ist",
        [Locale.Polish]: "Możesz kontrolować, jak często bot będzie wysyłać memy i co na nich będzie",
        [Locale.SpanishES]: "Puedes controlar con qué frecuencia el bot enviará memes y qué aparece en ellos",
        [Locale.SpanishLATAM]: "Puedes controlar con qué frecuencia el bot enviará memes y qué aparece en ellos",
        [Locale.PortugueseBR]: "Você pode controlar com que frequência o bot vai mandar memes e o que aparece neles",
        [Locale.Turkish]: "Botun ne sıklıkla caps göndereceğini ve üzerinde ne olacağını ayarlayabilirsin",
        [Locale.Italian]: "Puoi controllare quanto spesso il bot manderà meme e cosa ci sarà sopra",
        [Locale.Indonesian]: "Kamu bisa mengatur seberapa sering bot mengirim meme dan apa isinya",
        [Locale.Czech]: "Můžeš si nastavit, jak často bude bot posílat memy a co na nich bude",
    }),
    "settings.quality.heading": buildLocales("Image quality", {
        [Locale.Russian]: "Качество изображения",
        [Locale.Ukrainian]: "Якість зображення",
        [Locale.Dutch]: "Beeldkwaliteit",
        [Locale.French]: "Qualité d'image",
        [Locale.German]: "Bildqualität",
        [Locale.Polish]: "Jakość obrazu",
        [Locale.SpanishES]: "Calidad de imagen",
        [Locale.SpanishLATAM]: "Calidad de imagen",
        [Locale.PortugueseBR]: "Qualidade da imagem",
        [Locale.Turkish]: "Görsel kalitesi",
        [Locale.Italian]: "Qualità dell'immagine",
        [Locale.Indonesian]: "Kualitas gambar",
        [Locale.Czech]: "Kvalita obrázku",
    }),
    "settings.quality.body": buildLocales(
        "Choose if you'd like to receive memes in better quality or have instant meme generation",
        {
            [Locale.Russian]: "Выберите, что важнее: качество мемов или скорость генерации",
            [Locale.Ukrainian]: "Оберіть, що важливіше: якість мемів чи швидкість генерації",
            [Locale.Dutch]: "Wat vind je belangrijker: mooiere memes of memes die meteen klaar zijn?",
            [Locale.French]:
                "Qu'est-ce qui compte le plus pour vous : des mèmes plus jolis ou générés instantanément ?",
            [Locale.German]: "Was ist dir wichtiger: schönere Memes oder Memes, die sofort da sind?",
            [Locale.Polish]: "Co jest dla ciebie ważniejsze: ładniejsze memy czy memy od razu?",
            [Locale.SpanishES]: "¿Qué prefieres: memes con mejor calidad o memes al instante?",
            [Locale.SpanishLATAM]: "¿Qué prefieres: memes con mejor calidad o memes al instante?",
            [Locale.PortugueseBR]: "O que você prefere: memes com mais qualidade ou memes na hora?",
            [Locale.Turkish]: "Hangisi senin için daha önemli: daha kaliteli capsler mi, anında gelen capsler mi?",
            [Locale.Italian]: "Cosa preferisci: meme di qualità migliore o meme istantanei?",
            [Locale.Indonesian]: "Mana yang lebih penting buat kamu: meme lebih bagus atau meme langsung jadi?",
            [Locale.Czech]: "Co je pro tebe důležitější: hezčí memy, nebo memy hned?",
        },
    ),
    "settings.quality.image.label": buildLocales("Better quality (~1.2s per meme)", {
        [Locale.Russian]: "Лучшее качество (~1,2с на мем)",
        [Locale.Ukrainian]: "Краща якість (~1,2с на мем)",
        [Locale.Dutch]: "Betere kwaliteit (~1,2s per meme)",
        [Locale.French]: "Meilleure qualité (~1,2s par mème)",
        [Locale.German]: "Bessere Qualität (~1,2s pro Meme)",
        [Locale.Polish]: "Lepsza jakość (~1,2s na mema)",
        [Locale.SpanishES]: "Mejor calidad (~1,2s por meme)",
        [Locale.SpanishLATAM]: "Mejor calidad (~1,2s por meme)",
        [Locale.PortugueseBR]: "Mais qualidade (~1,2s por meme)",
        [Locale.Turkish]: "Daha iyi kalite (caps başına ~1,2sn)",
        [Locale.Italian]: "Qualità migliore (~1,2s per meme)",
        [Locale.Indonesian]: "Kualitas lebih bagus (~1,2dtk per meme)",
        [Locale.Czech]: "Lepší kvalita (~1,2s na mem)",
    }),
    "settings.quality.image.description": buildLocales("Don't compress images on memes and turn on antialiasing", {
        [Locale.Russian]: "Картинки без сжатия, сглаживание включено",
        [Locale.Ukrainian]: "Картинки без стиснення, згладжування увімкнене",
        [Locale.Dutch]: "Afbeeldingen zonder compressie, met antialiasing",
        [Locale.French]: "Images sans compression, avec anticrénelage",
        [Locale.German]: "Bilder ohne Komprimierung, mit Kantenglättung",
        [Locale.Polish]: "Obrazki bez kompresji, z wygładzaniem",
        [Locale.SpanishES]: "Imágenes sin comprimir, con suavizado",
        [Locale.SpanishLATAM]: "Imágenes sin comprimir, con suavizado",
        [Locale.PortugueseBR]: "Imagens sem compressão, com suavização de bordas",
        [Locale.Turkish]: "Görseller sıkıştırılmaz, kenar yumuşatma açık",
        [Locale.Italian]: "Immagini senza compressione, con antialiasing",
        [Locale.Indonesian]: "Gambar tanpa kompresi, dengan antialiasing",
        [Locale.Czech]: "Obrázky bez komprese, se zapnutým vyhlazováním",
    }),
    "settings.quality.speed.label": buildLocales("Faster generation (~0.3s per meme)", {
        [Locale.Russian]: "Быстрая генерация (~0,3с на мем)",
        [Locale.Ukrainian]: "Швидка генерація (~0,3с на мем)",
        [Locale.Dutch]: "Snellere generatie (~0,3s per meme)",
        [Locale.French]: "Génération plus rapide (~0,3s par mème)",
        [Locale.German]: "Schnellere Generierung (~0,3s pro Meme)",
        [Locale.Polish]: "Szybsze generowanie (~0,3s na mema)",
        [Locale.SpanishES]: "Generación más rápida (~0,3s por meme)",
        [Locale.SpanishLATAM]: "Generación más rápida (~0,3s por meme)",
        [Locale.PortugueseBR]: "Geração mais rápida (~0,3s por meme)",
        [Locale.Turkish]: "Daha hızlı üretim (caps başına ~0,3sn)",
        [Locale.Italian]: "Generazione più veloce (~0,3s per meme)",
        [Locale.Indonesian]: "Pembuatan lebih cepat (~0,3dtk per meme)",
        [Locale.Czech]: "Rychlejší generování (~0,3s na mem)",
    }),
    "settings.quality.speed.description": buildLocales("Compress and downscale images on memes, reduce text quality", {
        [Locale.Russian]: "Картинки сжимаются и уменьшаются, текст чуть хуже",
        [Locale.Ukrainian]: "Картинки стискаються і зменшуються, текст трохи гірший",
        [Locale.Dutch]: "Afbeeldingen worden gecomprimeerd en verkleind, tekst iets minder scherp",
        [Locale.French]: "Images compressées et réduites, texte un peu moins net",
        [Locale.German]: "Bilder werden komprimiert und verkleinert, Text etwas unschärfer",
        [Locale.Polish]: "Obrazki są kompresowane i zmniejszane, tekst trochę gorszy",
        [Locale.SpanishES]: "Las imágenes se comprimen y reducen, el texto queda algo peor",
        [Locale.SpanishLATAM]: "Las imágenes se comprimen y achican, el texto queda algo peor",
        [Locale.PortugueseBR]: "As imagens são comprimidas e reduzidas, o texto fica um pouco pior",
        [Locale.Turkish]: "Görseller sıkıştırılıp küçültülür, metin biraz daha kötü olur",
        [Locale.Italian]: "Le immagini vengono compresse e ridotte, il testo è un po' peggiore",
        [Locale.Indonesian]: "Gambar dikompres dan diperkecil, teks sedikit lebih buruk",
        [Locale.Czech]: "Obrázky se komprimují a zmenšují, text je o něco horší",
    }),
    "settings.font.heading": buildLocales("Font", {
        [Locale.Russian]: "Шрифт",
        [Locale.Ukrainian]: "Шрифт",
        [Locale.Dutch]: "Lettertype",
        [Locale.French]: "Police",
        [Locale.German]: "Schriftart",
        [Locale.Polish]: "Czcionka",
        [Locale.SpanishES]: "Fuente",
        [Locale.SpanishLATAM]: "Fuente",
        [Locale.PortugueseBR]: "Fonte",
        [Locale.Turkish]: "Yazı tipi",
        [Locale.Italian]: "Font",
        [Locale.Indonesian]: "Font",
        [Locale.Czech]: "Písmo",
    }),
    "settings.font.body": buildLocales("Choose the font you'd like the bot to use for memes.", {
        [Locale.Russian]: "Выберите шрифт, который бот будет использовать для мемов.",
        [Locale.Ukrainian]: "Оберіть шрифт, який бот використовуватиме для мемів.",
        [Locale.Dutch]: "Kies het lettertype dat de bot voor memes moet gebruiken.",
        [Locale.French]: "Choisissez la police que le bot utilisera pour les mèmes.",
        [Locale.German]: "Wähl die Schriftart, die der Bot für Memes verwenden soll.",
        [Locale.Polish]: "Wybierz czcionkę, której bot ma używać do memów.",
        [Locale.SpanishES]: "Elige la fuente que el bot usará para los memes.",
        [Locale.SpanishLATAM]: "Elige la fuente que el bot usará para los memes.",
        [Locale.PortugueseBR]: "Escolha a fonte que o bot vai usar nos memes.",
        [Locale.Turkish]: "Botun capsler için kullanmasını istediğin yazı tipini seç.",
        [Locale.Italian]: "Scegli il font che il bot userà per i meme.",
        [Locale.Indonesian]: "Pilih font yang mau dipakai bot untuk meme.",
        [Locale.Czech]: "Vyber písmo, které má bot používat pro memy.",
    }),
    "settings.font.random.label": buildLocales("Random", {
        [Locale.Russian]: "Случайный",
        [Locale.Ukrainian]: "Випадковий",
        [Locale.Dutch]: "Willekeurig",
        [Locale.French]: "Aléatoire",
        [Locale.German]: "Zufällig",
        [Locale.Polish]: "Losowa",
        [Locale.SpanishES]: "Aleatoria",
        [Locale.SpanishLATAM]: "Aleatoria",
        [Locale.PortugueseBR]: "Aleatória",
        [Locale.Turkish]: "Rastgele",
        [Locale.Italian]: "Casuale",
        [Locale.Indonesian]: "Acak",
        [Locale.Czech]: "Náhodné",
    }),
    "settings.font.random.description": buildLocales("Picks a random font every time", {
        [Locale.Russian]: "Каждый раз выбирает случайный шрифт",
        [Locale.Ukrainian]: "Щоразу обирає випадковий шрифт",
        [Locale.Dutch]: "Kiest elke keer een willekeurig lettertype",
        [Locale.French]: "Choisit une police au hasard à chaque fois",
        [Locale.German]: "Wählt jedes Mal eine zufällige Schriftart",
        [Locale.Polish]: "Za każdym razem wybiera losową czcionkę",
        [Locale.SpanishES]: "Elige una fuente aleatoria cada vez",
        [Locale.SpanishLATAM]: "Elige una fuente aleatoria cada vez",
        [Locale.PortugueseBR]: "Escolhe uma fonte aleatória toda vez",
        [Locale.Turkish]: "Her seferinde rastgele bir yazı tipi seçer",
        [Locale.Italian]: "Sceglie un font casuale ogni volta",
        [Locale.Indonesian]: "Memilih font acak setiap kali",
        [Locale.Czech]: "Pokaždé vybere náhodné písmo",
    }),
    "settings.font.comicSans.label": buildLocales("Comic Sans MS", {}),
    "settings.font.comicSans.description": buildLocales("Casual, hand-lettered font", {
        [Locale.Russian]: "Неформальный шрифт, будто написан от руки",
        [Locale.Ukrainian]: "Неформальний шрифт, ніби написаний від руки",
        [Locale.Dutch]: "Informeel lettertype, alsof het met de hand geschreven is",
        [Locale.French]: "Police décontractée, façon écriture à la main",
        [Locale.German]: "Lockere Schriftart, wie handgeschrieben",
        [Locale.Polish]: "Nieformalna czcionka, jakby pisana ręcznie",
        [Locale.SpanishES]: "Fuente informal, como escrita a mano",
        [Locale.SpanishLATAM]: "Fuente informal, como escrita a mano",
        [Locale.PortugueseBR]: "Fonte informal, parecendo escrita à mão",
        [Locale.Turkish]: "Elle yazılmış gibi duran samimi bir yazı tipi",
        [Locale.Italian]: "Font informale, come scritto a mano",
        [Locale.Indonesian]: "Font santai, seperti tulisan tangan",
        [Locale.Czech]: "Neformální písmo, jako psané rukou",
    }),
    "settings.font.impact.label": buildLocales("Impact", {}),
    "settings.font.impact.description": buildLocales("Bold font that became the standard for memes", {
        [Locale.Russian]: "Жирный шрифт, ставший стандартом для мемов",
        [Locale.Ukrainian]: "Жирний шрифт, що став стандартом для мемів",
        [Locale.Dutch]: "Vet lettertype dat de standaard werd voor memes",
        [Locale.French]: "Police grasse devenue la référence pour les mèmes",
        [Locale.German]: "Fette Schriftart, die zum Standard für Memes wurde",
        [Locale.Polish]: "Pogrubiona czcionka, która stała się standardem memów",
        [Locale.SpanishES]: "Fuente en negrita que se convirtió en el estándar de los memes",
        [Locale.SpanishLATAM]: "Fuente en negrita que se convirtió en el estándar de los memes",
        [Locale.PortugueseBR]: "Fonte em negrito que virou o padrão dos memes",
        [Locale.Turkish]: "Capslerin standardı haline gelen kalın yazı tipi",
        [Locale.Italian]: "Font in grassetto diventato lo standard dei meme",
        [Locale.Indonesian]: "Font tebal yang jadi standar meme",
        [Locale.Czech]: "Tučné písmo, které se stalo standardem memů",
    }),
    "settings.font.minecraft.label": buildLocales("Minecraft", {}),
    "settings.font.minecraft.description": buildLocales("Pixelated font from Minecraft", {
        [Locale.Russian]: "Пиксельный шрифт из Minecraft",
        [Locale.Ukrainian]: "Піксельний шрифт із Minecraft",
        [Locale.Dutch]: "Pixelig lettertype uit Minecraft",
        [Locale.French]: "Police pixelisée de Minecraft",
        [Locale.German]: "Pixelige Schriftart aus Minecraft",
        [Locale.Polish]: "Pikselowa czcionka z Minecrafta",
        [Locale.SpanishES]: "Fuente pixelada de Minecraft",
        [Locale.SpanishLATAM]: "Fuente pixelada de Minecraft",
        [Locale.PortugueseBR]: "Fonte pixelada do Minecraft",
        [Locale.Turkish]: "Minecraft'tan pikselli yazı tipi",
        [Locale.Italian]: "Font pixelato da Minecraft",
        [Locale.Indonesian]: "Font pixel dari Minecraft",
        [Locale.Czech]: "Pixelové písmo z Minecraftu",
    }),
    "settings.font.openDyslexic.label": buildLocales("OpenDyslexic", {}),
    "settings.font.openDyslexic.description": buildLocales(
        "Font with increased readability for some people with dyslexia",
        {
            [Locale.Russian]: "Некоторым людям с дислексией его легче читать",
            [Locale.Ukrainian]: "Декому з дислексією його легше читати",
            [Locale.Dutch]: "Voor sommige mensen met dyslexie beter leesbaar",
            [Locale.French]: "Plus lisible pour certaines personnes dyslexiques",
            [Locale.German]: "Für manche Menschen mit Legasthenie besser lesbar",
            [Locale.Polish]: "Dla części osób z dysleksją jest czytelniejsza",
            [Locale.SpanishES]: "Más legible para algunas personas con dislexia",
            [Locale.SpanishLATAM]: "Más legible para algunas personas con dislexia",
            [Locale.PortugueseBR]: "Mais legível para algumas pessoas com dislexia",
            [Locale.Turkish]: "Disleksisi olan bazı kişiler daha kolay okuyabiliyor",
            [Locale.Italian]: "Più leggibile per alcune persone con dislessia",
            [Locale.Indonesian]: "Lebih mudah dibaca bagi sebagian orang dengan disleksia",
            [Locale.Czech]: "Některým lidem s dyslexií se čte snáz",
        },
    ),
    "settings.frequency.heading": buildLocales("Frequency", {
        [Locale.Russian]: "Частота",
        [Locale.Ukrainian]: "Частота",
        [Locale.Dutch]: "Frequentie",
        [Locale.French]: "Fréquence",
        [Locale.German]: "Häufigkeit",
        [Locale.Polish]: "Częstotliwość",
        [Locale.SpanishES]: "Frecuencia",
        [Locale.SpanishLATAM]: "Frecuencia",
        [Locale.PortugueseBR]: "Frequência",
        [Locale.Turkish]: "Sıklık",
        [Locale.Italian]: "Frequenza",
        [Locale.Indonesian]: "Frekuensi",
        [Locale.Czech]: "Frekvence",
    }),
    "settings.frequency.body": buildLocales(
        "How often should the bot send a random meme in the chat without being asked to?",
        {
            [Locale.Russian]: "Как часто бот должен отправлять случайный мем в чат без запроса?",
            [Locale.Ukrainian]: "Як часто бот має надсилати випадковий мем у чат без запиту?",
            [Locale.Dutch]: "Hoe vaak moet de bot ongevraagd een random meme in de chat sturen?",
            [Locale.French]:
                "À quelle fréquence le bot doit-il envoyer un mème aléatoire dans le chat sans qu'on lui demande ?",
            [Locale.German]: "Wie oft soll der Bot ungefragt ein zufälliges Meme in den Chat schicken?",
            [Locale.Polish]: "Jak często bot ma wysyłać losowego mema na czat bez pytania?",
            [Locale.SpanishES]: "¿Con qué frecuencia debe el bot enviar un meme aleatorio al chat sin que se lo pidan?",
            [Locale.SpanishLATAM]:
                "¿Con qué frecuencia debe el bot enviar un meme al azar al chat sin que se lo pidan?",
            [Locale.PortugueseBR]: "Com que frequência o bot deve mandar um meme aleatório no chat sem ser pedido?",
            [Locale.Turkish]: "Bot, istenmeden sohbete ne sıklıkla rastgele bir caps göndersin?",
            [Locale.Italian]:
                "Quanto spesso il bot dovrebbe mandare un meme casuale in chat senza che gli venga chiesto?",
            [Locale.Indonesian]: "Seberapa sering bot mengirim meme acak ke chat tanpa diminta?",
            [Locale.Czech]: "Jak často má bot posílat náhodný mem do chatu, aniž by o to někdo požádal?",
        },
    ),
    "settings.frequency.never.label": buildLocales("Never", {
        [Locale.Russian]: "Никогда",
        [Locale.Ukrainian]: "Ніколи",
        [Locale.Dutch]: "Nooit",
        [Locale.French]: "Jamais",
        [Locale.German]: "Nie",
        [Locale.Polish]: "Nigdy",
        [Locale.SpanishES]: "Nunca",
        [Locale.SpanishLATAM]: "Nunca",
        [Locale.PortugueseBR]: "Nunca",
        [Locale.Turkish]: "Asla",
        [Locale.Italian]: "Mai",
        [Locale.Indonesian]: "Tidak pernah",
        [Locale.Czech]: "Nikdy",
    }),
    "settings.frequency.never.description": buildLocales("Don't send memes, unless requested via a /meme command", {
        [Locale.Russian]: "Не отправлять мемы, кроме запросов через команду /meme",
        [Locale.Ukrainian]: "Не надсилати меми, окрім запитів через команду /meme",
        [Locale.Dutch]: "Geen memes sturen, behalve via een /meme commando",
        [Locale.French]: "Ne pas envoyer de mèmes, sauf via la commande /meme",
        [Locale.German]: "Keine Memes schicken, außer über den /meme Befehl",
        [Locale.Polish]: "Nie wysyłaj memów, chyba że przez komendę /meme",
        [Locale.SpanishES]: "No enviar memes, salvo que se pidan con el comando /meme",
        [Locale.SpanishLATAM]: "No enviar memes, salvo que se pidan con el comando /meme",
        [Locale.PortugueseBR]: "Não mandar memes, a não ser pelo comando /meme",
        [Locale.Turkish]: "/meme komutuyla istenmedikçe caps gönderme",
        [Locale.Italian]: "Non mandare meme, se non richiesti tramite il comando /meme",
        [Locale.Indonesian]: "Jangan kirim meme, kecuali diminta lewat perintah /meme",
        [Locale.Czech]: "Neposílat memy, pokud nejsou vyžádány přes příkaz /meme",
    }),
    "settings.frequency.rarely.label": buildLocales("Rarely", {
        [Locale.Russian]: "Редко",
        [Locale.Ukrainian]: "Рідко",
        [Locale.Dutch]: "Zelden",
        [Locale.French]: "Rarement",
        [Locale.German]: "Selten",
        [Locale.Polish]: "Rzadko",
        [Locale.SpanishES]: "Rara vez",
        [Locale.SpanishLATAM]: "Rara vez",
        [Locale.PortugueseBR]: "Raramente",
        [Locale.Turkish]: "Nadiren",
        [Locale.Italian]: "Raramente",
        [Locale.Indonesian]: "Jarang",
        [Locale.Czech]: "Zřídka",
    }),
    "settings.frequency.rarely.description": buildLocales("Once every ~100 messages", {
        [Locale.Russian]: "Раз в ~100 сообщений",
        [Locale.Ukrainian]: "Раз на ~100 повідомлень",
        [Locale.Dutch]: "Eén per ~100 berichten",
        [Locale.French]: "Un tous les ~100 messages",
        [Locale.German]: "Eins pro ~100 Nachrichten",
        [Locale.Polish]: "Raz na ~100 wiadomości",
        [Locale.SpanishES]: "Uno cada ~100 mensajes",
        [Locale.SpanishLATAM]: "Uno cada ~100 mensajes",
        [Locale.PortugueseBR]: "Um a cada ~100 mensagens",
        [Locale.Turkish]: "Her ~100 mesajda bir",
        [Locale.Italian]: "Uno ogni ~100 messaggi",
        [Locale.Indonesian]: "Sekali tiap ~100 pesan",
        [Locale.Czech]: "Jednou za ~100 zpráv",
    }),
    "settings.frequency.sometimes.label": buildLocales("Sometimes", {
        [Locale.Russian]: "Иногда",
        [Locale.Ukrainian]: "Іноді",
        [Locale.Dutch]: "Soms",
        [Locale.French]: "Parfois",
        [Locale.German]: "Manchmal",
        [Locale.Polish]: "Czasami",
        [Locale.SpanishES]: "A veces",
        [Locale.SpanishLATAM]: "A veces",
        [Locale.PortugueseBR]: "Às vezes",
        [Locale.Turkish]: "Bazen",
        [Locale.Italian]: "A volte",
        [Locale.Indonesian]: "Kadang-kadang",
        [Locale.Czech]: "Občas",
    }),
    "settings.frequency.sometimes.description": buildLocales("Once every ~50 messages (for bigger servers)", {
        [Locale.Russian]: "Раз в ~50 сообщений (для больших серверов)",
        [Locale.Ukrainian]: "Раз на ~50 повідомлень (для великих серверів)",
        [Locale.Dutch]: "Eén per ~50 berichten (voor grotere servers)",
        [Locale.French]: "Un tous les ~50 messages (pour les grands serveurs)",
        [Locale.German]: "Eins pro ~50 Nachrichten (für größere Server)",
        [Locale.Polish]: "Raz na ~50 wiadomości (dla większych serwerów)",
        [Locale.SpanishES]: "Uno cada ~50 mensajes (para servidores grandes)",
        [Locale.SpanishLATAM]: "Uno cada ~50 mensajes (para servidores grandes)",
        [Locale.PortugueseBR]: "Um a cada ~50 mensagens (para servidores maiores)",
        [Locale.Turkish]: "Her ~50 mesajda bir (büyük sunucular için)",
        [Locale.Italian]: "Uno ogni ~50 messaggi (per server più grandi)",
        [Locale.Indonesian]: "Sekali tiap ~50 pesan (untuk server besar)",
        [Locale.Czech]: "Jednou za ~50 zpráv (pro větší servery)",
    }),
    "settings.frequency.often.label": buildLocales("Often", {
        [Locale.Russian]: "Часто",
        [Locale.Ukrainian]: "Часто",
        [Locale.Dutch]: "Vaak",
        [Locale.French]: "Souvent",
        [Locale.German]: "Oft",
        [Locale.Polish]: "Często",
        [Locale.SpanishES]: "A menudo",
        [Locale.SpanishLATAM]: "Seguido",
        [Locale.PortugueseBR]: "Frequentemente",
        [Locale.Turkish]: "Sık sık",
        [Locale.Italian]: "Spesso",
        [Locale.Indonesian]: "Sering",
        [Locale.Czech]: "Často",
    }),
    "settings.frequency.often.description": buildLocales("Once every ~20 messages (for medium servers)", {
        [Locale.Russian]: "Раз в ~20 сообщений (для средних серверов)",
        [Locale.Ukrainian]: "Раз на ~20 повідомлень (для середніх серверів)",
        [Locale.Dutch]: "Eén per ~20 berichten (voor middelgrote servers)",
        [Locale.French]: "Un tous les ~20 messages (pour les serveurs moyens)",
        [Locale.German]: "Eins pro ~20 Nachrichten (für mittelgroße Server)",
        [Locale.Polish]: "Raz na ~20 wiadomości (dla średnich serwerów)",
        [Locale.SpanishES]: "Uno cada ~20 mensajes (para servidores medianos)",
        [Locale.SpanishLATAM]: "Uno cada ~20 mensajes (para servidores medianos)",
        [Locale.PortugueseBR]: "Um a cada ~20 mensagens (para servidores médios)",
        [Locale.Turkish]: "Her ~20 mesajda bir (orta boy sunucular için)",
        [Locale.Italian]: "Uno ogni ~20 messaggi (per server medi)",
        [Locale.Indonesian]: "Sekali tiap ~20 pesan (untuk server menengah)",
        [Locale.Czech]: "Jednou za ~20 zpráv (pro střední servery)",
    }),
    "settings.frequency.quiteOften.label": buildLocales("Quite often", {
        [Locale.Russian]: "Довольно часто",
        [Locale.Ukrainian]: "Досить часто",
        [Locale.Dutch]: "Vrij vaak",
        [Locale.French]: "Assez souvent",
        [Locale.German]: "Ziemlich oft",
        [Locale.Polish]: "Dość często",
        [Locale.SpanishES]: "Bastante a menudo",
        [Locale.SpanishLATAM]: "Bastante seguido",
        [Locale.PortugueseBR]: "Bem frequentemente",
        [Locale.Turkish]: "Oldukça sık",
        [Locale.Italian]: "Abbastanza spesso",
        [Locale.Indonesian]: "Cukup sering",
        [Locale.Czech]: "Dost často",
    }),
    "settings.frequency.quiteOften.description": buildLocales("Once every ~10 messages (for smaller servers)", {
        [Locale.Russian]: "Раз в ~10 сообщений (для небольших серверов)",
        [Locale.Ukrainian]: "Раз на ~10 повідомлень (для невеликих серверів)",
        [Locale.Dutch]: "Eén per ~10 berichten (voor kleinere servers)",
        [Locale.French]: "Un tous les ~10 messages (pour les petits serveurs)",
        [Locale.German]: "Eins pro ~10 Nachrichten (für kleinere Server)",
        [Locale.Polish]: "Raz na ~10 wiadomości (dla mniejszych serwerów)",
        [Locale.SpanishES]: "Uno cada ~10 mensajes (para servidores pequeños)",
        [Locale.SpanishLATAM]: "Uno cada ~10 mensajes (para servidores chicos)",
        [Locale.PortugueseBR]: "Um a cada ~10 mensagens (para servidores menores)",
        [Locale.Turkish]: "Her ~10 mesajda bir (küçük sunucular için)",
        [Locale.Italian]: "Uno ogni ~10 messaggi (per server più piccoli)",
        [Locale.Indonesian]: "Sekali tiap ~10 pesan (untuk server kecil)",
        [Locale.Czech]: "Jednou za ~10 zpráv (pro menší servery)",
    }),
    "settings.frequency.veryOften.label": buildLocales("Very often", {
        [Locale.Russian]: "Очень часто",
        [Locale.Ukrainian]: "Дуже часто",
        [Locale.Dutch]: "Heel vaak",
        [Locale.French]: "Très souvent",
        [Locale.German]: "Sehr oft",
        [Locale.Polish]: "Bardzo często",
        [Locale.SpanishES]: "Muy a menudo",
        [Locale.SpanishLATAM]: "Muy seguido",
        [Locale.PortugueseBR]: "Muito frequentemente",
        [Locale.Turkish]: "Çok sık",
        [Locale.Italian]: "Molto spesso",
        [Locale.Indonesian]: "Sangat sering",
        [Locale.Czech]: "Velmi často",
    }),
    "settings.frequency.veryOften.description": buildLocales("Once every ~5 messages (for small or quiet servers)", {
        [Locale.Russian]: "Раз в ~5 сообщений (для маленьких или тихих серверов)",
        [Locale.Ukrainian]: "Раз на ~5 повідомлень (для маленьких або тихих серверів)",
        [Locale.Dutch]: "Eén per ~5 berichten (voor kleine of rustige servers)",
        [Locale.French]: "Un tous les ~5 messages (pour les petits serveurs ou les salons calmes)",
        [Locale.German]: "Eins pro ~5 Nachrichten (für kleine oder ruhige Server)",
        [Locale.Polish]: "Raz na ~5 wiadomości (dla małych lub cichych serwerów)",
        [Locale.SpanishES]: "Uno cada ~5 mensajes (para servidores pequeños o tranquilos)",
        [Locale.SpanishLATAM]: "Uno cada ~5 mensajes (para servidores chicos o tranquilos)",
        [Locale.PortugueseBR]: "Um a cada ~5 mensagens (para servidores pequenos ou parados)",
        [Locale.Turkish]: "Her ~5 mesajda bir (küçük ya da sakin sunucular için)",
        [Locale.Italian]: "Uno ogni ~5 messaggi (per server piccoli o tranquilli)",
        [Locale.Indonesian]: "Sekali tiap ~5 pesan (untuk server kecil atau sepi)",
        [Locale.Czech]: "Jednou za ~5 zpráv (pro malé nebo klidné servery)",
    }),
    "settings.avatars.heading": buildLocales("Avatars in memes", {
        [Locale.Russian]: "Аватары в мемах",
        [Locale.Ukrainian]: "Аватари у мемах",
        [Locale.Dutch]: "Avatars in memes",
        [Locale.French]: "Avatars dans les mèmes",
        [Locale.German]: "Avatare in Memes",
        [Locale.Polish]: "Awatary w memach",
        [Locale.SpanishES]: "Avatares en los memes",
        [Locale.SpanishLATAM]: "Avatares en los memes",
        [Locale.PortugueseBR]: "Avatares nos memes",
        [Locale.Turkish]: "Capslerde avatarlar",
        [Locale.Italian]: "Avatar nei meme",
        [Locale.Indonesian]: "Avatar di meme",
        [Locale.Czech]: "Avatary v memech",
    }),
    "settings.avatars.body": buildLocales("Include profile pictures in generated memes?", {
        [Locale.Russian]: "Использовать аватары в сгенерированных мемах?",
        [Locale.Ukrainian]: "Використовувати аватари у згенерованих мемах?",
        [Locale.Dutch]: "Profielfoto's gebruiken in gegenereerde memes?",
        [Locale.French]: "Inclure les photos de profil dans les mèmes générés ?",
        [Locale.German]: "Profilbilder in generierten Memes verwenden?",
        [Locale.Polish]: "Używać zdjęć profilowych w generowanych memach?",
        [Locale.SpanishES]: "¿Incluir fotos de perfil en los memes generados?",
        [Locale.SpanishLATAM]: "¿Incluir fotos de perfil en los memes generados?",
        [Locale.PortugueseBR]: "Incluir fotos de perfil nos memes gerados?",
        [Locale.Turkish]: "Üretilen capslerde profil fotoğrafları kullanılsın mı?",
        [Locale.Italian]: "Includere le foto profilo nei meme generati?",
        [Locale.Indonesian]: "Pakai foto profil di meme yang dibuat?",
        [Locale.Czech]: "Používat profilovky ve vygenerovaných memech?",
    }),
    "settings.avatars.yes.label": buildLocales("Yes", {
        [Locale.Russian]: "Да",
        [Locale.Ukrainian]: "Так",
        [Locale.Dutch]: "Ja",
        [Locale.French]: "Oui",
        [Locale.German]: "Ja",
        [Locale.Polish]: "Tak",
        [Locale.SpanishES]: "Sí",
        [Locale.SpanishLATAM]: "Sí",
        [Locale.PortugueseBR]: "Sim",
        [Locale.Turkish]: "Evet",
        [Locale.Italian]: "Sì",
        [Locale.Indonesian]: "Ya",
        [Locale.Czech]: "Ano",
    }),
    "settings.avatars.yes.description": buildLocales("Bot will use avatars for memes (recommended)", {
        [Locale.Russian]: "Бот будет использовать аватары для мемов (рекомендуется)",
        [Locale.Ukrainian]: "Бот буде використовувати аватари для мемів (рекомендовано)",
        [Locale.Dutch]: "De bot gebruikt avatars voor memes (aanbevolen)",
        [Locale.French]: "Le bot utilisera les avatars pour les mèmes (recommandé)",
        [Locale.German]: "Der Bot verwendet Avatare für Memes (empfohlen)",
        [Locale.Polish]: "Bot będzie używać awatarów do memów (zalecane)",
        [Locale.SpanishES]: "El bot usará avatares para los memes (recomendado)",
        [Locale.SpanishLATAM]: "El bot usará avatares para los memes (recomendado)",
        [Locale.PortugueseBR]: "O bot vai usar avatares nos memes (recomendado)",
        [Locale.Turkish]: "Bot capsler için avatarları kullanır (önerilir)",
        [Locale.Italian]: "Il bot userà gli avatar per i meme (consigliato)",
        [Locale.Indonesian]: "Bot akan pakai avatar untuk meme (disarankan)",
        [Locale.Czech]: "Bot bude používat avatary pro memy (doporučeno)",
    }),
    "settings.avatars.no.label": buildLocales("No", {
        [Locale.Russian]: "Нет",
        [Locale.Ukrainian]: "Ні",
        [Locale.Dutch]: "Nee",
        [Locale.French]: "Non",
        [Locale.German]: "Nein",
        [Locale.Polish]: "Nie",
        [Locale.SpanishES]: "No",
        [Locale.SpanishLATAM]: "No",
        [Locale.PortugueseBR]: "Não",
        [Locale.Turkish]: "Hayır",
        [Locale.Italian]: "No",
        [Locale.Indonesian]: "Tidak",
        [Locale.Czech]: "Ne",
    }),
    "settings.avatars.no.description": buildLocales("Bot won't use avatars for memes", {
        [Locale.Russian]: "Бот не будет использовать аватары для мемов",
        [Locale.Ukrainian]: "Бот не буде використовувати аватари для мемів",
        [Locale.Dutch]: "De bot gebruikt geen avatars voor memes",
        [Locale.French]: "Le bot n'utilisera pas les avatars pour les mèmes",
        [Locale.German]: "Der Bot verwendet keine Avatare für Memes",
        [Locale.Polish]: "Bot nie będzie używać awatarów do memów",
        [Locale.SpanishES]: "El bot no usará avatares para los memes",
        [Locale.SpanishLATAM]: "El bot no usará avatares para los memes",
        [Locale.PortugueseBR]: "O bot não vai usar avatares nos memes",
        [Locale.Turkish]: "Bot capsler için avatarları kullanmaz",
        [Locale.Italian]: "Il bot non userà gli avatar per i meme",
        [Locale.Indonesian]: "Bot tidak akan pakai avatar untuk meme",
        [Locale.Czech]: "Bot nebude používat avatary pro memy",
    }),
    "settings.milestones.heading": buildLocales("Milestones", {
        [Locale.Russian]: "Достижения",
        [Locale.Ukrainian]: "Досягнення",
        [Locale.Dutch]: "Mijlpalen",
        [Locale.French]: "Paliers",
        [Locale.German]: "Meilensteine",
        [Locale.Polish]: "Kamienie milowe",
        [Locale.SpanishES]: "Hitos",
        [Locale.SpanishLATAM]: "Hitos",
        [Locale.PortugueseBR]: "Marcos",
        [Locale.Turkish]: "Dönüm noktaları",
        [Locale.Italian]: "Traguardi",
        [Locale.Indonesian]: "Pencapaian",
        [Locale.Czech]: "Milníky",
    }),
    "settings.milestones.body": buildLocales(
        "Get a celebration recap when the channel hits a meme count milestone.\nSomething similar to a Spotify Wrapped, but about memes.",
        {
            [Locale.Russian]:
                "Итоги канала, когда он берёт новую отметку по мемам.\nЧто-то вроде Spotify Wrapped, только про мемы.",
            [Locale.Ukrainian]:
                "Підсумки каналу, коли він бере нову позначку за мемами.\nЩось на кшталт Spotify Wrapped, тільки про меми.",
            [Locale.Dutch]:
                "Een recap als het kanaal een meme-mijlpaal haalt.\nEen soort Spotify Wrapped, maar dan over memes.",
            [Locale.French]:
                "Un récap quand le salon atteint un palier de mèmes.\nUn peu comme un Spotify Wrapped, mais sur les mèmes.",
            [Locale.German]:
                "Ein Rückblick, wenn der Kanal einen Meme-Meilenstein erreicht.\nSo ähnlich wie Spotify Wrapped, nur mit Memes.",
            [Locale.Polish]:
                "Podsumowanie, gdy kanał osiągnie kolejny próg memów.\nCoś jak Spotify Wrapped, tylko o memach.",
            [Locale.SpanishES]:
                "Un resumen cuando el canal alcanza un hito de memes.\nAlgo parecido a un Spotify Wrapped, pero de memes.",
            [Locale.SpanishLATAM]:
                "Un resumen cuando el canal alcanza un hito de memes.\nAlgo parecido a un Spotify Wrapped, pero de memes.",
            [Locale.PortugueseBR]:
                "Um resumo quando o canal atinge um marco de memes.\nAlgo tipo um Spotify Wrapped, mas de memes.",
            [Locale.Turkish]:
                "Kanal belli bir caps sayısına ulaştığında bir özet.\nSpotify Wrapped gibi bir şey, ama capsler hakkında.",
            [Locale.Italian]:
                "Un riepilogo quando il canale raggiunge un traguardo di meme.\nUna specie di Spotify Wrapped, ma sui meme.",
            [Locale.Indonesian]:
                "Rangkuman saat channel mencapai jumlah meme tertentu.\nMirip Spotify Wrapped, tapi soal meme.",
            [Locale.Czech]:
                "Shrnutí, když kanál dosáhne dalšího milníku v počtu memů.\nNěco jako Spotify Wrapped, ale o memech.",
        },
    ),
    "settings.milestones.yes.label": buildLocales("Yes", {
        [Locale.Russian]: "Да",
        [Locale.Ukrainian]: "Так",
        [Locale.Dutch]: "Ja",
        [Locale.French]: "Oui",
        [Locale.German]: "Ja",
        [Locale.Polish]: "Tak",
        [Locale.SpanishES]: "Sí",
        [Locale.SpanishLATAM]: "Sí",
        [Locale.PortugueseBR]: "Sim",
        [Locale.Turkish]: "Evet",
        [Locale.Italian]: "Sì",
        [Locale.Indonesian]: "Ya",
        [Locale.Czech]: "Ano",
    }),
    "settings.milestones.yes.description": buildLocales(
        "Bot will send a recap every time the channel hits a meme count milestone",
        {
            [Locale.Russian]: "Бот пришлёт итоги, когда канал возьмёт новую отметку",
            [Locale.Ukrainian]: "Бот надішле підсумки, коли канал візьме нову позначку",
            [Locale.Dutch]: "De bot stuurt een recap als het kanaal een mijlpaal haalt",
            [Locale.French]: "Le bot enverra un récap quand le salon atteint un palier",
            [Locale.German]: "Der Bot schickt einen Rückblick, wenn ein Meilenstein erreicht ist",
            [Locale.Polish]: "Bot wyśle podsumowanie, gdy kanał osiągnie kolejny próg",
            [Locale.SpanishES]: "El bot enviará un resumen cuando el canal alcance un hito",
            [Locale.SpanishLATAM]: "El bot enviará un resumen cuando el canal alcance un hito",
            [Locale.PortugueseBR]: "O bot vai mandar um resumo quando o canal atingir um marco",
            [Locale.Turkish]: "Kanal yeni bir eşiğe ulaştığında bot özet gönderir",
            [Locale.Italian]: "Il bot manderà un riepilogo quando il canale raggiunge un traguardo",
            [Locale.Indonesian]: "Bot akan mengirim rangkuman saat channel mencapai target baru",
            [Locale.Czech]: "Bot pošle shrnutí, když kanál dosáhne dalšího milníku",
        },
    ),
    "settings.milestones.no.label": buildLocales("No", {
        [Locale.Russian]: "Нет",
        [Locale.Ukrainian]: "Ні",
        [Locale.Dutch]: "Nee",
        [Locale.French]: "Non",
        [Locale.German]: "Nein",
        [Locale.Polish]: "Nie",
        [Locale.SpanishES]: "No",
        [Locale.SpanishLATAM]: "No",
        [Locale.PortugueseBR]: "Não",
        [Locale.Turkish]: "Hayır",
        [Locale.Italian]: "No",
        [Locale.Indonesian]: "Tidak",
        [Locale.Czech]: "Ne",
    }),
    "settings.milestones.no.description": buildLocales("Turn off milestone notifications to keep channel quiet", {
        [Locale.Russian]: "Отключить их, чтобы в канале было тихо",
        [Locale.Ukrainian]: "Вимкнути їх, щоб у каналі було тихо",
        [Locale.Dutch]: "Zet ze uit om het kanaal rustig te houden",
        [Locale.French]: "Les désactiver pour garder le salon calme",
        [Locale.German]: "Ausschalten, damit der Kanal ruhig bleibt",
        [Locale.Polish]: "Wyłącz je, żeby na kanale było cicho",
        [Locale.SpanishES]: "Desactivarlos para mantener el canal tranquilo",
        [Locale.SpanishLATAM]: "Desactivarlos para que el canal quede tranquilo",
        [Locale.PortugueseBR]: "Desligar para manter o canal quieto",
        [Locale.Turkish]: "Kanalı sessiz tutmak için kapat",
        [Locale.Italian]: "Disattivarli per tenere il canale tranquillo",
        [Locale.Indonesian]: "Matikan supaya channel tetap tenang",
        [Locale.Czech]: "Vypnout, ať je v kanálu klid",
    }),
    "settings.footer.body": buildLocales("Want to remove all message data about this channel?", {
        [Locale.Russian]: "Хотите удалить все данные сообщений этого канала?",
        [Locale.Ukrainian]: "Хочете видалити всі дані повідомлень цього каналу?",
        [Locale.Dutch]: "Wil je alle berichtdata van dit kanaal verwijderen?",
        [Locale.French]: "Vous voulez supprimer toutes les données de messages de ce salon ?",
        [Locale.German]: "Möchtest du alle Nachrichtendaten dieses Kanals entfernen?",
        [Locale.Polish]: "Chcesz usunąć wszystkie dane wiadomości tego kanału?",
        [Locale.SpanishES]: "¿Quieres eliminar todos los datos de mensajes de este canal?",
        [Locale.SpanishLATAM]: "¿Quieres eliminar todos los datos de mensajes de este canal?",
        [Locale.PortugueseBR]: "Quer remover todos os dados de mensagens deste canal?",
        [Locale.Turkish]: "Bu kanalla ilgili tüm mesaj verilerini kaldırmak ister misin?",
        [Locale.Italian]: "Vuoi rimuovere tutti i dati dei messaggi di questo canale?",
        [Locale.Indonesian]: "Mau menghapus semua data pesan channel ini?",
        [Locale.Czech]: "Chceš odstranit všechna data zpráv tohoto kanálu?",
    }),
    "settings.footer.deleteButton": buildLocales("Delete all data", {
        [Locale.Russian]: "Удалить все данные",
        [Locale.Ukrainian]: "Видалити всі дані",
        [Locale.Dutch]: "Alle data verwijderen",
        [Locale.French]: "Supprimer toutes les données",
        [Locale.German]: "Alle Daten löschen",
        [Locale.Polish]: "Usuń wszystkie dane",
        [Locale.SpanishES]: "Borrar todos los datos",
        [Locale.SpanishLATAM]: "Borrar todos los datos",
        [Locale.PortugueseBR]: "Apagar todos os dados",
        [Locale.Turkish]: "Tüm verileri sil",
        [Locale.Italian]: "Elimina tutti i dati",
        [Locale.Indonesian]: "Hapus semua data",
        [Locale.Czech]: "Smazat všechna data",
    }),
    "feedback.submit.heading": buildLocales("💬 Feedback submitted!", {
        [Locale.Russian]: "💬 Отзыв отправлен!",
        [Locale.Ukrainian]: "💬 Відгук надіслано!",
        [Locale.Dutch]: "💬 Feedback verstuurd!",
        [Locale.French]: "💬 Message envoyé !",
        [Locale.German]: "💬 Feedback abgeschickt!",
        [Locale.Polish]: "💬 Wiadomość wysłana!",
        [Locale.SpanishES]: "💬 ¡Mensaje enviado!",
        [Locale.SpanishLATAM]: "💬 ¡Mensaje enviado!",
        [Locale.PortugueseBR]: "💬 Feedback enviado!",
        [Locale.Turkish]: "💬 Geri bildirim gönderildi!",
        [Locale.Italian]: "💬 Feedback inviato!",
        [Locale.Indonesian]: "💬 Masukan terkirim!",
        [Locale.Czech]: "💬 Zpětná vazba odeslána!",
    }),
    "feedback.submit.body": buildLocales(
        "Thank you very much for your message, our team has received it and will look into it. If you'd like to discuss it further feel free to join our [Support server](https://discord.gg/THRnn8fhkZ), this way we can send our reply to you.",
        {
            [Locale.Russian]:
                "Большое спасибо за ваше сообщение, наша команда получила его и рассмотрит. Если хотите обсудить его подробнее, присоединяйтесь к нашему [серверу поддержки](https://discord.gg/THRnn8fhkZ), так мы сможем отправить вам ответ.",
            [Locale.Ukrainian]:
                "Дуже дякуємо за ваше повідомлення, наша команда отримала його і розгляне. Якщо хочете обговорити його детальніше, приєднуйтесь до нашого [сервера підтримки](https://discord.gg/THRnn8fhkZ), так ми зможемо надіслати вам відповідь.",
            [Locale.Dutch]:
                "Heel erg bedankt voor je bericht, ons team heeft het ontvangen en gaat ernaar kijken. Wil je er verder over praten, kom dan gerust naar onze [Support server](https://discord.gg/THRnn8fhkZ), zo kunnen we je een antwoord sturen.",
            [Locale.French]:
                "Merci beaucoup pour votre message, notre équipe l'a bien reçu et va l'examiner. Si vous voulez en discuter davantage, rejoignez notre [serveur de support](https://discord.gg/THRnn8fhkZ), on pourra ainsi vous répondre.",
            [Locale.German]:
                "Vielen Dank für deine Nachricht, unser Team hat sie erhalten und wird sie sich ansehen. Wenn du weiter darüber sprechen möchtest, komm gerne auf unseren [Support-Server](https://discord.gg/THRnn8fhkZ), so können wir dir antworten.",
            [Locale.Polish]:
                "Bardzo dziękujemy za wiadomość, nasz zespół ją otrzymał i się nią zajmie. Jeśli chcesz porozmawiać o niej więcej, dołącz do naszego [serwera supportu](https://discord.gg/THRnn8fhkZ), dzięki temu będziemy mogli ci odpowiedzieć.",
            [Locale.SpanishES]:
                "Muchas gracias por tu mensaje, nuestro equipo lo ha recibido y lo revisará. Si quieres comentarlo más a fondo, únete a nuestro [servidor de soporte](https://discord.gg/THRnn8fhkZ), así podremos enviarte una respuesta.",
            [Locale.SpanishLATAM]:
                "Muchas gracias por tu mensaje, nuestro equipo lo recibió y lo revisará. Si quieres platicarlo más a fondo, únete a nuestro [servidor de soporte](https://discord.gg/THRnn8fhkZ), así podremos enviarte una respuesta.",
            [Locale.PortugueseBR]:
                "Muito obrigado pela sua mensagem, nossa equipe recebeu e vai analisar. Se quiser conversar mais sobre isso, entre no nosso [servidor de suporte](https://discord.gg/THRnn8fhkZ), assim podemos te mandar uma resposta.",
            [Locale.Turkish]:
                "Mesajın için çok teşekkürler, ekibimiz aldı ve inceleyecek. Daha fazla konuşmak istersen [Destek sunucumuza](https://discord.gg/THRnn8fhkZ) katıl, böylece sana yanıt gönderebiliriz.",
            [Locale.Italian]:
                "Grazie mille per il tuo messaggio, il nostro team l'ha ricevuto e lo esaminerà. Se vuoi parlarne meglio, unisciti al nostro [server di supporto](https://discord.gg/THRnn8fhkZ), così potremo risponderti.",
            [Locale.Indonesian]:
                "Terima kasih banyak atas pesanmu, tim kami sudah menerimanya dan akan meninjaunya. Kalau mau bahas lebih lanjut, gabung ke [server support](https://discord.gg/THRnn8fhkZ) kami, biar kami bisa kirim balasan ke kamu.",
            [Locale.Czech]:
                "Moc děkujeme za tvou zprávu, náš tým ji dostal a podívá se na ni. Pokud to chceš probrat víc, přidej se na náš [server podpory](https://discord.gg/THRnn8fhkZ), tak ti budeme moct poslat odpověď.",
        },
    ),
    "feedback.submit.yourMessage": buildLocales("Your message:", {
        [Locale.Russian]: "Ваше сообщение:",
        [Locale.Ukrainian]: "Ваше повідомлення:",
        [Locale.Dutch]: "Jouw bericht:",
        [Locale.French]: "Votre message :",
        [Locale.German]: "Deine Nachricht:",
        [Locale.Polish]: "Twoja wiadomość:",
        [Locale.SpanishES]: "Tu mensaje:",
        [Locale.SpanishLATAM]: "Tu mensaje:",
        [Locale.PortugueseBR]: "Sua mensagem:",
        [Locale.Turkish]: "Mesajın:",
        [Locale.Italian]: "Il tuo messaggio:",
        [Locale.Indonesian]: "Pesanmu:",
        [Locale.Czech]: "Tvoje zpráva:",
    }),
    "modal.customMeme.title": buildLocales("Generate a custom meme", {
        [Locale.Russian]: "Сделать свой мем",
        [Locale.Ukrainian]: "Зробити свій мем",
        [Locale.Dutch]: "Maak je eigen meme",
        [Locale.French]: "Générer un mème perso",
        [Locale.German]: "Eigenes Meme erstellen",
        [Locale.Polish]: "Zrób własnego mema",
        [Locale.SpanishES]: "Generar mi meme",
        [Locale.SpanishLATAM]: "Generar mi meme",
        [Locale.PortugueseBR]: "Gerar meu meme",
        [Locale.Turkish]: "Kendi capsini yap",
        [Locale.Italian]: "Genera il mio meme",
        [Locale.Indonesian]: "Bikin meme sendiri",
        [Locale.Czech]: "Udělat vlastní mem",
    }),
    "modal.customMeme.text.label": buildLocales("Text #{{id}}", {
        [Locale.Russian]: "Текст #{{id}}",
        [Locale.Ukrainian]: "Текст #{{id}}",
        [Locale.Dutch]: "Tekst #{{id}}",
        [Locale.French]: "Texte #{{id}}",
        [Locale.German]: "Text #{{id}}",
        [Locale.Polish]: "Tekst #{{id}}",
        [Locale.SpanishES]: "Texto #{{id}}",
        [Locale.SpanishLATAM]: "Texto #{{id}}",
        [Locale.PortugueseBR]: "Texto #{{id}}",
        [Locale.Turkish]: "Metin #{{id}}",
        [Locale.Italian]: "Testo #{{id}}",
        [Locale.Indonesian]: "Teks #{{id}}",
        [Locale.Czech]: "Text #{{id}}",
    }),
    "modal.customMeme.text.placeholder": buildLocales("Something funny here", {
        [Locale.Russian]: "Что-нибудь смешное",
        [Locale.Ukrainian]: "Щось смішне сюди",
        [Locale.Dutch]: "Iets grappigs hier",
        [Locale.French]: "Quelque chose de drôle ici",
        [Locale.German]: "Etwas Lustiges hier",
        [Locale.Polish]: "Coś śmiesznego tutaj",
        [Locale.SpanishES]: "Algo gracioso aquí",
        [Locale.SpanishLATAM]: "Algo gracioso aquí",
        [Locale.PortugueseBR]: "Algo engraçado aqui",
        [Locale.Turkish]: "Buraya komik bir şey",
        [Locale.Italian]: "Qualcosa di divertente qui",
        [Locale.Indonesian]: "Sesuatu yang lucu di sini",
        [Locale.Czech]: "Něco vtipného sem",
    }),
    "modal.customMeme.image.label": buildLocales("Image #{{id}}", {
        [Locale.Russian]: "Картинка #{{id}}",
        [Locale.Ukrainian]: "Картинка #{{id}}",
        [Locale.Dutch]: "Afbeelding #{{id}}",
        [Locale.French]: "Image #{{id}}",
        [Locale.German]: "Bild #{{id}}",
        [Locale.Polish]: "Obrazek #{{id}}",
        [Locale.SpanishES]: "Imagen #{{id}}",
        [Locale.SpanishLATAM]: "Imagen #{{id}}",
        [Locale.PortugueseBR]: "Imagem #{{id}}",
        [Locale.Turkish]: "Görsel #{{id}}",
        [Locale.Italian]: "Immagine #{{id}}",
        [Locale.Indonesian]: "Gambar #{{id}}",
        [Locale.Czech]: "Obrázek #{{id}}",
    }),
    "modal.feedback.title": buildLocales("Send feedback", {
        [Locale.Russian]: "Отправить отзыв",
        [Locale.Ukrainian]: "Надіслати відгук",
        [Locale.Dutch]: "Feedback versturen",
        [Locale.French]: "Envoyer un message",
        [Locale.German]: "Feedback senden",
        [Locale.Polish]: "Wyślij wiadomość",
        [Locale.SpanishES]: "Enviar mensaje",
        [Locale.SpanishLATAM]: "Enviar mensaje",
        [Locale.PortugueseBR]: "Enviar feedback",
        [Locale.Turkish]: "Geri bildirim gönder",
        [Locale.Italian]: "Invia feedback",
        [Locale.Indonesian]: "Kirim masukan",
        [Locale.Czech]: "Poslat zpětnou vazbu",
    }),
    "modal.feedback.title.error": buildLocales("Report error", {
        [Locale.Russian]: "Сообщить об ошибке",
        [Locale.Ukrainian]: "Повідомити про помилку",
        [Locale.Dutch]: "Fout melden",
        [Locale.French]: "Signaler l'erreur",
        [Locale.German]: "Fehler melden",
        [Locale.Polish]: "Zgłoś błąd",
        [Locale.SpanishES]: "Informar del error",
        [Locale.SpanishLATAM]: "Reportar el error",
        [Locale.PortugueseBR]: "Reportar erro",
        [Locale.Turkish]: "Hatayı bildir",
        [Locale.Italian]: "Segnala l'errore",
        [Locale.Indonesian]: "Laporkan error",
        [Locale.Czech]: "Nahlásit chybu",
    }),
    "modal.feedback.label": buildLocales("Your message", {
        [Locale.Russian]: "Ваше сообщение",
        [Locale.Ukrainian]: "Ваше повідомлення",
        [Locale.Dutch]: "Jouw bericht",
        [Locale.French]: "Votre message",
        [Locale.German]: "Deine Nachricht",
        [Locale.Polish]: "Twoja wiadomość",
        [Locale.SpanishES]: "Tu mensaje",
        [Locale.SpanishLATAM]: "Tu mensaje",
        [Locale.PortugueseBR]: "Sua mensagem",
        [Locale.Turkish]: "Mesajın",
        [Locale.Italian]: "Il tuo messaggio",
        [Locale.Indonesian]: "Pesanmu",
        [Locale.Czech]: "Tvoje zpráva",
    }),
    "modal.feedback.description": buildLocales("Report a bug, suggest a feature or tell us what you think", {
        [Locale.Russian]: "Сообщите о баге, предложите идею или просто напишите что думаете",
        [Locale.Ukrainian]: "Повідомте про баг, запропонуйте ідею або просто напишіть, що думаєте",
        [Locale.Dutch]: "Meld een bug, stel een feature voor of laat weten wat je vindt",
        [Locale.French]: "Signalez un bug, proposez une fonctionnalité ou donnez votre avis",
        [Locale.German]: "Melde einen Bug, schlag ein Feature vor oder sag uns deine Meinung",
        [Locale.Polish]: "Zgłoś błąd, zaproponuj funkcję lub podziel się opinią",
        [Locale.SpanishES]: "Informa de un error, sugiere una función o dinos qué opinas",
        [Locale.SpanishLATAM]: "Reporta un error, sugiere una función o dinos qué opinas",
        [Locale.PortugueseBR]: "Reporte um bug, sugira uma função ou diga o que você acha",
        [Locale.Turkish]: "Hata bildir, özellik öner veya ne düşündüğünü söyle",
        [Locale.Italian]: "Segnala un bug, suggerisci una funzione o dicci cosa ne pensi",
        [Locale.Indonesian]: "Laporkan bug, usulkan fitur, atau beri tahu pendapatmu",
        [Locale.Czech]: "Nahlaš chybu, navrhni funkci nebo nám řekni svůj názor",
    }),
    "modal.feedback.description.error": buildLocales("Please describe what you were doing when the error happened", {
        [Locale.Russian]: "Опишите, что вы делали, когда появилась ошибка",
        [Locale.Ukrainian]: "Опишіть, що ви робили, коли з'явилася помилка",
        [Locale.Dutch]: "Beschrijf wat je deed toen de fout optrad",
        [Locale.French]: "Décrivez ce que vous faisiez quand l'erreur est apparue",
        [Locale.German]: "Beschreibe, was du gemacht hast, als der Fehler auftrat",
        [Locale.Polish]: "Opisz, co się działo, gdy pojawił się błąd",
        [Locale.SpanishES]: "Cuéntanos qué estabas haciendo cuando apareció el error",
        [Locale.SpanishLATAM]: "Cuéntanos qué estabas haciendo cuando salió el error",
        [Locale.PortugueseBR]: "Conte o que você estava fazendo quando o erro apareceu",
        [Locale.Turkish]: "Hata çıktığında ne yaptığını yaz",
        [Locale.Italian]: "Descrivi cosa stavi facendo quando è comparso l'errore",
        [Locale.Indonesian]: "Ceritakan apa yang kamu lakukan saat error muncul",
        [Locale.Czech]: "Popiš, co se dělo, když se chyba objevila",
    }),
    "modal.feedback.placeholder": buildLocales("Hello, could you please add ... meme template?", {
        [Locale.Russian]: "Привет, добавьте пожалуйста шаблон мема ...",
        [Locale.Ukrainian]: "Привіт, додайте будь ласка шаблон мема ...",
        [Locale.Dutch]: "Hoi, kunnen jullie het ... meme template toevoegen?",
        [Locale.French]: "Bonjour, pourriez-vous ajouter le modèle de mème ... ?",
        [Locale.German]: "Hallo, könnt ihr bitte die Meme-Vorlage ... hinzufügen?",
        [Locale.Polish]: "Cześć, moglibyście dodać szablon mema ...?",
        [Locale.SpanishES]: "Hola, ¿podríais añadir la plantilla de meme ...?",
        [Locale.SpanishLATAM]: "Hola, ¿podrían agregar la plantilla de meme ...?",
        [Locale.PortugueseBR]: "Oi, vocês poderiam adicionar o template de meme ...?",
        [Locale.Turkish]: "Merhaba, ... caps şablonunu ekler misiniz?",
        [Locale.Italian]: "Ciao, potreste aggiungere il template di meme ...?",
        [Locale.Indonesian]: "Halo, bisa tolong tambahkan template meme ...?",
        [Locale.Czech]: "Ahoj, mohli byste přidat šablonu memu ...?",
    }),
    "modal.feedback.placeholder.error": buildLocales("I got an error after ...", {
        [Locale.Russian]: "Ошибка появилась после ...",
        [Locale.Ukrainian]: "Помилка з'явилася після ...",
        [Locale.Dutch]: "Ik kreeg een fout nadat ik ...",
        [Locale.French]: "J'ai eu une erreur après ...",
        [Locale.German]: "Ich habe einen Fehler bekommen, nachdem ...",
        [Locale.Polish]: "Dostałem błąd po ...",
        [Locale.SpanishES]: "Me dio un error después de ...",
        [Locale.SpanishLATAM]: "Me salió un error después de ...",
        [Locale.PortugueseBR]: "Deu erro depois que eu ...",
        [Locale.Turkish]: "... yaptıktan sonra hata aldım",
        [Locale.Italian]: "Ho ricevuto un errore dopo ...",
        [Locale.Indonesian]: "Aku dapat error setelah ...",
        [Locale.Czech]: "Chyba se objevila po ...",
    }),
    "help.about.heading": buildLocales("<:jstmemit:1533562196980797462> Hey, I'm Jstmemit", {
        [Locale.Russian]: "<:jstmemit:1533562196980797462> Хэй, я Jstmemit",
        [Locale.Ukrainian]: "<:jstmemit:1533562196980797462> Хей, я Jstmemit",
        [Locale.Dutch]: "<:jstmemit:1533562196980797462> Hey, ik ben Jstmemit",
        [Locale.French]: "<:jstmemit:1533562196980797462> Hey, moi c'est Jstmemit",
        [Locale.German]: "<:jstmemit:1533562196980797462> Hey, ich bin Jstmemit",
        [Locale.Polish]: "<:jstmemit:1533562196980797462> Hej, jestem Jstmemit",
        [Locale.SpanishES]: "<:jstmemit:1533562196980797462> Ey, soy Jstmemit",
        [Locale.SpanishLATAM]: "<:jstmemit:1533562196980797462> Ey, soy Jstmemit",
        [Locale.PortugueseBR]: "<:jstmemit:1533562196980797462> Ei, eu sou o Jstmemit",
        [Locale.Turkish]: "<:jstmemit:1533562196980797462> Selam, ben Jstmemit",
        [Locale.Italian]: "<:jstmemit:1533562196980797462> Ehi, sono Jstmemit",
        [Locale.Indonesian]: "<:jstmemit:1533562196980797462> Hai, aku Jstmemit",
        [Locale.Czech]: "<:jstmemit:1533562196980797462> Čau, jsem Jstmemit",
    }),
    "help.about.commands.user": buildLocales(
        "### 👤 Anywhere on Discord: **{{voice}}**, **{{custom}}**, **{{feedback}}**, **{{help}}**",
        {
            [Locale.Russian]: "### 👤 Везде в Discord: **{{voice}}**, **{{custom}}**, **{{feedback}}**, **{{help}}**",
            [Locale.Ukrainian]:
                "### 👤 Будь-де в Discord: **{{voice}}**, **{{custom}}**, **{{feedback}}**, **{{help}}**",
            [Locale.Dutch]: "### 👤 Overal op Discord: **{{voice}}**, **{{custom}}**, **{{feedback}}**, **{{help}}**",
            [Locale.French]:
                "### 👤 Partout sur Discord : **{{voice}}**, **{{custom}}**, **{{feedback}}**, **{{help}}**",
            [Locale.German]:
                "### 👤 Überall auf Discord: **{{voice}}**, **{{custom}}**, **{{feedback}}**, **{{help}}**",
            [Locale.Polish]:
                "### 👤 Wszędzie na Discordzie: **{{voice}}**, **{{custom}}**, **{{feedback}}**, **{{help}}**",
            [Locale.SpanishES]:
                "### 👤 En cualquier parte de Discord: **{{voice}}**, **{{custom}}**, **{{feedback}}**, **{{help}}**",
            [Locale.SpanishLATAM]:
                "### 👤 En cualquier parte de Discord: **{{voice}}**, **{{custom}}**, **{{feedback}}**, **{{help}}**",
            [Locale.PortugueseBR]:
                "### 👤 Em qualquer lugar do Discord: **{{voice}}**, **{{custom}}**, **{{feedback}}**, **{{help}}**",
            [Locale.Turkish]:
                "### 👤 Discord'un her yerinde: **{{voice}}**, **{{custom}}**, **{{feedback}}**, **{{help}}**",
            [Locale.Italian]:
                "### 👤 Ovunque su Discord: **{{voice}}**, **{{custom}}**, **{{feedback}}**, **{{help}}**",
            [Locale.Indonesian]:
                "### 👤 Di mana saja di Discord: **{{voice}}**, **{{custom}}**, **{{feedback}}**, **{{help}}**",
            [Locale.Czech]:
                "### 👤 Kdekoliv na Discordu: **{{voice}}**, **{{custom}}**, **{{feedback}}**, **{{help}}**",
        },
    ),
    "help.about.commands.guild": buildLocales(
        "### 🏠 In servers with the bot: **{{meme}}**, **{{enable}}**, **{{settings}}**, **{{achievements}}**",
        {
            [Locale.Russian]:
                "### 🏠 На серверах с ботом: **{{meme}}**, **{{enable}}**, **{{settings}}**, **{{achievements}}**",
            [Locale.Ukrainian]:
                "### 🏠 На серверах із ботом: **{{meme}}**, **{{enable}}**, **{{settings}}**, **{{achievements}}**",
            [Locale.Dutch]:
                "### 🏠 In servers met de bot: **{{meme}}**, **{{enable}}**, **{{settings}}**, **{{achievements}}**",
            [Locale.French]:
                "### 🏠 Sur les serveurs avec le bot : **{{meme}}**, **{{enable}}**, **{{settings}}**, **{{achievements}}**",
            [Locale.German]:
                "### 🏠 Auf Servern mit dem Bot: **{{meme}}**, **{{enable}}**, **{{settings}}**, **{{achievements}}**",
            [Locale.Polish]:
                "### 🏠 Na serwerach z botem: **{{meme}}**, **{{enable}}**, **{{settings}}**, **{{achievements}}**",
            [Locale.SpanishES]:
                "### 🏠 En servidores con el bot: **{{meme}}**, **{{enable}}**, **{{settings}}**, **{{achievements}}**",
            [Locale.SpanishLATAM]:
                "### 🏠 En servidores con el bot: **{{meme}}**, **{{enable}}**, **{{settings}}**, **{{achievements}}**",
            [Locale.PortugueseBR]:
                "### 🏠 Em servidores com o bot: **{{meme}}**, **{{enable}}**, **{{settings}}**, **{{achievements}}**",
            [Locale.Turkish]:
                "### 🏠 Botun olduğu sunucularda: **{{meme}}**, **{{enable}}**, **{{settings}}**, **{{achievements}}**",
            [Locale.Italian]:
                "### 🏠 Nei server con il bot: **{{meme}}**, **{{enable}}**, **{{settings}}**, **{{achievements}}**",
            [Locale.Indonesian]:
                "### 🏠 Di server yang ada botnya: **{{meme}}**, **{{enable}}**, **{{settings}}**, **{{achievements}}**",
            [Locale.Czech]:
                "### 🏠 Na serverech s botem: **{{meme}}**, **{{enable}}**, **{{settings}}**, **{{achievements}}**",
        },
    ),
    "help.autoMemes.heading": buildLocales("## 💬  But how exactly does that work?", {
        [Locale.Russian]: "## 💬  А как это вообще работает?",
        [Locale.Ukrainian]: "## 💬  А як це взагалі працює?",
        [Locale.Dutch]: "## 💬  Maar hoe werkt dat precies?",
        [Locale.French]: "## 💬  Mais comment ça marche exactement ?",
        [Locale.German]: "## 💬  Aber wie funktioniert das genau?",
        [Locale.Polish]: "## 💬  Ale jak to właściwie działa?",
        [Locale.SpanishES]: "## 💬  Pero ¿cómo funciona exactamente?",
        [Locale.SpanishLATAM]: "## 💬  Pero ¿cómo funciona exactamente?",
        [Locale.PortugueseBR]: "## 💬  Mas como isso funciona exatamente?",
        [Locale.Turkish]: "## 💬  Peki bu tam olarak nasıl çalışıyor?",
        [Locale.Italian]: "## 💬  Ma come funziona di preciso?",
        [Locale.Indonesian]: "## 💬  Tapi cara kerjanya gimana?",
        [Locale.Czech]: "## 💬  Ale jak to přesně funguje?",
    }),
    "help.autoMemes.description": buildLocales(
        "Once every few dozen messages it picks a meme template, takes a few images/gifs/messages and mixes it all together into a meme.\n\nEach generated meme has **:thumbsup: Like**, **:repeat: Regenerate** and** :thumbsdown: Dislike** buttons that improve the quality of future memes by helping the bot to understand what was funny.",
        {
            [Locale.Russian]:
                "Раз в несколько десятков сообщений он выбирает шаблон мема, берёт несколько картинок/гифок/сообщений и смешивает всё это в мем.\n\nУ каждого сгенерированного мема есть кнопки **:thumbsup: Нравится**, **:repeat: Заново** и **:thumbsdown: Не нравится**, которые улучшают качество будущих мемов, помогая боту понять, что было смешно.",
            [Locale.Ukrainian]:
                "Раз на кілька десятків повідомлень він обирає шаблон мема, бере кілька картинок/гіфок/повідомлень і змішує все це в мем.\n\nУ кожного згенерованого мема є кнопки **:thumbsup: Подобається**, **:repeat: Заново** та **:thumbsdown: Не подобається**, які покращують якість майбутніх мемів, допомагаючи боту зрозуміти, що було смішно.",
            [Locale.Dutch]:
                "Eens per paar dozijn berichten kiest hij een meme template, pakt een paar afbeeldingen/gifs/berichten en gooit alles samen tot een meme.\n\nElke gegenereerde meme heeft **:thumbsup: Like**, **:repeat: Opnieuw** en **:thumbsdown: Dislike** knoppen die de kwaliteit van toekomstige memes verbeteren door de bot te laten snappen wat grappig was.",
            [Locale.French]:
                "Toutes les quelques dizaines de messages, il choisit un modèle de mème, prend quelques images/gifs/messages et mélange le tout en un mème.\n\nChaque mème généré a des boutons **:thumbsup: J'aime**, **:repeat: Regénérer** et **:thumbsdown: Je n'aime pas** qui améliorent la qualité des futurs mèmes en aidant le bot à comprendre ce qui était drôle.",
            [Locale.German]:
                "Alle paar Dutzend Nachrichten sucht er eine Meme-Vorlage aus, nimmt ein paar Bilder/GIFs/Nachrichten und mischt alles zu einem Meme zusammen.\n\nJedes generierte Meme hat **:thumbsup: Gefällt mir**, **:repeat: Nochmal** und **:thumbsdown: Gefällt mir nicht** Buttons, die die Qualität zukünftiger Memes verbessern, weil der Bot dadurch versteht, was lustig war.",
            [Locale.Polish]:
                "Raz na kilkadziesiąt wiadomości wybiera szablon mema, bierze kilka obrazków/gifów/wiadomości i miesza to wszystko w mema.\n\nKażdy wygenerowany mem ma przyciski **:thumbsup: Lubię to**, **:repeat: Jeszcze raz** i **:thumbsdown: Nie lubię**, które poprawiają jakość przyszłych memów, pomagając botowi zrozumieć, co było śmieszne.",
            [Locale.SpanishES]:
                "Una vez cada varias docenas de mensajes elige una plantilla de meme, coge un par de imágenes/gifs/mensajes y lo mezcla todo en un meme.\n\nCada meme generado tiene botones de **:thumbsup: Me gusta**, **:repeat: Regenerar** y **:thumbsdown: No me gusta** que mejoran la calidad de los memes futuros ayudando al bot a entender qué tuvo gracia.",
            [Locale.SpanishLATAM]:
                "Una vez cada varias decenas de mensajes elige una plantilla de meme, toma un par de imágenes/gifs/mensajes y mezcla todo en un meme.\n\nCada meme generado tiene botones de **:thumbsup: Me gusta**, **:repeat: Regenerar** y **:thumbsdown: No me gusta** que mejoran la calidad de los memes futuros ayudando al bot a entender qué fue gracioso.",
            [Locale.PortugueseBR]:
                "Uma vez a cada algumas dezenas de mensagens ele escolhe um template de meme, pega algumas imagens/gifs/mensagens e mistura tudo em um meme.\n\nCada meme gerado tem botões de **:thumbsup: Curtir**, **:repeat: Gerar de novo** e **:thumbsdown: Não curtir** que melhoram a qualidade dos próximos memes ajudando o bot a entender o que foi engraçado.",
            [Locale.Turkish]:
                "Birkaç düzine mesajda bir caps şablonu seçer, birkaç görsel/gif/mesaj alır ve hepsini karıştırıp bir caps yapar.\n\nÜretilen her capste **:thumbsup: Beğen**, **:repeat: Yeniden** ve **:thumbsdown: Beğenme** butonları var. Bunlar botun neyin komik olduğunu anlamasına yardım ederek gelecekteki capslerin kalitesini artırıyor.",
            [Locale.Italian]:
                "Una volta ogni qualche decina di messaggi sceglie un template, prende qualche immagine/gif/messaggio e mescola tutto in un meme.\n\nOgni meme generato ha i pulsanti **:thumbsup: Mi piace**, **:repeat: Rigenera** e **:thumbsdown: Non mi piace** che migliorano la qualità dei meme futuri aiutando il bot a capire cosa faceva ridere.",
            [Locale.Indonesian]:
                "Sekali tiap beberapa puluh pesan dia memilih template meme, mengambil beberapa gambar/gif/pesan, lalu mencampur semuanya jadi satu meme.\n\nSetiap meme yang dibuat punya tombol **:thumbsup: Suka**, **:repeat: Ulangi**, dan **:thumbsdown: Tidak suka** yang meningkatkan kualitas meme berikutnya dengan membantu bot paham mana yang lucu.",
            [Locale.Czech]:
                "Jednou za pár desítek zpráv si vybere šablonu memu, vezme pár obrázků/gifů/zpráv a všechno to smíchá do memu.\n\nKaždý vygenerovaný mem má tlačítka **:thumbsup: Líbí**, **:repeat: Znovu** a **:thumbsdown: Nelíbí**, která zlepšují kvalitu budoucích memů tím, že botovi pomáhají pochopit, co bylo vtipné.",
        },
    ),
    "help.rightClick.heading": buildLocales("## 🖱 Turn anything into a meme", {
        [Locale.Russian]: "## 🖱 Превратить что угодно в мем",
        [Locale.Ukrainian]: "## 🖱 Перетворити будь-що на мем",
        [Locale.Dutch]: "## 🖱 Maak van alles een meme",
        [Locale.French]: "## 🖱 Transformez n'importe quoi en mème",
        [Locale.German]: "## 🖱 Mach aus allem ein Meme",
        [Locale.Polish]: "## 🖱 Zrób mema z czegokolwiek",
        [Locale.SpanishES]: "## 🖱 Convierte cualquier cosa en un meme",
        [Locale.SpanishLATAM]: "## 🖱 Convierte cualquier cosa en un meme",
        [Locale.PortugueseBR]: "## 🖱 Transforme qualquer coisa em meme",
        [Locale.Turkish]: "## 🖱 Her şeyi capse çevir",
        [Locale.Italian]: "## 🖱 Trasforma qualsiasi cosa in un meme",
        [Locale.Indonesian]: "## 🖱 Ubah apa saja jadi meme",
        [Locale.Czech]: "## 🖱 Udělej mem z čehokoliv",
    }),
    "help.rightClick.description": buildLocales(
        'With it you can also remake any existing (even voice!) message into a quote, a fake news report or a Grok tweet. Or put someone\'s profile picture into a "MrBeast style" YouTube thumbnail.\n\nOpen the Apps menu after a right-click or long-press on mobile, choose Jstmemit and select the meme you want to get.',
        {
            [Locale.Russian]:
                "С ним ещё можно переделать любое существующее (даже голосовое!) сообщение в цитату, срочные новости или твит от Grok. Или поставить чью-то аватарку на превью YouTube в стиле MrBeast.\n\nОткройте меню «Приложения» правым кликом или долгим нажатием на телефоне, выберите Jstmemit и нужный мем.",
            [Locale.Ukrainian]:
                "З ним ще можна переробити будь-яке наявне (навіть голосове!) повідомлення на цитату, гарячі новини чи твіт від Grok. Або поставити чиюсь аватарку на прев'ю YouTube у стилі MrBeast.\n\nВідкрийте меню «Застосунки» правим кліком або довгим натисканням на телефоні, оберіть Jstmemit і потрібний мем.",
            [Locale.Dutch]:
                'Je kunt er ook elk bestaand bericht (zelfs een spraakbericht!) mee omtoveren tot een quote, breaking news of een Grok tweet. Of iemands profielfoto in een YouTube thumbnail in "MrBeast stijl" plakken.\n\nOpen het Apps menu na een rechtsklik of lang indrukken op mobiel, kies Jstmemit en selecteer de meme die je wilt.',
            [Locale.French]:
                "Vous pouvez aussi transformer n'importe quel message existant (même vocal !) en citation, en flash info ou en tweet de Grok. Ou mettre la photo de profil de quelqu'un dans une miniature YouTube « style MrBeast ».\n\nOuvrez le menu Applications après un clic droit ou un appui long sur mobile, choisissez Jstmemit et sélectionnez le mème que vous voulez.",
            [Locale.German]:
                'Damit kannst du auch jede vorhandene Nachricht (sogar Sprachnachrichten!) in ein Zitat, eine Eilmeldung oder einen Grok-Tweet verwandeln. Oder jemandes Profilbild in ein YouTube-Thumbnail im "MrBeast-Stil" packen.\n\nÖffne das Apps-Menü per Rechtsklick oder langem Drücken auf dem Handy, wähl Jstmemit und dann das Meme, das du haben willst.',
            [Locale.Polish]:
                "Możesz nim też przerobić dowolną istniejącą wiadomość (nawet głosową!) na cytat, pilne wiadomości albo tweeta Groka. Albo wstawić czyjeś zdjęcie profilowe na miniaturę YouTube „w stylu MrBeasta”.\n\nOtwórz menu Aplikacje prawym kliknięciem lub długim przytrzymaniem na telefonie, wybierz Jstmemit i mema, który cię interesuje.",
            [Locale.SpanishES]:
                "Con él también puedes convertir cualquier mensaje ya enviado (¡incluso de voz!) en una cita, una noticia urgente o un tweet de Grok. O poner la foto de perfil de alguien en una miniatura de YouTube «estilo MrBeast».\n\nAbre el menú Aplicaciones con clic derecho o pulsación larga en el móvil, elige Jstmemit y selecciona el meme que quieras.",
            [Locale.SpanishLATAM]:
                "Con él también puedes convertir cualquier mensaje ya enviado (¡incluso de voz!) en una cita, una noticia urgente o un tweet de Grok. O poner la foto de perfil de alguien en una miniatura de YouTube «estilo MrBeast».\n\nAbre el menú Aplicaciones con clic derecho o dejando presionado en el celular, elige Jstmemit y selecciona el meme que quieras.",
            [Locale.PortugueseBR]:
                'Com ele você também pode transformar qualquer mensagem já enviada (até de voz!) em uma citação, uma notícia urgente ou um tweet do Grok. Ou colocar a foto de perfil de alguém numa thumb do YouTube "estilo MrBeast".\n\nAbra o menu Aplicativos com o clique direito ou segurando a mensagem no celular, escolha o Jstmemit e selecione o meme que você quer.',
            [Locale.Turkish]:
                "Onunla mevcut herhangi bir mesajı (sesli mesajı bile!) alıntıya, son dakika haberine ya da Grok tweetine çevirebilirsin. Ya da birinin profil fotoğrafını \"MrBeast tarzı\" bir YouTube thumbnail'ine koyabilirsin.\n\nSağ tıklayarak ya da telefonda uzun basarak Uygulamalar menüsünü aç, Jstmemit'i seç ve istediğin capsi seç.",
            [Locale.Italian]:
                'Con lui puoi anche trasformare qualsiasi messaggio già inviato (anche vocale!) in una citazione, una notizia flash o un tweet di Grok. Oppure mettere la foto profilo di qualcuno in una miniatura YouTube "stile MrBeast".\n\nApri il menu App con il tasto destro o con un tocco prolungato su mobile, scegli Jstmemit e seleziona il meme che vuoi.',
            [Locale.Indonesian]:
                'Dengan bot ini kamu juga bisa mengubah pesan yang sudah ada (bahkan pesan suara!) jadi quote, berita terkini, atau tweet Grok. Atau menaruh foto profil seseorang di thumbnail YouTube "ala MrBeast".\n\nBuka menu Aplikasi lewat klik kanan atau tekan lama di HP, pilih Jstmemit, lalu pilih meme yang kamu mau.',
            [Locale.Czech]:
                "Můžeš s ním taky předělat jakoukoliv existující zprávu (i hlasovou!) na citát, zprávy nebo tweet od Groka. Nebo dát něčí profilovku na YouTube náhled „ve stylu MrBeasta“.\n\nOtevři menu Aplikace pravým kliknutím nebo dlouhým podržením na mobilu, vyber Jstmemit a pak mem, který chceš.",
        },
    ),
    "help.button.achievements": buildLocales("🏆 View achievements", {
        [Locale.Russian]: "🏆 Посмотреть достижения",
        [Locale.Ukrainian]: "🏆 Переглянути досягнення",
        [Locale.Dutch]: "🏆 Prestaties bekijken",
        [Locale.French]: "🏆 Voir les succès",
        [Locale.German]: "🏆 Erfolge ansehen",
        [Locale.Polish]: "🏆 Zobacz osiągnięcia",
        [Locale.SpanishES]: "🏆 Ver logros",
        [Locale.SpanishLATAM]: "🏆 Ver logros",
        [Locale.PortugueseBR]: "🏆 Ver conquistas",
        [Locale.Turkish]: "🏆 Başarıları gör",
        [Locale.Italian]: "🏆 Vedi obiettivi",
        [Locale.Indonesian]: "🏆 Lihat pencapaian",
        [Locale.Czech]: "🏆 Zobrazit úspěchy",
    }),
    "help.voice.heading": buildLocales("## 🔊  Make voice messages", {
        [Locale.Russian]: "## 🔊  Голосовые сообщения",
        [Locale.Ukrainian]: "## 🔊  Голосові повідомлення",
        [Locale.Dutch]: "## 🔊  Spraakberichten maken",
        [Locale.French]: "## 🔊  Créer des messages vocaux",
        [Locale.German]: "## 🔊  Sprachnachrichten erstellen",
        [Locale.Polish]: "## 🔊  Twórz wiadomości głosowe",
        [Locale.SpanishES]: "## 🔊  Crea mensajes de voz",
        [Locale.SpanishLATAM]: "## 🔊  Crea mensajes de voz",
        [Locale.PortugueseBR]: "## 🔊  Faça mensagens de voz",
        [Locale.Turkish]: "## 🔊  Sesli mesaj oluştur",
        [Locale.Italian]: "## 🔊  Crea messaggi vocali",
        [Locale.Indonesian]: "## 🔊  Bikin pesan suara",
        [Locale.Czech]: "## 🔊  Vytvářej hlasové zprávy",
    }),
    "help.voice.description": buildLocales(
        "Use {{voice}} to narrate your text using one of 23 different voices. Perfect for making soundboard phrases or simply narrating funny messages.",
        {
            [Locale.Russian]:
                "Используйте {{voice}}, чтобы озвучить свой текст одним из 23 разных голосов. Отлично подходит для фразочек в саундборд или просто озвучки смешных сообщений.",
            [Locale.Ukrainian]:
                "Використовуйте {{voice}}, щоб озвучити свій текст одним із 23 різних голосів. Чудово підходить для фразочок у саундборд або просто озвучки смішних повідомлень.",
            [Locale.Dutch]:
                "Gebruik {{voice}} om je tekst te laten voorlezen door een van de 23 verschillende stemmen. Perfect voor soundboard kreten of gewoon om grappige berichten voor te lezen.",
            [Locale.French]:
                "Utilisez {{voice}} pour faire lire votre texte par une des 23 voix disponibles. Parfait pour des répliques de soundboard ou simplement pour lire des messages drôles.",
            [Locale.German]:
                "Nutze {{voice}}, um deinen Text von einer der 23 verschiedenen Stimmen vorlesen zu lassen. Perfekt für Soundboard-Sprüche oder einfach, um lustige Nachrichten vorzulesen.",
            [Locale.Polish]:
                "Użyj {{voice}}, żeby przeczytać swój tekst jednym z 23 różnych głosów. Świetne do tekstów na soundboard albo po prostu do czytania śmiesznych wiadomości.",
            [Locale.SpanishES]:
                "Usa {{voice}} para narrar tu texto con una de las 23 voces disponibles. Perfecto para frases de soundboard o simplemente para leer mensajes graciosos.",
            [Locale.SpanishLATAM]:
                "Usa {{voice}} para narrar tu texto con una de las 23 voces disponibles. Perfecto para frases de soundboard o simplemente para leer mensajes graciosos.",
            [Locale.PortugueseBR]:
                "Use {{voice}} para narrar seu texto com uma das 23 vozes diferentes. Perfeito para frases de soundboard ou só para narrar mensagens engraçadas.",
            [Locale.Turkish]:
                "Metnini 23 farklı sesten biriyle okutmak için {{voice}} kullan. Soundboard cümleleri ya da komik mesajları seslendirmek için birebir.",
            [Locale.Italian]:
                "Usa {{voice}} per far leggere il tuo testo da una delle 23 voci disponibili. Perfetto per frasi da soundboard o semplicemente per leggere messaggi divertenti.",
            [Locale.Indonesian]:
                "Pakai {{voice}} untuk membacakan teksmu dengan salah satu dari 23 suara berbeda. Cocok buat bikin potongan soundboard atau sekadar membacakan pesan lucu.",
            [Locale.Czech]:
                "Použij {{voice}} a nech svůj text přečíst jedním z 23 různých hlasů. Ideální na hlášky do soundboardu nebo prostě na čtení vtipných zpráv.",
        },
    ),
    "help.faq.heading": buildLocales("## ❓ Frequently asked questions", {
        [Locale.Russian]: "## ❓ Частые вопросы",
        [Locale.Ukrainian]: "## ❓ Часті питання",
        [Locale.Dutch]: "## ❓ Veelgestelde vragen",
        [Locale.French]: "## ❓ Questions fréquentes",
        [Locale.German]: "## ❓ Häufige Fragen",
        [Locale.Polish]: "## ❓ Częste pytania",
        [Locale.SpanishES]: "## ❓ Preguntas frecuentes",
        [Locale.SpanishLATAM]: "## ❓ Preguntas frecuentes",
        [Locale.PortugueseBR]: "## ❓ Perguntas frequentes",
        [Locale.Turkish]: "## ❓ Sık sorulan sorular",
        [Locale.Italian]: "## ❓ Domande frequenti",
        [Locale.Indonesian]: "## ❓ Pertanyaan yang sering ditanyakan",
        [Locale.Czech]: "## ❓ Časté dotazy",
    }),
    "help.faq.description": buildLocales(
        "**Select your question in the selection menu below to see the answer.**\nCan't find an answer to your question? We can help you in the [Support server](https://discord.gg/THRnn8fhkZ)",
        {
            [Locale.Russian]:
                "**Выберите свой вопрос в меню ниже, чтобы увидеть ответ.**\nНе нашли ответ на свой вопрос? Мы поможем вам на [сервере поддержки](https://discord.gg/THRnn8fhkZ)",
            [Locale.Ukrainian]:
                "**Оберіть своє питання в меню нижче, щоб побачити відповідь.**\nНе знайшли відповідь на своє питання? Ми допоможемо вам на [сервері підтримки](https://discord.gg/THRnn8fhkZ)",
            [Locale.Dutch]:
                "**Kies je vraag in het menu hieronder om het antwoord te zien.**\nKun je het antwoord op je vraag niet vinden? We helpen je graag in de [Support server](https://discord.gg/THRnn8fhkZ)",
            [Locale.French]:
                "**Sélectionnez votre question dans le menu ci-dessous pour voir la réponse.**\nVous ne trouvez pas la réponse à votre question ? On peut vous aider sur le [serveur de support](https://discord.gg/THRnn8fhkZ)",
            [Locale.German]:
                "**Wähl deine Frage im Menü unten aus, um die Antwort zu sehen.**\nKeine Antwort auf deine Frage gefunden? Wir helfen dir auf dem [Support-Server](https://discord.gg/THRnn8fhkZ)",
            [Locale.Polish]:
                "**Wybierz swoje pytanie w menu poniżej, żeby zobaczyć odpowiedź.**\nNie możesz znaleźć odpowiedzi na swoje pytanie? Pomożemy ci na [serwerze supportu](https://discord.gg/THRnn8fhkZ)",
            [Locale.SpanishES]:
                "**Selecciona tu pregunta en el menú de abajo para ver la respuesta.**\n¿No encuentras respuesta a tu pregunta? Podemos ayudarte en el [servidor de soporte](https://discord.gg/THRnn8fhkZ)",
            [Locale.SpanishLATAM]:
                "**Selecciona tu pregunta en el menú de abajo para ver la respuesta.**\n¿No encuentras respuesta a tu pregunta? Podemos ayudarte en el [servidor de soporte](https://discord.gg/THRnn8fhkZ)",
            [Locale.PortugueseBR]:
                "**Selecione sua pergunta no menu abaixo para ver a resposta.**\nNão achou a resposta para a sua pergunta? A gente pode te ajudar no [servidor de suporte](https://discord.gg/THRnn8fhkZ)",
            [Locale.Turkish]:
                "**Cevabı görmek için aşağıdaki menüden sorunu seç.**\nSorunun cevabını bulamadın mı? [Destek sunucusunda](https://discord.gg/THRnn8fhkZ) yardımcı olabiliriz",
            [Locale.Italian]:
                "**Seleziona la tua domanda nel menu qui sotto per vedere la risposta.**\nNon trovi la risposta alla tua domanda? Possiamo aiutarti sul [server di supporto](https://discord.gg/THRnn8fhkZ)",
            [Locale.Indonesian]:
                "**Pilih pertanyaanmu di menu di bawah untuk melihat jawabannya.**\nTidak menemukan jawaban untuk pertanyaanmu? Kami bisa bantu di [server support](https://discord.gg/THRnn8fhkZ)",
            [Locale.Czech]:
                "**Vyber svou otázku v menu níž a uvidíš odpověď.**\nNemůžeš najít odpověď na svou otázku? Pomůžeme ti na [serveru podpory](https://discord.gg/THRnn8fhkZ)",
        },
    ),
    "help.faq.iAddedTheBotWhatNow.question": buildLocales("I added the bot, what now?", {
        [Locale.Russian]: "Я добавил бота, что дальше?",
        [Locale.Ukrainian]: "Я додав бота, що далі?",
        [Locale.Dutch]: "Ik heb de bot toegevoegd, wat nu?",
        [Locale.French]: "J'ai ajouté le bot, et maintenant ?",
        [Locale.German]: "Ich habe den Bot hinzugefügt, was jetzt?",
        [Locale.Polish]: "Dodałem bota, co dalej?",
        [Locale.SpanishES]: "Ya he añadido el bot, ¿y ahora qué?",
        [Locale.SpanishLATAM]: "Ya agregué el bot, ¿y ahora qué?",
        [Locale.PortugueseBR]: "Adicionei o bot, e agora?",
        [Locale.Turkish]: "Botu ekledim, şimdi ne yapmalıyım?",
        [Locale.Italian]: "Ho aggiunto il bot, e adesso?",
        [Locale.Indonesian]: "Aku sudah menambahkan botnya, terus apa?",
        [Locale.Czech]: "Přidal jsem bota, co teď?",
    }),
    "help.faq.iAddedTheBotWhatNow.answer": buildLocales(
        "**Run {{enable}} in a channel.** The bot will start learning from new messages there. After chatting for a bit run {{meme}} to generate a meme. Memes will also come automatically when the channel is active and there is a conversation ongoing. You can change frequency for those in {{settings}}.",
        {
            [Locale.Russian]:
                "**Запустите {{enable}} в канале.** Бот начнёт учиться на новых сообщениях там. Пообщайтесь немного и запустите {{meme}}, чтобы сгенерировать мем. Мемы также будут приходить сами, когда канал активен и идёт разговор. Частоту таких мемов можно поменять в {{settings}}.",
            [Locale.Ukrainian]:
                "**Запустіть {{enable}} у каналі.** Бот почне вчитися на нових повідомленнях там. Поспілкуйтесь трохи і запустіть {{meme}}, щоб згенерувати мем. Меми також з'являтимуться самі, коли канал активний і триває розмова. Частоту таких мемів можна змінити в {{settings}}.",
            [Locale.Dutch]:
                "**Voer {{enable}} uit in een kanaal.** De bot begint daar te leren van nieuwe berichten. Chat even en voer dan {{meme}} uit om een meme te maken. Memes komen ook vanzelf wanneer het kanaal actief is en er een gesprek gaande is. De frequentie daarvan kun je aanpassen in {{settings}}.",
            [Locale.French]:
                "**Lancez {{enable}} dans un salon.** Le bot commencera à apprendre des nouveaux messages là-bas. Après avoir discuté un peu, lancez {{meme}} pour générer un mème. Les mèmes arriveront aussi tout seuls quand le salon est actif et qu'une conversation est en cours. Vous pouvez régler leur fréquence dans {{settings}}.",
            [Locale.German]:
                "**Führe {{enable}} in einem Kanal aus.** Der Bot fängt dort an, aus neuen Nachrichten zu lernen. Chattet ein bisschen und führe dann {{meme}} aus, um ein Meme zu generieren. Memes kommen auch von selbst, wenn der Kanal aktiv ist und gerade eine Unterhaltung läuft. Die Häufigkeit dafür kannst du in {{settings}} ändern.",
            [Locale.Polish]:
                "**Uruchom {{enable}} na kanale.** Bot zacznie się tam uczyć z nowych wiadomości. Po chwili rozmowy uruchom {{meme}}, żeby wygenerować mema. Memy będą też pojawiać się same, gdy kanał jest aktywny i trwa rozmowa. Ich częstotliwość możesz zmienić w {{settings}}.",
            [Locale.SpanishES]:
                "**Ejecuta {{enable}} en un canal.** El bot empezará a aprender de los mensajes nuevos ahí. Después de chatear un rato, ejecuta {{meme}} para generar un meme. Los memes también llegarán solos cuando el canal esté activo y haya una conversación en marcha. Puedes cambiar su frecuencia en {{settings}}.",
            [Locale.SpanishLATAM]:
                "**Ejecuta {{enable}} en un canal.** El bot va a empezar a aprender de los mensajes nuevos ahí. Después de chatear un rato, ejecuta {{meme}} para generar un meme. Los memes también van a llegar solos cuando el canal esté activo y haya una conversación en marcha. Puedes cambiar su frecuencia en {{settings}}.",
            [Locale.PortugueseBR]:
                "**Rode {{enable}} em um canal.** O bot vai começar a aprender com as mensagens novas por lá. Depois de conversar um pouco, rode {{meme}} para gerar um meme. Os memes também vão chegar sozinhos quando o canal estiver ativo e tiver uma conversa rolando. Você pode mudar a frequência deles em {{settings}}.",
            [Locale.Turkish]:
                "**Bir kanalda {{enable}} çalıştır.** Bot orada yeni mesajlardan öğrenmeye başlar. Biraz sohbet ettikten sonra caps üretmek için {{meme}} çalıştır. Kanal aktifken ve bir sohbet dönüyorken capsler kendiliğinden de gelir. Bunların sıklığını {{settings}} üzerinden değiştirebilirsin.",
            [Locale.Italian]:
                "**Esegui {{enable}} in un canale.** Il bot inizierà a imparare dai nuovi messaggi lì. Dopo aver chattato un po', esegui {{meme}} per generare un meme. I meme arriveranno anche da soli quando il canale è attivo e c'è una conversazione in corso. Puoi cambiare la loro frequenza in {{settings}}.",
            [Locale.Indonesian]:
                "**Jalankan {{enable}} di sebuah channel.** Bot akan mulai belajar dari pesan baru di sana. Setelah ngobrol sebentar, jalankan {{meme}} untuk membuat meme. Meme juga akan muncul sendiri saat channel aktif dan ada obrolan berlangsung. Frekuensinya bisa diubah di {{settings}}.",
            [Locale.Czech]:
                "**Spusť {{enable}} v kanálu.** Bot se tam začne učit z nových zpráv. Až si chvíli popíšete, spusť {{meme}} a vygeneruje se mem. Memy budou chodit i samy, když je kanál aktivní a probíhá konverzace. Jejich frekvenci můžeš změnit v {{settings}}.",
        },
    ),
    "help.faq.canIHaveDifferentQuestionsForEveryChannel.question": buildLocales(
        "Can I have different settings for every channel?",
        {
            [Locale.Russian]: "Можно сделать разные настройки для каждого канала?",
            [Locale.Ukrainian]: "Чи можна зробити різні налаштування для кожного каналу?",
            [Locale.Dutch]: "Kan ik per kanaal andere instellingen hebben?",
            [Locale.French]: "Puis-je avoir des paramètres différents pour chaque salon ?",
            [Locale.German]: "Kann ich für jeden Kanal andere Einstellungen haben?",
            [Locale.Polish]: "Czy mogę mieć różne ustawienia dla każdego kanału?",
            [Locale.SpanishES]: "¿Puedo tener ajustes distintos para cada canal?",
            [Locale.SpanishLATAM]: "¿Puedo tener configuraciones distintas para cada canal?",
            [Locale.PortugueseBR]: "Posso ter configurações diferentes para cada canal?",
            [Locale.Turkish]: "Her kanal için farklı ayarlar yapabilir miyim?",
            [Locale.Italian]: "Posso avere impostazioni diverse per ogni canale?",
            [Locale.Indonesian]: "Bisa punya pengaturan berbeda untuk tiap channel?",
            [Locale.Czech]: "Můžu mít pro každý kanál jiné nastavení?",
        },
    ),
    "help.faq.canIHaveDifferentQuestionsForEveryChannel.answer": buildLocales(
        "**Yes!** All channel information, such as data for memes, frequency and other settings are stored separately for each channel. Nothing stops you from having very low meme frequency in your main chat, and setting it to high in your spam channel.",
        {
            [Locale.Russian]:
                "**Да!** Вся информация о канале, например данные для мемов, частота и другие настройки, хранится отдельно для каждого канала. Ничто не мешает поставить очень низкую частоту мемов в основном чате, а во флудилке выкрутить её на максимум.",
            [Locale.Ukrainian]:
                "**Так!** Уся інформація про канал, наприклад дані для мемів, частота та інші налаштування, зберігається окремо для кожного каналу. Ніщо не заважає поставити дуже низьку частоту мемів в основному чаті, а у флудилці викрутити її на максимум.",
            [Locale.Dutch]:
                "**Ja!** Alle kanaalinformatie, zoals data voor memes, frequentie en andere instellingen, wordt per kanaal apart opgeslagen. Niets houdt je tegen om een hele lage meme frequentie in je hoofdchat te hebben en hem in je spamkanaal juist hoog te zetten.",
            [Locale.French]:
                "**Oui !** Toutes les informations du salon, comme les données pour les mèmes, la fréquence et les autres paramètres, sont stockées séparément pour chaque salon. Rien ne vous empêche d'avoir une fréquence très basse dans votre chat principal et de la mettre au maximum dans votre salon de flood.",
            [Locale.German]:
                "**Ja!** Alle Kanalinformationen, wie Daten für Memes, Häufigkeit und andere Einstellungen, werden für jeden Kanal separat gespeichert. Nichts hält dich davon ab, im Hauptchat eine sehr niedrige Meme-Häufigkeit zu haben und sie im Spam-Kanal hochzudrehen.",
            [Locale.Polish]:
                "**Tak!** Wszystkie informacje o kanale, takie jak dane do memów, częstotliwość i inne ustawienia, są przechowywane osobno dla każdego kanału. Nic nie stoi na przeszkodzie, żeby mieć bardzo niską częstotliwość memów na głównym czacie, a na spamie wykręcić ją na maksa.",
            [Locale.SpanishES]:
                "**¡Sí!** Toda la información del canal, como los datos para memes, la frecuencia y demás ajustes, se guarda por separado para cada canal. Nada te impide tener una frecuencia muy baja en el chat principal y ponerla al máximo en el canal de spam.",
            [Locale.SpanishLATAM]:
                "**¡Sí!** Toda la información del canal, como los datos para memes, la frecuencia y demás configuraciones, se guarda por separado para cada canal. Nada te impide tener una frecuencia muy baja en el chat principal y ponerla al máximo en el canal de spam.",
            [Locale.PortugueseBR]:
                "**Sim!** Todas as informações do canal, como dados para memes, frequência e outras configurações, ficam guardadas separadamente para cada canal. Nada impede de ter uma frequência bem baixa no chat principal e deixar no máximo no canal de spam.",
            [Locale.Turkish]:
                "**Evet!** Caps verileri, sıklık ve diğer ayarlar gibi tüm kanal bilgileri her kanal için ayrı ayrı saklanır. Ana sohbette caps sıklığını çok düşük tutup flood kanalında sonuna kadar açmana hiçbir engel yok.",
            [Locale.Italian]:
                "**Sì!** Tutte le informazioni del canale, come i dati per i meme, la frequenza e le altre impostazioni, sono salvate separatamente per ogni canale. Niente ti impedisce di tenere una frequenza bassissima nella chat principale e di alzarla al massimo nel canale spam.",
            [Locale.Indonesian]:
                "**Bisa!** Semua informasi channel, seperti data untuk meme, frekuensi, dan pengaturan lainnya, disimpan terpisah untuk tiap channel. Tidak ada yang melarang kamu pasang frekuensi meme sangat rendah di chat utama tapi maksimal di channel spam.",
            [Locale.Czech]:
                "**Ano!** Všechny informace o kanálu, jako data pro memy, frekvence a další nastavení, se ukládají pro každý kanál zvlášť. Nic ti nebrání mít v hlavním chatu velmi nízkou frekvenci memů a ve spamovém kanálu ji vytočit na maximum.",
        },
    ),
    "help.faq.isThereALimit.question": buildLocales("Is there a limit on how many memes the bot can make daily?", {
        [Locale.Russian]: "Есть ли лимит на количество мемов в день?",
        [Locale.Ukrainian]: "Чи є ліміт на кількість мемів на день?",
        [Locale.Dutch]: "Zit er een limiet op hoeveel memes de bot per dag kan maken?",
        [Locale.French]: "Y a-t-il une limite au nombre de mèmes par jour ?",
        [Locale.German]: "Gibt es ein Limit, wie viele Memes der Bot pro Tag machen kann?",
        [Locale.Polish]: "Czy jest limit memów, które bot może zrobić dziennie?",
        [Locale.SpanishES]: "¿Hay un límite de memes que el bot puede hacer al día?",
        [Locale.SpanishLATAM]: "¿Hay un límite de memes que el bot puede hacer al día?",
        [Locale.PortugueseBR]: "Tem limite de quantos memes o bot pode fazer por dia?",
        [Locale.Turkish]: "Botun günlük yapabileceği caps sayısında bir sınır var mı?",
        [Locale.Italian]: "C'è un limite a quanti meme il bot può fare al giorno?",
        [Locale.Indonesian]: "Ada batas berapa banyak meme yang bisa dibuat bot per hari?",
        [Locale.Czech]: "Je nějaký limit, kolik memů může bot denně udělat?",
    }),
    "help.faq.isThereALimit.answer": buildLocales(
        "**No, there are no limits.** You can run {{meme}} as many times a day as you want. And it's free, because each generation only takes milliseconds to finish. There are also no watermarks on memes so that they look cleaner than if they were made with other meme generators.",
        {
            [Locale.Russian]:
                "**Нет, никаких лимитов.** Можете запускать {{meme}} сколько угодно раз в день. И это бесплатно, потому что каждая генерация занимает лишь миллисекунды. А ещё на мемах нет водяных знаков, поэтому они выглядят чище, чем сделанные в других генераторах мемов.",
            [Locale.Ukrainian]:
                "**Ні, жодних лімітів.** Можете запускати {{meme}} скільки завгодно разів на день. І це безкоштовно, бо кожна генерація займає лише мілісекунди. До того ж на мемах немає водяних знаків, тому вони виглядають чистіше, ніж зроблені в інших генераторах мемів.",
            [Locale.Dutch]:
                "**Nee, er zijn geen limieten.** Je kunt {{meme}} zo vaak per dag uitvoeren als je wilt. En het is gratis, want elke generatie duurt maar milliseconden. Er staan ook geen watermerken op de memes, dus ze zien er strakker uit dan bij andere meme generators.",
            [Locale.French]:
                "**Non, aucune limite.** Vous pouvez lancer {{meme}} autant de fois par jour que vous voulez. Et c'est gratuit, car chaque génération ne prend que quelques millisecondes. Il n'y a pas non plus de filigrane sur les mèmes, donc ils sont plus propres que ceux faits avec d'autres générateurs.",
            [Locale.German]:
                "**Nein, es gibt keine Limits.** Du kannst {{meme}} so oft am Tag ausführen, wie du willst. Und es ist kostenlos, weil jede Generierung nur Millisekunden dauert. Auf den Memes sind auch keine Wasserzeichen, dadurch sehen sie sauberer aus als bei anderen Meme-Generatoren.",
            [Locale.Polish]:
                "**Nie, nie ma żadnych limitów.** Możesz uruchamiać {{meme}} ile razy dziennie chcesz. I to za darmo, bo każda generacja trwa tylko milisekundy. Na memach nie ma też znaków wodnych, więc wyglądają czyściej niż te zrobione w innych generatorach memów.",
            [Locale.SpanishES]:
                "**No, no hay límites.** Puedes ejecutar {{meme}} tantas veces al día como quieras. Y es gratis, porque cada generación solo tarda milisegundos. Además los memes no llevan marca de agua, así que quedan más limpios que los hechos con otros generadores de memes.",
            [Locale.SpanishLATAM]:
                "**No, no hay límites.** Puedes ejecutar {{meme}} todas las veces que quieras al día. Y es gratis, porque cada generación tarda solo milisegundos. Además los memes no llevan marca de agua, así que se ven más limpios que los hechos con otros generadores de memes.",
            [Locale.PortugueseBR]:
                "**Não, não tem limite nenhum.** Você pode rodar {{meme}} quantas vezes quiser por dia. E é de graça, porque cada geração leva só alguns milissegundos. Os memes também não têm marca d'água, então ficam mais limpos do que os feitos em outros geradores de memes.",
            [Locale.Turkish]:
                "**Hayır, hiçbir sınır yok.** {{meme}} komutunu günde istediğin kadar çalıştırabilirsin. Üstelik ücretsiz, çünkü her üretim sadece milisaniyeler sürüyor. Capslerde filigran da yok, o yüzden diğer caps üreticilerinde yapılanlardan daha temiz görünüyorlar.",
            [Locale.Italian]:
                "**No, non ci sono limiti.** Puoi eseguire {{meme}} quante volte vuoi al giorno. Ed è gratis, perché ogni generazione richiede solo qualche millisecondo. Inoltre i meme non hanno watermark, quindi risultano più puliti di quelli fatti con altri generatori di meme.",
            [Locale.Indonesian]:
                "**Tidak, tidak ada batasan.** Kamu bisa menjalankan {{meme}} sebanyak apa pun dalam sehari. Dan gratis, karena tiap pembuatan cuma butuh milidetik. Meme juga tanpa watermark, jadi terlihat lebih bersih dibanding buatan generator meme lain.",
            [Locale.Czech]:
                "**Ne, žádné limity nejsou.** Můžeš spouštět {{meme}} kolikrát denně chceš. A je to zadarmo, protože každá generace trvá jen milisekundy. Na memech taky nejsou žádné vodoznaky, takže vypadají čistěji než ty z jiných generátorů memů.",
        },
    ),
    "help.faq.canIDeleteStoredData.question": buildLocales("Can I delete stored meme generation data?", {
        [Locale.Russian]: "Можно удалить сохранённые данные для генерации мемов?",
        [Locale.Ukrainian]: "Чи можна видалити збережені дані для генерації мемів?",
        [Locale.Dutch]: "Kan ik opgeslagen data voor het genereren van memes verwijderen?",
        [Locale.French]: "Puis-je supprimer les données stockées pour la génération de mèmes ?",
        [Locale.German]: "Kann ich gespeicherte Daten für die Meme-Generierung löschen?",
        [Locale.Polish]: "Czy mogę usunąć zapisane dane do generowania memów?",
        [Locale.SpanishES]: "¿Puedo borrar los datos guardados para generar memes?",
        [Locale.SpanishLATAM]: "¿Puedo borrar los datos guardados para generar memes?",
        [Locale.PortugueseBR]: "Posso apagar os dados guardados para a geração de memes?",
        [Locale.Turkish]: "Caps üretimi için saklanan verileri silebilir miyim?",
        [Locale.Italian]: "Posso eliminare i dati salvati per la generazione dei meme?",
        [Locale.Indonesian]: "Bisa menghapus data tersimpan untuk pembuatan meme?",
        [Locale.Czech]: "Můžu smazat uložená data pro generování memů?",
    }),
    "help.faq.canIDeleteStoredData.answer": buildLocales(
        '**Yes, at any time.** Run {{settings}} and then press the "Delete all data" button to delete everything that the bot stored for the channel.',
        {
            [Locale.Russian]:
                "**Да, в любой момент.** Запустите {{settings}} и нажмите кнопку «Удалить все данные», чтобы стереть всё, что бот сохранил для канала.",
            [Locale.Ukrainian]:
                "**Так, будь-коли.** Запустіть {{settings}} і натисніть кнопку «Видалити всі дані», щоб стерти все, що бот зберіг для каналу.",
            [Locale.Dutch]:
                '**Ja, op elk moment.** Voer {{settings}} uit en druk op de knop "Alle data verwijderen" om alles te wissen wat de bot voor het kanaal heeft opgeslagen.',
            [Locale.French]:
                "**Oui, à tout moment.** Lancez {{settings}} puis appuyez sur le bouton « Supprimer toutes les données » pour effacer tout ce que le bot a stocké pour le salon.",
            [Locale.German]:
                '**Ja, jederzeit.** Führe {{settings}} aus und drücke den Button "Alle Daten löschen", um alles zu löschen, was der Bot für den Kanal gespeichert hat.',
            [Locale.Polish]:
                "**Tak, w każdej chwili.** Uruchom {{settings}} i naciśnij przycisk „Usuń wszystkie dane”, żeby skasować wszystko, co bot zapisał dla kanału.",
            [Locale.SpanishES]:
                "**Sí, en cualquier momento.** Ejecuta {{settings}} y pulsa el botón «Borrar todos los datos» para eliminar todo lo que el bot ha guardado del canal.",
            [Locale.SpanishLATAM]:
                "**Sí, en cualquier momento.** Ejecuta {{settings}} y presiona el botón «Borrar todos los datos» para eliminar todo lo que el bot guardó del canal.",
            [Locale.PortugueseBR]:
                '**Sim, a qualquer momento.** Rode {{settings}} e aperte o botão "Apagar todos os dados" para excluir tudo que o bot guardou do canal.',
            [Locale.Turkish]:
                '**Evet, istediğin zaman.** {{settings}} çalıştır ve botun kanal için sakladığı her şeyi silmek için "Tüm verileri sil" butonuna bas.',
            [Locale.Italian]:
                '**Sì, in qualsiasi momento.** Esegui {{settings}} e premi il pulsante "Elimina tutti i dati" per cancellare tutto quello che il bot ha salvato per il canale.',
            [Locale.Indonesian]:
                '**Bisa, kapan saja.** Jalankan {{settings}} lalu tekan tombol "Hapus semua data" untuk menghapus semua yang disimpan bot untuk channel itu.',
            [Locale.Czech]:
                "**Ano, kdykoliv.** Spusť {{settings}} a stiskni tlačítko „Smazat všechna data“, čímž smažeš všechno, co si bot pro kanál uložil.",
        },
    ),
    "help.faq.addBotToMyApps.question": buildLocales('Can I add the bot to "My Apps" and use it anywhere?', {
        [Locale.Russian]: "Можно добавить бота в «Мои приложения» и использовать его где угодно?",
        [Locale.Ukrainian]: "Чи можна додати бота в «Мої застосунки» і користуватися ним будь-де?",
        [Locale.Dutch]: 'Kan ik de bot toevoegen aan "Mijn apps" en hem overal gebruiken?',
        [Locale.French]: "Puis-je ajouter le bot à « Mes applications » et l'utiliser partout ?",
        [Locale.German]: 'Kann ich den Bot zu "Meine Apps" hinzufügen und überall nutzen?',
        [Locale.Polish]: "Czy mogę dodać bota do „Moich aplikacji” i używać go wszędzie?",
        [Locale.SpanishES]: "¿Puedo añadir el bot a «Mis aplicaciones» y usarlo en cualquier parte?",
        [Locale.SpanishLATAM]: "¿Puedo agregar el bot a «Mis aplicaciones» y usarlo donde sea?",
        [Locale.PortugueseBR]: 'Posso adicionar o bot em "Meus aplicativos" e usar em qualquer lugar?',
        [Locale.Turkish]: 'Botu "Uygulamalarım"a ekleyip her yerde kullanabilir miyim?',
        [Locale.Italian]: 'Posso aggiungere il bot a "Le mie app" e usarlo ovunque?',
        [Locale.Indonesian]: 'Bisa menambahkan bot ke "Aplikasi Saya" dan memakainya di mana saja?',
        [Locale.Czech]: "Můžu si bota přidat do „Moje aplikace“ a používat ho kdekoliv?",
    }),
    "help.faq.addBotToMyApps.answer": buildLocales(
        '**Yes, but without some features.** You\'ll be able to use {{custom}} and right-click actions (like `"Make it a Quote"` or `"Make it a News Report"`) everywhere on Discord. But memes based on your chat won\'t work, because apps added this way can\'t read message history.',
        {
            [Locale.Russian]:
                "**Да, но без части функций.** Вы сможете использовать {{custom}} и действия по правому клику (например «Превратить в цитату» или «Превратить в срочные новости») где угодно в Discord. Но мемы на основе вашего чата работать не будут, потому что приложения, добавленные таким образом, не могут читать историю сообщений.",
            [Locale.Ukrainian]:
                "**Так, але без частини функцій.** Ви зможете використовувати {{custom}} та дії за правим кліком (наприклад «Переробити у цитату» чи «Переробити у гарячі новини») будь-де в Discord. Але меми на основі вашого чату не працюватимуть, бо застосунки, додані таким чином, не можуть читати історію повідомлень.",
            [Locale.Dutch]:
                '**Ja, maar zonder sommige functies.** Je kunt {{custom}} en de rechtsklik acties (zoals "Maak er een quote van" of "Maak er breaking news van") overal op Discord gebruiken. Maar memes op basis van je chat werken dan niet, omdat apps die zo zijn toegevoegd de berichtgeschiedenis niet kunnen lezen.',
            [Locale.French]:
                "**Oui, mais sans certaines fonctionnalités.** Vous pourrez utiliser {{custom}} et les actions par clic droit (comme « En faire une citation » ou « En faire un flash info ») partout sur Discord. Mais les mèmes basés sur votre chat ne fonctionneront pas, car les applications ajoutées ainsi ne peuvent pas lire l'historique des messages.",
            [Locale.German]:
                '**Ja, aber ohne manche Funktionen.** Du kannst {{custom}} und die Rechtsklick-Aktionen (wie "Mach ein Zitat draus" oder "Mach eine Eilmeldung draus") überall auf Discord nutzen. Aber Memes auf Basis eures Chats funktionieren dann nicht, weil so hinzugefügte Apps den Nachrichtenverlauf nicht lesen können.',
            [Locale.Polish]:
                "**Tak, ale bez niektórych funkcji.** Będziesz mógł używać {{custom}} i akcji z prawego kliknięcia (jak „Zrób z tego cytat” czy „Zrób z tego pilne wiadomości”) wszędzie na Discordzie. Ale memy na podstawie waszego czatu nie będą działać, bo aplikacje dodane w ten sposób nie mogą czytać historii wiadomości.",
            [Locale.SpanishES]:
                "**Sí, pero sin algunas funciones.** Podrás usar {{custom}} y las acciones del clic derecho (como «Convertir en cita» o «Convertir en noticia urgente») en cualquier parte de Discord. Pero los memes basados en vuestro chat no funcionarán, porque las apps añadidas así no pueden leer el historial de mensajes.",
            [Locale.SpanishLATAM]:
                "**Sí, pero sin algunas funciones.** Vas a poder usar {{custom}} y las acciones del clic derecho (como «Convertir en cita» o «Convertir en noticia urgente») en cualquier parte de Discord. Pero los memes basados en su chat no van a funcionar, porque las apps agregadas así no pueden leer el historial de mensajes.",
            [Locale.PortugueseBR]:
                '**Sim, mas sem alguns recursos.** Você vai poder usar o {{custom}} e as ações do clique direito (como "Transformar em citação" ou "Transformar em notícia urgente") em qualquer lugar do Discord. Mas os memes baseados no seu chat não vão funcionar, porque apps adicionados assim não conseguem ler o histórico de mensagens.',
            [Locale.Turkish]:
                '**Evet, ama bazı özellikler olmadan.** {{custom}} komutunu ve sağ tık işlemlerini ("Alıntıya çevir" veya "Son dakika haberine çevir" gibi) Discord\'un her yerinde kullanabilirsin. Ama sohbetinize dayalı capsler çalışmaz, çünkü bu şekilde eklenen uygulamalar mesaj geçmişini okuyamaz.',
            [Locale.Italian]:
                '**Sì, ma senza alcune funzioni.** Potrai usare {{custom}} e le azioni del tasto destro (come "Trasforma in citazione" o "Trasforma in notizia flash") ovunque su Discord. Ma i meme basati sulla vostra chat non funzioneranno, perché le app aggiunte così non possono leggere la cronologia dei messaggi.',
            [Locale.Indonesian]:
                '**Bisa, tapi tanpa beberapa fitur.** Kamu bisa memakai {{custom}} dan aksi klik kanan (seperti "Jadikan quote" atau "Jadikan berita terkini") di mana saja di Discord. Tapi meme berdasarkan chat kalian tidak akan bekerja, karena aplikasi yang ditambahkan begini tidak bisa membaca riwayat pesan.',
            [Locale.Czech]:
                "**Ano, ale bez některých funkcí.** Budeš moct používat {{custom}} a akce přes pravé kliknutí (jako „Udělat z toho citát“ nebo „Udělat z toho zprávy“) kdekoliv na Discordu. Ale memy založené na vašem chatu fungovat nebudou, protože takto přidané aplikace nemůžou číst historii zpráv.",
        },
    ),
    "help.faq.whatIfIWantToMakeACustomMeme.question": buildLocales(
        "What if I want to make a custom meme with specific text and/or image?",
        {
            [Locale.Russian]: "А если я хочу сделать свой мем с конкретным текстом и/или картинкой?",
            [Locale.Ukrainian]: "А якщо я хочу зробити власний мем з конкретним текстом та/або картинкою?",
            [Locale.Dutch]: "Wat als ik een eigen meme wil maken met specifieke tekst en/of afbeelding?",
            [Locale.French]: "Et si je veux faire un mème perso avec un texte et/ou une image en particulier ?",
            [Locale.German]: "Was, wenn ich ein eigenes Meme mit bestimmtem Text und/oder Bild machen will?",
            [Locale.Polish]: "A co, jeśli chcę zrobić własnego mema z konkretnym tekstem i/lub obrazkiem?",
            [Locale.SpanishES]: "¿Y si quiero hacer un meme con un texto y/o imagen concretos?",
            [Locale.SpanishLATAM]: "¿Y si quiero hacer un meme con un texto y/o imagen específicos?",
            [Locale.PortugueseBR]: "E se eu quiser fazer um meme com um texto e/ou imagem específicos?",
            [Locale.Turkish]: "Peki belirli bir metin ve/veya görselle kendi capsimi yapmak istersem?",
            [Locale.Italian]: "E se voglio fare un meme con un testo e/o un'immagine specifici?",
            [Locale.Indonesian]: "Bagaimana kalau aku mau bikin meme dengan teks dan/atau gambar tertentu?",
            [Locale.Czech]: "Co když chci udělat vlastní mem s konkrétním textem a/nebo obrázkem?",
        },
    ),
    "help.faq.whatIfIWantToMakeACustomMeme.answer": buildLocales(
        "**Use {{custom}}!** It lets you use the giant meme template library of Jstmemit as an ordinary meme generator with your own text and images. And of course there are no limits or watermarks on memes generated this way too.",
        {
            [Locale.Russian]:
                "**Используйте {{custom}}!** Эта команда позволяет использовать огромную библиотеку шаблонов Jstmemit как обычный генератор мемов с вашим текстом и картинками. И конечно, на таких мемах тоже нет ни лимитов, ни водяных знаков.",
            [Locale.Ukrainian]:
                "**Використовуйте {{custom}}!** Ця команда дозволяє використовувати величезну бібліотеку шаблонів Jstmemit як звичайний генератор мемів з вашим текстом і картинками. І звісно, на таких мемах теж немає ні лімітів, ні водяних знаків.",
            [Locale.Dutch]:
                "**Gebruik {{custom}}!** Daarmee gebruik je de gigantische template bibliotheek van Jstmemit als een gewone meme generator met je eigen tekst en afbeeldingen. En natuurlijk zitten er ook op deze memes geen limieten of watermerken.",
            [Locale.French]:
                "**Utilisez {{custom}} !** Ça vous permet d'utiliser l'énorme bibliothèque de modèles de Jstmemit comme un générateur de mèmes classique avec vos propres textes et images. Et bien sûr, ces mèmes-là non plus n'ont ni limites ni filigranes.",
            [Locale.German]:
                "**Nutze {{custom}}!** Damit kannst du die riesige Vorlagen-Bibliothek von Jstmemit als ganz normalen Meme-Generator mit eigenem Text und eigenen Bildern verwenden. Und natürlich gibt es auch bei diesen Memes keine Limits und keine Wasserzeichen.",
            [Locale.Polish]:
                "**Użyj {{custom}}!** Ta komenda pozwala korzystać z ogromnej biblioteki szablonów Jstmemit jak ze zwykłego generatora memów z własnym tekstem i obrazkami. I oczywiście na tych memach też nie ma limitów ani znaków wodnych.",
            [Locale.SpanishES]:
                "**¡Usa {{custom}}!** Te permite usar la enorme biblioteca de plantillas de Jstmemit como un generador de memes normal con tus propios textos e imágenes. Y por supuesto, estos memes tampoco tienen límites ni marcas de agua.",
            [Locale.SpanishLATAM]:
                "**¡Usa {{custom}}!** Te permite usar la enorme biblioteca de plantillas de Jstmemit como un generador de memes normal con tus propios textos e imágenes. Y claro, estos memes tampoco tienen límites ni marcas de agua.",
            [Locale.PortugueseBR]:
                "**Use o {{custom}}!** Ele deixa você usar a biblioteca gigante de templates do Jstmemit como um gerador de memes comum, com seus próprios textos e imagens. E claro, esses memes também não têm limites nem marca d'água.",
            [Locale.Turkish]:
                "**{{custom}} kullan!** Jstmemit'in devasa şablon kütüphanesini kendi metinlerin ve görsellerinle sıradan bir caps üreticisi gibi kullanmanı sağlar. Ve tabii ki bu şekilde üretilen capslerde de ne sınır ne de filigran var.",
            [Locale.Italian]:
                "**Usa {{custom}}!** Ti permette di usare l'enorme libreria di template di Jstmemit come un normale generatore di meme con i tuoi testi e le tue immagini. E ovviamente anche questi meme non hanno né limiti né watermark.",
            [Locale.Indonesian]:
                "**Pakai {{custom}}!** Dengan itu kamu bisa memakai perpustakaan template raksasa Jstmemit sebagai generator meme biasa dengan teks dan gambarmu sendiri. Dan tentu saja meme yang dibuat begini juga tanpa batasan dan tanpa watermark.",
            [Locale.Czech]:
                "**Použij {{custom}}!** Umožní ti používat obrovskou knihovnu šablon Jstmemitu jako obyčejný generátor memů s vlastním textem a obrázky. A samozřejmě ani na takhle vytvořených memech nejsou žádné limity ani vodoznaky.",
        },
    ),
    "help.button.addJstmemit": buildLocales("🔗 Add Jstmemit", {
        [Locale.Russian]: "🔗 Добавить Jstmemit",
        [Locale.Ukrainian]: "🔗 Додати Jstmemit",
        [Locale.Dutch]: "🔗 Jstmemit toevoegen",
        [Locale.French]: "🔗 Ajouter Jstmemit",
        [Locale.German]: "🔗 Jstmemit hinzufügen",
        [Locale.Polish]: "🔗 Dodaj Jstmemit",
        [Locale.SpanishES]: "🔗 Añadir Jstmemit",
        [Locale.SpanishLATAM]: "🔗 Agregar Jstmemit",
        [Locale.PortugueseBR]: "🔗 Adicionar o Jstmemit",
        [Locale.Turkish]: "🔗 Jstmemit'i ekle",
        [Locale.Italian]: "🔗 Aggiungi Jstmemit",
        [Locale.Indonesian]: "🔗 Tambahkan Jstmemit",
        [Locale.Czech]: "🔗 Přidat Jstmemit",
    }),
    "help.button.faq": buildLocales("❓ Frequently asked questions", {
        [Locale.Russian]: "❓ Частые вопросы",
        [Locale.Ukrainian]: "❓ Часті питання",
        [Locale.Dutch]: "❓ Veelgestelde vragen",
        [Locale.French]: "❓ Questions fréquentes",
        [Locale.German]: "❓ Häufige Fragen",
        [Locale.Polish]: "❓ Częste pytania",
        [Locale.SpanishES]: "❓ Preguntas frecuentes",
        [Locale.SpanishLATAM]: "❓ Preguntas frecuentes",
        [Locale.PortugueseBR]: "❓ Perguntas frequentes",
        [Locale.Turkish]: "❓ Sık sorulan sorular",
        [Locale.Italian]: "❓ Domande frequenti",
        [Locale.Indonesian]: "❓ Pertanyaan umum",
        [Locale.Czech]: "❓ Časté dotazy",
    }),
    "help.button.features": buildLocales("✨ Features list", {
        [Locale.Russian]: "✨ Список возможностей",
        [Locale.Ukrainian]: "✨ Список можливостей",
        [Locale.Dutch]: "✨ Lijst met features",
        [Locale.French]: "✨ Liste des fonctionnalités",
        [Locale.German]: "✨ Funktionsübersicht",
        [Locale.Polish]: "✨ Lista funkcji",
        [Locale.SpanishES]: "✨ Lista de funciones",
        [Locale.SpanishLATAM]: "✨ Lista de funciones",
        [Locale.PortugueseBR]: "✨ Lista de recursos",
        [Locale.Turkish]: "✨ Özellik listesi",
        [Locale.Italian]: "✨ Elenco delle funzioni",
        [Locale.Indonesian]: "✨ Daftar fitur",
        [Locale.Czech]: "✨ Seznam funkcí",
    }),
    "help.button.website": buildLocales("🌐 Website", {
        [Locale.Russian]: "🌐 Сайт",
        [Locale.Ukrainian]: "🌐 Сайт",
        [Locale.Dutch]: "🌐 Website",
        [Locale.French]: "🌐 Site web",
        [Locale.German]: "🌐 Website",
        [Locale.Polish]: "🌐 Strona",
        [Locale.SpanishES]: "🌐 Web",
        [Locale.SpanishLATAM]: "🌐 Sitio web",
        [Locale.PortugueseBR]: "🌐 Site",
        [Locale.Turkish]: "🌐 Web sitesi",
        [Locale.Italian]: "🌐 Sito web",
        [Locale.Indonesian]: "🌐 Situs web",
        [Locale.Czech]: "🌐 Web",
    }),
    "milestones.view.heading": buildLocales("🎖️ Achievements of **<#{{channelId}}>**", {
        [Locale.Russian]: "🎖️ Достижения **<#{{channelId}}>**",
        [Locale.Ukrainian]: "🎖️ Досягнення **<#{{channelId}}>**",
        [Locale.Dutch]: "🎖️ Prestaties van **<#{{channelId}}>**",
        [Locale.French]: "🎖️ Succès de **<#{{channelId}}>**",
        [Locale.German]: "🎖️ Erfolge von **<#{{channelId}}>**",
        [Locale.Polish]: "🎖️ Osiągnięcia **<#{{channelId}}>**",
        [Locale.SpanishES]: "🎖️ Logros de **<#{{channelId}}>**",
        [Locale.SpanishLATAM]: "🎖️ Logros de **<#{{channelId}}>**",
        [Locale.PortugueseBR]: "🎖️ Conquistas de **<#{{channelId}}>**",
        [Locale.Turkish]: "🎖️ **<#{{channelId}}>** başarıları",
        [Locale.Italian]: "🎖️ Obiettivi di **<#{{channelId}}>**",
        [Locale.Indonesian]: "🎖️ Pencapaian **<#{{channelId}}>**",
        [Locale.Czech]: "🎖️ Úspěchy **<#{{channelId}}>**",
    }),
    "milestones.view.description": buildLocales(
        "Every time your channel hits a meme count milestone it unlocks an achievement. Below you can see a list of them and statistics on how you used {{emoji}}Jstmemit.",
        {
            [Locale.Russian]:
                "Каждый раз, когда ваш канал достигает определенного количества мемов, он открывает достижение. Ниже вы можете увидеть их список и статистику использования {{emoji}}Jstmemit.",
            [Locale.Ukrainian]:
                "Щоразу, коли ваш канал досягає певної кількості мемів, він відкриває досягнення. Нижче ви можете побачити їхній список та статистику використання {{emoji}}Jstmemit.",
            [Locale.Dutch]:
                "Elke keer dat je kanaal een mijlpaal in het aantal memes bereikt, wordt er een prestatie ontgrendeld. Hieronder zie je een lijst hiervan en statistieken over hoe je {{emoji}}Jstmemit hebt gebruikt.",
            [Locale.French]:
                "Chaque fois que votre salon atteint un palier de mèmes, il débloque un succès. Ci-dessous, vous pouvez voir leur liste et des statistiques sur la façon dont vous avez utilisé {{emoji}}Jstmemit.",
            [Locale.German]:
                "Jedes Mal, wenn dein Kanal einen Meilenstein bei der Anzahl der Memes erreicht, wird ein Erfolg freigeschaltet. Unten siehst du eine Liste davon und Statistiken darüber, wie du {{emoji}}Jstmemit genutzt hast.",
            [Locale.Polish]:
                "Za każdym razem, gdy twój kanał osiągnie kolejny próg memów, odblokowuje osiągnięcie. Poniżej znajdziesz ich listę oraz statystyki korzystania z {{emoji}}Jstmemit.",
            [Locale.SpanishES]:
                "Cada vez que tu canal alcanza un hito en la cantidad de memes, desbloquea un logro. A continuación puedes ver una lista de ellos y estadísticas sobre cómo usaste {{emoji}}Jstmemit.",
            [Locale.SpanishLATAM]:
                "Cada vez que tu canal alcanza un hito en la cantidad de memes, desbloquea un logro. A continuación puedes ver una lista de ellos y estadísticas sobre cómo usaste {{emoji}}Jstmemit.",
            [Locale.PortugueseBR]:
                "Toda vez que seu canal atinge um marco de quantidade de memes, ele desbloqueia uma conquista. Abaixo você pode ver uma lista delas e estatísticas de como você usou o {{emoji}}Jstmemit.",
            [Locale.Turkish]:
                "Kanalın belli bir caps sayısına her ulaştığında bir başarı açılır. Aşağıda bunların listesini ve {{emoji}}Jstmemit'i nasıl kullandığına dair istatistikleri görebilirsin.",
            [Locale.Italian]:
                "Ogni volta che il tuo canale raggiunge un traguardo nel numero di meme, sblocca un obiettivo. Di seguito puoi vedere un loro elenco e le statistiche su come hai utilizzato {{emoji}}Jstmemit.",
            [Locale.Indonesian]:
                "Setiap kali channel kamu mencapai jumlah meme tertentu, kamu membuka pencapaian. Di bawah ini kamu bisa lihat daftarnya dan statistik cara kamu memakai {{emoji}}Jstmemit.",
            [Locale.Czech]:
                "Pokaždé, když tvůj kanál dosáhne milníku v počtu memů, odemkne se úspěch. Níže vidíš jejich seznam a statistiky o tom, jak se {{emoji}}Jstmemit v kanálu používá.",
        },
    ),
    "milestones.view.unlockedAchievements": buildLocales("Unlocked achievements", {
        [Locale.Russian]: "Разблокированные достижения",
        [Locale.Ukrainian]: "Розблоковані досягнення",
        [Locale.Dutch]: "Ontgrendelde prestaties",
        [Locale.French]: "Succès débloqués",
        [Locale.German]: "Freigeschaltete Erfolge",
        [Locale.Polish]: "Odblokowane osiągnięcia",
        [Locale.SpanishES]: "Logros desbloqueados",
        [Locale.SpanishLATAM]: "Logros desbloqueados",
        [Locale.PortugueseBR]: "Conquistas desbloqueadas",
        [Locale.Turkish]: "Kilitleri açılan başarılar",
        [Locale.Italian]: "Obiettivi sbloccati",
        [Locale.Indonesian]: "Pencapaian yang terbuka",
        [Locale.Czech]: "Odemčené úspěchy",
    }),
    "milestones.view.zeroAchievements": buildLocales("No achievements yet", {
        [Locale.Russian]: "У вас пока нет достижений",
        [Locale.Ukrainian]: "У вас поки немає досягнень",
        [Locale.Dutch]: "Nog geen prestaties",
        [Locale.French]: "Aucun succès pour le moment",
        [Locale.German]: "Noch keine Erfolge",
        [Locale.Polish]: "Jeszcze brak osiągnięć",
        [Locale.SpanishES]: "Aún no hay logros",
        [Locale.SpanishLATAM]: "Aún no hay logros",
        [Locale.PortugueseBR]: "Nenhuma conquista ainda",
        [Locale.Turkish]: "Henüz hiçbir başarı yok",
        [Locale.Italian]: "Ancora nessun obiettivo",
        [Locale.Indonesian]: "Belum ada pencapaian",
        [Locale.Czech]: "Zatím žádné úspěchy",
    }),
    "milestones.newAchieve": buildLocales("🎖️ New achievement", {
        [Locale.Russian]: "🎖️ Новое достижение",
        [Locale.Ukrainian]: "🎖️ Нове досягнення",
        [Locale.Dutch]: "🎖️ Nieuwe prestatie",
        [Locale.French]: "🎖️ Nouveau succès",
        [Locale.German]: "🎖️ Neuer Erfolg",
        [Locale.Polish]: "🎖️ Nowe osiągnięcie",
        [Locale.SpanishES]: "🎖️ Nuevo logro",
        [Locale.SpanishLATAM]: "🎖️ Nuevo logro",
        [Locale.PortugueseBR]: "🎖️ Nova conquista",
        [Locale.Turkish]: "🎖️ Yeni başarı",
        [Locale.Italian]: "🎖️ Nuovo obiettivo",
        [Locale.Indonesian]: "🎖️ Pencapaian baru",
        [Locale.Czech]: "🎖️ Nový úspěch",
    }),
    "milestones.generatedMemes": buildLocales("memes generated", {
        [Locale.Russian]: "мемов сгенерировано",
        [Locale.Ukrainian]: "мемів згенеровано",
        [Locale.Dutch]: "memes gegenereerd",
        [Locale.French]: "mèmes générés",
        [Locale.German]: "generierte Memes",
        [Locale.Polish]: "wygenerowane memy",
        [Locale.SpanishES]: "memes generados",
        [Locale.SpanishLATAM]: "memes generados",
        [Locale.PortugueseBR]: "memes gerados",
        [Locale.Turkish]: "oluşturulan capsler",
        [Locale.Italian]: "meme generati",
        [Locale.Indonesian]: "meme dibuat",
        [Locale.Czech]: "vygenerované memy",
    }),
    "milestones.view.allAchievements": buildLocales("🎉 You unlocked all achievements", {
        [Locale.Russian]: "🎉 Вы разблокировали все достижения",
        [Locale.Ukrainian]: "🎉 Ви розблокували всі досягнення",
        [Locale.Dutch]: "🎉 Je hebt alle prestaties ontgrendeld",
        [Locale.French]: "🎉 Vous avez débloqué tous les succès",
        [Locale.German]: "🎉 Du hast alle Erfolge freigeschaltet",
        [Locale.Polish]: "🎉 Wszystkie osiągnięcia odblokowane",
        [Locale.SpanishES]: "🎉 Has desbloqueado todos los logros",
        [Locale.SpanishLATAM]: "🎉 Has desbloqueado todos los logros",
        [Locale.PortugueseBR]: "🎉 Você desbloqueou todas as conquistas",
        [Locale.Turkish]: "🎉 Tüm başarıların kilidini açtın",
        [Locale.Italian]: "🎉 Hai sbloccato tutti gli obiettivi",
        [Locale.Indonesian]: "🎉 Kamu membuka semua pencapaian",
        [Locale.Czech]: "🎉 Máš odemčené všechny úspěchy",
    }),
    "milestones.view.allAchievementsDescription": buildLocales(
        "Thank you for your interest in {{emoji}}Jstmemit. Now you can rest, brew some coffee, and praise yourself.",
        {
            [Locale.Russian]:
                "Спасибо за проявленный интерес к {{emoji}}Jstmemit. А теперь можете отдохнуть, заварить кофе и похвалить себя.",
            [Locale.Ukrainian]:
                "Дякуємо за виявлений інтерес до {{emoji}}Jstmemit. А тепер можете відпочити, заварити кави та похвалити себе.",
            [Locale.Dutch]:
                "Bedankt voor je interesse in {{emoji}}Jstmemit. Nu kun je rusten, koffie zetten en jezelf een schouderklopje geven.",
            [Locale.French]:
                "Merci pour votre intérêt envers {{emoji}}Jstmemit. Maintenant vous pouvez vous reposer, préparer un café et vous féliciter.",
            [Locale.German]:
                "Danke für dein Interesse an {{emoji}}Jstmemit. Jetzt kannst du dich ausruhen, Kaffee kochen und dich selbst loben.",
            [Locale.Polish]:
                "Dziękujemy za zainteresowanie {{emoji}}Jstmemit. Teraz możesz odpocząć, zaparzyć kawę i pochwalić samego siebie.",
            [Locale.SpanishES]:
                "Gracias por tu interés en {{emoji}}Jstmemit. Ahora puedes descansar, preparar un café y felicitarte a ti mismo.",
            [Locale.SpanishLATAM]:
                "Gracias por tu interés en {{emoji}}Jstmemit. Ahora puedes descansar, preparar un café y felicitarte a ti mismo.",
            [Locale.PortugueseBR]:
                "Obrigado pelo seu interesse no {{emoji}}Jstmemit. Agora você pode descansar, fazer um café e se parabenizar.",
            [Locale.Turkish]:
                "{{emoji}}Jstmemit'e gösterdiğin ilgi için teşekkürler. Artık dinlenebilir, kahve yapabilir ve kendini övebilirsin.",
            [Locale.Italian]:
                "Grazie per il tuo interesse in {{emoji}}Jstmemit. Ora puoi riposarti, preparare un caffè e farti i complimenti.",
            [Locale.Indonesian]:
                "Terima kasih atas minatmu pada {{emoji}}Jstmemit. Sekarang kamu bisa istirahat, seduh kopi, dan puji diri sendiri.",
            [Locale.Czech]:
                "Děkujeme za tvůj zájem o {{emoji}}Jstmemit. Teď si můžeš odpočinout, uvařit kávu a pochválit se.",
        },
    ),
    "milestones.heading": buildLocales("🎉 Yay! {{count}} memes in **<#{{channelId}}>**!", {
        [Locale.Russian]: "🎉 Ура! {{count}} мемов в **<#{{channelId}}>**!",
        [Locale.Ukrainian]: "🎉 Ура! {{count}} мемів у **<#{{channelId}}>**!",
        [Locale.Dutch]: "🎉 Yes! {{count}} memes in **<#{{channelId}}>**!",
        [Locale.French]: "🎉 Youpi ! {{count}} mèmes dans **<#{{channelId}}>** !",
        [Locale.German]: "🎉 Yay! {{count}} Memes in **<#{{channelId}}>**!",
        [Locale.Polish]: "🎉 Hurra! {{count}} memów w **<#{{channelId}}>**!",
        [Locale.SpanishES]: "🎉 ¡Yuju! ¡{{count}} memes en **<#{{channelId}}>**!",
        [Locale.SpanishLATAM]: "🎉 ¡Yuju! ¡{{count}} memes en **<#{{channelId}}>**!",
        [Locale.PortugueseBR]: "🎉 Eba! {{count}} memes em **<#{{channelId}}>**!",
        [Locale.Turkish]: "🎉 Yaşasın! **<#{{channelId}}>** kanalında {{count}} caps!",
        [Locale.Italian]: "🎉 Evviva! {{count}} meme in **<#{{channelId}}>**!",
        [Locale.Indonesian]: "🎉 Yeay! {{count}} meme di **<#{{channelId}}>**!",
        [Locale.Czech]: "🎉 Hurá! {{count}} memů v **<#{{channelId}}>**!",
    }),
    "milestones.description": buildLocales(
        "Below are some stats about how you reacted to them. You can also view all achievements of the channel in {{achievements}}",
        {
            [Locale.Russian]:
                "Ниже немного статистики о том, как вы на них реагировали. Все достижения канала можно посмотреть в {{achievements}}",
            [Locale.Ukrainian]:
                "Нижче трохи статистики про те, як ви на них реагували. Усі досягнення каналу можна переглянути в {{achievements}}",
            [Locale.Dutch]:
                "Hieronder wat stats over hoe jullie erop reageerden. Alle prestaties van het kanaal zie je in {{achievements}}",
            [Locale.French]:
                "Voici quelques stats sur la façon dont vous y avez réagi. Vous pouvez aussi voir tous les succès du salon dans {{achievements}}",
            [Locale.German]:
                "Unten ein paar Statistiken dazu, wie ihr darauf reagiert habt. Alle Erfolge des Kanals findest du in {{achievements}}",
            [Locale.Polish]:
                "Poniżej trochę statystyk o tym, jak na nie reagowaliście. Wszystkie osiągnięcia kanału zobaczysz w {{achievements}}",
            [Locale.SpanishES]:
                "Abajo tienes algunas estadísticas de cómo reaccionasteis a ellos. También puedes ver todos los logros del canal en {{achievements}}",
            [Locale.SpanishLATAM]:
                "Abajo hay algunas estadísticas de cómo reaccionaron a ellos. También puedes ver todos los logros del canal en {{achievements}}",
            [Locale.PortugueseBR]:
                "Abaixo estão algumas estatísticas de como vocês reagiram a eles. Você também pode ver todas as conquistas do canal em {{achievements}}",
            [Locale.Turkish]:
                "Aşağıda onlara nasıl tepki verdiğinize dair birkaç istatistik var. Kanalın tüm başarılarını {{achievements}} üzerinden görebilirsin",
            [Locale.Italian]:
                "Qui sotto qualche statistica su come ci avete reagito. Puoi anche vedere tutti gli obiettivi del canale in {{achievements}}",
            [Locale.Indonesian]:
                "Di bawah ada beberapa statistik soal cara kalian menanggapinya. Semua pencapaian channel juga bisa dilihat di {{achievements}}",
            [Locale.Czech]:
                "Níže je pár statistik o tom, jak jste na ně reagovali. Všechny úspěchy kanálu si můžeš prohlédnout v {{achievements}}",
        },
    ),
    "milestones.nextGoal": buildLocales("Next goal: {{currentGoal}}/{{nextGoal}} memes", {
        [Locale.Russian]: "Следующая цель: {{currentGoal}}/{{nextGoal}} мемов",
        [Locale.Ukrainian]: "Наступна ціль: {{currentGoal}}/{{nextGoal}} мемів",
        [Locale.Dutch]: "Volgend doel: {{currentGoal}}/{{nextGoal}} memes",
        [Locale.French]: "Prochain objectif : {{currentGoal}}/{{nextGoal}} mèmes",
        [Locale.German]: "Nächstes Ziel: {{currentGoal}}/{{nextGoal}} Memes",
        [Locale.Polish]: "Następny cel: {{currentGoal}}/{{nextGoal}} memów",
        [Locale.SpanishES]: "Próximo objetivo: {{currentGoal}}/{{nextGoal}} memes",
        [Locale.SpanishLATAM]: "Próximo objetivo: {{currentGoal}}/{{nextGoal}} memes",
        [Locale.PortugueseBR]: "Próxima meta: {{currentGoal}}/{{nextGoal}} memes",
        [Locale.Turkish]: "Sonraki hedef: {{currentGoal}}/{{nextGoal}} caps",
        [Locale.Italian]: "Prossimo obiettivo: {{currentGoal}}/{{nextGoal}} meme",
        [Locale.Indonesian]: "Target berikutnya: {{currentGoal}}/{{nextGoal}} meme",
        [Locale.Czech]: "Další cíl: {{currentGoal}}/{{nextGoal}} memů",
    }),
    "milestones.turnOffInSettings": buildLocales(
        "-# If you don't want to receive these messages you can disable them in **{{settings}}**",
        {
            [Locale.Russian]: "-# Если вы не хотите получать такие сообщения, их можно отключить в **{{settings}}**",
            [Locale.Ukrainian]:
                "-# Якщо ви не хочете отримувати такі повідомлення, їх можна вимкнути в **{{settings}}**",
            [Locale.Dutch]: "-# Wil je deze berichten niet ontvangen, dan kun je ze uitzetten in **{{settings}}**",
            [Locale.French]:
                "-# Si vous ne voulez pas recevoir ces messages, vous pouvez les désactiver dans **{{settings}}**",
            [Locale.German]:
                "-# Wenn du diese Nachrichten nicht bekommen willst, kannst du sie in **{{settings}}** deaktivieren",
            [Locale.Polish]: "-# Jeśli nie chcesz dostawać takich wiadomości, możesz je wyłączyć w **{{settings}}**",
            [Locale.SpanishES]: "-# Si no quieres recibir estos mensajes, puedes desactivarlos en **{{settings}}**",
            [Locale.SpanishLATAM]: "-# Si no quieres recibir estos mensajes, puedes desactivarlos en **{{settings}}**",
            [Locale.PortugueseBR]:
                "-# Se você não quiser receber essas mensagens, dá para desativá-las em **{{settings}}**",
            [Locale.Turkish]: "-# Bu mesajları almak istemiyorsan **{{settings}}** üzerinden kapatabilirsin",
            [Locale.Italian]: "-# Se non vuoi ricevere questi messaggi, puoi disattivarli in **{{settings}}**",
            [Locale.Indonesian]:
                "-# Kalau tidak mau menerima pesan seperti ini, kamu bisa mematikannya di **{{settings}}**",
            [Locale.Czech]: "-# Pokud tyhle zprávy nechceš dostávat, můžeš je vypnout v **{{settings}}**",
        },
    ),
    "stats.likes": buildLocales("Likes: {{count}}", {
        [Locale.Russian]: "Лайки: {{count}}",
        [Locale.Ukrainian]: "Лайки: {{count}}",
        [Locale.Dutch]: "Likes: {{count}}",
        [Locale.French]: "J'aime : {{count}}",
        [Locale.German]: "Gefällt mir: {{count}}",
        [Locale.Polish]: "Polubienia: {{count}}",
        [Locale.SpanishES]: "Me gusta: {{count}}",
        [Locale.SpanishLATAM]: "Me gusta: {{count}}",
        [Locale.PortugueseBR]: "Curtidas: {{count}}",
        [Locale.Turkish]: "Beğeni: {{count}}",
        [Locale.Italian]: "Mi piace: {{count}}",
        [Locale.Indonesian]: "Suka: {{count}}",
        [Locale.Czech]: "Líbí: {{count}}",
    }),
    "stats.dislikes": buildLocales("Dislikes: {{count}}", {
        [Locale.Russian]: "Дизлайки: {{count}}",
        [Locale.Ukrainian]: "Дизлайки: {{count}}",
        [Locale.Dutch]: "Dislikes: {{count}}",
        [Locale.French]: "Je n'aime pas : {{count}}",
        [Locale.German]: "Gefällt mir nicht: {{count}}",
        [Locale.Polish]: "Łapki w dół: {{count}}",
        [Locale.SpanishES]: "No me gusta: {{count}}",
        [Locale.SpanishLATAM]: "No me gusta: {{count}}",
        [Locale.PortugueseBR]: "Descurtidas: {{count}}",
        [Locale.Turkish]: "Beğenmeme: {{count}}",
        [Locale.Italian]: "Non mi piace: {{count}}",
        [Locale.Indonesian]: "Tidak suka: {{count}}",
        [Locale.Czech]: "Nelíbí: {{count}}",
    }),
    "stats.templates": buildLocales("Templates used: {{count}}", {
        [Locale.Russian]: "Использовано шаблонов: {{count}}",
        [Locale.Ukrainian]: "Використано шаблонів: {{count}}",
        [Locale.Dutch]: "Gebruikte templates: {{count}}",
        [Locale.French]: "Modèles utilisés : {{count}}",
        [Locale.German]: "Verwendete Vorlagen: {{count}}",
        [Locale.Polish]: "Użyte szablony: {{count}}",
        [Locale.SpanishES]: "Plantillas usadas: {{count}}",
        [Locale.SpanishLATAM]: "Plantillas usadas: {{count}}",
        [Locale.PortugueseBR]: "Templates usados: {{count}}",
        [Locale.Turkish]: "Kullanılan şablonlar: {{count}}",
        [Locale.Italian]: "Template usati: {{count}}",
        [Locale.Indonesian]: "Template terpakai: {{count}}",
        [Locale.Czech]: "Použité šablony: {{count}}",
    }),
    "stats.voices": buildLocales("Voices used: {{count}}", {
        [Locale.Russian]: "Использовано голосов: {{count}}",
        [Locale.Ukrainian]: "Використано голосів: {{count}}",
        [Locale.Dutch]: "Gebruikte stemmen: {{count}}",
        [Locale.French]: "Voix utilisées : {{count}}",
        [Locale.German]: "Verwendete Stimmen: {{count}}",
        [Locale.Polish]: "Użyte głosy: {{count}}",
        [Locale.SpanishES]: "Voces usadas: {{count}}",
        [Locale.SpanishLATAM]: "Voces usadas: {{count}}",
        [Locale.PortugueseBR]: "Vozes usadas: {{count}}",
        [Locale.Turkish]: "Kullanılan sesler: {{count}}",
        [Locale.Italian]: "Voci usate: {{count}}",
        [Locale.Indonesian]: "Suara terpakai: {{count}}",
        [Locale.Czech]: "Použité hlasy: {{count}}",
    }),
};
