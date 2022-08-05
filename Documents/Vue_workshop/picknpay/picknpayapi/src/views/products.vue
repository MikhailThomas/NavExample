<template>
  <div v-for="(prod, index) in products" :key="index">
    
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  },
  computed: {
    products() {
      return this.$store.state.products
    }
  }, 
  mounted() {
    this.$store.dispatch('fetchProducts');
  }
}
</script>

<style>

</style>