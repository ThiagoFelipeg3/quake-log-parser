import { Regex } from "../enum/regex";

export class Player {
    public id: string;
    public name: string;
    public kills: KillTypes;

    constructor (line: string) {
        this.id = Player.getIdLine(line);
        this.kills = {
            wold: 0,
            player: 0,
        };
    }

    setName (line: string) {
        const output = line.match(Regex.playerName);
        if (!output) {
            return;
        }

        this.name = output[1];
    }

    setKill (line) {
        const players = line.match(Regex.kill);

        if (!players) {
            return;
        }

        if (players[1] == 1022) {
            this.kills.wold++;
            return;
        }

        this.kills.player++;
    }

    static getIdLine (line): string {
        const output = line.match(Regex.playerId)

        return output ? output[2] : '';
    }
}


type KillTypes = {
    wold: number,
    player: number,
}