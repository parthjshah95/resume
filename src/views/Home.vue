<template>
  <div class="home">
    <ProjectCardFull v-if="projectShown" :projectData="projectShown" v-on:close="closeProject"></ProjectCardFull>
    <div class="cont-bleed">
      <img alt="University of Florida" src="../assets/ben_hill_stadium.jpg" class="image-bleed">
      <div class="image-overlay"></div>
      <img class="photo" src="../assets/me.jpg" data-aos="zoom-in">
      <div class="intro" data-aos="fade-down">
        <h1>{{rd.name}}</h1>
        <h4>{{rd.field}}</h4>
        <div v-for="line in rd.intro" :key="line">{{line}}</div>
      </div>
      <!-- <img src="../assets/photo_big.png" class="photo-big"> -->
      <!-- <iframe class="down" src="https://giphy.com/embed/UrzWDQ3VTiDU84R5dx"></iframe> -->
      <img class="down-big blinking" src="../assets/keyboard-down-arrow.png">
    </div>
    <div :class="bg_wh">
      <!-- Experience panel -->
      <!-- <div :class="bigScreen? 'panel-half-bigger': 'panel-full'"> -->
      <div class="panel-full">
        <h2 data-aos="zoom-in">Experience</h2>
        <div data-aos="zoom-in">
          <ExperienceCard v-for="exp in rd.experience" v-bind:key="exp.position" v-bind:cardData="exp" v-on:openProject="showProject"></ExperienceCard>
        </div>
      </div>
      <br>
      <!-- Skills panel -->
      <!-- <div :class="bigScreen? 'panel-half-smaller': 'panel-full'"> -->
      <div class="panel-full">
        <h2 data-aos="zoom-in">Skills</h2>
        <div>
          <SkillRadial v-for="skill in rd.skills" v-bind:key="skill.name" v-bind:skill="skill"></SkillRadial>
        </div>
      </div>
      <br>
      <br>
      <!-- Education -->
      <div class="panel-full">
        <h2 data-aos="zoom-in">Education</h2>
        <div data-aos="zoom-in">
          <ExperienceCard v-for="ed in rd.education" v-bind:key="ed.position" v-bind:cardData="ed" v-on:openProject="showProject"></ExperienceCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ExperienceCard from '@/components/ExperienceCard.vue'
import SkillRadial from '@/components/SkillRadial.vue'
import resume_data from '@/data.json'
import ProjectCardFull from '@/components/ProjectCardFull.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    ExperienceCard,
    SkillRadial,
    ProjectCardFull
  },
  created(){
    resume_data.experience.forEach(e => {
      e['projectsData'] = {};
      e['projects'].forEach(project => {
        e['projectsData'][project] = resume_data.projects[project];
      });
    });
    resume_data.education.forEach(e => {
      e['projectsData'] = {};
      e['projects'].forEach(project => {
        e['projectsData'][project] = resume_data.projects[project];
      });
    });
  },
  methods: {
    showProject(projectKey){
      this.projectShown = this.rd.projects[projectKey];
      // console.log(this.projectShown);
    },
    closeProject(){
      // console.log("trying to close");
      this.projectShown = null;
    }
  },
  data(){
    return {
      'rd': resume_data,
      'panel-half-bigger': "panel-half-bigger",
      'panel-full': "panel-full",
      'projectShown': null
    };
  },
  computed:{
    windowWidth() {
      return this.$parent.$parent.windowWidth;
    },
    bigScreen(){
      return this.windowWidth > 800;
    },
    bg_wh(){
      return this.bigScreen? 'bg-wh': 'bg-wh-small';
    }
  }
}
</script>

<style lang="scss">

$ratio: 55vw;
$bg-padding: 50px;
$bg-padding-small: 10px;
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
  background-color: rgba(64, 55, 105, 0.9);
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
.photo-big{
  position: absolute;
  max-height: 1000px;
  height: 100%;
  right: 10px;
  bottom: -30%;
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
  width: calc(#{$ratio} - #{$bg-padding});
}
.panel-half-smaller{
  width: calc(100vw - #{$ratio} - #{2*$bg-padding});
}
.panel-full{
  width: calc(100vw - #{2*$bg-padding-small});
}
.skills{
  max-width: 980px;
  margin: 50px;
}
.intro{
  color:white;
}
h1 {
  font-size: 4rem;
  margin-bottom: 0px;
  font-family:  "Amaranth", Helvetica, sans-serif;
}
h4{
  margin-top:0px;
  font-size: 1.8rem;
  font-weight: 100;
  font-style: normal;
}
h2{
  @extend h4;
  color: #444;
  margin: 20px;
  font-family: "Amaranth", Helvetica, sans-serif;
}
.bg-wh{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  // background-color: #E8EAF6;
  background-color: rgba($color: #E8EAF6, $alpha: 0.75);
  margin: 0px;
  padding: $bg-padding;
  z-index: 1;
  min-height: 500px;
}
.bg-wh-small{
  @extend .bg-wh;
  padding: $bg-padding-small;
}
</style>
