import chai from 'chai'
import { Carrier } from '.';
import Config from '../../configurations'

const expect = chai.expect

const invalidSizeErrorMessage = `Porta-avião precisa ter ${Config.CarrierShipSize} posiçōes`

describe('Carrier Ship domain', () => {
    it('When not given positions should throw an error', () => {
        // Arrange
        const invalidPositions = null

        // Act
        const invalidPositionsCarrierCreation = () => {
            new Carrier(invalidPositions)
        }

        // Assert
        expect(invalidPositionsCarrierCreation).to.throw(Error, invalidSizeErrorMessage)
    })

    it('When given invalid size positions should throw an error', () => {
        // Arrange
        const invalidPositions = [
            [0, 0]
        ]

        // Act
        const invalidPositionsCarrierCreation = () => {
            new Carrier(invalidPositions)
        }

        // Assert
        expect(invalidPositionsCarrierCreation).to.throw(Error, invalidSizeErrorMessage)
    })

    it('When given positions should create a Carrier ship', () => {
        // Arrange
        const positions = [
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4]
        ]

        // Act
        const carrier = new Carrier(positions)

        // Assert
        expect(carrier).to.not.be.null
    })
})