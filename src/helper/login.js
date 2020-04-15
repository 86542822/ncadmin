export default function(config) {
    if (!config.enableAcl) {
        window.userInfo = {
            username: 'daniel'
        } // 制造一个假的
        return;
    }
}


