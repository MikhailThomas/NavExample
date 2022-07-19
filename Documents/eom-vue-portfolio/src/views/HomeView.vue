<template>
  <div  id="home" class="home">
    <div id="landing" class="mx-auto">
      <span>MIKHAIL THOMAS</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:900i&display=swap');

#landing{
  height: 100vh;
 background-image: url("../assets/background.webp");
 background-color: #cccccc;
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 background-attachment: fixed;
}

body{
  font-family: 'Montserrat', sans-serif;
}

span{
  position: relative;
  transform: translate(-50%, -50%);
  font-size:120px;
  letter-spacing:0.1em;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: yellow;
  text-shadow: 
            10px 10px red,
            22px 22px black;
}
</style>
