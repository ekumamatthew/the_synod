import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: [
      "contracts/**",
      "dist/**",
      "sdk/**",
      "issues/**",
      "node_modules/**",
      "scripts/**",
      "services/**",
      "Soroban Oracle Network Technical Spike.md",
      "The Synod PRD.md",
      "The Synod Ticket Backlog.md"
    ]
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  }
];
