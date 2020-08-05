<template>
    <!-- <div data-aos="zoom-in"> -->
    <div v-bind:class="properties.collapsed? 'card-collapsed': 'card'">
        <div class="primary">
            <img class="icon" :src="require(`../assets/${properties.img}`)">
            <!-- <img class="icon" src="../assets/UF_logo.jpg"> -->
            <div class="info">
                <div class="institute" v-if="bigScreen"><b>{{properties.institute}}</b></div>
                <div class="time-calc" v-if="bigScreen"><i>{{properties.timeCalc}}</i></div>
                <div v-bind:class="bigScreen? 'time-top': time"><i>{{properties.time}}</i></div>
                <div class="position">{{properties.position}}</div>
                <div v-if="bigScreen" v-html="properties.description"></div>
            </div>
        </div>
        <div class="down-div" v-on:click="toggleProjects()" v-if="properties.collapsed"> 
            <span class="down-desc">projects</span>
            <img class="down" src="../assets/keyboard-down-arrow.png">
        </div>
        <div class="projects" v-if="!properties.collapsed">
            <!-- <img class='left-arrow' src="../assets/left-arrow.svg"></img> -->
            <div class="project-card"  data-aos="fade-down"> 
                <div>Lorem ipsum dolor sit amet</div>
            </div>
            <!-- <img class='right-arrow' src="../assets/right-arrow.svg"></img> -->
            <div class="up-div" v-on:click="toggleProjects()">
                <img class="up" src="../assets/keyboard-up-arrow.svg">
            </div>
        </div>
    </div>
    <!-- </div> -->
</template>

<script>
export default {
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
            return this.$parent.windowWidth > 600;
        }
    }
}
</script>

<style lang="scss" scoped>

$card-height: 110px;
$orange: #e54304;
$border-radius: 10px;
$box-shadow: 0 5px 20px rgba(0,0,0,0.19), 0 3px 6px rgba(0,0,0,0.23);
$box-shadow-highlight: 0 5px 30px rgba(0,0,0,0.19), 0 3px 15px rgba(0,0,0,0.23);
$card-max-width: 700px;
$down-arrow-size: 30px;
$up-arrow-size: 15px;
$projects-margin: 25px;
$side-arrow-paddings: 5px;
$project-card-aspect-ratio: 1.6;

.card{
    margin: auto;
    margin-bottom: 30px;
    border-radius: $border-radius;
    box-shadow: $box-shadow;
    height: 2.5*$card-height;
    transition: 0.3s;
    max-width: $card-max-width;
}
.card-collapsed{
    @extend .card;
    height: 1.3*$card-height;
    transition: 0.3s;
}
.icon{
    float:left;
    // position:absolute;
    // left: 0px;
    width: $card-height;
    height: $card-height;
    border-right:0.5px solid #ccc;
}
.primary{
    max-width: $card-max-width;
    // position:absolute;
    overflow: hidden;
    border-radius: $border-radius;
    height: $card-height;
    width: 100%;
    box-shadow: $box-shadow;
    z-index:1;
}
$margin:10px;
.info{
    // position: absolute;
    height: $card-height - 20px;
    width: calc(100% - #{$card-height+2*$margin});
    margin: $margin;
    margin-left: $card-height;
    padding-left: 10px;
    text-align: left;
}
.position{
    font-size: 1.4rem;
    color: black;
}
.institute{
    font-size: 0.85rem;
    color: $orange;
    margin: 7px 0px;
    text-transform: uppercase;
}
.time{
    font-size: 1.0rem;
    color: $orange;
    margin: 5px 0px;
}
.time-top{
    @extend .time;
    float: right;
    margin-right: 5px;
    display: inline-block;
}
.time-calc{
    @extend .time-top;
    font-size: 0.8rem;
    color: gray;
    margin-top: 8px;
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
    overflow: hidden;   
}
.down-desc{
    display: inline-block;
    margin-top: 5px;
    vertical-align: top;
}
.down{
    display:inline-block;
    width: $down-arrow-size;
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
.project-card{
    @extend .card;
    height: $card-height;
    width: $project-card-aspect-ratio * $card-height;
    margin: 12px;
    padding: 5px;
    z-index:3;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
        margin: 15px - (0.025 * $card-height);
        padding: 5px + (0.025 * $card-height);
        box-shadow: $box-shadow-highlight;
    }
    &:active{
        margin: 15px;
        padding: 5px;
        box-shadow: $box-shadow;
    }
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
