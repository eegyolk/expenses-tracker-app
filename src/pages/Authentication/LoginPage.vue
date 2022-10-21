<template>
  <q-page v-if="visiblePage" class="q-pa-md flex flex-center">
    <div class="row wrap justify-center full-width">
      <img
        src="~assets/authentication-login-img.svg"
        style="width: 200px; height: 200px"
      />

      <div class="q-pt-md text-center" :style="{ width: `${windowWidth}px` }">
        <span class="text-h6 text-weight-medium text-grey-9">
          Hi, Welcome back!
        </span>
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

      <div
        class="row q-pt-lg text-center"
        :style="{ width: `${windowWidth}px` }"
      >
        <div class="col-7 text-left">
          <q-toggle
            v-model="keepMeSignedIn"
            color="deep-purple-13"
            keep-color
            dense
          />
          <span class="q-px-xs text-caption text-grey-9">
            Keep me signed in
          </span>
        </div>

        <div class="col-5 text-right">
          <q-btn
            label="Forgot password?"
            class="text-caption text-weight-bold"
            color="deep-purple-13"
            padding="none"
            to="/forgot-password"
            no-caps
            flat
            unelavated
          />
        </div>
      </div>
    </div>

    <div class="row wrap justify-center full-width">
      <div class="text-center" :style="{ width: `${windowWidth}px` }">
        <q-btn
          class="full-width q-mb-lg"
          color="deep-purple-13"
          label="Login"
          no-caps
          @click="onLogin"
        />
      </div>

      <div class="text-center" :style="{ width: `${windowWidth}px` }">
        <span class="q-px-xs text-caption text-grey-9">
          Don't have an account yet?
        </span>

        <q-btn
          label="Register now."
          class="text-caption text-weight-bold"
          color="deep-purple-13"
          padding="none"
          to="/register"
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
import { useAuthenticationStore } from "stores/authentication-store";

export default defineComponent({
  name: "LoginPage",

  setup() {
    const { visiblePage, windowWidth, showLoading, hideLoading } = usePage();
    const authenticationStore = useAuthenticationStore();
    const {
      emailAddress,
      emailAddressHasError,
      password,
      passwordHasError,
      passwordVisibility,
      keepMeSignedIn,
    } = storeToRefs(authenticationStore);
    const router = useRouter();
    const $q = useQuasar();

    return {
      visiblePage,
      windowWidth,
      emailAddress,
      emailAddressHasError,
      password,
      passwordHasError,
      passwordVisibility,
      keepMeSignedIn,

      onTogglePasswordVisibility() {
        authenticationStore.togglePasswordVisibility();
      },

      async onLogin() {
        try {
          showLoading();

          const notify = authenticationStore.validateFields();
          if (notify) {
            $q.notify({
              type: "negative",
              message: notify.errorMessage,
              html: notify.isHtml,
            });
            return;
          }

          const isSuccess = await authenticationStore.login();
          if (!isSuccess) {
            $q.notify({
              type: "negative",
              message:
                "Something went wrong while logging in. Please contact our support team, sorry for the inconvenience.",
            });
            return;
          }

          router.replace({ name: "tracker-home" });
          return;
        } catch (err) {
          $q.notify({
            type: "negative",
            message:
              "Something went wrong while logging in. Please contact our support team, sorry for the inconvenience.",
          });
        } finally {
          hideLoading();
        }
      },
    };
  },
});
</script>

<style lang="scss" scoped></style>
