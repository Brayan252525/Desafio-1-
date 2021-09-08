    var multi;
    var numeros=new Array();
    k=0;
    mayor=0;
    menor=0;



function mostrar(){
  
    document.getElementById("boton2").disabled = true;
    alert("Ingrese numeros");
    document.getElementById("txtnumero").focus();
}
function crear_matriz(){
    //guardo los numeros según la matriz solicitada
    fila=document.getElementById("txtfila").value;
    columna=document.getElementById("txtcolumna").value; 
    multi=parseInt(fila*columna);   
    nume=document.getElementById("txtnumero").value;
    numeros.push(nume);
  
    if (numeros.length>=multi){
    alert("Ya sobrepaso la cantidad de datos solicitada");
    txtnumero.disabled=true;
    botonn.disabled=true;
    boton2.disabled=false;
    }else{
    document.getElementById("txtnumero").value="";
}
}

function muestra2(){
    fila=document.getElementById("txtfila").value;
    columna=document.getElementById("txtcolumna").value;
    mayor=(Math.max.apply(null,numeros));
    menor=(Math.min.apply(null,numeros));
    
    tabla="";
    tabla+="<table class=tabla2>";
    //ordenamos numeros segun matriz
    for(i=0;i<fila;i++){
        tabla+="<tr>";
        for(j=0;j<columna;j++){ 
            if (numeros[k]==mayor){  
                tabla+="<td bgcolor=red class=estilo>";         
                tabla+=numeros[k++];
                tabla+="</td>";

            }else if(numeros[k]==menor){
                tabla+="<td bgcolor=blue class=estilo>";             
                tabla+=numeros[k++];
                tabla+="</td>"; 
               
            }else{
                tabla+="<td class=estilo>";             
                tabla+=numeros[k++];
                tabla+="</td>";
            }        
        }        
        tabla+="</tr>";
        }
    tabla+="</table>";
    fila="";
    fila+="<table>";
    fila+="<td>";
    fila+="<p class= parrafo>Numero mayor: </p>"+mayor+"<br> <br>";
    fila+="<p class= parrafo>Numero menor: </p>"+menor;
    fila+="</td>";
    fila+="</table>";
    document.getElementById("body").innerHTML=tabla+"<br>"+fila;  
}

