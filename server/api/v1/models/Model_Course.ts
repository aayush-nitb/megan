import * as mongoose from 'mongoose'

export = mongoose.model('courses', new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  start: { type: String, required: true }
}));