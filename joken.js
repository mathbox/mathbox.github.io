var joken = new Array("pedra","papel","tesoura");

function jokenpo(user){
    superEfeitos();
    var lore_rand = Math.floor(Math.random() * 3);
    if(user == "pedra"){
      pedra(joken[lore_rand]);
    }else if(user == "papel"){
        papel(joken[lore_rand]);
    }else{
        tesoura(joken[lore_rand]);
    }
  
}

function pedra(pc){
 
    if(pc == "pedra"){
        // RESPOSTA DE EMPATE
        document.getElementById("resposta").innerHTML = "Lore escolheu " + pc + "<br><br>" +
        "Empate!<br><br> Placar:<br> Lore " + getLorePontos() + " Pontos<br>" + getNome() + " " +
        getUserPontos() + " Pontos" ;
    }else if (pc == "papel"){
        // RESPOSTA QUANDO O COMPUTADOR VENCE
        setLorePontos();
         document.getElementById("resposta").innerHTML = "Lore escolheu " + pc + "<br><br>" +
        "Lore Win!<br><br> Placar:<br> Lore " + getLorePontos() + " Pontos<br> " + getNome() + " " +
         getUserPontos() + " Pontos" ;
    }else if(pc == "tesoura"){
        //RESPOSTA QUANDO O USUARIO VENCE
        setUserPontos();
         document.getElementById("resposta").innerHTML = "Lore escolheu " + pc + "<br><br>" +
         getNome() + " Win!<br><br> Placar:<br> Lore " + getLorePontos() + " Pontos<br>" + getNome() + " " + getUserPontos() + " Pontos" ;
    }
}

function papel(pc){
    if(pc == "papel"){
        // RESPOSTA DE EMPATE
        document.getElementById("resposta").innerHTML = "Lore escolheu " + pc + "<br><br>" +
        "Empate!<br><br> Placar:<br> Lore " + getLorePontos() + " Pontos<br>" + getNome() + " " +
        getUserPontos() + " Pontos" ;
    }else if(pc == "tesoura"){
        // RESPOSTA QUANDO O COMPUTADOR VENCE
        setLorePontos();
         document.getElementById("resposta").innerHTML = "Lore escolheu " + pc + "<br><br>" +
        "Lore Win!<br><br> Placar:<br> Lore " + getLorePontos() + " Pontos<br> " + getNome() + " " +
         getUserPontos() + " Pontos" ;
    }else if(pc == "pedra"){
        //RESPOSTA QUANDO O USUARIO VENCE
        setUserPontos();
         document.getElementById("resposta").innerHTML = "Lore escolheu " + pc + "<br><br>" +
         getNome() + " Win!<br><br> Placar:<br> Lore " + getLorePontos() + " Pontos<br>" + getNome() + 
         " " + getUserPontos() + " Pontos" ;
    }
}

function tesoura(pc){
    if(pc == "tesoura"){
        // RESPOSTA DE EMPATE
        document.getElementById("resposta").innerHTML = "Lore escolheu " + pc + "<br><br>" +
        "Empate!<br><br> Placar:<br> Lore " + getLorePontos() + " Pontos<br>" + getNome() + " " +
        getUserPontos() + " Pontos" ;
    }else if(pc == "pedra"){
        // RESPOSTA QUANDO O COMPUTADOR VENCE
        setLorePontos();
         document.getElementById("resposta").innerHTML = "Lore escolheu " + pc + "<br><br>" +
        "Lore Win!<br><br> Placar:<br> Lore " + getLorePontos() + " Pontos<br> " + getNome() + " " +
         getUserPontos() + " Pontos" ;
    }else if(pc == "papel"){
        //RESPOSTA QUANDO O USUARIO VENCE
        setUserPontos();
         document.getElementById("resposta").innerHTML = "Lore escolheu " + pc + "<br><br>" +
         getNome() + " Win!<br><br> Placar:<br> Lore " + getLorePontos() + " Pontos<br>" + getNome() + 
         " " + getUserPontos() + " Pontos" ;
    }
}