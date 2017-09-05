const expect = require('chai').expect;
const Manipulator = require('../Manipulator');
const reverseWord = require('../reverseWord');
const reverseItems = require('../reverseItems');

describe('Reverse Array', () => {
	let fruits;

	beforeEach(() => {
		fruits = ["Banana", "Kiwi", "Apple"];
	});

	it('should reverse letters in a given word', () => {
		let word = "Banana";
		let result = reverseWord(word);

		expect(result).to.eql("ananaB");
	});

	it('should reverse the order of the items in a list', () => {
		let results = reverseItems(fruits);

		expect(results[0]).to.eql("Apple");
	});

	it('should reverse items and letters in word', () => {
		let reverser = new Manipulator(reverseItems, reverseWord);
		let result = reverser.execute(fruits);

		expect(result[0]).to.eql('elppA');
		expect(result[2]).to.eql('ananaB');
	});
});