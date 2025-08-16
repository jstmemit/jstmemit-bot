# Jstmemit 🤖

Discord bot that makes memes about whatever you're chatting about. Talk about your failed boss raid, then get fresh
memes about
it, how fun is that?

[Invite bot](https://discord.com/oauth2/authorize?client_id=1375836467745783990)

![A banner showcasing bot's features with "Personalized memes for your community" main text](https://jstmemit.com/assets/discovery/carousel_banner_1.png)

## Navigation

- [Main features](#main-features)
- [Requirements](#requirements)
    - [Bare minimum](#bare-minimum)
    - [Transforming text with LLMs](#transforming-text-with-llms)
    - [Narrating text](#narrating-text)
- [Install and Run](#install-and-run)
- [FAQ](#faq)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Main features

- **Personalized memes**: Memes are generated with your channel context in mind, so they are relevant to your community.
- **Voice narration**: Narrate your messages and memes with a voice of your choice.
- **Customizable**: You have full control over bot's settings on per-channel basis.
- **Privacy first**: You must opt in a channel where you want to use the bot before Jstmemit will start processing any
  data with `/enable`. By default stored training data is deleted after 14 days.

## Requirements

### Bare minimum

This will allow you to run the bot with limited functionality, such as only using Markov chains for meme generation.
Your memes will not make sense in most cases (doesn't mean they are not funny).

- [Node.js](https://nodejs.org/) (tested with v22.15.0)
- [MySQL Server](https://www.mysql.com/) (tested with v8.0.43)
-
    - [Quick install guide for Ubuntu 22.04](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-22-04)
- [PostHog](https://www.posthog.com/) (self-hosted or cloud)
-
    - Required for meme generation algorithm and analytics
- [Microsoft Core](https://packages.ubuntu.com/search?keywords=ttf-mscorefonts-installer)
  and [Noto Color Emoji](https://packages.ubuntu.com/jammy/fonts-noto-color-emoji) fonts

### Transforming text with LLMs (optional)

If you want your meme text to make sense, you can use a LLM to transform it. A small portion of your channel messages
will be sent to it, so that it can compose one or multiple strings with meme text based on the context. You can use any
of the following providers:

- [OpenAI](https://platform.openai.com/docs/models) (tested with `gpt-4.1-nano`)
- Selfhosted via [llama.cpp](https://github.com/ggml-org/llama.cpp) (tested with `Qwen3-4B-Instruct-2507-Q2_K`)

### Narrating text (optional)

If you want `/voice` command to work and `/meme` command to generate audio memes you will need a text-to-speech
provider. Jstmemit currently uses voices from the following providers:

- [ElevenLabs](https://elevenlabs.io/) (`eleven_flash_v2_5`)
- Selfhosted via [Kokoro-FastAPI](https://github.com/remsky/Kokoro-FastAPI)

## Install and Run

1. Make sure you have the requirements above.

2. Clone or download this repository (big green button): `git clone https://github.com/jstmemit/jstmemit-bot`

3. Create a Discord application and bot user at [Discord Developer Portal](https://discord.com/developers/applications).
   Make sure to enable the `Message content intent` in the bot settings.

4. Open `.env.example` file and fill in the required fields. Rename it to `.env` after you are done.

5. In terminal/command prompt, run `npm install` and `npm i drizzle-kit` from the installed directory

6. Confirm that database details in `.env` file are correct, then run `npx drizzle-kit push`

7. Run `node bot.js` from the installed directory

If you have any difficulties, don't hesitate to ask for help in our [Discord server](https://discord.gg/5q5HP9UVWz).

## FAQ

- **What if I just want to add this bot to my server?**  
  [Invite Jstmemit to your server](https://discord.com/oauth2/authorize?client_id=1375836467745783990)

  It's 100% free to use, 24/7 online, no ads or limits. You can support the project by voting for it
  on [top.gg](https://top.gg/bot/1375836467745783990).


- **How to add a custom voice?**  
  Open `/config/settings.js` file, find `voices` array and add an object with your new voice.

  ```js
        {
            id: "YXpFCvM1S3JbWEJhoskW",
            name: "😱 New voice", // this will show up in voice list when users type /voice
            provider: "elevenlabs", // must be "elevenlabs" or "kokoro"
            voiceSettings: {
                // for elevenlabs voices:
                stability: 0.5,
                similarityBoost: 0.9,
                style: 0.01
  
                // for kokoro voices:
                language: "english", // kokoro's auto detection is quite bad, so you must define a language
                speed: 0.9
            }
        },
  ``` 

- **How to add custom meme templates?**  
  Upload your base meme image into `/src/generation/visual/assets` directory, then head over to
  `/config/memeTemplates.js` and add there a new object:

  ```js
    example: {
        templateFile: 'example.png',
        requiresChannelMessages: true, // set to false if you only want to place images on your template
        images: [
            // "random" will select a random user avatar or image, "template" will apply the templateFile again
            {type: 'random', overlay: 'example_1'},
            {type: 'random', overlay: 'example_2', sameAs: 0}, // use sameAs if you want to place same user avatar/image in multiple places
            {type: 'random', overlay: 'example_3', sameAs: 0} 
        ],
        // if you set an unrealistic minimum and maximum length, bot might not generate a meme when using markov chains to transform your text
        texts: [
            {key: 'example_1', minLength: 0, maxLength: 4},
            {key: 'example_2', minLength: 0, maxLength: 4}
        ]
    },
  ``` 

  Then you need to add text and image details into `/config/settings.js` file.

  ```js
        // inside textSettings object
        example_1: {
            fillStyle: '#ffffff',
            outlineStyle: '#000000',
            textAlign: 'center',
            font: 'Comic Sans MS', // font name, must be installed on your system
            box: {x: 0.1, y: 0.7, w: 0.80, h: 0.25}, // this will define position and size of your text box
            maxLines: 4, // max vertical lines of text
            baseImageOverlay: 0 // dark overlay on the base image to make text more readable, set to 0 if you don't want it
        },
  ```

  ```js
        // inside overlaySettings object
        example_1: {
            type: 'circle', // can be "circle", "fullimage" or "watermark_corner"
            cx: 250, // only for "circle" type
            cy: 200, // only for "circle" type
            // position: 'bottom-right', // only for "watermark_corner" type
            radius: 90 // size of the circle in pixels, only for "circle" type
        },
  ```

## Troubleshooting

- **Emojis show up as boxes on any generated memes**  
  You need to install [Noto Color Emoji](https://packages.ubuntu.com/jammy/fonts-noto-color-emoji) font on your system.


- **Bot doesn't declare any slash commands**  
  You must set `DISCORD_USERID` environment variable to your Discord bot user ID. Declaring commands may take up to an
  hour, reinvite the bot to your server to speed up the process.


- **Bot refuses to use selfhosted models**  
  Both `KOKORO_API_URL` and `LLAMACPP_API_URL` must be in this format: `http://ip:port/v1`. Maybe you forgot to add
  `/v1` or correct port? 8080 is default for llama.cpp and 8880 is default for Kokoro-FastAPI.

## License

This project is licensed under the GNU Affero General Public License v3.0.

### What you can do with this code:

- Use any part of this code for both private and commercial purposes.
- Make any changes to the code.
- Distribute the code.

You must state the changes that you made to the code and provide a link to the original repository. Derivative works
must also be licensed under the same license.