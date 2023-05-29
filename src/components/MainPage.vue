<template>
  <v-container class="principalContainer py-6 px-15" fluid> 
    <v-card class="pa-6">     
      <v-row 
      no-gutters
      align="center"
      class="py-7"
      >
        <v-col cols="3" class="px-4 py-4" style="height: 100%; text-align: center;"> 
          <img :src="userPhoto" style="size: 50%; border-radius: 50%;" >
        </v-col>
        <v-col cols="1" style="text-align: center;"/>
          <v-col cols="8">
          <div class="text-center">
            <h1 class="principalTitle">{{ principalTitle.toUpperCase() }}</h1>
              <div>
               <h3 class="principalSubtitle">{{ principalSubtitle.toUpperCase() }}</h3>
              </div>
          </div>
        </v-col>
      </v-row>
        
      <v-row>         
        <v-col cols="3">

          <v-row class="pa-4">

            <v-row>
              <h2 class="px-8 py-4">CONTACT ME</h2> 
            </v-row>
            
            <v-row class="mx-2">
              <v-col cols="2">
                <v-icon icon="fa-sharp fa-solid fa-house"></v-icon>
              </v-col>
              <v-col cols="10" style="text-align: right;">
                <h4 style="color: gray;"> {{ userAdress }} </h4>
              </v-col>
            </v-row>
            
            <v-row class="mx-2">
              <v-col cols="2" class="pl-4">
                <v-icon icon="fa-solid fa-mobile"></v-icon>
              </v-col>
              <v-col cols="10" style="text-align: right;">
                <h4 style="color: gray;"> {{ userPhone }} </h4>
              </v-col>
            </v-row>
            
            <v-row class="mx-2">
              <v-col cols="2">
                <v-icon icon="fa-solid fa-envelope"></v-icon>
              </v-col>
              <v-col cols="10" style="text-align: right;">
                <h4 style="color: gray;"> {{ userEmail }} </h4>
              </v-col>
            </v-row>          
          
            <v-row class="mx-2">
              <v-col cols="2">
                <v-icon icon="fa-brands fa-square-instagram"></v-icon>
              </v-col>
              <v-col cols="10" style="text-align: right;">
                <h4 style="color: gray;"> {{ userInstagram }} </h4>
              </v-col>
            </v-row> 
            
            <v-row class="mx-2">
              <v-col cols="2">
                <v-icon icon="fa-brands fa-linkedin"></v-icon>
              </v-col>
              <v-col cols="10" style="text-align: right;">
                <h4 style="color: gray;"> {{ userLinkedIn }} </h4>
              </v-col>
            </v-row> 

            <v-row class="mx-2">
              <v-col cols="2">
                <v-icon icon="fa-brands fa-github"></v-icon>
              </v-col>
              <v-col cols="10" style="text-align: right;">
                <h4 style="color: gray;"> {{ userGithub }} </h4>
              </v-col>
            </v-row>   

            <v-row class="mx-2">
              <v-col cols="2">
                <v-icon icon="fa-brands fa-flickr"></v-icon>
              </v-col>
              <v-col cols="10" style="text-align: right;">
                <h4 style="color: gray;"> {{ userFlickr }} </h4>
              </v-col>
            </v-row>            
          
          </v-row>  
            
          <v-row>
            <h2 class="px-8 pb-4 pt-8">EDUCATION</h2> 
          </v-row>

          <v-row>
            <h3 class="px-8">
              {{ userEducation }}
            </h3> 
            <h4 class="px-8" style="color: gray;">
              {{ userEducationInstitute }}
            </h4>            
            <p class="px-8" style="color: gray;">
              {{ userEducationYear }}
            </p>            
          </v-row>            

          <v-row>
            <h2 class="px-8 pb-4 pt-8">LANGUAGES</h2> 
          </v-row>

          <v-row
          v-for="lang in languages"
          :key="lang.name"
          class="px-6"
          >
            <v-col cols="4">
              <div>{{ lang.name.toUpperCase() }}</div>      
            </v-col>
            <v-col cols="8">
              <v-progress-linear
                :model-value="lang.percent"
                height="20"
              >
              </v-progress-linear>
            </v-col>

          </v-row>                 
        
        </v-col>

        <v-col cols="1" class="pt-6">
          <div class="divider"></div>  
        </v-col>
        
        <v-col cols="8">
          <v-row>
            <h2 class="px-6 py-4">INTRODUCTION</h2> 
          </v-row>
          <v-row class="py-2 px-6" style="text-align: justify;">
            <p v-html="userDescription"></p>
          </v-row>

          <v-row>
            <h2 class="px-6 pb-4 pt-8">EXPERIENCE</h2> 
          </v-row>    
          <v-row class="py-2 px-6" style="text-align: justify;">
            <p v-html="userExperience"></p>
          </v-row>   
          
          <v-row>
            <h2 class="px-6 pb-4 pt-8">SKILLS</h2> 
          </v-row>    

          <v-row>

            <v-col>
              
              <v-row>
                <h4 class="pl-6 pb-4">FRONTEND</h4> 
              </v-row>    
                  <v-row v-for="data in userSkills.frontend" :key="data" class="px-4">
                    <v-col cols="8">
                      <v-progress-linear :model-value="data.percent" height="20">
                      </v-progress-linear>
                    </v-col>                    
                    <v-col cols="4">
                      <div style="text-align: left;">{{data.name}}</div>
                    </v-col>
                  </v-row>

            </v-col> 

            <v-col>
              
              <v-row>
                <h4 class="pl-6 pb-4">BACKEND</h4> 
              </v-row>    
                  <v-row v-for="data in userSkills.backend" :key="data" class="px-4">
                    <v-col cols="8">
                      <v-progress-linear :model-value="data.percent" height="20">
                      </v-progress-linear>
                    </v-col>                    
                    <v-col cols="4">
                      <div style="text-align: left;">{{data.name}}</div>
                    </v-col>
                  </v-row>

            </v-col> 

          </v-row>
          <v-row class="pt-8">
            
            <v-col>
              
              <v-row>
                <h4 class="pl-6 pb-4">DATABASE</h4> 
              </v-row>    
                  <v-row v-for="data in userSkills.database" :key="data" class="px-4">
                    <v-col cols="8">
                      <v-progress-linear :model-value="data.percent" height="20">
                      </v-progress-linear>
                    </v-col>                    
                    <v-col cols="4">
                      <div style="text-align: left;">{{data.name}}</div>
                    </v-col>
                  </v-row>

            </v-col> 

            <v-col>
              
              <v-row>
                <h4 class="pl-6 pb-4">OTHERS</h4> 
              </v-row>    
                  <v-row v-for="data in userSkills.others" :key="data" class="px-4">
                    <v-col cols="8">
                      <v-progress-linear :model-value="data.percent" height="20">
                      </v-progress-linear>
                    </v-col>                    
                    <v-col cols="4">
                      <div style="text-align: left;">{{data.name}}</div>
                    </v-col>
                  </v-row>

            </v-col> 

          </v-row>

        </v-col>
    </v-row>

    </v-card>
  </v-container>
