import chai from 'chai'
import { Cruiser } from '.'
import Config from '../../configurations'

const expect = chai.expect

const invalidSizeErrorMessage = `Cruzador precisa ter ${Config.CruiserShipSize} posiçōes`

describe('Cruiser Ship domain', () => {
    it('When not given positions should throw an error', () => {
        // Arrange
        const invalidPositions = null

        // Act
        const invalidPositionsCruiserCreation = () => {
            new Cruiser(invalidPositions)
        }

        // Assert
        expect(invalidPositionsCruiserCreation).to.throw(Error, invalidSizeErrorMessage)
    })

    it('When given invalid size positions should throw an error', () => {
        // Arrange
        const invalidPositions = [
            [0, 0]
        ]

        // Act
        const invalidPositionsCruiserCreation = () => {
            new Cruiser(invalidPositions)
        }

        // Assert
        expect(invalidPositionsCruiserCreation).to.throw(Error, invalidSizeErrorMessage)
    })

    it('When given positions should create a Cruiser ship', () => {
        // Arrange
        const positions = [
            [0, 0],
            [0, 1]
        ]

        // Act
        const cruiser = new Cruiser(positions)

        // Assert
        expect(cruiser).to.not.be.null
    })
})