export default class Ship {
  constructor(positions) {
    this.Positions = positions
    this.HandleAbstractCreation(new.target)
    if(positions && positions.length)
        this.HandlePositionsValidations(positions)
  }

  HandleAbstractCreation(target){
    if (target === Ship) {
      throw new TypeError('Não é possível instanciar um navio abstrato')
    }
  }

  HandlePositionsValidations(positions){
    positions.forEach(position => {
        let length = this.Positions.filter(_position => {
            return position.toString() == _position.toString()
        }).length
        if(length != 1)
            throw new Error('Não é possível criar um navio com posições repetidas')
    })
  }
}