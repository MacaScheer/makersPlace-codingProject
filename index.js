const express = require("express")
const app = express();
const images = require("./routes/api/images")
const news = require("./routes/api/news");
app.use("/api/images", images);
app.use("api/news", news);
    
const port = 5000;
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})





