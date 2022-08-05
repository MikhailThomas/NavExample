<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <img id="logo" src="https://i.postimg.cc/KzK6kHQJ/pickpay.png" alt="">
    <button id="button" class="navebar-toggler btn" type="button" data-bs-toggle="collapse" data-bs-target="#navcontent" aria-controls="navcontent" aria-expanded="false" aria-label="Toggle navigation"></button>
    <div class="collapse navbar-collapse" id="navcontent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/products">PRODUCTS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/login">LOGIN</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/register">SIGN UP</a>
            </li>
        </ul>
        <div>
            <searchbar>    
            </searchbar>
        </div>
    </div>
    </div>
    </nav>
</template>

<script>
export default {

};
</script>

<style scoped>
#logo{
width: 300px;
}
</style>