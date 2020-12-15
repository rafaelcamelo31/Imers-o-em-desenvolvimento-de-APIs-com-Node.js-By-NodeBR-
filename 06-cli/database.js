const { readFile } = require('fs')
const { promisify } = require('util')
const readFileAsync = promisify(readFile)
// Outra forma de obter dados do json
// const dadosJson = require('./herois.json')

class Database {
    constructor() {
        this.NOME_ARQUIVO = 'herois.json'
    }

    async obterDadosArquivo() {
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())
    }

    escreverArquivo() {

    }

    listar() {
        return null
    }
}

module.exports = new Database()