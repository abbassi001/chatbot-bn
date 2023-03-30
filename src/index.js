// import express (after npm install express)
import express from "express";
import "dotenv/config"
import "./database/db.js"
import routes from "./routes/qasRoutes.js"

// create new express app and save it as "app"
const app = express();

// server configuration
const PORT = 8080;

//routes to use and retrieve or modify data

app.use(express.json());
app.use('/api/qas', routes )

// create a route for the app
app.get('/', (req, res) => {
  res.send('Hello World');
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});


export default app;