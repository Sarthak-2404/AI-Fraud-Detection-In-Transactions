export default {
    plugins: {
        '@tailwindcss/postcss': {},
        autoprefixer: {}, // Autoprefixer is optional in v4 as it's included, but safe to keep or remove. I'll keep it just in case or remove if conflict. Actually v4 usually handles prefixing. I'll stick to the recommended basic v4 setup.
    },
}
