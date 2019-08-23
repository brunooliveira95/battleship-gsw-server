import Board from '../board'
import { DomainError } from '../../shared'

export default class Player{
    constructor(id){
        this.Id = id
        this.Board = new Board()
        HandleValidation(this)
    }

    SetShips(ships){
        this.Board.SetShips(ships)
    }
}

function HandleValidation(context){
    if(!context.Id)
        throw new DomainError('Id de jogador não pode ser nulo ou vazio')
}