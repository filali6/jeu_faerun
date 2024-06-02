let chateauBleu = new Chateau();
let chateauRouge = new Chateau();
let plt = new Plateau();
let round = 0;
function getcolor(c){
    if(c=='b') return "rgba(66, 41, 118, 0.6)";
    if(c=='r') return "rgba(171, 72, 72, 0.6)";
    return "rgba(0, 0, 0, 0.2)";
}
function updatePlateau(p)
{
    let case1=document.getElementById("case1");
    let case2=document.getElementById("case2");
    let case3=document.getElementById("case3");
    let case4=document.getElementById("case4");
    let case5=document.getElementById("case5");
    case1.innerHTML="";
    case2.innerHTML="";
    case3.innerHTML="";
    case4.innerHTML="";
    case5.innerHTML="";
    //case1
    case1.style.backgroundColor=getcolor(p.plateau[0].color);

    p.plateau[0].guerriers.forEach(element => {
        let img=new Image();
        img.src = "images/"+element.name + ".png";
        img.height="50";
        img.width="50";
        let sp=document.createElement("span");
        let i=document.createElement("i");
        i.innerHTML=element.pointDeVie;
        sp.appendChild(i);
        sp.appendChild(document.createElement("br"));
        sp.appendChild(img);
        case1.appendChild(sp);    });

    //case2
    case2.style.backgroundColor=getcolor(p.plateau[1].color);

    p.plateau[1].guerriers.forEach(element => {
        let img=new Image();
        img.src = "images/"+element.name + ".png";
        img.height="50";
        img.width="50";
        let sp=document.createElement("span");
        let i=document.createElement("i");
        i.innerHTML=element.pointDeVie;
        sp.appendChild(i);
        sp.appendChild(document.createElement("br"));
        sp.appendChild(img);
        case2.appendChild(sp);    });
    //case3
    case3.style.backgroundColor=getcolor(p.plateau[2].color);

    p.plateau[2].guerriers.forEach(element => {
        let img=new Image();
        img.src = "images/"+element.name + ".png";
        img.height="50";
        img.width="50";
        let sp=document.createElement("span");
        let i=document.createElement("i");
        i.innerHTML=element.pointDeVie;
        sp.appendChild(i);
        sp.appendChild(document.createElement("br"));
        sp.appendChild(img);
        case3.appendChild(sp);    });
    //case4
    case4.style.backgroundColor=getcolor(p.plateau[3].color);

    p.plateau[3].guerriers.forEach(element => {
        let img=new Image();
        img.src = "images/"+element.name + ".png";
        img.height="50";
        img.width="50";
        let sp=document.createElement("span");
        let i=document.createElement("i");
        i.innerHTML=element.pointDeVie;
        sp.appendChild(i);
        sp.appendChild(document.createElement("br"));
        sp.appendChild(img);
        case4.appendChild(sp);    });
    //case5
    case5.style.backgroundColor=getcolor(p.plateau[4].color);

    p.plateau[4].guerriers.forEach(element => {
        let img=new Image();
        img.src = "images/"+element.name + ".png";
        img.height="50";
        img.width="50";
        let sp=document.createElement("span");
        let i=document.createElement("i");
        i.innerHTML=element.pointDeVie;
        sp.appendChild(i);
        sp.appendChild(document.createElement("br"));
        sp.appendChild(img);
        case5.appendChild(sp);
        });
}
function updateRess()
{   //bleu
    document.getElementById("ressourcesBleu").innerHTML="Ressources: "+(chateauBleu.ressource-1);
    document.getElementById("ressourcesRouge").innerHTML="Ressources: "+(chateauRouge.ressource-1);
}

async function step() {

    document.getElementById("startGame").style.display="none"
    while(plt.isOver() == 'n')
     
     {
        round += 1;
        console.log("----------------------------");
        //blues play
        //console.log(round, "blue");
        //console.log(chateauBleu.file);
        //console.log("ress=", chateauBleu.ressource);
        let bluestour = chateauBleu.tour();
        plt.avanceBlue();
        plt.entrerGuerriers(bluestour, 'b');
        plt.state(); 
        console.log(chateauBleu.file);
        console.log("ress=", chateauBleu.ressource);
        updateRess();
        updatePlateau(plt);
        await new Promise(resolve => setTimeout(resolve, 1000));

        //red play
        //console.log(round, "red");
        //console.log(chateauRouge.file);
        //console.log("res", chateauRouge.ressource);
        let redtour = chateauRouge.tour();
        plt.avanceRed();
        plt.entrerGuerriers(redtour, 'r');
        plt.state();//log the game
        console.log(chateauRouge.file);
        console.log("res", chateauRouge.ressource);
        updateRess();
        updatePlateau(plt);
        await new Promise(resolve => setTimeout(resolve, 1000));

        //to make record
        //toUI();
    }
    console.log(plt.isOver());
    if(plt.isOver()=='r')document.getElementById('popupwinred').style.display="flex";
    else document.getElementById('popupwinblue').style.display="flex";
}