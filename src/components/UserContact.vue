<template>
    <v-row class="px-4">
      <v-col>

        <v-row>
          <h2 class="text-primary">CONTACT</h2> 
        </v-row>
        
        <v-row v-for="data in userContact" :key="data" >
          <v-col cols="1" class="px-0">
            <v-icon color="primary" :icon="data.icon" class="icons"></v-icon>
          </v-col>
          <v-col cols="11">
            <p class="px-2"> {{ data.text }} </p>
          </v-col>
        </v-row>

        <v-row class="pt-6 notPrintable">
          <h2 class="text-primary">SOCIAL MEDIA</h2> 
        </v-row>        
      
        <v-row class="notPrintable">
          <v-col cols="2" class="px-0" v-for="data in userSocial" :key="data.name">
            <a :href="'http://' + data.link">
              <v-icon color="primary" :icon="data.icon" class="icons"></v-icon>
            </a>
          </v-col>          
        </v-row> 

      </v-col>
    </v-row> 

</template>

<script>
import { ref } from 'vue'

export default {
  name: "userContact",
  props: ['userData'],
  data(props){
    const iconSize=ref('medium');
    return {
      iconSize,
      userContact: props.userData.userContact,
      userSocial: props.userData.userSocial,
    }
  }
};

</script>

<style lang="scss" scoped>
  p{
    text-align: left !important;
  }
  @import "@/css/variables.scss";
</style>