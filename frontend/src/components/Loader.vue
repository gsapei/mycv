<template>
    <MainPage v-if="screenSize.width>600"/>
    <MainPageMobile v-else/>
</template>

<script>
import { onMounted } from 'vue'
import { ref } from "vue";

import MainPage from '@/components/MainPage.vue'
import MainPageMobile from '@/components/MainPageMobile.vue'

export default {
    components: {
    MainPage,
    MainPageMobile
  },
    data() {
        const screenSize = ref('');
        onMounted(() => {
            screenSize.value=this.$vuetify.display;
        });
        return {
            screenSize,
        }
    },

}
</script>
