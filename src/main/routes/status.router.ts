import { adapterRoute } from '../adapters/fastifyRouter.adapter'
import { makeStatusController } from '../factories/controllers/status.controller.factory'

import type { FastifyPluginOptions } from 'fastify'
import type { FastifyInstance } from 'fastify/types/instance'

export const contactRoute = async (fastify: FastifyInstance, opts: FastifyPluginOptions) => {
	fastify.get('/status', adapterRoute(await makeStatusController()))
}
