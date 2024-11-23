import { _Maybe } from 'funcio'

import type { IController } from '@/presentation/protocols/controller.protocol'
import type { FastifyReply, FastifyRequest } from 'fastify'

export const adapterRoute = (controller: IController) => {
	return async (request: FastifyRequest, replay: FastifyReply) => {
		const params = { ...(request.params || {}) }
		const body = { ...(request.body || {}) }
		const query = { ...(request.query || {}) }
		const httpRequest = { body, params, query }

		const httpResponse = await controller.handle(httpRequest)

		const error = _Maybe
			.of(httpResponse)
			.map((httpResponse) => httpResponse.body)
			.map((body) => body)
			.map((body) => body.error)
			.map((error) => error)
			.map((error) => error.message)
			.map((message) => message)
			.getOrElse(null)

		const newBody = {
			...httpResponse.body,
			error,
		}
		return await replay.status(httpResponse.statusCode).send(newBody)
	}
}
