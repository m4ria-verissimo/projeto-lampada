let imagem = document.getElementById("img");
let aud1 = document.getElementById("audio1");
let aud2 = document.getElementById("audio2");

let mudarI =0;
    const imgs = [
        "azul.png", 
        "vermelho.png",
        
       
    ]
function acender(){
        let acesa=  document.getElementById("img").src="acesa.png";
        acesa.alt="lampada acesa";
            if (aud2) {
        {
            aud2.currentTime = 0; // reinicia o som
            aud2.play(); }
    
        }
    
 
}
function apagar(){
       let apg = document.getElementById("img").src="apagada.png" ;
       apg.alt="lampada apagada";
         if (aud2) {
        {
            aud2.currentTime = 0; // reinicia o som
            aud2.play(); }
    
        }
         
   }


function quebrar(){
        let qbd =  document.getElementById("img").src="quebrada.png";
        qbd.alt="lampada quebrada";
        if (aud1) {
            {
                aud1.currentTime = 0; // reinicia o som
                aud1.play(); }
        
            }
        }
    
function trocar(){
        let tr = document.getElementById("img").src="apagada.png";
        tr.alt="lampada trocada";
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
   let md = document.getElementById("img").src=imgs[mudarI];
   md.alt="mudar a cor";
}