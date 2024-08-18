function Carro(nome, modelo, ano) {
    this.nome = nome
    this.modelo = modelo
    this.ano = ano

    this.descricao = function () {
        return `${this.nome}, ${this.modelo}, ${this.ano}`
    }
}

const carro1 = new Carro('Gol', 'Wolksvagem', 2012)
const carro2 = new Carro('Golf', 'Wolksvagem', 2001)

console.log(carro1.descricao())
console.log(carro2.descricao())