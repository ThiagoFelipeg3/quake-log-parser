export class Game {
    private players = new Map();
    public total_kills: number = 0;
    public hostname: string;
    public version: string;

    constructor (line) {
        this.hostname = line.match(/sv_hostname\\([a-z A-Z 0-9][^\\]*)/)[1]
        this.version = line.match(/version\\(.*)\\protocol/)[1]
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
