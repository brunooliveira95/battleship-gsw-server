import { GameStatus } from '../../domain'
import GameSchema from '../schemas'

export default class GameRepository {
    constructor() {
        this._model = GameSchema
    }

    async GetActiveGame(){
        const result = await this._model.findOne({Status: GameStatus.InProgress})
        return result
    }

    async SaveGame(game){
        const result = await this._model.create(game)
        return result
    }
}