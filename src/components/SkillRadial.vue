<template>
    <div class="component">
    <p class="name"><b> {{skill.name}} </b></p>    
    <radial-progress-bar
                      :diameter="size"
                      :completed-steps="percentage"
                      :total-steps="100"
                      v-view.once="onceHandler"
                      stopColor="#512DA8"
                      startColor="#512DA8"
                      innerStrokeColor="#ddd"
                      class="circle"
                      data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom">
              <p>{{skill.label}}</p>
          </radial-progress-bar>
    </div>
</template>
<script>
import RadialProgressBar from 'vue-radial-progress'


export default {
    name: 'SkillRadial',
    components: {
        RadialProgressBar
    },
    props: [
        'skill'
    ],
    data() {
        return {
            percentage: 0,
            size: 120,
            
        }
    },
    methods:{
        onceHandler(){
            var vm = this;
            setTimeout(function() {
                vm.percentage = vm.skill.percentage;
            }, (300));
        }
    }
}
</script>
<style lang="scss" scoped>
$size: 140px;
$box-shadow: 0 5px 20px rgba(0,0,0,0.19), 0 3px 6px rgba(0,0,0,0.23);
$box-shadow-highlight: 0 5px 30px rgba(0,0,0,0.19), 0 3px 15px rgba(0,0,0,0.23);


.component{
    display: inline-block;
    vertical-align: top;
    width: $size;
    margin: 25px;
    z-index: 2;
}
.name{
    font-size: 1.1rem;
}
p{
    margin:0px;
}
.circle{
    border-radius: $size/2;
    border: none;
    margin: auto;
    &:hover{
        box-shadow: $box-shadow;
        background-color: rgba($color: #E8EAF6, $alpha: 0.2);
    }
}
</style>
