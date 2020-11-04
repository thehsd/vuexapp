<template>
  <div>
    <h2>
      Result :<span> {{ counter }}</span>
    </h2>
   
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
   
  },
};
</script>

<style scoped></style>
