import express from "express";
import "dotenv/config";
import wedRouter from "routes/wed";
import initDatabase from "config/seed";
const app = express();
const port = process.env.PORT;

//configure ejs
app.set("view engine", "ejs");
app.set("views", "./src/views");
//configure static files
app.use(express.static("public"));
//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//configure routes
wedRouter(app);
//seeding data
initDatabase();
app.listen(port, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
