<template>
    <!-- <div data-aos="zoom-in"> -->
    <div v-bind:class="properties.collapsed? 'card-collapsed': 'card'">
        <div class="primary">
            <img :class="bigScreen? icon: 'icon-small'" :src="require(`../assets/${properties.img}`)">
            <!-- <img class="icon" src="../assets/UF_logo.jpg"> -->
            <div :class="bigScreen? info: 'info-small'">
                <div class="institute"><a :href="properties.link"><b>{{properties.institute}}</b></a></div>
                <div class="description" v-if="bigScreen">{{properties.place}}</div>
                
                <!-- <div class="position" v-if="properties.position">
                    <div v-bind:class="bigScreen? 'time-top': 'time-div'">
                        <i class="time">{{properties.time}}</i>
                        <div class="time-calc" v-if="bigScreen"><i>{{properties.timeCalc}}</i></div>            
                    </div>
                    <div class="description" v-if="bigScreen" v-html="properties.description"></div>
                </div> -->

                <div :class="bigScreen? 'position-div': 'position-div-small'" v-for="position in properties.positions" :key="position.name">
                    <div v-bind:class="bigScreen? 'time-top': 'time-div'">
                    <!-- <div v-bind:class="'time-div'"> -->
                        <i class="time">{{position.time}}</i>
                        <div class="time-calc" v-if="bigScreen"><i>{{position.timeCalc}}</i></div>            
                    </div>
                    <div class="position">{{position.name}}</div>
                    <div class="description" v-html="position.description"></div>
                </div>
            </div>
        </div>
        <!-- <div class="down-div" v-if="properties.collapsed" v-on:click="toggleProjects()"> 
            <span class="down-desc">projects</span>
            <img class="down" src="../assets/keyboard-down-arrow.png">
        </div> -->
        <div class="projects">
            <ProjectCardNano v-for="(project,key) in properties.projectsData" :key="key" :projectKey="key" :projectInfo="project" v-on:openProject="pass"></ProjectCardNano>            
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
            icon: "icon",
            'icon-small': "icon-small",
            info: 'info',
            'info-small': 'info-small',
            'position-div': 'position-div',
            'position-div-small': 'position-div-small'
        }
    },
    props:[
        'cardData'
    ],
    methods:{
        pass(projectKey){
            this.$emit('openProject', projectKey);
        }
        // toggleProjects(){
        //     // console.log("clicked");
        //     this.properties.collapsed = !this.properties.collapsed;
        //     console.log("collapsed: "+this.properties.collapsed);
        // },
        // scrollRight(){

        // }
    },
    computed: {
        bigScreen(){
            return this.$parent.bigScreen;
        }
    }
}
</script>

<style lang="scss" scoped>

$card-max-width: 900px;
$card-height: 110px;
$icon-ratio-small: 0.7;
$blue: #283593;
$border-radius: 10px;
$box-shadow: 0 5px 20px rgba(0,0,0,0.19), 0 3px 6px rgba(0,0,0,0.23);
$box-shadow-highlight: 0 5px 30px rgba(0,0,0,0.19), 0 3px 15px rgba(0,0,0,0.23);
$down-arrow-size: 30px;
$up-arrow-size: 10px;
$side-arrow-size: 15px;
$projects-margin: $side-arrow-size;
$project-card-aspect-ratio: 1.6;

.card{
    margin: auto;
    margin-bottom: 50px;
    margin-top: 50px;
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
    border-radius: $border-radius 0px 0px 0px;
    border-bottom: 0.5px solid lightgray;
}
.icon-small{
    @extend .icon;
    width: $icon-ratio-small*$card-height;
    height: $icon-ratio-small*$card-height;
}
.primary{
    max-width: $card-max-width;
    border-radius: $border-radius;
    width: 100%;
    box-shadow: $box-shadow;
    z-index: 1;
}
$margin: 10px;
.info{
    min-height: $card-height - 20px;
    border-left: 0.5px solid #ccc;
    width: calc(100% - #{$card-height+2*$margin});
    padding: $margin;
    margin-left: $card-height;
    padding-left: 10px;
    text-align: left;
    margin-right: 0px;
}
$margin-small: 7px;
.info-small{
    @extend .info;
    margin-left: $icon-ratio-small*$card-height;
    width: calc(100% - #{$icon-ratio-small*$card-height+2*$margin-small});
    padding: $margin-small;
}
.position-div{
    margin: 10px 0px 10px 10px;
    border-left: 1px solid lightgray;
    padding: 5px;
    background-color: #f6f6f6;
}
.position-div-small{
    @extend .position-div;
    margin:0px;
}
.position{
    font-size: 1.2rem;
    color: black;
    text-transform: capitalize;
}
.institute{
    font-size: 0.75rem;
    color: $blue;
    // margin: 7px 0px;
    text-transform: uppercase;
}
.time-div{
    font-size: 0.85rem;
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
    height: 1.3 *$card-height;
    padding-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    transition: 0.3s;
}
// .projects-scroll{
// }
// .row-container{
//     display: inline;
//     flex-grow: 2;
//     // flex-direction: row;
//     margin-top: 10px;
//     overflow: hidden;
//     white-space: nowrap;
//     height: 1.5*$card-height - $down-arrow-size;
// }
// .down-div{
//     cursor: pointer;
//     max-width: $card-max-width;
//     width:100%;
//     height: $down-arrow-size;
//     margin-top: 5px;
// }
// .down-desc{
//     display: inline-block;
//     margin-top: 5px;
//     vertical-align: top;
//     color:gray;
//     font-size: 0.8rem;
// }
// .down{
//     display:inline-block;
//     width: $down-arrow-size;
//     height: $down-arrow-size;
//     z-index: 0;
// }
// .up-div{
//     cursor: pointer;
//     max-width: $card-max-width - 2*$projects-margin;
//     width: 100%;
//     height: $up-arrow-size;
//     z-index: 3;
// }
// .up{
//     display:inline-block;
//     width: $up-arrow-size;
//     z-index: 0;
//     &:hover{
//         cursor: pointer;
//         background-color: #ddd;
//         color: black;
//     }
//     &:active{
//         background-color: #bbb;
//     }
// }
// .arrow{
//     display: inline-block;
//     width: $side-arrow-size;
//     height: $side-arrow-size;
//     top:0;
//     bottom:0;
//     color: gray;
//     transition: 0.3s;
//     margin: $card-height/2 5px;
//     z-index: 0;
//     border-radius: $border-radius;
//     &:hover{
//         cursor: pointer;
//         background-color: #ddd;
//         color: black;
//     }
//     &:active{
//         background-color: #bbb;
//     }
// }
// .left-arrow{
//     @extend .arrow;
//     // float: left;
// }
// .right-arrow{
//     @extend .arrow;
//     // right: 0;
// }
</style>
