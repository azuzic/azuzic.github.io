<template>
    <div class="flex w-full h-fit gap-64 justify-center items-center">   

        <div class="flex flex-col h-fit gap-8 drop-shadow-AZ rounded-lg px-16 py-8">
             
            <AZ_H1 data-aos="fade-up" data-aos-delay="50">
                <Waypoint @change="onChange"> Alesandro Žužić </Waypoint>
            </AZ_H1>
            <div class="relative flex flex-col h-96 gap-8">
                <AZ_Line data-aos="fade-up" data-aos-delay="100"/>
                <AZ_AboutText data-aos="fade-up" data-aos-delay="200" class="px-8"/>
                
                <div data-aos="fade-up" data-aos-delay="250">
                    <div class="transition-all duration-300 py-1.5 px-4 rounded-xl font-extrabold text-lg text-slate-950 
                        bg-gradient-to-r from-AZ_from to-AZ_to tracking-wide hover:scale-105 w-fit
                        hover:hue-rotate-180  cursor-pointer">
                        <i class="fa-solid fa-file-arrow-down mr-2"></i> Download CV
                    </div>
                </div>
                
                
            </div>
        </div >

        <AZ_Avatar data-aos="zoom-in" data-aos-delay="400"/>

    </div>   
</template>

<script>
import AZ_Line from '@/components/Global/AZ_Line.vue';
import AZ_H1 from '@/components/Global/AZ_H1.vue';
import AZ_AboutText from '@/components/About/AZ_AboutText.vue';
import AZ_Avatar from '@/components/About/AZ_Avatar.vue';
import { Waypoint } from "vue-waypoint";
import { useGlobalStore } from '@/stores/globalStore';

export default {
    name: "AZ_AboutMe",
    components: { AZ_Line, AZ_H1, AZ_AboutText, AZ_Avatar, Waypoint },
    setup() {
        const globalStore = useGlobalStore();
        const onChange = (waypointState) => {

        if (waypointState.going == "IN") {
            globalStore.itemActive = "About me"
        }
      };

      return { onChange, globalStore };
    },
};
</script>