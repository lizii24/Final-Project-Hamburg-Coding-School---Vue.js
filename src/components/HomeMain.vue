<template>
  <div class="grid-100">
    <div class="grid-50-left">
      <div class="mapHolder"><TheMap /></div>
    </div>

    <div class="grid-50-right">
      <div class="cardHolder">
        <div v-for="city in citiesList" :key="city.id">
          <RouterLink
            class="card link"
            :to="`/detail?City=${city.City}`"
            :style="`background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(http://localhost:5173/src/assets/images${city.CityPicTitel});`"
          >
            <div class="cardHead_grid">
              <div class="cardHead"></div>
              <div class="cardHead"></div>
              <div class="cardHead">
                <div><img :src="`http://localhost:5173/src/assets/images${city.AuthorPic}`" /></div>
                <div>{{ city.Author }}</div>
              </div>
            </div>
            <div class="cardText">
              <div class="h1_card">{{ city.City }}</div>
              <div>{{ city.From_format.slice(0, 3) }} to {{ city.To_format }}</div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheMap from '../components/TheMap.vue'
import 'mapbox-gl/dist/mapbox-gl.css'

export default {
  components: {
    TheMap
  },
  data() {
    return {
      citiesList: []
    }
  },
  async created() {
    const response = await fetch('http://localhost:3000/cities')
    const result = await response.json()

    this.citiesList = result.result

    this.citiesList.sort((a, b) => new Date(b.From) - new Date(a.From))
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
  width: 50%;
}

.grid-50-right {
  display: flex;
  width: 50%;
}

/* ----------------- MAP ---------------------- */

.mapHolder {
  height: auto;
  width: 100%;
}

/* ----------------- CARDS ---------------------- */

.cardHolder {
  display: flex;
  justify-content: space-between;
  gap: 0.3rem;
  flex-wrap: wrap;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #2a3859;
  width: 12vw;
  min-width: 230px;
  height: 40vh;
  min-height: 200px;
  padding: 2rem 1.5rem;
  margin: 10px;
  border-radius: 15px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 2px 3px 1px #0006;
  &:before {
    mix-blend-mode: exclusion;
    border-radius: 15px;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(110deg, #fffd, #fff0 20%, #fff0 70%, #fffd);
    opacity: 1;
    transition: opacity 0.65s ease 0s;
    box-sizing: border-box;
  }
  &:after {
    content: '';
    background-color: #fff9;
    opacity: 0.6;
    top: 0;
    bottom: 0;
    left: -100%;
    position: absolute;
    width: 5vmin;
    box-shadow: 0 0 10vmin 2.5vmin #ffffff;
    transform: skew(-20deg);
    transition: all 0.25s ease;
  }
  &:hover {
    &:before {
      opacity: 0;
      transition: opacity 0.65s ease 0s;
    }
    &:after {
      left: 400px;
      transition: left 0.5s ease 0s;
    }
  }
}

.cardHead_grid {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.cardHead {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: small;
  width: 33%;
}

.cardText {
  display: flex;
  flex-direction: column;
}

img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0px 2px 3px 1px #0006;
}

/* ----------------- RESIZE -------------------- */

@media screen and (max-width: 1400px) {
  .grid-100 {
    gap: 2rem;
  }
}

@media screen and (max-width: 1300px) {
  .grid-50-left {
    display: flex;
    width: 70%;
  }

  .grid-50-right {
    display: flex;
    width: 30%;
  }
}

@media screen and (max-width: 1000px) {
  .grid-100 {
    flex-direction: column;
    gap: 2rem;
  }
  .grid-50-left {
    width: 100%;
  }

  .grid-50-right {
    width: 100%;
  }

  .cardHolder {
    justify-content: center;
  }

  .card {
    min-width: 35vw;
    height: 40vh;
  }
}

@media screen and (max-width: 420px) {
  .card {
    width: 100%;
    height: 40vh;
  }
}
</style>
