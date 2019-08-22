import Board from '../board'

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
        throw new Error('Id de jogador não pode ser nulo ou vazio')
}