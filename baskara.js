var valorA;
var valorB;
var valorC;
var valorX1;
var valorX2;
var expressao;


function delta(a,b,c){
    var d = (Math.pow(b,2)) - (4 * a * c);
    return d;
}


//Metodos Setters
function setValorA(a){
    this.valorA = a;
}

function setValorB(b){
    this.valorB = b;
}

function setValorC(c){
    this.valorC = c;
}

function setValorX1(x1){
    this.valorX1 = x1;
}

function setValorX2(x2){
    this.valorX2 = x2;
}

function setExpressao(vetor){
    expressao = [];
    for(var i = 0; i < vetor.length; i++){
        expressao[i] = parseFloat(vetor[i]);
    }
   setValorA(expressao[0]);
   setValorB(expressao[1]);
   setValorC(expressao[2]); 
}

//Metodos Getters
function getValorA(){
    return this.valorA;
}

function getValorB(){
    return this.valorB;
}

function getValorC(){
    return this.valorC;
}

function getValorX1(){
    return this.valorX1;
}

function getValorX2(){
    return this.valorX2;
}

// calcula as raizes
function calc_raizes(de){
    var x1 = -( (getValorB() - Math.sqrt(de)) / (2 * getValorA()));
    var x2 = -( (getValorB() + Math.sqrt(de)) / (2 * getValorA()));
    setValorX1(x1);
    setValorX2(x2);
}

