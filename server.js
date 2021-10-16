const corsAnywhere = require("cors-anywhere");
const port = process.env.PORT || 5000;

// Create CORS Anywhere server
corsAnywhere
  .createServer({})
  .listen(port, () =>
    console.log(`CORS Anywhere server started at port ${port}`)
  );
