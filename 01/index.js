const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

const express = require('express');

const servidor = express() ;

let rodada = 0 ;

servidor.get("/",(req,res)=>{

        res.send(`É a vez de ${jogadores[rodada]} jogar!`);

        rodada++;

        if(rodada === jogadores.length ){
            rodada = 0 ;
        }

});

servidor.listen(3000);


