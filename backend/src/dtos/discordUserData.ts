import { RouteShorthandOptions } from "fastify";

export const discordUserData: RouteShorthandOptions = {
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

export interface DiscordUserData {
    id: string;
    name?: string;
    discriminator?: string;
    avatarURL?: string;
}

export interface DiscordUserDataTimestamped {
    timestamp: number,
    values: DiscordUserData[]
}
