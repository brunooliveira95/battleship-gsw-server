import chai from 'chai'
import Game from './Game'
import GameStatus from './gameStatus'

const expect = chai.expect

describe('Game domain', () => {
    it('When constructor called should create a game instance', () => {
        // Act
        const game = new Game()
    
        // Assert
        expect(game).to.not.be.null
        expect(game.CreationDate).to.not.be.null
        expect(game.Status).to.equal(GameStatus.InProgress)
        expect(game.PlayerTurn).to.equal('player1')
    })
})