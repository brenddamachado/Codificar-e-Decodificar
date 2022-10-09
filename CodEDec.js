var seletor = document.querySelector("select")
var addContainer = document.getElementById("valor")
var texto = document.getElementById("txt")
var txtResultado = document.getElementById("resul")
var radioCode = document.getElementById("codi")
var radioDecode = document.getElementById("decodi")
var btnCodificar = document.getElementById("button")

// aparecer o incremento somente quando o cifra for escolhido.
seletor.addEventListener("change", function(){
    
    if (event.target.value == "cifraCesar") { 

        addContainer.style = "display: block"; 

    } else { 
        
        addContainer.style = "display: none"; 
    }

});

// Evento para a página não recarregar 
btnCodificar.addEventListener("click", function(event){
    console.log(texto.value)
    event.preventDefault()
})
    
//  mudar a frase do button
radioCode.addEventListener("click", function() {
    btnCodificar.innerText = "Codificar Texto"
});
    
radioDecode.addEventListener("click", function() {
    btnCodificar.innerText = "Decodificar Texto"
});
    

// incremento
var passo = document.querySelector("#passo")

btnCodificar.addEventListener("click", function() {
    
    if(radioCode.checked && seletor.value == "cifraCesar"){
        txtResultado.value = cifra(parseInt(passo.value), texto.value)
      //codificar cifra//
    }else if(radioCode.checked && seletor.value == "base.64"){
        txtResultado.value = codificandoABase64(texto.value)
        //codificar base 64/
    }else if(radioDecode.checked && seletor.value == "cifraCesar"){
        txtResultado.value = decifra(parseInt(passo.value), texto.value)
        //decodificar cifra//
    }else if(radioDecode.checked && seletor.value == "base.64"){
        txtResultado.value = decodificandoABase64(texto.value)
        //decodificar base//
    }
});
    
      
    
function cifra (passo, texto){

    var textoCodificado = ""
    var codigo = 0

    for(var i = 0; i < texto.length; i++){
        if(texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90){
            codigo = (((texto.charCodeAt(i) - 65) + passo) % 26) + 65;
        }else if(texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122){
            codigo = (((texto.charCodeAt(i) - 97) + passo) % 26) + 97;
        }else if(texto.charCodeAt(i) == 32){
            codigo = 32
        }
          textoCodificado += String.fromCharCode(codigo)
        }

        return textoCodificado;
      }
      
function decifra (passo, texto){
    var textoCodificado = ""
    var codigo = 0

    for(var i = 0; i < texto.length; i++){

        if(texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90){
            if((texto.charCodeAt(i) - 65) - passo < 0){
              codigo = (((texto.charCodeAt(i) - 65) - passo + 26) % 26) + 65;
            }else{
              codigo = (((texto.charCodeAt(i) - 65) - passo) % 26) + 65;
        }
            
        }else if(texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122){
            if((texto.charCodeAt(i) - 97) - passo < 0){
              codigo = (((texto.charCodeAt(i) - 97) - passo + 26) % 26) + 97;
            }else{
              codigo = (((texto.charCodeAt(i) - 97) - passo) % 26) + 97;
            }
            
        }else if(texto.charCodeAt(i) == 32){
            codigo = 32
        }
          textoCodificado += String.fromCharCode(codigo)
        }
        return textoCodificado;
      }
    
      
    
    //Funções de codificar e descodificar em Base64//
    function codificandoABase64(texto) {
        return btoa(texto);
    }
      
    function decodificandoABase64(texto) {
        return atob(texto);
    }




