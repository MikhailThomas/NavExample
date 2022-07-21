<template>
    <div id='container'>
  <h1>Education</h1>
     <hr>
     <div id="education">
  <div class='card'>
    <div class='front'>
      <img src='' class='contact' />
      <span class='name'>Plumstead High</span>
      <hr>
      <span class='job'> - Student - </span>
    </div>
    <div class='back'>
      <span>Skills:</span>
      <p>HTML, CSS, Javascript. UX/UI designer</p>
    </div>
  </div>
  <!-- healing -->
  <div class='card'>
    <div class='front'>
      <img src='' class='contact' />
      <span class='name'>Healing Hands Academy</span>
      <hr>
      <span class='job'> - Student - </span>
    </div>
    <div class='back'>
      <span>Skills:</span>
      <p>HTML, CSS, Javascript. UX/UI designer</p>
    </div>
  </div>
  <!-- LCA -->
  <div class='card'>
    <div class='front'>
      <img src='' class='contact' />
      <span class='name'>Life Choices Academy</span>
      <hr>
      <span class='job'> - Student - </span>
    </div>
    <div class='back'>
      <span>Skills:</span>
      <p>HTML, CSS, Javascript. UX/UI designer</p>
    </div>
  </div>
  <!-- Sunlands -->
  <div class='card'>
    <div class='front'>
      <img src='' class='contact' />
      <span class='name'>Sunlands Primary</span>
      <hr>
      <span class='job'> - Student - </span>
    </div>
    <div class='back'>
      <span>Skills:</span>
      <p>HTML, CSS, Javascript. UX/UI designer</p>
    </div>
  </div>
  <!-- Estrategie -->
  <div class='card'>
    <div class='front'>
      <img src='' class='contact' />
      <span class='name'>Estrategia</span>
      <hr>
      <span class='job'> - Student - </span>
    </div>
    <div class='back'>
      <span>Skills:</span>
      <p>HTML, CSS, Javascript. UX/UI designer</p>
    </div>
  </div>
  <!-- upholstery -->
  <div class='card'>
    <div class='front'>
      <img src='' class='contact' />
      <span class='name'>Johannes Curtaining</span>
      <hr>
      <span class='job'> - Worker - </span>
    </div>
    <div class='back'>
      <span>Skills:</span>
      <p>HTML, CSS, Javascript. UX/UI designer</p>
    </div>
  </div>
  <!-- work -->
  </div>
  <h1>Work Experience</h1>
  <div id="work">
    <!-- Johannes -->
    <div class='card'>
    <div class='front'>
      <img src='' class='contact' />
      <span class='name'>Coding</span>
      <hr>
      <span class='job'> - Aspiring Web Developer - </span>
    </div>
    <div class='back'>
      <span>Skills:</span>
      <p>HTML, CSS, Javascript. UX/UI designer</p>
    </div>
  </div>
    <!-- Massage -->
    <div class='card'>
    <div class='front'>
      <img src='' class='contact' />
      <span class='name'>Massage Therapy</span>
      <hr>
      <span class='job'> - Free Lancer - </span>
    </div>
    <div class='back'>
      <span>Skills:</span>
      <p>HTML, CSS, Javascript. UX/UI designer</p>
    </div>
  </div>
    <!-- coach -->
    <div class='card'>
    <div class='front'>
      <img src='' class='contact' />
      <span class='name'>Coaching</span>
      <hr>
      <span class='job'> - Junior's Coach - </span>
    </div>
    <div class='back'>
      <span>Skills:</span>
      <p>HTML, CSS, Javascript. UX/UI designer</p>
    </div>
  </div>
    <!-- LCA -->
    <div class='card'>
    <div class='front'>
      <img src='' class='contact' />
      <span class='name'>Upholstery</span>
      <hr>
      <span class='job'> - Junior Upholstery - </span>
    </div>
    <div class='back'>
      <span>Skills:</span>
      <p>HTML, CSS, Javascript. UX/UI designer</p>
    </div>
  </div>
    <!-- Cliffe Dekker Hofmeyr -->
    <div class='card'>
    <div class='front'>
      <img src='' class='contact' />
      <span class='name'>Cliffe Dekker Hofmeyr</span>
      <hr>
      <span class='job'> - Job Shadow - </span>
    </div>
    <div class='back'>
      <span>Skills:</span>
      <p>HTML, CSS, Javascript. UX/UI designer</p>
    </div>
  </div>
    <!-- Job Shadow -->
    <div class='card'>
    <div class='front'>
      <img src='' class='contact' />
      <span class='name'>Eve Travel</span>
      <hr>
      <span class='job'> - Job Shadow - </span>
    </div>
    <div class='back'>
      <span>Skills:</span>
      <p>HTML, CSS, Javascript. UX/UI designer</p>
    </div>
  </div>
  </div>
  </div>
</template>
<script>

</script>
<style scoped>

#container {
    width: auto;
    height: auto;
    text-align: center;
    background-color: gold;
}

#container > hr {
    border: none;
    width: 80%;
}
.card {
    margin: 5px;
    display: inline-block;
    position: relative;
    width: 220px;
    height: 280px;
    opacity: 0.85;
    border: hidden;
    background-color: gold;
    
}
.front,
.back {
    width: 100%;
    height: 100%;
    position: absolute;
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    -webkit-transition: -webkit-transform 300ms;
    transition: -webkit-transform 300ms;
    transition: transform 300ms;
    transition: transform 300ms, -webkit-transform 300ms;
    -webkit-transition-timing-function: linear;
            transition-timing-function: linear;
    border: solid 4px red;
    box-shadow: 2px 3px 3px 3px;
}
.front {
    transform: rotateY(0deg);
    background: linear-gradient(to bottom right, rgb(78, 78, 78), lightblue);
    text-align: center;
    padding: 30px;
}
.back {
    background: linear-gradient(to top right, lightblue, rgb(78, 78, 78) );
    -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
    padding: 40px 15px;
    color: #fff;
}
.card:hover .front {
    -webkit-transform: rotateY(-180deg);
            transform: rotateY(-180deg);
}
.card:hover .back {
    -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
}
/* styling */
.front .contact {
    height: 120px;
    width: 120px;
    border: 5px solid #B2DBBF;
    border-radius: 50%;
    display: inline-block;
    margin-bottom: 10px;
}
.front .name {
    display: inline-block;
    font-size: 18px;
    color: #fff;
}
.front .job {
    color: #fff;
}
.front hr {
    border: none;
    color: #B2DBBF;
    border: 1px solid;
}
.back .icon {
    fill: currentColor;
    color: inherit;
    height: 33px;
    width: 33px;
    margin-top: 15px;
    color: white;
}
.back .icon:hover {
    cursor: pointer;
    color: #648767;
}
</style>