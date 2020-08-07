<template>
  <div class="home">
    <div class="cont-bleed">
      <img alt="University of Florida" src="../assets/ben_hill_stadium.jpg" class="image-bleed">
      <div class="image-overlay"></div>
      <img class="photo" src="../assets/me.jpg" data-aos="zoom-in">
      <div data-aos="fade-down">
        <h1>PARTH SHAH</h1>
        <h4>Machine learning | Full stack</h4>
      </div>
      <!-- <iframe class="down" src="https://giphy.com/embed/UrzWDQ3VTiDU84R5dx"></iframe> -->
      <img class="down-big blinking" src="../assets/keyboard-down-arrow.png">
    </div>
    <div class="bg-wh">
      <!-- Experience panel -->
      <div :class="bigScreen? 'panel-half-bigger': 'panel-full'">
        <h2 data-aos="zoom-in">Experience</h2>
        <div data-aos="zoom-in">
          <ExperienceCard v-for="exp in experience" v-bind:key="exp.position" v-bind:cardData="exp"></ExperienceCard>
        </div>
      </div>
      <!-- Skills panel -->
      <div :class="bigScreen? 'panel-half-smaller': 'panel-full'">
        <h2 data-aos="zoom-in">Skills</h2>
        lorem ipsum dolor sit amet
        <div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ExperienceCard from '@/components/ExperienceCard.vue'
import resume_data from '@/data.json'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    ExperienceCard
  },
  data(){
    resume_data.experience.forEach(e => {
      e['collapsed'] = 'true';
    });
    resume_data['panel-half-bigger'] = "panel-half-bigger";
    resume_data['panel-full'] = "";
    return resume_data;
  },
  computed:{
    windowWidth() {
      return this.$parent.$parent.windowWidth;
    },
    bigScreen(){
      return this.windowWidth > 800;
    }
  }
}
</script>

<style lang="scss">

$ratio: 55vw;
$bg-padding: 20px;
$arrow-size: 70px;
$box-shadow: 0 5px 20px rgba(0,0,0,0.19), 0 3px 6px rgba(0,0,0,0.23);
$box-shadow-highlight: 0 5px 30px rgba(0,0,0,0.19), 0 3px 15px rgba(0,0,0,0.23);

html {
  overflow-x: hidden;
}
@keyframes blink{
    0%  {opacity: 1;}
    50% {opacity: 0;}
    100%{opacity: 1;}
}
.blinking{
    animation:blink 1.2s infinite;
}
.cont-bleed{
  width:100%;
  height: 100vh;
  overflow: hidden;
  z-index:0;
}
.image-bleed {
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -2;
  position:fixed;
  left: 0px;
  top:0px;
}
.image-overlay {
  @extend .image-bleed;
  z-index: -1;
  background-color: rgba(64, 55, 105, 0.9)
}

$photo-size: 200px;
$margin-top-photo: 50px;
$scale-photo: 15px;
.photo{
  margin-left: auto;
  margin-right: auto;
  margin-top: $margin-top-photo;
  margin-bottom: $scale-photo/2;
  width: $photo-size;
  border-radius: $photo-size;
  box-shadow: $box-shadow;
  transition: 0.3s;
  &:hover {
    box-shadow: $box-shadow-highlight;
    width: $photo-size + $scale-photo;
    margin-top: $margin-top-photo - ($scale-photo/2);
    margin-bottom: 0px;
  }
}
.down-big{
  position: fixed;
  bottom:0px;
  left: calc(50vw - #{($arrow-size / 2)});
  width: $arrow-size;
  height: $arrow-size;
  z-index: -1;
}
.panel-half-bigger{
  display: inline;
  width: calc(#{$ratio} - #{2*$bg-padding});
}
.panel-half-smaller{
  display: inline;
  width: calc(100vw - #{$ratio} - #{4*$bg-padding});
}
h1 {
  font-size: 4rem;
  color: white;
  margin-bottom: 0px;
  font-family:  "Amaranth", Helvetica;
}
h4{
  color:white;
  margin-top:0px;
  font-size: 1.8rem;
  font-weight: 100;
  font-style: normal;
}
h2{
  @extend h4;
  color: #444;
  margin: 20px;
  font-family: Helvetica, sans-serif;
}
.bg-wh{
  background-color: white;
  margin: 0px;
  padding: $bg-padding;
  z-index: 1;
  min-height: 500px;
}
</style>
