import dotenv from "dotenv";
import express from "express";
import {dbConnection} from "./db/connection.js"
dotenv.config({path: "config.env"});

const app = express();
const hostname = '127.0.0.1';
const PORT = 3005;

// For parsing application/json
app.use(express.json());
dbConnection();

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


app.post('/profile', (req, res) => {
	console.log(req.body);
	const obj = {
		status : 2,
		message : "Successfully ..."
	}
	const data = req.body;
	if(data.email == "nikkigarg@gmail.com" && data.password == "123"){
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
        res.send('User logged-in successfully!\n');
	}
	else{
		res.statusCode = 403;
		res.setHeader('Content-Type', 'text/plain');
        res.send('Forbidden!\n');
	}
	res.send(obj);
});

app.listen(PORT, function (err) {
	if (err) console.log(err);
    
	console.log("Server listening on PORT", PORT);
});
