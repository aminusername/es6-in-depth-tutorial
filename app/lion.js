import Animal from './animal';
class Lion extends Animal {
    constructor (name, height, colour){
        super(name, height);
        this.colour = colour;
    }
    olo() {
        console.log("I am LION with name: " + this.name, this.height, this.colour);
    }
}

export default Lion;