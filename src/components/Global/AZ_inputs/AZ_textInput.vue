<template>
    <div class="w-full flex gap-2 items-center drop-shadow-lg">
        <i v-if="icon" class=" opacity-90" :class="'text-slate-200  fa-solid fa-' + icon + ' text-xl mb-4'"></i>
        <div class="relative z-0 w-full mb-6 group">
            <Field :name="label" :rules="rules" v-slot="{ field, errorMessage }">
            
                <input :type="password && hide ? 'password' : 'text'" v-bind="field" placeholder=" " class="block  py-2.5 pl-0 pr-8 w-full text-sm bg-transparent appearance-none 
                    focus:outline-none focus:ring-0 peer caret-slate-200 -z-10" :maxlength="max ? max : 10000"
                    :class="errorMessage ? 'text-AZ_to' : 'text-slate-200'"/>
                <AZ_Tooltip v-if="tooltip">
                    <slot></slot>
                </AZ_Tooltip>

                <div class="absolute right-0 top-3 flex justify-center items-center w-6 z-10">
                    <i v-if="password" @click="hide = !hide" 
                        class="cursor-pointer text-slate-200 text-opacity-75 fa-solid text-lg hover:text-slate-200er | transition-all duration-300" 
                        :class="hide ? 'fa-eye-slash' : 'fa-eye'"></i>
                </div>

                <div class="h-[0.25px] w-full rounded-full absolute transition-all duration-300 -mt-0.5" 
                    :class="errorMessage ? 'bg-AZ_to' : 'peer-hover:bg-opacity-70 bg-slate-200 bg-opacity-40 peer-focus:bg-slate-200 peer-focus:hover:bg-slate-200'"></div>
                <div class="h-0.5 rounded-full absolute transition-all duration-300 w-0 peer-focus:w-full -mt-0.5" 
                    :class="errorMessage ? 'bg-AZ_to' : 'peer-hover:bg-opacity-70 bg-slate-200 bg-opacity-40 peer-focus:bg-slate-200 peer-focus:hover:bg-slate-200'"></div>

                <ErrorMessage class="absolute text-xs text-AZ_to mt-1 " :name="label" />
                <div v-if="max" class="absolute w-full text-right text-xs mt-1 font-bold " 
                    :class="errorMessage ? 'text-AZ_to' : 'text-slate-200 text-opacity-75'"> 
                    {{ field.value ? field.value.length : 0 }} / {{ max }} 
                </div>

                <label class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-50 origin-[0] left-0
                              peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" 
                        :class="errorMessage ? 'peer-focus:text-AZ_to text-AZ_to ' : 'peer-focus:text-slate-200 text-slate-200 text-opacity-60'">
                    {{ label }}
                </label>
        
            </Field>
        </div>
    </div>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import AZ_Tooltip from '@/components/Global/AZ_Tooltip.vue';

export default {
    name: "AZ_textInput",
    components: { Field, ErrorMessage, AZ_Tooltip },
    data() { return {  hide: true } },
    props: {
        label: String,
        rules: Object,
        icon: String,
        password: Boolean,
        max: Number,
        tooltip: {
            default: false,
            type: Boolean
        }
    },
}
</script>