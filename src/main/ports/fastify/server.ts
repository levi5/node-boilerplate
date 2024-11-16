import fastify, { type FastifyInstance } from 'fastify'
import cors from '@fastify/cors'
import { contactRoute } from '@routes'
import { join } from 'node:path'

// create server
const application = fastify({ logger: true })

void application.register(cors, {
	origin: '*',
})

application.register(require('@fastify/swagger'), {
	mode: 'static',
	specification: {
		path: join(__dirname, '../../../../settings/swagger/swagger.json'),
		postProcessor: (swaggerObject: unknown) => {
			return swaggerObject
		},
		baseDir: './src',
	},
})

application.register(require('@fastify/swagger-ui'), {
	routePrefix: '/docs',
	swagger: '/swagger.json',
})

// Routes
const registerRoutes = async (server: FastifyInstance) => {
	await server.register(contactRoute, { prefix: '/api/v1' })
}

registerRoutes(application).catch((error) => {
	console.error(error)
})

const start = async () => {
	application.listen({ port: 3001 }, (err, address) => {
		if (err) {
			console.error(err)
			process.exit(1)
		}
		console.log(`🚀 🟢 Server listening at ${address}`)
	})
}

export const server = { start }
