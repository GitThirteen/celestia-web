import Fastify, { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import { discordUserData } from './dtos/discordUserData';
import { ServiceLayer } from "./service";

const server: FastifyInstance = Fastify({ });
const service = new ServiceLayer();

server.register(require('fastify-cors'), {
    origin: true,
    methods: ['GET']
})

server.get('/avatars', discordUserData, async () => {
    console.log(`GET: All avatars`);
    return await service.getUserData();
});

const start = async () => {
    try {
        await server.listen(8080);

        const address = server.server.address();
        const port = typeof address === 'string' ? address : address?.port;
    } catch (error) {
        server.log.error(error);
        process.exit(1);
    }
};

(async () => {
    await start();
})();
