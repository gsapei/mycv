<template>
    <v-card class="py-6 px-4">
        <v-card-action class="cardActions pr-4">
            <a :href="project.link">
                <v-icon color="primary" icon="fa-brands fa-github"></v-icon>
            </a>
        </v-card-action>
        <v-card-title class="text-center pb-8" justify="center">
            <h1 class="py-1"> {{ project.name }} </h1>
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col v-for="tec in project.technologies" :key="tec" style="text-align: center;">
                    <p class="pa-1 bg-primary text-center rounded">{{ tec }}</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <p class="text-justify" v-html="project.description"></p>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <div v-for="(image, index) in project.images" :key="image" style="text-align: center;" class="pb-2">
                        <img v-if="index>0" :src="getImageUrl(image)" style="max-width: 100%;"/>
                    </div>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>

export default {
    props: ['project'],
    setup(){
        const getImageUrl = (name) => {
            const url = new URL('../assets/images/projects/' + name, import.meta.url).href;
            return url;
        }
        return {
            getImageUrl  
        }
    }
    
}
</script>

<style lang="scss" scoped>
 .cardActions{
  position: absolute;
  right:0px;
 }
 
  @import "@/css/variables.scss";
</style>