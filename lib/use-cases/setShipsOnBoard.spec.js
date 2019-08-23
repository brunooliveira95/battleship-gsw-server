import chai from 'chai'
import sinon from 'sinon'
import SetShipsOnBoard from './setShipsOnBoard'
import GameRepository from '../data'
import { Game } from '../domain'
import { UseCaseError } from '../shared'

const expect = chai.expect
let mock = null

function GetNewGame(){
    return new Game()
}

describe('SetShipsOnBoard UseCase', () => {
    beforeEach(() => {
        mock = sinon.createSandbox();
    })
    
    afterEach(() => {
        mock.restore();
    });

    it('When not exists an active game should throws an error', async () => {
        // Arrange
        mock.stub(GameRepository, 'GetActiveGame')
            .returns(null)

        const setShipsOnBoardUseCase = new SetShipsOnBoard(GameRepository)

        // Act
        const useCaseHandle = async () => {
            await setShipsOnBoardUseCase.Handle()
        }

        // Assert
        expect(useCaseHandle).to.eventually.throw(UseCaseError, 'Jogo ativo não encontrado')
    })
})