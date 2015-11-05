var mongoose = require('mongoose');
var db = require('../config');
var crypto = require('crypto');

var urlSchema = db.Schema({
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: {type: Number, default: 0}
});

// update to adjust model
urlSchema.pre('creating', function(next) {
  var shasum = crypto.createHash('sha1');
  shasum.update(model.get('url'));
  model.set('code', shasum.digest('hex').slice(0, 5));
  next();
});

var Link = db.model('Link', urlSchema);

// var test = new Link({
//   url: 'url',
//   base_url: 'base_url',
//   code: 'code',
//   title: 'title'
// });

// console.log(test);

module.exports = Link;

// var Link = db.Model.extend({
//   tableName: 'urls',
//   hasTimestamps: true,
//   defaults: {
//     visits: 0
//   },
//   initialize: function(){
//     this.on('creating', function(model, attrs, options){
//       var shasum = crypto.createHash('sha1');
//       shasum.update(model.get('url'));
//       model.set('code', shasum.digest('hex').slice(0, 5));
//     });
//   }
// });
