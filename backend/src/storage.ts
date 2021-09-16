import { DiscordUserData, DiscordUserDataTimestamped } from "./dtos/discordUserData";

export class Storage {
    private static instance: Storage;

    private _userData: DiscordUserDataTimestamped;

    private constructor() {
    }

    static get() {
        if (!Storage.instance) {
            Storage.instance = new Storage();
        }
        return Storage.instance;
    }

    get userData(): DiscordUserDataTimestamped {
        return this._userData;
    }

    setUserData(data: DiscordUserData[]) {
        this._userData = {
            timestamp: Date.now(),
            values: data
        };
    }
}