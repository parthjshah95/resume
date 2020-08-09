<template>
    <!-- <div data-aos="zoom-in"> -->
    <div v-bind:class="properties.collapsed? 'card-collapsed': 'card'">
        <div class="primary">
            <img class="icon" :src="require(`../assets/${properties.img}`)">
            <!-- <img class="icon" src="../assets/UF_logo.jpg"> -->
            <div class="info">
                <div class="institute"><a :href="properties.link"><b>{{properties.institute}}</b></a></div>
                <div class="description" v-if="bigScreen">{{properties.place}}</div>
                
                <!-- <div class="position" v-if="properties.position">
                    <div v-bind:class="bigScreen? 'time-top': 'time-div'">
                        <i class="time">{{properties.time}}</i>
                        <div class="time-calc" v-if="bigScreen"><i>{{properties.timeCalc}}</i></div>            
                    </div>
                    <div class="description" v-if="bigScreen" v-html="properties.description"></div>
                </div> -->

                <div class="position-div" v-for="position in properties.positions" :key="position.name">
                    <div v-bind:class="bigScreen? 'time-top': 'time-div'">
                    <!-- <div v-bind:class="'time-div'"> -->
                        <i class="time">{{position.time}}</i>
                        <div class="time-calc" v-if="bigScreen"><i>{{position.timeCalc}}</i></div>            
                    </div>
                    <div class="position">{{position.name}}</div>
                    <div class="description" v-if="bigScreen" v-html="position.description"></div>
                </div>
            </div>
        </div>
        <div class="down-div" v-on:click="toggleProjects()" v-if="properties.collapsed"> 
            <!-- <span class="down-desc">projects</span> -->
            <img class="down" src="../assets/keyboard-down-arrow.png">
        </div>
        <div class="projects" v-if="!properties.collapsed">
            <!-- <img class='left-arrow' src="../assets/left-arrow.svg"></img> -->
            <ProjectCardNano v-for="project in projects" :key="project.name"></ProjectCardNano>
            <!-- <img class='right-arrow' src="../assets/right-arrow.svg"></img> -->
            <div class="up-div" v-on:click="toggleProjects()">
                <img class="up" src="../assets/keyboard-up-arrow.svg">
            </div>
        </div>
    </div>
    <!-- </div> -->
</template>

<script>
import ProjectCardNano from "@/components/ProjectCardNano.vue"

export default {
    components:{
        ProjectCardNano
    },
    data(){
        return{
            properties: this.cardData,
            card: "card",
            'card-collapsed': "card-collapsed",
            time: "time",
            'time-top': "time-top",
        }
    },
    props:[
        'cardData'
    ],
    methods:{
        toggleProjects(){
            this.properties.collapsed = !this.properties.collapsed;
        }
    },
    computed: {
        bigScreen(){
            return this.$parent.bigScreen;
        }
    }
}
</script>

<style lang="scss" scoped>

$card-max-width: 700px;
$card-height: 110px;
$orange: #283593;
$border-radius: 10px;
$box-shadow: 0 5px 20px rgba(0,0,0,0.19), 0 3px 6px rgba(0,0,0,0.23);
$box-shadow-highlight: 0 5px 30px rgba(0,0,0,0.19), 0 3px 15px rgba(0,0,0,0.23);
$down-arrow-size: 30px;
$up-arrow-size: 10px;
$projects-margin: 25px;
$side-arrow-paddings: 5px;
$project-card-aspect-ratio: 1.6;

.card{
    margin: auto;
    margin-bottom: 30px;
    border-radius: $border-radius;
    box-shadow: $box-shadow;
    // height: 2.5*$card-height;
    transition: 0.3s;
    max-width: $card-max-width;
    background-color: white;
}
.card-collapsed{
    @extend .card;
    // height: 1.3*$card-height;
    transition: 0.3s;
}
.icon{
    float:left;
    // position:absolute;
    // left: 0px;
    width: $card-height;
    height: $card-height;
    border-radius: $border-radius 0px 0px $border-radius;
    border-bottom: 0.5px solid lightgray;
}
.primary{
    max-width: $card-max-width;
    border-radius: $border-radius;
    width: 100%;
    box-shadow: $box-shadow;
    z-index:1;
}
$margin:10px;
.info{
    min-height: $card-height - 20px;
    border-left: 0.5px solid #ccc;
    width: calc(100% - #{$card-height+2*$margin});
    padding: $margin;
    margin-left: $card-height;
    padding-left: 10px;
    text-align: left;
}
.position-div{
    margin: 10px 0px 10px 10px;
    border-left: 1px solid lightgray;
    padding: 5px;
    background-color: #f6f6f6;


}
.position{
    font-size: 1.2rem;
    color: black;
    text-transform: capitalize;
}
.institute{
    // font-size: 0.75rem;
    color: $orange;
    // margin: 7px 0px;
    text-transform: uppercase;
}
.time-div{
    font-size: 0.85rem;
    // color: $orange;
    // margin: 5px 0px;
}
.time-top{
    @extend .time-div;
    vertical-align: top;
    float: right;
    clear:right;
    margin-right: 5px;
    display: inline-block;
}
.time{
    display: block;
}
.time-calc{
    @extend .time-top;
    font-size: 0.8rem;
    color: gray;
    // margin-top: 8px;
}
.description{
    margin: 0px;
    font-size: 0.9rem;
}
.projects{
    max-width: $card-max-width - 2*$projects-margin;
    // margin-top: $card-height;
    height: 1.5*$card-height;
    padding: 0px $projects-margin;
    width: calc(100% - #{2*$projects-margin});
    transition: 0.3s;
    overflow-x: auto;
}
.down-div{
    cursor: pointer;
    max-width: $card-max-width;
    width:100%;
    height: $down-arrow-size;
    margin-top: 5px;
    // overflow: hidden;   
}
.down-desc{
    display: inline-block;
    margin-top: 5px;
    vertical-align: top;
    color:gray;
    font-size: 0.8rem;
}
.down{
    display:inline-block;
    width: $down-arrow-size;
    height: $down-arrow-size;
    z-index: 0;
}
.up-div{
    cursor: pointer;
    max-width: $card-max-width - 2*$projects-margin;
    width: 100%;
    height: $up-arrow-size;
    z-index: 3;
}
.up{
    display:inline-block;
    width: $up-arrow-size;
    z-index: 0;
}
.arrow{
    position: absolute;
    width: 15px;
    height: $card-height;
    top:0;
    bottom:0;
    color: gray;
    transition: 0.3s;
    padding: $card-height/4 0px;
    z-index: 0;
    &:hover{
        cursor: pointer;
        background-color: #ddd;
        color: black;
    }
    &:active{
        background-color: #bbb;
    }
}
.left-arrow{
    @extend .arrow;
    padding-right: 10px;
    left: 0;
    padding-left: $side-arrow-paddings;
    border-radius: 0px 0px 0px $border-radius;
}
.right-arrow{
    @extend .arrow;
    padding-left: 10px;
    right: 0;
    padding-right: $side-arrow-paddings;
    border-radius: 0px 0px $border-radius 0px;
}
</style>
