

let mudarI =0;
    const imgs = [
        "azul.png", 
        "vermelho.png",
        "acesa.png"
        
    ]
function acender(){
    document.getElementById("img").src="../acesa.png";

    
}
function apagar(){
        document.getElementById("img").src="apagada.png";
    }

function quebrar(){
    document.getElementById("img").src="quebrada.png";
}
function trocar(){
    document.getElementById("img").src="apagada.png";
}
 
function mudar(){
   
   
    mudarI = (mudarI + 1)% imgs.length;
    document.getElementById("img").src=imgs[mudarI];
}