//asynchronous (non-blocking), we vomit sync

const {readFile, writeFile} = require('fs')

readFile('./folder/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./folder/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err)
            return
        }
        const second = result
        // write file, you can see the callback hell happening
        writeFile(
            './folder/result-async.txt', 
            `Here is the result: ${first} and ${second}`,
            (err, result) => {
                if(err) {
                    console.log(err)
                    return
                }
                console.log(result)
            }
        )
        // ... And the Callback hell happens as we read the files one by one
    })
})