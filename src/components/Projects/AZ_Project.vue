<script setup>
import { useGlobalStore } from '@/stores/globalStore'
import { images } from "@/stores/images.js";
import { tools } from "@/stores/projects.js";
const globalStore = useGlobalStore()
</script>
<template> 
    <div class="flex flex-col gap-3 w-full z-10">
        <div class="flex flex-row gap-3 w-full z-10 relative">                   
            <!--PROJECT IMAGE-->
            <div class="w-full md2:w-auto sm:h-44 aspect-video z-20 bg-center bg-cover rounded cursor-pointer 
                border-3 border-AZ_from border-opacity-0 hover:border-opacity-100 transition-all duration-300 hover:brightness-90" 
                :style="'background-image: url(' + images.Projects[project.name.replace(/ /g,'')] + ')'"></div>

            <div class="flex flex-col grow gap-3">

                <!--PROJECT DATA-->
                <div class="flex grow min-h-[60px] flex-col md2:flex-row justify-between items-start relative md2:items-center">
                    <div class="absolute w-full h-full bg-slate-950 opacity-25 drop-shadow-AZ rounded -z-10"></div>
                    <div class="text-xl text-MQ_lighter p-3 flex items-center">{{ project.name }}</div>

                    <div class="flex flex-col gap-1 md2:grow p-3 justify-center whitespace-nowrap">
                        <div class="flex justify-end gap-4 text-sm text-MQ_light md2:text-right"> 
                            <a :href="tools[tool]" v-for="tool in project.tools" class="text-AZ_to flex gap-0.5 justify-center items-center">
                                <img class="h-5 hover:scale-110 transition-all duration-300" :src="images.Tools[tool]" alt="">
                            </a>
                        </div>
                    </div>
                </div>

                <AZ_AboutProject target="md2+" :project="project"/>

            </div>

            <AZ_AboutProject target="md-" :project="project"/>
        </div>
    </div>
</template>

<script>
import AZ_AboutProject from  "@/components/Projects/AZ_AboutProject.vue"
export default {
    name: "AZ_Project",
    components: { AZ_AboutProject },
    props: { project: Object },
}
</script>