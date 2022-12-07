# number-challenge

Simple number guesser using JavaScript & HTML, with some basic CSS styling. The point is to "crack" the safe by finding the correct numbers (aided by the border color being changed when the correct number is found).

---

## How it works

- When the page is loaded (either initial visit or on refresh) it generates a random 4 digit number.
  - Done using "Math.floor(Math.random() *(10000-1000)+1000)".
- This number is then converted into a four digit array.
- The borders for each box starts as black, however as soon as the user interacts, it changes colors.
- The user input from the four boxes is then compared to its respective position in the array.
- As each number matches, the border changes from red to green.
- When each number matches, their functions return a "true" result. 
- Once all four numbers return a "true" result, the "safe" is "cracked" and the user gets their reward. 
