//synchronous read and write

const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./folder/first.txt', 'utf8')
const second = readFileSync('./folder/second.txt', 'utf8')

console.log(first, second);

writeFileSync(
    './folder/result-sync.txt', 
    `Hey the new result is: ${first} and ${second}`,
    {flag: 'a'} // by adding flag the result in the result-sync text file gets appended as many times as this node file is executed
)