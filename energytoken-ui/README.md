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

## Available Scripts

In the project directory, you can run:

### `yarn start:dev`
**To actually make use of the front-end the api and database is needed**
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment to the cloud
To build this to the cloud run the command gcloud builds submit; What this does is run the cloudbuild.yaml file.
The cloudbuild.yaml file runs the docker commands of build and push to the cloud.