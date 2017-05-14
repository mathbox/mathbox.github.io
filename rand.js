
function rand(){ // gera um numero ou uma letra aleatoria
    var valor = Math.floor(Math.random() * 2);
    if(valor == 0){
       rand_num();
    }else{
       rand_letra();
    }
}

function rand_letra(){ // gera uma letra aleatoria
     valor = 65 + Math.random() * (90 - 65);
     var letra = String.fromCharCode(valor); // converte int para caracter
     document.getElementById("resposta").innerHTML = letra;
}

function rand_num(){ // gera um numero aleatorio
     var valor = Math.floor(Math.random() * 10);
     document.getElementById("resposta").innerHTML = valor;
}


function isNumber(caracter){ // informe se o caracter e um numero ou nao
    for(var i = 48; i < 58; i++){ // valores referente a tabela ASCII començando da posição 48 = 0 até a 57 = 9
        if(caracter == String.fromCharCode(i)){
            return true;
        }
    }//fim for
    return false;
}

function rand_range_num(min,max){ // gera uma numero aleatorio dentro de uma intervalo
    var n1 = parseInt(min); // converte string para int
    var n2 = parseInt(max);
    n2++;
    var rand = parseInt(n1 + Math.random() * (n2 - n1)); // Math.floor((Math.random() * n2) + n1);
    document.getElementById("resposta").innerHTML = rand;
}

function rand_negativo(){ // gera numeros aleatorios com possibilidade de serem negativos
    var rand = parseInt(0 + Math.random() * (Math.pow(2,63) - 0));
    var x = parseInt(Math.random() * 10);
    if(x % 2 == 0){
        rand *= -1;
    }
    document.getElementById("resposta").innerHTML = rand;
}

function rand_extremo(max){ // gera numeros aleatorios menor ou igual ao que for estabelecido 
    var rand = parseInt(Math.random() * max);
    var x = parseInt(Math.random() * 10);
    if(x % 2 == 0){
        rand *= -1;
    }
    document.getElementById("resposta").innerHTML = rand;
}

function rand_maior(min){ // gera numeros aleatorios maiores do que for estabelecido 
    var valor = parseInt(min);
    var vet = new Array(10,20,30,40,50,60,70,80,90,100,500,1000,10000,10000,1000000);
    var aux = Math.floor(Math.random() * 15);
    var rand = Math.floor(valor + Math.random() * vet[aux]);
    document.getElementById("resposta").innerHTML = rand;
}