import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            {
                find: "entities",
                replacement: fileURLToPath(
                    new URL("./src/entities", import.meta.url)
                ),
            },
            {
                find: "pages",
                replacement: fileURLToPath(
                    new URL("./src/pages", import.meta.url)
                ),
            },
            {
                find: "widgets",
                replacement: fileURLToPath(
                    new URL("./src/widgets", import.meta.url)
                ),
            },
            {
                find: "features",
                replacement: fileURLToPath(
                    new URL("./src/features", import.meta.url)
                ),
            },
            {
                find: "shared",
                replacement: fileURLToPath(
                    new URL("./src/shared", import.meta.url)
                ),
            },
        ],
    },
});
