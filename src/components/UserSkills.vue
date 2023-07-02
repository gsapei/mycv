<template>
  <div class="px-4">
    <v-row class="pb-4">
      <h2>SKILLS</h2> 
    </v-row>    

    <v-row>
      
      <v-col v-for="(skillCategory, i) in userSkills" :key="skillCategory" class="pb-8" cols="6">
        <div v-if="i%2!=0" class="pl-6 pr-0">
          <v-row>
            <h4 class="pb-4">{{skillCategory.category.toUpperCase()}}</h4> 
          </v-row>
          
          <v-row v-for="data in skillCategory.skills" :key="data" class="pb-2 px-1">
                
            <v-progress-linear color="primary" :model-value="data.percent" height="25">
              <div class="progressLabel">{{data.name}}</div>
            </v-progress-linear>

            <div class="progressPrinted">
              <p>
                {{data.name.toUpperCase()}}: 
              </p>
              <p> <b> {{ data.percent }}%</b> </p>
            </div>
                    
          </v-row>
        </div>
        <div v-else class="pr-6 pl-0">
          <v-row>
            <h4 class="pb-4">{{skillCategory.category.toUpperCase()}}</h4> 
          </v-row>
          
          <v-row v-for="data in skillCategory.skills" :key="data" class="pb-2 px-1">
                
            <v-progress-linear color="primary" :model-value="data.percent" height="25">
              <div class="progressLabel">{{data.name}}</div>
            </v-progress-linear>

            <div class="progressPrinted">
              <p>
                {{data.name.toUpperCase()}}: 
              </p>
              <p> <b> {{ data.percent }}%</b> </p>
            </div>
                    
          </v-row>
        </div>
          
        </v-col> 

    </v-row>

  </div>
</template>

<script>
import { userData }from '@/components/userData.vue'

export default {
  name: "userSkills",
  data(){
    return {userSkills: userData.userSkills}
  }
};

</script>

<style lang="scss" scoped>
  @import "@/css/variables.scss";
</style>