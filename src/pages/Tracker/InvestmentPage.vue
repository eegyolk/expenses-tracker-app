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
        <div class="text-h6 text-center q-pt-lg">Investment</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "InvestmentPage",
});
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 350px;
  padding: 25px;
}
</style>
