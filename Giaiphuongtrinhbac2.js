class QuadraticEquation {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getDiscriminant() {
        return (this.b * this.b) - (4 * this.a * this.c);

    }

    getRoot1() {
        return (-this.b + Math.pow(this.getDiscriminant(), 0, 5)) / 2 * this.a
    }

    getRoot2() {
        return (-this.b - Math.pow(this.getDiscriminant(), 0, 5)) / 2 * this.a
    }

    test() {
        if (this.getDiscriminant() > 0) {
            console.log('r1 = ' + this.getRoot1())
            console.log('r2 = ' + this.getRoot2())
        } else if (this.getDiscriminant() == 0) {
            console.log('r1 = r2 = ' + this.getRoot2())
        } else {
            console.log('The equation has no roots')
        }
    }
}

let quadraticEquation = new QuadraticEquation(1, 2, 1);
quadraticEquation.test();