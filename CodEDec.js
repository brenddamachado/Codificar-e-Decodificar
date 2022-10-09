var seletor = document.querySelector("select")
var addContainer = document.getElementById("valor")
var texto = document.getElementById("txt")
var txtResultado = document.getElementById("resul")
var radioCode = document.getElementById("codi")
var radioDecode = document.getElementById("decodi")
var btnCodificar = document.getElementById("button")

// aparecer o encremento somente quando o cifra for escolhido.
seletor.addEventListener("change", function(){
    
    if (event.target.value == "cifraCesar") { 

        addContainer.style = "display: block"; 

    } else { 
        
        addContainer.style = "display: none"; 
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
        