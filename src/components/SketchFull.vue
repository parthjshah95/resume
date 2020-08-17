<template>
    <div class="bg-overlay">
        <div class="card">
            <div class="close" v-on:click="$emit('close')"></div>
            <img class="image" :src="require(`../assets/${image}`)">
        </div>
    </div>
</template>
<script>
export default {
    name:"ProjectCardFull",
    props:['image'],
}
</script>
<style lang="scss" scoped>
$border-radius: 20px;
$box-shadow: 0 5px 20px rgba(0,0,0,0.19), 0 3px 6px rgba(0,0,0,0.23);
$card-max-width: 700px;
$info-padding: 20px;

.bg-overlay {
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 5;
  background-color: rgba(64, 55, 105, 0.9);
}
.card{
    position: relative;
    height: 90vh;
    width: 90vw;
    max-width: $card-max-width;
    vertical-align: middle;
    margin:auto;
    margin-top: 5vh;
    background-color: white;
    border-radius: $border-radius;
    box-shadow: $box-shadow;
}
.close{
    border: 0.5px solid gray;
    position: absolute;
    right: -15px;
    top: -20px;
    padding: 7px 10px;
    border-radius: $border-radius;
    z-index: 6;
    cursor: pointer;
    background-color: lightgray;
    box-shadow: $box-shadow;
    &:after{
        content: '\2573';
    }
    &:hover{
        content:'\2573';
        color:white;
        background-color: red;
    }
    &:active{
        background-color: lightcoral;
    }
}
.image{
    width: 100%;
    height: 100%;
    border-radius: $border-radius;
    object-fit:cover;
    z-index: 5;
}
</style>
