<template>
  <q-scroll-area
    id="scroll-area-with-virtual-scroll-1"
    :thumb-style="thumbStyle"
    :bar-style="barStyle"
    style="height: 450px"
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
          <q-avatar color="deep-purple-13" text-color="white" icon="money" />
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
</template>

<script>
import { defineComponent } from "vue";

const maxSize = 100;
const heavyList = [];

for (let i = 0; i < maxSize; i++) {
  heavyList.push({
    label: "Option " + (i + 1),
  });
}

export default defineComponent({
  name: "ListSection",

  setup() {
    return {
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
      heavyList,
    };
  },
});
</script>

<style lang="scss" scoped></style>
