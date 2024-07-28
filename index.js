const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/customer", proxy("https://user-management-service-oq58.onrender.com"));
app.use("/shopping", proxy("https://shopping-management-service-mcya.onrender.com"));
app.use("/deliveries", proxy("https://delivery-management-service-iihl.onrender.com"));
app.use("/", proxy("https://product-management-service-46x1.onrender.com")); // products

app.listen(8000, () => {
  console.log("Gateway is Listening to Port 8000");
});
