/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            transitionProperty: {
                height: "height",
            },
            colors: {
                primary: colors.green,
                // primary: "var(--color-primary)"
            },
            opacity: {
                90: ".9",
            },
            textColor: {
                default: "var(--color-text-default)",
                strong: "var(--color-text-strong)",
                faded: "var(--color-text-faded)",
            },
            backgroundColor: {
                default: "var(--color-bg-default)",
                surface: "var(--color-bg-surface)",
                accent: "var(--color-bg-accent)",
                text: "var(--color-text-default)",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
