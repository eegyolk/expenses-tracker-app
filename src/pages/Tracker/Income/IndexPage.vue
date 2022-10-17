<template>
  <q-page class="bg-grey-3 q-gutter-md">
    <div class="row wrap justify-center q-pt-lg">
      <q-card class="my-card" flat bordered>
        <q-card-section class="q-pt-lg">
          <div class="row items-center q-px-lg q-">
            <div class="col col-sm">
              <div class="text-body2 text-weight-medium text-grey">
                Your Income
              </div>
              <div class="text-h5 text-weight-bold q-mt-sm q-mb-xs">
                $ 10,000.00
              </div>
            </div>

            <div class="col-1 col-sm-1">
              <q-btn
                color="deep-purple-13"
                icon="add"
                to="/tracker/income/add"
                round
                dense
                unelevated
              />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div class="row wrap justify-center">
      <q-card flat bordered class="my-card">
        <q-card-section>
          <div class="row q-pb-md">
            <div class="col-6 col-sm-6">
              <span class="text-grey text-body1 text-weight-medium">
                Income Lists
              </span>
            </div>
          </div>

          <div class="full-width">
            <q-table
              style="height: 400px"
              :rows="rows"
              :columns="columns"
              row-key="index"
              virtual-scroll
              v-model:pagination="pagination"
              :rows-per-page-options="[0]"
              hide-bottom
            />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { date } from "quasar";

const typeCollections = [
  { icon: "wallet", label: "Salary" },
  { icon: "add_card", label: "Freelance" },
];

const columns = [
  {
    name: "name",
    required: true,
    label: "Dessert (100g serving)",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "Calories",
    field: "calories",
    sortable: true,
  },
];

const rows = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
  },
];

export default defineComponent({
  name: "IndexPage",

  setup() {
    const currentDate = ref(date.formatDate(Date.now(), "YYYY/MM/DD"));
    const selectedType = ref("");
    const types = ref(typeCollections);
    const amount = ref(0);

    return {
      currentDate,
      selectedType,
      types,
      amount,
      columns,
      rows,
      pagination: ref({
        rowsPerPage: 0,
      }),
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
