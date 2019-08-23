import { CreateGameUseCase, GetActiveGameUseCase, SetShipsOnBoardUseCase } from '../use-cases'
import { Response } from '../helpers'
import CreateGameControllerBuilder from './createGameController'
import GetActiveGameControllerBuilder from './getActiveGameController'
import SetShipsOnBoardControllerBuilder from './setShipsOnBoardController'

const CreateGameController = CreateGameControllerBuilder(CreateGameUseCase, Response)
const GetActiveGameController = GetActiveGameControllerBuilder(GetActiveGameUseCase, Response)
const SetShipsOnBoardController = SetShipsOnBoardControllerBuilder(SetShipsOnBoardUseCase, Response)

export { 
    CreateGameController,
    GetActiveGameController,
    SetShipsOnBoardController
}