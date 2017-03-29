import * as mongoose from 'mongoose'

const validation = {
  isPredefined: {
    readonly: 'cannot create predefined object',
    persistent: 'cannot delete predefined object'
  }
};

let model = mongoose.model('courses', new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true, match: /\S+/ },
  start: { type: String, required: true, trim: true, match: /^\d\d:\d\d$/ },
  isPredefined: { type: Boolean, required: true, validate: [
    (value) => {
      return value === false;
    },
    validation.isPredefined.readonly
  ]},
  details: String
}));

module.exports = {
  validation: validation,
  model: model
}