<template>
  <div class="background"/>
  <div class="backgroundHue"/>
    <v-container class="py-10 px-16 principal" fluid>
      
      <v-slide-x-transition>
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
      </v-slide-x-transition>
      
      <v-card class="pa-2 principalCard elevation-0">     
        
        <v-card-actions class="cardActions">
          <v-spacer></v-spacer>
          <v-btn size="small" color="surface-variant" variant="text" icon="fa-solid fa-print" @click="printContainer()"></v-btn>
          <v-btn size="small" color="surface-variant" variant="text" icon="fa-solid fa-brush" @click="colorPicker=!colorPicker"></v-btn>
        </v-card-actions>
        
        <v-card-title>
          <v-row align="center">
            
            <v-col cols="4" class="pa-4" style="height: 100%; text-align: center;"> 
              <img class="userAvatar" :src="userPhoto" style="max-width: 70%; border-radius: 50%;" >
            </v-col>
          
            <v-col cols="1"/>
  
            <v-col cols="7">
              <div class="principalHeader">
                <h1>{{ principalTitle.toUpperCase() }}</h1>
                <h3 class="text-primary pt-3">{{ principalSubtitle.toUpperCase() }}</h3>
              </div>
            </v-col>
          
          </v-row>
        </v-card-title>
          
        <v-row class="py-4 px-8">  
          <!--- Left Paragraph ---->       
          <v-col cols="4" class="py-6 px-4 leftParagraph">
            <v-row>
              <v-col><userContact/></v-col>
            </v-row>

            <v-row class="pt-6">
              <v-col><userEducation/></v-col>  
            </v-row>

            <v-row class="pt-6">
              <v-col><userLanguages/></v-col>
            </v-row>
            
            <v-row class="pt-6">
              <v-col><userSkills/></v-col>
            </v-row>
 
          </v-col>
  
          <!--- Divider --->
          <v-col cols="1" class="pt-4 centerParagraph">
            <div class="divider text-primary"></div>  
          </v-col>
          
          <!--- Right Paragraph --->
          <v-col cols="7" class="px-4 py-6 rightParagraph">

            <v-row>
              <v-col><userDescription/></v-col>
            </v-row>
  
            <v-row class="pt-6">
              <v-col><userExperience/></v-col>
            </v-row>
          

          </v-col>
      </v-row>
  
      <v-row style="height: 20px;"/>
  
      </v-card>

    </v-container>

</template>

<script>
import { ref } from "vue";
import { useTheme } from 'vuetify'
import { userData } from '@/components/userData.vue'
import userSkills from '@/components/userSkills.vue'
import userLanguages from '@/components/userLanguages.vue'
import userExperience from '@/components/userExperience.vue'
import userContact from '@/components/userContact.vue'
import userEducation from '@/components/userEducation.vue'
import userDescription from '@/components/userDescription.vue'


export default {
  setup() {
    const userPhoto=userData.userPhoto;
    const principalTitle=userData.userName;
    const principalSubtitle=userData.userPosition;

    const colorPicker = ref(false); 
    const theme = useTheme();
    const changeTheme = (newTheme) => {
      theme.global.name.value = newTheme;
      if(newTheme=='themeBlue'){ document.body.style.setProperty("--bg-color", 'none') }
      if(newTheme=='themeGreen'){ 
        document.body.style.setProperty("--bg-color", 'none');
        setTimeout(function () {
          document.body.style.setProperty("--bg-color", 'LightSeaGreen') 
        }, 1000);
      }
      if(newTheme=='themeGold'){ 
        document.body.style.setProperty("--bg-color", 'none');
        setTimeout(function () {
          document.body.style.setProperty("--bg-color", 'Coral') 
        }, 1000);
      }
      if(newTheme=='themeBlack'){ 
        document.body.style.setProperty("--bg-color", 'none');
        setTimeout(function () {
          document.body.style.setProperty("--bg-color", 'Black') 
        }, 1000);
      }
      colorPicker.value = false;
    };
    function printContainer(){
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
      userPhoto,
      principalTitle,
      principalSubtitle,
      colorPicker,
      changeTheme,
      printContainer
    }
  },
  components: {
    userSkills,
    userLanguages,
    userExperience,
    userContact,
    userEducation,
    userDescription
  }
}

</script>

<style lang="scss" scoped>
  @import "@/css/variables.scss";
</style>