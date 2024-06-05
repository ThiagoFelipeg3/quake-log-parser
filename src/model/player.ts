import { Regex } from "../enum/regex";

export class Player {
    public id: number;
    public name: string;

    constructor(line: string) {
        this.id = line.match(Regex.playerId)[2];
    }

    setName(line: string) {
        this.name = line.match(Regex.playerName)[1]
    }
}
