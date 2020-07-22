const twit = { x: 10, y: 20, z: 30 }

let updatedTwit = {}

for (const [key, value] of Object.entries(twit)) {
    updatedTwit[key] = value * 2
}

console.log(twit)
console.log(updatedTwit)