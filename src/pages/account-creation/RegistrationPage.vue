<template>
  <q-page v-if="visiblePage" class="q-pa-md flex flex-center">
    <div class="row wrap justify-center full-width">
      <img
        src="~assets/account-creation-register-img.svg"
        style="width: 200px; height: 200px"
      />

      <div class="q-pt-md text-center" :style="{ width: `${windowWidth}px` }">
        <span class="text-h6 text-weight-medium text-grey-9">
          Create your account
        </span>
      </div>

      <div class="q-pt-md text-left" :style="{ width: `${windowWidth}px` }">
        <span
          :class="{
            'text-body2': true,
            'text-grey-9': !fullNameHasError,
            'text-red-10': fullNameHasError,
          }"
        >
          Full Name
        </span>
        <q-input
          v-model="fullName"
          color="deep-purple-13"
          placeholder="Your full name"
          :error="fullNameHasError"
          hide-bottom-space
          no-error-icon
          outlined
          dense
        />
      </div>

      <div class="q-pt-md text-left" :style="{ width: `${windowWidth}px` }">
        <span
          :class="{
            'text-body2': true,
            'text-grey-9': !emailAddressHasError,
            'text-red-10': emailAddressHasError,
          }"
        >
          Email Address
        </span>
        <q-input
          v-model="emailAddress"
          color="deep-purple-13"
          placeholder="Your email address"
          type="email"
          :error="emailAddressHasError"
          hide-bottom-space
          no-error-icon
          outlined
          dense
        />
      </div>

      <div class="q-pt-md text-left" :style="{ width: `${windowWidth}px` }">
        <span
          :class="{
            'text-body2': true,
            'text-grey-9': !passwordHasError,
            'text-red-10': passwordHasError,
          }"
        >
          Password
        </span>
        <q-input
          v-model="password"
          color="deep-purple-13"
          placeholder="Your password"
          :type="passwordVisibility ? '' : 'password'"
          :error="passwordHasError"
          hide-bottom-space
          no-error-icon
          outlined
          dense
        >
          <template v-slot:append>
            <q-icon
              class="cursor-pointer"
              :name="passwordVisibility ? 'visibility' : 'visibility_off'"
              @click="onTogglePasswordVisibility"
            />
          </template>
        </q-input>
      </div>

      <div class="q-pt-lg text-center" :style="{ width: `${windowWidth}px` }">
        <q-toggle
          v-model="acceptTOSAndPP"
          color="deep-purple-13"
          keep-color
          dense
        />

        <span class="q-px-xs text-caption text-grey-9">I accept the</span>

        <q-btn
          label="Terms"
          class="text-caption text-weight-bold"
          color="deep-purple-13"
          padding="none"
          to="/terms"
          no-caps
          flat
          unelavated
        />

        <span class="q-px-xs text-caption text-grey-9">and</span>

        <q-btn
          label="Privacy Policy"
          class="text-caption text-weight-bold"
          color="deep-purple-13"
          padding="none"
          to="/privacy-policy"
          no-caps
          flat
          unelavated
        />

        <span class="text-caption text-grey-9">.</span>
      </div>
    </div>

    <div class="row wrap justify-center full-width">
      <div class="text-center" :style="{ width: `${windowWidth}px` }">
        <q-btn
          class="full-width q-mb-lg"
          color="deep-purple-13"
          label="Register"
          no-caps
          @click="onRegister"
        />
      </div>

      <div class="text-center" :style="{ width: `${windowWidth}px` }">
        <span class="q-px-xs text-caption text-grey-9"
          >Already have an account?</span
        >

        <q-btn
          label="Login now."
          class="text-caption text-weight-bold"
          color="deep-purple-13"
          padding="none"
          to="/login"
          no-caps
          flat
          unelavated
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { storeToRefs } from "pinia";
import { usePage } from "src/composables/page";
import { useAccountCreationStore } from "stores/account-creation-store";

export default defineComponent({
  name: "RegistrationPage",

  setup() {
    const { visiblePage, windowWidth } = usePage();
    const accountCreationStore = useAccountCreationStore();
    const {
      fullName,
      fullNameHasError,
      emailAddress,
      emailAddressHasError,
      password,
      passwordHasError,
      passwordVisibility,
      acceptTOSAndPP,
    } = storeToRefs(accountCreationStore);
    const router = useRouter();
    const $q = useQuasar();

    return {
      visiblePage,
      windowWidth,
      fullName,
      fullNameHasError,
      emailAddress,
      emailAddressHasError,
      password,
      passwordHasError,
      passwordVisibility,
      acceptTOSAndPP,

      onTogglePasswordVisibility() {
        accountCreationStore.togglePasswordVisibility();
      },

      async onRegister() {
        try {
          const notify = accountCreationStore.validateFields("REGISTER");
          if (notify) {
            $q.notify({
              type: "negative",
              message: notify.errorMessage,
              html: notify.isHtml,
            });
            return;
          }

          const isSuccess = accountCreationStore.register();
          if (!isSuccess) {
            $q.notify({
              type: "negative",
              message:
                "Something went wrong while processing your registration. Please contact our support team, sorry for the inconvenience.",
            });
            return;
          }

          router.push({ name: "verify-account" });
        } catch (err) {
          $q.notify({
            type: "negative",
            message:
              "Something went wrong while processing your registration. Please contact our support team, sorry for the inconvenience.",
          });
        }
      },
    };
  },
});
</script>

<style lang="scss" scoped></style>
