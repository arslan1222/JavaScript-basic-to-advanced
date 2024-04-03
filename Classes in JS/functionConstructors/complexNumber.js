

class complexNumber{

    #real;
    #imagenary;

    constructor(r, i){
        this.#real = r;
        this.#imagenary = i;

    }
        display(){
            console.log(this.#real," + ", this.#imagenary)
        }
    get real(){
        return this.#real;
    }

    get imagenary(){
        return this.#imagenary;
    }

    addcomplex(c){
        this.#real = this.#real + c.real;
        this.#imagenary = this.#imagenary + c.imagenary;
    }

}

const c1 = new complexNumber(2,3);
c1.display();
const c2 = new complexNumber(3,4);
c1.addcomplex(c2);
c1.display();