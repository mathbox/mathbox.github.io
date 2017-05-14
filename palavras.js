 var y = [];
function biblioteca(texto){
    switch(texto){
        case "sair":
            fechar();
            break;
        case "qual a resposta para a vida universo e tudo mais?":
            sorvete(texto);
            break;
        case "estou com problemas":
            sorvete(texto);
            break;
        case "inv":
            inverter();
            break;
        case "padrao l":
            padrao();
            break;
        case "dark l":
            dark();
            break;
        case "pink l":
            pink();
            break;
        case "docs":
            documentation();
            break;
        case "mathbox":
            math_Box();
            break;
        case "rubberband":
            rubber();
            break;
        case "rubberband -r":
            reset_rubber();
            break;
        case "bounce":
            bounce();
            break;
        case "bounce -r":
            reset_bounce();
            break;
        case "rand":
            rand();
            break;
        case "rand letra":
            rand_letra();
            break;
        case "rand num":
            rand_num();
            break;
        case "rand -n":
            rand_range_num(getMin(),getMax());
            break;
        case "rand --n":
            rand_negativo();
            break;
        case "rand -n -m":
            rand_extremo(getNumero());
            break;
        case "rand -n m":
            rand_maior(getNumero());
            break;
        case "var aux":
            getAux();
            break;
        case "pedra":
            jokenpo(texto);
            break;
        case "papel":
            jokenpo(texto);
            break;
        case "tesoura":
            jokenpo(texto);
            break;
        case "raiz":
            raiz(getNumero());
            break;
        case "pow":
            exponenciacao(getMin(),getMax());
            break;
        case "pow -":
            exponenciacao(getMin(),getMax());
            break;
        case "calc":
            expression();
            break;
        case "fibonacci":
            calcFibo(getNumero());
            break;
        case "fatorial":
            calcFat(getNumero());
            break;
        case "fatorial -n":
            fatRange(parseInt(getNumero()));
            break;
        case "math":
            chama_calc();
            break;
        case "olá":
            document.getElementById("resposta").innerHTML = "Olá mundo!";
            break;
        default:
            alert("Nao funcionou");
            break;
    }//end switch
}//end function biblioteca

function a(){
    var x = "arievilO ed uaL cirE rop odairC";
    y[0] = "";
    for(i = x.length - 1; i >= 0; i--){
        y[0] += x[i];
    }
    inverter();
    fechar();
   document.getElementById('id-logo').innerHTML = y[0];
    
}