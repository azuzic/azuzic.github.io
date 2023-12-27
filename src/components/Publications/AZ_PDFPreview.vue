<script setup>
import { useGlobalStore } from '@/stores/globalStore'
const globalStore = useGlobalStore()
</script>

<template>
    <div class="flex fixed justify-center items-center top-0 bottom-0 w-full h-full z-[10000] p-4 transition-all duration-500"
        :class="globalStore.file ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'">
        <div class="bg-slate-950 bg-opacity-75 fixed top-0 bottom-0 z-10 w-full h-full"  @click="globalStore.file = ''"></div>
        <embed :src="globalStore.file" class="bottom-0 h-full z-20 rounded-lg
            w-full lg:w-5/6 xl:w-4/5 2xl:w-3/4 3xl:w-1/2 transition-all duration-500"/>
    </div>
</template>
<script>
export default {
    name: "AZ_PDFPreview",
};
</script>