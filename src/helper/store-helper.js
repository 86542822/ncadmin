function generate(name) {
    return function (state, value) {
        state[name] = value || state[name];
    }
}

export default (options) => {

    const baseOptions = {
        namespaced: true,
        modules: {},
        states: {},
        mutations: {},
        actions: {}
    }

    options = Object.assign({}, baseOptions, options);

    // 为每个 state 字段生成对应的 mutations 方法
    Object.keys(options.state).forEach((key) => {
        options.mutations[key] = generate(key);
    });

    return options;

}