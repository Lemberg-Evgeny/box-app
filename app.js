const app = require("express")();
const path = require('path');
const cors = require("cors");
const WebSocket = require("ws");
const server = require("http").createServer(app);
const { MongoClient } = require('mongodb');
// const app = express();


const PORT = process.env.PORT || 8080;
const wsPORT = process.env.PORT || 4200;

const corsOptions = { origin: "http://localhost:4200" };

app.use(cors(corsOptions));
// app.use(express.static(__dirname + '/client-app/dist/client-app/'));

////////////////////////////////////// MongoDB /////////////////////////////////
const uri = "mongodb+srv://Evgeny:12345@statusbox.slcwx.mongodb.net/StatusBox?retryWrites=true&w=majority";
// const uri = "mongodb+srv://Evgeny:12345@statusbox.slcwx.mongodb.net/StatusBox?authSource=admin&replicaSet=atlas-ktlbrj-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function run() {
    try {
        await client.connect();
        console.log("------------------------------------ MongoDB connection connected ------------------------------------");

        const dataBase = client.db("matanBoxDb");
        const boxsList = dataBase.collection("boxs");


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



        const allBoxs = await boxsList.find({}).toArray();

        // console.log(allBoxs);


        // console.log('Found documents =>', findResult)

    } finally {
        await client.close();
        console.log("------------------------------------ Finally MongoDB connection client close -------------------------");
    }
}

////////////////////////////////////// MongoDB /////////////////////////////////



const webSocketServer = new WebSocket.Server({ server });

webSocketServer.on('connection', ws => {
    ws.on('message', m => {
        webSocketServer.clients.forEach(client => client.send(m));
    });

    ws.on("error", e => ws.send(e));

    ws.send('Hi there, I am a WebSocket server');
});




const data = [{
    boxDescription: 'slitter',
    boxPN: 'bl2888',
    boxQuantety: 15
},
{
    boxDescription: 'shaft',
    boxPN: '11100356',
    boxQuantety: 1
}];

app.get('/box', cors(corsOptions), (req, res) => {
    // res.sendFile(path.join(__dirname + '/client-app/dist/client-app/index.html'));
    res.status(200).send(data);
});
app.post('/model', cors(corsOptions), (req, res) => {
    console.log(req.body)
    // res.sendFile(path.join(__dirname + '/client-app/dist/client-app/index.html'));
    res.send(JSON.stringify(req.body));
});

app.listen(PORT, (err) => {
    if (err) {
        return console.log('error:' + err.message);
    }
    run().catch(console.dir);
    console.log(`Server is running on port ${PORT}.`);
});
