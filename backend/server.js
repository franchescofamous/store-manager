const express = require("express");
const productRoute = require("./Routes/productRoute");
const userRoute = require("./Routes/userRoute");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", userRoute);
app.use("/product", productRoute);
/* app.use("/info", productRoute); */

app.listen(5000);
