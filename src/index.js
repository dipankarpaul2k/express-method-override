import Express from "express";
const app = Express();

// Set the view engine and file path
app.set("views", "./src/views");
app.set("view engine", "ejs");

// Add middleware for parsing URL and body
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());


app.use((req, res, next) => {
  if (req.body && req.body._method) {
    console.log("Method override from POST to ", req.body._method);
    req.method = req.body._method.toUpperCase();
  }
  next();
});

// Root page rendering index.ejs file
app.get("/", (req, res) => {
  res.render("index");
});

// Method override routes 👇
app.get("/method", (req, res) => {
  console.log("Request handler method is ", req.method);
  res.redirect("/");
});
app.post("/method", (req, res) => {
  console.log("Request handler method is ", req.method);
  res.redirect("/");
});
app.put("/method", (req, res) => {
  console.log("Request handler method is ", req.method);
  res.redirect("/");
});
app.patch("/method", (req, res) => {
  console.log("Request handler method is ", req.method);
  res.redirect("/");
});
app.delete("/method", (req, res) => {
  console.log("Request handler method is ", req.method);
  res.redirect("/");
});

// Start server on port 4000
app.listen(4000, () => {
  console.log("Server is listening to port http://localhost:4000.");
});
