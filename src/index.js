const NUMBERS = 45
const DRAW = 6

const result = [...Array(NUMBERS).keys()]
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => ++value)
    .slice(0, DRAW)
    .sort((a, b) => a - b)

console.log(result)
