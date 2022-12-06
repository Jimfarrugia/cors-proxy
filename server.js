const corsAnywhere = require("cors-anywhere");
const port = process.env.PORT || 5000;

corsAnywhere
  .createServer({
    originWhitelist: ["https://crypto-watch.netlify.app", "http://localhost:3000"],
  })
  .listen(port, () =>
    console.log(`CORS Anywhere server started at port ${port}`)
  );
