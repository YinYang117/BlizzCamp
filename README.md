# BlizzCamp

BlizzCamp is a HipCamp clone.

Check out the github reop: https://github.com/YinYang117/BlizzCamp

Check out the live deployment on Heroku: https://blizz-camp.herokuapp.com/

## Tech Used
Javascript
React
Redux
Express
Sequelize
Git

## Getting Started:
1. Clone the repo from: git@github.com:YinYang117/BlizzCamp.git 
2. Then, run: npm i
3. Create a postgresql user with createdb and password in psql. 
  CREATE USER user-name WITH CREATEDB PASSWORD set-a-password
4. Create a .env file in the backend directory based on the .env.example
5. Enter your username and password information into your .env file along with your desired database name, a secured combination of character for your JWT_SECRET, and your desired PORT (typically 5000).
6. Add the following proxy to your package.json file within your frontend directory, replacing or keeping the 5000 port to match your PORT config you set in your .env
- "proxy": "http://localhost:5000"
8. Create Database, Migrate, and Seed models.
- npx dotenv sequelize db:create
- npx dotenv sequelize db:migrate
- npx dotenv sequelize db:seed:all
9. Start the services in the backend:
- npm start
10. Start the services in the frontend directory, which should open the project in your default browser. If not, head over to: http://localhost:3000
- npm start
11. There is a demo user availible to test the features.

## Features:
Creation, viewing, editing, and deleting of spots.
Creation, viewing, and deletion of reviews.
