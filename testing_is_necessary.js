const funAnimals = []

funAnimals.push({
    name: "Hygge",
    type: "cat",
    reason: "agressive snuggler"
})

funAnimals.push({
    name: "Trecito",
    type: "dog",
    reason: "four legs worth of energy at the cost of three"
})

funAnimals.push({
    name: "Peter",
    type: "Tortoies",
    reason: "Backyard Grass Eater"
})

for (let animal of funAnimals) {
    console.log(`${animal.name} the ${animal.type} is fun.  Reason: ${animal.reason}`)
}
