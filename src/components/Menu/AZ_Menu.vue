<template>
    <div data-aos="fade-down" class="flex items-center px-16 gap-16 pt-1 | w-full h-16 bg-slate-950 bg-opacity-60 hover:bg-opacity-80 fixed top-0 z-[1000] drop-shadow-md | transition-all duration-300">
    
        <AZ_MenuName/>
        <AZ_MenuItems/>

    </div>
</template>
<script>
import AZ_MenuItems from '@/components/Menu/AZ_MenuItems.vue';
import AZ_MenuName from '@/components/Menu/AZ_MenuName.vue';

export default {
    name: "AZ_Menu",
    components: { AZ_MenuItems, AZ_MenuName }
}
</script>