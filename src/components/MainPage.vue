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
        <v-btn class="actionButton" size="small" style="font-size: 1.1vw;" variant="text" icon="fa-solid fa-print" @click="printContainer()"></v-btn>
        <v-btn class="actionButton" size="small" style="font-size: 1.1vw;" variant="text" icon="fa-solid fa-brush" @click="showColorPicker()"></v-btn>
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
import { ref } from "vue";
import { useTheme } from 'vuetify'

import { userData } from '@/components/userData.vue'

import userHeader from '@/components/userHeader.vue'
import userSkills from '@/components/userSkills.vue'
import userLanguages from '@/components/userLanguages.vue'
import userExperience from '@/components/userExperience.vue'
import userContact from '@/components/userContact.vue'
import userEducation from '@/components/userEducation.vue'
import userDescription from '@/components/userDescription.vue'
import userProjects from '@/components/userProjects.vue'

export default {
  setup() {


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
      changeTheme,
      selectedTheme,
      printContainer,
      showColorPicker
    }
  },
  components: {
    userHeader,
    userSkills,
    userLanguages,
    userExperience,
    userContact,
    userEducation,
    userDescription,
    userProjects,
  }
}

</script>

<style lang="scss" scoped>
  @import "@/css/variables.scss";
</style>