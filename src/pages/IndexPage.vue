<template>
  <q-page v-if="visiblePage" class="q-pa-md flex flex-center grad">
    <div class="row wrap justify-center full-width">
      <q-card flat>
        <q-carousel
          v-model="carouselPage"
          control-text-color="deep-purple-13"
          :height="`${windowHeight / 2 + 50}px`"
          swipeable
          animated
          navigation
          padding
          infinite
        >
          <q-carousel-slide name="home" class="column no-wrap flex-center">
            <q-card-section class="text-center">
              <img
                src="~assets/index-welcome-img.svg"
                style="width: 200px; height: 200px"
              />

              <div class="text-h6 q-pt-lg">Be SMART with your MONEY...</div>

              <div class="text-caption q-py-md">
                Keep track of your income, expenditure, investment and savings.
                Learn how to handle your finances and regain control of your
                life.
              </div>
            </q-card-section>
          </q-carousel-slide>

          <q-carousel-slide name="income" class="column no-wrap flex-center">
            <q-card-section class="text-center">
              <img
                src="~assets/index-income-img.svg"
                style="width: 200px; height: 200px"
              />

              <div class="text-h6 q-pt-lg">Income</div>

              <div class="text-caption q-py-md">
                Income is money that an individual or business receives in
                exchange for providing labor, producing a good or service or
                investing capital.
              </div>
            </q-card-section>
          </q-carousel-slide>

          <q-carousel-slide name="expenses" class="column no-wrap flex-center">
            <q-card-section class="text-center">
              <img
                src="~assets/index-expenses-img.svg"
                style="width: 200px; height: 200px"
              />

              <div class="text-h6 q-pt-lg">Expenses</div>

              <div class="text-caption q-py-md">
                An expense is a type of expenditure that flows through the
                income statement and is deducted from revenue to arrive at net
                income.
              </div>
            </q-card-section>
          </q-carousel-slide>

          <q-carousel-slide
            name="investment"
            class="column no-wrap flex-center"
          >
            <q-card-section class="text-center">
              <img
                src="~assets/index-investment-img.svg"
                style="width: 200px; height: 200px"
              />

              <div class="text-h6 q-pt-lg">Investment</div>

              <div class="text-caption q-py-md">
                Investing can provide you with another source of income, fund
                your retirement or even get you out of a financial jam.
              </div>
            </q-card-section>
          </q-carousel-slide>

          <q-carousel-slide name="savings" class="column no-wrap flex-center">
            <q-card-section class="text-center">
              <img
                src="~assets/index-savings-img.svg"
                style="width: 200px; height: 200px"
              />

              <div class="text-h6 q-pt-lg">Savings</div>

              <div class="text-caption q-py-md">
                Savings can also mean it is for money management such as savings
                for debit payments. This is a good tip that can help you avoid
                drowning in debt as well.
              </div>
            </q-card-section>
          </q-carousel-slide>
        </q-carousel>
      </q-card>
    </div>

    <div class="row wrap justify-center" :style="{ width: `${windowWidth}px` }">
      <q-btn
        class="full-width q-mb-md"
        color="deep-purple-13"
        label="Register"
        to="/register"
        no-caps
        outline
      />

      <q-btn
        class="full-width"
        color="deep-purple-13"
        label="Login"
        to="/login"
        no-caps
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { usePage } from "src/composables/page";

export default defineComponent({
  name: "IndexPage",

  setup() {
    const windowWidth = ref(0);
    const windowHeight = ref(0);
    const carouselPage = ref("home");

    const { visiblePage } = usePage();

    onMounted(() => {
      windowWidth.value = window.innerWidth;
      windowHeight.value = window.innerHeight;
    });

    return {
      visiblePage,
      windowWidth,
      windowHeight,
      carouselPage,
    };
  },
});
</script>

<style lang="scss" scoped></style>
