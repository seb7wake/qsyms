const { ApolloServer } = require('apollo-server')
const gql = require('graphql-tag')
const mongoose = require('mongoose')

const { MONGODB } = require('./src/config.js')
const Meditation = require('./src/models/Meditation.js')
const User = require('./src/models/User.js')

// type Query {
//     course(id: Int!): Course
//     courses(topic: String): [Course]
// }
// type Mutation {
//     updateCourseTopic(id: Int!, topic: String!): Course
// }
// type Course {
//     id: Int
//     title: String
//     author: String
//     topic: String
//     description: String
//     url: String
// }

// graphQL schema
const typeDefs = gql`
    type Meditation {
        id: ID!
        description: String!	
        photos: [String]
        link: String
    }

    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
        loggedActivities: [Activity]
        scheduledActivities: [Activity]
        createdAt: String
    }

    type Activity {
        id: ID!
        exercise: Exercise
        date: String
        length: Int
    }

    enum Exercise {
        MEDITATION
        BREATHING
        SLEEP
        GROUP_SESSION
    }

    type Query {
        meditations: [Meditation]
        users: [User]
    }
    
`

// root resolver
const resolvers = {
    Query: {
        async meditations() {
            try {
                const meds = await Meditation.find()
                return meds
            } catch(err) {
                throw new Error(err)
            }
        },
        async users() {
            try {
                const users = await User.find()
                return users
            } catch(err) {
                throw new Error(err)
            }
        }
    }
}

const server = new ApolloServer ({
    typeDefs,
    resolvers
})

mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('MongoDB Connected')
    return server.listen({port: 3000})
})
.then(res => {
    console.log(`server is running at ${res.url}`)
})

// ch

// let getCourse = (args) => {
//     let id = args.id
//     return coursesData.filter(course => {
//         return course.id = id
//     })[0]
// }

// let getCourses = (args) => {
//     if (args.topic) {
//         return coursesData.filter(course => {
//             return course.topic = args.topic
//         })
//     } else {
//         return coursesData
//     }
// }

// let updateCourseTopic = ({id, topic}) => {
//     coursesData.map(course => {
//         if (course.id == id) {
//             course.topic = topic
//             return course
//         }
//     })
//     return coursesData.filter(course => course.id == id)[0]
// }


// create an express server and graphql endpoint
// const app = express()
// app.use('/graphql', express_graphql({
//     schema: schema,
//     rootValue: root,
//     graphiql: true
// }))
