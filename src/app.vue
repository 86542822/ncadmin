<!--suppress ALL -->
<template>
  <div id="app" :class="{'full-screen': isFullScreen}">
    <el-container class="fullHeight">
      <el-aside width="220px" class="fullHeight">
        <layout-nav></layout-nav>
      </el-aside>
      <el-container>
        <el-main>
          <el-breadcrumb class="breadcrumb" separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, idx) in breadcrumbItems" :key="idx" :to="{ path: item.link }">{{item.name}}</el-breadcrumb-item>
          </el-breadcrumb>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import layoutNav from "common/components/layout-nav.vue";

// 加载所有模块的组件索引
import "modules/comp-index.js";
import "modules/demo/comp-index.js";
// <!-- Don't touch me - import comp-index -->


export default {
  mounted() {
    this.$options.navList = this.$children[0].$children[0].$children[0].navList;
  },
  data() {
    return {
      breadcrumbItems: [],
      isFullScreen: false
    };
  },
  methods: {},
  components: {
    layoutNav
  },
  watch: { 
    // 如果路由有变化，会再次执行该方法
    '$route': function(routeTo) {

      if (routeTo.meta.fullScreen) { // 全屏模式
        this.$data.isFullScreen = true;
      } else {
        this.$data.isFullScreen = false;  
      }

      let path = routeTo.matched[0].path.replace(/\/:.*/, ''); // 去除参数

      this.$data.breadcrumbItems = [];
      this.$options.navList.some(navItem => {
        if (navItem.itemList) { // 如果有下一级
          let foundSubOne = navItem.itemList.find(subNavItem => {
            return subNavItem.link === path;
          })
          if (foundSubOne) {
            this.$data.breadcrumbItems.push({ name: navItem.name });
            this.$data.breadcrumbItems.push({ name: foundSubOne.name, link: foundSubOne.link });
            return true;
          }
        } else {
          if (navItem.link === path) {
            this.$data.breadcrumbItems.push({ name: navItem.name, link: navItem.link });
            return true;
          }
        }
      })

      if (path !== routeTo.path) { // 叶子级页面
        this.$data.breadcrumbItems.push({ name: routeTo.meta.title });
      }
    }
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}

#app {
  height: 100%;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
  "Microsoft YaHei", "微软雅黑", Arial, sans-serif;

  &.full-screen {
    .el-aside, .breadcrumb {
      display: none;
    }
  }

  .breadcrumb {
    margin-bottom: 10px;
  }

  .ncform {
    .invalid-feedback {
      color: #f56c6c;
    }

    .__ncform-control {
      &.el-select {
        .el-input {
          width: 100%;
        }
      }
    }
  }
}

.fullHeight {
  height: 100%;
}
</style>