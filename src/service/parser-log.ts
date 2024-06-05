import { Regex } from "../enum/regex";
import { Game } from "../model/game";

export class ParserLog {
    private games = new Map();
    private currentGame: Game;
    private currentGameId: number = 0;

    exec (line: string) {
        const reference = line.match(Regex.reference);
        if (!reference) {
            return;
        }

        const method = this.methodMap(reference[1]);
        if (!method) {
            return;
        }

        if (method === 'newGame') {
            this.currentGame = Game[method](line);
            this.games.set(++this.currentGameId, this.currentGame);
            return;
        }

        this.currentGame[method](line);
    }

    getGamesList () {
        let result: {[key: string]: {}} | any = {};

        this.games.forEach((game, id) => {
            result[`game_${id}`] = {
                hostName: game.hostName,
                version: game.version,
                kills: game.kills,
                Players: game.getPlayers()
            }
        });

        console.log(result)
        return result;
    }

    private methodMap (reference: string): string {
        const map = {
            InitGame: 'newGame',
            ClientConnect: 'addPlayer',
            ClientUserinfoChanged: 'updatePlayer',
            Kill: 'killPlayer'
        };

        if (reference in map) {
            return map[reference];
        }

        return '';
    }
}
