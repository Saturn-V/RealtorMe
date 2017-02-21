var mongoose = require('mongoose')
var Schema = mongoose.Schema

var TransactionSchema = Schema({
  createdAt       : { type: Date, default     : Date.now },
  updatedAt       : { type: Date, default     : Date.now },
  is_closed       : { type: Boolean, default  : false },
  purchase_price  : { type: Number, default   : 0 }
})

var Transaction = mongoose.model('Transaction', TransactionSchema)
module.exports = Transaction
