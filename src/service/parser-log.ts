import { Game } from "../model/game";

export class ParserLog {
    private games = new Map();

    exec (line: string) {
        const reference = line.match(/^.{0,7}([a-z A-Z][^:]*)/);
        if (!reference) {
            return;
        }

        const method = this.methodMap(reference[1]);
        if (!method) {
            return;
        }

        Game[method]();
    }

    private methodMap (reference: string): string {
        const map = {
            InitGame: 'getInstance',
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
