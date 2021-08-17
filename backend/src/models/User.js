const { model, Schema } = require('mongoose')

// ObjectId is id in mongo db so not sure you have to include it here
const userSchema = new Schema({
	name: String,
	email: String,
	password: String,
	loggedActivities: [{
        exercise: "MEDITATION" | "BREATHING" | "SLEEP"| "GROUP_SESSION",
        date: String,
        length: Number
    }],
	scheduledActivities: [{
        exercise: "MEDITATION" | "BREATHING" | "SLEEP"| "GROUP_SESSION",
        date: String,
        length: Number,
    }],
	createdAt: String
})

module.exports = model('User', userSchema)