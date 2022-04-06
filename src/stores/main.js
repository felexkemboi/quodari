
import { defineStore } from 'pinia';

export const main = defineStore({
  id: 'main',
  state: () => ({
    records: {},
  }),

  getters: {
    getRecords: (state) => state.records,
  },

  actions: {
    setRecords(data) {
      this.records = data;
    },
  },
  persist: true,
});
