<script setup>
import { useGlobalStore } from '@/stores/globalStore'
const globalStore = useGlobalStore()
</script>
<template> 
    <div class="flex flex-col gap-3 p-1.5 h-[492px] relative">

        <div class="relative h-full w-full rounded-lg overflow-hidden group">
            
            <!-- BG -->
            <div class="absolute hover:drop-shadow-lg transition-all duration-500 bg-slate-950 bg-opacity-25 
                border-AZ_to border-2 rounded-lg w-full h-full bgimg
                group-hover:bg-opacity-40"></div>
            <div class="absolute top-0 right-0 bg-slate-950 bg-opacity-50 h-[20%] w-[20%] border-AZ_to rounded-bl-lg  border-2 z-50 bgimg2
                transition-all duration-500"></div>
            <!-- TITLE -->
            <div class="absolute flex grow w-4/5 mt-0.5 ml-0.5 h-1/5 rounded bg-slate-950 bg-opacity-40 rounded-t overflow-y-auto">
                <div class="text-lg text-AZ_to px-5 pt-1 flex font-extrabold text-transparent h-fit mt-1
                    bg-clip-text bg-gradient-to-r from-AZ_from to-AZ_to tracking-wide">
                    {{ publication.title }}
                </div> 
            </div>

            <!-- ABSTRACT -->
            <div class="absolute bottom-0  px-9 pt-10 mb-20 text-sm text-justify font-light overflow-hidden line-clamp-[14]" :ref="publication.title">
                &nbsp&nbsp&nbsp&nbsp {{ publication.abstract }}
            </div>

            <embed v-if="false" :src="publication.file+'#view=FitH'" class="absolute bottom-0 h-5/6 w-full pt-4 px-0.5 mb-0.5 rounded-lg 
                opacity-0 group-hover:opacity-60 transition-all duration-500" />

            <a v-if="publication.link" :href="publication.link" target="_blank">
                <AZ_Button zclass="py-1 px-2 group/item flex justify-center items-center transition-all duration-500 absolute bottom-5 left-5 overflow-hidden">
                    <i class="fa-solid fa-link text-lg group-hover/item:mr-1 transition-all duration-500"></i>
                    <div class="group-hover/item:w-36 w-0 whitespace-nowrap overflow-hidden transition-all duration-500">Publication Link</div>
                </AZ_Button>
            </a>
            <AZ_Button v-if="publication.file && false" @click="downloadPublication" zclass="py-1 px-2 group/item flex justify-center items-center transition-all duration-500 absolute bottom-5 right-5 overflow-hidden">
                <div class="group-hover/item:w-48 w-0 whitespace-nowrap overflow-hidden transition-all duration-500 text-right">Download Publication</div>
                <i class="fa-solid fa-file-arrow-down text-lg group-hover/item:ml-1 transition-all duration-500"></i>
            </AZ_Button>
            <AZ_Button @click="globalStore.file = publication.file" zclass="py-1 px-2 group/item flex justify-center items-center transition-all duration-500 absolute bottom-5 right-5 overflow-hidden">
                <div class="group-hover/item:w-16 w-0 whitespace-nowrap overflow-hidden transition-all duration-500 text-right">Expand</div>
                <i class="fa-solid fa-expand text-lg group-hover/item:ml-1 transition-all duration-500"></i>
            </AZ_Button>

        </div>     
    </div>
</template>

<script>
import AZ_Button from '@/components/Global/AZ_Button.vue';

export default {
    name: "AZ_Publication",
    components: { AZ_Button },
    props: { publication: Object },
    methods: {
        async downloadPublication() {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', this.publication.file, true);
                xhr.responseType = 'blob';

                xhr.addEventListener('progress', (event) => {
                    if (event.lengthComputable) {
                        const percentComplete = (event.loaded / event.total) * 100;
                        console.log(`Download progress: ${percentComplete.toFixed(2)}%`);
                    } else {
                        console.log('Download progress: Length not computable.');
                    }
                });

                xhr.addEventListener('load', () => {
                    if (xhr.status === 200) {
                        const blob = xhr.response;
                        const url = URL.createObjectURL(blob);

                        const link = document.createElement('a');
                        link.href = url;
                        link.download = this.publication.title + '.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);

                        // Release the object URL when done
                        URL.revokeObjectURL(url);
                    } else {
                        console.error(`Failed to download. Status: ${xhr.status}`);
                    }
                });

                xhr.addEventListener('error', () => {
                    console.error('Error downloading publication.');
                });

                xhr.send();
            } catch (error) {
                console.error('Error downloading publication:', error);
            }
        }
    }
}
</script>

<style scoped>
.bgimg {
    clip-path: polygon(
    0 0%,
    0% 0,
    80% 0,
    100% 20%,
    100% 20%,
    100% 100%,
    0% 100%,
    0% 100%,
    0% 100%
  )
}
.bgimg2 {
    clip-path: polygon(
    0 0%,
    0% 0,
    0% 0,
    100% 100%,
    100% 20%,
    100% 100%,
    0% 100%,
    0% 100%,
    0% 100%
  )
}
</style>