import { UseCaseError } from '../shared';

export default class SetShipsOnBoard {
    constructor(gameRepository){
        this._gameRepository = gameRepository
    }

    async Handle(){
        const activeGame = await this._gameRepository.GetActiveGame()
        if(!activeGame)
            throw new UseCaseError('Jogo ativo não encontrado', 404)

        return activeGame
    }
}