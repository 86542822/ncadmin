<template>
  <div class="demo-list">
    <list-page :config="config" :storeValueName="storeValueName"></list-page>
  </div>
</template>

<script>
import listPage from "common/components/list-page.vue";

export default {
  components: {
    listPage
  },
  data() {
    return {
      storeValueName: "demo.demoListValue",

      config: {
        // 查询条件
        query: {
          normal: {
            // 普通搜索
            type: "object",
            properties: {
              keyword: {
                type: "string",
                ui: {
                  label: "关键字",
                  columns: 3
                }
              }
            },
            ui: {
              widgetConfig: {
                layout: "h"
              }
            }
          }
        },

        // 工具栏
        toolbar: {
          // 批量操作
          batchActions: {
            delete: {
              handler: {
                type: "ajax",
                options: {
                  apiUrl: "/api/demo/delete",
                  method: "post",
                  params: [
                    {
                      name: "id",
                      value: "dx: {{$selected[e].id}}"
                    }
                  ]
                },
                refresh: "current"
              }
            },
            others: []
          },

          // 其它操作
          tools: {
            new: {
              handler: {
                type: "modal",
                options: {
                  component: {
                    name: "demo.modals.demo-edit",
                    config: {}
                  },
                  modalConfig: {
                    title: "新建用户"
                  }
                },
                refresh: "current"
              }
            },
            others: []
          }
        },

        // 显示列表
        list: {
          datasource: {
            apiUrl: "/api/demo/list",
            method: "get",
            paramFields: {
              pageSize: "pageSize",
              pageNum: "pageNum",
              query: ""
            },
            otherParams: {},
            resField: {
              pageingTotal: "page.total",
              list: "data"
            }
          },

          // 是否全选
          selectAll: true,

          // 是否可配置显示列
          columnsConfigurable: false,

          // 数据列
          columns: [
            {
              header: "姓名",
              dataField: "name"
            },
            {
              header: "头像",
              component: {
                name: "nca-image",
                config: {
                  maxWidth: "80px"
                },
                value: "dx: {{$item.photo}}"
              }
            }
          ],

          // 项操作
          actions: {
            delete: {
              handler: {
                type: "ajax",
                options: {
                  apiUrl: "/api/demo/delete",
                  method: "post",
                  params: [
                    {
                      name: "id",
                      value: "dx: {{$item.id}}"
                    }
                  ]
                },
                refresh: "current"
              }
            },
            view: {
              handler: {
                type: "modal",
                options: {
                  component: {
                    name: "demo.modals.demo-detail",
                    config: {},
                    value: "dx: {{$item}}"
                  },
                  modalConfig: {
                    title: "查看用户"
                  }
                },
                refresh: "current"
              }
            },
            edit: {
              handler: {
                type: "modal",
                options: {
                  component: {
                    name: "demo.modals.demo-edit",
                    config: {},
                    value: "dx: {{$item}}"
                  },
                  modalConfig: {
                    title: "编辑用户"
                  }
                },
                refresh: "current"
              }
            },
            others: [
              // 参考 Action Object config
            ]
          }
        },

        // 分页配置
        paging: {
          enable: true
        }
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
.demo-list {
}
</style>
