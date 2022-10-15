import { defineStore } from "pinia";
import { ref } from "vue";

export const useAccountRecoveryStore = defineStore("accountRecovery", () => {
  const emailAddress = ref("");
  const codePart1 = ref("");
  const codePart2 = ref("");
  const codePart3 = ref("");
  const codePart4 = ref("");
  const password = ref("");
  const confirmPassword = ref("");

  const submit = async () => {
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

  const reset = async () => {
    try {
    } catch (err) {
      throw err;
    }
  };

  const clearEmail = () => {
    emailAddress.value = "";
  };

  const clearCode = () => {
    codePart1.value = "";
    codePart2.value = "";
    codePart3.value = "";
    codePart4.value = "";
  };

  const clearPassword = () => {
    password.value = "";
    confirmPassword.value = "";
  };

  return {
    emailAddress,
    codePart1,
    codePart2,
    codePart3,
    codePart4,
    password,
    confirmPassword,
    submit,
    verify,
    reset,
    clearEmail,
    clearCode,
    clearPassword,
  };
});
