import express, { Router } from "express"
import router from "./src/router/router";
import { engine } from "express-handlebars";
import sass from "node-sass-middleware";
import { Logger } from "sass";

const morgan = require("morgan");
const app = express()


app.engine('handlebars',engine({
    helpers: require(`${__dirname}/src/views/helpers/helpers`),
    layoutsDir: `${__dirname}/src/views/layouts`,
    defaultLayout:'main',
}));
//Acessando as views
app.set('view engine', 'handlebars');
app.set('views',`${__dirname}/src/views`);

//Acessando as imagens da aplicação
app.use(sass({
    src: `${__dirname}/public/scss`,
    dest: `${__dirname}/public/css`,
    outputStyle: 'compressed',
    prefix:'/css'
}));
app.use('/img', express.static(`${__dirname}/public/img`));
app.use('/css', express.static(`${__dirname}/public/css`));
app.use('/webfonts', express.static(`${__dirname}/node_modules/@fortawesome/fontawesome-free/webfonts`));
app.use('/js',[
    express.static(`${__dirname}/public/js`),
    express.static(`${__dirname}/node_modules/bootstrap/dist/js/`)
]);
//chamando as rotas 
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.use(morgan("combined"));



app.use(function(req, res){
    res.statusCode = 404;
    res.end("404!");
})

app.listen("4444",()=>{
    console.log("Escutando na porta 4444");
});

