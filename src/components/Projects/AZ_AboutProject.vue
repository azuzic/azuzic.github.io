<template>
    <!--ABOUT PROJECT-->
    <MqResponsive class="flex flex-col grow h-fit w-full absolute top-56">
        <div class="absolute w-full h-full bg-slate-950 drop-shadow-AZ rounded-b -z-10 transition-all duration-300"
            :class="expandedTrophies ? 'opacity-90' : 'opacity-20 group-hover/bg:opacity-40'">

        </div>
        
        <div class="flex justify-between grow p-4 z-50">
            <!--ABOUT-->
            <div class="text-base text-AZ_from mt-2"> About
                <i v-if="this.element.scrollHeight > 128" @click="expand" :class="expandedTrophies ? '-scale-100' : ''" 
                class="fa-solid fa-caret-down text-sm mb-1 cursor-pointer hover:text-AZ_from_inverted | transition-all duration-150"></i>
            </div> 
        </div>

        <!--ABOUT TEXT-->
        <div class="flex px-4 grow overflow-auto | transition-all duration-300 text-sm z-50 font-light" :ref="project.name">
            {{ project.about }}
        </div>

        <div class="p-4 flex gap-2 w-full justify-between items-center">
            <a v-if="project.sourceCode" :href="project.sourceCode" target="_blank">
                <AZ_Button zclass="py-1 px-2 group flex justify-center items-center hover:gap-1 transition-all duration-500">
                    <i class="fa-brands fa-github text-lg"></i>
                    <div class="group-hover:w-28 w-0 whitespace-nowrap overflow-hidden transition-all duration-500">Source Code</div>
                </AZ_Button>
            </a>
            <a v-if="project.webPage" :href="project.webPage" target="_blank">
                <AZ_Button zclass="py-1 px-2 group flex justify-center items-center hover:gap-1 transition-all duration-500">
                    <div class="group-hover:w-[88px] w-0 whitespace-nowrap overflow-hidden transition-all duration-500">Web Page</div>
                    <i class="fa-solid fa-link text-lg"></i>
                </AZ_Button>
            </a>
        </div>

    </MqResponsive>
</template>

<script>
import AZ_Line from '@/components/Global/AZ_Line.vue';
import { MqResponsive } from "vue3-mq";
import AZ_Button from '@/components/Global/AZ_Button.vue';

export default {
    name: "AZ_AboutProject",
    components: { MqResponsive, AZ_Line, AZ_Button },
    props: { project: Object },
    data() { return { expandedTrophies: false, height: 128, element: Object } },
    async mounted() {
        this.element = this.$refs[this.project.name];
        if (this.element != undefined) this.element.style.height = '128px';
    },
    methods: {
        expand() {
            this.expandedTrophies = !this.expandedTrophies;

            const element = this.$refs[this.project.name];
            const initialHeight = this.height;
            const targetHeight = this.expandedTrophies ? element.scrollHeight : 128;

            const duration = element.scrollHeight;
            const heightChangePerFrame = 1000; 

            const changeHeight = () => {
                if (
                    (this.expandedTrophies && (this.height < targetHeight)) ||
                    (!this.expandedTrophies && this.height > targetHeight)
                ) {
                    this.height += heightChangePerFrame;
                    this.height = this.height < 128 ? 128 : this.height;
                    this.height = this.height > targetHeight ? targetHeight : this.height;
                    element.style.height = this.height + 'px';

                    requestAnimationFrame(changeHeight);
                }
            };
            changeHeight();
        }
    }
}
</script>