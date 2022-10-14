<template>
  <q-page class="flex flex-center">
    <q-card flat>
      <q-card-section class="bg-deep-purple-13">
        <div class="text-h6 text-center q-pt-lg text-white">
          Terms of Service
        </div>
      </q-card-section>

      <q-card-section class="full-width text-center">
        <p class="q-px-xs text-caption" v-for="n in 15" :key="n">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
          perferendis totam, ea at omnis vel numquam exercitationem aut, natus
          minima, porro labore.
        </p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TermsPage",
});
</script>

<style lang="scss" scoped></style>
