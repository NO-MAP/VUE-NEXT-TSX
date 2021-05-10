import { defineStore } from "pinia";

interface appState {
  count: number
}

export const useAppStore = defineStore({
  id: "app",
  state: (): appState => ({
    count: 0
  }),
  getters: {
    doubleCount(state): number {
      return state.count * 2
    }
  },
  actions: {
    reset() {
      this.count = 0;
    },
    add() {
      this.count++;
    }
  }
})