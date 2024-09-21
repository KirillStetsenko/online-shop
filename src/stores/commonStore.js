import { defineStore } from "pinia";
import actions from "../stores/actions";
import getters from "../stores/getters";
import state from "../stores/state";

export const useStore = defineStore("store", {
  state,
  getters,
  actions,
});
