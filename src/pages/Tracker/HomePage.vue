<template>
  <q-page class="flex flex-center">
    <q-card flat class="my-card">
      <q-card-section class="text-center">
        <img
          src="~assets/index-image.svg"
          style="width: 200px; height: 200px"
        />
      </q-card-section>

      <q-card-section>
        <div class="text-h6 text-center q-pt-lg">Tracker</div>
        <div class="text-caption text-center q-py-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
});
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 350px;
  padding: 25px;
}
</style>
