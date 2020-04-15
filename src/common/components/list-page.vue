<template>
  <div class="list-page">
    <nca-list :config="config" v-model="valueData" @pathChange="pathChange"></nca-list>
  </div>
</template>

<script>
import _get from 'lodash-es/get';

export default {
  created() {
    this.$data.valueData = Object.assign(this.$data.valueData, _get(this.$store.state, this.storeValueName));
  },
  props: {
    config: {
      type: Object,
      default: {}
    },
    storeValueName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      valueData: {
        pageNum: 1,
        pageSize: 20,
        query: {}
      }
    };
  },
  methods: {
    pathChange(path){          
      if (path.indexOf("http") !== -1) {
        window.open(path);
      } else {
        this.$router.push({
          path
        });
      }
    }
  },
  watch: {
    valueData: {
      handler(newValue) {
        this.$store.commit(this.storeValueName.replace(/\./g,'/'), newValue);
      },
      deep: true
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  /deep/ .nca-list {
    .mbSpace {
      margin-bottom: 0 !important;
    }
    .toolbar-area {
      background-color: #fafafa;
      padding: 8px;
    }
    .to-top-btn {
      right: 5px !important;
    }
  }

</style>
