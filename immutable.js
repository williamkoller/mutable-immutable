const twit = { x: 10, y: 20, z: 30 }

let updateTwit = Object.assign({}, ...Object.keys(twit).map((k) => ({
    [k]: twit[k] * 2
})))

console.log(twit)
console.log(updateTwit)