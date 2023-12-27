<template>
    <div class="relative z-0 w-full mb-6 group drop-shadow-lg">

        <Field type="text" :name="label" :rules="rules" v-slot="{ field, errorMessage }">

            <textarea v-bind="field" placeholder=" " class="block px-2 py-6 w-full text-sm bg-slate-950 bg-opacity-20 rounded-t-md appearance-none
                focus:outline-none focus:bg-opacity-40 peer caret-slate-200 border border-slate-200 border-opacity-5 focus:border-opacity-25" :maxlength="max" rows="4"
                :class="errorMessage ? 'text-AZ_to' : 'text-slate-200'"></textarea>

            <div class="h-[0.25px] w-full rounded-full absolute transition-all duration-300 -mt-0.5" 
                :class="errorMessage ? 'bg-AZ_to' : 'peer-hover:bg-opacity-70 bg-slate-200 bg-opacity-40 peer-focus:bg-slate-200 peer-focus:hover:bg-slate-200'"></div>
            <div class="h-0.5 rounded-full absolute transition-all duration-300 w-0 peer-focus:w-full -mt-0.5" 
                :class="errorMessage ? 'bg-AZ_to' : 'peer-hover:bg-opacity-70 bg-slate-200 bg-opacity-40 peer-focus:bg-slate-200 peer-focus:hover:bg-slate-200'"></div>

            <ErrorMessage class="absolute text-xs text-AZ_to mt-1" :name="label" />
            <div class="absolute w-full text-right text-xs mt-1 font-bold" :class="errorMessage ? 'text-AZ_to' : 'text-slate-200 text-opacity-75'"> 
                {{ field.value ? field.value.length : 0 }} / {{ max }} 
            </div>

            <label  class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-2 scale-75 top-3 z-10 origin-[0] left-2
                          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-2" 
                    :class="errorMessage ? 'peer-focus:text-AZ_to text-AZ_to' : 'peer-focus:text-slate-200 text-slate-200 text-opacity-60'">
                {{ label }} 
            </label>
        
        </Field>
    </div>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';

export default {
    name: "AZ_textAreaInput",
    components: { Field, ErrorMessage },
    props: {
        label: String,
        rules: Object,
        max: Number,
    },
}
</script>