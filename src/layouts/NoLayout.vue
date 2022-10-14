<template>
  <q-layout>
    <q-header>
      <q-btn
        v-if="isCordova"
        class="q-mt-xl q-ml-xs"
        padding="none"
        color="deep-purple-13"
        icon="west"
        no-caps
        flat
      />
    </q-header>

    <q-footer bordered class="bg-white text-primary">
      <q-tabs
        v-if="isCordova"
        no-caps
        active-color="primary"
        indicator-color="transparent"
        class="text-grey"
        v-model="tab"
      >
        <q-tab label="Previous" />
        <q-tab label="Next" />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Platform } from "quasar";

export default defineComponent({
  name: "NoLayout",

  setup() {
    const isCordova = ref(Platform.is.cordova);

    return {
      isCordova,
    };
  },
});
</script>
