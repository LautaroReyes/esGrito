let texto = prompt("Ingrese un texto");

function esGrito(texto){
    let letra;
    let cantidad = parseInt(texto.length);
    let cont = 0, aux = 0;
    letra = texto.split("");
    console.log(letra);
    for(let i = 0; i < texto.length; i++){
        if(letra[i] == "!" || letra[i] == "¡"){
            cont++;
        }
    }
    aux = cantidad - cont;
    
    if(aux < cont){
        document.write(texto + " ESGRITO");
    }else{
        document.write(texto + " escrito");
    }
}
esGrito(texto);
