import GameRepository from '../data'
import CreateGame from './createGame'
import GetActiveGame from './getActiveGame'
import SetShipsOnBoard from './setShipsOnBoard'

const CreateGameUseCase = new CreateGame(GameRepository)
const GetActiveGameUseCase = new GetActiveGame(GameRepository)
const SetShipsOnBoardUseCase = new SetShipsOnBoard(GameRepository)

export {
    CreateGameUseCase,
    GetActiveGameUseCase,
    SetShipsOnBoardUseCase
}