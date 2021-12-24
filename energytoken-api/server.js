// Database config
const dbConfig = require('./dbConfig');
console.log(dbConfig.pgUser)
// Express application setup
const express = require('express');
const cors = require('cors');

const app = express();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

const PORT = process.env.PORT || 3030;

var corsOptions = {
    origin: ['http://localhost:3000', 'https://energytoken-ui-h2ghunuiiq-ew.a.run.app', 'https://energytoken.nl'],
    optionsSuccessStatus: 200, 
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}

app.use(cors(corsOptions));

// Database conn
const { Pool } = require('pg');

const pool = new Pool({
    user: dbConfig.pgUser,
    host: dbConfig.pgHost,
    database: dbConfig.pgDatabase,
    password: dbConfig.pgPassword,
    port: dbConfig.pgPort,
})

// trying to use error listener after the connect
pool.on('connect', () => {
    pool.on('error', err => console.log(err));
});

// Express Routing
app.get('/api/health', (_, res) => {
    res.status(200).send({
      status: 'Ok',
      reqTime: new Date().getTime(),
    });
});

// Get values solarPanels
app.get("/api/solarPanel/all", async(req, res) => {
    const values = await pool.query("SELECT * FROM solarPanel")
        .then(res => res.rows)
        .catch(e => console.error(e.stack));

    res.send({
        status: 'Ok',
        data: values
    });
})

// Get single value solarPanel
app.get(`/api/solarPanel/:uid`, async(req, res) => {
    const values = await pool.query(`SELECT * FROM solarPanel WHERE assetId = ${req.params.uid}`)
        .then(res => res.rows[0])
        .catch(e => console.error(e.stack));

    res.send({
        status: 'Ok',
        data: values
    });
})

// Get single value site
app.get(`/api/site/:uid`, async(req, res) => {
    const values = await pool.query(`SELECT * FROM site WHERE id = ${req.params.uid}`)
        .then(res => res.rows[0])
        .catch(e => console.error(e.stack));

    res.send({
        status: 'Ok',
        data: values
    });
})

// Get Energy production on panel level
app.get(`/api/panel/energy`, async(req, res) => {
    const values = await pool.query(`SELECT eProd FROM solarPanel;`)
        .then(res => res.rows)
        .catch(e => console.error(e.stack));

    res.send({
        status: 'Ok',
        data: values
    });
})

function checkMonth(month){
    switch(month) {
        case 0:
            return "Jan"
        case 1:
            return "Feb"
        case 2:
            return "Mar"
        case 3:
            return "Apr"
        case 4:
            return "May"
        case 5:
            return "Jun"
        case 6:
            return "Jul"
        case 7:
            return "Aug"
        case 8:
            return "Sep"
        case 9:
            return "Oct"
        case 10:
            return "Nov"
        case 11:
            return "Dec"
        default:
            console.log("Sorry no match on the month number")
    }
}

// Get Energy production on site level
app.get(`/api/site/:uid/energy/:startDate/:endDate`, async(req, res) => {
    let list = [];
    let start = parseInt(req.params.startDate);
    let startDate = new Date(start).getDate(start);

    const end = parseInt(req.params.endDate);
    const endDate = new Date(end).getDate(end);

    let months = new Date(start).getMonth();
    const years = new Date(start).getFullYear();
    const daysInMonth = new Date(years, months, 0).getDate();

    let label = '';

    for (;startDate !== endDate; startDate++) {
        if(startDate === daysInMonth){
            console.log("End of month restart counting from 1");
            startDate = 1
            months = months + 1
            label = checkMonth(months)
            list.push(label + startDate.toString().padStart(2, '0'));
        } else {
            label = checkMonth(months)
            list.push(label + startDate.toString().padStart(2, '0'));
        }
    } 

    const queryString = list.join();
    
    const values = await pool.query(`SELECT ${queryString} FROM site WHERE id = ${req.params.uid}`)
        .then(res => res.rows[0])
        .catch(e => console.error(e.stack));

    res.send({
        status: 'Ok',
        data: values
    });
})

// Get Energy production on solarPanel level
app.get(`/api/solarPanel/:uid/energy/:startDate/:endDate`, async(req, res) => {
    let list = [];
    let start = parseInt(req.params.startDate);
    let startDate = new Date(start).getDate(start);

    const end = parseInt(req.params.endDate);
    const endDate = new Date(end).getDate(end);

    let months = new Date(start).getMonth();
    const years = new Date(start).getFullYear();
    const daysInMonth = new Date(years, months, 0).getDate();

    let label = '';

    for (;startDate !== endDate; startDate++) {
        if(startDate === daysInMonth){
            console.log("End of month restart counting from 1");
            startDate = 1
            months = months + 1
            label = checkMonth(months)
            list.push(label + startDate.toString().padStart(2, '0'));
        } else {
            label = checkMonth(months)
            list.push(label + startDate.toString().padStart(2, '0'));
        }
    } 

    const queryString = list.join();
    
    const values = await pool.query(`SELECT ${queryString} FROM solarPanel WHERE assetId = ${req.params.uid}`)
        .then(res => res.rows[0])
        .catch(e => console.error(e.stack));

    res.send({
        status: 'Ok',
        data: values
    });
})

app.delete(`/api/solarPanel/:uid`, async(req, res) => {
    const values = await pool.query(`DELETE FROM solarPanel WHERE assetId = ${req.params.uid}`)
        .then(res => res)
        .then(data => data)
        .catch(e => console.error(e.stack));

    res.send({
        status: 'Ok',
        values
    })
})

// Add new solarPanel to the database
app.post(`/api/solarPanel/add`, jsonParser, async(req, res) => {
    const jsonValues = req.body;
    
    const result = await pool.query(`INSERT INTO solarPanel (${Object.keys(jsonValues)}) VALUES (${jsonValues.assetid}, '${jsonValues.assetname}', '${jsonValues.owner}', '${jsonValues.psdate}', '${jsonValues.sitename}', '${jsonValues.location}', '${jsonValues.ownsince}', '${jsonValues.assetdim}', '${jsonValues.ratedcap}');`)
    .then(res => res)
    .then(data => data)
    .catch(e => console.log(e));

    res.send({
        status: 'Ok',
        result
    }) 
})

// Update solarPanel in the database
app.put(`/api/solarPanel/update`, jsonParser, async(req, res) => {
    const jsonValues = req.body;
    console.log(jsonValues.asstename)
    const result = await pool.query(`UPDATE solarPanel SET owner='${jsonValues.owner}', ownsince='${jsonValues.ownsince}' WHERE assetid=${jsonValues.assetid};`)
    .then(res => res)
    .then(data => data)
    .catch(e => console.log(e));

    res.send({
        status: 'Ok',
        result
    }) 
})

app.listen(PORT, function() {
    console.log(`App listening on port ${PORT}!`);
});