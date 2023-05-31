<template>
  <div class="background"/>
  <div class="backgroundHue"/>
    <v-container class="py-10 px-16 principal" fluid>
      
      <v-expand-transition>
        <v-card class="colorPicker" v-if="colorPicker">
            <v-col>
              <v-row>
                <v-btn size="small" color="blue" variant="text" icon="fa-solid fa-palette" @click="changeTheme('themeBlue')"></v-btn>
              </v-row>
              <v-row>
                <v-btn size="small" color="green" variant="text" icon="fa-solid fa-palette" @click="changeTheme('themeGreen')"></v-btn>
              </v-row>
              <v-row>
                <v-btn size="small" color="warning" variant="text" icon="fa-solid fa-palette" @click="changeTheme('themeGold')"></v-btn>
              </v-row>
              <v-row>
                <v-btn size="small" color="surface-variant" variant="text" icon="fa-solid fa-palette" @click="changeTheme('themeBlack')"></v-btn>
              </v-row>
            </v-col>
    
        </v-card>
      </v-expand-transition>
      
      <v-card class="pa-2">     
        
        <v-card-actions class="cardActions">
          <v-spacer></v-spacer>
          <v-btn size="small" color="surface-variant" variant="text" icon="fa-solid fa-print" @click="printContainer()"></v-btn>
          <v-btn size="small" color="surface-variant" variant="text" icon="fa-solid fa-brush" @click="colorPicker=!colorPicker"></v-btn>
        </v-card-actions>
        
        <v-card-title>
          <v-row align="center">
            
            <v-col cols="4" class="pa-4" style="height: 100%; text-align: center;"> 
              <img :src="userPhoto" style="max-width: 60%; border-radius: 50%;" >
            </v-col>
          
            <v-col cols="1"/>
  
            <v-col cols="7">
              <div class="text-center">
                <h1>{{ principalTitle.toUpperCase() }}</h1>
                <h3 class="text-primary pt-3">{{ principalSubtitle.toUpperCase() }}</h3>
              </div>
            </v-col>
          
          </v-row>
        </v-card-title>
          
        <v-row class="py-6">  
          <!--- Left Paragraph ---->       
          <v-col cols="4" class="px-4 leftParagraph">
  
            <v-row class="pa-4">
              <v-col cols="12">
                <v-row>
                  <h2 class="px-4 pb-4">CONTACT ME</h2> 
                </v-row>
                
                <v-row class="ml-2">
                  <v-col cols="2">
                    <v-icon color="primary" icon="fa-sharp fa-solid fa-house"></v-icon>
                  </v-col>
                  <v-col cols="10" style="text-align: right;">
                    <p style="color: gray;"> {{ userAdress }} </p>
                  </v-col>
                </v-row>
                
                <v-row class="ml-2">
                  <v-col cols="2" class="pl-4">
                    <v-icon color="primary" icon="fa-solid fa-mobile"></v-icon>
                  </v-col>
                  <v-col cols="10" style="text-align: right;">
                    <p style="color: gray;"> {{ userPhone }} </p>
                  </v-col>
                </v-row>
                
                <v-row class="ml-2">
                  <v-col cols="2">
                    <v-icon color="primary" icon="fa-solid fa-envelope"></v-icon>
                  </v-col>
                  <v-col cols="10" style="text-align: right;">
                    <p style="color: gray;"> {{ userEmail }} </p>
                  </v-col>
                </v-row>          
              
                <v-row class="ml-2">
                  <v-col cols="2">
                    <v-icon color="primary" icon="fa-brands fa-square-instagram"></v-icon>
                  </v-col>
                  <v-col cols="10" style="text-align: right;">
                    <p style="color: gray;"> {{ userInstagram }} </p>
                  </v-col>
                </v-row> 
                
                <v-row class="ml-2">
                  <v-col cols="2">
                    <v-icon color="primary" icon="fa-brands fa-linkedin"></v-icon>
                  </v-col>
                  <v-col cols="10" style="text-align: right;">
                    <p style="color: gray;"> {{ userLinkedIn }} </p>
                  </v-col>
                </v-row> 
  
                <v-row class="ml-2">
                  <v-col cols="2">
                    <v-icon color="primary" icon="fa-brands fa-github"></v-icon>
                  </v-col>
                  <v-col cols="10" style="text-align: right;">
                    <p style="color: gray;"> {{ userGithub }} </p>
                  </v-col>
                </v-row>   
  
                <v-row class="ml-2">
                  <v-col cols="2">
                    <v-icon color="primary" icon="fa-brands fa-flickr"></v-icon>
                  </v-col>
                  <v-col cols="10" style="text-align: right;">
                    <p style="color: gray;"> {{ userFlickr }} </p>
                  </v-col>
                </v-row>            
              </v-col>
            </v-row>  
              
            <v-row>
              <h2 class="px-8 pb-4 pt-8">EDUCATION</h2> 
            </v-row>
  
            <v-row>
              <h4 class="px-8">
                {{ userEducation }}
              </h4> 
              <p class="px-8" style="color: gray; text-align: justify;">
                {{ userEducationInstitute }}
              </p>            
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
              <v-col>
                <v-progress-linear color="primary" 
                :model-value="lang.percent"
                height="25"
                >
                <div class="progressLabel">{{ lang.name }}</div>      
                </v-progress-linear>
                <div class="progressPrinted">{{lang.name.toUpperCase()}}: <b> {{ lang.percent }}%</b></div>
              </v-col>
  
            </v-row>                 
          
          </v-col>
  
          <!--- Divider --->
          <v-col cols="1" class="pt-6 centerParagraph">
            <div class="divider text-primary"></div>  
          </v-col>
          
          <!--- Right Paragraph --->
          <v-col cols="7" class="px-8 rightParagraph">
            <v-row>
              <h2 class="px-4 py-4">INTRODUCTION</h2> 
            </v-row>
            <v-row class="px-4 py-2" style="text-align: justify;">
              <p v-html="userDescription"></p>
            </v-row>
  
            <v-row>
              <h2 class="px-4 pb-4 pt-8">EXPERIENCE</h2> 
            </v-row>    
            <v-row class="px-4 py-2" style="text-align: justify;">
              <p v-html="userExperience"></p>
            </v-row>   
            
            <v-row>
              <h2 class="px-4 pb-6 pt-8">SKILLS</h2> 
            </v-row>    
  
            <v-row>
  
              <v-col cols="6">
                
                <v-row class="px-4 pb-4">
                  <h4>FRONTEND</h4> 
                </v-row>    
                    <v-row v-for="data in userSkills.frontend" :key="data" class="pl-1">
                      <v-col>
                        <v-progress-linear color="primary"  :model-value="data.percent" height="25">
                          <div class="progressLabel">{{data.name}}</div>
                        </v-progress-linear>
                        <span class="progressPrinted">{{data.name.toUpperCase()}}: <b> {{ data.percent }}%</b></span>
                      </v-col>                    
                    </v-row>
  
              </v-col> 
  
              <v-col cols="6">
                
                <v-row>
                  <h4 class="pl-4 pb-4">BACKEND</h4> 
                </v-row>    
                    <v-row v-for="data in userSkills.backend" :key="data" class="pl-1">
                      <v-col>
                        <v-progress-linear color="primary"  :model-value="data.percent" height="25">
                          <div class="progressLabel">{{data.name}}</div>
                        </v-progress-linear>
                        <div class="progressPrinted">{{data.name.toUpperCase()}}: <b> {{ data.percent }}%</b></div>
                      </v-col>                    
                    </v-row>
  
              </v-col> 
  
            </v-row>
            <v-row class="pt-8">
              
              <v-col>
                
                <v-row>
                  <h4 class="pl-4 pb-4">DATABASE</h4> 
                </v-row>    
                    <v-row v-for="data in userSkills.database" :key="data" class="pl-1">
                      <v-col>
                        <v-progress-linear color="primary"  :model-value="data.percent" height="25">
                          <div class="progressLabel">{{data.name}}</div>
                        </v-progress-linear>
                        <div class="progressPrinted">{{data.name.toUpperCase()}}: <b> {{ data.percent }}%</b></div>
                      </v-col>                    
                    </v-row>
  
              </v-col> 
  
              <v-col>
                
                <v-row>
                  <h4 class="pl-4 pb-4">OTHERS</h4> 
                </v-row>    
                    <v-row v-for="data in userSkills.others" :key="data" class="pl-4">
                      <v-col>
                        <v-progress-linear color="primary"  :model-value="data.percent" height="25">
                          <div class="progressLabel">{{data.name}}</div>
                        </v-progress-linear>
                        <div class="progressPrinted">{{data.name.toUpperCase()}}: <b> {{ data.percent }}%</b></div>
                      </v-col>                    
                    </v-row>
  
              </v-col> 
  
            </v-row>
  
          </v-col>
      </v-row>
  
      <v-row style="height: 20px;"/>
  
      </v-card>
    </v-container>

