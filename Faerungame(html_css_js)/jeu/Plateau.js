class Pos {
    constructor() {
        this.color = '';
        this.guerriers = [];
    }
    toString() {
        let guers = "(" + this.color + ")=> ";
        for (let i = 0; i < this.guerriers.length; i++) {
            guers += this.guerriers[i].name + " | ";
        }
        return guers;
    }
}
class Plateau {
    constructor() {
        this.plateau = new Array();
        for (let i = 0; i < 5; i++)this.plateau.push(new Pos());
    }
     
    entrerGuerriers(guerriers, couleur) {
        if (guerriers.length > 0) {
            if (couleur == 'r') {

                this.plateau[4].guerriers = guerriers;
                this.plateau[4].color = couleur;
            }
            else if (couleur == 'b') {
                this.plateau[0].guerriers = guerriers;
                this.plateau[0].color = couleur;
            }
            else console.log("wrong color");
        }
    }
    fight(a, b, i) {
        console.log(a.guerriers.length);
        console.log(b.guerriers.length);
        while (a.guerriers.length != 0 && b.guerriers.length != 0) {
            //team a fight
            for (let i = 0; i < a.guerriers.length; i++) {
                console.log(a.color);
                console.log(a.guerriers[0]);
                console.log(b.guerriers[0]);
                a.guerriers[0].attack(b.guerriers[0]);
                if (b.guerriers[0].estMort()) b.guerriers.shift();
                if(b.guerriers.length==0)break;
                a.guerriers.push(a.guerriers.shift());
            }
            for (let i = 0; i < b.guerriers.length; i++) {
                console.log(b.color);
                console.log(b.guerriers[0]);
                console.log(a.guerriers[0]);
                b.guerriers[0].attack(a.guerriers[0]);
                if (a.guerriers[0].estMort()) a.guerriers.shift();
                if(a.guerriers.length==0)break;
                b.guerriers.push(b.guerriers.shift());
            }
            if (a.guerriers.length == 0) this.plateau[i] = b;
            else this.plateau[i] = a;
        }
    }
    avanceBlue() {
        for (let i = 3; i >= 0; i--) {
            if (this.plateau[i].color == 'b') {
                if (this.plateau[i + 1].color != 'r') this.plateau[i + 1] = this.plateau[i];
                else this.fight(this.plateau[i], this.plateau[i + 1], i + 1);
                this.plateau[i] = new Pos();
            }
        }
    }
    avanceRed() {
        for (let i = 1; i < 5; i++) {
            if (this.plateau[i].color == 'r') {
                if (this.plateau[i - 1].color != 'b') this.plateau[i - 1] = this.plateau[i];
                else this.fight(this.plateau[i], this.plateau[i - 1], i - 1);
                this.plateau[i] = new Pos();
            }
        }
    }
    isOver() {
        if (this.plateau[0].color == 'r') return 'r';
        if (this.plateau[4].color == 'b') return 'b';
        return 'n';
    }
    state() {
        for (let i = 0; i < 5; i++) {
            console.log("line " + (i + 1) + " " + this.plateau[i].toString())
        }
        return this.plateau;
    }
}

