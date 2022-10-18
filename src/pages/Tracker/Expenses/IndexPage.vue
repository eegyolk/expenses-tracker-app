<template>
  <q-page class="bg-grey-3 q-gutter-md">
    <div class="row wrap justify-center q-pt-lg">
      <q-card class="my-card" flat bordered>
        <q-card-section class="q-pt-lg">
          <div class="row items-center q-px-lg q-">
            <div class="col col-sm">
              <div class="text-body2 text-weight-medium text-grey">
                Your Expenses
              </div>

              <div class="text-h5 text-weight-bold q-mt-sm q-mb-xs">
                <q-icon name="currency_yen" /> 10,000.00
              </div>
            </div>

            <div class="col-1 col-sm-1">
              <q-btn
                color="deep-purple-13"
                icon="add"
                to="/tracker/expenses/add"
                round
                dense
                unelevated
              >
                <q-tooltip
                  anchor="bottom middle"
                  self="center middle"
                  class="bg-deep-purple-10 text-white"
                >
                  Add expenses
                </q-tooltip>
              </q-btn>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div class="row wrap justify-center q-pb-lg">
      <q-card flat bordered class="my-card">
        <q-card-section class="text-center bg-deep-purple-13 text-grey-5">
          <filter-by-section @select="onSelectFilterDateRange" />
        </q-card-section>

        <q-separator unset />

        <q-card-section>
          <div class="row q-pb-md">
            <div class="col-6 col-sm-6">
              <q-icon
                v-if="sort === 'DESC'"
                name="fa-solid fa-arrow-down-wide-short"
                color="grey"
                class="cursor-pointer"
                @click="onSortChange('ASC')"
              />
              <q-icon
                v-else
                name="fa-solid fa-arrow-up-wide-short"
                color="grey"
                class="cursor-pointer"
                @click="onSortChange('DESC')"
              />
              <span class="text-body2 text-weight-medium text-grey q-pl-xs">
                Expenses List
              </span>
            </div>

            <div class="col-6 col-sm-6 text-right">
              <span class="text-caption text-weight-medium text-grey">
                {{ dateFrom }} - {{ dateTo }}
              </span>
            </div>
          </div>

          <div class="full-width">
            <list-section transaction="EXPENSES" />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import FilterBySection from "components/sections/FilterBySection.vue";
import ListSection from "components/sections/ListSection.vue";

export default defineComponent({
  name: "IndexPage",

  components: {
    FilterBySection,
    ListSection,
  },

  setup() {
    const dateFrom = ref("");
    const dateTo = ref("");
    const sort = ref("DESC");

    return {
      dateFrom,
      dateTo,
      sort,

      onSelectFilterDateRange({ from, to }) {
        dateFrom.value = from;
        dateTo.value = to;
      },

      onSortChange(value) {
        sort.value = value;
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
