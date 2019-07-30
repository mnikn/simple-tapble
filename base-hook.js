class BaseHook {
	constructor() {
		this._taps = [];
		this._runner = null;
	}

	tap(options, fn) {
		if (!options || !options.name) {
			throw new Error('You must pass a name!');
		}
		const keySet = new Set(this._taps.map(item => item.name));
		if (keySet.has(options.name)) {
			return;
		}
		
		this._taps.push({
			options,
			fn,
		});
	}

	call(...args) {
		if (!this._runner) {
			this._runner = this._compile({
				taps: this._taps,
				args,
			});
		}
		this._runner();
	}

	_compile(config) {
		throw new Error('You must implement this method!');
	}
}

module.exports = BaseHook;