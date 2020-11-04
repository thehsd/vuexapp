<template>
  <div>
    <button class="btn" @click="plus">plus</button>
    <button class="btn" @click="minus">minus</button>
  </div>
</template>

<script>
export default {
  methods: {
    plus() {
      this.$store.state.counter++;
    },
    minus() {
      this.$store.state.counter--;
    },
  },
};
</script>

<style scoped>
.btn {
  width: 70px;
  height: 40px;
  border: 1px solid;
  outline: none;
  background: #12a367;
  color: #fff;
  margin: 10px;
  cursor: pointer;
}
.btn:hover{
    background: #0d754a;
}
</style>
