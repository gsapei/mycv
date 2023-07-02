<template>
    <v-row class="px-4">
      <v-col>

        <v-row>
          <h2>CONTACT</h2> 
        </v-row>
        
        <v-row>
          <v-col cols="1" class="px-0">
            <v-icon color="primary" icon="fa-sharp fa-solid fa-house"></v-icon>
          </v-col>
          <v-col cols="11">
            <p class="px-2"> {{ userAdress }} </p>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col cols="1" class="px-1">
            <v-icon color="primary" icon="fa-solid fa-mobile"></v-icon>
          </v-col>
          <v-col cols="11">
            <p class="px-2"> {{ userPhone }} </p>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col cols="1" class="px-0">
            <v-icon color="primary" icon="fa-solid fa-envelope"></v-icon>
          </v-col>
          <v-col cols="11">
            <p class="px-2"> {{ userEmail }} </p>
          </v-col>
        </v-row>

        <v-row class="pt-6 notPrintable">
          <h2>SOCIAL MEDIA</h2> 
        </v-row>        
      
        <v-row>
          <v-col cols="3" class="px-0">
            <a :href="'https://' + userInstagram">
              <v-icon color="primary" icon="fa-brands fa-square-instagram"></v-icon>
            </a>
          </v-col>
          <v-col cols="3" class="px-0">
            <a :href="'https://' + userLinkedIn">
              <v-icon color="primary" icon="fa-brands fa-linkedin"></v-icon>
            </a>
          </v-col>
          <v-col cols="3" class="px-0">
            <a :href="'https://' + userGithub">
              <v-icon color="primary" icon="fa-brands fa-github"></v-icon>
            </a>
          </v-col>
          <v-col cols="3" class="px-0">
            <a :href="'https://' + userFlickr">
              <v-icon color="primary" icon="fa-brands fa-flickr"></v-icon>
            </a>
          </v-col>

          
        </v-row> 

      </v-col>
    </v-row> 

</template>

<script>
import { userData }from '@/components/userData.vue'

export default {
  name: "userContact",
  data(){
    return {
      userAdress: userData.userAdress,
      userPhone: userData.userPhone,
      userEmail: userData.userEmail,
      userInstagram: userData.userInstagram,
      userLinkedIn: userData.userLinkedIn,
      userGithub: userData.userGithub,
      userFlickr: userData.userFlickr,
      userEducation: userData.userEducation,
      userEducationInstitute: userData.userEducationInstitute,
      userEducationYear: userData.userEducationYear,
      userDescription: userData.userDescription,
      userExperience: userData.userExperience,  
    }
  }
};

</script>

<style lang="scss" scoped>
  @import "@/css/variables.scss";
</style>