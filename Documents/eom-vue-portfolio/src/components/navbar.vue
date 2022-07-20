<template>
    <nav id="navbar" class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <img id="logo" src="../assets/logo.png" alt="">
    <a class="navbar-brand" href="#">MIKHAIL THOMAS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <img id="nav-button" class="" src="../assets/navbar-button.jpg" alt="">
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">ABOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/projects">PROJECTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/resume">RESUME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">CONTACT</a>
        </li>
      </ul>
    </div>
    </div>
</nav>
</template>
<script>
export default {
   
};
</script>

<style scoped>
#navbar{
   background-color: gold;
   border-bottom: solid whitesmoke;
}
#logo{
    width: 100px;
    height: 100px;
}
#nav-button{
    height: 80px;
    width: 80px;
}
button{
    border: hidden;
}
</style>