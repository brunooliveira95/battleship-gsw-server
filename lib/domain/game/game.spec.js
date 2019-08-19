import chai from 'chai'
import GameBuilder from './Game'
import GameStatus from './gameStatus'

const expect = chai.expect
const newId = 'novoid'
const NewId = () => {
    return newId
}
const Game = GameBuilder(NewId)

describe('Game domain', () => {
    it('When constructor called should create a game instance', () => {
        // Act
        const game = new Game()
    
        // Assert
        expect(game).to.not.be.null
        expect(game.Id).to.equal(newId)
        expect(game.CreationDate).to.not.be.null
        expect(game.Status).to.equal(GameStatus.InProgress)
        expect(game.PlayerTurn).to.equal('player1')
    })
})