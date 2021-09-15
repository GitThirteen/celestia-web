import { RouteShorthandOptions } from "fastify";

export const dev: RouteShorthandOptions = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        name: { type: 'string' },
                        discriminator: { type: 'string' },
                        avatarURL: { type: 'string' }
                    }
                }
            }
        }
    }
}

export interface Dev {
    id: string;
    name?: string;
    discriminator?: string;
    avatarURL?: string;
}
