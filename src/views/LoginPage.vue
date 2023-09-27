<template>
  <div class="bodyContentHolder">
    <header><TheHeader /> <TheBackButton /></header>
    <main>
      <h1>Login</h1>
      <OopsContent />
    </main>
    <footer><TheFooter /></footer>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
import OopsContent from '../components/OopsContent.vue'
import TheBackButton from '../components/TheBackButton.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    OopsContent,
    TheBackButton
  }
}
</script>

<style scoped></style>
