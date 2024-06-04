import { Game } from "../model/game";

export class ParserLog {
    private games = new Map();
    private currentGame = 0;

    exec (line: string) {
        const reference = line.match(/^.{0,7}([a-z A-Z][^:]*)/);
        if (!reference) {
            return;
        }

        const method = this.methodMap(reference[1]);
        if (!method) {
            return;
        }

        const output = Game[method](line);
        if (method === 'newGame') {
            this.games.set(++this.currentGame, output);
        }
    }

    getGamesList () {
        return this.games.forEach(item => console.log(item.hostname));
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
