let tav = 250;
let tanulok = 49;
let tanar = 1;
let sofor = 1;
let x = szar(N= document.getElementById("napszam").value,M= document.getElementById("letszam").value)
document.getElementById("sziaaa").innerHTML = szar();
//meg tudom magyarázni!!! sz = szállás ar = ár, rossz az aki rosszra gondol 😁
function szar(N= document.getElementById("napszam").value,M= document.getElementById("letszam").value){    
   
    switch(true){
        case (N>=30):
            if (M>=2){
                return 9000*0.9
            }
            return 9000
        case (29>=N&&N>=20):
            if (M>=2){
                return 10000*0.9
            }
            return 10000
        case (19>=N&&N>=10):
            if (M>=2){
                return 11000*0.9
            }
            return 11000
        case (N>=1&&N<=9):
            if (M>=2){
                return 12500*0.9
            }
            return 12500
        case (N<=0):
            alert('Hiba.')
    
    }
   
}

function busz(km = 250,nap = document.getElementById("napszam").value ,utas = document.getElementById("letszam").value){
    a =(640*km*Math.ceil(utas/49))
    b =(40000*nap*Math.ceil(utas/49))
    document.getElementById("eredmeny").innerHTML = "busz út ára"+a+"ft"+ "busz bérlés ára"+ b +"ft";
 
    
}
function auto(km = 250){
    
   a = ['km:',84*km,'benzin:',(0.07*1.5*km)]
   document.getElementById("eredmeny").innerHTML = "az aoutó út ára"+a+"ft"
}
function tomegk(ut = 250,fo = document.getElementById("letszam").value){
    return ut*fo*2600
}


