<template>
  <div class="lay-outnav fullHeight">
    <el-menu :default-active="$route.path" :router="true" class="el-menu-vertical-demo fullHeight" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-header class="projectHeader">
        <!-- 系统名称或LOGO -->
        {{projectTitle}}

        <!-- 全局Loading显示 -->
        <i v-if="_requestCount" class="el-icon-loading"></i>

        <!-- 登录账号名及相关下拉功能 -->
        <el-dropdown v-if="loginUser.username" class="login-area" :hide-on-click="false" @command="handleCommand">
          <p class="el-dropdown-link">
            <span class="login-name">{{loginUser.username}}</span>
          </p>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <template v-for="(item, index) in navList">
        <el-submenu v-if="item.type=='submenu'" :key="index" :index="index+''">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item v-for="(subItem, subIndex) in item.itemList" :index="subItem.link||index+'-'+subIndex" :key="subIndex" :route="{path: subItem.link || ''}">
            <i :class="subItem.icon"></i>
            <span slot="title">{{subItem.name}}</span>
          </el-menu-item>
        </el-submenu>

        <el-menu-item v-else :index="item.link || index+''" :key="index" :route="{path: item.link || ''}">
          <i :class="item.icon"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      projectTitle: "ncadmin",
      navList: (() => {
        const allMenus = [
          {
            type: "submenu",
            icon: "el-icon-menu",
            name: "Demo",
            itemList: [
              {
                icon: "el-icon-document",
                name: "DemoList",
                link: "/demo/demo-list"
              },
              // <!-- Don't touch me - demo pages -->
            ]
          },
          // <!-- Don't touch me - modules-->
        ];

        // 菜单的权限控制
        if (this.$config) {
          return allMenus.filter(item => {
            if (!this.$config.enableAcl) return true;
            // let foundOne = window.userResources[item.rId]; // 只搜索菜单权限
            // if (foundOne && item.itemList) {
            //   item.itemList = item.itemList.filter(subItem => {
            //     return window.userResources[subItem.rId];
            //   });
            // }
            // return !!foundOne;
            return true;
          });
        }
      })(),
      loginUser: userInfo
    };
  },
  computed: mapState(["_requestCount"]),
  methods: {
    handleCommand(command) {
      switch (command) {
        case "logout": // 退出登录
          this.$axios
            .get(`${this.$config.backendHost}/admin/api/common/logout`)
            .then(res => {
              location.href = "/#/common/login";
            });
          break;
      }
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.projectHeader {
  line-height: 60px;
  font-size: 24px;
  color: #fff;
  letter-spacing: 2px;
  .login-area {
    color: #fff;
    float: right;
    height: 40px;
    margin-right: -8px;
    .login-name {
      max-width: 100px;
      overflow-x: hidden;
      text-overflow: ellipsis;
      display: inline-block;
    }
  }
}

.fullHeight {
  height: 100%;
}
</style>
