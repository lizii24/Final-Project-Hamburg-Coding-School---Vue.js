<template>
  <div class="bodyContentHolder">
    <header><TheHeader /> <TheBackButton /></header>
    <main>
      <h1>Contact & information</h1>
      <div class="grid-100">
        <div class="grid-50-left">
          <div class="whiteBox">
            <h2>Creator</h2>
            <p>
              Lisa Ben Naceur <br /><a class="link" href="mailto:lisa.bennaceur@gmail.com">Email</a>
            </p>
          </div>
          <div class="whiteBox">
            <h2>Aim</h2>
            <p>
              Final project for the course "Full-stack web development" of the Hamburg Coding
              School.
              <br />
              Task: Create a travel blog with Vue.js
            </p>
          </div>
          <div class="whiteBox">
            <h2>Institute</h2>
            <p>HCS Hamburg Coding School GmbH<br />Gasstraße 4<br />22761 Hamburg</p>
          </div>
          <div class="whiteBox">
            <h2>Note of Lisa</h2>
            <p>
              If anyone can squeeze a lot of information into a very short period of time, it's
              definitely the Hamburg Coding School. <br />Even if one's head is spinning and one
              sometimes just feels lost &ndash; this project has not only shown how much We have
              learned, but also shaped new ways of thinking and approaches. #TrialAndError
              <br />Therefore, a very big thank you for all the valuable input and also for the
              steadfast patience with the very demanding Lisa 😜
            </p>
          </div>
        </div>

        <div class="grid-50-right">
          <img class="image1" src="../assets/images/Romina_500x500.png" alt="Map of LR" />
          <img class="image2" src="..\assets\images\LOGO-LR-Seal_purpel.svg" alt="Map of LR" />
          <img class="image3" src="../assets/images/Lisa_500x500.png" alt="Map of LR" />
        </div>
      </div>
    </main>
    <footer><TheFooter /></footer>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
import TheBackButton from '../components/TheBackButton.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    TheBackButton
  }
}
</script>

<style scoped>
.grid-100 {
  display: flex;
  width: 100%;
  gap: 4rem;
}

.grid-50-left {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: nowrap;
  gap: 2rem;
  width: 50%;
}

.grid-50-right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
  gap: 2rem;
  width: 30%;
}

.whiteBox {
  background-color: #ffffff34;
  width: 80%;
  max-width: 600px;
  padding: 2rem;
  border-radius: 15px;
}

h2 {
  margin: 0 0 0.1rem 0;
}

p {
  margin: 0;
}

.image1 {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: 10px 273px 0 20px;
}

.image2 {
  width: 500px;
  height: 500px;
  margin: -130px 0 0 auto;
}

.image3 {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: -160px auto 0 0;
}

/* ----------------- RESIZE -------------------- */

@media screen and (max-width: 1300px) {
  .image1 {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    margin: 10px 273px 0 20px;
  }

  .image2 {
    width: 310px;
    height: 310px;
    margin: -80px 0 0 auto;
  }

  .image3 {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    margin: -110px auto 0 0;
  }
}

@media screen and (max-width: 1000px) {
  .whiteBox {
    width: 100%;
  }
}

@media screen and (max-width: 900px) {
  .grid-100 {
    flex-direction: column;
    align-items: center;
  }

  .grid-50-left {
    width: 100%;
  }

  .grid-50-right {
    width: 50%;
    margin-bottom: 2rem;
  }
}

@media screen and (max-width: 550px) {
  .grid-100 {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
