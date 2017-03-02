'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

require('babel-polyfill');

function sleep(ms) {
	return new Promise(function (resolve, reject) {
		console.log('sleep ' + ms);
		setTimeout(function (_) {
			return resolve(ms);
		}, ms);
	});
}

_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	var a, b, c;
	return regeneratorRuntime.wrap(function _callee$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return sleep(2000);

				case 2:
					a = _context.sent;
					_context.next = 5;
					return sleep(3000);

				case 5:
					b = _context.sent;
					_context.next = 8;
					return Promise.all([sleep(4000), sleep(5000), sleep(6000)]);

				case 8:
					c = _context.sent;


					console.log('done', a, b, c);

				case 10:
				case 'end':
					return _context.stop();
			}
		}
	}, _callee, undefined);
}))();