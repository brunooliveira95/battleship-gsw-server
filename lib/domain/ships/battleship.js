import Ship from './ship'
import Config from '../../configurations'

export default class Battleship extends Ship {
    constructor(positions){
        super(positions)
        this.HandlePositionsValidation(positions)
    }

    HandlePositionsValidation(positions){
        if(!positions || positions.length != Config.BattleshipShipSize)
            throw new Error(`Encouraçado precisa ter ${Config.BattleshipShipSize} posiçōes`)
    }
}