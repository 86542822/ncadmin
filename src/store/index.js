import demo from 'modules/demo/store/index.js';
// <!-- Don't touch me - import store-->

import storeHelper from 'helper/store-helper.js'

const options = storeHelper({
  modules: {
    demo,
    // <!-- Don't touch me - export store-->
  },

  // 多页面共享数据
  state: {
    _requestCount: 0
  },

  // 操作
  actions: {
    _requestCountIncrement(context) {
      context.commit('_requestCountIncrement');
    },
    _requestCountDecrement(context) {
      context.commit('_requestCountDecrement');
    }
  },

  // 数据变更
  mutations: {
    _requestCountIncrement(state) {
      state._requestCount++;
    },
    _requestCountDecrement(state) {
      state._requestCount--;
    }
  },
});

export default options;


