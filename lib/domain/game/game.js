import GameStatus from './gameStatus'

export default function GameBuilder(NewId){
    return class Game {
        constructor(){
            this._id = NewId()
            this._creationDate = new Date()
            this._status = GameStatus.InProgress
            this._playerTurn = 'player1'
        }

        get Id(){
            return this._id
        }

        get CreationDate(){
            return this._creationDate
        }

        get Status(){
            return this._status
        }

        get PlayerTurn(){
            return this._playerTurn
        }
    }
}