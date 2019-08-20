import CallbackHandler from '../adapters/express-callback-handler'

import { CreateGameController, GetActiveGameController } from '../controllers'

export default function SetUpRoutes(app){
    app.get('/game', CallbackHandler(GetActiveGameController))
    app.post('/game', CallbackHandler(CreateGameController))
}