<template>
    <div class="flex w-full h-fit justify-center items-center pt-24">  
        <div class="flex flex-col h-fit w-full gap-8 drop-shadow-AZ rounded-lg px-4 md:px-6 lg:px-12 xl:px-16 py-8 transition-all duration-500">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "AZ_Block"
}
</script>