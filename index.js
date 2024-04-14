import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// Get the directory name and construct the path to the public directory
const __dirname = dirname(fileURLToPath(import.meta.url));
const publicPath = join(__dirname, "public");

// Array to store user data
const users = [];

// Create an Express application
const app = express();

// Middleware to serve static files from the public directory
app.use(express.static(publicPath));

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set("view engine", "ejs");

// Route handler for GET requests to the root URL
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/users", (req, res)=>{
    res.json({
        users,
    });
})
// Route handler for POST requests to the root URL
app.post("/", (req, res) => {
    // Push user data to the array
    users.push({
        username: req.body.name,
        email: req.body.email,
        message:req.body.message
    });
    // Render the success page with the username
    res.render("success", { username: users[users.length - 1].username });
    fs.appendFile("user_details.txt", JSON.stringify(users) + "\n", (err) => {
        if (err) {
            console.error("Error writing user details to file:", err);
        } else {
            console.log("User details written to file:", users);
        }
    });
});

// Start the server and listen on port 3000
app.listen(4000, () => {
    console.log("Server is running at port 4000");
});
