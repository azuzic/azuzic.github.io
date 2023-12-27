<script setup>
import { useGlobalStore } from '@/stores/globalStore'
import { images } from "@/stores/images.js";
import { tools } from "@/stores/projects.js";
const globalStore = useGlobalStore()
</script>
<template> 
    <div class="flex flex-col gap-3 px-1.5 group/bg">
        <div class="flex flex-col z-10 relative hover:drop-shadow-lg transition-all duration-300">         

             <!--PROJECT TITLE-->
            <div class="absolute flex grow min-h-[56px] max-h-14 w-full bg-slate-950 bg-opacity-50 rounded-t overflow-x-auto overflow-y-hidden">
                <div class="text-xl text-AZ_to p-3 flex font-extrabold text-transparent h-full mt-1 whitespace-nowrap
                    bg-clip-text bg-gradient-to-r from-AZ_from to-AZ_to tracking-wide">
                    {{ project.name }}
                </div> 
            </div>

            <!--PROJECT IMAGE-->
            <div class="h-44 aspect-video bg-center bg-cover hover:rounded group relative transition-all duration-300 z-10 mt-14" 
                :style="'background-image: url(' + images.Projects[project.name.replace(/[\s-]/g, '')] + ')'">

                <div class="bg-slate-950 w-full h-full absolute -z-10 top-0 left-0 border-3 bg-opacity-0 group-hover:bg-opacity-75 rounded
                    border-AZ_from border-opacity-0 group-hover:border-opacity-75 transition-all duration-300">
                </div>

                <!--PROJECT TOOLS-->
                <div class="absoulute flex flex-col gap-1 z-50 p-2 | justify-center items-center whitespace-nowrap |
                        opacity-0 group-hover:opacity-100 transition-all duration-500 | top-0 left-0 w-full h-full">
    
                    <div class="flex flex-wrap gap-2 text-sm text-MQ_light justify-center items-center"> 
                        <a :href="tools[tool]" target="_blank" v-for="tool in project.tools" class="text-AZ_to flex gap-0.5 justify-center items-center
                            bg-slate-950 p-1 rounded bg-opacity-75 hover:scale-110 transition-all duration-300 cursor-pointer |
                            border border-AZ_to border-opacity-50">
                            <img class="h-5" :src="images.Tools[tool]" alt="">
                        </a>
                    </div>

                </div>
            
            </div>

            <!--PROJECT ABOUT-->
            <AZ_AboutProject target="md2+" :project="project"/>

            <AZ_AboutProject target="md-" :project="project"/>
        </div>
    </div>
</template>

<script>
import AZ_AboutProject from  "@/components/Projects/AZ_AboutProject.vue"
export default {
    name: "AZ_Project",
    components: { AZ_AboutProject },
    props: { project: Object, i: Number },
}
</script>