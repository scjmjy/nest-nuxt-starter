import { resolve } from "path";

const {
    NODE_ENV = "production",
    PORT: port = 3002,
    HOST: host = "0.0.0.0",
    DOMAIN: domain = "http://localhost",
} = process.env;

const isDev = !(NODE_ENV === "production");
const configFile = resolve(process.cwd(), "client", "tsconfig.json");

export default {
    telemetry: false,
    modern: isDev ? false : "client",
    target: "server",

    srcDir: "client/",
    buildDir: "dist/client",

    env: {
        NODE_ENV,
        port,
        host,
        domain,
    },

    dev: isDev,
    globalName: "app",

    loading: false,
    loadingIndicator: false,

    /*
     ** Headers of the page
     */
    head: {
        title: "title",
        htmlAttrs: { lang: "en" },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "description" },
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            // { rel: 'stylesheet', href: '/font-awesome-5/css/all.css' },
        ],
    },

    /*
     ** Global CSS
     */
    // css: ["@/assets/font-awesome-5/css/all.css"],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: ["./plugins/axios.ts"],

    /*
     ** Nuxt.js modules
     */
    modules: ["@nuxtjs/axios", "@nuxtjs/auth-next", "@nuxtjs/tailwindcss"],

    publicRuntimeConfig: {
        axios: {
            browserBaseURL: "/",
        },
    },

    privateRuntimeConfig: {
        axios: {
            baseURL: `http://127.0.0.1:${port}`,
        },
    },

    buildModules: [
        "@nuxt/typescript-build",
        [
            // Doc: https://github.com/nuxt-community/fontawesome-module
            "@nuxtjs/fontawesome",
            {
                component: "fa",
                suffix: true,
                icons: {
                    brands: [
                        "faHtml5",
                        "faFacebook",
                        "faFacebookF",
                        "faFacebookSquare",
                        "faDribbble",
                        "faTwitter",
                        "faGoogle",
                        "faInstagram",
                        "faGithub",
                    ],
                    solid: [
                        "faHeart",
                        "faCopy",
                        "faMoon",
                        "faDesktop",
                        "faRainbow",
                        "faAward",
                        "faRetweet",
                        "faFingerprint",
                        "faUserFriends",
                        "faRocket",
                        "faMedal",
                        "faPoll",
                        "faLightbulb",
                        "faMapMarkerAlt",
                        "faBriefcase",
                        "faUniversity",
                        "faBars",
                        "faArrowAltCircleDown",
                    ],
                    regular: ["faSun", "faFileAlt", "faPaperPlane"],
                },
            },
        ],
    ],

    purgeCSS: {
        whitelist: ["__nuxt", "__layout", "dark-mode"],
        whitelistPatterns: [/page-(enter|leave)/, /svg.*/, /fa.*/], // Keep Fontawesome classes
    },

    typescript: {
        typeCheck: {
            typescript: {
                configFile,
            },
        },

        loaders: {
            ts: {
                configFile,
            },
        },
    },

    /*
     ** Build configuration
     */
    build: {
        cache: true,
        publicPath: "/app/",

        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            // config.resolve.alias.vue = 'vue/dist/vue.common'

            if (isDev) {
                const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

                config.resolve.plugins = [...(config.resolve.plugins || []), new TsconfigPathsPlugin({ configFile })];
            }
        },
    },

    server: {
        timing: false,
    },

    render: {
        compressor: false,
        resourceHints: true,
        ssr: true,
        http2: { push: true },
    },
};
