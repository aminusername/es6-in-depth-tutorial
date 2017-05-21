class Animal {
    constructor(name, height){
        this.name = name;
        this.height = height;
    }

    hello() {
        console.log(`Hello My name is ${this.name} and I am happy to see you`)
    }
}

export default Animal;