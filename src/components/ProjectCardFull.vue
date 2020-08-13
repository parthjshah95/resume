<template>
    <div class="bg-overlay">
        <div class="card">
            <div class="close" v-on:click="$emit('close')"></div>
            <img class="image" :src="require(`../assets/${image}`)">
            <div class="info">
                <h4 class="title">{{projectData.title}}</h4>
                <div class="subtitle">{{projectData.subtitle}}</div>
                <p class="justify">
                    <span class="link"><a :href="projectData.link">{{projectData.link}}</a></span>
                    <span class="time"><i>{{projectData.time}}</i></span>
                </p>
                <div class="desc" v-html="projectData.desc"></div>
                <div class="keywords" v-if="projectData.keywords.length > 0">
                    Keywords:
                    <li v-for="item in projectData.keywords" :key="item">{{item}}</li>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"ProjectCardFull",
    props:['projectData'],
    computed: {
        image(){
            return this.bigScreen? this.projectData.img.large: this.projectData.img.nano;
        },
        bigScreen(){
            return this.$parent.bigScreen;
        }
    }
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
    height: 40%;
    border-bottom: 1.5px solid lightgray;
    border-radius: $border-radius $border-radius 2px 2px;
    object-fit:cover;
    z-index: 5;
}
.info{
    width: calc(100% - #{2*$info-padding});
    height: calc(60% - #{2*$info-padding});
    padding: $info-padding - 3px;
    margin: auto;
    overflow-y: auto;
}
.title{
    margin-bottom: 10px;
}
.subtitle{
    font-size: 0.8rem;
    margin-bottom: 15px; 
}
.time{
    font-size: 0.85rem;
}
.time-calc{
    @extend .time;
    font-size: 0.8rem;
    color: gray;
    // margin-top: 8px;
}
.link{
    font-size: 0.8rem;
}
.justify{
    display:flex;
    justify-content: space-between;
    margin: 20px;
}
.desc{
    text-align: left;
    margin: 20px;
    overflow-y: auto;
    font-family: "Helvetica", sans-serif;
}
.keywords{
    text-align: left;
    margin-left: 20px;
    font-size: 0.8rem;
}
</style>
