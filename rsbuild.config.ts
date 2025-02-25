import { defineConfig } from '@rsbuild/core';

// Rsbuild plugins
import { pluginVue } from '@rsbuild/plugin-vue';

// Rspack plugins
import pluginFont from 'vite-plugin-font';

// Export configs
export default defineConfig({
  html: {
    favicon: './src/assets/favicon.svg',
    title: 'Hydrogen Lyrics',
  },
  plugins: [pluginVue()],
  tools: {
    bundlerChain(chain, { CHAIN_ID }) {
      chain.module.rule(CHAIN_ID.RULE.FONT).exclude.add(/\.ttf$/);
    },
    rspack: {
      plugins: [pluginFont.rspack()],
    },
  },
});
