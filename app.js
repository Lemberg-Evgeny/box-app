const app = require('express')();
const path = require('path');
const cors = require("cors");
const { WebSocketServer } = require("ws");

// const app = express();

const PORT = process.env.PORT || 8080;

const wsPORT = process.env.PORT || 4200;

const corsOptions = { origin: "http://localhost:4200" };

app.use(cors(corsOptions));
// app.use(express.static(__dirname + '/client-app/dist/client-app/'));

// app.get('/', cors(corsOptions), (req, res) => {
//     res.sendFile(path.join(__dirname + '/client-app/dist/client-app/index.html'));
// });


// app.use(express.static(__dirname + '/dist/client-beauty-salon'));

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname + '/dist/client-beauty-salon/index.html'));
// });


// app.get('/test', cors(corsOptions), (req, res) => {
//     res.send('hello from server');
// });



const wss = new WebSocketServer({port: wsPORT});

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log('received: %s', message);
    });

    ws.send('something');
});



app.listen(PORT, (err) => {
    if (err) {
        return console.log('error:' + err.message);
    }
    console.log(`Server is running on port ${PORT}.`);
});
