<template>
    <v-row class="px-4">
      <v-col>

        <v-row class="pb-2">
          <h2 class="text-primary">CONTACT</h2> 
        </v-row>
        
        <v-row v-if="screenSize.width>600">
          <v-col>
            <v-row v-for="data in userContact" :key="data" >
              <v-col cols="1" class="px-0">
                <v-icon color="primary" :icon="data.icon" class="icons"></v-icon>
              </v-col>
              <v-col cols="11">
                <p class="pl-1"> {{ data.text }} </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row v-else>
          <v-col>
            <v-row v-for="data in userContact" :key="data">
              <v-col class="pl-0">
                <p > {{ data.text }} </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

      </v-col>
    </v-row> 

</template>

<script>
import { ref, onMounted, computed } from 'vue'

export default {
  name: "userContact",
  props: ['userData'],
  data(props){
    const iconSize=ref('medium');
    const screenSize = ref('');
    const userContact = computed(() => props.userData.userContact);
    onMounted(() => {
        screenSize.value=this.$vuetify.display;
    });
    return {
      iconSize,
      screenSize,
      userContact,
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