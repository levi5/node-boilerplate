import { environmentVariable } from '@settings/env'
import { jsonSchemaTransform } from 'fastify-type-provider-zod'
import { _Maybe } from 'funcio'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const port = _Maybe
	.of(environmentVariable)
	.map((environmentVariable) => environmentVariable.PORT)
	.map((PORT) => PORT)
	.getOrElse(3000)

export const swaggerOptions = {
	specification: {
		openapi: {
			openapi: '3.0.0',
			info: {
				title: 'API',
				description: 'API [Description]',
				version: '1.0.0',
			},
			components: {
				securitySchemes: {
					tokenAuth: {
						type: 'apiKey',
						in: 'header',
						name: 'Authorization',
					},
				},
			},

			servers: [
				{
					url: `http://localhost:${port}`,
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
		theme: {
			title: 'API',
			css: [
				{
					filename: 'theme.css',
					content: readFileSync(join(__dirname, 'theme.css'), 'utf8'),
				},
			],
		},
	},
}
