const promiseone = new Promise((resolve,reject) => {
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve()
    }, 1000);
}) 

promiseone.then(() => {
    console.log('Promise consumed');
})    
new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(() => {
    console.log('async 2 resolved');
})

const promiseThree = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({username: "Neha", email: "neha@example.com"})
    }, 1000);
})

promiseThree.then((user) => {
    console.log(user);
    
})

const promiseFour = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: "Ram", password: "123"})
        }else{
            reject('Error: there is an error')
        }
    }, 1000);
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => console.log('The promise is either resolved or rejected'))


const promisefive = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username: "JavaScript", password: "123"})
        }else{
            reject('Error: there is an error in JS syntax')
        }
    }, 1000);
})

async function consunePromisefive() {
    try{
        const response = await promisefive
        console.log(response)
    }catch(error){
        console.log(error);
    }
}

consunePromisefive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);  
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))