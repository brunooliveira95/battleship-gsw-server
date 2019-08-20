import GameStatus from './gameStatus'
import Player from '../players'

export default class Game {
    constructor(){
        this.CreationDate = new Date()
        this.Status = GameStatus.InProgress
        this.PlayerTurn = 'player1'
        this.PlayerOne = new Player('player1')
        this.PlayerTwo = new Player('player2')
    }
}