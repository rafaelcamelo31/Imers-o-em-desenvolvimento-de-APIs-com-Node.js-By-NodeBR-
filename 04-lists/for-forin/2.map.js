const service = require('./service')
Array.prototype.customMap = function (callback) {
    const novoArrayMapeado = []
    for (let i = 0; i <= this.length - 1; i++) {
        const resultado = callback(this[i], i)
        novoArrayMapeado.push(resultado)
    }
    return novoArrayMapeado
}

async function main() {
    try {
        const results = await service.obterPessoas('a')
        // const names = results.results.map(response => response.name)
        const names = results.results.customMap((pessoa, indice) => { return `[${indice + 1}]${pessoa.name}` })
        const length = results.results.length
        console.log('names', names)
        console.log('length', length)
    }
    catch (error) {
        console.error('Deu ruim', error)
    }
}

main()