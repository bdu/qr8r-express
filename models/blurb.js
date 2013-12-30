var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blurbSchema = new Schema({
  title:  String,
  url:    String,
  desc:   String,
  imgUrl: String,
  updated: Date
});
