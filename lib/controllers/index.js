import { CreateGameUseCase, GetActiveGameUseCase } from '../use-cases'
import CreateGameControllerBuilder from './createGameController'
import GetActiveGameControllerBuilder from './getActiveGameController'
  
const CreateGameController = CreateGameControllerBuilder(CreateGameUseCase)
const GetActiveGameController = GetActiveGameControllerBuilder(GetActiveGameUseCase)

export { 
    CreateGameController,
    GetActiveGameController
}