const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "app",
	assets: new Set([".DS_Store","favicon.png","fonts/IBMPlexSansThai-Bold.ttf","fonts/IBMPlexSansThai-Bold.woff2","fonts/IBMPlexSansThai-Regular.ttf","fonts/IBMPlexSansThai-Regular.woff2","fonts/IBMPlexSansThaiLooped-Bold.ttf","fonts/IBMPlexSansThaiLooped-Bold.woff2","fonts/IBMPlexSansThaiLooped-Regular.ttf","fonts/IBMPlexSansThaiLooped-Regular.woff2"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".woff2":"font/woff2"},
	_: {
		entry: {"file":"app/immutable/start-1d8cd807.js","imports":["app/immutable/start-1d8cd807.js","app/immutable/chunks/index-c221238f.js","app/immutable/chunks/singletons-aeacf5bb.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js'))
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
