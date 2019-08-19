import GameBuilder from './game'
import GameStatus from './gameStatus'
import { NewId } from '../../helpers'

const Game = GameBuilder(NewId)

export {
    Game,
    GameStatus
}