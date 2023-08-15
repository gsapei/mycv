<template>
  <v-container>
    <v-col>
      
      <v-card-actions class="notPrintable">
        <v-spacer></v-spacer>
        <v-btn class="actionButton" size="small" variant="plain" icon="fa-solid fa-language" @click="changeLanguage()"></v-btn>
      </v-card-actions>
      
      <v-row> 
        <v-col> 
          <userHeader :userData="userData"/> 
        </v-col> 
      </v-row>
      
      <v-row> 
        <v-col class="pb-6"> 
          <userDescription :userData="userData"/> 
        </v-col> 
      </v-row>
      
      <v-row class="pb-6 pr-4"> 

        
        <v-col cols="6"> 
          <v-row> 
            <v-col> 
              <userContact :userData="userData"/> 
            </v-col> 
          </v-row> 
        </v-col> 

        <v-col cols="6"> 
          <v-row> 
            <v-col> 
              <userEducation :userData="userData"/> 
            </v-col> 
          </v-row> 
          <v-row> 
            <v-col> 
              <userSocial :userData="userData"/> 
            </v-col> 
          </v-row> 
        </v-col> 



      </v-row>
      <v-row class="pb-6" > <v-col> <userLanguages :userData="userData"/> </v-col> </v-row> 
      <v-row> <v-col> <userSkills :userData="userData"/> </v-col> </v-row>
      <v-row> <v-col> <userExperience :userData="userData"/> </v-col> </v-row>
      <v-row> <v-col> <userProjects :userData="userData"/> </v-col> </v-row>
    </v-col>
  </v-container>

</template> 


<script>
import { ref, defineAsyncComponent } from "vue"

import { getData } from '@/helpers/axiosGet.js'
const userData = ref(null)

const languages = ['spanish','english','template'];
getData(languages[0]).then( res => { userData.value=res; })

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
  name: "MainPageMobile",
  setup() {

    const selectedLanguage = ref(0)

    const changeLanguage = () => {
      selectedLanguage.value<languages.length-1 ? selectedLanguage.value++ : selectedLanguage.value=0;
      getData(languages[selectedLanguage.value]).then( res => { userData.value=res; })
    }

    return {
      userData,
      changeLanguage
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