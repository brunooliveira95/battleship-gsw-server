import chai from 'chai'
import { Destroyer } from '.'
import Config from '../../configurations'

const expect = chai.expect

const invalidSizeErrorMessage = `Destroyer precisa ter ${Config.DestroyerShipSize} posiçōes`

describe('Destroyer Ship domain', () => {
    it('When not given positions should throw an error', () => {
        // Arrange
        const invalidPositions = null

        // Act
        const invalidPositionsDestroyerCreation = () => {
            new Destroyer(invalidPositions)
        }

        // Assert
        expect(invalidPositionsDestroyerCreation).to.throw(Error, invalidSizeErrorMessage)
    })

    it('When given invalid size positions should throw an error', () => {
        // Arrange
        const invalidPositions = [
            [0, 0]
        ]

        // Act
        const invalidPositionsDestroyerCreation = () => {
            new Destroyer(invalidPositions)
        }

        // Assert
        expect(invalidPositionsDestroyerCreation).to.throw(Error, invalidSizeErrorMessage)
    })

    it('When given positions should create a Destroyer ship', () => {
        // Arrange
        const positions = [
            [0, 0],
            [0, 1],
            [0, 2]
        ]

        // Act
        const destroyer = new Destroyer(positions)

        // Assert
        expect(destroyer).to.not.be.null
    })
})