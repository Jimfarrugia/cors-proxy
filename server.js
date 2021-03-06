const corsAnywhere = require("cors-anywhere");
const port = process.env.PORT || 5000;

corsAnywhere
  .createServer({
    originWhitelist: ["https://react-crypto-watcher.netlify.app"],
  })
  .listen(port, () =>
    console.log(`CORS Anywhere server started at port ${port}`)
  );
