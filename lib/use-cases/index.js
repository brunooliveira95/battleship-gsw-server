import GameRepository from '../data'
import CreateGame from './createGame'

const CreateGame = new CreateGame(GameRepository)

export {
    CreateGame
}