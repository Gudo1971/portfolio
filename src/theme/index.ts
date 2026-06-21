import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        text: { value: "var(--colors-text)" },
        subtle: { value: "var(--colors-subtle)" },
        bg: { value: "var(--colors-bg)" },
        card: { value: "var(--colors-card)" },
        border: { value: "var(--colors-border)" },
        accent: { value: "var(--colors-accent)" },
        accentHover: { value: "var(--colors-accent-hover)" },
      },
    },
  },

  globalCss: {
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },

    body: {
      background: "var(--colors-bg)",
      color: "var(--colors-text)",
    },
  },
});
