import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/main/app.ts'],
	splitting: false,
	sourcemap: true,
	clean: true,
	platform: 'node',
	outDir: 'build',
})
