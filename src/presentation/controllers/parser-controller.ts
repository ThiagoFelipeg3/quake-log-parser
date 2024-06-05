import { FileSystem } from '../../service/file-system';
import { ok, serverError } from '../helpers/http-helper';
import { Controller } from '../protocols/controller';
import { HttpRequest, HttpResponse } from '../protocols/http';

export class ParserController implements Controller {
    constructor (
        private file: FileSystem
    ) {}

    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const output = await this.file.exec();

            return ok(output.getGamesList())
        } catch (error) {
            return serverError(error)
        }
    }
}