<template>
  <div class="px-4">
    <v-row class="pb-4">
      <h2>SKILLS</h2> 
    </v-row>    

    <v-row>
      
      <v-col cols="5">
        
        <v-row class="pb-4">
          <h4>FRONTEND</h4> 
        </v-row>    
        
        <v-row v-for="data in userSkills.frontend" :key="data" class="pb-2">
              
          <v-progress-linear color="primary"  :model-value="data.percent" height="25">
            <div class="progressLabel">{{data.name}}</div>
          </v-progress-linear>
          <div class="progressPrinted">
            <p>
              {{data.name.toUpperCase()}}: 
            </p>
            <p> <b> {{ data.percent }}%</b> </p>
          </div>
                   
        </v-row>

      </v-col> 

      <v-col cols="2"/>

      <v-col cols="5">
        
        <v-row class="pb-4">
          <h4>BACKEND</h4> 
        </v-row>    

        <v-row v-for="data in userSkills.backend" :key="data" class="pb-2">
          <v-progress-linear color="primary"  :model-value="data.percent" height="25">
            <div class="progressLabel">{{data.name}}</div>
          </v-progress-linear>
          <div class="progressPrinted">
            <p>
              {{data.name.toUpperCase()}}: 
            </p>
            <p> <b> {{ data.percent }}%</b> </p>
          </div>
        </v-row>

      </v-col> 

    </v-row>
    
    <v-row class="pt-8">
      
      <v-col cols="5">
        
        <v-row class="pb-4">
          <h4>DATABASES</h4> 
        </v-row>    
        
        <v-row v-for="data in userSkills.database" :key="data" class="pb-2">
              
          <v-progress-linear color="primary"  :model-value="data.percent" height="25">
            <div class="progressLabel">{{data.name}}</div>
          </v-progress-linear>
          <div class="progressPrinted">
            <p>
              {{data.name.toUpperCase()}}: 
            </p>
            <p> <b> {{ data.percent }}%</b> </p>
          </div>
                   
        </v-row>

      </v-col> 

      <v-col cols="2"/>

      <v-col cols="5">
        
        <v-row class="pb-4">
          <h4>OTHERS</h4> 
        </v-row>    

        <v-row v-for="data in userSkills.others" :key="data" class="pb-2">
          <v-progress-linear color="primary"  :model-value="data.percent" height="25">
            <div class="progressLabel">{{data.name}}</div>
          </v-progress-linear>
          <div class="progressPrinted">
            <p>
              {{data.name.toUpperCase()}}: 
            </p>
            <p> <b> {{ data.percent }}%</b> </p>
          </div>
        </v-row>

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