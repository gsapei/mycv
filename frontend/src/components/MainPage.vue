<template>
  <div class="background"/>
  <div class="backgroundHue"/>
  

  <v-container class="py-10 px-16 principal" fluid>
    
    <v-slide-x-transition>

      <v-card class="colorPicker notPrintable" v-if="colorPicker">
          <v-col>
            <v-row>
              <v-btn v-if="selectedTheme == 'themeBlue'" size="small" color="blue" variant="text" icon="fa-solid fa-palette" @click="colorPicker=false">
                <v-badge dot bordered overlap color="red" style="top:10px;">
                    <v-icon>fa-solid fa-palette</v-icon>
                </v-badge>
              </v-btn>  
              <v-btn v-else size="small" color="blue" variant="text" icon="fa-solid fa-palette" @click="changeTheme('themeBlue')"></v-btn>
            </v-row>
            <v-row>
              <v-btn v-if="selectedTheme == 'themeGreen'" size="small" color="green" variant="text" icon="fa-solid fa-palette" @click="colorPicker=false">
                <v-badge bordered overlap color="red" style="top:10px;" dot>
                    <v-icon>fa-solid fa-palette</v-icon>
                </v-badge>
              </v-btn>  
              <v-btn v-else size="small" color="green" variant="text" icon="fa-solid fa-palette" @click="changeTheme('themeGreen')"></v-btn>
            </v-row>
            <v-row>
              <v-btn v-if="selectedTheme == 'themeGold'" size="small" color="warning" variant="text" icon="fa-solid fa-palette" @click="colorPicker=false">
                <v-badge bordered overlap color="red" style="top:10px;" dot>
                    <v-icon>fa-solid fa-palette</v-icon>
                </v-badge>
              </v-btn> 
              <v-btn v-else size="small" color="warning" variant="text" icon="fa-solid fa-palette" @click="changeTheme('themeGold')"></v-btn>
            </v-row>
            <v-row>
              <v-btn v-if="selectedTheme == 'themeBlack'" size="small" color="black" variant="text" icon="fa-solid fa-palette" @click="colorPicker=false">
                <v-badge bordered overlap color="red" style="top:10px;" dot>
                    <v-icon>fa-solid fa-palette</v-icon>
                </v-badge>
              </v-btn> 
              <v-btn v-else size="small" color="surface-variant" variant="text" icon="fa-solid fa-palette" @click="changeTheme('themeBlack')"></v-btn>
            </v-row>
          </v-col>
      </v-card>
    </v-slide-x-transition>  
    
    <v-card class="px-2 py-2 principalCard elevation-0">     
      
      <v-card-actions class="notPrintable">
        <v-spacer></v-spacer>
        <v-btn class="actionButton" size="small" variant="plain" icon="fa-solid fa-print" @click="printContainer()"></v-btn>
        <v-btn class="actionButton" size="small" variant="plain" icon="fa-solid fa-language" @click="changeLanguage()"></v-btn>
        <v-btn class="actionButton" size="small" variant="plain" icon="fa-solid fa-brush" @click="showColorPicker()"></v-btn>
      </v-card-actions>
      
      <v-card-title>
        <userHeader :userData="userData"/>
      </v-card-title>
        
      <v-row class="py-4 px-8">  
        <!--- Left Paragraph ---->       
        <v-col cols="4" class="py-6 px-4 leftParagraph">
          <v-row>
            <v-col><userContact :userData="userData"/></v-col>
          </v-row>

          <v-row>
            <v-col><userSocial :userData="userData"/></v-col>
          </v-row>

          <v-row class="pt-6">
            <v-col><userEducation :userData="userData"/></v-col>  
          </v-row>

          <v-row class="pt-6">
            <v-col><userLanguages :userData="userData"/></v-col>
          </v-row>
          
          <v-row class="pt-6">
            <v-col><userSkills :userData="userData"/></v-col>
          </v-row>

        </v-col>

        <!--- Divider --->
        <v-col cols="1" class="pt-4 centerParagraph">
          <div class="divider text-primary"></div>  
        </v-col>
        
        <!--- Right Paragraph --->
        <v-col cols="7" class="px-4 py-6 rightParagraph">

          <v-row>
            <v-col><userDescription :userData="userData"/></v-col>
          </v-row>

          <v-row class="pt-6">
            <v-col><userExperience :userData="userData"/></v-col>
          </v-row>
        
          <v-row class="pt-6 notPrintable">
            <v-col><userProjects :userData="userData"/></v-col>
          </v-row>

        </v-col>
    </v-row>

    <v-row style="height: 20px;"/>

    </v-card>

  </v-container>

</template> 


<script>
import { ref, defineAsyncComponent } from "vue"
import { useTheme } from 'vuetify'
import { getData,getLanguages } from '@/helpers/axiosGet.js'

const userData = ref(null);
const languages = ref(null)

