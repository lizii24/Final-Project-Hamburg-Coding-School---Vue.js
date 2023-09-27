<template>
  <div>
    <div id="map" class="mapHolder"></div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'

export default {
  mounted() {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/lizii24/clmw050do02n501nz509if9r7',
      center: [16.373819, 48.208174],
      zoom: 1.5
    })
    this.map = map

    this.map.on('click', (event) => {
      const features = this.map.queryRenderedFeatures(event.point, {
        layers: ['finalproject-20230924-newdatafil']
      })
      if (!features.length) {
        return
      }
      const feature = features[0]

      const popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
          `<h3>${feature.properties.title}</h3><p>${feature.properties.date}</p><p style="padding-bottom: 0.5rem;">${feature.properties.description}</p>` +
            `<a href="${feature.properties.link}">More</a>` +
            `<p style="padding: 0; text-align: right; font-size: 0.6rem;">by ${feature.properties.author}` +
            `<img src="http://localhost:5173/src/assets/images${feature.properties.authorPic}"/></p>`
        )
        .addTo(this.map)
    })
  },
  data() {
    return {
      map: [],
      citiesGeoData: []
    }
  },
  async created() {
    const response = await fetch(
      'https://api.mapbox.com/datasets/v1/lizii24/clmxgel0z0sxa2onsijvgkd4u/features?access_token=' +
        import.meta.env.VITE_MAPBOX_API_KEY
    )
    const result = await response.json()

    this.citiesGeoData = result.features
  }
}
</script>

<style scoped>
.mapHolder {
  min-height: 80vh;
  max-height: 100vh;
  max-width: 100%;
}

/* ----------------- RESIZE -------------------- */

@media screen and (max-width: 1000px) {
  .mapHolder {
    min-height: 40vh;
  }
}

@media screen and (max-width: 420px) {
  .mapHolder {
    min-height: 30vh;
  }
}
</style>
