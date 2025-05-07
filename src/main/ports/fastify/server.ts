import { _Maybe } from 'funcio'
import { green, bold, bgGreen, black, magenta, underline, cyan, bgYellow } from 'colorette'
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from 'fastify-type-provider-zod'
import cors from '@fastify/cors'
import fastify, { type FastifyInstance } from 'fastify'

import { statusRoute } from '@routes'
import { environmentVariable } from '@settings/env'
import { swaggerOptions } from '@settings/swagger/swaggerConfig'

const prefix = '/api/v1'
const NODE_ENV = _Maybe
	.of(environmentVariable)
	.map((environmentVariable) => environmentVariable.NODE_ENV)
	.map((NODE_ENV) => NODE_ENV)
	.getOrElse('production')

const port = _Maybe
	.of(environmentVariable)
	.map((environmentVariable) => environmentVariable.PORT)
	.map((PORT) => PORT)
	.getOrElse(3000)
const logger = NODE_ENV === 'development'

// create server
const application = fastify({ logger }).withTypeProvider<ZodTypeProvider>()

void application.register(cors, { origin: '*' })
void application.setValidatorCompiler(validatorCompiler)
void application.setSerializerCompiler(serializerCompiler)

if (NODE_ENV === 'development') {
	application.register(require('@fastify/swagger'), swaggerOptions.specification)
	application.register(require('@fastify/swagger-ui'), swaggerOptions.swaggerUIOptions)
}

// Routes
const registerRoutes = async (server: FastifyInstance) => {
	await server.register(statusRoute, { prefix })
}

registerRoutes(application).catch((error) => {
	console.error(error)
})

const start = async () => {
	application.listen({ port, host: '0.0.0.0' }, (err, address) => {
		if (err) {
			console.error(err)
			process.exit(1)
		}

		console.info(
			`${green(bold('🚀'))} ${bgGreen(black(bold('🟢 Server listening at ')))} ${bgYellow(black(underline(cyan(address + prefix))))} ${magenta('🔗')}`,
		)
	})
}

export const server = { start }
