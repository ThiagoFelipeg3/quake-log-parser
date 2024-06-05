import { Router } from "express"
import { adaptExpress } from "../adapters/express/express-adapter"
import { ParserController } from "../../presentation/controllers/parser-controller"
import { ParserLog } from "../../service/parser-log"
import { FileSystem } from "../../service/file-system"

export default (router: Router): void => {
    router.get('/parser', adaptExpress(
        new ParserController(
            new FileSystem(
                new ParserLog
            )
        )
    ))
}
