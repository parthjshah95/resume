<template>
  <div class="home">
    <div class="cont-bleed">
      <img alt="University of Florida" src="../assets/ben_hill_stadium.jpg" class="image-bleed">
      <div class="image-overlay"></div>
      <img class="photo" src="../assets/me.jpg">
      <h1>PARTH SHAH</h1>
      <h4>Full stack | Machine learning </h4>
      <iframe class="down" src="https://giphy.com/embed/UrzWDQ3VTiDU84R5dx"></iframe>
    </div>
    <div class="bg-wh">
      <h2>Experience</h2>
      <ExperienceCard></ExperienceCard>
      <!-- <div class="container temp" data-aos="zoom-in">
        lorem ipsum dolor si amet
      </div> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ExperienceCard from '@/components/ExperienceCard.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    ExperienceCard
  }
}
</script>

<style lang="scss" scoped>
html {
  overflow-x: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  background-color: rgba(64, 55, 105, 0.85)
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
$arrow-size: 30px;
.down{
  position: fixed;
  bottom:0px;
  left: calc(50vw - #{($arrow-size / 2)});
  width: $arrow-size;
  height: $arrow-size;
  z-index: -1;
}
iframe{
  border:none;
}
h1 {
  font-size: 3rem;
  color: white;
  font-style: bold;
  font-variant: normal;
  font-weight: 100;
  margin-bottom: 0px;
}
h4{
  @extend h1;
  margin-top:0px;
  font-size: 1.8rem;
  font-weight: 500;
}
h2{
  @extend h4;
  color: #444;
  margin: 20px;
  // padding: 10px;
}
.bg-wh{
  background-color: white;
  margin: 0px;
  padding: 20px;
  z-index: 1;
  height: 500px;
}
.temp{
  width: 700px;
  height: 30px;
}
</style>
