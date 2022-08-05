<template>
  <h2>Indeed</h2>
  <!-- <div v-if="slide">
    <div v-for="img in slide">
        <img :src="img.img" alt="">
    </div>
  </div> -->
  <div id="carousel-con" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active"  v-for="slides in slide" :key="slides">
        <img :src="slides.img" class="d-block w-100" alt="..." />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carousel-con"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carousel-con"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
//   mounted() {
//     this.$store.dispatch('')
//   },
  computed: {
    slide() {
      return this.$store.state.slide;
    },
  },
};
</script>

<style></style>
