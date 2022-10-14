<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-deep-purple-13" elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-space />

        <div class="q-gutter-md">
          <q-btn flat color="white" round icon="notifications">
            <q-badge color="red" floating rounded="">22</q-badge>
          </q-btn>
          <q-avatar size="40px">
            <img :src="`https://cdn.quasar.dev/img/avatar1.jpg`" />
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Navigation </q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
