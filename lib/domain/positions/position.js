export default class Position{
    constructor(line, column){
        this.Line = line
        this.Column = column
        HandlePositionValidation(line, column)
    }

    IsOverlappingPosition(position){
        return this.Line == position.Line && this.Column == position.Column
    }
}

function HandlePositionValidation(line, column){
    if(line < 0)
        throw new Error('Linha não pode ser menor do que 0')
    if(column < 0)
        throw new Error('Coluna não pode ser menor do que 0')
}