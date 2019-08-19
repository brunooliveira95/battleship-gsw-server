import Board from '../board'

export default class Player{
    constructor(id){
        this._id = id
        this._board = new Board()
        this.HandleValidation()
    }

    get Id(){
        return this._id
    }

    HandleValidation(){
        if(!this._id)
            throw new Error('Id de jogador não pode ser nulo ou vazio')
    }
}