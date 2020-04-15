function getConfig(env) {
    let config = {

        // 开发环境配置
        development: {
            backendHost: '',
            enableAcl: false, // 是否开启权限控制
        },

        // 测试环境配置
        testing: {
            backendHost: '',
            enableAcl: true
        },

        // 生产环境配置
        production: {
            backendHost: '',
            enableAcl: true
        }
    }

    return config[env] || config.development;
}

module.exports = getConfig(process.env.NODE_ENV);