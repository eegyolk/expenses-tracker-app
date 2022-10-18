<template>
  <q-card flat class="my-card">
    <q-card-section class="bg-deep-purple-13 text-white">
      <div class="row items-center">
        <div class="col col-sm">
          <span class="text-body1">Add Category</span>
        </div>

        <div class="col-1 col-sm-1">
          <q-btn
            class=""
            icon="close"
            size="sm"
            round
            dense
            flat
            @click.stop.prevent="onClose"
          />
        </div>
      </div>
    </q-card-section>

    <q-card-section>
      <q-input
        v-model="category"
        color="deep-purple-13"
        placeholder="Enter new category"
        outlined
        dense
      />
    </q-card-section>

    <q-separator unset />

    <q-card-actions align="right">
      <q-btn
        color="deep-purple-13"
        label="Save"
        no-caps
        @click.stop.prevent="onSave"
      />

      <q-btn
        color="deep-purple-13"
        label="Cancel"
        no-caps
        @click.stop.prevent="onClose"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent, ref, onBeforeUnmount } from "vue";
import { date, useQuasar, QSpinnerIos } from "quasar";

export default defineComponent({
  name: "AddCategoryForm",

  props: {
    transaction: {
      type: String,
      default: "",
    },
  },

  setup(props, { emit }) {
    const category = ref("");

    let timer;
    const $q = useQuasar();

    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer);
      }
    });

    return {
      category,

      onSave() {
        $q.loading.show({
          spinner: QSpinnerIos,
          spinnerColor: "deep-purple-13",
          spinnerSize: "md",
          backgroundColor: "grey-1",
        });

        timer = setTimeout(() => {
          $q.loading.hide();
          console.log(props.transaction);
          emit("input", category.value);
        }, 1000);
      },

      onClose() {
        emit("close");
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 350px;
}
</style>
