let bodovi = prompt ("Unesi broj bodova: ")

let ocjena = kalkulatorOcjena(bodovi);

let poruka;

function kalkulatorOcjena(bodovi){

    if(bodovi<50)
    { 
        poruka = "Sorry, pao si. Nedovoljno."; 
        return 1;
    }
    if(bodovi>=50 && bodovi<63)
    { 
        poruka = "Netko ovo zove odličnim, no ovo je dovoljno.";
         return 2;
        }
    if(bodovi>63 && bodovi<76)
    { 
        poruka="Sredina! Dobar."; 
        return 3;
    }
    if(bodovi>=76 && bodovi<89)
    { 
        poruka="Četvorka."; 
        return 4;
    }
    if(bodovi>=89 && bodovi<100)
    { 
        poruka="Opa, petica. Čestitam!"; 
        return 5;
    }
}

console.log(poruka);