</template>

<script>
import pic from "@/assets/images/photo.jpg"
import { ref } from "vue";
import { useTheme } from 'vuetify'

export default {
  setup() {
    const userPhoto = pic;
    const principalTitle = "Gonzalo Sapei";
    const principalSubtitle = "Full-Stack developer";
    const userAdress = "Tamarit 104 3º4ª, Barcelona";
    const userPhone = "+43 6341746-32";
    const userEmail = "gsapei@gmail.com";
    const userInstagram = "instagram.com/gsapei";
    const userLinkedIn = "linkedin.com/in/gonzalo-sapei-810065235/";
    const userGithub = "github.com/gsapei";
    const userFlickr = "flickr.com/gsapei/";
    const userEducation = "Técnico Superior en Informática Aplicada";
    const userEducationInstitute = "Instituto Normal Superior y Superior de Comercio Nro. 46";
    const userEducationYear = "Año: 2010 - 2014";
    const userDescription = `
      Desarrollador inteligente y creativo, autodidacta de mente inquieta.
      Apasionado desde pequeño por la informática y el arte, los cuales fui
      desarrollando de forma independiente. <br>
      Tengo facilidad para investigar y
      aprender cualquier cosa que me proponga, soy muy responsable y
      perfeccionista. <br>
      Además de desarrollador soy músico multi-intrumentista, compositor,
      fotógrafo, diseñador, dibujante, deportista`;
    const userExperience = `
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
      como desarrollador full-stack en diversos lenguajes y frameworks.`;
    const languages = [
      { name: 'spanish', percent: 100 }, 
      { name: 'english', percent: 60 }
    ];
    const userSkills = {
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

    };
    const colorPicker = ref(false); 
    const theme = useTheme();
    const changeTheme = (newTheme) => {
      theme.global.name.value = newTheme;
      if(newTheme=='themeBlue'){ document.body.style.setProperty("--bg-color", 'none') }
      if(newTheme=='themeGreen'){ document.body.style.setProperty("--bg-color", 'LightSeaGreen') }
      if(newTheme=='themeGold'){ document.body.style.setProperty("--bg-color", 'Orange') }
      if(newTheme=='themeBlack'){ document.body.style.setProperty("--bg-color", 'Black') }
      colorPicker.value = false;
    };
    function printContainer(){
      let actualTheme = theme.global.name.value;
      changeTheme('themeBlack');
      setTimeout(function () {
        window.print();
        changeTheme(actualTheme);
        }, 
      100);
    }
    return {
      userPhoto,
      principalTitle,
      principalSubtitle,
      userAdress,
      userPhone,
      userEmail,
      userInstagram,
      userLinkedIn,
      userGithub,
      userFlickr,
      userEducation,
      userEducationInstitute,
      userEducationYear,
      userDescription,
      userExperience,
      languages,
      userSkills,
      colorPicker,
      changeTheme,
      printContainer
    }
  },
}

