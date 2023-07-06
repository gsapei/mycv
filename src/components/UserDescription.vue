<template>
  <div>
    <v-row>
      <h2 class="px-4 text-primary">INTRODUCTION</h2> 
    </v-row>
    <v-row class="px-4 py-2" style="text-align: justify;">
      <p v-html="userDescription"></p>
    </v-row>
  </div>
</template>

<script>
import { userData }from '@/components/userDataSapei.vue'

export default {
  name: "userDescription",
  data(){
    return {userDescription: userData.userDescription}
  }
};

</script>

<style lang="scss" scoped>
  @import "@/css/variables.scss";
</style>