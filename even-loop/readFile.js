//asynchronous
const {readFile} = require('fs')

//immediate task
console.log('first task')

//check file path
readFile('./folder/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err);
        return
    }

    //Task that takes time, so it is offloaded after finishing the immediate tasks
    console.log(result);
    console.log('completed first task')
    
})

//immediate task
console.log('next task');