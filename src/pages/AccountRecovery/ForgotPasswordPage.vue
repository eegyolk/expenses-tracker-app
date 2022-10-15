<template>
  <q-page class="flex flex-center">
    <q-card flat class="my-card">
      <q-card-section class="q-gutter-md">
        <div class="text-h6 text-center">Can't remember your password?</div>
        <div class="text-caption text-justify">
          Don't worry! It happens. Please enter the email address associated
          with your account.
        </div>
      </q-card-section>

      <q-card-section>
        <div class="full-width">
          <q-input
            v-model="emailAddress"
            color="deep-purple-13"
            placeholder="Your email address"
            type="email"
            outlined
            dense
          />
        </div>
      </q-card-section>

      <q-card-section class="text-center">
        <q-btn
          color="deep-purple-13"
          label="Submit"
          style="width: 134px"
          no-caps
          @click="onSubmit"
        />
      </q-card-section>

      <q-separator class="q-my-sm" unset />

      <q-card-section class="full-width text-center">
        <span class="q-px-xs text-caption">Do you have your password?</span>

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
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "ForgotPasswordPage",

  setup() {
    const emailAddress = ref("");

    const router = useRouter();

    return {
      emailAddress,

      onSubmit() {
        router.replace({ name: "verify-reset" });
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 350px;
  padding: 25px;
}
</style>
