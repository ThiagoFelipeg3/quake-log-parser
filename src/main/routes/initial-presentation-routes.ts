import { Router } from 'express'

export default (router: Router): void => {
    router.get('/presentation', (req, res) => {
        res.json({
            status: 'initial',
            presentations: 'Welcome to the Quake log parser !!'
        })
    })
}
