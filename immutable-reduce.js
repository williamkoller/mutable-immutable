const twit = { x: 10, y: 20, z: 30 }

Object.keys(twit).forEach(key => twit[key])

const updated = Object.entries(twit).reduce((obj, [key, value]) => {
    obj[key] = value *= 2
    return obj
}, {})

console.log(twit)
console.log(updated)

