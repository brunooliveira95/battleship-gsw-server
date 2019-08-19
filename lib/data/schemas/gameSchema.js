import mongoose from 'mongoose'
import Config from '../../configurations'

const GameSchema = new mongoose.Schema({
    creationDate: Date,
    status: String,
    playerTurn: String
})

export default mongoose.model(Config.DatabaseGameCollection, GameSchema, Config.DatabaseGameCollection)