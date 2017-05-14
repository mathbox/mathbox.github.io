var bloco;
var operador;
var resto;
var tipo;

function calcula(){
    operador = op_selectors();
    tipo = tipo_selector();
    var aux = document.getElementById('num-pad').value;
    var calc = verifica(aux);
    document.getElementById("resultado").style.color = "black";
    
    if(calc && tipo == "padrao"){
        result(operador);
        //document.getElementById('resultado').innerHTML = "Comando Digitado: " + aux;
       //document.getElementById('resultado').innerHTML = "Bloco " + bloco + "<br> tipo " + typeof(bloco[0]);
       // document.getElementById('resultado').innerHTML = "Calculadora " + tipo + "<br>Operação " + operador;
    }
    
    if(tipo == "baskara") calc_baskara();
    
    if(tipo == "matriz") matriz();
}

function op_selectors(){
    var mais = document.getElementById('id-add');
    var menos = document.getElementById('id-sub');
    var mult = document.getElementById('id-mult');
    var div = document.getElementById('id-div');
    if(mais.checked) return "soma";
    if(menos.checked) return "subtr";
    if(mult.checked) return "mult";
    if(div.checked) return "div";
}

function tipo_selector(){
    var pad = document.getElementById('mat-padrao');
    var bask = document.getElementById('mat-bask');
    var matriz = document.getElementById('mat-matriz');
    
    if(pad.checked)return "padrao";  
    if(bask.checked) return "baskara";
    if(matriz.checked) return "matriz";
    
}

function result_limpa(){
    document.getElementById("resultado").style.color = "silver";
    document.getElementById("resultado").innerHTML = "Resultado";
}

function verifica(line){
    if(line[0] != "{"){
        return false;
    }else{
        
        var aux = new Array();
        var j = 0;
        aux[j] = "";
        for(var i = 1; i < line.length; i++){
            if(line[i] == ','){
              j++;
              aux[j] = "";
            }
            if(isNumber(line[i]) || line[i] == "-"){
                aux[j] += line[i];
            }
          
            if(line[i+1] == "}" || line[i+1] == "") break;
        }
        
        if(aux[1] == undefined) {
            aux[1] = "0";
        }
    }//fim else
    //document.getElementById('resultado').innerHTML = aux;
    
    bloco = [];
    for(var i = 0; i < aux.length; i++){
       bloco[i] = parseFloat(aux[i]);
    }
    return true;
}

function result(op){
    var r;
    switch(op){
        case "soma":
             r = soma(bloco);
             break;
        case "subtr":
             r = subtracao(bloco);
             break;
        case "mult":
             r = multiplicacao(bloco);
            break;
        case "div":
            r = divisao(bloco);
            break;
    }
    
    if(op != "div"){
        document.getElementById("resultado").innerHTML = "{ resultado: " + r + " }";
    }else{
         document.getElementById("resultado").innerHTML = "{ resultado: " + r + " }<br>{ Resto: "+ resto + " }";
    }
}

function soma(valores) {
    var r = 0;
    for(var i = 0; i < valores.length; i++){
        r = r + valores[i];
    }
    return r;
}

function subtracao(valores){
    var r = valores[0];
    for(var i = 1; i < valores.length; i++){
        r = r - valores[i];
    }
    return r;
}

function multiplicacao(valores){
    var r = 1;
    for(var i = 0; i < valores.length; i++){
        r = r * valores[i];
    }
    return r;
}

function divisao(valores){
    if(valores.length == 2) {
        var num = valores[0];
        var den = valores[1];
        resto = num % den;
    }
    var r = valores[0];
    for(var i = 1; i < valores.length; i++){
        r = r / valores[i];
    }
    
    return r;
}
    

/* Baskara */
    
function calc_baskara(){
    var aux = document.getElementById('num-bask').value;
    //document.getElementById('resultado').innerHTML = "Valor digitado: " + aux;
    var vet = new Array();
    var j = 0;
    vet[j] = "";
    
    if(aux[0] != "{") return document.getElementById("resultado").innerHTML = "Comando inválido!";
    
    for(var i = 0; i < aux.length; i++){
        if(aux[i] == ","){
            j++;
            vet[j] = "";
        }
        if(isNumber(aux[i]) || aux[i] == "-"){
            vet[j] += aux[i];
        }
        if(aux[i + 1] == "}") break;
    }
    
    setExpressao(vet);
    
    if(expressao.length != 3){
        document.getElementById("resultado").innerHTML = "Quantidade de valores inválidos!" + "<br>"+
            "Informe valores para a, b, c";
    }else{
        
        var d = delta(getValorA(),getValorB(),getValorC());
        
       // document.getElementById("resultado").innerHTML = "delta " + d + "<br>" + 
         //   "A = " + getValorA() + "<br>B = " + getValorB() + "<br>C = " + getValorC(); 
        
        if(d >= 0){
            calc_raizes(d);
            document.getElementById("resultado").innerHTML = "Delta: " + d + " <br>Raiz: " + 
                 Math.sqrt(d) + "<br>" +
                "X1 = " + getValorX1() + "<br>" + "X2 = " + getValorX2();       
        }else{
            document.getElementById("resultado").innerHTML = "Delta negativo: " + d;
        }
    }
}    