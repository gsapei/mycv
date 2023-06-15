<script>
import pic from "@/assets/images/photo.jpg"

const userData = {
    userPhoto: pic,
    userName: "Gonzalo Sapei",
    userPosition: "FullStack developer",
    userAdress: "Ronda Ginardó 38 8ºD, Barcelona",
    userPhone: "+43 634174632",
    userEmail: "gsapei@gmail.com",
    userInstagram: "instagram.com/gsapei",
    userLinkedIn: "linkedin.com/in/gonzalo-sapei-810065235/",
    userGithub: "github.com/gsapei",
    userFlickr: "flickr.com/gsapei",
    userEducation: [
        {
            title:"Técnico Superior en Informática Aplicada",
            institute: "Instituto Normal Superior y Superior de Comercio Nro. 46",
            year: "Año: 2010 - 2014"
        }
    ],
    userDescription: `
    Desarrollador inteligente y creativo, autodidacta de mente inquieta.
    Apasionado desde pequeño por la informática y el arte, los cuales fui
    desarrollando de forma independiente. <br>
    Tengo facilidad para investigar y aprender cualquier cosa que me interese, 
    soy muy dedicado y perfeccionista. <br>
    Además de desarrollador soy músico, compositor, fotógrafo, diseñador, dibujante, deportista.`,
    userExperience: [
        {
            name: "AIRNET S.R.L.", 
            year: "2009 - 2011",
            description: `Colaboración en desarrollo de Sistemas e instalación de redes empresariales.`
        },
        {
            name: "SIC S.A.", 
            year: "2011 - 2012",
            description: `Diseño, montaje, configuración y tendido de redes para el programa
                        nacional “Conectar Igualdad” en instituciones educativas de toda la
                        provincia de Santa Fe (Argentina).`
        },
        {
            name: "DESARROLLADOR FREELANCE", 
            year: "2012 - 2016",
            description: `Desarrollo de sistemas administrativos y de control de
                        stock. También diseño y programación de sitios web.`
        },
        {
            name: "EMPRESA PROVINCIAL DE LA ENERGÍA", 
            year: "2016 - 2023",
            description: `
                        Forme parte del equipo de desarrollo en el área GIS (sistemas de
                        información georeferencial) de la empresa. Inicialmente llevando a cabo
                        todo tipo de tareas como desarrollo de scripts, colaboraciones de código,
                        diseño de reportes BIRT, consultas y desarrollo de procesos y schedules
                        en OracleSQL, administración de servidores e implementación de
                        software.<br>
                        Luego se me fueron otorgando algunos proyectos importantes como desarrollador 
                        full stack y en colaboracion con otros miembros del equipo.<br>
                        Estuve a cargo de proyectos de gran envergadura, como un sistema de monitorizacion
                        de los servidores involucrados en el sistema GIS: Utilizando como stack NodeJs, VueJs (Quasar),
                        PostgreSQL y scripts en Python que sensaban los servidores. Todo en un intercambio continuo
                        de informacion con Socket.IO para mostrar los datos en tiempo real. Desarrollado en contenedores 
                        e integrado en Docker como un sistema empaquetado.
                        `
        },        
    ],
    languages: [
    { name: 'spanish', percent: 100 }, 
    { name: 'english', percent: 65 }
    ],
    userSkills: {
        frontend: [
        { name: 'html', percent: 90 },
        { name: 'css/sass', percent: 90 },
        { name: 'vue.js', percent: 80 },
        { name: 'quasar', percent: 80 },
        { name: 'vuetify', percent: 70 },
        { name: 'bootstrap', percent: 50 },  
        ],
        backend: [
        { name: 'node.js', percent: 80 },  
        { name: 'python', percent: 70 },  
        { name: 'ruby', percent: 70 },  
        { name: 'php', percent: 40 },  
        { name: 'bash', percent: 40 },  
        { name: 'c++', percent: 30 },  
        ],  
        database: [
        { name: 'MySQL', percent: 60 },  
        { name: 'OracleSQL', percent: 60 },  
        { name: 'PostgreSQL', percent: 60 },  
        { name: 'MongoDB', percent: 40 },  
        ],
        others: [
        { name: 'Javascript', percent: 90 },
        { name: 'Typescript', percent: 90 },
        { name: 'Linux', percent: 80}, 
        { name: 'Docker', percent: 60 },  
        { name: 'GIT', percent: 60 }, 
        ]
    }
}


export {userData};

</script>