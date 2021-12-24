// This script fetches energy data from API at 00:10 each day
// Creates a new column for that day in DB
// Divides and randomizes the energy data over 9 solarpanels
// Updates the cummulative energy for each panel in DB]
// Updates the Generated Profit for those panels

//Import API key
//import apikey from ENV?
//import site from ENV?
const fetch = require('node-fetch');

// This only works for local use
// FOR DEPLOYMENT MAKE SURE the dbConfig can be read or use the environment variables directly
// Database conn
const dbConfig = require('./dbConfig');
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

const siteID = process.env.SITEID;
const apikey = process.env.APIKEY;
console.log(siteID);

////////////////////////////////////////
// Get current day
var today = new Date();
var dd = String(today.getDate()-1).padStart(2, '0');
var ddd = String(today.getDate()).padStart(2, '0');
var mmnum = today.getMonth() + 1;
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + ddd;
yesterday = yyyy + '-' + mm + '-' + dd;

const months = ["Jan","Feb","Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"]; 
colname = months[mmnum-1]+dd;

////////////////////////////////////////
// Create new colum for new day  in DB (REMOVE CONSOLE.LOG)
pool.query(`ALTER TABLE site ADD COLUMN IF NOT EXISTS ${colname} INT`)
    .catch(e => console.log("Failed, ", e));
pool.query(`ALTER TABLE solarPanel ADD COLUMN IF NOT EXISTS ${colname} INT`)
    .catch(e => console.log("Failed, ", e));

