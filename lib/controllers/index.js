import { CreateGameUseCase, GetActiveGameUseCase } from '../use-cases'
import { Response } from '../helpers'
import CreateGameControllerBuilder from './createGameController'
import GetActiveGameControllerBuilder from './getActiveGameController'

const CreateGameController = CreateGameControllerBuilder(CreateGameUseCase, Response)
const GetActiveGameController = GetActiveGameControllerBuilder(GetActiveGameUseCase, Response)

export { 
    CreateGameController,
    GetActiveGameController
}