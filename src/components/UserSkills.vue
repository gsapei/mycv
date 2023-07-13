<template>
  <div class="px-4">
    <v-row>
      <h2 class="text-primary">SKILLS</h2> 
    </v-row>    

    <v-row>
      
      <v-col v-for="skillCategory in userSkills" :key="skillCategory" class="py-8" cols="6">
          <v-row>
            <h4 class="pb-4">{{skillCategory.category.toUpperCase()}}</h4> 
          </v-row>
          
          <v-row v-for="data in skillCategory.skills" :key="data" class="pb-2 px-1 dontBreakOnPrint">
                
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
          
        </v-col> 

    </v-row>

  </div>
</template>

<script>

export default {
  name: "userSkills",
  props: ['userData'],
  data(props){
    return {userSkills: props.userData.userSkills}
  }
};

</script>

<style lang="scss" scoped>
  @import "@/css/variables.scss";
</style>