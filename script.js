
    let i = 0;
    let total = 0;
    let parcial = 0; 
    
    function agregardato(){
        i = i + 1;
        let persona = document.getElementById("nombre").value;
        let dinero = document.getElementById("gasto").value;
        total = parseFloat(total)+parseFloat(dinero);
        parcial = parseFloat(total)/parseFloat(i);
        let dato = persona + ": $" + dinero;
        if (persona=="") {
            alert("debe ingresar un nombre");
        } 
        else {
            if (dinero==""){
                alert("debe ingresar un monto");
            }
            else{
                var newt = document.createElement("div");                 
                var t = document.createTextNode(dato);       
                newt.appendChild(t);                                         
                document.getElementById("tab").appendChild(newt); 
                document.getElementById("total").innerHTML=' '+total;
                document.getElementById("parcial").innerHTML=' '+parcial;
            }
        }
    }

    function borrar() {
        location. reload();
    }

    
    