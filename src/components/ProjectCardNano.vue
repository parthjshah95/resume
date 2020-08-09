<template>
    <div class="card"  data-aos="fade-down"> 
        <div>Lorem ipsum dolor sit amet</div>
    </div>
</template>
<script>
export default {
    name: "ProjectCardNano",
    props: [
        'projectInfo'
    ],
    data(){
        return {
            "info": this.projectInfo
        }
    }
}
</script>
<style lang="scss" scoped>
$project-card-margin: 12px;
$card-height: 100px;
$project-card-aspect-ratio: 1.6;
$box-shadow: 0 5px 20px rgba(0,0,0,0.19), 0 3px 6px rgba(0,0,0,0.23);
$box-shadow-highlight: 0 5px 30px rgba(0,0,0,0.19), 0 3px 15px rgba(0,0,0,0.23);

.card{
    @extend .card;
    height: $card-height;
    width: $project-card-aspect-ratio * $card-height;
    margin: $project-card-margin;
    padding: 5px;
    z-index:3;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
        margin: ($project-card-margin - (0.025 * $card-height))  ($project-card-margin - (0.025 * $project-card-aspect-ratio * $card-height));
        padding: 5px + (0.025 * $card-height)  (5px + (0.025 * $project-card-aspect-ratio * $card-height));    
        box-shadow: $box-shadow-highlight;
    }
    &:active{
        margin: $project-card-margin;
        padding: 5px;
        box-shadow: $box-shadow;
    }
}
</style>
