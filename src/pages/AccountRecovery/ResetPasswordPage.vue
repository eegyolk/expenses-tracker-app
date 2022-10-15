<template>
  <q-page class="flex flex-center">
    <q-card flat class="my-card">
      <q-card-section class="q-gutter-md">
        <div class="text-h6 text-center q-pt-lg">Reset Password</div>

        <div class="q-gutter-md">
          <div class="full-width">
            <span>Password</span>
            <q-input
              v-model="password"
              color="deep-purple-13"
              placeholder="Your password"
              :type="passwordVisibility ? '' : 'password'"
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

          <div class="full-width">
            <span>Confirm Password</span>
            <q-input
              v-model="confirmPassword"
              color="deep-purple-13"
              placeholder="Confirm your password"
              :type="confirmPasswordVisibility ? '' : 'password'"
              outlined
              dense
            >
              <template v-slot:append>
                <q-icon
                  class="cursor-pointer"
                  :name="
                    confirmPasswordVisibility ? 'visibility' : 'visibility_off'
                  "
                  @click="onToggleConfirmPasswordVisibility"
                />
              </template>
            </q-input>
          </div>
        </div>
      </q-card-section>

      <q-card-section class="text-center">
        <q-btn
          color="deep-purple-13"
          label="Reset"
          style="width: 134px"
          no-caps
          @click="onReset"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "ResetPasswordPage",

  setup() {
    const password = ref("");
    const confirmPassword = ref("");
    const passwordVisibility = ref(false);
    const confirmPasswordVisibility = ref(false);

    const router = useRouter();

    return {
      password,
      confirmPassword,
      passwordVisibility,
      confirmPasswordVisibility,

      onTogglePasswordVisibility() {
        passwordVisibility.value = !passwordVisibility.value;
      },

      onToggleConfirmPasswordVisibility() {
        confirmPasswordVisibility.value = !confirmPasswordVisibility.value;
      },

      onReset() {
        router.replace({ name: "login" });
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
