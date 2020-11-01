var mongoose  = require('mongoose');
// var BaseModel = require("./base_model");
// var renderHelper = require('../common/render_helper');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: { type: String},
  loginname: { type: String},
  pass: { type: String },
  email: { type: String},
});

// UserSchema.plugin(BaseModel);
UserSchema.index({loginname: 1}, {unique: true});
UserSchema.index({email: 1}, {unique: true});
UserSchema.pre('save', function(next){
  console.log('in model');
  var now = new Date();
  this.update_at = now;
  console.log(next, 'next')
  next();
});

mongoose.model('User', UserSchema);
