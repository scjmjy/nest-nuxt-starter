module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/recommended",
        "@vue/typescript/recommended",
        // "@vue/prettier",
        // "@vue/prettier/@typescript-eslint",
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    globals: {
        // BABYLON: true,
    },
    rules: {
        "vue/html-indent": [
            "error",
            4,
            {
                attribute: 1,
                baseIndent: 0,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
        "vue/max-attributes-per-line": [
            "error",
            {
                singleline: {
                    max: 5,
                    allowFirstLine: true,
                },
                multiline: {
                    max: 5,
                    allowFirstLine: true,
                },
            },
        ],
        "vue/html-closing-bracket-newline": [
            "error",
            {
                singleline: "never",
                multiline: "never",
            },
        ],
        "vue/singleline-html-element-content-newline": [
            "error",
            {
                ignoreWhenNoAttributes: true,
                ignoreWhenEmpty: true,
                ignores: [],
            },
        ],
        "vue/multiline-html-element-content-newline": [
            "error",
            {
                ignoreWhenEmpty: false,
                ignores: [],
                allowEmptyLines: false,
            },
        ],
        "vue/max-len": [
            "error",
            {
                code: 120,
                template: 1000,
                ignorePattern: "class=\"",
                ignoreUrls: true,
                ignoreStrings: true,
                // ignoreTemplateLiterals: true,
                ignoreHTMLAttributeValues: true,
                ignoreHTMLTextContents: false,
            },
        ],
        // "newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
        // "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        // "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        // "@typescript-eslint/no-explicit-any": ["off"], // 关闭any类型时的警告
        // "@typescript-eslint/no-empty-function": ["off"], // 关闭空函数警告
        // "@typescript-eslint/no-unused-vars": ["off"], //
        // "@typescript-eslint/ban-ts-comment": ["off"],
        // "@typescript-eslint/explicit-module-boundary-types": ["off"], // Argument should be typed with a non-any type
        // "@typescript-eslint/no-non-null-assertion": ["off"]
    },
};
