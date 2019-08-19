import chai from 'chai'
import { Submarine } from '.'
import Config from '../../configurations'

const expect = chai.expect

const invalidSizeErrorMessage = `Submarino precisa ter ${Config.SubmarineShipSize} posiçōes`

describe('Submarine Ship domain', () => {
    it('When not given positions should throw an error', () => {
        // Arrange
        const invalidPositions = null

        // Act
        const invalidPositionsSubmarineCreation = () => {
            new Submarine(invalidPositions)
        }

        // Assert
        expect(invalidPositionsSubmarineCreation).to.throw(Error, invalidSizeErrorMessage)
    })

    it('When given invalid size positions should throw an error', () => {
        // Arrange
        const invalidPositions = [
            [0, 0]
        ]

        // Act
        const invalidPositionsSubmarineCreation = () => {
            new Submarine(invalidPositions)
        }

        // Assert
        expect(invalidPositionsSubmarineCreation).to.throw(Error, invalidSizeErrorMessage)
    })

    it('When given positions should create a Submarine ship', () => {
        // Arrange
        const positions = [
            [0, 0],
            [0, 1],
            [0, 2]
        ]

        // Act
        const submarine = new Submarine(positions)

        // Assert
        expect(submarine).to.not.be.null
    })
})