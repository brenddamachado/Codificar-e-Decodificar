var seletor = document.querySelector("#selecione")
var addContainer = document.getElementById("valor")
var texto = document.getElementById("txt")
var txtResultado = document.getElementById("resul")
var radioCode = document.getElementById("codi")
var radioDecode = document.getElementById("decodi")
var btnCodificar = document.getElementById("button")


// Evento criado para quando o select mudar para o Cifra de Cesar a div escondida (passo) aparecer.
seletor.addEventListener("change", function(event){
    
    if (event.target.value == "cifraCe") { 
        addContainer.style = "display: block"; 

    } else { 
        
        addContainer.style = "display: none"; 
    }

});