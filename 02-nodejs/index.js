/*
0 Obter um usuario
1 Obter o numero de telefone de um salario a partir de seu ID
2 Obter o endereco do usuario pelo ID
*/
// Importar módulo interno do node.js
const util = require('util')
const getAddressAsync = util.promisify(getAddress)

function getUser() {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            return resolve({
                id: 1,
                name: 'Gehrman',
                birthDate: new Date()
            })
        }, 1000)
    })
}

function getPhoneNumber(id) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                number: '92840580',
                ddd: 92,
            })
        }, 2000)
    })
}

function getAddress(id, callback) {
    setTimeout(() => {
        return callback(null, {
            street: 'Champions Avenue',
            number: '313B'
        })
    }, 2000)
}

// Primeiro passo: Adicionar a palavra async -> automaticate ela retornará uma Promise
main()
async function main() {
    try {
        console.time('medida-promise')
        const user = await getUser()
        // const phone = await getPhoneNumber(user.id)
        // const address = await getAddressAsync(user.id)
        const result = await Promise.all([
            getPhoneNumber(user.id),
            getAddressAsync(user.id)
        ])
        const address = result[1]
        const phone = result[0]

        console.log(`
        Nome: ${user.name},
        Endereco: ${address.street}, ${address.number}
        Telefone: (${phone.ddd}) ${phone.number}
        `)
        console.timeEnd('medida-promise')
    }
    catch (error) {
        console.log('Deu ruim', error)
    }
}

// const userPromise = getUser()

// // user -> phone -> phone
// userPromise
//     .then(function (user) {
//         return getPhoneNumber(user.id)
//             .then(function resolvePhoneNumber(response) {
//                 return {
//                     user: {
//                         name: user.name,
//                         id: user.id
//                     },
//                     telefone: response
//                 }
//             })
//     })
//     .then(function (response) {
//         const address = getAddressAsync(response.user.id)
//         return address
//             .then(function resolveAddress(result) {
//                 return {
//                     user: response.user,
//                     phone: response.telefone,
//                     address: result
//                 }
//             })
//     })
//     .then(function (response) {
//         console.log(`
//         Nome: ${response.user.name},
//         Endereco: ${response.address.street}, ${response.address.number}
//         Telefone: (${response.phone.ddd}) ${response.phone.number}
//         `)
//         // console.table({
//         //     response
//         // })
//     })
//     .catch(function (error) {
//         console.error('Deu ruim', error)
//     })



// function resolveUser(error, user) {
//     console.log('user', user)
// }

// getUser(function resolveUser(error, user) {
//     if (error) {
//         console.error('Deu ruim em usuario', error)
//         return;
//     }
//     getPhoneNumber(user.id, function resolvePhoneNumber(error1, phone) {
//         if (error1) {
//             console.error('Deu ruim em telefone', error1)
//             return;
//         }
//         getAddress(user.id, function resolveAddress(error2, address) {
//             if (error2) {
//                 console.error('Deu ruim em endreço', error2)
//                 return;
//             }
//             console.log(`
//             Name: ${user.name},
//             Address: ${address.street}, ${address.number}
//             Phone: (${phone.ddd})${phone.number}
//             `)
//         })
//     })
// })
// const phoneNumebr = getPhoneNumber(user.id)


// console.log('phone number', phoneNumebr)