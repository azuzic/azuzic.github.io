<template>
    <div>
        <div class="transition-all duration-300 rounded-xl font-extrabold text-slate-950 
            bg-gradient-to-r from-AZ_from to-AZ_to tracking-wide w-fit
            hover:hue-rotate-180 cursor-pointer" :class="zclass">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "AZ_Button",
    props: { zclass: String }
}
</script>