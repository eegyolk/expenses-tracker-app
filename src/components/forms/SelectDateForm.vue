<template>
  <div>
    <q-date
      v-model="date"
      color="deep-purple-13"
      :range="rangeSelection"
      today-btn
      @update:model-value="onSelectDate"
    />
  </div>
</template>

<script>
import { defineComponent, ref, onBeforeUnmount } from "vue";
import { date, useQuasar, QSpinnerIos } from "quasar";

export default defineComponent({
  name: "SelectDateForm",

  props: {
    rangeSelection: {
      type: Boolean,
      default: false,
    },
    selectedDate: {
      type: String,
      default: "",
    },
  },

  setup(props, { emit }) {
    const date = ref(props.selectedDate);

    let timer;
    const $q = useQuasar();

    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer);
      }
    });

    return {
      date,

      onSelectDate(value) {
        $q.loading.show({
          spinner: QSpinnerIos,
          spinnerColor: "deep-purple-13",
          spinnerSize: "md",
          backgroundColor: "grey-1",
        });

        timer = setTimeout(() => {
          $q.loading.hide();
          emit("input", value);
        }, 1000);
      },
    };
  },
});
</script>
