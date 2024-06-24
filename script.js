// 1) Eliminate duplicates in an Array.
// a) Suppose you have an Array [3,4,9,3,8,0,4,9].
// b) Write a function which will receive an array as param , that will remove all
// duplicates and return an array with unique items.
// c) Here, the output should be [3,4,9,8,0].

// ANS 1
function removeDuplicates(array) {

    return (

        array.filter((item, index) => array.indexOf(item) === index)

    )
}

const givenArray = [3,4,9,3,8,0,4,9]
const result = removeDuplicates(givenArray)
console.log(result);

// 2) Find the largest and smallest number in an unsorted integer array
// a) Suppose you have an Array [3,4,9,3,8,0,4,9].
// b) Write a function which will receive an array as param , that will return the highest and
// smallest number as an array.
// c) Here, the output should be [9, 0].

// ANS 2 
function findLargestAndSmallest(array) {

    let largest = array[0]
    let smallest = array[0]

    for (let i = 1; i < array.length; i++) {

        if (array[i] > largest) {

            largest = array[i]

        }
        if (array[i] < smallest) {

            smallest = array[i]

        }
    }

    return [largest, smallest]
}

const givenArrayOne = [3,4,9,3,8,0,4,9]
const res = findLargestAndSmallest(givenArrayOne)
console.log(res);

//3) A given string be reversed using recursion
// a) Suppose you have a string “KRIYATMA”
// b) Write a function that will receive a string as param, that will reverse the string and
// return it.

// ANS 3
function reverseString(string) {

    if (string.length <= 1) {

       return string

    }

    return reverseString(string.substring(1)) + string[0]
}

const givenString = 'KRIYATMA'
const reversedString = reverseString(givenString)
console.log(reversedString);

// 4) Write a function that finds the longest word in a sentence.
// a) Suppose you have a string ‘The quick brown fox jumps over the lazy
// dog’.
// b) Write a function that will return the longest word

// ANS 4
function findLongestWord(sentence) {
    const words = sentence.split(' ')

    let longestWord = ' '

    for (let word of words) {

        if (word.length > longestWord.length) {

            longestWord = word

        }
    }

    return longestWord
}

const sentence = 'The quick brown fox jumps over the lazy dog'
const longestWord = findLongestWord(sentence) 
console.log(longestWord);

// 5) Suggest any improvements in an application that you are using daily.
//  As like payment method in whatsapp, blood group registration portals should be available, so that anyone can filter and find out the blood groups when needed.