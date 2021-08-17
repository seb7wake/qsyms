const { model, Schema } = require('mongoose')

// ObjectId is id in mongo db so not sure you have to include it here
const meditationSchema = new Schema({
	description: String,	
	photos: [
        String
    ],
	link: String
})

module.exports = model('Meditation', meditationSchema)