</script>

<style scoped lang="scss">

@media screen{
    .principal{
      padding-left: 150px !important;
      padding-right: 150px !important;
    }

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    //font-family: customFont;
    background: url('@/assets/images/background.jpg') center center fixed !important;
    background-size: 100%;
  }
  
  .backgroundHue {
    position: absolute;
    width: 100%;
    height: 100%;
    mix-blend-mode: hue;
    background-color: var(--bg-color);
  }

 .divider {
    width: 0;
    margin: 0 auto;
    height: 100%;
    border: 2px solid;
  }

  .colorPicker{
    position: absolute !important;
    width: 40px;
    height: 160px;
    top: 40px;
    right: 105px;
    z-index: 1;
  }

  .progressLabel{
    color: white;
    //sombras en las 4 esquinas
    text-shadow: -1px -1px 1px rgba(0,0,0,.6), 
                 -1px 1px 1px rgba(0,0,0,.6), 
                 1px -1px 1px rgba(0,0,0,.6), 
                 1px 1px 1px rgba(0,0,0,.6);
  }

  h1{
    font-size: 45pt;
  }

  h3{
    font-size: 25px;
  }

  h2{
    font-size: 14pt;
  }

  p{
    font-size: 12pt;
  }

  .progressPrinted {
      display: none;
    }

}

  @media print {
    .background {background-color:#FFFFFF;}
    .principal{
      padding: 0px !important;
      margin: 0px !important;
    }
    h1{
      font-size: 35pt;
    }

    .cardActions{
      display: none;
    }
    .progressLabel{
      color: black;
      text-shadow: 0px;
    }
    .rightParagraph{
      min-width: 45%;
    }
    .centerParagraph{
      display: none;
    }

    .leftParagraph{
      min-width: 40%;
    }

    .v-progress-linear {
      display: none;
    }

    .progressPrinted {
      display: block;
    }
  }  

</style>