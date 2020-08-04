<template>
    <div data-aos="zoom-in">
    <div v-bind:class="properties.collapsed? 'card-collapsed': 'card'">
        <div class="primary">
            <img class="icon" src="../assets/UF_logo.jpg">
            <div class="info">
                <div class="position">{{properties.position}}</div>
                <div class="institute"><b>{{properties.institute}}</b></div>
                <div class="description">{{properties.description}}</div>
                <div class="time"><i>{{properties.time}}</i></div>
            </div>
        </div>
        <br>
        <div class="down-div" v-on:click="toggleProjects()" v-if="properties.collapsed"> 
            <span class="down-desc">projects:</span>
            <img class="down" src="../assets/keyboard-down-arrow.png">
        </div>
        <div class="projects" v-if="!properties.collapsed">
            <div class='left-arrow'></div>
            <div class="project-card"  data-aos="fade-down"> 
                <div>Lorem ipsum dolor sit amet</div>
            </div>
            <div class='right-arrow'></div>
            <img class="down"  v-on:click="toggleProjects()" src="../assets/keyboard-up-arrow.png">            
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            card: "card",
            'card-collapsed': "card-collapsed"
        }
    },
    props:[
        'properties'
    ],
    methods:{
        toggleProjects(){
            this.properties.collapsed = !this.properties.collapsed
        }
    }
}
</script>

<style lang="scss" scoped>

$card-height: 100px;
$orange: #e54304;
$border-radius: 10px;
$box-shadow: 0 5px 20px rgba(0,0,0,0.19), 0 3px 6px rgba(0,0,0,0.23);
$box-shadow-highlight: 0 5px 25px rgba(0,0,0,0.19), 0 3px 10px rgba(0,0,0,0.23);

.card{
    // margin:10px;
    border-radius: $border-radius;
    box-shadow: $box-shadow;
    height: 2.5*$card-height;
    transition: 0.3s;
}
.card-collapsed{
    @extend .card;
    height: 1.3*$card-height;
    transition: 0.3s;
}
.icon{
    position:absolute;
    left: 0px;
    width: $card-height;
    height: $card-height;
}
.primary{
    position:absolute;
    overflow: hidden;
    border-radius: $border-radius;
    height: $card-height;
    width: 100%;
    box-shadow: $box-shadow;
    z-index:1;
}
$margin:10px;
.info{
    position: absolute;
    left: $card-height;
    height: $card-height - 20px;
    width: calc(100% - #{$card-height+2*$margin});
    margin: $margin;
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
    position: absolute;
    right: 5px;
    top: 5px;
    font-size: 1.0rem;
    color: $orange;
    text-transform: uppercase;
}
.projects{
    position: absolute;
    top: $card-height;
    height: 1.5*$card-height;
    padding: 0px 25px;
    width: calc(100% - 50px);
    transition: 0.3s;
}
.collapsed{
    height:20px;
}
$down-arrow-size: 30px;
.down-div{
    cursor: pointer;
}
.down-desc{
    @extend .down-div;
    font-size: 0.8rem;
    text-align: center;
    position: absolute;
    padding-bottom: 8px;
    bottom:0;
    right:0;
    left:0;
    z-index: -1;
}
.down{
    @extend .down-div;
    display:inline-block;
    position: absolute;
    bottom: 0px;
    left: calc(50% + #{$down-arrow-size/2});
    width: $down-arrow-size;
}
.project-card{
    @extend .card;
    height:$card-height;
    margin-top: 18px;
    z-index:0;
    background-color:white;
    width: 1.6* $card-height;
    padding: 5px;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
        transform: scale(1.05);
        box-shadow: $box-shadow-highlight;
    }
}
.arrow{
    position: absolute;
    width: 25px;
    height: $card-height;
    top:0;
    bottom:0;
    color: gray;
    transition: 0.3s;
    padding-top: $card-height/2;
    &:after{
        // vertical-align: middle;
        content: '\02C2';
        // font-weight:5000;
    }
    &:hover{
        cursor: pointer;
        background-color: lightgray;
        color: black;
    }
}
.left-arrow{
    @extend .arrow;
    margin-right: 5px;
    left: 0;
    border-radius: 0px 0px 0px $border-radius;

}
.right-arrow{
    @extend .arrow;
    margin-left: 5px;
    right:0;
    border-radius: 0px 0px $border-radius 0px;
    &:after{
        content: '\02C3';
    }
}
</style>
