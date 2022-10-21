import { defineStore } from "pinia";
import { ref } from "vue";
import { supabase } from "src/boot/supabase";
import AuthenticationApi from "src/api/authentication-api";

export const useAuthenticationStore = defineStore("authentication", () => {
  const emailAddress = ref("");
  const emailAddressHasError = ref(false);
  const password = ref("");
  const passwordHasError = ref(false);
  const passwordVisibility = ref(false);
  const keepMeSignedIn = ref(false);

  const api = new AuthenticationApi(supabase);

  const togglePasswordVisibility = () => {
    passwordVisibility.value = !passwordVisibility.value;
  };

  /**
   *
   * @returns { errorMessage, isHtml } Object
   */
  const validateFields = () => {
    if (!emailAddress.value) {
      emailAddressHasError.value = true;
      return {
        errorMessage: "You forgot your email address.",
        isHtml: false,
      };
    } else {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(emailAddress.value)) {
        emailAddressHasError.value = true;
        return {
          errorMessage: "Your email address has invalid format.",
          isHtml: false,
        };
      }
    }
    emailAddressHasError.value = false;

    if (!password.value) {
      passwordHasError.value = true;
      return {
        errorMessage: "You forgot your password.",
        isHtml: false,
      };
    }
    passwordHasError.value = false;
  };

  /**
   *
   * @returns Boolean
   */
  const login = async () => {
    const { data, error } = await api.login(emailAddress.value, password.value);

    if (error) {
      return false;
    }

    if (data) {
      return true;
    }
  };

  const resetData = () => {
    emailAddress.value = "";
    emailAddressHasError.value = false;
    password.value = "";
    passwordHasError.value = false;
    passwordVisibility.value = false;
    keepMeSignedIn.value = false;
  };

  /**
   *
   * @returns Boolean
   */
  const logout = async () => {
    const { error } = await api.logout();

    if (error) {
      return false;
    }

    return true;
  };

  return {
    emailAddress,
    emailAddressHasError,
    password,
    passwordHasError,
    passwordVisibility,
    keepMeSignedIn,
    togglePasswordVisibility,
    validateFields,
    login,
    resetData,
    logout,
  };
});
