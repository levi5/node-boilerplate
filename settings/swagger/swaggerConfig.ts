import { jsonSchemaTransform } from 'fastify-type-provider-zod'
export const swaggerOptions = {
	specification: {
		openapi: {
			openapi: '3.0.0',
			info: {
				title: 'API',
				description: 'API [Description]',
				version: '1.0.0',
			},
			servers: [
				{
					url: 'http://localhost:3001',
					description: 'Development server',
				},
			],
		},

		transform: jsonSchemaTransform,
	},
	swaggerUIOptions: {
		routePrefix: '/docs',
		uiConfig: {
			docExpansion: 'list',
			documentTitle: 'Minha API',
		},
		theme: { title: 'API' },
	},
}
