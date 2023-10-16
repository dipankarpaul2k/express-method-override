# Express Method Override Function Example

We know that html `form` only have 2 default methods `GET` and `POST`. But often times we need to work with other HTTP methods `PUT`, `PATCH` and `DELETE`. So I wanted to make a middleware funtion to override the method manually without using any npm packages.

This is a simple example of an Express.js application that demonstrates method override using a custom middleware. It uses middleware to parse URL and body and allows the HTTP method to be overridden by a `_method` parameter in the request body.

## Prerequisites

Before running this code, ensure that you have the following installed:

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/) for view rendering (though you can choose another templating engine if you prefer)

## Installation

1. Clone this repository or download the source code.

2. Open a terminal and navigate to the project directory.

3. Run the following command to install the required dependencies:

   ```
   npm install
   ```

## Usage

To run this Express application, follow these steps:

1. Start the server:

   ```
   npm start
   ```

2. The application will start and listen on port 4000. You can access it in your web browser at `http://localhost:4000`.

## Example Usage

```javascript
// index.js
import Express from "express";
const app = Express();

app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());

app.use((req, res, next) => {
  if (req.body && req.body._method) {
    console.log("Method override from POST to ", req.body._method);
    req.method = req.body._method;
  }
  next();
});

app.get("/method", (req, res) => {
  console.log("Request handler method is ", req.method);
  res.redirect("/");
});

app.delete("/method", (req, res) => {
  console.log("Request handler method is ", req.method);
  res.redirect("/");
});

app.listen(4000, () => {
  console.log("Server is listening to port http://localhost:4000.");
});
```

View engine

```html
<!-- index.ejs -->
<body>
  <form action="/method" method="post">
    <input type="hidden" name="_method" value="get" />
    <button>GET METHOD</button>
  </form>
  <hr />
  <form action="/method" method="post">
    <input type="hidden" name="_method" value="delete" />
    <button>DELETE METHOD</button>
  </form>
  <hr />
</body>
```

See complete code in `index.js` file in `src` folder.

## Code Analysis

### Inputs

- `req`: the request object
- `res`: the response object
- `next`: the next middleware function

---

### Flow

1. The code snippet imports the Express module and creates an instance of the Express application.
2. Middleware is added to parse the URL and body of incoming requests.
3. Another middleware function is added to check if the request body contains a `_method` parameter.
4. If the `_method` parameter exists, the method override functionality is triggered by changing the `req.method` property to the value of the `_method` parameter.
5. The code snippet defines a route handler for the `/method` endpoint, which logs the request method and redirects to the root page (`/`).
6. The server starts listening on port 4000.

---

## View Rendering

The application uses the EJS template engine for rendering views. Views are stored in the `./src/views` directory. The root page is rendered using the `index.ejs` template.

## Author

Dipankar Paul 😀 | Contact Me 👉 dipankarpaul2k@gmail.com