</template>

<script>
import pic from "@/assets/images/photo.jpg"

export default {
  setup: () => ({
    userPhoto: pic,
    principalTitle: "Gonzalo Sapei",
    principalSubtitle: "Full Stack developer",
    userAdress: "Tamarit 104 3º4ª, Barcelona",
    userPhone: "+43 6341746-32",
    userEmail: "gsapei@gmail.com",
    userInstagram: "instagram.com/gsapei",
    userLinkedIn: "linkedin.com/in/gonzalo-sapei-810065235/",
    userGithub: "github.com/gsapei",
    userFlickr: "flickr.com/gsapei/",
    userEducation: "Técnico Superior en Informática Aplicada",
    userEducationInstitute: "Instituto Normal Superior y Superior de Comercio Nro. 46",
    userEducationYear: "2010 - 2014",
    userDescription: `
      Desarrollador inteligente y creativo, autodidacta de mente inquieta.
      Apasionado desde pequeño por la informática y el arte, los cuales fui
      desarrollando de forma independiente. <br>
      Tengo facilidad para investigar y
      aprender cualquier cosa que me proponga, soy muy responsable y
      perfeccionista. <br>
      Además de desarrollador soy músico multi-intrumentista, compositor,
      fotógrafo, diseñador, dibujante, deportista`,
    userExperience: `
      <h4>AIRNET S.R.L.</h4>
      <p style="color: grey;">Año: 2009 - 2011</p>
      Colaboración en desarrollo de Sistemas e instalación de redes
      empresariales.
      <br><br>      
      
      <h4>SIC S.A.</h4>
      <p style="color: grey;">Año: 2011 - 2012</p>
      Diseño, montaje, configuración y tendido de redes para el programa
      nacional “Conectar Igualdad” en instituciones educativas de toda la
      provincia de Santa Fe.
      <br><br>

      <h4>DESARROLLADOR FREELANCE</h4>
      <p style="color: grey;">Año: 2012 - 2016</p>
      Mayormente en desarrollo de sistemas administrativos y de control de
      stock. También diseño y programación de sitios web.
      <br><br>

      <h4>EMPRESA PROVINCIAL DE LA ENERGÍA</h4>
      <p style="color: grey;">Año: 2016 - 2023</p>
      Forme parte del equipo de desarrollo en el área GIS (sistemas de
      información georeferencial) de la empresa. Inicialmente llevando a cabo
      todo tipo de tareas como desarrollo de scripts, colaboraciones de código,
      diseño de reportes BIRT, consultas y desarrollo de procesos y schedules
      en OracleSQL, administración de servidores e implementación de
      software. Como así también en tareas no informáticas como el diseño y
      desarrollo de un video institucional tipo whiteboard para el sector,
      realizado en su totalidad en Illustrator y After Effects.
      Luego de un tiempo en el equipo se me fueron otorgando proyectos
      como desarrollador full-stack en diversos lenguajes y frameworks.`,
      languages: [
        { name: 'spanish', percent: 100 }, 
        { name: 'english', percent: 60 }
      ],
      userSkills: {
          frontend: [
            { name: 'html', percent: 90 },
            { name: 'css/sass', percent: 90 },
            { name: 'javascript', percent: 70 },
            { name: 'vue.js', percent: 80 },
            { name: 'quasar', percent: 90 },
            { name: 'vuetify', percent: 90 },
            { name: 'bootstrap', percent: 60 },  
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
  }),
}

</script>

<style scoped>

  .principalContainer {
    background: url('@/assets/images/background.jpg') no-repeat center center fixed !important;
    background-size: cover; 
  }

  .principalTitle{
    font-size: 45pt;
  }
  .principalSubtitle{
    font-size: 20pt;
    color: lightblue;
  }

  .skillProgress {
    background-color: lightblue;
    color: black;
  }

  .divider {
    width: 0;
    margin: 0 auto;
    height: 100%;
    border: 3px solid lightblue;
  }

</style>