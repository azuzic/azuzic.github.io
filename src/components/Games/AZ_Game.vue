<script setup>
import { useGlobalStore } from '@/stores/globalStore'
import { images } from "@/stores/images.js";
</script>
<template> 
    <div class="flex flex-col relative">

        <div class="relative flex h-full w-full rounded-lg overflow-hidden group gap-2 md:gap-3" :class="reverse%2==0 ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'">
            
            <!-- BG -->
            <div class="absolute hover:drop-shadow-lg transition-all duration-500 rounded-lg w-full h-full -z-10"></div>

            <!-- TITLE -->
            <div class="flex md:hidden w-full rounded-lg transition-all duration-500 bg-slate-950 bg-opacity-25 group-hover:bg-opacity-40">
                <div class="text-3xl text-AZ_to py-2 px-4 flex font-extrabold text-transparent
                    bg-clip-text bg-gradient-to-r from-AZ_from to-AZ_to tracking-wide">
                    {{ game.title }}
                </div> 
            </div>

            <!-- CAROUSEL -->
            <div class="h-64 md:h-96 w-full md:w-1/2 rounded-lg overflow-hidden relative group/engine">
                <carousel class="relative h-full lex justify-center items-center" :items-to-show="1" :wrapAround="true" :autoplay="(4000+(reverse*1000)%3000)" :dir="reverse%2==0 ? 'ltr' : 'rtl'" :transition="2000" :mouseDrag="false" :touchDrag="false" >
                    <slide v-for="slide in images.Carousel[game.images]" :key="slide">
                        <div class="bg-red-300 bg-opacity-25 h-64 md:h-96 w-[1282px]"
                            style="background-repeat: no-repeat; background-size: cover;"
                            :style="'background-image: url('+slide+');'">
                        </div>
                    </slide>                   
                    <template #addons>
                        <pagination/>
                    </template>
                </carousel>
                <div class="absolute bg-slate-950 bg-opacity-75 transition-all duration-500 rounded-lg h-full w-full pointer-events-none
                    z-50 top-0 left-0 flex justify-center items-center opacity-0 group-hover/engine:opacity-100 border-3 border-AZ_to">
                    <div class="absolute bg-slate-200 bg-opacity-75 p-4 h-32 flex justify-center items-center w-full">
                        <img :src="images.GameEngine[game.engine]" class="h-full">
                    </div>
                </div>
            </div>
            
            <!-- BODY -->
            <div class="flex flex-col h-64 md:h-96 gap-2 md:gap-3 w-full md:w-1/2">

                <!-- TITLE -->
                <div class="hidden md:flex w-full rounded-lg transition-all duration-500 bg-slate-950 bg-opacity-25 group-hover:bg-opacity-40">
                    <div class="text-3xl text-AZ_to py-2 px-4 flex font-extrabold text-transparent
                        bg-clip-text bg-gradient-to-r from-AZ_from to-AZ_to tracking-wide">
                        {{ game.title }}
                    </div> 
                </div>

                <!-- DESCRIPTION -->
                <div class="hover:drop-shadow-lg transition-all duration-500 w-full grow p-4 font-light text-justify overflow-y-auto
                    bg-slate-950 bg-opacity-25 group-hover:bg-opacity-40 rounded-lg">
                    {{ game.description }}
                </div>

                <!-- BUTTONS -->
                <div class="hover:drop-shadow-lg transition-all duration-500 w-full h-fit p-4 bg-slate-950 bg-opacity-25 
                    group-hover:bg-opacity-40 rounded-lg flex justify-between items-center">

                    <a v-if="game.page" :href="game.page" target="_blank">
                        <AZ_Button v-if="game.download" zclass="py-1 px-2 group/item flex justify-center items-center transition-all duration-500 overflow-hidden">
                            <i class="fa-solid fa-gamepad text-lg group-hover/item:mr-1 transition-all duration-500"></i>
                            <div class="group-hover/item:w-[100px] w-0 whitespace-nowrap overflow-hidden transition-all duration-500 text-left">Game Page</div>
                        </AZ_Button>
                    </a>

                    <a v-if="game.download" :href="game.download" target="_blank">
                        <AZ_Button v-if="game.page" zclass="py-1 px-2 group/item flex justify-center items-center transition-all duration-500 overflow-hidden">
                            <div class="group-hover/item:w-32 w-0 whitespace-nowrap overflow-hidden transition-all duration-500 text-right">Download Link</div>
                            <i class="fa-solid fa-download text-lg group-hover/item:ml-1 transition-all duration-500"></i>
                        </AZ_Button>
                    </a>

                </div>            

            </div>

        </div>     
    </div>
</template>

<script>
import AZ_Button from '@/components/Global/AZ_Button.vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
    name: "AZ_Game",
    components: { 
        AZ_Button,
        Carousel,
        Slide,
        Pagination,
        Navigation, 
    },
    props: { game: Object, reverse: Number },
}
</script>

<style lang="scss">
.carousel__pagination-button {
    display: block;
    z-index: 500;
    width: 12px;
    height: 12px;
    background: rgb(52,211,153) !important;
    background: linear-gradient(90deg, rgba(52,211,153,1) 0%, rgba(34,211,238,1) 100%) !important;
    opacity: 25%;
    margin-left: 4px;
    margin-right: 4px;
    border-radius: 100%;
    filter: drop-shadow(0px 0px 2px black);
        transition: all 150ms ease-in-out !important;
    &:hover {
        opacity: 50%;
        transition: all 150ms ease-in-out !important;
    }
}
.carousel__pagination-button--active {
    background: rgb(255,135,193) !important;
    background: linear-gradient(90deg, rgba(255,135,193,1) 0%, rgba(255,139,113,1) 100%) !important;
    opacity: 100%;
    scale: 125%;
        transition: all 300ms ease-in-out !important;
    &:hover {
        opacity: 100%;
        transition: all 150ms ease-in-out !important;
    }
}
.carousel__pagination-button::after {
    display: none;
}
.carousel__track {
    height: 100%;
}
.carousel__pagination {
    width: 100%;
    position: absolute;
    z-index: 50;
    bottom: 16px;
    z-index: 500;
}
.carousel__viewport {
    height: 100% !important;
}
</style>