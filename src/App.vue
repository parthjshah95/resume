<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">

$junction-dir: "assets/fonts/junction/";
@font-face {
  font-family: 'Junction';
  src: url($junction-dir+'junction-regular.eot'), /* IE9 Compat Modes */
       url($junction-dir+'junction-regular.woff') format('woff'), /* Modern Browsers */
       url($junction-dir+'junction-regular.ttf')  format('truetype'), /* Safari, Android, iOS */
}

// $junction-dir: "assets/fonts/raleway/";
// @font-face {
//   font-family: 'Raleway';
//   src: url($junction-dir+'raleway_thin-webfont.eot'), /* IE9 Compat Modes */
//        url($junction-dir+'raleway_thin-webfont.woff') format('woff'), /* Modern Browsers */
//        url($junction-dir+'raleway_thin-webfont.ttf')  format('truetype'), /* Safari, Android, iOS */
// }

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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
