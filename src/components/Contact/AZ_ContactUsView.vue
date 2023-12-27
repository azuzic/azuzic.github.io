<template>
    <div class="flex w-full h-fit gap-64 justify-center items-center pb-64 pt-24">   
 
        <div class="flex flex-col h-fit w-full gap-8 drop-shadow-AZ rounded-lg px-16 py-8">
            
            <AZ_H1 data-aos="fade-up" data-aos-delay="50">
                <Waypoint @change="onChange"> Contact </Waypoint>
            </AZ_H1>

            <div class="relative flex flex-col w-full gap-8 justify-center items-center">

                <AZ_Line data-aos="fade-up" data-aos-delay="100"/>

                <Form @submit="onSubmit" class="w-full max-w-md flex gap-2 relative mt-16" :validation-schema="schema" data-aos="fade-up" data-aos-delay="100">
                    <div class="flex flex-col w-full justify-between items-center gap-2">
                        <MQ_textInput label="Name" icon="user" />
                        <MQ_textInput label="E-mail" icon="envelope" />
					    <MQ_textAreaInput label="Message" :max="2000" />

                        <div class="w-full h-20 relative flex flex-col justify-center items-center | transition-all duration-500"
                            :class="submitting || type != 'none' ? 'h-16' : 'h-8 delay-500'">
                            <button @click="onSubmit()"
                                class="h-8 w-full group relative z-10 | flex flex-col justify-center overflow-hidden items-center | 
                                    rounded-md bg-slate-950 bg-opacity-25 drop-shadow-lg | transition-all duration-500"
                                :class="submitting || type != 'none' ? 'opacity-0 delay-0' : 'opacity-100 delay-500'">
                                <div class="px-5 h-full | text-slate-200 group-hover:text-slate-950 | group-hover:font-bold | z-10 | 
                                    transition-all duration-500 | flex items-center text-sm">
                                    SEND
                                </div>
                                <div class="absolute h-full left-0 w-0 group-hover:w-full bg-AZ_to group-hover:bg-AZ_from | transition-all duration-500"></div>
                            </button>
                            <img class="absolute | animate-pulse transition-all duration-500" :src="logo"
                                :class="submitting ? 'h-16 opacity-100 delay-500' : 'h-0 opacity-0 delay-0'" />

                            <AZ_alert :show="type == 'warning'" color="rgb(220, 38, 68)" icon="fa-solid fa-triangle-exclamation" class="absolute">
                                <b>Error sending message!</b> <br />
                                This is not your fault, it is probably being worked on!
                            </AZ_alert>
                            <AZ_alert :show="type == 'success'" color="rgb(12, 173, 134)" icon="fa-solid fa-circle-check" class="absolute">
                                <b>Your message has been successfully sent!</b>
                                <br />
                                You will be contacted very soon!
                            </AZ_alert>
                        </div>
                    </div>
                </Form>

            </div>
        </div >

    </div>   
</template>

<script>
	import MQ_textAreaInput from "@/components/Global/AZ_inputs/AZ_textAreaInput.vue";
	import MQ_textInput from "@/components/Global/AZ_inputs/AZ_textInput.vue";
	import AZ_alert from "@/components/Global/AZ_alert.vue";
    import AZ_Line from '@/components/Global/AZ_Line.vue';
    import AZ_H1 from '@/components/Global/AZ_H1.vue';
    import { useGlobalStore } from '@/stores/globalStore';
	import { Form, Field } from "vee-validate";
    import { Waypoint } from "vue-waypoint";
	import { object, string } from "yup";
	import emailjs from "@emailjs/browser";
	import logo from "@/assets/logo.svg";

	let wait = function (seconds) {
		return new Promise(resolveFn => {
			setTimeout(resolveFn, seconds * 1000);
		});
	};

	export default {
		name: "AZ_ContactUsView",
		components: {
			MQ_textInput,
			Form,
			Field,
			MQ_textAreaInput,
			AZ_alert,
            AZ_Line,
            AZ_H1,
            Waypoint
		},
		setup() {
            const globalStore = useGlobalStore();
            const onChange = (waypointState) => {
                if (waypointState.going == "IN") {
                    globalStore.itemActive = "Contact"
                }
            };
			const schema = object({
				"Name": string().required().label("Name"),
				"Message": string().required().label("Message"),
				"E-mail": string().required().email().label("Email"),
			});
			return {
				schema,
                onChange, 
                globalStore, 
                logo
			};
		},
		data() {
			return {
				left: false,
				submitting: false,
				type: "none",
			};
		},
		methods: {
			async onSubmit(values) {
				if (values) {
					this.submitting = true;
					let queryData = {
						from_name: values["Name"],
						from_email: values["E-mail"],
						message: values["Message"],
					};
					try {
						await emailjs.send(
							"service_cu0q1tj",
							"template_biogjun",
							queryData,
						    "Hvy7VtUPqB2M4ZsqU"
						);
						await wait(2);
						this.submitting = false;
						this.type = "success";
						await wait(4);
						this.type = "none";
					} catch (e) {
						await wait(2);
						this.submitting = false;
						this.type = "warning";
						await wait(4);
						this.type = "none";
						console.error("Error sending message!");
					}
				}
			},
		},
	};
</script>
