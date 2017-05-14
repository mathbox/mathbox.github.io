var matrizA;
var matrizB;
var linhaA;
var linhaB;
var colunaA;
var colunaB;
var max_li;
var max_co;
var m_resultado;

function matriz(){
    var m1 = document.getElementById('a-matriz').value;
    var m2 = document.getElementById('b-matriz').value;
    matriz_A(m1);
    if(this.matrizA != undefined){
        matriz_B(m2);
        if(mat_veri()){
             //impr_mat();
            var opcao = op_selectors();
            document.getElementById("resultado").innerHTML = opcao + " <br>" + matriz_rep(opcao);
        }
        else
        {
          document.getElementById("resultado").innerHTML = "diferença de linhas e colunas...";
        }
    }else{
         document.getElementById("resultado").innerHTML = "Comando inválido!";
    }
    
     

}

function matriz_A(m){
    
    //this.linhaA = 0;
    //this.colunaA = 0;
    
    if(m[m.length - 1] != ";"){
        return document.getElementById("resultado").innerHTML = "Comando inválido!";
    }
    
    var i = 0;
    var j = 0;
    var aux = new Array();
    aux[i] = new Array();
    aux[i][j] = "";
    for(var k = 0; k < m.length; k++){
        
        if(isNumber(m[k]) || m[k] == "-"){
            aux[i][j] += m[k];
        }
        
        if(m[k] == ","){
            j++;
            aux[i][j] = "";
            //this.colunaA = j + 1;
            setColA(j + 1);
        }
        
        if(m[k] == "}" && m[k+1] != ";"){
            i++;
            j = 0;
            aux[i] = new Array();
            aux[i][j] = "";
            //this.linhaA = i + 1;
            setLineA(i + 1);
        }
        
    }
    
    //ler_MatrizA(aux,this.linhaA,this.colunaA);
    ler_MatrizA(aux,getLineA(),getColA());
      
    //document.getElementById("resultado").innerHTML = "em construção";
    //document.getElementById("resultado").innerHTML = "Matriz " + aux + "<br>" + "Qtdade linhas " + linhaA +
        //"<br>" + "Qtdade Colunas " + colunaA;
}

function matriz_B(m){
       
    //this.linhaB = 0
    //this.colunaB = 0;
    
    if(m[m.length - 1] != ";"){
        return document.getElementById("resultado").innerHTML = "Comando inválido!";
    }
    
    var i = 0;
    var j = 0;
    var aux = new Array();
    aux[i] = new Array();
    aux[i][j] = "";
    for(var k = 0; k < m.length; k++){
        
        if(isNumber(m[k]) || m[k] == "-"){
            aux[i][j] += m[k];
        }
        
        if(m[k] == ","){
            j++;
            aux[i][j] = "";
            //this.colunaB = j + 1;
            setColB(j + 1);
        }
        
        if(m[k] == "}" && m[k+1] != ";"){
            i++;
            j = 0;
            aux[i] = new Array();
            aux[i][j] = "";
            //this.linhaB = i + 1;
            setLineB(i + 1);
        }
        
    }
    
    //ler_MatrizB(aux,this.linhaB,this.colunaB);
    ler_MatrizB(aux,getLineB(),getColB());
      
    //document.getElementById("resultado").innerHTML = "em construção";
    //document.getElementById("resultado").innerHTML = "Matriz " + aux + "<br>" + "Qtdade linhas " + linhaB +
      //  "<br>" + "Qtdade Colunas " + colunaB;
}


function ler_MatrizA(aux,li,col){
    this.matrizA = new Array();
    for(var i = 0; i < li; i++){
        this.matrizA[i] = new Array();
        for(var j = 0; j < col; j++){
            this.matrizA[i][j] = parseFloat(aux[i][j]);
        }
    }
  
}

function ler_MatrizB(aux,li,col){
    this.matrizB = new Array();
    for(var i = 0; i < li; i++){
        this.matrizB[i] = new Array();
        for(var j = 0; j < col; j++){
            this.matrizB[i][j] = parseFloat(aux[i][j]);
        }
    }
}


// Setters

function setLineA(l){
    this.linhaA = l;
}

function setColA(c){
    this.colunaA = c;
}

function setLineB(l){
    this.linhaB = l;
}

function setColB(c){
    this.colunaB = c;
}

//Getters

function getLineA(){
    return this.linhaA;
}

function getColA(){
    return this.colunaA;
}

function getLineB(){
    return this.linhaB;
}

function getColB(){
    return this.colunaB;
}

function mat_veri(){
    if(getLineA() == getLineB() && getColA() == getColB()){
        return true;
    }else{
    return false;
    }
}

function impr_mat(){
      document.getElementById("resultado").innerHTML = "Matriz A: " + this.matrizA 
          + "<br>" + "Line: " + getLineA() + " Col: " + getColA() + "<br><br>" +
        "Matriz B: " + this.matrizB + "<br>" + "Line: " + getLineB() + " Col: " + getColB();
}

/* operacoes com Matriz */

function mat_Soma(){
    this.m_resultado = "";
    for(var i = 0; i < getLineB(); i++){
        for(var j = 0; j < getColB(); j++){
            this.m_resultado += "[ ";
            this.m_resultado += (matrizA[i][j] + matrizB[i][j]);
            this.m_resultado += " ] ";
        }
        this.m_resultado += "<br/>";
    }
    return this.m_resultado;
}

function mat_Sub(){
        this.m_resultado = "";
    for(var i = 0; i < getLineB(); i++){
        //this.m_resultado += "Linha " + (i + 1) + ": ";
        for(var j = 0; j < getColB(); j++){
            this.m_resultado += "[ ";
            this.m_resultado += (matrizA[i][j] - matrizB[i][j]);
            this.m_resultado += " ] ";
        }
        this.m_resultado += "<br/>";
    }
    return this.m_resultado;
}


function mat_Mult(){
    var m = 0;
    var aux = "";
    var count = true;
    var j = 0;
    var g1 = 0;
    while(count){
        for(var i = 0; i < getLineA(); i++){
           m += (matrizA[g1][i] * matrizB[i][j]);
        }
        aux += "[ ";
        aux += m;
        aux += " ]";
        j++;
        m = 0;
        if(j == getLineA()){
            j = 0;
            g1++;
            aux += "<br>";
        }
        if(g1 == getLineA()){
            break;
        }
    }
    
    return aux;
}


function matriz_rep(op){
    switch(op){
        case "soma":
            return mat_Soma();
            break;
        case "subtr":
            return mat_Sub();
            break;
        case "mult":
            return mat_Mult();
            break;
            default :{
                return "Pode ser implementado futuramente...";
                break;
            }
    }
}