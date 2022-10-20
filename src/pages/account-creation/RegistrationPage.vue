<template>
  <q-page v-if="visiblePage" class="q-pa-md flex flex-center">
    <div class="row wrap justify-center full-width">
      <img src="~assets/register-img.svg" style="width: 200px; height: 200px" />

      <div class="q-pt-md text-center" :style="{ width: `${windowWidth}px` }">
        <span class="text-h6 text-weight-medium text-grey-9">
          Create your account
        </span>
      </div>

      <div class="q-pt-md text-left" :style="{ width: `${windowWidth}px` }">
        <span class="text-body2 text-weight-medium text-grey-9">
          Full Name
        </span>
        <q-input
          v-model="fullName"
          color="deep-purple-13"
          placeholder="Your full name"
          outlined
          dense
        />
      </div>

      <div class="q-pt-md text-left" :style="{ width: `${windowWidth}px` }">
        <span class="text-body2 text-weight-medium text-grey-9">
          Email Address
        </span>
        <q-input
          v-model="emailAddress"
          color="deep-purple-13"
          placeholder="Your email address"
          type="email"
          outlined
          dense
        />
      </div>

      <div class="q-pt-md text-left" :style="{ width: `${windowWidth}px` }">
        <span class="text-body2 text-weight-medium text-grey-9">
          Password
        </span>
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
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { usePage } from "src/composables/page";

export default defineComponent({
  name: "RegistrationPage",

  setup() {
    const windowWidth = ref(0);
    const fullName = ref("");
    const emailAddress = ref("");
    const password = ref("");
    const passwordVisibility = ref(false);
    const acceptTOSAndPP = ref(false);
    const { visiblePage } = usePage();

    const router = useRouter();

    onMounted(() => {
      windowWidth.value = window.innerWidth;
    });

    return {
      windowWidth,
      fullName,
      emailAddress,
      password,
      passwordVisibility,
      acceptTOSAndPP,
      visiblePage,

      onTogglePasswordVisibility() {
        passwordVisibility.value = !passwordVisibility.value;
      },

      async onRegister() {
        router.push({ name: "verify-account" });
      },
    };
  },
});
</script>

<style lang="scss" scoped></style>
