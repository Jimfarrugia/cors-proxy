const corsAnywhere = require("cors-anywhere");
const CORS_PROXY_PORT = 5000;

// Create CORS Anywhere server
corsAnywhere
  .createServer({})
  .listen(CORS_PROXY_PORT, () =>
    console.log(`CORS Anywhere server started at port ${CORS_PROXY_PORT}`)
  );
