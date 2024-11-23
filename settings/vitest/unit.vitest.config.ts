import { defineConfig } from "vitest/config";
import { vitestGlobalSettings } from "./vitest.config";

export default defineConfig({
  test: {
    ...vitestGlobalSettings.test,
    include: ["**/*.spec.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
  resolve:{
    ...vitestGlobalSettings.resolve

  }
});