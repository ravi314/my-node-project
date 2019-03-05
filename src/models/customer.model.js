let mongoose = require('mongoose')


mongoose.connect('mongodb://aprc:<PASSWORD>@mfmlc-shard-00-00-sz1se.mongodb.net:27017,mfmlc-shard-00-01-sz1se.mongodb.net:27017,mfmlc-shard-00-02-sz1se.mongodb.net:27017/test?ssl=true&replicaSet=mfmlc-shard-0&authSource=admin&retryWrites=true')

let EmployeeSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Employee', EmployeeSchema)
