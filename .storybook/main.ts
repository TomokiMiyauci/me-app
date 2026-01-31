import type { StorybookConfig } from "@storybook/react-vite";
import type { Plugin, PluginOption } from "vite";

const ignorePatterns = [
  /^vite-plugin-cloudflare/,
  /^rsc/,
];

async function normalizePluginOptions(
  options: PluginOption,
): Promise<Plugin[]> {
  if (options instanceof Promise) {
    const awaited = await options;

    return normalizePluginOptions(awaited);
  }

  if (Array.isArray(options)) {
    const promise = options.map((opt) => normalizePluginOptions(opt));

    const optionsList = await Promise.all(promise);

    return optionsList.flat();
  }

  if (!options) {
    throw new Error("invalid plugin");
  }

  return [options];
}

export default {
  stories: [
    "../src/**/*.stories.tsx",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/react-vite",
  viteFinal: async (config) => {
    const plugins = await normalizePluginOptions(config.plugins ?? []);

    const filtered = plugins.filter((plugin) => {
      return ignorePatterns.every((pattern) => !pattern.test(plugin.name));
    });

    // Disabled Environment API and rsc plugins
    config.environments = {};
    config.plugins = filtered;

    return config;
  },
} satisfies StorybookConfig;
