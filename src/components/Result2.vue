<template>
  <div>
    <h2>
      Result :<span> {{ counter2 }}</span>
    </h2>
    <h2>
      click :<span> {{ hesabcounter }}</span>
    </h2>
    <span>{{abc}}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
      ...mapGetters(["counter2", "hesabcounter"]),
      abc(){
          return 'dsf'
      }
  }
};
</script>

<style scoped></style>
