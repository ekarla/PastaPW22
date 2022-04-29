import express, { Router } from "express"
import router from "./src/router/router";
import { engine } from "express-handlebars";
import sass from "node-sass-middleware";
import cookieParser from "cookie-parser";
import csurf from "csurf";
import { Logger } from "sass";
import { v4 as uuidv4} from "uuid";
import session from "express-session";

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

app.use(cookieParser());
app.use(csurf({ cookie: true}));

app.get("/uuid", (res,req)=>{
    res.send(uuidv4());
})

app.get("/cookie",(req, res)=>{
    if(!('usuario' in req.cookies)){
        res.cookie('usuario', '1234',{maxAge: 1000 * 60});
        res.send("Usuario não identificado. Criando cookie!")
    }else{
        res.send(`Usuario identificado. ID ${req.cookies['usuario']}`);
    }
})

app.use(session({
    genid: (req)=>{
        return uuidv4()
    },
    secret: 'Hi99CF#K98',
    resave: false,
    saveUninitialized: true
})) 

app.get("/session",(req,res)=>{
    if(!('qtdItens' in req.session)){
        req.session.qtdItens = 0;
        res.send("Usuario sem item. Começando agora...");
    }else{
        req.session.qtdItens++;
        res.send("Quantidede de Itens: " + req.session.qtdItens);
    }
});

app.get("/apagar-cookie",(req, res)=>{
    res.clearCookie('usuario');
    res.send("Cookie Apagado!");
})

app.use(router);
app.use(morgan("combined"));



app.use(function(req, res){
    res.statusCode = 404;
    res.end("404!");
})

app.listen("3333",()=>{
    console.log("Escutando na porta 3333");
});

