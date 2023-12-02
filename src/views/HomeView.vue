<template>
    <div id="About me" class="flex flex-col w-full h-full items-center justify-start py-48 px-64 gap-48">

        <AZ_AboutMe/>  
        
        <AZ_Projects id="Projects"/>

    </div>
</template>

<script>
import AZ_AboutMe from '@/components/About/AZ_AboutMe.vue';
import AZ_Projects from '@/components/Projects/AZ_Projects.vue';

export default {
    name: "Home",
    components: { AZ_AboutMe, AZ_Projects }
};
</script>