# asyncawait_demo

this is the step what I have study es7 async await

async await 是 es7的语法，需要使用 babel转码，本例只是一个实践记录。


	1， mkdir asyncawait_demo  && cd asyncawait_demo
	2, npm init
	3, npm install -S babel-cli && npm install -S babel-preset-es2015 && npm install -S babel-preset-stage-3 && npm install -S babel-polyfill
	<!-- ，npm install -S babel-preset-react -->
	4， package.json中加入  
		"babel": {
		    "presets": [
		      "es2015",
		      "stage-3"
		    ],
		    "plugins": []
		 }

	5, mkdir src && cd src &&  touch index.js && echo >> index.js "require('babel-polyfill')"
	6, 在index.js中加入：
		function sleep(ms) {
		  return new Promise((resolve, reject) => {
		    console.log(`sleep ${ms}`);
		    setTimeout(_ => resolve(ms), ms);
		  });
		}

		(async () => {
		  
		  // 按照顺序一个一个来
		  let a = await sleep(2000);
		  let b = await sleep(3000);
		  
		  // 同时来
		  let c = await Promise.all([sleep(4000), sleep(5000), sleep(6000)]);
		  
		  console.log('done', a, b, c);
		  
		})();
	7，package.json中的scripts加入以下代码：
		"build": "babel src -d lib",
		"start": "babel src -d lib && node lib/index"
	8, npm run start