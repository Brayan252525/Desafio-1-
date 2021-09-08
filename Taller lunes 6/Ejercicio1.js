var biblioteca=new Array();
function previewImage(nb) {        
var reader = new FileReader();         
    reader.readAsDataURL(document.getElementById('uploadImage'+nb).files[0]);         
    reader.onload = function (e) { 
    document.getElementById('uploadPreview'+nb).src = e.target.result;
}  
}
 

function tablaS(){
  var datos=new Object();
    datos.libro=document.getElementById("txtlibro").value;
    datos.titulo=document.getElementById("txttitulo").value;
    datos.nombre=document.getElementById("txtnombre").value;
    datos.apellido=document.getElementById("txtapellido").value;
    datos.categoria=document.getElementById("categoria").value;
    datos.precio=document.getElementById("precio").value;
    biblioteca.push(datos);
      mostrar();
    document.getElementById("txtlibro").value="";
    document.getElementById("txttitulo").value="";
    document.getElementById("txtnombre").value="";
    document.getElementById("txtapellido").value="";
    document.getElementById("categoria").value="";
    document.getElementById("precio").value="";

    }

function mostrar(){
    tabla="";
  for(var con in biblioteca){
   
    tabla+="<table class=table>";
  
    tabla+="<tr>"; 
    tabla+="<td class=negrita>";
    tabla+="Libro ID:";
    tabla+="</td>";
    tabla+="<td>"+biblioteca[con].libro+"</td>";
    tabla+="</tr>";

    tabla+="<tr>";
    tabla+="<td class=negrita>";
    tabla+="Titulo:";
    tabla+="<td>"+biblioteca[con].titulo+"</td>";
    tabla+="</td>";
    tabla+="</tr>";

    tabla+="<tr>";
    tabla+="<td class=negrita>";
    tabla+="Nombre del Autor:";
    tabla+="</td>";
    tabla+="<td>"+biblioteca[con].nombre+"</td>";
    tabla+="</tr>";

    tabla+="<tr>";
    tabla+="<td class=negrita>";
    tabla+="Apellido de autor:";
    tabla+="</td>";
    tabla+="<td>"+biblioteca[con].apellido+"</td>";
    tabla+="</tr>";

    tabla+="<tr>";
    tabla+="<td class=negrita>";
    tabla+="Categoria:";
    tabla+="</td>";
    tabla+="<td>"+biblioteca[con].categoria+"</td>";
    tabla+="</tr>";

    tabla+="<tr>";
    tabla+="<td class=negrita>";
    tabla+="Precio:";
    tabla+="</td>";
    tabla+="<td>"+biblioteca[con].precio+"$"+"</td>";
    tabla+="</tr>";

    tabla+="</table>";   
    document.getElementById("div").innerHTML=tabla;

    console.log(tabla);
}
}


