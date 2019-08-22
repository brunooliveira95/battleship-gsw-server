export default class Ship {
  constructor(positions) {
    this.Positions = positions
    HandleAbstractCreation(new.target)
    if(positions && positions.length)
        HandlePositionsValidations(this, positions)
  }
}

function HandleAbstractCreation(target){
  if (target === Ship) {
    throw new TypeError('Não é possível instanciar um navio abstrato')
  }
}

function HandlePositionsValidations(context, positions){
  positions.forEach(position => {
      let length = context.Positions.filter(_position => {
          return position.Line == _position.Line && position.Column == _position.Column
      }).length
      if(length != 1)
        throw new Error('Não é possível criar um navio com posições repetidas')
  })

  if(!ArePositionsInSequence(positions))
    throw new Error('As posições precisam estar em sequência')
}

function ArePositionsInSequence(positions){
  const lines = GetLinesFromPosition(positions)
  const isAllSameLine = IsAllSameItems(lines) 
  const isLineInSequence = AreItemsInSequence(lines) 

  const columns = GetColumnsFromPosition(positions)
  const isAllSameColumn = IsAllSameItems(columns) 
  const isColumnInSequence = AreItemsInSequence(lines) 

  return (isAllSameLine && isColumnInSequence) || (isAllSameColumn && isLineInSequence)
}

function GetLinesFromPosition(positions){
  return positions.map(position => position.Line)
}

function GetColumnsFromPosition(positions){
  return positions.map(position => position.Column)
}

function IsAllSameItems(array){
  const removedDuplicateds = new Set(array)
  return removedDuplicateds.size == 1 
}

function AreItemsInSequence(array){
  let last = undefined
  let areItemsInSequence = true
  array.forEach(item => {
    if(!last)
      last = item
    else if (item - last != 1){
      areItemsInSequence = false
      return
    }
  })

  return areItemsInSequence
}