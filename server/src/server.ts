/***
 *  Base do Back-End do projeto
 ***/

// Importando framework para lidar com o roteamento da aplicação
import express from 'express';

const app = express();

//Primeira rota do app, por enquanto é somente de exemplo
app.get('/users', (req, res) => {
    console.log('Listagem de usuários');
    res.json({ "message": "Olá, mundo :)"});
});

//Indicando ao node em que porta o servidor estará rodando
app.listen(3333);