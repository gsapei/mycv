<template>
    <v-row align="center">
        
        <v-col cols="4" class="pa-4" style="height: 100%; text-align: center;"> 
        <img class="userAvatar" :src="userPhoto" style="max-width: 70%; border-radius: 50%;">
        </v-col>

        <v-col cols="1"/>

        <v-col cols="7">
        <div class="principalHeader">
            <v-row>
            <v-col class="pb-3">
                <h1>{{ principalTitle.toUpperCase() }}</h1>
            </v-col>
            </v-row>
            <v-row>
            <v-col class="text-primary pt-2" >
                <h3>{{ principalSubtitle.toUpperCase() }}</h3>
            </v-col>
            </v-row>

        </div>
        </v-col>

    </v-row>
</template>

<script>

export default {
  name: "userHeader",
  props: ['userData'],
  data(props){
    const userPhoto=props.userData.userPhoto;
    const principalTitle=props.userData.userName;
    const principalSubtitle=props.userData.userPosition;
    return {
        userPhoto,
        principalTitle,
        principalSubtitle
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "@/css/variables.scss";
</style>

<script>


</script>