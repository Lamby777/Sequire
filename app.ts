// Hello human
"use strict";

const PORT = 3000;

// Imports
import Express		from "express";
import ejs			from "ejs";
import fs			from "fs";

// Start Express server for peers to use
export const app = Express();
app.set("view engine", "ejs");
app.use(Express.json());
app.use(Express.static(__dirname + "/public"));

app.get("/", (req: Express.Request, res: Express.Response) => {
	console.log("amogus");
	res.render("main");
});

app.listen(PORT, () => { console.log("Listening on port "+ PORT); });
