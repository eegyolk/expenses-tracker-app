import { defineStore } from "pinia";
import { ref } from "vue";

export const useAccountCreationStore = defineStore("accountCreation", () => {
  const fullName = ref("");
  const emailAddress = ref("");
  const password = ref("");
  const codePart1 = ref("");
  const codePart2 = ref("");
  const codePart3 = ref("");
  const codePart4 = ref("");

  const register = async () => {
    try {
    } catch (err) {
      throw err;
    }
  };

  const resend = async () => {
    try {
    } catch (err) {
      throw err;
    }
  };

  const verify = async () => {
    try {
    } catch (err) {
      throw err;
    }
  };

  const clearRegistration = () => {
    fullName.value = "";
    emailAddress.value = "";
    password.value = "";
  };

  const clearCode = () => {
    codePart1.value = "";
    codePart2.value = "";
    codePart3.value = "";
    codePart4.value = "";
  };

  return {
    fullName,
    emailAddress,
    password,
    codePart1,
    codePart2,
    codePart3,
    codePart4,
    register,
    resend,
    verify,
    clearRegistration,
    clearCode,
  };
});
