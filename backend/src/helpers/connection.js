const mongoose = require("mongoose")

const mongooseConn = mongoose.createConnection(
    process.env.DATABASE_URL,
    {
        useNewUrlParser: true,
        "authSource": "admin",
        "user": process.env.DATABASE_USERNAME,
        "pass": process.env.DATABASE_PASSWORD
    }
  );

const Schema = mongoose.Schema;
const userDataSchema = new Schema(
    {
    templateLanguage: String,
    userPhoto: String,
    userName: String,
    userPosition: String,
    userContact: [
        { text: String, icon: String },
    ],
    userSocial: [
        { name: String, link: String, icon: String },
    ],    
    userAdress: String,
    userPhone: String,
    userEmail: String,
    userWeb: String,
    userInstagram: String,
    userLinkedIn: String,
    userGithub: String,
    userFlickr: String,
    userEducation: [
        {
            title: String,
            institute: String,
            year: String
        }
    ],
    userDescription: String,
    userExperience: [
        {
            name: String, 
            year: String,
            description: String,
        },   
    ],
    userLanguages: [
        { name: String, percent: Number },
    ],
    userSkills: [
        {
            category: String,
            skills: [
                { name: String, percent: Number },  
            ],
        }
    ],
    userProjects: [
        {
            name: String,
            description: String,
            technologies: [
                String, 
            ],
            images: [
                String,
            ],
            link: String
        },
    ]
    },{ collection: 'userData' }
);
const mongooseSchema = mongooseConn.model('userData', userDataSchema);


// CONNECTION EVENTS
mongoose.connection
.on("open", () => console.log("DATABASE STATE", "Connection Open"))
.on("close", () => console.log("DATABASE STATE", "Connection Open"))
.on("error", (error) => console.error("DATABASE STATE", error))

module.exports = { mongooseSchema }