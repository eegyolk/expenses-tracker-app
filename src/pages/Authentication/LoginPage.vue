<template>
  <q-page class="flex flex-center">
    <q-card flat class="my-card">
      <q-card-section class="text-center">
        <q-icon name="shopping_cart" color="deep-purple-13" size="4rem" />
      </q-card-section>

      <q-card-section class="q-gutter-md">
        <div class="text-h6 text-center q-pt-lg">Hi, Welcome back!</div>

        <div class="q-gutter-md">
          <div class="full-width">
            <span>Email Address</span>
            <q-input
              v-model="emailAddress"
              color="deep-purple-13"
              placeholder="Your email address"
              type="email"
              outlined
              dense
            />
          </div>

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
        </div>

        <div class="row no-wrap">
          <div class="col-7 text-left">
            <q-toggle
              v-model="keepMeSignedIn"
              color="deep-purple-13"
              keep-color
              dense
            />
            <span class="q-px-xs text-caption">Keep me signed in</span>
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
      </q-card-section>

      <q-card-section class="text-center">
        <q-btn
          color="deep-purple-13"
          label="Login"
          style="width: 134px"
          no-caps
          @click="onLogin"
        />
      </q-card-section>

      <q-separator class="q-my-sm" unset />

      <q-card-section class="full-width text-center">
        <span class="q-px-xs text-caption">Don't have an account?</span>

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
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LoginPage",

  setup() {
    const emailAddress = ref("");
    const password = ref("");
    const passwordVisibility = ref(false);
    const keepMeSignedIn = ref(false);

    const router = useRouter();

    return {
      emailAddress,
      password,
      passwordVisibility,
      keepMeSignedIn,

      onTogglePasswordVisibility() {
        passwordVisibility.value = !passwordVisibility.value;
      },

      onLogin() {
        router.replace({ name: "tracker-home" });
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
