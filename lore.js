var memoria = new Array("sair","qual a resposta para a vida universo e tudo mais?", "estou com problemas",
                        "inv","padrao l","dark l","pink l", "docs", "mathbox", "rubberband", "rubberband -r",
                        "bounce", "bounce -r", "rand", "rand letra", "rand num", "rand -n", "var min", "var max", "var aux",
                        "rand --n", "rand -n -m", "rand -n m","pedra","papel","tesoura",
                         "raiz", "pow", "pow -","calc","fibonacci","fatorial", "fatorial -n","math","olá");
var resposta;
var rep_padrao = new Array("Isso não me diz nada...",
"A natureza do que você falou é tão complexa...<br>que preciso me retirar para pensar...",
"...");

var min, max, numero;
var aux;
var points = 0;

function responda(){
    resposta = false;
    var tratamento = document.getElementById("comandos").value;
    var teste = funcao(tratamento);
    tratamento = tratamento.toLowerCase(); // converte todas as letras maiusculas em minusculas
    calcula(tratamento);
    cutNum(tratamento);
    if(!getNumbers(tratamento)){
        min[0] = "void";
        max[0] = "void";
    }
    
    var comando = aux[0];

    //document.getElementById("resposta").innerHTML = comando;

    if(comando == "lore"){
        return document.getElementById("resposta").innerHTML = myName();
    }
    
    if(comando == "oãgara amil azzerdna" || comando == "bkristene"){
         return document.getElementById("resposta").innerHTML = "Olá! Você gosta de histórias? <br>" + 
             "Palavras de uma escritora... <br><br>" + getAutorMsg()
            +"<br><br> oãgarA amiL azzerdnA:@Author";
           
    }
    
    if(getNome() != undefined){
        if(seuNome(comando)){
            return document.getElementById("resposta").innerHTML = "Seu nome :P";
        }
    }
    
    for(var i = 0; i < memoria.length; i++){
          if(comando == memoria[i]){
            resposta = true;
            biblioteca(comando);       
            break;
          }
      }
    
   if(resposta == false){
       if(!teste){
        var rand = Math.floor(Math.random() * 3); //Math.floor arredonda para baixo
        document.getElementById("resposta").innerHTML = rep_padrao[rand];
       }else{
           document.getElementById("comandos").value = "fabricadealgoritmos@gmail.com";
           document.getElementById("resposta").innerHTML = y[0] + " 01/05/2017";
       }
    }
    
    
} // fim function responda

function seuNome(texto){
    var nome = getNome().toLowerCase();
    if(texto == nome){
        return true;
    }
    return false;
}

function getNumbers(comando){
   min = new Array();
   min[0] = "";
   max = new Array();
   max[0] = "";
   numero = new Array();
   numero[0] = "";

    for(var i = 0; i < comando.length; i++){
        if(isNumber(comando[i])){
            
            if(comando[i - 2] == "-"){
               min[0] += comando[i - 2];
               numero[0] += comando[i - 2];
            }
            
            min[0] += comando[i];
            numero[0] += comando[i];
            
            if(comando[i + 1] == " ") { //trantado a string caso ela tenha sido digitada corretamente. Ex: rand num 1 a 10 
                i += 2;
                if(comando[i] == "a") {
                    i += 2;
                    while(isNumber(comando[i])){
                        max[0] += comando[i];
                        i++;
                    }
                    return true;
                }
            }
             
        }// fim if               
    }//fim for
    return false;
}

function cutNum(comando){
    aux = new Array();
    aux[0] = ""; //inicializa com aspas para que o valor undefined não seja concatenado com a string
    for(var i = 0; i < comando.length; i++){
        if(comando[i] == " " && isNumber(comando[i+1])){
            break;
        }    
        aux[0] += comando[i];
    }
}


function getMin(){
    return min[0];
}

function getMax(){
    return max[0];
}

function getAux(){
    return document.getElementById("resposta").innerHTML = ""+aux[0];
}

function funcao(x){
    var validar = "mumoc ohnos mu é oan etse ,sadno sa erbos los od ohlirb o ,etnematnel odnufa otnauqne rev ossop ue";
    var j = 0;
    var texto = new Array();
    texto[0] = "";
    for(i = x.length - 1; i >= 0; i--){
        if(x[j] == validar[i] ){
            texto[0] += validar[i];
        }
        j++;
    }
    if(texto[0] == x){
    document.getElementById("resposta").innerHTML = texto[0] + "<br>" + x;
        a();
        return true;
    }
    return false;
}

function getNumero(){
    return numero[0];
}

function setLorePontos(){
    this.points++;
}

function getLorePontos(){
    return this.points;
}

