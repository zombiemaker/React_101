// FizzBuzz
// - print the numbers 1-100
// - If the number is divisible by 3, print fizz instead of the number
// - If the number is divisible by 5, print buzz instead of the number
// - If the number is divisible by 3 & 5, print fizzbuzz instead of the number

// 1 = 1
// 2 = 2
// 3 = fizz
// 4 = 4
// 5 = buzz
// 6 = fizz
// 9 = fizz
// 10 = buzz
// 15 = fizzbuzz

describe("FizzBuzz Unit Tests", ()=>{
	// here is where we start writing the tests for THIS suite
	// we write a test by starting with "it"
	// "it" takes 2 args
	// 1. Name of the test
	// 2. The function to run (which is the test)
	it("FizzBuzz must be defined", ()=>{
		// expect takes 1 arg... something to evaluate
		// we chain a method on expect.
		expect(fizzBuzz()).toBeDefined();
	});

	it("Should be 1 for passing fizzBuzz 1", ()=>{
		expect(fizzBuzz(1)).toBe(1);
	})

	it("Should be 2 for passing fizzBuzz 2", ()=>{
		expect(fizzBuzz(2)).toBe(2);
	})

	it("Should be Fizz for passing fizzBuzz 3", ()=>{
		expect(fizzBuzz(3)).toBe('Fizz');
	})

	it("Should be Buzz for passing fizzBuzz 5", ()=>{
		expect(fizzBuzz(5)).toBe('Buzz');
	})

	it("Should be FizzBuzz for passing fizzBuzz 15", ()=>{
		expect(fizzBuzz(15)).toBe('FizzBuzz');
	})

	var random = Math.floor(Math.random() * 1000 * 15);
	it(`Should be a string, FizzBuzz for passing ${random}`,()=>{
		expect(fizzBuzz(random)).toEqual("FizzBuzz");
	})
		

})