import { defineConfig } from "vite";

export default defineConfig({
    root: "html",
    base: "/ong-transformando-vidas/",
    build: {
        outDir: "../dist",
        emptyOutDir: true
    }
});
