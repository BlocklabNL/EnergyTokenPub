switch (process.env.NODE_ENV) {
    case 'development': {
        console.log(`Detected development, using dev variables.`); 

        require('dotenv').config({
            path: './config/.env.dev'
        });
        break;
    }
    default: {
        console.log(`Did not detect development, using deployment variables.`); 

        require('dotenv').config({
            path: './config/.env'
        });
    }
}

module.exports = {
    pgUser: process.env.PGUSER,
    pgHost: process.env.PGHOST, 
    pgPort: process.env.DBPORT,
    pgDatabase: process.env.PGDATABASE,
    pgPassword: process.env.PASSWORD,
}