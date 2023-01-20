function validaCaracter(event) {
    key = event.keyCode || event.which;
    if((key>64 && key<91) || (key>96 && key<123) || (key==32) || (key==209) || (key==241)){
        return true;
    }
    else{ 
        return false;
    }
}

function validaVacio() {
    var textAreaOrigen = document.getElementById('frase-origen');
    if (textAreaOrigen.value == ""){
        alert ("Debe ingresar un texto a encriptar/desencriptar")
        return false;
    } else{
        return true;
    }
    
}

function encriptar() {
    let textAreaOrigen = String(document.getElementById('frase-origen').value).toLocaleLowerCase();
    let textAreaDestino = document.getElementById('frase-destino');
    var textoDestino ="";
    if(validaVacio()){
        for (var i = 0; i < textAreaOrigen.length ; i++) {
            switch (textAreaOrigen[i]) {
                case 'a':
                    textoDestino= textoDestino + "ai";
                    break;
                case 'e':
                    textoDestino= textoDestino + "enter";
                  break;
                case 'i':
                    textoDestino= textoDestino + "imes";
                  break;
                case 'o':
                    textoDestino= textoDestino + "ober"; 
                  break;
                case 'u':
                    textoDestino= textoDestino + "ufat"; 
                  break;
                default:
                    textoDestino= textoDestino + textAreaOrigen[i]; 
              }        
        }
        textAreaDestino.innerHTML= textoDestino;
    }
}

function desencriptar() {
    let textAreaOrigen = String(document.getElementById('frase-origen').value).toLocaleLowerCase();
    let textAreaDestino = document.getElementById('frase-destino');
    var nuevoTextoDestino ="";
    if(validaVacio()){
        nuevoTextoDestino = textAreaOrigen.replace("enter","e");
        nuevoTextoDestino = nuevoTextoDestino.replace("imes","i");        
        nuevoTextoDestino = nuevoTextoDestino.replace("ober","o");
        nuevoTextoDestino = nuevoTextoDestino.replace("ufat","u");
        nuevoTextoDestino = nuevoTextoDestino.replace("ai","a");
        textAreaDestino.innerHTML= nuevoTextoDestino;
    }
}

function copiarAMemoria() {

        var copyText = document.getElementById("frase-destino");
      
        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
      
         // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
      
}




