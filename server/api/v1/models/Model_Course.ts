import * as mongoose from 'mongoose'

export = mongoose.model('courses', new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true, match: /\S+/ },
  start: { type: String, required: true, trim: true, match: /^\d\d:\d\d$/ },
  details: String,
  isPredefined: Boolean
}));