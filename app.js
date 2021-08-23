const app = require("express")();
const server = require("http").createServer(app);
const path = require('path');
const cors = require("cors");
const WebSocket = require("ws");



const PORT = process.env.PORT || 8080;

const wsPORT = process.env.PORT || 4200;

// const app = express();

// const server = http.createServer(app);

const webSocketServer = new WebSocket.Server({ server });

webSocketServer.on('connection', ws => {
    ws.on('message', m => {
        webSocketServer.clients.forEach(client => client.send(m));
    });

    ws.on("error", e => ws.send(e));

    ws.send('Hi there, I am a WebSocket server');
});





// const app = express();


const corsOptions = { origin: "http://localhost:4200" };

app.use(cors(corsOptions));
// app.use(express.static(__dirname + '/client-app/dist/client-app/'));

const data = [{
    boxDescription: 'slitter',
    boxPN: 'bl2888',
    boxQuantety: 15
},
{
    boxDescription: 'shaft',
    boxPN: '11100356',
    boxQuantety: 1
}]

app.get('/box', cors(corsOptions), (req, res) => {
    // res.sendFile(path.join(__dirname + '/client-app/dist/client-app/index.html'));
    res.status(200).send(data)
});


// app.use(express.static(__dirname + '/dist/client-beauty-salon'));

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname + '/dist/client-beauty-salon/index.html'));
// });


// app.get('/test', cors(corsOptions), (req, res) => {
//     res.send('hello from server');
// });



// const wss = new WebSocketServer({port: wsPORT});

// wss.on('connection', (ws) => {
//     ws.on('message', (message) => {
//         console.log('received: %s', message);
//     });

//     ws.send('something');
// });



app.listen(PORT, (err) => {
    if (err) {
        return console.log('error:' + err.message);
    }
    console.log(`Server is running on port ${PORT}.`);
});
