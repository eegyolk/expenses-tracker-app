import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthenticationStore = defineStore("authentication", () => {
  const emailAddress = ref("");
  const password = ref("");
  const keepMeSignedIn = ref(false);

  const login = async () => {
    try {
    } catch (err) {
      throw err;
    }
  };

  const clearLogin = () => {
    emailAddress.value = "";
    password.value = "";
    keepMeSignedIn.value = false;
  };

  return {
    emailAddress,
    password,
    keepMeSignedIn,
    login,
    clearLogin,
  };
});
