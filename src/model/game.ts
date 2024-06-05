import { Regex } from "../enum/regex";
import { Player } from "./player";

export class Game {
    private players = new Map();
    public total_kills: number = 0;
    public hostname: string;
    public version: string;

    constructor (line) {
        this.hostname = line.match(Regex.hostName)[1]
        this.version = line.match(Regex.version)[1]
    }

    static newGame (line: string) {
        return new Game(line);
    }

    static addPlayer (line) {

    }

    static updatePlayer (line) {

    }

    static killPlayer (line) {

    }
}
