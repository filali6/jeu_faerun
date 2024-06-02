class Guerrier {
    constructor() {
        this.cout=1;
        this.force = 10;
        this.pointDeVie = 100;
        this.name=this.constructor.name;
    }
     
    calculerDegats() {
        let degats = 0;
        for (let i = 0; i < this.force; i++) {
             
            degats+= Math.floor(Math.random() * 3) + 1;  
        }
        return degats;
    }
    attack(guerrier){
        let damage=this.calculerDegats();
        //console.log("damage",damage);
        guerrier.attacked(damage);       
    }
    attacked(damage){
        this.pointDeVie-=damage;
        //console.log(this)
        
    }
    
    estMort() {
        return this.pointDeVie <= 0;
    }
}
class Nain extends Guerrier{
    
    attacked(damage){
        this.pointDeVie-=(damage/2);
        
    }
}
class ChefNain extends Nain{
    constructor() {
        super();
        this.cout=3;
    }
    attacked(damage){
        this.pointDeVie-=(damage/4);
        //console.log(this);
    }
}
class Elfe extends Guerrier{
    constructor() {
        super();
        this.force = 20;
        this.pointDeVie = 100;
         this.cout=2;
    }
}
class ChefElfe extends Guerrier{
    constructor() {
        super();
        this.force = 40;
        this.pointDeVie = 100;
        this.cout=4;
    }
}


