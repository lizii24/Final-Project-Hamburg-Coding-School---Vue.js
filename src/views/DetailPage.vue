<template>
  <div class="bodyContentHolder">
    <header>
      <TheHeader />

      <div class="subHeader">
        <div>
          <TheBackButton />
        </div>
        <div class="postedBy">
          <RouterLink to="/aboutus" class="linkTrans" title="Get to know me!">
            posted by {{ cityData.Author }}</RouterLink
          >
          <RouterLink to="/aboutus" title="Get to know me!"
            ><img
              class="imageAuthor"
              :src="`http://localhost:5173/src/assets/images${cityData.AuthorPic}`"
          /></RouterLink>
        </div>
      </div>
    </header>

    <main>
      <div v-if="cityData.length == 0"><TheLoader /></div>
      <div v-else class="grid-100">
        <div class="grid-60-left">
          <h1>"{{ cityData.Titel }}" and welcome to {{ this.$route.query.City }}</h1>
          <table class="detailContent">
            <tr>
              <td>
                <img class="iconSize" src="../assets/images/ICON-world.svg" alt="" />
              </td>
              <td>{{ cityData.Country }}</td>
            </tr>
            <tr>
              <td>
                <img class="iconSize" src="../assets/images/ICON-date.svg" alt="" />
              </td>
              <td>From {{ cityData.From_format }} to {{ cityData.To_format }}</td>
            </tr>
          </table>

          <article>
            <h2>{{ cityData.CityIntro }}</h2>
            <p>{{ cityData.CityDescription }}</p>
          </article>
        </div>

        <div class="grid-40-right">
          <img
            class="cityPic"
            :src="`http://localhost:5173/src/assets/images${cityData.CityPic1}`"
          />
          <img
            class="cityPic"
            :src="`http://localhost:5173/src/assets/images${cityData.CityPic2}`"
          />
          <img
            class="cityPic"
            :src="`http://localhost:5173/src/assets/images${cityData.CityPic3}`"
          />
        </div>
      </div>

      <article>
        <h2>Where you need to go</h2>
        <p>{{ cityData.CityRecs }}</p>
      </article>

      <div id="map" class="mapHolder"></div>
    </main>
    <footer><TheFooter /></footer>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
import TheBackButton from '../components/TheBackButton.vue'
import mapboxgl from 'mapbox-gl'
import TheLoader from '../components/TheLoader.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    TheBackButton,
    TheLoader
  },
  data() {
    return {
      cityData: [],
      map: []
    }
  },
  async created() {
    const response = await fetch('http://localhost:3000/cities/' + this.$route.query.City)
    const result = await response.json()
    this.cityData = result[0]

    const MapBoxCoord = new mapboxgl.LngLat(this.cityData.Lng, this.cityData.Lat)

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/lizii24/clmw050do02n501nz509if9r7',
      center: MapBoxCoord,
      zoom: 13
    })
    this.map = map
  }
}
</script>

<style scoped>
.subHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  top: -1rem;
}

.postedBy {
  display: flex;
  align-items: center;
  color: #ffffff82;
  font-size: small;
}

.imageAuthor {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 1rem;
}

.grid-100 {
  display: flex;
  width: 100%;
  gap: 2rem;
}

.grid-60-left {
  display: flex;
  flex-direction: column;
  width: 60%;
}

.grid-40-right {
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  width: 40%;
}

.detailContent {
  margin: 0 2rem 1rem 2rem;
}

th,
td {
  padding-bottom: 1.5rem;
}

td:first-child {
  width: 40px;
}

.iconSize {
  width: 20px;
  height: 20px;
  position: relative;
  top: 2px;
  margin-right: 1rem;
}

article {
  margin: 0rem 2rem;
}

.cityPic {
  width: auto;
  height: 20vh;
  min-height: 100px;
  max-height: 250px;
  border-radius: 15px;
  box-shadow: 0px 2px 3px 1px #0006;
}

.mapHolder {
  height: 30vh;
  max-height: 230px;
  width: 100%;
  margin-top: 4rem;
}

/* ----------------- RESIZE -------------------- */

@media screen and (max-width: 1000px) {
  .detailContent {
    margin: 0;
  }
  article {
    margin: 0;
  }
}

@media screen and (max-width: 750px) {
  .grid-100 {
    flex-direction: column;
  }

  .grid-60-left {
    width: 100%;
  }

  .grid-40-right {
    justify-content: center;
    width: 100%;
    margin-bottom: 2rem;
  }
}
</style>
