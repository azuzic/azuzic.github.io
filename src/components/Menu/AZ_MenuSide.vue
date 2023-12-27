<script setup>
import { useGlobalStore } from '@/stores/globalStore'
const globalStore = useGlobalStore()
</script>
<template>
    <div class="fixed h-full z-[1000] top-0 flex flex-col justify-center | lg:-ml-16 | transition-all duration-300">
        <div class="flex flex-col">
            <div v-for="link, index in links" :key="link.title" @click="scroll(link.name)"
                class="h-min cursor-pointer group | transition-all duration-300">
                <div class="text-slate-200 text-sm h-min flex">

                    <div class="flex flex-col justify-center | group-hover:tracking-widest | group-hover:w-28 w-0 | whitespace-nowrap text-center overflow-hidden | 
                    bg-slate-950 bg-opacity-75 drop-shadow-md | -mr-2 | transition-all duration-300">  
                        <span class="transition-all duration-50 pl-2 flex justify-center">
                            <div class="w-fit flex flex-col font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-AZ_from to-AZ_to" 
                                :class="[globalStore.itemActive == link.name ? 'hue-rotate-180' : '']">
                                <div>{{ link.name }}</div>
                                <span class="h-[3px] | bg-AZ_to rounded-full | w-0 group-hover:w-full | opacity-0 group-hover:opacity-100 | transition-all duration-300"></span>
                            </div>
                        </span>
                    </div>

                    <div  v-if="index == 0" class="bg-slate-950 bg-opacity-75 drop-shadow-md mx-2 | rounded-tr-3xl | group-hover:rounded-br-md | transition-all duration-300">
                        <i :class="[link.icon, globalStore.itemActive == link.name ? 'hue-rotate-180' : '']"
                            class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-AZ_from to-AZ_to text-2xl p-2 w-12"></i>
                    </div>
                    <div v-else-if="index == links.length-1" class="bg-slate-950 bg-opacity-75 drop-shadow-md mx-2 | rounded-br-3xl | group-hover:rounded-tr-md | transition-all duration-300">
                        <i :class="[link.icon, globalStore.itemActive == link.name ? 'hue-rotate-180' : '']"
                            class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-AZ_from to-AZ_to text-2xl p-2 w-12"></i>
                    </div>
                    <div v-else="index == links.length - 1" class="bg-slate-950 bg-opacity-75 drop-shadow-md mx-2 | group-hover:rounded-r-md | transition-all duration-300">
                        <i :class="[link.icon, globalStore.itemActive == link.name ? 'hue-rotate-180' : '']"
                            class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-AZ_from to-AZ_to text-2xl p-2 w-12"></i>
                    </div>

                </div>
            </div> 
        </div>
    </div>
</template>

<script>
let wait = function (seconds) {
    return new Promise((resolveFn) => {
        setTimeout(resolveFn, seconds * 1000);
    });
};
export default {
    name: "AZ_MenuSide",
    props: { links: Array, },
    methods: {
        async scroll(id) {
            document.getElementById(id).scrollIntoView({ behavior: "smooth", });
        },
    }
};
</script>