////////////////////////////////////////
// Get yesterday's site energy from API
async function getSiteData() {
    var apiProd = await fetch(`https://monitoringapi.solaredge.com/site/${siteID}/energy?startDate=${yesterday}&endDate=${yesterday}&api_key=${apikey}`)
        .then(response => response.json())
        .then(async data => {
            /////////////////////////////////////////////
            // Divide and randomize energy over 9 panels
            const siteProd = data.energy.values[0].value;
            // const siteProd = 3229.4707;

            const n = 0.1*siteProd;

            const totalsupply = 9;

            const base = 0.9*siteProd / totalsupply;

            const parts = [];

            let remainder = n;

            for (let i = 1; i<= totalsupply; i += 1) {
                if (i === totalsupply) {
                    parts.push(remainder);
                    break;
                }

                var part = Math.round((Math.random()*remainder/3)*100) / 100;
                parts.push(part);
                remainder -= part;
            }

            const total = totalFromParts(parts);

            function totalFromParts(parts) {
                return parts.reduce((sum, value) => sum + value, 0);
            }

            eProd = parts.map(a => parseFloat((a+base).toFixed(2)), 2);

            console.log("Calculated Energy Production", eProd);

            let sum = 0;
            for (let i = 0; i < eProd.length; i++) {
                sum += eProd[i];
            }

            const query = await pool.query(`SELECT * FROM solarPanel;`)
                .then(res => res.rows)
                .catch(e => {
                    console.log(e);

                });
            const alltokens = query.length

            //////////////////////////////////////////
            // Enter energy data in current day column
            for (var m=0; m < alltokens; m++) {
                pool.query(`UPDATE solarPanel SET ${colname}=${eProd[m]} WHERE assetId=${m+1};`);
            }
            pool.query(`UPDATE site SET ${colname}=${siteProd} WHERE id=1;`);

            /// calculate sum of eprod since possesson
            const ownsince = await pool.query(`SELECT ownsince FROM solarPanel;`)
                .then(res => {
                    var list = [];
                    for(var x = 0; x < res.rows.length; x++){
                        // first split the ownsince Date on the Time splitting date and time
                        // then split it by " as it is not needed
                        const ownsince = JSON.stringify(res.rows[x].ownsince).split("T")[0].split("\"")[1]
                        list.push(ownsince)
                    }
                    console.log("Days since ownership: ", list)
                    return list
                })
                .catch(e => console.log(e));

            var totallist = [];
            var lis = [];
            const milliday = 86400000;

            for (var i=0; i < ownsince.length; i++) {
                // convert i to unixtimestamp
                var ts = new Date(ownsince[i]).getTime();
                console.log("Time start: ", ts);
                // Get current day unixtimestamp
                var td = new Date(today).getTime();
                console.log("Current day: ", td);
                // increase ts with 24hrs until today is reached

                for (var a = ts; a < td; a+=milliday) {
                    //convert ts timestmap to colname
                    var unix2date = new Date(a);
                    var colmonth = unix2date.getMonth() + 1;
                    // Important to note that the colname in the database is in the same format: <XXX00>
                    var colday = String(unix2date.getDate()).padStart(2, '0');
                    var column = months[colmonth-1]+colday;
                    lis.push(column);  
                }
                // push colname to lis
                // push lis to totallist
                // reset lis 
                console.log("Created list: ", lis);
                totallist.push(lis);
                lis = [];
            }

            // Now summairze the eProd of these columns for each asset
            // dummyarray of enery data
            var elist = [];
            for (var j=0; j < alltokens; j++) {
                for (var k=0; k < totallist[j].length; k++) {
                    if(totallist[j] === [] || totallist[k] === []){
                        return
                    } else {
                        await pool.query(`SELECT ${totallist[j][k]} FROM solarPanel WHERE assetid=${j+1}`)
                        .then(res => {
                            // push values of db into a list
                            console.log(res.rows[0])
                            elist.push(Object.values(res.rows[0]))

                            return elist
                        })
                        .catch(e => console.error(e.stack));
                    }
                }

                function sum2dArr(arr) {
                    var sum = 0;
                    // iterate array using for loop since it has higher performance
                    for (var i = 0; i < arr.length; i++) {
                        if (typeof arr[i] == 'object'){
                            // if array then getting sum it's element (recursion)
                            sum += sum2dArr(arr[i]);
                        } else {
                            // sum up values
                            sum += arr[i];
                        }
                    }
                    return sum;
                }
                  
                // sum of list
                var esum = sum2dArr(elist);
                console.log("Generate esum: ", esum)

                // write sum to eProd field
                pool.query(`UPDATE solarPanel SET eProd=${esum} WHERE assetid=${j+1}`);
                // calculate the profit
                var profit = parseFloat((esum*0.09).toFixed(2), 2);
                // write profit into db
                pool.query(`UPDATE solarPanel SET genProfit=${profit} WHERE assetid=${j+1}`);
                console.log("Total generated elist: ", elist);
                elist = [];
            }
            console.log("totallist",totallist);

            // Summarize the eProd of all columns of the site
            /// calculate sum of eprod since possesson
            const ownSiteSince = await pool.query(`SELECT psdate FROM site;`)
                .then(res => {
                    var list = [];
                    for(var x = 0; x < res.rows.length; x++){
                        // first split the ownsince Date on the Time splitting date and time
                        // then split it by " as it is not needed
                        const ownsince = JSON.stringify(res.rows[x].psdate).split("T")[0].split("\"")[1]
                        list.push(ownsince)
                    }
                    console.log("Days since production start of site: ", list)
                    return list
                })
                .catch(e => console.log(e));

            var siteTotalList = [];
            var siteLis = [];

            for (var i=0; i < ownSiteSince.length; i++) {
                // convert i to unixtimestamp
                var ts = new Date(ownSiteSince[i]).getTime();
                console.log("Time start: ", ts);
                // Get current day unixtimestamp
                var td = new Date(today).getTime();
                console.log("Current day: ", td);
                // increase ts with 24hrs until today is reached

                for (var a = ts; a < td; a+=milliday) {
                    //convert ts timestmap to colname
                    var unix2date = new Date(a);
                    var colmonth = unix2date.getMonth() + 1;
                    // Important to note that the colname in the database is in the same format: <XXX00>
                    var colday = String(unix2date.getDate()).padStart(2, '0');
                    var column = months[colmonth-1]+colday;
                    siteLis.push(column);  
                }
                // push colname to lis
                // push lis to totallist
                // reset lis 
                console.log("Created list: ", siteLis);
                siteTotalList.push(siteLis);
                siteLis = [];
            }

            // Now summairze the eProd of these columns for each asset
            // dummyarray of enery data
            var eListSite = [];
            for (var k=0; k < siteTotalList.length; k++) {
                if(siteTotalList[k] === []){
                    return
                } else {
                    await pool.query(`SELECT ${siteTotalList[k]} FROM site WHERE id=${k+1}`)
                    .then(res => {
                        // push values of db into a list
                        console.log(res.rows[0])
                        eListSite.push(Object.values(res.rows[0]))

                        // sum of list
                        var esum = sum2dArr(eListSite);
                        console.log("Generate esum site: ", esum)

                        // write sum to eProd field
                        pool.query(`UPDATE site SET eProd=${esum} WHERE id=${k+1}`);
                        // calculate the profit
                        var profit = parseFloat((esum*0.09).toFixed(2), 2);
                        // write profit into db
                        pool.query(`UPDATE site SET genProfit=${profit} WHERE id=${k+1}`);
                        console.log("Total generated elist site: ", eListSite);
                        eListSite = [];
                        console.log("totallist site",siteTotalList);
                        return eListSite
                    })
                    .catch(e => console.error(e.stack));
                }
            }

            return "success"
        });
    return apiProd;
}

getSiteData().then(console.log)