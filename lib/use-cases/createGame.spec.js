import chai from 'chai'
import sinon from 'sinon'
import CreateGame from './createGame'
import GameRepository from '../data'
import { Game } from '../domain'

const expect = chai.expect
let mock = null

function GetNewGame(){
    return new Game()
}

beforeEach(() => {
    mock = sinon.createSandbox();
})

describe('CreateGame UseCase', () => {
    it('When exists an active game should return existing game instance', async () => {
        // Arrange
        const gameRepository = mock
            .stub(GameRepository, 'GetActiveGame')
            .returns(GetNewGame())

            console.log(gameRepository.GetActiveGame())

        const createGameUseCase = new CreateGame(gameRepository)

        // Act
        const game = await createGameUseCase.Handle()

        // Assert
        expect(game).to.not.be.null
    })
})