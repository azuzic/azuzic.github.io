<template>
    <!--ABOUT PROJECT-->
    <MqResponsive class="flex flex-col grow relative h-fit">
        <div class="absolute w-full h-full bg-slate-950 opacity-20 drop-shadow-AZ rounded -z-10"></div>
        <div class="flex justify-between grow p-2">
            <!--ABOUT-->
            <div class="text-base text-AZ_from"> About 
                <i @click="expandedTrophies = !expandedTrophies" :class="expandedTrophies ? '-scale-100' : ''" 
                class="fa-solid fa-caret-down text-sm mb-1 cursor-pointer hover:text-slate-200 | transition-all duration-150"></i>
            </div> 
        </div>

        <!--ABOUT TEXT-->
        <div class="flex pb-2 px-2 grow overflow-auto | transition-all duration-500 text-sm" 
        :class="expandedTrophies ? 'h-40' : 'h-16'">
            {{ project.about }}
        </div>
    </MqResponsive>
</template>

<script>
import { MqResponsive } from "vue3-mq";

export default {
    name: "AZ_AboutProject",
    components: { MqResponsive },
    props: { project: Object },
    data() { return { expandedTrophies: false } }
}
</script>