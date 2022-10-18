<template>
  <div class="overflow-auto hide-scrollbar" style="height: 450px">
    <div v-if="Object.keys(list).length > 0">
      <div v-for="key in Object.keys(list)" :key="key">
        <div
          class="row bg-grey-4 text-black text-body2 text-weight-medium q-pa-md"
        >
          <div class="col-6 col-sm-6 text-left">
            <q-icon name="event" class="q-pr-sm" />
            <span>{{ key }}</span>
          </div>
          <div class="col-6 col-sm-6 text-right">
            <q-icon name="currency_yen" /> {{ sumGroupBy(list[key]) }}
          </div>
        </div>

        <q-item
          v-for="(item, index) in list[key]"
          :key="`${key}-${index}`"
          clickable
        >
          <q-item-section top avatar>
            <q-icon color="deep-purple-13" :name="item.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-body2 text-weight-medium">
              {{ item.category }}
            </q-item-label>
            <q-item-label caption lines="2">
              {{ item.notes }}
            </q-item-label>
            <q-tooltip
              anchor="bottom middle"
              self="center middle"
              class="bg-deep-purple-10 text-white"
              style="width: 300px"
            >
              {{ item.notes }}
            </q-tooltip>
          </q-item-section>

          <q-item-section side>
            {{ item.amount }}
          </q-item-section>
        </q-item>
      </div>

      <div class="text-center q-pa-xs">
        <q-btn
          icon="more_horiz"
          color="deep-purple-13"
          rounded
          unelevated
          no-caps
          dense
        >
          <q-tooltip
            anchor="bottom middle"
            self="center middle"
            class="bg-deep-purple-10 text-white"
          >
            Load more
          </q-tooltip>
        </q-btn>
      </div>
    </div>

    <div v-else class="flex flex-center text-grey" style="height: 400px">
      <q-avatar color="grey" class="text-white" icon="folder_off" size="sm" />
      <span class="q-pl-sm">No {{ transaction.toLowerCase() }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { date } from "quasar";

const dataSource = [
  {
    icon: "fa-solid fa-money-bill",
    category: "Salary",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscit elit. Lorem ipsum dolor sit amet, consectetur adipiscit elit. Lorem ipsum dolor sit amet, consectetur adipiscit elit.",
    amount: 1000.0,
    date: "2022-10-01",
  },
  {
    icon: "fa-solid fa-money-bill",
    category: "Salary",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscit elit. Lorem ipsum dolor sit amet, consectetur adipiscit elit. Lorem ipsum dolor sit amet, consectetur adipiscit elit.",
    amount: 2000.0,
    date: "2022-10-01",
  },
  {
    icon: "fa-solid fa-money-bill",
    category: "Salary",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscit elit. Lorem ipsum dolor sit amet, consectetur adipiscit elit. Lorem ipsum dolor sit amet, consectetur adipiscit elit.",
    amount: 3000.12,
    date: "2022-10-02",
  },
  {
    icon: "fa-solid fa-money-bill",
    category: "Salary",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscit elit. Lorem ipsum dolor sit amet, consectetur adipiscit elit. Lorem ipsum dolor sit amet, consectetur adipiscit elit.",
    amount: 4000.0,
    date: "2022-10-02",
  },
  {
    icon: "fa-solid fa-money-bill",
    category: "Salary",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscit elit. Lorem ipsum dolor sit amet, consectetur adipiscit elit. Lorem ipsum dolor sit amet, consectetur adipiscit elit.",
    amount: 5000.45,
    date: "2022-10-05",
  },
  {
    icon: "fa-solid fa-money-bill",
    category: "Salary",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscit elit. Lorem ipsum dolor sit amet, consectetur adipiscit elit. Lorem ipsum dolor sit amet, consectetur adipiscit elit.",
    amount: 6000.35,
    date: "2022-10-05",
  },
  {
    icon: "fa-solid fa-money-bill",
    category: "Salary",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscit elit. Lorem ipsum dolor sit amet, consectetur adipiscit elit. Lorem ipsum dolor sit amet, consectetur adipiscit elit.",
    amount: 7000.0,
    date: "2022-10-08",
  },
  {
    icon: "fa-solid fa-money-bill",
    category: "Salary",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscit elit. Lorem ipsum dolor sit amet, consectetur adipiscit elit. Lorem ipsum dolor sit amet, consectetur adipiscit elit.",
    amount: 8000.3,
    date: "2022-10-08",
  },
  {
    icon: "fa-solid fa-money-bill",
    category: "Salary",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscit elit. Lorem ipsum dolor sit amet, consectetur adipiscit elit. Lorem ipsum dolor sit amet, consectetur adipiscit elit.",
    amount: 9000.4,
    date: "2022-10-09",
  },
  {
    icon: "fa-solid fa-money-bill",
    category: "Salary",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscit elit. Lorem ipsum dolor sit amet, consectetur adipiscit elit. Lorem ipsum dolor sit amet, consectetur adipiscit elit.",
    amount: 100.0,
    date: "2022-10-09",
  },
  {
    icon: "fa-solid fa-money-bill",
    category: "Salary",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscit elit. Lorem ipsum dolor sit amet, consectetur adipiscit elit. Lorem ipsum dolor sit amet, consectetur adipiscit elit.",
    amount: 200.1,
    date: "2022-10-10",
  },
  {
    icon: "fa-solid fa-money-bill",
    category: "Salary",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscit elit. Lorem ipsum dolor sit amet, consectetur adipiscit elit. Lorem ipsum dolor sit amet, consectetur adipiscit elit.",
    amount: 300.2,
    date: "2022-10-11",
  },
];

export default defineComponent({
  name: "ListSection",

  props: {
    transaction: {
      type: String,
      default: "",
    },
  },

  setup() {
    const groupBy = (arr, key) => {
      const initialValue = {};
      return arr.reduce((acc, cval) => {
        const myAttribute = date.formatDate(cval[key], "MM/DD/YYYY");
        acc[myAttribute] = [...(acc[myAttribute] || []), cval];
        return acc;
      }, initialValue);
    };

    const list = ref(groupBy(dataSource, "date"));

    const sumGroupBy = (arr) => {
      return arr.reduce((partialSum, a) => {
        return partialSum + parseFloat(a.amount);
      }, 0);
    };

    return {
      list,

      sumGroupBy,
    };
  },
});
</script>

<style lang="scss" scoped></style>
