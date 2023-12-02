
<template>
    <router-link to="/" class="waviy group">
        <div class="flex logo_font pt-1 pl-2 | transition-all duration-300">
            
            <div v-if="true" class="relative h-7 mr-2 group-hover:-translate-x-3 group-hover:scale-110 group-hover:hue-rotate-180 | transition-all duration-500">
                <div class="absolute bg-gradient-to-r from-AZ_from to-AZ_to w-[3px] h-7 rounded-full | transition-all duration-500
                    group-hover:-bottom-0.5 group-hover:rotate-[40deg] | -bottom-0 rotate-0"></div>

                <div class="absolute bg-gradient-to-r from-AZ_from to-AZ_to w-[3px] h-5 rounded-full | transition-all duration-500
                    group-hover:top-4 group-hover:left-0 group-hover:rotate-90 | -top-0.5 left-4 rotate-45"></div>
                <div class="absolute bg-gradient-to-r from-AZ_from to-AZ_to w-[3px] h-5 rounded-full | transition-all duration-500
                    group-hover:bottom-3 group-hover:left-0 group-hover:-rotate-90 | -bottom-0.5 left-4 -rotate-45"></div>
                
                <div class="absolute bg-gradient-to-r from-AZ_from to-AZ_to w-0.5 h-1 rounded-full | transition-all duration-500
                   group-hover:bottom-3 group-hover:translate-y-1/2 group-hover:left-[6px] | bottom-1/2 translate-y-1/2 left-[19px] -rotate-90"></div>
                <div class="absolute bg-AZ_to w-0.5 h-3 rounded-full | transition-all duration-500
                    group-hover:bottom-3 group-hover:translate-y-1/2 group-hover:left-0 group-hover:-rotate-90 | bottom-1/2 translate-y-1/2 left-6"></div>

                <div class="absolute bg-gradient-to-r from-AZ_from to-AZ_to w-0.5 h-2.5 rounded-full | transition-all duration-500
                    group-hover:-top-2 group-hover:left-1 group-hover:rotate-45 | -top-0 left-2.5 rotate-45"></div>
                <div class="absolute bg-gradient-to-r from-AZ_from to-AZ_to w-0.5 h-2.5 rounded-full | transition-all duration-500
                    group-hover:-top-2 group-hover:-left-0.5 group-hover:-rotate-45 | top-[18px] left-2.5 -rotate-45"></div>
            </div>

            <div v-else class="relative h-7 mr-2 group-hover:-translate-x-6 group-hover:scale-110 group-hover:hue-rotate-180 | transition-all duration-300">
                <div class="absolute bg-gradient-to-r -bottom-0.5 rotate-[40deg] from-AZ_from to-AZ_to w-[3px] h-7 rounded-full"></div>

                <div class="absolute top-4 left-0 rotate-90 bg-gradient-to-r from-AZ_from to-AZ_to w-[3px] h-5 rounded-full"></div>
                <div class="absolute bottom-3 left-0 -rotate-90 bg-gradient-to-r from-AZ_from to-AZ_to w-[3px] h-5 rounded-full"></div>
                
                <div class="absolute bottom-3 translate-y-1/2 left-[6px] -rotate-90 bg-gradient-to-r from-AZ_from to-AZ_to w-0.5 h-1 rounded-full"></div>
                <div class="absolute bottom-3 translate-y-1/2 left-0 -rotate-90 bg-AZ_to w-0.5 h-3 rounded-full"></div>

                <div class="absolute -top-2 left-1 rotate-45 bg-gradient-to-r from-AZ_from to-AZ_to w-0.5 h-2.5 rounded-full"></div>
                <div class="absolute -top-2 -left-0.5 -rotate-45 bg-gradient-to-r from-AZ_from to-AZ_to w-0.5 h-2.5 rounded-full"></div>
            </div>

            <div class="relative w-64 | flex justify-center font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-AZ_from to-AZ_to
                group-hover:scale-105 group-hover:hue-rotate-180 gap-0 group-hover:gap-0.5 | transition-all duration-300">
                <span style="--i:1">A</span>
                <span style="--i:2">l</span>
                <span style="--i:3">e</span>
                <span style="--i:4">s</span>
                <span style="--i:5">a</span>
                <span style="--i:6">n</span>
                <span style="--i:7">d</span>
                <span style="--i:8">r</span>
                <span style="--i:9">o</span>
                <span style="--i:9">&nbsp</span>
                <span style="--i:10">Ž</span>
                <span style="--i:11">u</span>
                <span style="--i:12">ž</span>
                <span style="--i:13">i</span>
                <span style="--i:14">ć</span>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: "AZ_MenuName"
}
</script>

<style lang="scss" scoped>
.waviy:hover span {
  animation: aaa 0.15s; 
  animation-delay: calc(.03s * var(--i));
}
@keyframes aaa {
  0% {
    padding-left: 0px;
  }
  50% {
    padding-right: 2px;
  }
  75% {
    padding-left: 2px;
  }
}
</style>