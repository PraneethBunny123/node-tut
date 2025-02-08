const {readFile, writeFile} = require('fs').promises

// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromsie = util.promisify(writeFile)
 
const start = async() => {
    try {
        const first = await readFile('./folder/first.txt', 'utf8');
        const second = await readFile('./folder/second.txt', 'utf8')
        await writeFile(
            './folder/result-writeFilePromise', 
            `This is Awesome: ${first} and ${second}`
        )
        console.log(first, second)
    } catch (error){
        console.log(error)
    }
}

start()

//////////////////////////////////////////////////////////////

// const {readFile, writeFile} = require('fs')

// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromsie = util.promisify(writeFile)
 
// const start = async() => {
//     try {
//         const first = await readFilePromise('./folder/first.txt', 'utf8');
//         const second = await readFilePromise('./folder/second.txt', 'utf8')
//         await writeFilePromsie('./folder/result-writeFilePromise', `This is Awesome: ${first} and ${second}`)
//         console.log(first, second)
//     } catch (error){
//         console.log(error)
//     }
// }

// start()

//////////////////////////////////////////////////////////////

// const {readFile} = require('fs')

// const getText = (path) => {
//     return new Promise((resovle, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if(err) {
//                 reject(err)
//             }else {
//                 resovle(data)
//             }
//         })
        
//     })
// }

// getText('./folder/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))