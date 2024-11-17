import { _Object } from 'funcio'
import { z } from 'zod'
import dotenv from 'dotenv'

const envSchema = z.object({
	NODE_ENV: z.enum(['development', 'production', 'test']).default('production'),
	PORT: z
		.string()
		.transform((val) => Number(val))
		.refine((val) => !Number.isNaN(val), { message: 'PORT must be a valid number' }),
	DB_HOST: z.string(),
	DB_USER: z.string(),
	DB_PASS: z.string(),
	DEBUG: z
		.string()
		.transform((value) => ['true', 'yes', '1', 'on'].includes(value.toLowerCase()))
		.default('false'),
})

type TSchema = keyof typeof envSchema.shape

const secretEnvs: Array<TSchema> = []

for (const secretEnv of secretEnvs) {
	delete process.env[secretEnv]
}

const result = dotenv.config()

if (result.error) {
	console.error('Error loading .env file:', result.error)
	process.exit(1)
}

const parsed = envSchema.safeParse({ ...result.parsed, NODE_ENV: process.env.NODE_ENV })

if (!parsed.success) {
	console.error('Error validating environment variables:', parsed.error.errors)
	process.exit(1)
}

export const environmentVariable = _Object.makeImmutable(parsed.data)
