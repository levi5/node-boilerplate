import type { FastifyTypedInstance, SwaggerSchema } from '@/types/types'
import { adapterRoute } from '../adapters/fastifyRouter.adapter'
import { makeStatusController } from '../factories/controllers/status.controller.factory'
import type { FastifyPluginOptions } from 'fastify'
import z from 'zod'

export const statusRoute = async (fastify: FastifyTypedInstance, opts: FastifyPluginOptions) => {
	fastify.get(
		'/status',
		{
			schema: {
				tags: ['status'],
			} as SwaggerSchema,
		},
		adapterRoute(await makeStatusController()),
	)

	fastify.post(
		'/status',
		{
			schema: {
				description: 'Receives a code and returns the same code in the response body.',
				tags: ['status'],
				body: z.object({
					code: z.number().int().min(100).max(599),
				}),
			},
		},
		(request) => {
			const { code } = request.body
			return { code }
		},
	)
}
