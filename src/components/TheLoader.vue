<template>
  <div class="loaderHolder">
    <p><span class="loader"></span></p>
    <p>Loading</p>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.loaderHolder {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 40%;
}

.loader {
  width: 100px;
  height: 100px;
  border: 10px solid #ffffff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

p {
  font-weight: bold;
}
</style>
