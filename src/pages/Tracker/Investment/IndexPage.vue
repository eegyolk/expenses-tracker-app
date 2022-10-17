<template>
  <q-page class="bg-grey-3 q-gutter-md">
    <div class="row wrap justify-center q-pt-lg">
      <q-card class="my-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-overline">Your investment</div>
            <div class="text-h5 q-mt-sm q-mb-xs">$ 10,000.00</div>
            <div class="text-caption text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </q-card-section>

          <q-card-section class="col-5 flex flex-center">
            <q-img class="rounded-borders" src="~assets/investment-image.svg" />
          </q-card-section>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <div class="text-center">
            <q-btn flat class="text-strike"> Day </q-btn>
            <q-btn flat> Week </q-btn>
            <q-btn flat> Month </q-btn>
            <q-btn flat> Range </q-btn>
          </div>

          <div class="text-center">Sat, Oct. 16, 2022</div>
        </q-card-section>
      </q-card>
    </div>

    <div class="row wrap justify-center">
      <q-card flat class="my-card">
        <q-card-section>
          <div class="row q-pb-md">
            <div class="col-6 col-sm-6">
              <span class="text-grey text-body1 text-weight-medium">
                Investment Lists
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
