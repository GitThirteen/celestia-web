import { Client, Intents, User } from 'discord.js';
import { DiscordUserData } from './dtos/discordUserData';
import { Storage } from './storage';

const ADMIN_IDS = process.env.ADMIN_IDS.split(';');
const { DISCORD_BOT_TOKEN } = process.env;

export class ServiceLayer {
    private readonly bot = new DiscordBot();
    private storage = Storage.get();

    async getUserData(): Promise<DiscordUserData[]> {
        if (!this.storage.userData || (Date.now() - this.storage.userData.timestamp) > 12 * 60 * 60 * 1000) {
            this.storage.setUserData(await this.loadUserData());
            return this.storage.userData.values;
        }
        return this.storage.userData.values;
    }

    private async loadUserData(): Promise<DiscordUserData[]> {
        const data: DiscordUserData[] = [];
        const client = this.bot.discordClient;

        for (const ID of ADMIN_IDS) {
            const user = await client.users.fetch(ID);
            data.push(ServiceLayer.mapToDiscordUserData(user));
        }

        return data;
    }

    private static mapToDiscordUserData(u: User): DiscordUserData {
        return {
            id: u.id,
            name: u.username,
            discriminator: u.discriminator,
            avatarURL: u.avatarURL({ dynamic: true }) || u.defaultAvatarURL
        };
    }
}

class DiscordBot {
    private readonly _discordClient = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });

    constructor() {
        this.discordClient.on('ready', this.init.bind(this));
        this.repeat(() => this.discordClient.login(DISCORD_BOT_TOKEN));
    }

    private async init(): Promise<void> {
        console.log(`Logged in as ${this.discordClient.user?.tag}`);
        this.discordClient.user.setActivity(`Status: Running.`);
    }

    private async repeat(func: Function, time: number = 10000): Promise<void> {
        try {
            await func();
            console.log('Success!');
        }
        catch(e) {
            console.log(e.message);
            console.log(`Retrying in ${time / 1000}s...`);
            setTimeout(() => this.repeat(func, time));
        }
    }

    get discordClient() {
        return this._discordClient;
    }
}