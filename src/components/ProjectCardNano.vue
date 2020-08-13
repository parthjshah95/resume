<template>
    <div class="project-card"  data-aos="fade-down" v-on:click="$emit('openProject', projectKey)"> 
        <img class="img_nano" :src="require(`../assets/${info.img.nano}`)">
        <p class="project-title-nano"><b>{{info.title}}</b></p>
    </div>
</template>
<script>
import ProjectCardFull from "@/components/ProjectCardFull.vue"

export default {
    name: "ProjectCardNano",
    props: [
        'projectInfo',
        'projectKey'
    ],
    components:{
        ProjectCardFull
    },
    data(){
        return {
            "info": this.projectInfo
        }
    }
}
</script>
<style lang="scss" scoped>

$border-radius: 10px;
$project-card-margin: 12px;
$card-height: 120px;
$project-card-aspect-ratio: 1.6;
$box-shadow: 0 5px 20px rgba(0,0,0,0.29), 0 3px 6px rgba(0,0,0,0.33);
$box-shadow-highlight: 0 5px 30px rgba(0,0,0,0.29), 0 3px 15px rgba(0,0,0,0.33);
$padding-title: 10px;

.project-card{
    display: inline-block;
    vertical-align: top;
    white-space: normal;
    border-radius: $border-radius;
    box-shadow: $box-shadow;
    height: $card-height;
    width: $project-card-aspect-ratio * $card-height;
    margin: $project-card-margin;
    z-index: 0;
    cursor: pointer;
    // transition: 0.3s;
    // overflow: hidden;
    // -webkit-user-select: none;  /* Chrome all / Safari all */
    // -moz-user-select: none;     /* Firefox all */
    // -ms-user-select: none;      /* IE 10+ */
    // user-select: none;   
    &:hover{
        box-shadow: $box-shadow-highlight;

    }
    &:active{
        box-shadow: $box-shadow;
    }
    &:active .project-title-nano{
        color: lightgray;
    }


    // &:hover{
    //     margin: ($project-card-margin - (0.025 * $card-height))  ($project-card-margin - (0.025 * $project-card-aspect-ratio * $card-height));
    //     height: (1.05 * $card-height);
    //     width: (1.05 * $project-card-aspect-ratio * $card-height);
    //     // padding:  0.025 * $card-height;
    //     box-shadow: $box-shadow-highlight;
    // }
    // &:hover .project-title-nano{
    //     padding-bottom: $padding-title + 0.025 * $card-height;
    //     // width: 1.05 * $project-card-aspect-ratio * $card-height - 2 * $padding-title;
    // }
    // &:active{
    //     margin: $project-card-margin;
    //     height: $card-height;
    //     // width: $project-card-aspect-ratio * $card-height;
    //     box-shadow: $box-shadow;
    // }
    // &:active .project-title-nano{
    //     padding: $padding-title;
    //     color: lightgray;
    //     // width: $project-card-aspect-ratio * $card-height - 2 * $padding-title;
    // }
}
.img_nano{
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    left:0;
    right:0;
    bottom:0;
    top:0;
    z-index: -1;
    border-radius: $border-radius;
}
.project-title-nano{
    font-size: 0.9rem;
    color:white;
    z-index: 0;
    position: absolute;
    bottom: 0px;
    margin:0px; 
    background-color: rgba(64, 55, 105, 0.7);
    padding: $padding-title;
    background-clip: border-box;
    width: calc(100% - #{2*$padding-title});
    border-radius: 0px 0px $border-radius $border-radius;
}
</style>
