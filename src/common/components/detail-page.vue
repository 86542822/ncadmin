<template>
    <div class="detail-page">
        <nca-detail :config="config" :value="value" @goBack="goBack()"></nca-detail>
    </div>
</template>
<script>

export default {
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  created() {
    this.$data.value[this.config.idField] = this.$route.params[
      this.config.idField
    ];
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
