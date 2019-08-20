import GameRepository from '../data'
import CreateGame from './createGame'
import GetActiveGame from './getActiveGame'

const CreateGameUseCase = new CreateGame(GameRepository)
const GetActiveGameUseCase = new GetActiveGame(GameRepository)

export {
    CreateGameUseCase,
    GetActiveGameUseCase
}