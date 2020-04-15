import config from '../config.js';

export default {

  /**
   * 是否有操作权限
   */
  hasOpRight(resourceId) {
    if (!config.enableAcl) return true;
    return !!window.userResources[resourceId];
  }

}