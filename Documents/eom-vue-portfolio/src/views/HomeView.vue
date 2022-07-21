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
  height: auto;
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

span {
  transition: all 0.5s;
  -webkit-text-stroke: 4px rgb(255, 0, 0);
  font-variation-settings: "wght" 900, "ital" 1;
  font-size: 15rem;
  text-align: center;
  color: transparent;
  font-family: "Meta", sans-serif;
  text-shadow: 10px 10px 0px #07bccc,
    15px 15px 0px #e601c0,
    20px 20px 0px #e9019a,
    25px 25px 0px #f40468,
    45px 45px 10px #482896;
  cursor: pointer;
}

span:hover {
  font-variation-settings: "wght" 100, "ital" 0;
  text-shadow: none;
}
</style>
