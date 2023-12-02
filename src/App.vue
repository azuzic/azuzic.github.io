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
