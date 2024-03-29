<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-deep-purple-13" elevated>
      <q-toolbar>
        <div class="col-1 col-sm-1 text-left">
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

        <div class="col-1 col-sm-1 text-right"></div>
      </q-toolbar>
    </q-header>

    <q-footer v-if="footerToolbarVisibility" bordered class="bg-deep-purple-13">
      <q-tabs
        active-color="white"
        indicator-color="transparent"
        class="text-grey"
        v-model="selectedTab"
        no-caps
      >
        <q-route-tab
          name="home"
          icon="home"
          to="/tracker/home"
          content-class=""
          exact
          replace
          dense
        >
          <q-tooltip
            anchor="top middle"
            self="center middle"
            class="bg-deep-purple-10 text-white"
          >
            Home
          </q-tooltip>
        </q-route-tab>

        <q-route-tab
          name="income"
          icon="account_balance_wallet"
          to="/tracker/income"
          exact
          replace
        >
          <q-tooltip
            anchor="top middle"
            self="center middle"
            class="bg-deep-purple-10 text-white"
          >
            Income
          </q-tooltip>
        </q-route-tab>

        <q-route-tab
          name="expenses"
          icon="shopping_cart"
          to="/tracker/expenses"
          exact
          replace
        >
          <q-tooltip
            anchor="top middle"
            self="center middle"
            class="bg-deep-purple-10 text-white"
          >
            Expenses
          </q-tooltip>
        </q-route-tab>

        <q-route-tab
          name="investment"
          icon="account_balance"
          to="/tracker/investment"
          exact
          replace
        >
          <q-tooltip
            anchor="top middle"
            self="center middle"
            class="bg-deep-purple-10 text-white"
          >
            Investment
          </q-tooltip>
        </q-route-tab>

        <q-route-tab
          v-if="hasUnreadMessages"
          name="profile"
          icon="account_circle"
          alert="red"
          alert-icon="mark_unread_chat_alt"
          to="/tracker/profile"
          exact
          replace
        >
          <q-tooltip
            anchor="top middle"
            self="center middle"
            class="bg-deep-purple-10 text-white"
          >
            Profile
          </q-tooltip>
        </q-route-tab>

        <q-route-tab
          v-else
          name="profile"
          icon="account_circle"
          to="/tracker/profile"
          exact
          replace
        >
          <q-tooltip
            anchor="top middle"
            self="center middle"
            class="bg-deep-purple-10 text-white"
          >
            Profile
          </q-tooltip>
        </q-route-tab>
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

    const footerToolbarVisibility = computed(() => {
      return router.currentRoute.value.meta.withFooterToolbar;
    });

    const hasUnreadMessages = computed(() => {
      // TODO:: get the unread messages
      return Math.floor(Math.random() * 10) % 2 === 0;
    });

    return {
      selectedTab,
      backButtonVisibility,
      getTitle,

      footerToolbarVisibility,
      hasUnreadMessages,

      onBack() {
        router.back();
      },
    };
  },
});
</script>
