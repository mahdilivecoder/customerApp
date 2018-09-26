const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const http=require('http');
const session=require('express-session');
const path=require('path');
const validator=require('express-validator');
const flash=require('connect-flash-plus');

module.exports=class Application{

    constructor(){
        this.setupExpress();
        this.setConfig();
        this.setRoutes();
        this.setMongoConnection();
    }

    setupExpress(){
        const server=http.createServer(app);
        server.listen(config.port,()=>{
            console.log(`Server are ruuning on ${config.port}`);
        })
    }

    setMongoConnection(){
        mongoose.Promise=global.Promise;
        mongoose.connect('mongodb://localhost/moshtari', { useNewUrlParser: true });
    }
    setRoutes(){
        app.use(require('./routes'));
    }
    setConfig(){
        app.use(express.static(path.resolve('./public')));
        app.set('view engine','ejs');
        app.set('views',path.resolve('./views'));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended:true}));
        app.use(validator());
        app.use(session({...config.session}));
        app.use(cookieParser(process.env.COOKIE_SECRETKEY));
        app.use(flash());

    }
}
