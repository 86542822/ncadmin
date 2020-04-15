<template>
  <div class="edit-page">
    <nca-edit :config="config" :value="value" @goBack="goBack"></nca-edit>
  </div>
</template>

<script>
export default {
  created() {
    this.$data.value[this.config.idField] = this.$route.params[
      this.config.idField
    ];
  },
  props: {
    config: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      value: {}
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  watch: {
    $route: {
      handler() {
        const value = {};
        value[this.config.idField] = this.$route.params[this.config.idField];
        this.$data.value = value;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>

</style>
