<template>
<div id="page" class="text-center my-auto">
  <form id="form" method="post" action="" class="row mx-auto">
    <input class="form-control" name="firstname" type="text" placeholder="firstname">
    <input class="form-control" name="Surname" type="text" placeholder="Surname">
    <input class="form-control" name="gender" type="text" placeholder="gender">
    <input class="form-control" name="email" type="text" placeholder="email">
    <input class="form-control" name="password" type="text" placeholder="password">
    <button class="btn">LOGIN</button>
  </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#page{
    background-image:linear-gradient(rgba(255, 255, 255, 0.292), rgba(255, 255, 255, 0.632)), url(https://i.postimg.cc/JnPW7kMZ/pnp.jpg);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }
#form{
    width: 50rem;
}
input{
    margin: 1rem;
    border: hidden;
    border-bottom: solid;
    }

</style>