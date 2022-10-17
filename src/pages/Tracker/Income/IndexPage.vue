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
                <q-icon name="currency_yen" /> 10,000.00
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
        <q-card-section class="text-center">
          <q-btn-toggle
            v-model="filterBy"
            toggle-color="deep-purple-13"
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
              <q-tooltip>This week</q-tooltip>
            </template>
            <template v-slot:month>
              <q-tooltip>This month</q-tooltip>
            </template>
            <template v-slot:lastMonth>
              <q-tooltip>Last month</q-tooltip>
            </template>
            <template v-slot:custom>
              <div class="text-center">
                <q-tooltip>Custom date range</q-tooltip>
                <q-icon name="event" @click="onSelectFilter('custom', true)" />
              </div>
            </template>
          </q-btn-toggle>
        </q-card-section>

        <q-separator unset />

        <q-card-section>
          <div class="row q-pb-md">
            <div class="col-6 col-sm-6">
              <span class="text-grey text-body1 text-weight-medium">
                Income Lists
              </span>
            </div>
            <div class="col-6 col-sm-6 text-right">
              <span class="text-grey text-caption">
                {{ dateFrom }} - {{ dateTo }}
              </span>
            </div>
          </div>

          <div class="full-width">
            <q-scroll-area
              :thumb-style="thumbStyle"
              :bar-style="barStyle"
              style="height: 450px"
              id="scroll-area-with-virtual-scroll-1"
            >
              <q-virtual-scroll
                scroll-target="#scroll-area-with-virtual-scroll-1 > .scroll"
                :items="heavyList"
                :virtual-scroll-item-size="32"
                separator
                v-slot="{ item, index }"
              >
                <q-item :key="index">
                  <q-item-section top avatar>
                    <q-avatar
                      color="deep-purple-13"
                      text-color="white"
                      icon="money"
                    />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>Salary {{ item.label }}</q-item-label>
                    <q-item-label caption lines="2">
                      Lorem ipsum dolor sit amet, consectetur adipiscit elit.
                    </q-item-label>
                  </q-item-section>

                  <q-item-section side>
                    <span>3,000.00</span>
                  </q-item-section>
                </q-item>
              </q-virtual-scroll>
            </q-scroll-area>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
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
import SelectDateForm from "src/components/forms/SelectDateForm.vue";
import QuickDialog from "components/QuickDialog.vue";

const maxSize = 100;
const heavyList = [];

for (let i = 0; i < maxSize; i++) {
  heavyList.push({
    label: "Option " + (i + 1),
  });
}

export default defineComponent({
  name: "IndexPage",

  setup() {
    const filterBy = ref("week");
    const dateFrom = ref("");
    const dateTo = ref("");
    const $q = useQuasar();

    const onSelectFilterHander = (value, isCustom = false) => {
      let from = "";
      let to = "";

      switch (value) {
        case "week":
          from = startOfWeek(new Date());
          to = endOfWeek(new Date());
          dateFrom.value = date.formatDate(from, "MM/DD/YYYY");
          dateTo.value = date.formatDate(to, "MM/DD/YYYY");
          break;

        case "month":
          from = startOfMonth(new Date());
          to = endOfMonth(new Date());
          dateFrom.value = date.formatDate(from, "MM/DD/YYYY");
          dateTo.value = date.formatDate(to, "MM/DD/YYYY");
          break;

        case "lastMonth":
          const lastMonth = subMonths(new Date(), 1);
          from = startOfMonth(lastMonth);
          to = endOfMonth(lastMonth);
          dateFrom.value = date.formatDate(from, "MM/DD/YYYY");
          dateTo.value = date.formatDate(to, "MM/DD/YYYY");
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
                dateFrom.value = date.formatDate(from, "MM/DD/YYYY");
                dateTo.value = date.formatDate(to, "MM/DD/YYYY");
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
      dateFrom,
      dateTo,
      heavyList,
      thumbStyle: {
        right: "5px",
        borderRadius: "8px",
        backgroundColor: "#6520FF",
        width: "8px",
        opacity: 0.75,
      },
      barStyle: {
        right: "2px",
        borderRadius: "14px",
        backgroundColor: "#6520FF",
        width: "14px",
        opacity: 0.2,
        marginTop: "-3px",
        marginBottom: "-3px",
        paddingTop: "3px",
        paddingBottom: "3px",
      },

      onSelectFilter: onSelectFilterHander,
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
