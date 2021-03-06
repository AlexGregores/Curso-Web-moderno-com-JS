//Cadeia de protótipos (prototype chain)
const avo = { attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr1, filho.attr2)

const carro = {
    velAtual : 0,
    velMax: 200,
    acelerarMax(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}KM/h de ${this.velMax}KM/h`
    }
}
const ferrari = {
    modelo: 'F40',
    velMax : 324 //shadowing
}
const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}
Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMax(100)
console.log(volvo.status())