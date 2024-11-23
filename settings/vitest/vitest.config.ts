import { resolve } from "path"

export const vitestGlobalSettings = {
  test: {
    exclude: ["**/node_modules/**", "**/dist/**", "**/cypress/**"],
    watchExclude: ["**/node_modules/**", "**/dist/**", "**/build/**"],

  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '..', '..', './src')
    },
  }
}