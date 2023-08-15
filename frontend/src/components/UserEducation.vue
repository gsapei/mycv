<template>
  <div class="px-4">
    <v-row>
      <h2 class="text-primary">EDUCATION</h2> 
    </v-row>

    <v-row v-for="data in userEducation" :key="data.name" class="pb-1">
      <v-col class="px-0">
        <h4> {{ data.title }} </h4> 
        <p style="color: gray;"> ({{ data.year }}) </p>         
        <p style="color: gray; text-align: justify;"> {{ data.institute }} </p>            
      </v-col>
    </v-row>  
  </div>
</template>

<script>

import { computed } from "vue";


export default {
  name: "userEducation",
  props: ['userData'],
  data(props){
    const userEducation = computed(() => props.userData.userEducation);
    return {userEducation}
  }
};

</script>

<style lang="scss" scoped>
  @import "@/css/variables.scss";
</style>