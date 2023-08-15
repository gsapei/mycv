<template>
  <div class="px-4">
    <v-row>
      <h2 class="text-primary">RECENT PROJECTS</h2> 
    </v-row>

    <v-row class="dontBreakOnPrint">
      <v-col v-for="data in userProjects" :key="data.name" class="px-1" cols="6">
        <p></p>
        
        <v-card class="text-center pt-2 projectCard" elevation="2" @click="openProject(data)">
          <v-row>
            <v-col class="justify-center pt-3 pb-0">
              <h4 style="font-weight: lighter;"> {{ data.name }} </h4>
            </v-col>
          </v-row>
          <v-row style="min-height: 100%;">
            <v-col class="pb-5">
              <img :src="getImageUrl(data.images[0])" style="width: 90%;" class="px-3" />
            </v-col>
          </v-row>
        </v-card>

      </v-col>
    </v-row>  
  </div>

  <v-dialog v-model="dialogProject" width="90%" scrollable>
      <ProjectDetail :project="projectName"/>
  </v-dialog>

</template>

<script>
import ProjectDetail from '@/components/ProjectDetail.vue'
import { ref, computed } from 'vue'

export default {
  name: "userProjects",
  props: ['userData'],
  data(props){
    const dialogProject = ref(false);
    const projectName = ref(null);

    const openProject = (project) => {
      projectName.value = project;
      dialogProject.value = true;
    }

    const getImageUrl = (name) => {
      const url = new URL('../assets/images/projects/' + name, import.meta.url).href;
      return url;
    }

    const userProjects = computed (()=> props.userData.userProjects);

    return {
      userProjects,
      dialogProject,
      projectName,
      getImageUrl,
      openProject
    }
  },
  components: {
    ProjectDetail
  }
};

</script>

<style lang="scss" scoped>
  .projectCard{
    &:hover {
      filter: brightness(95%);
      -webkit-filter: grayscale(0%);
      -moz-filter:    grayscale(0%);
      -ms-filter:     grayscale(0%);
      -o-filter:      grayscale(0%);
      transition: all 0.5s ease;
    } 
    &:not(:hover) {
      filter: brightness(100%);
      filter: gray;
      -webkit-filter: grayscale(100%);
      -moz-filter:    grayscale(100%);
      -ms-filter:     grayscale(100%);
      -o-filter:      grayscale(100%);
      transition: all 0.5s ease;
    }    
  }

  .projectHeader{
    border: solid primary 3px;
    background-color: grey;
  }

  @import "@/css/variables.scss";

</style>