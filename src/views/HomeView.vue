<template>
    <div id="About me" class="flex flex-col w-full h-full items-center justify-start py-24 md:py-32 md2:py-48 | transition-all duration-500
        px-0 xs:px-12 sm:px-1 md:px-2 md2:px-4 lg:px-6 xl:px-24 2xl:px-52 3xl:px-64">

        <AZ_AboutMe/>  
        
        <AZ_Projects class="z-50" id="Projects"/>

        <AZ_Publications id="Publications"/>

        <AZ_Games id="Games"/>
    	
        <AZ_ContactUsView class="pb-24" id="Contact"/>
        

    </div>
</template>

<script>
import AZ_AboutMe from '@/components/About/AZ_AboutMe.vue';
import AZ_Projects from '@/components/Projects/AZ_Projects.vue';
import AZ_Publications from '@/components/Publications/AZ_Publications.vue';
import AZ_Games from '@/components/Games/AZ_Games.vue';
import AZ_ContactUsView from '@/components/Contact/AZ_ContactUsView.vue';

export default {
    name: "Home",
    components: { AZ_AboutMe, AZ_Projects, AZ_Publications, AZ_Games, AZ_ContactUsView }
};
</script>