<template>
  <q-date
    v-model="date"
    color="deep-purple-13"
    :range="rangeSelection"
    today-btn
    @update:model-value="onSelectDate"
  />
</template>

<script>
import { defineComponent, ref } from "vue";
import { date } from "quasar";

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

    return {
      date,

      onSelectDate(value) {
        emit("input", value);
      },
    };
  },
});
</script>
