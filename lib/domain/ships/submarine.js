import Ship from './ship'
import Config from '../../configurations'

export default class Submarine extends Ship {
    constructor(positions){
        super(positions)
        HandlePositionsValidation(positions)
    }
}

function HandlePositionsValidation(positions){
    if(!positions || positions.length != Config.SubmarineShipSize)
        throw new Error(`Submarino precisa ter ${Config.SubmarineShipSize} posiçōes`)
}