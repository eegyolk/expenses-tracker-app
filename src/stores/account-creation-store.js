import { defineStore } from "pinia";
import { ref } from "vue";
import { supabase } from "src/boot/supabase";
import AccountCreationApi from "src/api/account-creation-api";

export const useAccountCreationStore = defineStore("accountCreation", () => {
  const fullName = ref("");
  const fullNameHasError = ref(false);
  const emailAddress = ref("");
  const emailAddressHasError = ref(false);
  const password = ref("");
  const passwordHasError = ref(false);
  const passwordVisibility = ref(false);
  const acceptTOSAndPP = ref(false);
  const code = ref("");
  const codeHasError = ref(false);

  const api = new AccountCreationApi(supabase);

  const togglePasswordVisibility = () => {
    passwordVisibility.value = !passwordVisibility.value;
  };

  /**
   * @param {*} type, (REGISTER, VERIFY)
   * @returns { errorMessage, isHtml } Object
   */
  const validateFields = (type = "REGISTER") => {
    if (type === "REGISTER") {
      if (!fullName.value) {
        fullNameHasError.value = true;
        return {
          errorMessage: "You forgot your full name.",
          isHtml: false,
        };
      } else {
        if (fullName.value.length < 3) {
          fullNameHasError.value = true;
          return {
            errorMessage:
              "Your full name must be more than or equal to 3 characters long.",
            isHtml: false,
          };
        }
      }
      fullNameHasError.value = false;

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
      } else {
        const passwordRules = [
          { passed: false, label: "Password is required", regex: /.{1,}/ },
          {
            passed: false,
            label: "At least 8 characters long",
            regex: /.{8,}/,
          },
          { passed: false, label: "At least 1 uppercase", regex: /[A-Z]/ },
          { passed: false, label: "At least 1 lowercase", regex: /[a-z]/ },
          { passed: false, label: "At least 1 numeric", regex: /\d/ },
          { passed: false, label: "At least 1 special character", regex: /\W/ },
        ];

        let passwordLabels = "";
        passwordRules.forEach((rule) => {
          rule.passed = rule.regex.test(password.value);

          if (rule.passed) {
            passwordLabels += `<i class="q-icon notranslate material-icons cursor-pointer text-green" aria-hidden="true" role="presentation" style="font-size: 1.2rem;">check_circle</i> ${rule.label}<br/>`;
          } else {
            passwordLabels += `<i class="q-icon notranslate material-icons cursor-pointer" aria-hidden="true" role="presentation" style="font-size: 1.2rem;">cancel</i> ${rule.label}<br/>`;
          }
        });

        const foundFailed = passwordRules.findIndex((item) => !item.passed);
        if (foundFailed >= 0) {
          passwordHasError.value = true;
          return {
            errorMessage: `<strong>Your password doesn't met the criteria.</strong><br />${passwordLabels}`,
            isHtml: true,
          };
        }
      }
      passwordHasError.value = false;

      if (!acceptTOSAndPP.value) {
        return {
          errorMessage: "You forgot to accept the Terms and Privacy Policy.",
          isHtml: false,
        };
      }
    }

    if (type === "VERIFY") {
      if (!code.value) {
        codeHasError.value = true;
        return {
          errorMessage: "You forgot your code",
          isHtml: false,
        };
      } else {
        if (code.value.length < 6) {
          codeHasError.value = true;
          return {
            errorMessage: "Your code must be 6 characters long.",
            isHtml: false,
          };
        }
      }
      codeHasError.value = false;
    }
  };

  /**
   *
   * @returns Boolean
   */
  const register = async () => {
    const { data, error } = await api.signUp(
      fullName.value,
      emailAddress.value,
      password.value
    );

    if (data) {
      return true;
    }

    if (error) {
      return false;
    }
  };

  /**
   *
   * @returns Boolean
   */
  const verify = async () => {
    const { data, error } = await api.verifyOtp(emailAddress.value, code.value);

    if (data) {
      return true;
    }

    if (error) {
      return false;
    }
  };

  const resend = async () => {};

  const clearRegistration = () => {
    fullName.value = "";
    emailAddress.value = "";
    password.value = "";
    passwordVisibility.value = false;
    acceptTOSAndPP.value = false;
  };

  const clearCode = () => {
    codePart1.value = "";
    codePart2.value = "";
    codePart3.value = "";
    codePart4.value = "";
    codePart5.value = "";
    codePart6.value = "";
  };

  return {
    fullName,
    fullNameHasError,
    emailAddress,
    emailAddressHasError,
    password,
    passwordHasError,
    passwordVisibility,
    acceptTOSAndPP,
    code,
    codeHasError,
    togglePasswordVisibility,
    validateFields,
    register,
    verify,
    resend,

    clearRegistration,
    clearCode,
  };
});
