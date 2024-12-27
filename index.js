
// Importing and setting up prompt-sync module
const prompt = require('prompt-sync')();

const inspirationalQuote = (name) => {
    // Three different parts of the randomly generated inspirational quote
    const startLine = ["Every journey begins with a single step, ", "Always work hard, ", "Don't take anything for granted, ", "Don't let fear stop you from doing what you want to do,", "Make peace with not being the best, ", "Never stop chasing what you want to do, ", "If you don't believe in it, nobody will, ", "You are only at the beginning of your journey, ", "If we never try, ", "No matter how hard the past is, ", "Write the story you want to be told, ", "Stand your ground in the face of adversity, ", "Sometimes what we need is some adversity, ", "Strive to be 1% better than you were yesterday, "];

    const middleLine = ["we shall never succeed, ", "you can change your life, ", "failure is not fatal, ", "remember to breathe, ", "this is not the end, ", "the journey is only beginning, ", "if we chase results, ", "only you can define who you are, ", "life is too short to dwell on insecurities, ", "don't let other people write your script, ", "take it one step at a time, ", "if you work consistently enough, ", "you can't wait, ", "gain the strength you need for tomorrow, ", "ignite the fire of inspiration inside of yourself, ", "make it happen, "];

    const endLine = ["you can do this!", "I believe in you!", "so keep going!", "and keep going!", "the strength is already inside you!", "you write your own script!", "you define who you are!", "we only fail when we stop trying!", "love yourself!", "be yourself!", "define yourself!", "nothing is impossible!", "anything is possible if you put your mind to it!", "just take another step!", "consistency is key!", "believe in yourself!", "look back and realise how far you've already come!", "failure is part of success!", "backwards is not the direction you're going!"];


    const randomOne = Math.floor(Math.random() * startLine.length);
    const randomTwo = Math.floor(Math.random() * middleLine.length);
    const randomThree = Math.floor(Math.random() * endLine.length);

    // Testing the different logic to make sure it works the way I intended.
    // console.log(randomOne, randomTwo, randomThree)
    // console.log(startLine.length, middleLine.length, endLine.length)

    return `Here's some inspiration for you ${name}!\n\n${startLine[randomOne]}\n${middleLine[randomTwo]}\n${endLine[randomThree]}`
};

// Asking the user for their name before printing the inspirational message to add a personal touch!
const name = prompt(`What's your name? `)
console.log(inspirationalQuote(name))
