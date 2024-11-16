import { server } from '@ports/fastify/server'

server.start().catch((err) => {
	console.log(err)
})
