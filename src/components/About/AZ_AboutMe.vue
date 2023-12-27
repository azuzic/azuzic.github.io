<template>
    <div class="flex w-full h-fit justify-center lg:justify-between">   

        <div class="flex flex-col h-fit gap-8 drop-shadow-AZ rounded-lg transition-all duration-500  items-center
        px-4 md:px-6 lg:px-12 xl:px-16 py-8 w-[762px]">
             
            <AZ_H1 data-aos="fade-up" data-aos-delay="50">
                <Waypoint @change="onChange" class="transition-all duration-500"> Alesandro Žužić </Waypoint>
            </AZ_H1>
            
            <AZ_Avatar data-aos="zoom-in" data-aos-delay="400" class="lg:hidden | transition-all duration-500
                md:h-96 md:w-96 md:min-w-[384px] md:min-h-[384px]
                h-64 w-64 min-w-[256px] min-h-[256px] " />
            <div class="relative flex flex-col gap-8 | items-center md:items-start | transition-all duration-500">
                <AZ_Line data-aos="fade-up" data-aos-delay="100"/>
                <AZ_AboutText data-aos="fade-up" data-aos-delay="200" class="px-8"/>
                
                <AZ_Button @click="downloadCV" data-aos="fade-up" data-aos-delay="250" zclass="py-1.5 px-4 text-lg hover:scale-110">
                    <i class="fa-solid fa-file-arrow-down mr-2"></i> Download CV
                </AZ_Button>
                
            </div>
        </div >

        <AZ_Avatar class="mt-28 xl:mt-32 h-96 w-96 min-w-[384px] min-h-[384px] hidden lg:flex" data-aos="zoom-in" data-aos-delay="400"/>

    </div>   
</template>

<script>
import AZ_Line from '@/components/Global/AZ_Line.vue';
import AZ_H1 from '@/components/Global/AZ_H1.vue';
import AZ_AboutText from '@/components/About/AZ_AboutText.vue';
import AZ_Avatar from '@/components/About/AZ_Avatar.vue';
import { Waypoint } from "vue-waypoint";
import { useGlobalStore } from '@/stores/globalStore';
import AZ_Button from '@/components/Global/AZ_Button.vue';
import pdfFile from '@/assets/CV-(Alesandro Žužić)-[05.11.2023.].pdf';

export default {
    name: "AZ_AboutMe",
    components: { AZ_Line, AZ_H1, AZ_AboutText, AZ_Avatar, Waypoint, AZ_Button },
    setup() {
        const globalStore = useGlobalStore();
        const onChange = (waypointState) => {

        if (waypointState.going == "IN") {
            globalStore.itemActive = "About me"
        }
      };
      return { onChange, globalStore };
    },
    methods: {
        downloadCV() {
            const link = document.createElement('a');
            link.href = pdfFile;
            link.download = 'CV-(Alesandro Žužić)-[05.11.2023.].pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
};
</script>