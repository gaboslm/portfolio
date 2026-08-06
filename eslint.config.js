import eslintPluginAstro from "eslint-plugin-astro";
import airbnbBase from "eslint-config-airbnb-base";

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      indent: ["error", 2, { SwitchCase: 1 }],
      "astro/indent": ["error", { indent: 2 }],
      quotes: ["error", "double"],
      semi: ["error", "always"],
    },
  },
];
