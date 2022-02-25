# Installed Packages
antd
web3
react
react-redux
react-redux-toolkit
react-chartjs-2
dotenv
env-cmd
See package.json for more

## Environment variables set-up
To run this application you need to set-up the following env variables inside the `./energytoken-ui/config/.env.dev`:
- REACT_APP_CONTRACT_ADDRESS (See the output when deploying a smart contract in pkg)
- REACT_APP_ETHEREUM_PROVIDER_IP (An Ethereum node)
- REACT_APP_ENERGY_TOKEN_CONTRACT_OWNER (The same address you used as mnemonic for deploying a smart contract)

If you have not deployed a smart contract, deploy this first and copy the `.json` file produced by it into the file of `./energytoken-ui/src/contracts/EnergyToken.js`, rewrite the insides of `exports.default = (address) => (<THE SMART CONTRACT json DATA>)`

## Available Scripts

In the project directory, you can run:

### `yarn install/npm install`
Install all the required packages to run the application.

### `yarn start:dev/npm start:dev`
**To actually make use of the front-end the api and database is needed**
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment to the cloud
To build this to the cloud run the command `gcloud builds submit;` What this does is run the cloudbuild.yaml file.
The cloudbuild.yaml file runs the docker commands of build and push to the cloud.