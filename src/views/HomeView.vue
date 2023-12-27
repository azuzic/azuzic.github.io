<template>
    <div id="About me" class="flex flex-col w-full h-full items-center justify-start py-48 px-64 gap-24">

        <AZ_AboutMe/>  
        
        <AZ_Projects class="z-50" id="Projects"/>

        <AZ_Publications id="Publications"/>

        <AZ_Games id="Games"/>

    </div>
</template>

<script>
import AZ_AboutMe from '@/components/About/AZ_AboutMe.vue';
import AZ_Projects from '@/components/Projects/AZ_Projects.vue';
import AZ_Publications from '@/components/Publications/AZ_Publications.vue';
import AZ_Games from '@/components/Games/AZ_Games.vue';

export default {
    name: "Home",
    components: { AZ_AboutMe, AZ_Projects, AZ_Publications, AZ_Games }
};
</script>