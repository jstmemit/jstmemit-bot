// @ts-check
import { defineConfig } from "astro/config";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
    site: "https://jstmemit.com",

    build: {
        inlineStylesheets: "always",
    },

    integrations: [
        compress({
            CSS: false,
        }),
    ],
});
