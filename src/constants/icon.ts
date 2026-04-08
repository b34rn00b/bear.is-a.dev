import type { Favicon } from "@/types/config.ts";

export const defaultFavicons: Favicon[] = [
    {
        src: "/favicon/favicon.ico",
        theme: "all",
        sizes: "any",
    },
    {
        src: "/favicon/favicon.svg",
        theme: "all",
        sizes: "any",
    },
    {
        src: "/favicon/favicon-96x96.png",
        theme: "all",
        sizes: "96x96",
    },
    {
        src: "/favicon/apple-touch-icon.png",
        theme: "all",
        sizes: "180x180",
    },
    {
        src: "/favicon/web-app-manifest-192x192.png",
        theme: "all",
        sizes: "192x192",
    },
    {
        src: "/favicon/web-app-manifest-512x512.png",
        theme: "all",
        sizes: "512x512",
    },
];