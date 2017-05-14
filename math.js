var result;
var verifica = false;
var fibo = new Array();

function raiz(num){
    var r = parseFloat(num);
    if(r > 0){
    var result = Math.sqrt(r);
    document.getElementById("resposta").innerHTML = "Raiz de " + r + " é " + result;
    }else{
        document.getElementById("resposta").innerHTML = "Não existe raiz";
    }
}

function exponenciacao(n1,n2){
    var x1 = parseFloat(n1);
    var x2 = parseFloat(n2);
    var result = Math.pow(n1,n2);
    document.getElementById("resposta").innerHTML = x1 + " elevado a " + x2 + " é " + result;
}

function calcula(comando){
    var expressao = new Array();
    var j = 0;
    result = 0;
    expressao[j] = "";
    for(var i = 0; i < comando.length; i++){
        if(isNumber(comando[i])){
            expressao[j] += comando[i];
            if(!isNumber(comando[i + 1])){
                
                if(comando[i + 1] == "+" || comando[i + 1] == undefined){
                    result += parseInt(expressao[j]);
                    verifica = true;
                }
                
                j++;
                expressao[j] = "";
            }
        }
        
    }//fim for
}

function expression(){
    document.getElementById("resposta").innerHTML = result;
}

function fibonacci(num){
    if(num == 0 || num == 1){
        return 1;
    }else{
        return fibonacci(num-1) + fibonacci(num-2);
    }
}

function calcFibo(num){
    if(num <= 40){
    fibo[0]="";
    for(var i=0; i < num; i++){
        fibo[0] += fibonacci(i);
        fibo[0] += " ";
    }
    document.getElementById("resposta").innerHTML = fibo[0];
    }else{
        document.getElementById("resposta").innerHTML = "Sequencia grande demais";
    }
}

function fatorial(num){
    if(num == 0 || num == 1){
        return 1;
    }else{
        return num * fatorial(num-1);
    }
}

function calcFat(num){
    document.getElementById("resposta").innerHTML = fatorial(num);
}

function fatRange(num){
    var fat = new Array();
    fat[0] = "";
    for(var i = 0; i <= num; i++){
        fat[0] += i;
        fat[0] += "! = ";
        fat[0] += fatorial(i);
        fat[0] += "<br>";
    }
    document.getElementById("resposta").innerHTML = fat[0];
}
