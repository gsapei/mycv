<template>
    <v-row class="px-4 align-center">
        
        <v-col v-if="screenSize.width>600" class="pa-4" style="text-align: center;" cols="4"> 
          <img v-if="userPhoto" class="userAvatar" :src="getImageUrl(userPhoto)">
        </v-col>
        
        <v-col v-if="screenSize.width>600" style="text-align: center;">

          <h1 v-if="screenSize.width>600" class="pb-4">{{ principalTitle.toUpperCase() }}</h1>
          <h1 v-else class="pb-0">{{ principalTitle.toUpperCase() }}</h1>
          
          <h3 class="text-primary">{{ principalSubtitle.toUpperCase() }}</h3>

        </v-col>

        <v-col v-else style="text-align: left;" class="pl-0 pb-6">

          <h1 v-if="screenSize.width>600" class="pb-4">{{ principalTitle.toUpperCase() }}</h1>
          <h1 v-else class="pb-0">{{ principalTitle.toUpperCase() }}</h1>

          <h3 class="text-primary">{{ principalSubtitle.toUpperCase() }}</h3>

        </v-col>
        

    </v-row>
</template>

<script>

import { onMounted,ref,computed } from 'vue'

export default {
  name: "userHeader",
  props: ['userData'],
  data(props){

    const userPhoto = computed(() => props.userData.userPhoto);
    const principalTitle = computed(() => props.userData.userName);
    const principalSubtitle = computed(() => props.userData.userPosition);
    const screenSize = ref('');
    onMounted(() => {
        screenSize.value=this.$vuetify.display;
    });

    const getImageUrl = (name) => {
      const url = new URL('../assets/images/' + name, import.meta.url).href;
      return url;
    }

    return {
      userPhoto,
      principalTitle,
      principalSubtitle,
      screenSize,
      getImageUrl
    }
  }
};
</script>

<style lang="scss" scoped>

  .principalHeader{
    text-align: center;
  }

  .userAvatar{
    //display: block;
    max-width: 65%; 
    min-width: 100px;
    border-radius: 50%;
    
    &:hover {
      transform: scale(1.1);
      transition-duration: 0.5s;
    } 
    &:not(:hover) {
      transform: scale(1);
      transition-duration: 0.5s;
    }    

  }

  h1 {
    font-weight: bolder;
    font-family: openSansCondensed;
  }

@media screen and (min-width: 920px){

  h1{
    font-size: 50pt;
    font-weight: bolder;
    font-family: openSansCondensed;
  }

  h3{
    font-size: 30pt;
    font-family: openSansCondensed;
  }

}
@media screen and (max-width: 920px){

  h1{
    font-size: 35pt;
    font-weight: bolder;
    font-family: openSansCondensed;
  }

  h3{
    font-size: 20pt;
    font-family: openSansCondensed;
  }

}
@media screen and (max-width: 600px){

  h1{
    font-size: 25pt;
  }

  h3{
    font-size: 15pt;
  } 

}


@import "@/css/variables.scss";
</style>

<script>


</script>