getLanguages()
.then(langs=>{
  languages.value = langs;
  try{
    getData(languages.value[0])
    .then( res => { 
      userData.value=res;
    });
  }
  catch (err){
    throw new Error("No languages registered on database",err); 
  }
})


//ASYNC COMPONENTS:
const userHeader = defineAsyncComponent(() =>
  import('@/components/UserHeader.vue')
)
const userSkills = defineAsyncComponent(() =>
  import('@/components/UserSkills.vue')
)
const userLanguages = defineAsyncComponent(() =>
  import('@/components/UserLanguages.vue')
)
const userExperience = defineAsyncComponent(() =>
  import('@/components/UserExperience.vue')
)
const userContact = defineAsyncComponent(() =>
  import('@/components/UserContact.vue')
)
const userSocial = defineAsyncComponent(() =>
  import('@/components/UserSocial.vue')
)
const userEducation = defineAsyncComponent(() =>
  import('@/components/UserEducation.vue')
)
const userDescription = defineAsyncComponent(() =>
  import('@/components/UserDescription.vue')
)
const userProjects = defineAsyncComponent(() =>
  import('@/components/UserProjects.vue')
)

export default {
  name: "MainPage",
  setup() {

    const selectedLanguage = ref(null);

    const selectedTheme = ref('themeBlue');
    const colorPicker = ref(false);
    const theme = useTheme();

    const showColorPicker = () => {
      colorPicker.value=!colorPicker.value;
      const position = document.getElementsByClassName('principalCard')[0].getBoundingClientRect().right;
      setTimeout(() => document.getElementsByClassName('colorPicker')[0].style.left = position + 2 +'px', 10);
    }

    const changeTheme = (newTheme) => {
      theme.global.name.value = newTheme;
      if(newTheme=='themeBlue'){ 
        document.body.style.setProperty("--bg-color", 'none');
        selectedTheme.value = newTheme;
      }
      if(newTheme=='themeGreen'){ 
        document.body.style.setProperty("--bg-color", 'none');
        setTimeout(function () {
          document.body.style.setProperty("--bg-color", 'LightSeaGreen') 
        }, 1000);
        selectedTheme.value = newTheme;
      }
      if(newTheme=='themeGold'){ 
        document.body.style.setProperty("--bg-color", 'none');
        setTimeout(function () {
          document.body.style.setProperty("--bg-color", 'Coral') 
        }, 1000);
        selectedTheme.value = newTheme;
      }
      if(newTheme=='themeBlack'){ 
        document.body.style.setProperty("--bg-color", 'none');
        setTimeout(function () {
          document.body.style.setProperty("--bg-color", 'Black') 
        }, 1000);
        selectedTheme.value = newTheme;
      }
      colorPicker.value = false;
    };

    const changeLanguage = () => {
      selectedLanguage.value<languages.value.length-1 ? selectedLanguage.value++ : selectedLanguage.value=0;
      getData(languages.value[selectedLanguage.value]).then( res => { userData.value=res; })
    }

    const printContainer = () => {
      /*
      let actualTheme = theme.global.name.value;
      changeTheme('themeBlack');
      setTimeout(function () {
        window.print();
        changeTheme(actualTheme);
        }, 
      50);
      */
      window.print();
    }

    return {
      userData,
      colorPicker,
      selectedTheme,
      selectedLanguage,
      changeTheme,
      changeLanguage,
      printContainer,
      showColorPicker,
    }
  },
  components: {
    userHeader,
    userSkills,
    userLanguages,
    userExperience,
    userContact,
    userSocial,
    userEducation,
    userDescription,
    userProjects,
  }
}

</script>

<style lang="scss" scoped>

@media screen{
  .principal{
    padding-left: 6% !important;
    padding-right: 6% !important;
  }

  .principalCard{
    //clip-path: polygon(60% 2%, 0% 2%, 0% 100%, 100% 100%, 100% 0%, 65% 0%);
    clip-path: path("0 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");
    background-color:rgba(255,255,255,.9);
  }

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    //font-family: customFont;
    background: url('@/assets/images/background.jpg') no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  
  .backgroundHue {
    position: absolute;
    width: 100%;
    height: 100%;
    mix-blend-mode: hue;
    background-color: var(--bg-color);
    transition-duration: 1s;
  }

  .divider {
    width: 0;
    margin: 0 auto;
    height: 100%;
    border: 2px solid;
  }

  .colorPicker{
    position: absolute !important;
    background-color:rgba(255,255,255,.9);
    width: 40px;
    height: 162px;
    top: 40px;
    right: 3%;
    z-index: 1;
  }

  .languagePicker{
    position: absolute !important;
    background-color:rgba(255,255,255,.9);
    width: 50px;
    height: 135px;
    top: 40px;
    right: 3%;
    z-index: 1;
  }

}

//  @import "@/css/variables.scss";
</style>