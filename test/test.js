const isAnagram = require('../src/anagram');

/*

* Anagram Testing file

*/

test('isAnagram function exists', () => {
  // Complete here
});

test('"cinema" is an anagram of "iceman"', () => {
  // Complete here
});

test('"Dormitory" is an anagram of "dirty room##"', () => {
  // Complete here
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
  // Complete here
});

/*

* Various functions Testing file

*/

const functions = require('../src/variousfunctions');

const nameCheck = () => console.log('Checking Name.');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff');
  });

  test('User is Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen');
  });
});

test('Adds 2 + 2 to equal 4', () => {
  const sum = 2 + 2;
  expect(sum).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
  const sum = 2 + 2;
  expect(sum).not.toBe(5);
});

/*

* Informations

*/

// CHECK FOR true & false VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('Should be null', () => {
  const n = null;
  expect(n).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
  const n = null;
  expect(n).toBeFalsy();
});

// toEqual
test('User should be Marc Antoine object', () => {
  // Complete here
});

// Less than and greater than
test('Should be under or equal 1000', () => {
  const load1 = 500;
  const load2 = 500;
  expect(sum(load1, load2)).toBeLessThanOrEqual(1000);
});

// Regex
test('There is no I in the word team', () => {
  expect('team').not.toMatch(/I/);
});

// Arrays
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('Admin');
  expect(new Set(usernames)).toContain('Admin');
});

// Working with async data

// Async Await since ES7
test('User fetched name should be Leanne Graham', async () => {
  const data = await functions.fetchUser();
  // Complete here
});

/*

* ReverseString Testing file

*/

const reverseString = require('../src/reversestr');

test('reverseString function exists', () => {
  // Complete here
});

test('String reverses', () => {
  // Complete here
});

test('String reverses with uppercase', () => {
  // Complete here
});
