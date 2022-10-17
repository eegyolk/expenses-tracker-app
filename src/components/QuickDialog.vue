<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <component
      :is="subComponent"
      v-bind="{ ...subProps }"
      @input="onOKClick"
      @close="onCancelClick"
    />
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";
import { useDialogPluginComponent } from "quasar";

export default defineComponent({
  name: "QuickDialog",

  props: {
    subComponent: {
      type: Object,
      default: () => {
        return {};
      },
    },
    subProps: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },

  emits: [...useDialogPluginComponent.emits],

  setup() {
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
      useDialogPluginComponent();

    return {
      dialogRef,

      onDialogHide,

      onOKClick(data) {
        onDialogOK(data);
      },

      onCancelClick: onDialogCancel,
    };
  },
});
</script>
