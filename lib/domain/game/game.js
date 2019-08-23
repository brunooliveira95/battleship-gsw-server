import GameStatus from './gameStatus'
import Player from '../players'
import { DomainError } from '../../shared'

export default class Game {
    constructor(){
        this.CreationDate = new Date()
        this.Status = GameStatus.InProgress
        this.PlayerTurn = 'player1'
        this.PlayerOne = new Player('player1')
        this.PlayerTwo = new Player('player2')
    }

    SetPlayerShips(playerId, ships){
        HandlePlayerTurn(this, playerId)

        const player = GetPlayerById(this, playerId)
        player.SetShips(ships)
    }
}

function HandlePlayerTurn(context, playerId){ 
    if(context.PlayerTurn != playerId)
        throw new DomainError('Espere sua vez para efetuar uma ação')
}

function GetPlayerById(context, playerId){
    if(playerId == 'player1')
        return context.PlayerOne
    
    return context.PlayerTwo
}