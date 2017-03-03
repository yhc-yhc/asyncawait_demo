require('babel-polyfill')

function sleep(ms) {
	return new Promise((resolve, reject) => {
		console.log(`sleep ${ms}`);
		setTimeout(_ => {
			console.log(`${ms} end`);
			resolve(ms)
		}, ms);
	});
}

(async() => {

	// 按照顺序一个一个来
	let a = await sleep(2000);
	let b = await sleep(3000);

	// 同时来
	let c = await Promise.all([sleep(4000), sleep(5000), sleep(6000)]);

	console.log('done', a, b, c);

})();