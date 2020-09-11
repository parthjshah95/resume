<template>
  <div class="home">
    <ProjectCardFull v-if="projectShown" :projectData="projectShown" v-on:close="closeProject"></ProjectCardFull>      
    <div class="cont-bleed">
      <div v-if="bigScreen" class="flashing-message blinking">Actively looking for full time opportunities</div>
      <div :class="bigScreen? navbar: 'navbar-small'">
        <div :class="bigScreen? navbtn: 'navbtn-small'" v-scroll-to="'#aboutme'">About me</div>
        <div :class="bigScreen? navbtn: 'navbtn-small'" v-scroll-to="'#experience'">Experience</div>
        <div :class="bigScreen? navbtn: 'navbtn-small'" v-scroll-to="'#skills'">Skills</div>
        <div :class="bigScreen? navbtn: 'navbtn-small'" v-scroll-to="'#education'">Education</div>
      </div>
      <img alt="University of Florida" src="../assets/ben_hill_stadium.jpg" class="image-bleed">
      <div class="image-overlay"></div>
      <img :class="bigScreen? photo: 'photo-small'" :src="require(`../assets/${rd.photo}`)" data-aos="zoom-in">
      <div class="intro" data-aos="fade-down">
        <div :class="bigScreen? 'name-big': 'name-small'">{{rd.name}}</div>
        <div :class="bigScreen? 'field-big': 'field-small'">{{rd.field}}</div>
        <a class="button" :href="rd.resumepdf">Download resume</a>
        <div v-for="line in rd.intro" :key="line">{{line}}</div>
      </div>
      <div v-if="bigScreen" class="contact-div">
        <contact v-for="contact in rd.contact" :key="contact.link" :contact="contact"  data-aos="slide-right"></contact>  
      </div>
      <div v-else class="contact-div-small">
        <contactSmall  v-for="contact in rd.contact" :key="contact.link" :contact="contact"  data-aos="slide-up"></contactSmall>
      </div>
      <!-- <img src="../assets/photo_big.png" class="photo-big"> -->
      <!-- <iframe class="down" src="https://giphy.com/embed/UrzWDQ3VTiDU84R5dx"></iframe> -->
      <a v-if="bigScreen" class="template-msg" href="https://github.com/parthjshah95/resume">
        Use this template for your live resume.
        <br>
        Made with ❤️ by Parth Shah.
      </a>
      <img class="down-big blinking" src="../assets/keyboard-down-arrow.png">
    </div>
    <div :class="bg_wh">
      <!-- About me -->
      <div class="panel-full" id="aboutme">
        <h2 data-aos="zoom-in">About me</h2>
        <p class="about" v-html="rd.about" data-aos="zoom-in"></p>
      </div>
      <!-- Experience panel -->
      <!-- <div :class="bigScreen? 'panel-half-bigger': 'panel-full'"> -->
      <div class="panel-full" id="experience">
        <h2 data-aos="zoom-in">Experience</h2>
        <div data-aos="zoom-in">
          <ExperienceCard v-for="exp in rd.experience" v-bind:key="exp.position" v-bind:cardData="exp" v-on:openProject="showProject"></ExperienceCard>
        </div>
      </div>  
      <br>
      <!-- Skills panel -->
      <!-- <div :class="bigScreen? 'panel-half-smaller': 'panel-full'"> -->
      <div class="panel-full" id="skills">
        <h2 data-aos="zoom-in">Skills</h2>
        <div>
          <SkillRadial v-for="skill in rd.skills" v-bind:key="skill.name" v-bind:skill="skill"></SkillRadial>
        </div>
      </div>
      <br>
      <br>
      <!-- Education -->
      <div class="panel-full" id="education">
        <h2 data-aos="zoom-in">Education</h2>
        <div data-aos="zoom-in">
          <ExperienceCard v-for="ed in rd.education" v-bind:key="ed.position" v-bind:cardData="ed" v-on:openProject="showProject"></ExperienceCard>
        </div>
      </div>
    </div>
    <div :class="bigScreen? 'bg-prpl': 'bg-prpl-small'">
      <div :class="bigScreen? 'template-msg-bottom': 'template-msg-bottom-small'">
        &copy Resume template made with ❤️ by <br>
        <a class="white-link" href="https://shahparth.net">Parth Shah</a>.<br><br>
        <a class="white-link" href="https://github.com/parthjshah95/resume">
          Use this template for your own live resume.
          <br>
        </a>
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
import Contact from '@/components/Contact.vue'
import ContactSmall from '@/components/ContactSmall.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    ExperienceCard,
    SkillRadial,
    ProjectCardFull,
    Contact,
    ContactSmall
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
      'projectShown': null,
      'name-big': 'name-big',
      'name-small': 'name-small',
      'field-big': 'field-big',
      'field-small': 'field-small',
      photo: 'photo',
      'photo-small': 'photo-small',
      navbtn: 'navbtn',
      'navbtn-small': 'navbtn-small',
      'navbar': 'navbar',
      'navbar-small': 'navbar-small',
      'template-msg-bottom': 'template-msg-bottom',
      'template-msg-bottom-small': 'template-msg-bottom-small',
      'bg-prpl': 'bg-prpl',
      'bg-prpl-small': 'bg-prpl-small'
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
$photo-size: 200px;
$photo-size-small: 150px;
$margin-top-photo: 80px;
$margin-top-photo-small: 80px;
$scale-photo: 15px;

