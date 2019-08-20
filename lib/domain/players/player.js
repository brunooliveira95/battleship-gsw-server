import Board from '../board'

export default class Player{
    constructor(id){
        this.Id = id
        this.Board = new Board()
        this.HandleValidation()
    }

    HandleValidation(){
        if(!this.Id)
            throw new Error('Id de jogador não pode ser nulo ou vazio')
    }
}