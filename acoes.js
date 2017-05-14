function fechar(){
    var exit = document.getElementById("btn-sair");
    exit.checked = true;
}

function sorvete(texto){
    if(texto == "qual a resposta para a vida universo e tudo mais?"){
        document.getElementById("resposta").innerHTML = "Sorvete!";
    }else{
        document.getElementById("resposta").innerHTML = "Não há nada nesse mundo que um pote de sorvete não resolva.";
    }
    
}

function myName(){
    return "Meu nome :P";
}

function inverter(){
    var inversion = document.getElementById("inversion");
    if(inversion.checked == true){
        inversion.checked = false;
    }else{
        inversion.checked = true;
    }
}

/* Mudando o layout */

function padrao(){
    var normal = document.getElementById("bg-btn-padrao");
    if(normal.checked != true){
        normal.checked = true;
        normal = document.getElementById("fonte-padrao");
        normal.checked = true;
        document.getElementById("resposta").innerHTML = "Estilo de Layout Padrão";
    }
}

function dark(){
     superEfeitos();
    var dark = document.getElementById("bg-btn-dark");
    if(dark.checked != "true"){
        dark.checked = true;
        dark = document.getElementById("fonte-dark");
        dark.checked = true;
        document.getElementById("resposta").innerHTML = "alguem ascenda as luzes";

    }
}

function pink(){
     superEfeitos();
    var pink = document.getElementById("bg-btn-pink");
    if(pink.checked != "true"){
        pink.checked = true;
        pink = document.getElementById("fonte-pink");
        pink.checked = true;
        document.getElementById("resposta").innerHTML = "The Powerpuff Girls";

    }
}

function math_Box(){
    document.getElementById("id-logo").innerHTML = "Math.Box";
    document.getElementById("resposta").innerHTML = "Math is back...";
}

function rubber(){
    reset_bounce();
    document.getElementById("id-rubberBand").checked = true;
    document.getElementById("resposta").innerHTML = "efeito rubberBand";
}

function reset_rubber(){
     document.getElementById("id-rubberBand").checked = false;
    // document.getElementById("resposta").innerHTML = "efeito rubberBand resetado";
}

function bounce(){
    reset_rubber();
    document.getElementById("id-bounce").checked = true;
    // document.getElementById("resposta").innerHTML = "efeito Bounce";
}

function reset_bounce(){
     document.getElementById("id-bounce").checked = false;
     document.getElementById("resposta").innerHTML = "efeito Bounce resetado";
}

function superEfeitos(){
    var bo = document.getElementById("id-bounce");
    if(bo.checked == true){
        rubber();
    }else{
        bounce();
    }
}

function chama_calc(){
    var ligar = document.getElementById('btn-math');
    if(ligar.checked != true){
        ligar.checked = true;
    }
}

/* link docs */

function documentation(){
    window.open('doc.html','_blank');
}


