import { join } from 'node:path'

export const swaggerOptions = {
	mode: 'static',
	specification: {
		path: join(__dirname, '..', '..', '..', '..', 'settings', 'swagger', 'swagger.json'),
		postProcessor: (swaggerObject: unknown) => swaggerObject,
		baseDir: './src',
	},
	swaggerUIOptions: {
		routePrefix: '/docs',
		swagger: '/swagger.json',
	},
}
