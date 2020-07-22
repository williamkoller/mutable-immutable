const twit = { x: 10, y: 20, z: 30 }

Object.keys(twit).map((key, index) => {
    twit[key] *= 2
})

console.log(twit)