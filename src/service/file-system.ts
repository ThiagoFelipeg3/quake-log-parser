import fs from 'node:fs'
import readline from 'node:readline'
import { ParserLog } from './parser-log';

export class FileSystem {
    constructor (private parser: ParserLog) {}

    async exec () {
        const fileStream = fs.createReadStream('data/games-small.log');
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        for await (const line of rl) {
            this.parser.exec(line);
        }
    }
}
