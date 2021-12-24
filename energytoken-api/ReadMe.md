# Installed Packages
cors
express
dotenv
form-data
moment
node-fetch
pg
web3

## Available Scripts

In the project directory, you can run:

### Run database through `docker-compose up`
You will need to do the following after setting up the dockerized postgres: 
- Create 2 Tables (site, solarpanel)
- Fill in data of the site (The front-end should be able to call the db thorugh this api to fill in the solarPanels on Mint)

To add the tables connect to psql using:
```
psql -h localhost -p 5432 -d energytoken -U test_user --password
```
The password needed is `test_pw`

#### Creating the tables
Create Table for site
```
CREATE TABLE site (id INT NOT NULL PRIMARY KEY, assetName TEXT, owner TEXT NOT NULL, psDate DATE NOT NULL, location TEXT, amountOfPanels INT, ratedCap INT, eProd FLOAT, genRev FLOAT, genProfit FLOAT);
```

Inserting a value for site
```
INSERT INTO site VALUES (1, 'Site1.1', '0x2Eff24a037c2c142487AAe1e26Edd63d480eDC26', '2016-04-19', 'Delftsestraat, Gouda, Netherlands', 9, 2430, 2477.70, 346.88, 267.10);
```

Create Table for solarPanel
```
CREATE TABLE solarPanel (assetID INT NOT NULL UNIQUE PRIMARY KEY, assetName TEXT UNIQUE, owner TEXT NOT NULL, psDate DATE, siteName TEXT, location TEXT, ownSince DATE, assetDim TEXT, ratedCap INT, eProd FLOAT, genRev FLOAT, genProfit FLOAT);
```

**_Not needed but example of an insert call_**
Inserting a value for solarPanel
```
INSERT INTO solarPanel VALUES (1, 'SolarPanel1', '0x2a60706f3Ed605039ba4B13128440554F2756AC2', '2016-04-19', (SELECT assetName FROM site WHERE id=1), 'Delftsestraat, Gouda, Netherlands', '2021-10-11', '1650x992x35', ((SELECT ratedCap FROM site WHERE id=1) / 9), 275.35, 38.54, 29.68);
```

### `yarn install` followed by `yarn start:dev`
To run the actual backend-api install the required packages and start up the development.

Runs the app in the development mode.\
Open [http://localhost:3030](http://localhost:3030) to send connections.

### Start cronscript to fetch daily statistics with `yarn start:cron`
For the backend-api we (Shout-out to Woodie) have created a cronscript for a cron job. 
This script calls the api of the solarPanels to get data of the generated energy. (job scheduled at every day 01:10 see gcloud)

Each solarPanel will have, assigned to it, it's own generated amount as well as the calculated amount of profit it made since ownership.
This then gets updated in the database.


## Deployment to the cloud
To build this to the cloud run the command gcloud builds submit; What this does is run the cloudbuild.yaml file.
The cloudbuild.yaml file runs the docker commands of build and push to the cloud.