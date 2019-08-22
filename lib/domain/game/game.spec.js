import chai from 'chai'
import Game from './Game'
import GameStatus from './gameStatus'

const expect = chai.expect

describe('Game domain', () => {
    describe('Creation', () => {
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

    describe('Set player ships', () => {
        it('When given a player id not in turn should trhow an error', () => {
            // Assert
            const playerId = 'player2'
            const ships = []
            const game = new Game()

            // Act
            const setPlayerShipsFunction = () => {
                game.SetPlayerShips(playerId, ships) 
            }
    
            // Assert
            expect(setPlayerShipsFunction).to.throw(Error, 'Espere sua vez para efetuar uma ação')
        })
    })
})