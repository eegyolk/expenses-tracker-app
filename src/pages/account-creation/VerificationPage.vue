<template>
  <q-page v-if="visiblePage" class="q-pa-md flex flex-center">
    <div class="row wrap justify-center full-width">
      <img
        src="~assets/account-creation-verify-img.svg"
        style="width: 200px; height: 200px"
      />

      <div class="q-pt-md text-center" :style="{ width: `${windowWidth}px` }">
        <span class="text-h6 text-weight-medium text-grey-9">
          Verify your account
        </span>
      </div>

      <div class="q-pt-md text-center" :style="{ width: `${windowWidth}px` }">
        <div>We have sent verification code to your email:</div>
        <div>
          <span class="text-caption text-weight-medium">
            {{ emailAddress }}
          </span>
        </div>
      </div>

      <div class="q-pt-md text-center" :style="{ width: `${windowWidth}px` }">
        <q-input
          v-model="code"
          color="deep-purple-13"
          input-class="text-center text-weight-medium"
          maxlength="6"
          mask="######"
          :error="codeHasError"
          hide-bottom-space
          no-error-icon
          outlined
          borderless
          dense
        />
      </div>
    </div>

    <div class="row wrap justify-center full-width">
      <div class="text-center" :style="{ width: `${windowWidth}px` }">
        <q-btn
          class="full-width q-mb-lg"
          color="deep-purple-13"
          label="Verify"
          no-caps
          @click="onVerify"
        />
      </div>

      <div class="text-center" :style="{ width: `${windowWidth}px` }">
        <span class="q-px-xs text-caption text-grey-9">
          Didn't receive code?
        </span>

        <q-btn
          label="Resend"
          class="text-caption text-weight-bold"
          color="deep-purple-13"
          padding="none"
          no-caps
          flat
          unelavated
          @click="onResend"
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
  name: "VerificationPage",

  setup() {
    const { visiblePage, windowWidth, showLoading, hideLoading } = usePage();
    const accountCreationStore = useAccountCreationStore();
    const { emailAddress, password, code, codeHasError } =
      storeToRefs(accountCreationStore);
    const router = useRouter();
    const $q = useQuasar();

    return {
      visiblePage,
      windowWidth,
      emailAddress,
      password,
      code,
      codeHasError,

      async onVerify() {
        try {
          showLoading();

          const notify = accountCreationStore.validateFields("VERIFY");
          if (notify) {
            $q.notify({
              type: "negative",
              message: notify.errorMessage,
              html: notify.isHtml,
            });
            return;
          }

          const isSuccess = await accountCreationStore.verify();
          if (!isSuccess) {
            $q.notify({
              type: "negative",
              message:
                "Something went wrong while processing your verification. Please contact our support team, sorry for the inconvenience.",
            });
            return;
          }

          router.replace({ name: "tracker-home" });

          accountCreationStore.resetData();

          return;
        } catch (err) {
          $q.notify({
            type: "negative",
            message:
              "Something went wrong while processing your verification. Please contact our support team, sorry for the inconvenience.",
          });
        } finally {
          hideLoading();
        }
      },

      async onResend() {
        try {
          showLoading();

          const isSuccess = await accountCreationStore.resend();

          if (!isSuccess) {
            $q.notify({
              type: "negative",
              message:
                "Something went wrong while processing code resend. Please contact our support team, sorry for the inconvenience.",
            });
          }
        } catch (err) {
          $q.notify({
            type: "negative",
            message:
              "Something went wrong while processing code resend. Please contact our support team, sorry for the inconvenience.",
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
