<template>
  <div class="px-4">
    <v-row>
      <h2 class="pb-4 text-primary">LANGUAGES</h2> 
    </v-row>

    <v-row v-for="lang in languages" :key="lang.name" class="pb-2">

      <v-progress-linear color="primary" :model-value="lang.percent" height="25">
        <div class="progressLabel">{{ lang.name }}</div>      
      </v-progress-linear>
      <div class="progressPrinted">{{lang.name.toUpperCase()}}: <b> {{ lang.percent }}%</b></div>

    </v-row>  
  </div>
</template>

<script>
import { userData }from '@/components/userData.vue'

export default {
  name: "userLanguages",
  data(){
    return {languages: userData.languages}
  }
};

</script>

<style lang="scss" scoped>
  @import "@/css/variables.scss";
</style>