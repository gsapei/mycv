<template>
  <v-app>
    <v-main>
      <Loader/>
    </v-main>
  </v-app>
</template>

<script>

import Loader from './components/Loader.vue'

export default {
  name: 'App',
  components: {
    Loader
  },

  data() { 
    return{
    }
    //
  } 
}
</script>
