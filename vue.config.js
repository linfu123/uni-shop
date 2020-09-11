module.exports = {
	// 配置路径别名
	configureWebpack: {
		"devServer": {
			"port": 8080, //端口号
			"disableHostCheck": true,
			"proxy": {
				"/": {
					"target": "http://localhost:8001", //目标接口域名
					"changeOrigin": true, //是否跨域
					"secure": false, // 设置支持https协议的代理
					"ws": false,
					"pathRewrite": {
						"^/": ""
					}
				}
			}
		}
	}
}
