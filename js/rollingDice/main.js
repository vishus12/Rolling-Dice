// Put your code here

console.log("Let's roll some dice, baby!")
console.log("---------------------------")


let Roll = () => {
    let dieValue = Math.ceil(Math.random() * 6)
    return dieValue
}

for (var i = 0; i < 10; i++) {
    const die1 = Roll()
    const die2 = Roll()
    let message = `${die1} + ${die2} = ${die1 + die2}`
    if (die1 === die2) {
        message += " DOUBLES!"
    }
    console.log(message)
}
