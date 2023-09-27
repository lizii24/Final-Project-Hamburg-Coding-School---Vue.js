<template>
  <div class="grid-100-backButton">
    <div>
      <RouterLink to="/" class="linkTrans smallText" title="Back to home page"
        ><img class="iconSize" src="../assets/images/ICON-back.svg" alt="" /> Back</RouterLink
      >
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  components: {
    RouterLink
  }
}
</script>

<style scoped>
.grid-100-backButton {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.iconSize {
  width: auto;
  height: 17px;
  position: relative;
  top: 3px;
  margin-right: 0.7rem;
}

.smallText {
  font-size: small;
}
</style>
