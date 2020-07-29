const mongoose = require('mongoose')
const NODE_ENV = process.env.NODE_ENV

let db = NODE_ENV ? `mongodb://localhost:27017/bareksa-${NODE_ENV}`: process.env.MONGO_CONNECT

mongoose.connect(db, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Mongoose Connect Successfuly`)
  })
  .catch(err => {
    console.log(err)
    console.log(`Mongoose Connect Fail`)
  })

module.exports = mongoose