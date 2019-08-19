import Ship from './ship'
import Config from '../../configurations'

export default class Submarine extends Ship {
    constructor(positions){
        super(positions)
        this.HandlePositionsValidation(positions)
    }

    HandlePositionsValidation(positions){
        if(!positions || positions.length != Config.SubmarineShipSize)
            throw new Error(`Submarino precisa ter ${Config.SubmarineShipSize} posiçōes`)
    }
}