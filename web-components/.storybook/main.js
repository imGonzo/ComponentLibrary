/** @type { import('@storybook/web-components-webpack5').StorybookConfig } */

const config = {
    stories: [
        "../src/**/*.mdx",
        "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
        "../src/**/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
    ],
    framework: {
        name: "@storybook/web-components-webpack5",
        options: {},
    },
    webpackFinal: async (config) => {
        // Add HTML loader
        config.module.rules.push({
            test: /\.html$/,
            use: "html-loader",
        });

        return config;
    },
};

export default config;
