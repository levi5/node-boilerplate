import { defineConfig } from 'tsup'
import dotenv from 'dotenv'

export default defineConfig({
	entry: ['src/main/app.ts'],
	splitting: false,
	sourcemap: true,
	clean: true,
	platform: 'node',
	outDir: 'build',
	env: {
		...dotenv.config().parsed,
		NODE_ENV: 'production',
	},
})
