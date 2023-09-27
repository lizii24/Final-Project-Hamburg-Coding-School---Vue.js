<template>
  <div class="headNav">
    <div class="navLeft">
      <div>
        <RouterLink to="/"
          ><img class="imageLogo" src="..\assets\images\LOGO-LR-Seal_purpel.svg" alt="Map of LR"
        /></RouterLink>
      </div>
      <div><RouterLink to="/" class="link">Map of Soul</RouterLink></div>
    </div>
    <div class="navRight">
      <div>
        <RouterLink to="/contact" class="link"
          ><img class="iconSize" src="../assets/images/ICON-at.svg" alt="" /><span
            class="resizeDisable"
            >Contact</span
          ></RouterLink
        >
      </div>
      <div>
        <RouterLink to="/addlocation" class="link"
          ><img class="iconSize" src="../assets/images/ICON-plus.svg" alt="" /><span
            class="resizeDisable"
            >Add location</span
          ></RouterLink
        >
      </div>
      <div>
        <RouterLink to="/login" class="link"
          ><img class="iconSize" src="../assets/images/ICON-user.svg" alt="" /><span
            class="resizeDisable"
            >Login</span
          ></RouterLink
        >
      </div>
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
.headNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  gap: 2rem;
  margin-bottom: 2rem;
}

.imageLogo {
  width: auto;
  height: 8vh;
}

.navLeft {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
}

.navRight {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
}

.iconSize {
  width: auto;
  height: 17px;
  position: relative;
  top: 2px;
  margin-right: 0.7rem;
}

/* ----------------- RESIZE -------------------- */

@media screen and (max-width: 750px) {
  .resizeDisable {
    display: none;
  }

  .iconSize {
    width: auto;
    height: 17px;
    position: relative;
    top: 2px;
    margin-right: 0;
  }
}

@media screen and (max-width: 420px) {
  .navLeft {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }
}
</style>
