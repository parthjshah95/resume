<template>
    <div class="card" data-aos="zoom-in">
        <img class="icon" src="../assets/UF_logo.jpg">
        <div class="info">
            <div class="position">Research Assistant</div>
            <div class="institute"><b>University of Florida</b></div>
            <div class="description">Modern Artificial intelligence and Learning Technologies (MALT) lab</div>
            <div class="time"><b><i>Oct 2019 - Present</i></b></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$card-height: 100px;
.card{
    margin:10px;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.19), 0 3px 6px rgba(0,0,0,0.23);
    overflow: hidden;
    height: $card-height;
}
.icon{
    position:absolute;
    left: 0px;
    width: $card-height;
    height: $card-height;
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
    color: #557;
}
.institute{
    color: #f7700f;
    margin-top: 5px;
    margin-bottom: 7px;
    text-transform: uppercase;
}
.time{
    position: absolute;
    right: 5px;
    top: 5px;
    font-size: 1.0rem;
    color: #f7700f;
    text-transform: uppercase;
}
</style>
