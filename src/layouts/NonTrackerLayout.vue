<template>
  <q-layout view="lHh Lpr lFf">
    <q-header v-if="backButtonVisibility" class="bg-white">
      <q-toolbar>
        <div class="col-1 col-sm-1">
          <q-btn
            color="deep-purple-13"
            icon="chevron_left"
            aria-label="Back"
            round
            dense
            flat
            @click="onBack"
          />
        </div>

        <div class="col col-sm text-center">
          <span
            v-if="getTitle"
            class="text-subtitle1 text-weight-medium text-deep-purple-13"
          >
            {{ getTitle }}
          </span>
        </div>

        <div class="col-1 col-sm-1"></div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "NonTrackerLayout",

  setup() {
    const router = useRouter();

    const backButtonVisibility = computed(() => {
      return router.currentRoute.value.meta.withBackButton;
    });

    const getTitle = computed(() => {
      return router.currentRoute.value.meta.title;
    });

    return {
      backButtonVisibility,
      getTitle,

      onBack() {
        router.back();
      },
    };
  },
});
</script>
