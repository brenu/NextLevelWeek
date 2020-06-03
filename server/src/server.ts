/***
 *  Base do Back-End do projeto
 ***/

// Importando framework para lidar com o roteamento da aplicação
import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

//Habilitando request body com JSON
app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// Rota => endereço da requisição que estamos fazendo;
// Recurso => aquilo que buscamos acessar 
//            no sistema através da rota;

// Request param: são parâmetros que vão na rota
//                para identificar um recurso
// Query param: são parâmetros que vão na rota
//              e são opcionais. Ex: filtros
// Request body: são parâmetros para criar e
//               atualizar informações


//Indicando ao node em que porta o servidor estará rodando
app.listen(3333);