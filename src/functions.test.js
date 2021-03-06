/**
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else
 * construct available in Javascript.
 */
let max = (a, b) => {
  if (a > b) {
    return a
  } else {
    return b
  }
}
/**
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */
let maxOfThree = (a, b, c) => {
  if (a > b && a > c) {
    return a
  } else if (b > a && b > c) {
    return b
  } else {
    return c
  }
}
/*
 * Define a function sum() that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */
let sum = (num1, num2) => {
  return num1 + num2
}
/*
 * Define a function sumOfArray that calculates the sum of
 * all the numbers in an array.
 */
let sumOfArray = arr => arr.reduce((a, b) => a + b, 0)
/**
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel (letter) {
  if (
		letter == 'a' ||
		letter == 'e' ||
		letter == 'i' ||
		letter == 'o' ||
		letter == 'u' ||
		letter == 'A' ||
		letter == 'E' ||
		letter == 'I' ||
		letter == 'O' ||
		letter == 'U'
	) {
    return true
  } else {
    return false
  }
}
/**
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".
 */

function rovarspraket (word) {
  if (isNaN(word)) {
    let consonant = word.split('')
    let vowel = ''
    consonant.forEach(function (letter) {
      if (~'aeiou'.indexOf(letter)) {
        vowel += letter
      } else {
        vowel += letter + 'o' + letter
      }
    })
    return vowel
  } else {
    return word.toString()
  }
}

/**
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

// take an input and break it into pieces
// once the pieces are separated, reverse
// once reversed put back together
let reverse = drow =>
	drow
		.split('')
		.reverse()
		.join('')

/**
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

let findLongestWord = string => {
  let longestWord = string.split(' ').reduce(function (longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest
  }, '')
  return longestWord
}

/**
 * NOTE: Don't modify anything below this line...
 */

/* eslint-disable no-undef */

import test from 'ava'

test('max()', t => {
  t.is(max(1, 3), 3)
  t.is(max(0, 3), 3)
  t.is(max(10, 3), 10)
  t.is(max(-1, -3), -1)
  t.is(max('aaa', 0), 0)
  t.true(isNaN(max('aaa', 'bbb')))
})

test('maxOfThree()', t => {
  t.is(maxOfThree(1, 3, 2), 3)
  t.is(maxOfThree(0, 3, -1), 3)
  t.is(maxOfThree(10, 3, 50), 50)
  t.is(maxOfThree(-1, -3, -10), -1)
  t.is(maxOfThree('aaa', 0, 1), 1)
  t.true(isNaN(maxOfThree('aaa', 'bbb', 'ccc')))
})

test('sum()', t => {
  t.is(sum(8, 11), 19)
  t.is(sum(4, 100), 104)
})

test('sumOfArray()', t => {
  t.is(sumOfArray([1, 2]), 3)
  t.is(sumOfArray([1, 2, 3]), 6)
  t.is(sumOfArray([10, 9, 8]), 27)
  t.is(sumOfArray([]), 0)
})

test('isVowel()', t => {
  t.is(isVowel(0), false)
  t.is(isVowel('B'), false)
  t.is(isVowel('b'), false)
  t.is(isVowel('a'), true)
  t.is(isVowel('E'), true)
})

test('rovarspraket()', t => {
  t.is(rovarspraket('a'), 'a')
  t.is(rovarspraket('b'), 'bob')
  t.is(rovarspraket('cat'), 'cocatot')
  t.is(rovarspraket('javascript'), 'jojavovasoscocroripoptot')
  t.is(rovarspraket(0), '0')
})

test('reverse()', t => {
  t.is(reverse('books'), 'skoob')
  t.is(reverse("we don't want no trouble"), "elbuort on tnaw t'nod ew")
})

test('findLongestWord()', t => {
  t.is(findLongestWord('book dogs'), 'book')
  t.is(findLongestWord('life the universe and everything'), 'everything')
})

/* eslint-enable */
