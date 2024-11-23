import { StatusController } from '@/presentation/controllers/status.controller'

export const makeStatusController = () => {
	return new StatusController()
}
