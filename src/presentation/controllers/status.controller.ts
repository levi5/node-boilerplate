import type { IController, THttpRequest } from '../protocols/controller.protocol'

export class StatusController implements IController {
	async handle(request: THttpRequest) {
		return Promise.resolve({ body: { data: [], error: null }, statusCode: 200 })
	}
}
