<template>
  <q-page class="flex flex-center">
    <q-card flat class="my-card">
      <q-card-section class="text-center">
        <q-icon name="shopping_cart" color="deep-purple-13" size="4rem" />
      </q-card-section>

      <q-card-section class="q-gutter-md">
        <div class="text-h6 text-center q-pt-lg">Create your account</div>

        <div class="q-gutter-md">
          <div class="full-width">
            <span>Full Name</span>
            <q-input
              v-model="fullName"
              color="deep-purple-13"
              placeholder="Your full name"
              outlined
              dense
            />
          </div>

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

          <div class="full-width text-center">
            <q-toggle
              v-model="acceptTOSAndPP"
              color="deep-purple-13"
              keep-color
              dense
            />

            <span class="q-px-xs text-caption">I accept the</span>

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

            <span class="q-px-xs text-caption">and</span>

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

            <span class="text-caption">.</span>
          </div>
        </div>
      </q-card-section>

      <q-card-section class="text-center">
        <q-btn
          color="deep-purple-13"
          label="Register"
          style="width: 134px"
          no-caps
          @click="onRegister"
        />
      </q-card-section>

      <q-separator class="q-my-sm" unset />

      <q-card-section class="full-width text-center">
        <span class="q-px-xs text-caption">Already have an account?</span>

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
  name: "RegistrationPage",

  setup() {
    const fullName = ref("");
    const emailAddress = ref("");
    const password = ref("");
    const passwordVisibility = ref(false);
    const acceptTOSAndPP = ref(false);

    const router = useRouter();

    return {
      fullName,
      emailAddress,
      password,
      passwordVisibility,
      acceptTOSAndPP,

      onTogglePasswordVisibility() {
        passwordVisibility.value = !passwordVisibility.value;
      },

      onRegister() {
        router.push({ name: "verify" });
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
