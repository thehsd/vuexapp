<template>
  <div>
    <app-counter></app-counter>
    <app-result></app-result>
    <app-result2></app-result2>
  </div>
</template>

<script>
import Counter from "./components/Counter";
import Result from "./components/Result";
import Result2 from "./components/Result2";
export default {
  components: {
    appCounter: Counter,
    appResult: Result,
    appResult2: Result2,
  },
};
</script>

<style scoped></style>
