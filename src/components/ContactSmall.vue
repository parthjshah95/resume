<template>
    <a class="contact-small" :href="contact.link" width="50px" height="50px">
        <img :src="require(`../assets/${contact.img}`)" class="icon-small">
    </a>
</template>
<script>
export default {
    name: "ContactSmall",
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

.contact-small{
    margin: 10px;
    display: inline;
    z-index: 10;
    width: $size;
    height: $size;
    padding: $padding;
}
.icon-small{
    width: $size;
    height: $size;
    display: inline;
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
// .overlay-small{
//     width: $size;
//     height: $size;
//     display: inline;
//     padding: $padding;
//     border-radius: ($size / 2);
//     background-color: rgba(64, 55, 105, 0.5);
//     z-index: 12;
//     &:hover{
//         opacity: 0;
//     }
//     &:hover ~ .icon{
//         box-shadow: $box-shadow-highlight;
//         padding: 1.2*$padding;
//         border-bottom-right-radius: 0px;
//     }
//     &:hover ~ .label{
//         visibility: visible;
//         opacity: 1;
//     }
// }
</style>
