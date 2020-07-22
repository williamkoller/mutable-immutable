const twit = { x: 10, y: 20, z: 30 }

Object.keys(twit).forEach(key => twit[key] *= 2)

const updated = Object.entries(twit).reduce((obj, [key, value]) => {
    obj[key] = value *= 2
    return obj
}, {})

console.log(updated)
console.log(twit)

