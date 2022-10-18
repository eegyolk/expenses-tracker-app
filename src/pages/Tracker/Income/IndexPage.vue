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
          <filter-by-section @select="onSelectFilterDateRange" />
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
import { defineComponent, ref } from "vue";
import FilterBySection from "components/sections/FilterBySection.vue";

const maxSize = 100;
const heavyList = [];

for (let i = 0; i < maxSize; i++) {
  heavyList.push({
    label: "Option " + (i + 1),
  });
}

export default defineComponent({
  name: "IndexPage",

  components: {
    FilterBySection,
  },

  setup() {
    const dateFrom = ref("");
    const dateTo = ref("");

    return {
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

      onSelectFilterDateRange({ from, to }) {
        dateFrom.value = from;
        dateTo.value = to;
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
