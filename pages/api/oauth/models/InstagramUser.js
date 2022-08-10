const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

mongoose
    .connect(process.env.CONNECTIONSTRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch((err) => {
        console.log(err)
    })

const instagramUserSchema = new mongoose.Schema({
    user_id: {
        type: String,
    },
    id: {
        type: String,
    },
    username: {
        type: String,
    },
    access_token: {
        type: String,
    },
})

module.exports =
    mongoose.models.InstagramUser ||
    mongoose.model('InstagramUser', instagramUserSchema)
