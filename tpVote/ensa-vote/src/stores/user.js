import { defineStore } from "pinia";
import { ref } from "vue";
import { auth } from "../firebase";

export const useUserStore = defineStore("user", () => {
  const user = ref(auth.currentUser);

  const setUser = (u) => {
    user.value = u;
  };

  return { user, setUser };
});
