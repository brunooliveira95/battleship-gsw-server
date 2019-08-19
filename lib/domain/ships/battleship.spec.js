import chai from 'chai'
import { Battleship } from '.'
import Config from '../../configurations'

const expect = chai.expect

const invalidSizeErrorMessage = `Encouraçado precisa ter ${Config.BattleshipShipSize} posiçōes`

describe('Battleship Ship domain', () => {
    it('When not given positions should throw an error', () => {
        // Arrange
        const invalidPositions = null

        // Act
        const invalidPositionsBattleshipCreation = () => {
            new Battleship(invalidPositions)
        }

        // Assert
        expect(invalidPositionsBattleshipCreation).to.throw(Error, invalidSizeErrorMessage)
    })

    it('When given invalid size positions should throw an error', () => {
        // Arrange
        const invalidPositions = [
            [0, 0]
        ]

        // Act
        const invalidPositionsBattleshipCreation = () => {
            new Battleship(invalidPositions)
        }

        // Assert
        expect(invalidPositionsBattleshipCreation).to.throw(Error, invalidSizeErrorMessage)
    })

    it('When given positions should create a Battleship ship', () => {
        // Arrange
        const positions = [
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3]
        ]

        // Act
        const battleship = new Battleship(positions)

        // Assert
        expect(battleship).to.not.be.null
    })
})