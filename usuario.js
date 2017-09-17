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
          
      }else{
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

