import Ship from './ship'
import Config from '../../configurations'

export default class Cruiser extends Ship {
    constructor(positions){
        super(positions)
        this.HandlePositionsValidation(positions)
    }

    HandlePositionsValidation(positions){
        if(!positions || positions.length != Config.CruiserShipSize)
            throw new Error(`Cruzador precisa ter ${Config.CruiserShipSize} posiçōes`)
    }
}