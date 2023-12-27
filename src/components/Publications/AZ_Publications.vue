<template>
    <div class="flex w-full h-fit gap-64 justify-center items-center pt-24">   
 
        <div class="flex flex-col h-fit w-full gap-8 drop-shadow-AZ rounded-lg px-16 py-8">
            
            <AZ_H1 data-aos="fade-up" data-aos-delay="50">
                <Waypoint @change="onChange"> Publications </Waypoint>
            </AZ_H1>
            
            <div class="relative flex flex-col w-full gap-8">

                <AZ_Line data-aos="fade-up" data-aos-delay="100"/>

                <div data-aos="fade-up" data-aos-delay="150" class="flex flex-col text-slate-300 text-justify gap-3 max-w-3xl">
                    I have contributed to several publications, showcasing my expertise in various aspects of technology. 
                </div>

                <div class="flex flex-row flex-wrap w-full">
                    <AZ_Publication class="w-1/3 h-[492px]" data-aos="fade-right" :data-aos-delay="200+(i*100)%300"  v-for="publication, i in publications" :publication="publication"/>
                </div>

            </div>
        </div >

    </div>   
</template>

<script>
import AZ_Line from '@/components/Global/AZ_Line.vue';
import AZ_H1 from '@/components/Global/AZ_H1.vue';
import { Waypoint } from "vue-waypoint";
import { useGlobalStore } from '@/stores/globalStore';
import { publications } from "@/stores/publications.js";
import AZ_Publication from '@/components/Publications/AZ_Publication.vue';

export default {
    name: "AZ_Publications",
    components: { AZ_Line, AZ_H1, Waypoint, AZ_Publication },
    setup() {
        const globalStore = useGlobalStore();
        const onChange = (waypointState) => {
            if (waypointState.going == "IN") {
                globalStore.itemActive = "Publications"
            }
        };

      return { onChange, globalStore, publications };
    },
};
</script>