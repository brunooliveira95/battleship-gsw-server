import chai from 'chai'
import Board from './board'

const expect = chai.expect

describe('Board domain', () => {
    describe('Creation', () => {
        it('When called constructor should create a board', () => {
            // Act
            const board = new Board()

            // Assert
            expect(board).to.not.be.null
            expect(board.Carrier).to.be.null
            expect(board.Battleship).to.be.null
            expect(board.Submarine).to.be.null
            expect(board.Destroyer).to.be.null
            expect(board.Cruiser).to.be.null
        })
    })
    describe('Set ships', () => {
        it('When not given ships should throw an error', () => {
            // Arrange
            const ships = null
            const board = new Board()

            // Act
            const setShipsFunction = () => {
                board.SetShips(ships)
            }

            // Assert
            expect(setShipsFunction).to.throw(Error, 'São necessários 5 navios para iniciar o jogo')
        })

        it('When not given 5 ships should throw an error', () => {
            // Arrange
            const ships = [
                { type: 'carrier', positions: [[0,0], [0,1]]}
            ]
            const board = new Board()

            // Act
            const setShipsFunction = () => {
                board.SetShips(ships)
            }

            // Assert
            expect(setShipsFunction).to.throw(Error, 'São necessários 5 navios para iniciar o jogo')
        })

        it('When given invalid ships types should throw an error', () => {
            // Arrange
            const ships = [
                { type: 'invalid_type', positions: [[0,0], [0,1]]},
                { type: 'invalid_type', positions: [[0,0], [0,1]]},
                { type: 'invalid_type', positions: [[0,0], [0,1]]},
                { type: 'invalid_type', positions: [[0,0], [0,1]]},
                { type: 'invalid_type', positions: [[0,0], [0,1]]}
            ]
            const board = new Board()

            // Act
            const setShipsFunction = () => {
                board.SetShips(ships)
            }

            // Assert
            expect(setShipsFunction).to.throw(Error, 'Existem tipos de navios inválidos')
        })

        it('When given repeated ships types should throw an error', () => {
            // Arrange
            const ships = [
                { type: 'carrier', positions: [[0,0], [0,1]]},
                { type: 'carrier', positions: [[0,0], [0,1]]},
                { type: 'carrier', positions: [[0,0], [0,1]]},
                { type: 'carrier', positions: [[0,0], [0,1]]},
                { type: 'carrier', positions: [[0,0], [0,1]]}
            ]
            const board = new Board()

            // Act
            const setShipsFunction = () => {
                board.SetShips(ships)
            }

            // Assert
            expect(setShipsFunction).to.throw(Error, 'Existem tipos de navios repetidos')
        })

        it('When given overlapping ships positions should throw an error', () => {
            // Arrange
            const ships = [
                { type: 'carrier', positions: [[0,0], [0,1], [0,2], [0,3], [0,4]]},
                { type: 'battleship', positions: [[0,0], [0,1], [0,2], [0,3]]},
                { type: 'submarine', positions: [[0,0], [0,1], [0,2]]},
                { type: 'destroyer', positions: [[0,0], [0,1], [0,2]]},
                { type: 'cruiser', positions: [[0,0], [0,1]]}
            ]
            const board = new Board()

            // Act
            const setShipsFunction = () => {
                board.SetShips(ships)
            }

            // Assert
            expect(setShipsFunction).to.throw(Error, 'Existem posições de navios sobrepostas')
        })

        it('When given ships should set with positions', () => {
            // Arrange
            const ships = [
                { type: 'carrier', positions: [[0,0], [0,1], [0,2], [0,3], [0,4]]},
                { type: 'battleship', positions: [[1,0], [1,1], [1,2], [1,3]]},
                { type: 'submarine', positions: [[2,0], [2,1], [2,2]]},
                { type: 'destroyer', positions: [[3,0], [3,1], [3,2]]},
                { type: 'cruiser', positions: [[4,0], [4,1]]}
            ]
            const board = new Board()

            // Act
            board.SetShips(ships)

            // Assert
            expect(board.Carrier).to.not.be.null
            expect(board.Battleship).to.not.be.null
            expect(board.Submarine).to.not.be.null
            expect(board.Destroyer).to.not.be.null
            expect(board.Cruiser).to.not.be.null
        })
    })
})