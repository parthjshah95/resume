<template>
  <div class="home">
    <div class="cont-bleed">
      <img alt="University of Florida" src="../assets/ben_hill_stadium.jpg" class="image-bleed">
      <div class="image-overlay"></div>
      <img class="photo" src="../assets/me.jpg">
      <h1>PARTH SHAH</h1>
      <h4>Full stack | Machine learning | Android</h4>
    </div>
    <h2>Foo bar</h2>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss" scoped>
.cont-bleed{
  width:100%;
  height: 100vh;
  overflow: hidden;
}
.image-bleed {
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -2;
  position:absolute;
  left: 0px;
  top:0px;
}
.image-overlay {
  @extend .image-bleed;
  z-index: -1;
  background-color: rgba(64, 55, 105, 0.8)
}

$photo-size: 200px;
.photo{
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 0px;
  width: $photo-size;
  border-radius: $photo-size;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 1px 20px 5px rgba(68, 50, 32, 0.767);
    transform: scale(1.05);
  }
}
h1 {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 4rem;
  color: white;
  font-style: bold;
  font-variant: normal;
  font-weight: 100;
  margin-bottom: 0px;
}
h4{
  @extend h1;
  font-family: "Arial Black", Helvetica, sans-serif;
  margin-top:0px;
  font-size: 1.8rem;
  font-weight: 500;
}
</style>
