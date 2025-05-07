import { jsonSchemaTransform } from 'fastify-type-provider-zod'
import { join } from 'node:path'

export const swaggerOptions = {
	mode: 'static',
	specification: {
		path: join(__dirname, '..', '..', '..', '..', 'settings', 'swagger', 'swagger.json'),
		postProcessor: (swaggerObject: unknown) => swaggerObject,
		baseDir: './src',
		transform: jsonSchemaTransform,
	},
	swaggerUIOptions: {
		routePrefix: '/docs',
		swagger: '/swagger.json',
	},
}
