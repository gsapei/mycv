<script>
import pic from "@/assets/images/photo.jpg"

const userData = {
    userPhoto: pic,
    userName: "Gonzalo Sapei",
    userPosition: "Full-Stack developer",
    userAdress: "Ronda Ginardó 38, Barcelona",
    userPhone: "+43 6341746-32",
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
    Tengo facilidad para investigar y
    aprender cualquier cosa que me proponga, soy muy responsable y
    perfeccionista. <br>
    Además de desarrollador soy músico multi-intrumentista, compositor,
    fotógrafo, diseñador, dibujante, deportista`,
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
                        provincia de Santa Fe.`
        },
        {
            name: "DESARROLLADOR FREELANCE", 
            year: "2012 - 2016",
            description: `Mayormente en desarrollo de sistemas administrativos y de control de
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
                        Luego de un tiempo en el equipo se me fueron otorgando algunos proyectos
                        como desarrollador full-stack en diversos lenguajes y frameworks.
                        `
        },        
    ],
    languages: [
    { name: 'spanish', percent: 100 }, 
    { name: 'english', percent: 60 }
    ],
    userSkills: {
        frontend: [
        { name: 'html', percent: 90 },
        { name: 'css/sass', percent: 90 },
        { name: 'javascript', percent: 90 },
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
        { name: 'MongoDB', percent: 30 },  
        ],
        others: [
        { name: 'Docker', percent: 60 },  
        { name: 'GIT', percent: 60 },  
        ]
    }
}


export {userData};

</script>