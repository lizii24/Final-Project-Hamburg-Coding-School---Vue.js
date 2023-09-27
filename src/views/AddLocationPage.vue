<template>
  <div class="bodyContentHolder">
    <header><TheHeader /> <TheBackButton /></header>
    <main>
      <h1>Add Location</h1>
      <OopsContent />
    </main>
    <footer><TheFooter /></footer>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
import TheBackButton from '../components/TheBackButton.vue'
import OopsContent from '../components/OopsContent.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    TheBackButton,
    OopsContent
  }
}
</script>

<style scoped></style>
