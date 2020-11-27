const service = require('./service')

async function main() {
    try {
        const result = await service.obterPessoas('a')
        const names = []
        console.time('tempo com for')
        for (let i = 0; i <= result.results.length - 1; i++) {
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('tempo com for')

        console.time('tempo com for-in')
        for (let i in result.results) {
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('tempo com for-in')

        console.time('tempo com for-of')
        for (pessoa of result.results) {
            names.push(pessoa.name)
        }
        console.timeEnd('tempo com for-of')

        console.log(`names: `, names)
    }
    catch (error) {
        console.log(`error interno`, error)
    }
}

main()