<template>
    <div class="relative flex h-96 aspect-square drop-shadow-AZ bg-slate-950 bg-opacity-20 rounded-3xl mt-24">
        <AZ_Line class="absolute scale-90"/>
        <AZ_Line class="absolute scale-90 left-1/2 bottom-1/2 rotate-90"/>
        <img class="rendering-pixelated p-8"
            :src="AvatarImg" alt="">
        <AZ_Line class="absolute scale-90 bottom-0"/>
        <AZ_Line class="absolute scale-90 right-1/2 bottom-1/2 rotate-90"/>
    </div>
    </template>

<script>
import AvatarImg from "@/assets/avatar.png";
import AZ_Line from "@/components/Global/AZ_Line.vue";
export default {
    name: "AZ_Avatar",
    setup() {
        return { AvatarImg };
    },
    components: { AZ_Line }
}
</script>