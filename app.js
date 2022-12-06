const express = require('express');
const mysql = require('mysql2');
const connect = require('./conexao.js');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.delete('/clientes/:id', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("delete from onepiece where id="+ req.params.id, res);
})

app.post('/clientes/', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("insert into onepiece (nome) value('"+req.body.nome+"')", res);
})

app.put('/clientes/:id', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("update onepiece set nome='"+req.body.nome+"' where id="+req.params.id, res);
})

app.get('/clientes', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery('select * from onepiece', res);
})

app.get('/clientes/:id', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery('select * from onepiece where id='+ req.params.id, res);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(
    'Server started on port ${PORT}'));