import * as mongoose from 'mongoose'

const timeFormat = /^(\d\d):(\d\d)$/;

export = mongoose.model('courses', new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true },
  start: { type: String, required: true, trim: true },
  details: { type: String },

  validationErrors: () => {
    let errors = [];
    if (this.name === '') {
      errors.push({
        attribute: 'name',
        message: 'name cannot be empty'
      });
    }
    if (timeFormat.test(this.start)) {
      let ticks = timeFormat.exec(this.start);
      let mm = parseInt(ticks[1]);
      let ss = parseInt(ticks[2]);
      if (mm > 23 || mm < 0 || ss > 23 || ss < 0) {
        errors.push({
          attribute: 'start',
          message: 'start time is invalid'
        });
      }
    } else {
      errors.push({
        attribute: 'start',
        message: 'start time must be in format mm:ss'
      });
    }
    return errors;
  }
}));