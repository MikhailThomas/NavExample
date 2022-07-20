<template>
<!-- laptop section -->
  <div id="about" class="about container-fluid">
    <!-- images -->
    <section id="main">
      <div class="frame">
      	<a href="#">
        	<span class="caption">
        		<h2>"THE MAN"</h2>
            <p class="desc">I am a energetic, happy and loving massage therapist who has taken part in the Healing Hands Academy, holistic massage course. I am determined to perfect my spiritual, physical and mental healing capabilities through touch communication. </p>
        	</span>
          <img src="https://assets.codepen.io/2856/batman-detective.jpg">
        </a>
      </div>
      
      <div class="frame">
				<a href="#">
        	<span class="caption">
        		<h2>MIKHAIL</h2>
            <p class="desc">Mikhail Eaon Thomas is an aspiring web developer who has been apart of the Life Choices coding internship. This is where he found his passion for web development and design. "My goal in life is to become the best at everything i do, through my hard work, determination and never settling for less than the best".</p>
        	</span>
        	<img src="https://assets.codepen.io/2856/daredevil.jpg">
        	</a>
        </div>
      <div class="frame">
        <a href="#">
        	<span class="caption">
        		<h2>"THE MYTH"</h2>
            <p class="desc">I am a practitioner and a coach of Brazilian Jiu Jitsu.BJJ is a martial art focusing on the skill of taking an opponent to the ground, controlling the opponent, and using a number of techniques to force them into submission. This is the same mindset i use when taking on challenges using skill, knowledge and control to overcome them.</p>
        	</span>
      	<img src="https://assets.codepen.io/2856/glc_teamwork.jpg">
        </a>  
      </div>
    </section>
    <!-- /Images/ -->
    <div id="info" class="row">
      <!-- technical skills -->
      <div id="technical" class="col-6">
        <h2>TECHNICAL SKILLS</h2>
        <div>
            <p class="d-flex justify-content-between text-center
                    text-sm-center">
              HTML <span>80%</span>
            </p>
            <div class="progress">
              <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 80%" aria-valuenow="80"
                aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div>
            <p class="d-flex justify-content-between text-center
                    text-sm-center">
              CSS <span>60%</span>
            </p>
            <div class="progress">
              <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width:60%" aria-valuenow="60"
                aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div>
            <p class="d-flex justify-content-between text-center
                    text-sm-center">
              BOOTSTRAP <span>60%</span>
            </p>
            <div class="progress">
              <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width:60%" aria-valuenow="60"
                aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div>
            <p class="d-flex justify-content-between text-center
                    text-sm-center">
              JAVASCRIPT <span>20%</span>
            </p>
            <div class="progress">
              <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width:20%" aria-valuenow="20"
                aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div>
            <p class="d-flex justify-content-between text-center
                    text-sm-center">
              VUE <span>100%</span>
            </p>
            <div class="progress">
              <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width:100%" aria-valuenow="100"
                aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
      </div>
      <!-- /technical skills/ -->
      <!-- soft skills -->
      <div id="soft" class="col-6">
        <h2>SOFT SKILLS</h2>
        <div>
              <p class="d-flex justify-content-between text-center
                    text-sm-center">
                TEAM WORK <span>90%</span>
              </p>
              <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 90%" aria-valuenow="90"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div>
              <p class="d-flex justify-content-between text-center
                    text-sm-center">
                HARD WORK<span>90%</span>
              </p>
              <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 90%" aria-valuenow="90"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div>
              <p class="d-flex justify-content-between text-center
                    text-sm-center">
                TRUSTING <span>100%</span>
              </p>
              <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 100%" aria-valuenow="100"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div>
              <p class="d-flex justify-content-between text-center
                    text-sm-center">
                DETERMINATION <span>90%</span>
              </p>
              <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 90%" aria-valuenow="90"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div>
              <p class="d-flex justify-content-between text-center
                    text-sm-center">
                HUMILITY <span>0%</span>
              </p>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
      </div>
      <!-- /soft skills/ -->
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
h1, h2, h3, h4, h5, h6 {
  font-family: 'Alfa Slab One', cursive;
}

#about{
  background-color: gold;
  padding-bottom: 3rem;
  padding-top: 3rem;
}

#main {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
	margin: auto 10px auto;
}

.frame {
  border: 10px solid red;
  box-shadow: 3px 3px 4px black;
  height: 400px;
 	overflow: hidden;
  position: relative;
  width: 300px;
}

.frame a {
  display: block;
	height: 100%;
  width: 100%;
}

.frame img {
  display: block;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
}

.frame a .caption {
	background-color: rgba(0, 0, 0, 0.7);
	display: block;
  overflow: hidden;
  padding: 1rem;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 300px;
	transition-property: top;
  transition-duration: 0.2s;  
  width: 100%;  
  z-index: 10;
}

.frame a:hover .caption {
	top: 0;
  transition: all 2s;
}

.frame a .caption h2 {
  color: orange;
  font-size: 32px;
	margin-bottom: 20px;
}

.frame a .caption p {
  color: white;
  display: none;
  line-height: 150%;
  transition: all 0.2s;  
  width: 90%;
}

.frame a:hover .caption p {
  display: block;
  margin-bottom: 20px;
}

#info{
  padding-top: 3rem;
}
.progress{
  height: 20px;
  background-color: grey;
  box-shadow: 3px 3px 4px black;
}

.progress-bar{
  background-color: red;
  
}

</style>

