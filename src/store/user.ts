import { defineStore } from "pinia";

interface userStore {
  name: string,
  age: number
}

export const useUserStore = defineStore({
  id: "user",
  state: (): userStore => ({
    name: "",
    age: 0
  }),
  getters: {

  },
  actions: {

  }
})