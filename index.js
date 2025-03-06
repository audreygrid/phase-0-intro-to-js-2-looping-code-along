const ms = require("mocha/lib/ms")

// Code your solutions in this file

function countDown(num) {
    while (num>=0) {
        console.log(num)
        num -= 1
    }
}
function writeCards(people, event) {

    const cards = []
    for (let i=0; i<people.length; i++) {

        let msg = `Thank you, ${people[i]}, for the wonderful surprise gift!`
        cards.push(msg)
        console.log(people.length-i)
        console.log(i)
    }
    return cards
}