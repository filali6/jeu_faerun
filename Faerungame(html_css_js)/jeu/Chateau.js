class Chateau{
    constructor() {
        this.ressource = 3;
        this.file=[];
        
    }
    

     creerNain()
    {
        event.preventDefault();
        let guerrier =new Nain();
         this.file.push(guerrier);

    }
    creerChefnain()
    {
        event.preventDefault();
        let guerrier =new ChefNain();
         this.file.push(guerrier);
    }
    creerElfe()
    {
        event.preventDefault();
        let guerrier =new Elfe();
        this.file.push(guerrier);
    }
    creerChefelfe()
    {
        event.preventDefault();
        let guerrier =new ChefElfe();
        this.file.push(guerrier);
    }
    addRessource(){
        this.ressource+=1;
    }
    tour(){
        let ingame=[];
        while (true)
            {
                if (this.file.length==0)break;
                if(this.file[0].cout>this.ressource)
                    {
                        console.log("ressources insuffisantes");
                        break;
                    }
                this.ressource-=this.file[0].cout;
                ingame.push(this.file.shift());

            }
            this.addRessource();
            return ingame;
    }
}


