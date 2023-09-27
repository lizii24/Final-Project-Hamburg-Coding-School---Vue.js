<template>
  <div class="footerBox">
    <div>Made with &#9829; by us.</div>
    <div class="legal">
      <div><RouterLink to="/imprint" class="linkTrans">Imprint</RouterLink></div>
      <div><RouterLink to="/legalnotice" class="linkTrans">Legal Notice</RouterLink></div>
      <div><RouterLink to="/dataprotection" class="linkTrans">Data Protection</RouterLink></div>
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
.footerBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
}

.legal {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding-top: 1rem;
  font-size: small;
}
</style>