html {
  overflow-x: hidden;
}
.flashing-message{
  color: #D1C4E9;
  position: absolute;
  left: 30px;
  top: 20px;
  font-size: 1rem;
}
.navbar{
  color: white;
  position: absolute;
  right: 20px;
  top: 30px;
  cursor: pointer;
  transition: 0.2s;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;    
}
.navbar-small{
  @extend .navbar;
  right: 0px;
  left: 0px;
  top: 20px;
}
.navbtn{
  padding: 5px 10px;
  border-radius: 10px;
  display: inline;
  transition: 0.3s;
  &:hover{
    background-color: rgba(#673AB7, 0.1);
    box-shadow: $box-shadow-highlight;
    color: #D1C4E9;
  }
}
.navbtn-small{
  @extend .navbtn;
  font-size: 0.7rem;
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
.photo-small{
  margin-left: auto;
  margin-right: auto;
  margin-top: $margin-top-photo-small;
  margin-bottom: $scale-photo/2;
  width: $photo-size-small;
  border-radius: $photo-size-small;
  box-shadow: $box-shadow;
  transition: 0.3s;
  &:hover {
    box-shadow: $box-shadow-highlight;
    width: $photo-size-small + $scale-photo;
    margin-top: $margin-top-photo - ($scale-photo/2);
    margin-bottom: 0px;
  }
}
// .photo-big{
//   position: absolute;
//   max-height: 1000px;
//   height: 100%;
//   right: 10px;
//   bottom: -30%;
// }
.contact-div{
  position: absolute;
  top: 20%;
}
.contact-div-small{
  position: relative;
  margin-top: 20px;
}
.down-big{
  position: fixed;
  bottom:0px;
  left: calc(50vw - #{($arrow-size / 2)});
  width: $arrow-size;
  height: $arrow-size;
  z-index: -1;
}
.template-msg{
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 0.7rem;
  border-radius: 10px;
  color: #C5CAE9;
  padding: 5px 10px;
  &:hover{
    background-color: rgba(#673AB7, 0.1);
    box-shadow: $box-shadow-highlight;
    color: #D1C4E9;
  }
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
.about{
  max-width: 600px;
  margin: auto;
  margin-bottom: 30px;
}
.skills{
  max-width: 980px;
  margin: 50px;
}
.intro{
  display: block;
  position: relative;
  color:white;
}
.name-big {
  font-size: 4rem;
  margin-bottom: 0px;
  margin-top: 20px;
  font-family:  "Amaranth", Helvetica, sans-serif;
  z-index: 1;
}
.name-small {
  @extend .name-big;
  font-size: 2rem;
}
.field-big{
  margin-top:0px;
  margin-bottom: 10px;
  font-size: 1.8rem;
  font-weight: 100;
  font-style: normal;
  z-index: 1;
}
.field-small{
  @extend .field-big;
  font-size: 1rem;
}
h2{
  @extend .field-big;
  color: #444;
  margin: 20px;
  font-family: "Amaranth", Helvetica, sans-serif;
}
$btn-color: #673AB7;
.button{
  text-decoration: none;
  width: max-content;
  margin: 20px auto;
  display: block;
  border-radius: 20px;
  box-shadow: $box-shadow;
  color: white;
  border: 2px solid $btn-color;
  background-color: $btn-color;
  transition: 0.3s;
  padding: 8px 10px;
  cursor: pointer;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;    

  &:hover{
    border: 2px solid $btn-color;
    background-color: #EDE7F6;
    color: #512DA8;
    box-shadow: $box-shadow-highlight;
  }
  &:active{
    background-color: #D1C4E9;
  }
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
.bg-prpl{
  @extend .bg-wh;
  background-color: #673AB7;
  min-height: 50px;
  color: white;
}
.bg-prpl-small{
  @extend .bg-prpl;
  padding: $bg-padding-small;
}
.template-msg-bottom{
  margin: auto;
  font-style: italic;
  font-size: 0.9rem;
}
.template-msg-bottom-small{
  @extend .template-msg-bottom;
  font-size: 0.7rem;
}
.white-link{
  color: white;
}
</style>
