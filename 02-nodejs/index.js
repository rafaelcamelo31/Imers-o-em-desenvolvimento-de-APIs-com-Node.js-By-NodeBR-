/*
0 Obter um usuario
1 Obter o numero de telefone de um salario a partir de seu ID
2 Obter o endereco do usuario pelo ID
*/

function getUser(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            name: 'Gehrman',
            birthDate: new Date()
        })
    }, 1000)

}

function getPhoneNumber(id, callback) {
    setTimeout(() => {
        return callback(null, {
            number: '92840580',
            ddd: 92,
        })
    }, 2000)

}

function getAddress(id, callback) {
    setTimeout(() => {
        return callback(null, {
            street: 'Champions Avenue',
            number: '313B'
        })
    }, 2000)
}

function resolveUser(error, user) {
    console.log('user', user)
}

getUser(function resolveUser(error, user) {
    if (error) {
        console.error('Deu ruim em usuario', error)
        return;
    }
    getPhoneNumber(user.id, function resolvePhoneNumber(error1, phone) {
        if (error1) {
            console.error('Deu ruim em telefone', error1)
            return;
        }
        getAddress(user.id, function resolveAddress(error2, address) {
            if (error2) {
                console.error('Deu ruim em endreço', error2)
                return;
            }
            console.log(`
            Name: ${user.name},
            Address: ${address.street}, ${address.number}
            Phone: (${phone.ddd})${phone.number}
            `)
        })
    })
})
// const phoneNumebr = getPhoneNumber(user.id)


// console.log('phone number', phoneNumebr)