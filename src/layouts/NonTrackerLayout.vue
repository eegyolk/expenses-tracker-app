<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-deep-purple-13" elevated>
      <q-toolbar>
        <div class="col-1 col-sm-1">
          <q-btn
            v-if="backButtonVisibility"
            icon="west"
            aria-label="Back"
            round
            dense
            flat
            @click="onBack"
          >
            <q-tooltip
              anchor="bottom middle"
              self="center middle"
              class="bg-deep-purple-10 text-white"
            >
              Back to previous page
            </q-tooltip>
          </q-btn>
        </div>

        <div class="col col-sm text-center">
          <span class="text-h6">{{ getTitle }}</span>
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
