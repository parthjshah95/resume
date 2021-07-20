<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <div :class="bigScreen? navbar: 'navbar-small'">
        <router-link :class="bigScreen? navbtn: 'navbtn-small'" to="/about">About</router-link>
        <div :class="bigScreen? navbtn: 'navbtn-small'" v-scroll-to="'#aboutme'">About me</div>
        <div :class="bigScreen? navbtn: 'navbtn-small'" v-scroll-to="'#experience'">Experience</div>
        <div :class="bigScreen? navbtn: 'navbtn-small'" v-scroll-to="'#skills'">Skills</div>
        <div :class="bigScreen? navbtn: 'navbtn-small'" v-scroll-to="'#education'">Education</div>
    </div> -->
    <router-view/>
  </div>
</template>
<script>
import Home from '@/views/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  },
  computed:{
    windowWidth() {
      return this.$parent.windowWidth;
    },
    bigScreen(){
      return this.windowWidth > 800;
    }
  },
  data(){
    return {
      navbtn: 'navbtn',
      'navbtn-small': 'navbtn-small',
      'navbar': 'navbar',
      'navbar-small': 'navbar-small',

    }
  }
}
</script>


<style lang="scss">


$junction-dir: "assets/fonts/junction/";
@font-face {
  font-family: 'Junction';
  src: url($junction-dir+'junction-regular.eot'), /* IE9 Compat Modes */
       url($junction-dir+'junction-regular.woff') format('woff'), /* Modern Browsers */
       url($junction-dir+'junction-regular.ttf')  format('truetype'), /* Safari, Android, iOS */
}

$junction-dir: "assets/fonts/Aftasans/";
@font-face {
  font-family: 'Aftasans';
  src: url($junction-dir+'AftaSansThin-Regular.eot'), /* IE9 Compat Modes */
       url($junction-dir+'AftaSansThin-Regular.woff') format('woff'), /* Modern Browsers */
       url($junction-dir+'AftaSansThin-Regular.ttf')  format('truetype'), /* Safari, Android, iOS */
}

$junction-dir: "assets/fonts/Amaranth/";
@font-face {
  font-family: 'Amaranth';
  src: url($junction-dir+'Amaranth-Bold.eot'), /* IE9 Compat Modes */
       url($junction-dir+'Amaranth-Bold.woff') format('woff'), /* Modern Browsers */
       url($junction-dir+'Amaranth-Bold.ttf')  format('truetype'), /* Safari, Android, iOS */
}


#app {
  font-family: "Aftasans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
