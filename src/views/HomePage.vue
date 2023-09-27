<template>
  <div class="bodyContentHolder">
    <TheHeader />
    <HomeMain />
    <footer><TheFooter /></footer>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
import HomeMain from '../components/HomeMain.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    HomeMain
  }
}
</script>

<style scoped></style>
