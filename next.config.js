const withCSS = require('@zeit/next-css')
const withOffline = require('next-offline')

module.exports = withCSS(withOffline({
  webpack: (config, options) => {
		config.module.rules.map((item, key) => {
			if (item.test.toString() == '/\\.css$/') config.module.rules[key].sideEffects = true;
		})
		return config;
	}
}))