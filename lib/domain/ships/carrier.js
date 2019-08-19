import Ship from './ship'
import Config from '../../configurations'

export default class Carrier extends Ship {
    constructor(positions){
        super(positions)
        this.HandlePositionsValidation(positions)
    }

    HandlePositionsValidation(positions){
        if(!positions || positions.length != Config.CarrierShipSize)
            throw new Error(`Porta-avião precisa ter ${Config.CarrierShipSize} posiçōes`)
    }
}