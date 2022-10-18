<template>
  <q-btn-toggle
    v-model="filterBy"
    toggle-color="white"
    :options="[
      { label: 'Week', value: 'week', slot: 'week' },
      { label: 'Month', value: 'month', slot: 'month' },
      { label: 'Last Month', value: 'lastMonth', slot: 'lastMonth' },
      { value: 'custom', slot: 'custom' },
    ]"
    stretch
    no-caps
    flat
    @update:model-value="(value) => onSelectFilter(value, false)"
  >
    <template v-slot:week>
      <q-tooltip
        anchor="bottom middle"
        self="center middle"
        class="bg-deep-purple-10 text-white"
        >This week</q-tooltip
      >
    </template>

    <template v-slot:month>
      <q-tooltip
        anchor="bottom middle"
        self="center middle"
        class="bg-deep-purple-10 text-white"
        >This month</q-tooltip
      >
    </template>

    <template v-slot:lastMonth>
      <q-tooltip
        anchor="bottom middle"
        self="center middle"
        class="bg-deep-purple-10 text-white"
        >Last month</q-tooltip
      >
    </template>

    <template v-slot:custom>
      <div class="text-center">
        <q-tooltip
          anchor="bottom middle"
          self="center middle"
          class="bg-deep-purple-10 text-white"
          >Custom date range</q-tooltip
        >
        <q-icon name="date_range" @click="onSelectFilter('custom', true)" />
      </div>
    </template>
  </q-btn-toggle>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { date, useQuasar } from "quasar";
import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  subMonths,
} from "date-fns";
import SelectDateForm from "components/forms/SelectDateForm.vue";
import QuickDialog from "components/QuickDialog.vue";

export default defineComponent({
  name: "FilterBySection",

  setup(props, { emit }) {
    const filterBy = ref("week");

    const $q = useQuasar();

    const onSelectFilterHander = (value, isCustom = false) => {
      let from = "";
      let to = "";

      switch (value) {
        case "week":
          from = startOfWeek(new Date());
          to = endOfWeek(new Date());
          emit("select", {
            from: date.formatDate(from, "MM/DD/YYYY"),
            to: date.formatDate(to, "MM/DD/YYYY"),
          });
          break;

        case "month":
          from = startOfMonth(new Date());
          to = endOfMonth(new Date());
          emit("select", {
            from: date.formatDate(from, "MM/DD/YYYY"),
            to: date.formatDate(to, "MM/DD/YYYY"),
          });
          break;

        case "lastMonth":
          const lastMonth = subMonths(new Date(), 1);
          from = startOfMonth(lastMonth);
          to = endOfMonth(lastMonth);
          emit("select", {
            from: date.formatDate(from, "MM/DD/YYYY"),
            to: date.formatDate(to, "MM/DD/YYYY"),
          });
          break;

        case "custom":
          if (isCustom) {
            $q.dialog({
              component: QuickDialog,
              componentProps: {
                subComponent: SelectDateForm,
                subProps: {
                  rangeSelection: true,
                },
              },
            })
              .onOk((value) => {
                from = value.from;
                to = value.to;
                emit("select", {
                  from: date.formatDate(from, "MM/DD/YYYY"),
                  to: date.formatDate(to, "MM/DD/YYYY"),
                });
              })
              .onCancel(() => {})
              .onDismiss(() => {});
          }
          break;
      }
    };

    onMounted(() => {
      onSelectFilterHander("week", false);
    });

    return {
      filterBy,

      onSelectFilter: onSelectFilterHander,
    };
  },
});
</script>

<style lang="scss" scoped></style>
