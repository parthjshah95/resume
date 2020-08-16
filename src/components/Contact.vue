<template>
    <a class="contact" :href="contact.link" width="50px" height="50px">
        <div class="overlay"></div>
        <img :src="require(`../assets/${contact.img}`)" class="icon">
        <p class="label">{{contact.label}}</p>
    </a>
</template>
<script>
export default {
    name: "Contact",
    props: [
        'contact'
    ]    
}
</script>
<style lang="scss" scoped>
$size: 30px;
$padding: 5px;
$box-shadow: 0 5px 20px rgba(0,0,0,0.19), 0 3px 6px rgba(0,0,0,0.23);
$box-shadow-highlight: 0 5px 30px rgba(0,0,0,0.19), 0 3px 15px rgba(0,0,0,0.23);

.contact{
    margin: 20px;
    display: block;
    z-index: 10;
    width: $size;
    height: $size;
    padding: $padding;
}
.icon{
    width: $size;
    height: $size;
    margin: 0px;
    border-width: 0px;
    padding: $padding;
    border-radius: ($size / 2);
    background-color: white;
    box-shadow: $box-shadow;
    transition: 0.1s;
    cursor: pointer;
    z-index: 11;
}
.overlay{
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: ($size / 2);
    background-color: rgba(64, 55, 105, 0.5);
    z-index: 12;
    &:hover{
        opacity: 0;
    }
    &:hover ~ .icon{
        box-shadow: $box-shadow-highlight;
        padding: 1.2*$padding;
    }
    &:hover ~ .label{
        visibility: visible;
        opacity: 1;
    }
}
.label{
    background-color: white;
    border-radius: 4px;
    padding: 4px;
    width: auto;
    position: absolute;
    left: $size+3*$padding;
    padding-left: $padding;
    top: 1px;
    z-index: 9;
    font-size: 0.9rem;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;   
    -webkit-transition: opacity 600ms, visibility 600ms;
    transition: opacity 600ms, visibility 600ms;
}

</style>
