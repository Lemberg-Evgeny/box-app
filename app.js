
// const express = require("express")
const app = require("express")();
const path = require('path');
const cors = require("cors");
const WebSocket = require("ws");
const bodyParser = require('body-parser');
const server = require("http").createServer(app);
const { MongoClient } = require('mongodb');
const { Interface } = require("readline");
const { Console } = require("console");


const PORT = process.env.PORT || 8082;
const wsPORT = process.env.PORT || 4200;

const corsOptions = { origin: "http://localhost:4200" };

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// настройка CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
    next();  // передаем обработку запроса методу app.post
});
// app.use(express.static(__dirname + '/client-app/dist/client-app/'));

////////////////////////////////////// MongoDB /////////////////////////////////
const uri = "mongodb+srv://Evgeny:12345@statusbox.slcwx.mongodb.net/StatusBox?retryWrites=true&w=majority";
// const uri = "mongodb+srv://Evgeny:12345@statusbox.slcwx.mongodb.net/StatusBox?authSource=admin&replicaSet=atlas-ktlbrj-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



async function run(printer) {
    try {
        await client.connect();
        console.log("------------------------------------ MongoDB connection connected ------------------------------------");
        // console.log(printer.modelPrinter)
        const dataBase = client.db("matanBoxDb");
        const boxsList = dataBase.collection("boxs");
        console.log(printer);

        // const pizzaDocuments = [
        //     {
        //         "box": [{
        //             "description": "jljnlkkk",
        //             "PN": "999",
        //             "quantety": "2"
        //         }, 
        //         {
        //             "description": "hjvgjhvgv",
        //             "PN": "11100473",
        //             "quantety": "1"
        //         }],
        //         "model": "Qr",
        //         length:'3'
        //     }
        // ];

        // const result = await boxsList.insertMany(pizzaDocuments);


        if (printer.modelPrinter == 'Pro32') {
            return { Boxs } = await boxsList.find({ model: printer.modelPrinter }).toArray();
        } else {
            return { Boxs } = await boxsList.find({ model: printer.modelPrinter, length: printer.lengthPrinter }).toArray();
        }
      

        // console.log(allBoxs);


        // console.log('Found documents =>', findResult)

    } finally {
        await client.close();
        console.log("------------------------------------ Finally MongoDB connection client close -------------------------");
    }
}

////////////////////////////////////// MongoDB /////////////////////////////////



// const webSocketServer = new WebSocket.Server({ server });

// webSocketServer.on('connection', ws => {
//     ws.on('message', m => {
//         webSocketServer.clients.forEach(client => client.send(m));
//     });

//     ws.on("error", e => ws.send(e));

//     ws.send('Hi there, I am a WebSocket server');
// });




app.get('/box', cors(corsOptions), (req, res) => {
    // res.sendFile(path.join(__dirname + '/client-app/dist/client-app/index.html'));
    // res.status(200).send(data);
});

app.post('/model', cors(corsOptions), (req, res) => {
    if (!req.body) return response.sendStatus(400);



    // отправка данных обратно клиенту

    run(req.body).catch(console.dir).then((curentModel) => { res.json(curentModel) })
    // console.log(run(req.body).catch(console.dir))
    // res.sendFile(path.join(__dirname + '/client-app/dist/client-app/index.html'));
    // res.send(JSON.stringify(req.body));


});

app.listen(PORT, (err) => {
    if (err) {
        return console.log('error:' + err.message);
    }

    console.log(`Server is running on port ${PORT}.`);
});
