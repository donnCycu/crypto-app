const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: 'https://pro-api.coinmarketcap.com',
    }
})
