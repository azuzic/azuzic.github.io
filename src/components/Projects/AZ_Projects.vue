<template>
    <AZ_Block>
        <AZ_H1 data-aos="fade-up" data-aos-delay="50">
            <Waypoint @change="onChange"> Projects </Waypoint>
        </AZ_H1>
        
        <div class="relative flex flex-col w-full gap-8">

            <AZ_Line data-aos="fade-up" data-aos-delay="100"/>

            <div  data-aos="fade-up" data-aos-delay="150" class="flex flex-col text-slate-300 text-justify gap-3 max-w-3xl px-8 md:px-0  transition-all duration-500">
                I have extensive experience working on diverse projects, covering both backend and frontend development. 
                My skills include crafting websites, applications, and various software solutions.
            </div>

            <div class="flex flex-row flex-wrap justify-start w-full z-10">
                <AZ_Project data-aos="fade-right" :data-aos-delay="100+(i*50)%400" v-for="project, i in projects" :project="project" 
                :style="'z-index: ' + -i*10 + ';'" class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 h-[492px]" />
            </div>

        </div>
    </AZ_Block>  
</template>

<script>
import AZ_Line from '@/components/Global/AZ_Line.vue';
import AZ_H1 from '@/components/Global/AZ_H1.vue';
import AZ_Project from '@/components/Projects/AZ_Project.vue';
import { Waypoint } from "vue-waypoint";
import { useGlobalStore } from '@/stores/globalStore';
import { projects } from "@/stores/projects.js";
import AZ_Block from '@/components/Global/AZ_Block.vue';

export default {
    name: "AZ_Projects",
    components: { AZ_Line, AZ_H1, Waypoint, AZ_Project, AZ_Block },
    setup() {
        const globalStore = useGlobalStore();
        const onChange = (waypointState) => {
            if (waypointState.going == "IN") {
                globalStore.itemActive = "Projects"
            }
        };

      return { onChange, globalStore, projects };
    },
};
</script>