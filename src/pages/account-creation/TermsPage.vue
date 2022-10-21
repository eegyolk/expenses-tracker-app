<template>
  <q-page class="q-pa-md flex flex-center">
    <q-card flat>
      <q-card-section class="full-width">
        <p
          class="text-justify text-caption text-grey-9"
          v-for="n in 10"
          :key="n"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
          perferendis totam, ea at omnis vel numquam exercitationem aut, natus
          minima, porro labore. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet
          porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam
          exercitationem aut, natus minima, porro labore.
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
