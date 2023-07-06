<template>
  <div class="px-4">
    <v-row>
      <h2 class="text-primary">RECENT PROJECTS</h2> 
    </v-row>

    <v-row class="dontBreakOnPrint">
      <v-col v-for="data in userProjects" :key="data.name" class="px-1" cols="6">
        <v-card class="text-center py-2 projectCard" elevation="2" @click="openProject(data)">
          <h4 class="pb-2"> {{ data.name }} </h4>
          <img :src="getImageUrl(data.images[0])" style="max-width: 100%;" class="px-3" />
        </v-card>
      </v-col>
    </v-row>  
  </div>

  <v-dialog v-model="dialogProject" width="90%" scrollable>
      <ProjectDetail :project="projectName"/>
  </v-dialog>

</template>

<script>
import { userData }from '@/components/userData.vue'
import ProjectDetail from '@/components/ProjectDetail.vue'
import { ref } from 'vue'

export default {
  name: "userProjects",
  data(){
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
    return {
      userProjects: userData.userProjects,
      getImageUrl,
      dialogProject,
      projectName,
      openProject
    }
  },
  components: {
    ProjectDetail
  }
};

</script>

<style lang="scss" scoped>
  @import "@/css/variables.scss";
  .projectCard{
    height: 35vh;
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

</style>