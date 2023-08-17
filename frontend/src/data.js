export const data = [
        {
            templateLanguage: 'spanish',
            userPhoto: "photo.jpg",
            userName: "Gonzalo Sapei",
            userPosition: "FullStack developer",
            userContact: [
                { text: "Barcelona, España", icon: 'fa-regular fa-map' },
                { text: "+34 634174632", icon: 'fa-regular fa-id-badge' },
                { text: "gsapei@gmail.com", icon: 'fa-regular fa-envelope' },
                { text: "http://sapeigonzalo.es", icon: 'fa-regular fa-folder-closed' },
            ],
            userSocial: [
                { name: 'Instagram', link: "instagram.com/gsapei", icon: 'fa-brands fa-square-instagram' },
                { name: 'LinkedIn', link: "linkedin.com/in/gonzalo-sapei-810065235/", icon: 'fa-brands fa-linkedin' },
                { name: 'GitHub', link: "github.com/gsapei", icon: 'fa-brands fa-github' },
                { name: 'Flickr', link: "flickr.com/gsapei", icon: 'fa-brands fa-flickr' },
            ],
            userEducation: [
                {
                    title:"Técnico Superior en Informática Aplicada",
                    institute: "Instituto Normal Superior y Superior de Comercio Nro. 46",
                    year: "2010 - 2014"
                }
            ],
            userDescription: `
            Me dedico al desarrollo de software con inteligencia y creatividad, utilizando mis conocimientos 
            autodidactas y mi curiosidad constante. Desde mi infancia, he sentido una gran pasión por la informática 
            y el arte, los cuales he cultivado de forma independiente. Poseo una gran capacidad para investigar y 
            aprender cualquier tema que me atraiga, y me esfuerzo por lograr un trabajo de calidad y excelencia. 
            He realizado diversos proyectos de software en diferentes ámbitos y con diferentes tecnologias, 
            demostrando mi versatilidad y adaptabilidad. Además de desarrollador, 
            tengo otras facetas artísticas, como músico, compositor, fotógrafo, diseñador, dibujante 
            y tambien me gusta el deporte.`,
            userExperience: [
                {
                    name: "AIRNET S.R.L.",
                    year: "2009 - 2011",
                    description: "Colaboración en desarrollo de Sistemas e instalación de redes empresariales."
                },
                {
                    name: "SIC S.A.", 
                    year: "2011 - 2012",
                    description: `Diseño, montaje, configuración y tendido de redes para el programa
                                “Conectar Igualdad” en instituciones educativas de toda la
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
                    Forme parte del equipo de desarrollo en el área
                    GIS (sistemas de información georeferencial) de
                    la empresa. Inicialmente llevando a cabo todo
                    tipo de tareas como desarrollo de scripts,
                    colaboraciones de código, diseño de reportes
                    BIRT, consultas y desarrollo de procesos y
                    schedules en OracleSQL, administración de
                    servidores e implementación de software.
                    Luego se me fueron otorgando algunos
                    proyectos importantes como desarrollador full
                    stack y en colaboracion con otros miembros del
                    equipo.
                    Estuve a cargo de proyectos de gran
                    envergadura, como un sistema de
                    monitorizacion de los servidores involucrados en
                    el sistema GIS: Utilizando como stack NodeJs,
                    VueJs (Quasar), PostgreSQL y scripts en
                    Python que sensaban los servidores. Todo en
                    un intercambio continuo de informacion con
                    Socket.IO para mostrar los datos en tiempo real.
                    Desarrollado en contenedores e integrado en
                    Docker como un sistema empaquetado.
                    <br>
                    Tambien desarrolle algunos scripts en Ruby, utilizando la API
                    brindada por el sistema GIS. Para buscar inconsistencias en los
                    datos de los modelos geograficos, problemas de dibujo y faltante de datos.
                                `
                },        
            ],
            userLanguages: [
            { name: 'spanish', percent: 100 }, 
            { name: 'english', percent: 65 }
            ],
            userSkills: [
                {
                category: 'frontend',
                skills: [
                    { name: 'html', percent: 90 },
                    { name: 'css/sass', percent: 90 },
                    { name: 'vue.js', percent: 80 },
                    { name: 'quasar', percent: 80 },
                    { name: 'vuetify', percent: 70 },
                    { name: 'bootstrap', percent: 50 },  
                    ]
                },
                {
                category: 'backend',
                skills: [
                    { name: 'node.js', percent: 80 },  
                    { name: 'python', percent: 70 },  
                    { name: 'ruby', percent: 70 },  
                    { name: 'php', percent: 40 },  
                    { name: 'bash', percent: 40 },  
                    { name: 'c++', percent: 30 },  
                    ]  
                },  
                {
                category: 'database',
                skills: [
                    { name: 'MySQL', percent: 60 },  
                    { name: 'OracleSQL', percent: 60 },  
                    { name: 'PostgreSQL', percent: 60 },  
                    { name: 'MongoDB', percent: 40 },  
                    ]
                },
                {
                category: 'others',
                skills: [
                    { name: 'Javascript', percent: 90 },
                    { name: 'Typescript', percent: 90 },
                    { name: 'Linux', percent: 80}, 
                    { name: 'Docker', percent: 60 },  
                    { name: 'GIT', percent: 60 }, 
                    ]
                }
            ],
            userProjects: [
                {
                    name: 'ServerMonitor',
                    description: `
                        <h4 class="text-primary"> ServerMonitor es un sistema de monitorizacion, consola de control y visor de sucesos de los servidores linux que intervienen en el sistema GIS de una empresa.</h4><br/>
                        Cuenta de 3 componentes para funcionar:
                            <li> <strong>Back-End</strong>: Servicio en Node.js que procesa la informacion enviada por los scripts y persiste los datos en una base de datos PostgreSQL. </li>
                            <li> <strong>Front-End</strong>: cliente o interfaz grafica para navegadores web (Vue.js, Quasar, Vuex). </li>
                            <li> <strong>Scripts del lado servidor</strong>: Sensores que toman datos y los envian al backend. Desarrollados en Python3. </li>
                        </ul>
                        <br/>
                        <h4>Logica de funcionamiento</h4>
                        <br/>
                        <p>El servicio <strong>ServerMonitor </strong> se encarga de recibir la información de estado de los servidores, proveniente de los <strong>Serverside-Scripts</strong> 
                        y de verificar periódicamente que cada script este funcionando. Procesa esta información y la presenta en una API para ser accedida por los clientes. A su vez persiste 
                        los datos en una base de datos PostgreSQL por seguridad en caso de cerrarse el proceso, corte de luz, etc.<br>
                        Al recibir información puntual de algún cambio de estado en un servidor envía un mensaje de difusion en tiempo real a todos los clientes (front-end) mediante Socket.IO para que mantengan siempre actualizada la información.</p>
        
                        `,
                    technologies: [
                        'Python', 
                        'Shell scripting',
                        'Node.JS',
                        'Express',
                        'Sockets.IO',
                        'PostgreSQL',
                        'Vue.JS',
                        'Quasar',
                        'HTML',
                        'SCSS'
                    ],
                    images: [
                        'sm0.jpg',
                        'sm1.jpg',
                        'sm2.png',
                        'sm3.jpg',
                        'sm4.jpg',
                        'sm5.jpg',
                        'sm6.jpg',
                        'sm7.jpg'
                    ],
                    link: 'https://github.com/gsapei/ServerMonitor'
                },
                {
                    name: 'FotoPortfolio',
                    description: `
                        <h4 class="text-primary">Portfolio fotografico autoadministrable desarrollado en Django. </h4>
                        `,
                    technologies: [
                        'Python', 
                        'Django',
                        'HTML',
                        'SCSS'
                    ],
                    images: [
                        'fp0.jpg',
                        'fp1.jpg',
                        'fp2.jpg',
                    ],
                    link: 'https://github.com/gsapei/fotoPortfolio'
                },
                {
                    name: 'MyCV template',
                    description: `
                        <h4 class="text-primary">Template VueJs/Vuetify personalizable de curriculum vitae en formato web.  </h4>
                        <br/><br/>
                        <h4>Configuracion:</h4>
                        <p> Dentro del archivo <strong> userData.vue </strong> se encuentran los datos del usuario. Es necesario compilar la aplicacion
                        luego de hacer modificaciones.<br/>
                        Las imagenes de los proyectos y la foto de perfil se colocan dentro de la carpeta <strong>/assets/images/</strong>
                        </p>
                        `,
                    technologies: [
                        'Vue.js', 
                        'Vuetify',
                        'HTML',
                        'SCSS'
                    ],
                    images: [
                        'mycv0.jpg',
                        'mycv1.jpg',
                    ],
                    link: 'https://github.com/gsapei/mycv'
                },
                {
                    name: 'GStock Joyeria',
                    description: `
                        <h4 class="text-primary">Sistema de control de stock y venta mediante paños para joyería, desarrollado en vb.net y Access SQL.</h4>
                        <br/><br/>
                        <h4>Caracteristicas y lógica del programa:</h4>
                        <p> 
                        El sistema consta de un Stock General y diferentes Paños, que se asignaran a diferentes vendedores.<br>
                        Cada paño se ira llenando con articulos del Stock General mediante el lector de codigo de barras y se lo llevara el vendedor. 
                        A su retorno se escanearan los articulos del paño y volveran al Stock General. Se calcula el monto de los articulos que no volvieron 
                        y se genera una venta con ese monto, que deberá pagar el vendedor.<br>
                        Cada vendedor ira generando premios al llegar a cierto monto de venta, con el cual podra retirar articulos del monto generado.          
                        <br><br>
                        A demás, el sistema cuenta con un historial de cada movimiento y venta, estadisticas graficas (generales y de cada vendedor), reportes y un sistema de Backup.
                        El sistema esta diseñado para poder usarlo en red con varios clientes apuntando a la misma base de datos.
        
                        </p>
                        `,
                    technologies: [
                        'vb.net', 
                        'Access',
                        'SQL',
                        'BarCode Scanner',
                        'Zebra labels',
                        'Webcam capture'
                    ],
                    images: [
                        'gsj0.jpg',
                        'gsj1.jpg',
                        'gsj2.jpg',
                        'gsj3.jpg',
                        'gsj4.jpg',
                        'gsj5.jpg',
                        'gsj6.jpg',
                        'gsj7.jpg',
                    ],
                    link: 'https://github.com/gsapei/GStockJoyeria'
                },
            
            ]
        },
        {
            templateLanguage: 'english',
            userPhoto: "photo.jpg",
            userName: "Gonzalo Sapei",
            userPosition: "FullStack developer",
            userContact: [
                { text: "Barcelona, Spain", icon: 'fa-regular fa-map' },
                { text: "+34 634174632", icon: 'fa-regular fa-id-badge' },
                { text: "gsapei@gmail.com", icon: 'fa-regular fa-envelope' },
                { text: "http://sapeigonzalo.es", icon: 'fa-regular fa-folder-closed' },
            ],
            userSocial: [
                { name: 'Instagram', link: "instagram.com/gsapei", icon: 'fa-brands fa-square-instagram' },
                { name: 'LinkedIn', link: "linkedin.com/in/gonzalo-sapei-810065235/", icon: 'fa-brands fa-linkedin' },
                { name: 'GitHub', link: "github.com/gsapei", icon: 'fa-brands fa-github' },
                { name: 'Flickr', link: "flickr.com/gsapei", icon: 'fa-brands fa-flickr' },
            ],
            userEducation: [
                {
                    title:"Higher Technician in Applied Informatics",
                    institute: "Instituto Normal Superior y Superior de Comercio Nro. 46",
                    year: "2010 - 2014"
                }
            ],
            userDescription: `
                I dedicate myself to software development with intelligence and creativity, using my self-taught knowledge and constant curiosity. Since childhood, I have had a great passion for computer science and art, which I have cultivated independently. I have a great ability to research and learn any topic that interests me, and I strive for quality and excellence in my work. I have carried out various software projects in different fields and with different technologies, demonstrating my versatility and adaptability. In addition to being a developer, I have other artistic facets, such as being a musician, composer, photographer, designer, and sports enthusiast.
                `,
            userExperience: [
                {
                    name: "AIRNET S.R.L.",
                    year: "2009 - 2011",
                    description: "Collaboration in the development of systems and installation of corporate networks."
                },
                {
                    name: "SIC S.A.", 
                    year: "2011 - 2012",
                    description: `Design, assembly, configuration, and installation of networks for the "Conectar Igualdad" program in educational institutions throughout the province of Santa Fe (Argentina).`
                },
                {
                    name: "FREELANCE DEVELOPER", 
                    year: "2012 - 2016",
                    description: `Development of administrative and inventory control systems. Also, design and programming of websites.`
                },
                {
                    name: "EMPRESA PROVINCIAL DE LA ENERGÍA", 
                    year: "2016 - 2023",
                    description: `
                    I was part of the development team in the GIS (georeferenced information systems) area of the company. Initially, I carried out all kinds of tasks such as script development, code collaborations, BIRT report design, queries, and process development and scheduling in OracleSQL, server administration, and software implementation.
                    Later, I was assigned some important projects as a full-stack developer, collaborating with other team members.
                    I was in charge of large-scale projects, such as a server monitoring system involved in the GIS system: Using NodeJs, VueJs (Quasar), PostgreSQL, and Python scripts that monitored the servers. All in continuous information exchange with Socket.IO to display real-time data. Developed in containers and integrated into Docker as a packaged system.
                    
                    I also developed some scripts in Ruby, using the API provided by the GIS system. To search for inconsistencies in geographic model data, drawing problems, and missing data.
                                `
                },        
            ],
            userLanguages: [
            { name: 'Spanish', percent: 100 }, 
            { name: 'English', percent: 65 }
            ],
            userSkills: [
                {
                category: 'Frontend',
                skills: [
                    { name: 'HTML', percent: 90 },
                    { name: 'CSS/Sass', percent: 90 },
                    { name: 'Vue.js', percent: 80 },
                    { name: 'Quasar', percent: 80 },
                    { name: 'Vuetify', percent: 70 },
                    { name: 'Bootstrap', percent: 50 },  
                    ]
                },
                {
                category: 'Backend',
                skills: [
                    { name: 'Node.js', percent: 80 },  
                    { name: 'Python', percent: 70 },  
                    { name: 'Ruby', percent: 70 },  
                    { name: 'PHP', percent: 40 },  
                    { name: 'Bash', percent: 40 },  
                    { name: 'C++', percent: 30 },  
                    ]  
                },  
                {
                category: 'Database',
                skills: [
                    { name: 'MySQL', percent: 60 },  
                    { name: 'OracleSQL', percent: 60 },  
                    { name: 'PostgreSQL', percent: 60 },  
                    { name: 'MongoDB', percent: 40 },  
                    ]
                },
                {
                category: 'Others',
                skills: [
                    { name: 'Javascript', percent: 90 },
                    { name: 'Typescript', percent: 90 },
                    { name: 'Linux', percent: 80}, 
                    { name: 'Docker', percent: 60 },  
                    { name: 'GIT', percent: 60 }, 
                    ]
                }
            ],
            userProjects: [
                {
                name: 'ServerMonitor',
                description: `
                        ServerMonitor is a monitoring system, control console, and event viewer for Linux servers involved in a company's GIS system.
                        It consists of 3 components to function:
                            Back-End: Node.js service that processes the information sent by the scripts and persists the data in a PostgreSQL database. 
                            Front-End: client or graphical interface for web browsers (Vue.js, Quasar, Vuex). 
                            Server-side Scripts: Sensors that collect data and send it to the backend. Developed in Python3. 
                    
                    
                    Functioning logic:
                    
                    The ServerMonitor service is responsible for receiving server status information from the Server-side Scripts and periodically verifying that each script is functioning. It processes this information and presents it in an API to be accessed by the clients. It also persists the data in a PostgreSQL database for security in case the process is closed, power outage, etc.
                    Upon receiving specific information about a server state change, it sends a real-time broadcast message to all clients (front-end) using Socket.IO to keep the information always up to date.
        
                    `,
                technologies: [
                    'Python', 
                    'Shell scripting',
                    'Node.JS',
                    'Express',
                    'Sockets.IO',
                    'PostgreSQL',
                    'Vue.JS',
                    'Quasar',
                    'HTML',
                    'SCSS'
                ],
                images: [
                    'sm0.jpg',
                    'sm1.jpg',
                    'sm2.png',
                    'sm3.jpg',
                    'sm4.jpg',
                    'sm5.jpg',
                    'sm6.jpg',
                    'sm7.jpg'
                ],
                link: 'https://github.com/gsapei/ServerMonitor'
                },
                {
                name: 'FotoPortfolio',
                description: `
                    Self-administered photo portfolio developed in Django.
                    `,
                technologies: [
                    'Python', 
                    'Django',
                    'HTML',
                    'SCSS'
                ],
                images: [
                    'fp0.jpg',
                    'fp1.jpg',
                    'fp2.jpg',
                ],
                link: 'https://github.com/gsapei/fotoPortfolio'
                },
                {
                name: 'MyCV template',
                description: `
                    Customizable VueJs/Vuetify curriculum vitae template in web format.
                    
                    Configuration:
                    The user data is located inside the userData.vue file. It is necessary to compile the application
                    after making modifications.
                    Project images and profile picture should be placed inside the /assets/images/ folder.
                    
                    `,
                technologies: [
                    'Vue.js', 
                    'Vuetify',
                    'HTML',
                    'SCSS'
                ],
                images: [
                    'mycv0.jpg',
                    'mycv1.jpg',
                ],
                link: 'https://github.com/gsapei/mycv'
                },
                {
                name: 'GStock Joyeria',
                description: `
                    Stock control and sales system for jewelry using panels, developed in vb.net and Access SQL.
                    
                    Features and program logic:
                    
                    The system consists of a General Stock and different Panels, which will be assigned to different sellers.
                    Each panel will be filled with items from the General Stock using the barcode scanner and taken by the seller.
                    Upon return, the items from the panel will be scanned and returned to the General Stock. The amount of the items that did not return
                    will be calculated and a sale will be generated with that amount, which the seller will have to pay.
                    Each seller will generate rewards when reaching a certain sales amount, with which they can withdraw items from the generated amount.
                    
                    In addition, the system has a history of each movement and sale, graphical statistics (general and for each seller), reports, and a backup system.
                    The system is designed to be used in a network with multiple clients pointing to the same database.
                   
                    `,
                technologies: [
                    'vb.net', 
                    'Access',
                    'SQL',
                    'BarCode Scanner',
                    'Zebra labels',
                    'Webcam capture'
                ],
                images: [
                    'gsj0.jpg',
                    'gsj1.jpg',
                    'gsj2.jpg',
                    'gsj3.jpg',
                    'gsj4.jpg',
                    'gsj5.jpg',
                    'gsj6.jpg',
                    'gsj7.jpg',
                ],
                link: 'https://github.com/gsapei/GStockJoyeria'
            },
            ]
        }

    ]