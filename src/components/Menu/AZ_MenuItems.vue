<script setup>
import { useGlobalStore } from '@/stores/globalStore'
const globalStore = useGlobalStore()
</script>
<template>
    <div class="flex justify-center items-center h-full gap-8 px-4">
        <a @click="scroll(item.name)" v-for="item in items" class="flex gap-2 items-center group | transition-all duration-300">
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
</template>

<script>
export default {
    name: "AZ_MenuItems",
    data() {
        return {
            items: [
                { 
                    name: "About me", 
                    icon: "fa-solid fa-user",
                },
                { 
                    name: "Projects", 
                    icon: "fa-solid fa-list-check",
                },
                { 
                    name: "Publication", 
                    icon: "fa-solid fa-book",
                },
                { 
                    name: "Games", 
                    icon: "fa-solid fa-gamepad",
                }
            ]
        }
    },
    methods: {
        async scroll(id) {
            document.getElementById(id).scrollIntoView({ behavior: "smooth", });
        },
    }
}
</script>