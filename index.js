const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});

/* Assets pública */
app.use(express.static('assets'));

/* Bootstrap */
app.use('/bootstrap', express.static(
    __dirname + '/node_modules/bootstrap/dist'
));
app.use("/popper", express.static(
    __dirname + "/node_modules/@popperjs/core/dist/umd"
));

/* Handlebars */
app.set("view engine", "handlebars");
app.engine("handlebars", exphbs.engine());
app.get("/", (req,res)=>{
    res.render("home",{
        //aqui van las variables
        productos: [
            "banana",
            "cebollas",
            "lechuga",
            "papas",
            "pimenton",
            "tomate"
        ]
    })
})
