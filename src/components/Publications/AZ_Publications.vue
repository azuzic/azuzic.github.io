<template>
    <div class="flex w-full h-fit gap-64 justify-center items-center">   
 
        <div class="flex flex-col h-fit w-full gap-8 drop-shadow-AZ rounded-lg px-16 py-8">
            
            <AZ_H1 data-aos="fade-up" data-aos-delay="50">
                <Waypoint @change="onChange"> Publications </Waypoint>
            </AZ_H1>
            <div class="relative flex flex-col h-96 w-full gap-8">
                <AZ_Line data-aos="fade-up" data-aos-delay="100"/>
                <div v-false  data-aos="fade-up" data-aos-delay="150" class="flex flex-col text-slate-300 text-justify gap-3 max-w-4xl">

                </div>
                <div class="flex flex-col gap-6 w-full pb-64">
                    
                </div>
            </div>
        </div >

    </div>   
</template>

<script>
import AZ_Line from '@/components/Global/AZ_Line.vue';
import AZ_H1 from '@/components/Global/AZ_H1.vue';
import AZ_Project from '@/components/Projects/AZ_Project.vue';
import { Waypoint } from "vue-waypoint";
import { useGlobalStore } from '@/stores/globalStore';
import { projects } from "@/stores/projects.js";

export default {
    name: "AZ_Publications",
    components: { AZ_Line, AZ_H1, Waypoint, AZ_Project },
    setup() {
        const globalStore = useGlobalStore();
        const onChange = (waypointState) => {
            if (waypointState.going == "IN") {
                globalStore.itemActive = "Publications"
            }
        };

      return { onChange, globalStore, projects };
    },
};
</script>