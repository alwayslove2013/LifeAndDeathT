module.exports = {
	// 基本路径
    publicPath: './',
    outputDir: 'docs',
    devServer: {
        port: 12357,
        // https: false,
        // proxy: {
        //     '/api': {
        //         target: 'https://ehcard-test.wecity.qq.com/api',
        //         ws: true,
        //         changOrigin: true,    //是否开启代理
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
		// }
    },
}