<template>
<div id="contact-page">
<div id="contact" class="row">
    <img id="page" class="col-6" src="../assets/contact-image.jpg" alt="">
    <div id="form" class="container d-flex justify-content-center col-6">
        <form id="contactform" action="https://formspree.io/f/mknydjoq" method="post">
          <div class="">
            <label class="form-label" for="name">Name</label>
            <input name="name" class="form-control" id="name" type="text" placeholder="Name"/>
          </div>

          <div class="">
            <label class="form-label" for="emailAddress">Email Address</label>
            <input name="emailAddress" class="form-control" id="emailAddress" type="email"
              placeholder="Email Address"/>
          </div>

          <div class="">
            <label class="form-label" for="message">Message</label>
            <textarea name="submit" class="form-control" id="message" type="text" placeholder="..."
              style=""></textarea>
          </div>

          <div class="text-center">
            <button class="btn btn-lg" type="submit">Submit</button>
          </div>
          <div class="row  text-center">
              <div class="col-3">
                <a target="_blank" href="https://github.com/MikhailThomas"><i class="display-6 bi bi-github"></i></a>
              </div>
              <div class="col-3">
                <a target="_blank" href="https://www.linkedin.com/in/mikhail-thomas-177065208/"><i
                    class="display-6 bi bi-linkedin"></i></a>
              </div>
              <div class="col-3">
                <a href="#contact"><i class="display-6 bi bi-envelope"></i></a>
              </div>
              <div class="col-3">
                <a target="_blank" href="https://www.facebook.com/mikhail.thomas.773"><i
                    class="display-6 bi bi-facebook "></i></a>
              </div>
            </div>
        </form>
      </div>
      </div>
      </div>
</template>
<script>

</script>
<style scoped>
#contact-page{
    height: 80vh;
}
    #contact{
        margin: 10px;
        background-color: black;
        border: solid;
        border-left: 0;
        box-shadow: 3px 4px;
        border-radius: 10px;
        background-image: url('');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    #page{
        padding: 0;
        border: solid 3px;
        border-radius: 6px;
        border-right: solid 3px black;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        border-bottom: hidden;
    }
    #form{
        border-left: solid 3px black;
        border-radius: 5px;
        background-image: url('../assets/form-page.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .bi{
        color: gold;
    }
</style>
