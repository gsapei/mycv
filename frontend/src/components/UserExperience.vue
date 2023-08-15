<template>
  <div class="px-4">
    <v-row>
      <h2 class="text-primary">EXPERIENCE</h2> 
    </v-row>

    <v-row v-for="data in userExperience" :key="data.name" class="pb-1 dontBreakOnPrint">
      <v-col class="px-0">
        <h4> {{ data.name }} </h4>
        <p style="color: grey;">({{ data.year }})</p>
        <p v-html="data.description"></p>
      </v-col>
    </v-row>  
  </div>
</template>

<script>

import { computed } from "vue";

export default {
  name: "userExperience",
  props: ['userData'],
  data(props){
    const userExperience = computed(() => props.userData.userExperience);
    return {userExperience}
  }
};

</script>

<style lang="scss" scoped>
  @import "@/css/variables.scss";
</style>