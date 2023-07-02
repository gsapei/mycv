<script>
import pic from "@/assets/images/userPhoto.jpg"

const userData = {
    userPhoto: pic,
    userName: "userName",
    userPosition: "userPosition",
    userAdress: "userAdress",
    userPhone: "userPhone",
    userEmail: "userEmail",
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
    languages: [
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
}


export {userData};

</script>