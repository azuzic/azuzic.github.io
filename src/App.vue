<script setup>
import ComparisonofVidegame from '@/assets/Publications/Comparison of Videgame Development Environments.pdf';
import { useGlobalStore } from '@/stores/globalStore'
import { images } from "@/stores/images.js";
import { tools } from "@/stores/projects.js";
const globalStore = useGlobalStore()
</script>
<template>
	<div class="w-full h-full relative | transition-all duration-300 | Poppins text-slate-200">
		<AZ_BG/>

		<div class="min-h-full flex flex-col-reverse absolute w-full">
            <AZ_Menu/>

			<router-view class="" v-slot="{ Component, route }">
				<transition name="fade">
					<component
						class="absolute w-full h-full"
						:is="Component"
						:key="route.path" /> 
				</transition>
			</router-view>

            <div class="flex fixed justify-center items-center top-0 bottom-0 w-full h-full z-[10000] p-4 transition-all duration-500"
                :class="globalStore.file ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'">
                <div class="bg-slate-950 bg-opacity-75 fixed top-0 bottom-0 z-10 w-full h-full"  @click="globalStore.file = ''"></div>
                <embed :src="globalStore.file" class="bottom-0 h-full w-1/2 z-20 rounded-lg"/>
            </div>

		</div>

	</div>
</template>

<script>
import AZ_BG from '@/components/App/AZ_BG.vue';
import AZ_Menu from '@/components/Menu/AZ_Menu.vue';

export default {
    name: "App",
    components: { AZ_BG, AZ_Menu }
};
</script>
