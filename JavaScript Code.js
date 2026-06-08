// Code Bug Fixing

// 1. BMI Clculator

function calculateBMI(weight, height) {
    // Write your code here
    const bmi = weight / (height * height);

    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {              // We used here (||) OR opertor instead of (&&) AND operator....we use &&  when defining a range
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {                // We used here (||) OR opertor instead of (&&) AND operator......we use || when checking either condition
        return "Overweight";
    } else {
        return "Obese";
    }
}
console.log(calculateBMI(50,1.75));
console.log(calculateBMI(68,1.75));
console.log(calculateBMI(80,1.75));
console.log(calculateBMI(95,1.75));

// 2. Temperture Converter

function convertTemperature(temperature, unit) {
    // Write your code here
    if (unit === "C") {
        const fahrenheit = (temperature * 9 / 5) + 32;    // we use modulous operartor (%) instead of (/) operator
        return fahrenheit.toFixed(2) + " F";
    } else if (unit === "F") {
        const celsius = (temperature - 32) * 5 / 9;     // we use modulous operartor (%) instead of (/) operator
        return celsius.toFixed(2) + " C";
    } else {
        return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}

console.log(convertTemperature(0, "C"));
console.log(convertTemperature(32, "F"));

// 3. Tip Calculator

function calculateTip(billAmount, tipPercentage) {
    // Write your code here
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    return Number(totalAmount.toFixed(2));                // we used here a number() function which is not valid in JS....We should use Number()...(capital N)

}
console.log(calculateTip(100, 0.1));

// 4. Palindrome Checker

function isPalindrome(str) {
    // Write your code here
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");         // here function is case sensitive...so we need to convert string to lowercase using toLowerCase()
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}

console.log(isPalindrome("madam"));             
console.log(isPalindrome("Madam"));              
console.log(isPalindrome("hello"));

// 5. Vowel Count

function countVowels(str) {
    // Write your code here
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerStr = str.toLowerCase();
    let count = 0;

    for (let i = 0; i < lowerStr.length; i++) {       // here we used (<=) instead of (<) ....(<=) this makes i go one step beyond the length of string
        if (vowels.includes(lowerStr[i])) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World"));


// Improvised Perspective to the Coding Problem


// 1. Longest World Length

function findLongestWord(sentence) {
    let maxLength = 0;

    for (const word of sentence.split(' ')) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }

    return maxLength;
}
console.log(findLongestWord("I love programming"));
console.log(findLongestWord("I Love Coding"));

// 2. Title Case

function titleCase(sentence) {
    return sentence
        .toLowerCase()
        .split(' ')
        .map(word => word[0].toUpperCase() + word.substring(1))
        .join(' ');
}

console.log(titleCase("hello World"));

// Do not modify the below lines
module.exports = { titleCase };


// 3. Count Occurrences of a Character

function countOccurrences(str, char) {
    return str.split(char).length - 1;
}

console.log(countOccurrences("Banana", "a"));
console.log(countOccurrences("Anna anny nanny nanna", "a"));

// Do not modify the below lines
module.exports = { countOccurrences };


// 4. Shopping Cart Total

function calculateTotal(cart) {
    return cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}
const cart = [
  { price: 100, quantity: 2 },
  { price: 50, quantity: 1 }
];

console.log(calculateTotal(cart)); 

// Do not modify the below lines
module.exports = { calculateTotal };

// 5. Fizz Buzz

function fizzBuzz(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        switch (true) {
            case (i % 3 === 0 && i % 4 === 0):
                result.push("FizzBuzz");
                break;

            case (i % 3 === 0):
                result.push("Fizz");
                break;

            case (i % 4 === 0):
                result.push("Buzz");
                break;

            default:
                result.push(i.toString());
        }
    }

    return result;
}

console.log(fizzBuzz(15));

// Do not modify the below lines
module.exports = { fizzBuzz };


// Logic Building Coding Questions

// 1. Prime Numbers

function findPrimes(n) {
    const primes = [];

    for (let i = 2; i <= n; i++) {
        let isPrime = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(i);
        }
    }
    return primes;
}
console.log(findPrimes(20));


// 2. Character Reversal 


function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));


// 3. Sign Of Product

function signOfProduct(arr) {
    let negativeCount = 0;

    for (let num of arr) {
        if (num === 0) {
            return 0;
        }

        if (num < 0) {
            negativeCount++;
        }
    }

    return negativeCount % 2 === 0 ? 1 : -1;
}
console.log(signOfProduct([2,-3, 5,4]));       


// 4. Check Sign 


function checkSign(a, b, c) {
    const numbers = [a, b, c];

    let result = "";

    for (let num of numbers) {
        result += num >= 0 ? "+" : "-";
    }

    return result;
}
console.log(checkSign(1, 2, 3));   
console.log(checkSign(1, 2, -3));  



// 5. URL Slug Generator


function generateSlug(title) {
    return title.toLowerCase().replaceAll(" ", "-");
}

// Examples
console.log(generateSlug("Hello World"));



// 6. Shortest Word Distance


function shortestDistance(wordsDict, word1, word2) {
    let index1 = -1;
    let index2 = -1;
    let minDistance = Infinity;

    for (let i = 0; i < wordsDict.length; i++) {

        if (wordsDict[i] === word1) {
            index1 = i;
        }

        if (wordsDict[i] === word2) {
            index2 = i;
        }

        if (index1 !== -1 && index2 !== -1) {
            minDistance = Math.min(
                minDistance,
                Math.abs(index1 - index2)
            );
        }
    }

    return minDistance;
}

const words = ["practice", "makes", "perfect", "coding", "makes"];

console.log(shortestDistance(words, "coding", "practice"));
console.log(shortestDistance(words, "makes", "coding"));


// 7. Flip Game

function findMove(str) {
    const result = [];

    for (let i = 0; i < str.length - 1; i++) {

        
        if (str[i] === "+" && str[i + 1] === "+") {

            // Create new state
            const newState =
                str.substring(0, i) + "--" + str.substring(i + 2);

            result.push(newState);
        }
    }

    return result;
}

console.log(findMove("++++"));
console.log(findMove("+--+"));

// 8. Swap Consecutive Characters

function swapConsecutiveCharacters(str) {
    let result = "";

    for (let i = 0; i < str.length; i += 2) {

        // If next character exists, swap them
        if (i + 1 < str.length) {
            result += str[i + 1] + str[i];
        } else {
            // If odd length, keep last character same
            result += str[i];
        }
    }

    return result;
}
console.log(swapConsecutiveCharacters("abcd"));
console.log(swapConsecutiveCharacters("hello"));
console.log(swapConsecutiveCharacters("123456"));


// 9. Array Intersections 

function arrayIntersection(array1, array2) {

    // Remove duplicates from first array
    const uniqueArr1 = [...new Set(array1)];

    // Find common elements
    return uniqueArr1.filter(item => array2.includes(item));
}


console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
console.log(arrayIntersection([1, 2, 2, 3], [2, 2, 4]));
console.log(arrayIntersection(["a", "b", "c"], ["b", "c", "d"]));


// 10. Insert 7

function insert7(inputString) {
    let result = "";
    let count = 0;

    for (let char of inputString) {

        // Add character to result
        result += char;

        // Ignore spaces while counting
        if (char !== " ") {
            count++;
        }

        // Insert "7" after every 6 non-space characters
        if (count === 6) {
            result += "7";
            count = 0;
        }
    }

    return result;
}
console.log(insert7("abcdefghi"));
console.log(insert7("abc de fg hi"));
console.log(insert7("hello world"));