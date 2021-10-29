const corsAnywhere = require("cors-anywhere");
const port = process.env.PORT || 5000;

corsAnywhere
  .createServer()
  .listen(port, () =>
    console.log(`CORS Anywhere server started at port ${port}`)
  );
