const express = require('express');

const servidor = express() ;

let minutos = 0 ;
let segundos = 0 ;

let opcao ;

function cronometro (){

    let rodando = true ;

    setInterval(()=>{

        if(rodando){

            segundos++;

            if(segundos === 60){
                minutos++;
                segundos = 0 ; 
            }

        }

    },1000); 

}

servidor.get("/",(req,res)=>{

    return res.send(`Tempo atual do cronômetro: 
    ${minutos < 10 ? "0" + minutos : minutos} minutos e ${segundos < 10 ? "0" + segundos : segundos} segundos.`);
});

servidor.get("/Iniciar",(req,res)=>{
    cronometro();
    res.send("Cronometro iniciado !");
});

servidor.get("/Pausar",(req,res)=>{
    rodando = false ;
    res.send("Cronometro pausado !!!");
});

servidor.get("/Continuar",(req,res)=>{
    rodando = true ;
    res.send("Cronômetro continuando!");
});

servidor.get("/Zerar",(req,res)=>{

     minutos = 0 ;
     segundos = 0 ;
   
    res.send("Cronômetro zerado!"); 
});

servidor.listen(8000);