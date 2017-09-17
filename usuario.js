var nome = "Usuario";
var pontos = 0;

function usuario(){
   var nome_aux = document.getElementById("id-nome").value;
    if(nome_aux.toLowerCase() == "lore"){
        return document.getElementById("btn-lore").checked = "true";
    }else{ 
      if(nome_aux != undefined && nome_aux != "lore"){
          setNome(nome_aux);
          this.pontos = 0;
      }
        
      if(getNome() == "administrador" || getNome() == "admin" || getNome() == "adm"){
          document.getElementById("id-logo").innerHTML = getNome();
          document.getElementById("resposta").innerHTML = "Você não tem o Gene Terminal de Rede";
          
      }
      else if(getNome().toLocaleLowerCase() == "dede"){
          document.getElementById("id-logo").innerHTML = getNome();
          document.getElementById("resposta").innerHTML = "Olá " + getNome() + "<br>Já nos conhecemos de algum lugar não? <br>" +
              "auhsusahuahsuh" + "<br>@Bkristene~";
      }
       else{
             document.getElementById("id-logo").innerHTML = getNome();
            document.getElementById("resposta").innerHTML = "Olá, " + getNome() + "<br>Eu me chamo Lore..." + "<br/>" +
          "Seu nome diz muito sobre quem você é.";  
      }
 
    }

}//fim function

function getNome(){
    return this.nome;
}

function setNome(user){
    this.nome = user;
}

function getUserPontos(){
    return this.pontos;
}

function setUserPontos(){
    this.pontos++;
}

function myAutorFriend(){
    var arr = "oãgarA amiL azzerdnA";
    var n = "";
    for(var i = arr.length - 1; i >= 0; i--){
        n += arr[i];
    }
    return n;
}

function getAutorMsg(){
    var msg = "Não importa o que te digam, <br>";
    msg += "seja o que você é. <br>";
    msg += "Viver para os outros talvez <br>";
    msg += "mas o preço a pagar no futuro <br>";
    msg += "é mais dolorido que o qual pagaria agora. <br>";
    msg += "Dividir minhas obras com vocês será meu maior prazer, <br>";
    msg += "elas são um pouquinho da imensidão que há dentro de mim. <br>";
    msg += "Espero que além de tirá-los por alguns minutos do mundo em que vivemos, <br>";
    msg += "elas possam não só proporcionar diversão, <br>";
    msg += "mas também engrandecimento pessoal. <br>";
    return msg;
}