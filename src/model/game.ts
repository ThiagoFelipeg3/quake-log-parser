import { Regex } from "../enum/regex";
import { Player } from "./player";

export class Game {
    private players: Map<string, Player> = new Map();
    private kills: number = 0;
    public hostName: string;
    public version: string;

    constructor (line) {
        this.hostName = line.match(Regex.hostName)[1]
        this.version = line.match(Regex.version)[1]
    }

    static newGame (line: string) {
        return new Game(line);
    }

    addPlayer (line) {
        const player = new Player(line);
        this.players.set(player.id, player);
    }

    updatePlayer (line) {
        const player = this.players.get(Player.getIdLine(line));
        if (!player) {
            return;
        }

        player.setName(line);
    }

    killPlayer (line) {
        const players = line.match(Regex.kill);
        if (!players) {
            return;
        }

        const player = this.players.get(players[2]);
        if (!player) {
            return;
        }

        player.setKill(line);
        this.kills++;
    }

    getPlayers () {
        let players: {[key: string]: {}} | any = {};
        this.players.forEach(player => {
            players[`name_${player.id}`] = {
                id: player.id,
                name: player.name,
                kills: {
                    wold: player.kills.wold,
                    player: player.kills.player,
                }
            }
        });

        return players;
    }
}
