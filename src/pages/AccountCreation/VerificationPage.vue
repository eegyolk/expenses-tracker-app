<template>
  <q-page class="flex flex-center">
    <q-card flat class="my-card">
      <q-card-section class="q-gutter-md">
        <div class="text-h6 text-center">Email Verification</div>
        <div class="text-caption text-justify">
          We have sent verification code to your email:
          <span class="text-caption text-weight-medium">your@email.com</span>
        </div>
      </q-card-section>

      <q-card-section class="text-center">
        <div class="q-gutter-md">
          <q-input
            ref="codePart1Ref"
            v-model="codePart1"
            color="deep-purple-13"
            class="code-parts"
            input-class="text-center"
            maxlength="1"
            mask="#"
            outlined
            dense
            @click="onSelect"
          />
          <q-input
            ref="codePart2Ref"
            v-model="codePart2"
            color="deep-purple-13"
            class="code-parts"
            input-class="text-center"
            maxlength="1"
            mask="#"
            outlined
            dense
            @click="onSelect"
          />
          <q-input
            ref="codePart3Ref"
            v-model="codePart3"
            color="deep-purple-13"
            class="code-parts"
            input-class="text-center"
            maxlength="1"
            mask="#"
            outlined
            dense
            @click="onSelect"
          />
          <q-input
            ref="codePart4Ref"
            v-model="codePart4"
            color="deep-purple-13"
            class="code-parts"
            input-class="text-center"
            maxlength="1"
            mask="#"
            outlined
            dense
            @click="onSelect"
          />
        </div>

        <div class="q-pt-md">
          <span class="q-px-xs text-caption">Didn't receive code?</span>

          <q-btn
            label="Resend"
            class="text-caption text-weight-bold"
            color="deep-purple-13"
            padding="none"
            no-caps
            flat
            unelavated
          />
        </div>
      </q-card-section>

      <q-card-section class="text-center">
        <q-btn
          color="deep-purple-13"
          label="Verify Account"
          style="width: 134px"
          no-caps
          @click="onVerifyAccount"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "VerificationPage",

  setup() {
    const codePart1Ref = ref(QInput);
    const codePart2Ref = ref(QInput);
    const codePart3Ref = ref(QInput);
    const codePart4Ref = ref(QInput);
    const codePart1 = ref("");
    const codePart2 = ref("");
    const codePart3 = ref("");
    const codePart4 = ref("");

    const router = useRouter();

    onMounted(() => {
      codePart1Ref.value.focus();
    });

    watch(codePart1, (code) => {
      if (code.length > 0) {
        codePart2Ref.value.focus();
        if (codePart2.value.length > 0) {
          codePart2Ref.value.select();
        }
      }
    });

    watch(codePart2, (code) => {
      if (code.length > 0) {
        codePart3Ref.value.focus();
        if (codePart3.value.length > 0) {
          codePart3Ref.value.select();
        }
      }
    });

    watch(codePart3, (code) => {
      if (code.length > 0) {
        codePart4Ref.value.focus();
        if (codePart4.value.length > 0) {
          codePart4Ref.value.select();
        }
      }
    });

    return {
      codePart1Ref,
      codePart2Ref,
      codePart3Ref,
      codePart4Ref,
      codePart1,
      codePart2,
      codePart3,
      codePart4,

      onSelect(ev) {
        ev.target.select();
      },

      onVerifyAccount() {
        router.push({ name: "tracker-home" });
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

.code-parts {
  width: 40px;
  display: inline-block;
}
</style>
