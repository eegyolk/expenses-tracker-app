import { ref, onMounted, onBeforeUnmount } from "vue";
import { useQuasar, QSpinnerIos } from "quasar";

export function usePage() {
  const visiblePage = ref(false);

  let timer;
  const $q = useQuasar();

  onMounted(() => {
    $q.loading.show({
      spinner: QSpinnerIos,
      spinnerColor: "deep-purple-13",
      spinnerSize: "md",
      backgroundColor: "white",
    });

    timer = setTimeout(() => {
      $q.loading.hide();
      visiblePage.value = true;
    }, 500);
  });

  onBeforeUnmount(() => {
    if (timer !== void 0) {
      clearTimeout(timer);
    }
  });

  return { visiblePage };
}
