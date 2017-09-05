"use strict";

class Reverser {
	constructor(listManipulator, itemManipulator) {
		this._listManipulator = listManipulator;
		this._itemManipulator = itemManipulator;
	}

	execute(items) {
		return this._listManipulator(items)
			.map(this._itemManipulator);
	}
}

module.exports = Reverser;