import { defineStore } from "pinia";
import { nextTick } from "vue";
let wait = function (seconds) {
	return new Promise(resolveFn => {
		setTimeout(resolveFn, seconds * 1000);
	});
};
export const useGlobalStore = defineStore("globalStore", {
	state: () => ({
        itemActive: ""
    }),
	actions: {},
});
