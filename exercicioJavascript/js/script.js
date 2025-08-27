function executar(){
    numeroInput = document.getElementById("numeroInput");
    mensagem = document.getElementById("mensagem");
    numero = parseInt(numeroInput.value);

    if (validarNumero(numero)){
        let contador = numero;
        mensagem.innerText = contador;

        let intervalo = setInterval(function() {
            if (contador <= 0){
                clearInterval(intervalo);
                mensagem.innerText = "Fim!";
            }
            else {
                contador--;
                mensagem.innerText = contador;
            }
        }, 1000, );
    }

    else {
        mensagem.innerText = "Número inválido. Por favor, insira um número positivo";
    }
    
}

function validarNumero(numero){
    if (Number.isInteger(numero) && numero >= 0){
        return true;
    }

    else{
        return false;
    }
}

