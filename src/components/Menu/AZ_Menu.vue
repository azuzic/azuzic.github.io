<template>
    <div class="fixed top-0 left-0 w-full z-[200]" >
        <AZ_MenuTop :items="items"/>
    </div>
    <AZ_MenuSide :links="items"/>
</template>

<script>
import AZ_MenuSide from "@/components/Menu/AZ_MenuSide.vue";
import AZ_MenuTop from "@/components/Menu/AZ_MenuTop.vue";
export default {
    name: "AZ_Menu",
    components: {
        AZ_MenuTop,
        AZ_MenuSide
    },
    data() {
        return {
            items: [
                { 
                    name: "About me", 
                    icon: "fa-solid fa-user",
                },
                { 
                    name: "Projects", 
                    icon: "fa-solid fa-list-check",
                },
                { 
                    name: "Publications", 
                    icon: "fa-solid fa-book",
                },
                { 
                    name: "Games", 
                    icon: "fa-solid fa-gamepad",
                },
                { 
                    name: "Contact", 
                    icon: "fa-solid fa-address-card",
                }
            ]
        }
    },
};
</script>