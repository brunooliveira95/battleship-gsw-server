import chai from 'chai'
import Board from './board'

const expect = chai.expect

describe('Board domain', () => {
    it('When called constructor should create a board', () => {
        // Act
        const board = new Board()

        // Assert
        expect(board).to.not.be.null
    })
})