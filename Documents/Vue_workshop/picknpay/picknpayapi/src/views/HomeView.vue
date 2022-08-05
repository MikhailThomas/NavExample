<template>
<h2>Ayo</h2>
 <carousel />
</template>

<script>
import carousel from '../components/carousel.vue'
export default {
  components: { carousel },
  computed: {
    slide() {
      return this.$store.state.slide
    }
  }
}
</script>

<style scoped>

</style>
