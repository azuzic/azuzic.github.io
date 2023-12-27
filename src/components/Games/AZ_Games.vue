<template>
    <div class="flex w-full h-fit gap-64 justify-center items-center pt-24">   
 
        <div class="flex flex-col h-fit w-full gap-8 drop-shadow-AZ rounded-lg px-16 py-8">
            
            <AZ_H1 data-aos="fade-up" data-aos-delay="50">
                <Waypoint @change="onChange"> Games </Waypoint>
            </AZ_H1>

            <div class="relative flex flex-col w-full gap-8">

                <AZ_Line data-aos="fade-up" data-aos-delay="100"/>

                <div data-aos="fade-up" data-aos-delay="150" class="flex flex-col text-slate-300 text-justify gap-3 max-w-3xl">
                    As a hobbyist, I've crafted few games utilizing various game engines, showcasing my passion for game development.
                </div>

                <div class="flex flex-col w-full gap-8">
                    
                    <AZ_Game v-for="game, i in games" :game="game" :reverse="i" :data-aos="i%2==0 ? 'fade-right' : 'fade-left'" :data-aos-delay="100"/>

                </div>

            </div>
        </div >

    </div>   
</template>

<script>
import AZ_Line from '@/components/Global/AZ_Line.vue';
import AZ_H1 from '@/components/Global/AZ_H1.vue';
import AZ_Game from '@/components/Games/AZ_Game.vue';
import { Waypoint } from "vue-waypoint";
import { useGlobalStore } from '@/stores/globalStore';
import { games } from "@/stores/games.js";

export default {
    name: "AZ_Publications",
    components: { AZ_Line, AZ_H1, Waypoint, AZ_Game },
    setup() {
        const globalStore = useGlobalStore();
        const onChange = (waypointState) => {
            if (waypointState.going == "IN") {
                globalStore.itemActive = "Games"
            }
        };

      return { onChange, globalStore, games };
    },
};
</script>