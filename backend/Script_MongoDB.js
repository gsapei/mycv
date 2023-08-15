db = new Mongo().getDB('myCv');

db.createCollection('userData');

//template
db.userData.insertOne(
      {
      templateLanguage: 'template',
      userPhoto: "userPhoto.jpg",
      userName: "userName",
      userPosition: "userPosition",
      userContact: [
            { text: "userContact.text", icon: 'fa-solid fa-circle-exclamation' },
      ],
      userSocial: [
            { name: 'userSocial.name', link: "#", icon: 'fa-solid fa-circle-exclamation' },
      ],    
      userAdress: "userAdress",
      userPhone: "userPhone",
      userEmail: "userEmail",
      userWeb: "userWeb",
      userInstagram: "userInstagram",
      userLinkedIn: "userLinkedIn",
      userGithub: "userGithub",
      userFlickr: "userFlickr",
      userEducation: [
            {
                  title:"userEducation.title",
                  institute: "userEducation.institute",
                  year: "userEducation.year"
            }
      ],
      userDescription: `
            userDescription
      `,
      userExperience: [
            {
                  name: "userExperience.name", 
                  year: "userExperience.year",
                  description: `userExperience.description`
            },   
      ],
      userLanguages: [
            { name: 'languages.name', percent: 50 },
      ],
      userSkills: [
            {
                  category: 'userSkill.name',
                  skills: [
                  { name: 'userSkills.skills.name', percent: 90 },  
                  ],
            }
      ],
      userProjects: [
            {
                  name: 'userProjects.name',
                  description: `
                  userProjects.description
                  `,
                  technologies: [
                  'userprojects.technologies', 
                  ],
                  images: [
                  'default0.jpg',
                  'default1.jpg',
                  ],
                  link: '#'
            },
      ]
      },
);
