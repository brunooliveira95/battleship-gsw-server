import Configs from '../../configurations'

export default class Board{
    constructor(){
        this._shots = new Array(Configs.GameBoardCols, Configs.GameBoardRows)
    }
}