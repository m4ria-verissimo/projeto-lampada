let imagem = document.getElementById("img");
let aud1 = document.getElementById("audio1");
let aud2 = document.getElementById("audio2");

let mudarI =0;
    const imgs = [
        "azul.png", 
        "vermelho.png",
        
       
    ]
function acender(){
    document.getElementById("img").src="../acesa.png";
     if (aud2) {
        {
            aud2.currentTime = 0; // reinicia o som
            aud2.play(); }
    
        }
    
 
}
function apagar(){
        document.getElementById("img").src="apagada.png";
         if (aud2) {
        {
            aud2.currentTime = 0; // reinicia o som
            aud2.play(); }
    
        }
         
    }


function quebrar(){
    document.getElementById("img").src="quebrada.png";
     if (aud1) {
        {
            aud1.currentTime = 0; // reinicia o som
            aud1.play(); }
    
        }
    }
   
function trocar(){
    document.getElementById("img").src="apagada.png";
     if (aud2) {
        {
            aud2.currentTime = 0; // reinicia o som
            aud2.play(); }
    
        }
    
}
 
function mudar(){
     if (aud2) {
        {
            aud2.currentTime = 0; // reinicia o som
            aud2.play(); }
    
        }
   
    mudarI = (mudarI + 1)% imgs.length;
    document.getElementById("img").src=imgs[mudarI];
}