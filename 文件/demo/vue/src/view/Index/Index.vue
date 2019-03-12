<template>
  <div>
    <button @click="reduce">-</button>
    {{msgs}}
    <button @click="add">+</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    reduce() {
      console.log(this.data1);
      this.reduceData(Number(this.data1) - 1);
    },
    add() {
      this.addData(Number(this.data1) + 1);
    },
    ...mapActions(["reduceData"]),
    ...mapActions(["addData"])
  },
  computed: {
    ...mapState(["data1"]),
    msgs() {
      return this.$store.state.data1;
    }
  }
};
</script>

<style scoped>
</style>