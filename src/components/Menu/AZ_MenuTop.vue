<script setup>
import { useGlobalStore } from '@/stores/globalStore'
const globalStore = useGlobalStore()
</script>

<template>
    <div class="flex justify-center sm:justify-start lg:justify-around xl:justify-start items-center px-8 xl:px-16 gap-0 xl:gap-16 pt-1 | transition-all duration-500
        w-full h-16 bg-slate-950 bg-opacity-60 hover:bg-opacity-80 fixed top-0 z-[1000] drop-shadow-md">
    
        <AZ_MenuName/>
        
        <div class="hidden sm:flex justify-center items-center h-full gap-6 xl:gap-8 px-4 | relative -top-16 lg:-top-0 | transition-all duration-500">
            <a @click="scroll(item.name)" v-for="item in items" class="flex gap-2 items-center group | transition-all duration-500">
                <i class="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-AZ_from to-AZ_to" 
                :class="[item.icon, globalStore.itemActive == item.name ? 'hue-rotate-180' : '']"></i>
                <div class="h-min flex flex-col mt-1 items-center | cursor-pointer | text-sm uppercase font-bold relative | transition-all duration-300"
                    :class="globalStore.itemActive == item.name ? 'tracking-widest' : 'group-hover:tracking-widest'">
                    {{ item.name }}
                    <div class="h-[3px] mt-0.5 w-0 | rounded-full | bg-gradient-to-r from-AZ_from to-AZ_to opacity-0 | transition-all duration-300"
                    :class="globalStore.itemActive == item.name ? 'w-full opacity-100 hue-rotate-180' : 'group-hover:w-full group-hover:opacity-100'"></div>
                </div>
            </a>
        </div>

    </div>
</template>
<script>
import AZ_MenuName from '@/components/Menu/AZ_MenuName.vue';

export default {
    name: "AZ_MenuTop",
    components: { AZ_MenuName },
    props: { items: Array },
    methods: {
        async scroll(id) {
            document.getElementById(id).scrollIntoView({ behavior: "smooth", });
        },
    }
}
</script>