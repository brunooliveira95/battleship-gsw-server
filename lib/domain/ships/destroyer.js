import Ship from './ship'
import Config from '../../configurations'

export default class Destroyer extends Ship {
    constructor(positions){
        super(positions)
        this.HandlePositionsValidation(positions)
    }

    HandlePositionsValidation(positions){
        if(!positions || positions.length != Config.DestroyerShipSize)
            throw new Error(`Destroyer precisa ter ${Config.DestroyerShipSize} posiçōes`)
    }
}