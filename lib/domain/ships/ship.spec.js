import chai from 'chai'
import Ship from './ship'

const expect = chai.expect

class TestShip extends Ship{
    constructor(positions){
        super(positions)
    }
}

describe('Ship domain', () => {
    it('When called constructor of an abstract ship should trhow an error', () => {
        // Act
        const shipAbstractCreation = () => {
            new Ship()
        }

        // Assert
        expect(shipAbstractCreation).to.throw(TypeError, 'Não é possível instanciar um navio abstrato')
    })

    it('When given repeated positions should throw an error', () => {
        // Arrange
        const repeatedPositions = [
            [0, 0],
            [0, 0]
        ]

        // Act
        const repeatedPositionsCreation = () => {
            new TestShip(repeatedPositions)
        }

        // Assert
        expect(repeatedPositionsCreation).to.throw(Error, 'Não é possível criar um navio com posições repetidas')
    })
})