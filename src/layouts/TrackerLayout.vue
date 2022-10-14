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
          />
        </div>

        <div class="col col-sm text-center">
          <span class="text-h6">{{ getTitle }}</span>
        </div>

        <div class="col-1 col-sm-1"></div>
      </q-toolbar>
    </q-header>

    <q-footer bordered class="bg-deep-purple-13">
      <q-tabs
        no-caps
        active-color="white"
        indicator-color="transparent"
        class="text-grey"
        v-model="selectedTab"
        dense
      >
        <q-tab name="home" icon="home" label="Home" />
        <q-tab name="income" icon="account_balance_wallet" label="Income" />
        <q-tab name="expenses" icon="shopping_cart" label="Expenses" />
        <q-tab name="savings" icon="savings" label="Savings" />
        <q-tab
          v-if="hasUnreadMessag"
          name="profile"
          icon="account_circle"
          label="Profile"
          alert="red"
          alert-icon="mark_unread_chat_alt"
        />
        <q-tab v-else name="profile" icon="account_circle" label="Profile" />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "TrackerLayout",

  setup() {
    const selectedTab = ref("home");
    const router = useRouter();

    const backButtonVisibility = computed(() => {
      return router.currentRoute.value.meta.withBackButton;
    });

    const getTitle = computed(() => {
      return router.currentRoute.value.meta.title;
    });

    const hasUnreadMessag = computed(() => {
      return Math.floor(Math.random() * 10) % 2 === 0;
    });

    return {
      selectedTab,
      backButtonVisibility,
      getTitle,
      hasUnreadMessag,

      onBack() {
        router.back();
      },
    };
  },
});
</script>
