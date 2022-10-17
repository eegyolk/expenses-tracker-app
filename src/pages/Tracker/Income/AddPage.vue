<template>
  <q-page class="bg-grey-3 q-gutter-md">
    <div class="row wrap justify-center q-pt-lg">
      <q-card flat class="my-card">
        <q-card-section class="q-pt-lg">
          <q-input
            v-model="amount"
            color="deep-purple-13"
            mask="###,###,###.##"
            input-class="text-center text-h4 q-pr-lg"
            outlined
            rounded
          >
            <template v-slot:prepend>
              <q-icon name="currency_yen" />
            </template>
          </q-input>
        </q-card-section>

        <q-card-section>
          <div>
            <span class="q-pl-sm text-body2">Category</span>
            <q-select
              v-model="selectedCategory"
              :options="categories"
              color="deep-purple-13"
              outlined
              dense
            >
              <template v-slot:prepend>
                <q-icon name="checklist" size="xs" class="q-pr-sm" />
              </template>
              <template v-slot:append>
                <q-btn
                  v-if="!selectedCategory"
                  icon="add"
                  size="sm"
                  round
                  dense
                  flat
                  @click.stop.prevent="onAddCategory"
                />
                <q-btn
                  v-if="selectedCategory"
                  icon="close"
                  size="sm"
                  round
                  dense
                  flat
                  @click.stop.prevent="onClearCategory"
                />
              </template>
            </q-select>
          </div>

          <div class="q-pt-sm">
            <span class="q-pl-sm text-body2">Note</span>
            <q-input
              v-model="notes"
              color="deep-purple-13"
              outlined
              dense
              autogrow
            >
              <template v-slot:prepend>
                <q-icon name="edit_note" size="xs" class="q-pr-sm" />
              </template>
            </q-input>
          </div>

          <div class="q-pt-sm">
            <span class="q-pl-sm text-body2">Date</span>
            <q-input
              v-model="transactionDate"
              color="deep-purple-13"
              outlined
              dense
              @click="onShowCalendar(true)"
            >
              <template v-slot:prepend>
                <q-icon name="event" size="xs" class="q-pr-sm" />
              </template>
            </q-input>
          </div>
        </q-card-section>

        <q-card-actions align="center" class="q-px-md q-pb-lg">
          <q-btn
            color="deep-purple-13"
            label="Save"
            class="full-width"
            no-caps
          />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { date, useQuasar } from "quasar";
import AddCategoryForm from "src/components/forms/AddCategoryForm.vue";
import SelectDateForm from "src/components/forms/SelectDateForm.vue";
import QuickDialog from "components/QuickDialog.vue";

const categoryCollections = ["Salary", "Freelance"];

export default defineComponent({
  name: "AddPage",

  setup() {
    const amount = ref(0.0);
    const selectedCategory = ref("");
    const categories = ref(categoryCollections);
    const notes = ref("");
    const transactionDate = ref(date.formatDate(Date.now(), "YYYY/MM/DD"));

    const $q = useQuasar();

    return {
      amount,
      selectedCategory,
      categories,
      notes,
      transactionDate,

      onAddCategory() {
        $q.dialog({
          component: QuickDialog,
          componentProps: {
            subComponent: AddCategoryForm,
            subProps: {
              transaction: "INCOME",
            },
          },
        })
          .onOk((value) => {
            transactionDate.value = value;
          })
          .onCancel(() => {})
          .onDismiss(() => {});
      },

      onClearCategory() {
        selectedCategory.value = "";
      },

      onShowCalendar() {
        $q.dialog({
          component: QuickDialog,
          componentProps: {
            subComponent: SelectDateForm,
            subProps: {
              selectedDate: transactionDate.value,
            },
          },
        })
          .onOk((value) => {
            transactionDate.value = value;
          })
          .onCancel(() => {})
          .onDismiss(() => {});
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
