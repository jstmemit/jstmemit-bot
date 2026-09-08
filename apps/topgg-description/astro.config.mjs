// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
    site: "https://jstmemit.com",

    build: {
        inlineStylesheets: "always",
    },

    vite: {
        plugins: [tailwindcss()],
    },

    prefetch: {
        defaultStrategy: "hover",
        prefetchAll: true,
    },

    integrations: [
        compress({
            CSS: false,
        }),
    ],
});
