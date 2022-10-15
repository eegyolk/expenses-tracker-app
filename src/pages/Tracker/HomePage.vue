<template>
  <q-page>
    <div class="flex flex-center q-pt-xl q-gutter-lg">
      <q-card flat class="my-card-total">
        <q-card-section class="q-gutter-md">
          <div class="text-left">
            <q-btn color="purple-10" icon="account_balance_wallet" round />
          </div>

          <div class="text-left">
            <span class="text-body1">$ 10,000.00</span> <br />
            <span class="text-caption text-grey">Income</span>
          </div>
        </q-card-section>
      </q-card>

      <q-card flat class="my-card-total">
        <q-card-section class="q-gutter-md">
          <div class="text-left">
            <q-btn color="blue-10" icon="shopping_cart" round />
          </div>

          <div class="text-left">
            <span class="text-body1">$ 1,000.00</span> <br />
            <span class="text-caption text-grey">Expenses</span>
          </div>
        </q-card-section>
      </q-card>

      <q-card flat class="my-card-total">
        <q-card-section class="q-gutter-md">
          <div class="text-left">
            <q-btn color="brown-10" icon="account_balance" round />
          </div>

          <div class="text-left">
            <span class="text-body1">$ 2,000.00</span> <br />
            <span class="text-caption text-grey">Investment</span>
          </div>
        </q-card-section>
      </q-card>

      <q-card flat class="my-card-total">
        <q-card-section class="q-gutter-md">
          <div class="text-left">
            <q-btn color="green-10" icon="savings" round />
          </div>

          <div class="text-left">
            <span class="text-body1">$ 9,000.00</span> <br />
            <span class="text-caption text-grey">Savings</span>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div class="flex flex-center q-pt-xl">
      <q-card flat class="">
        <q-card-section class="q-gutter-md">
          <apexchart
            width="450"
            type="bar"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
  name: "HomePage",

  components: {
    apexchart: VueApexCharts,
  },

  setup() {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
          stacked: true,
        },
        xaxis: {
          categories: [1, 2, 3, 4, 5, 6, 7],
        },
        colors: ["#663D9D", "#3864AE", "#5C4B48", "#427544"],
        grid: {
          show: false,
        },
      },
      series: [
        {
          name: "Income",
          data: [100, 95, 90, 85, 80, 75, 70],
        },
        {
          name: "Expenses",
          data: [5, 10, 5, 5, 10, 20, 5],
        },
        {
          name: "Investment",
          data: [5, 10, 5, 5, 10, 20, 5],
        },
        {
          name: "Savings",
          data: [95, 85, 80, 75, 65, 45, 40],
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.my-card-total {
  width: 30%;
  max-width: 150px;
}
</style>
