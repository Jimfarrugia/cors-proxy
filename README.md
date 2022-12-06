# cors-proxy

This is a simple node server app which uses the `cors-anywhere` npm package to bypass CORS errors when fetching from a third-party API.

You can easily repurpose this app for your own needs by adding your website URL to the whitelist array:

```
originWhitelist: ["https://react-crypto-watcher.netlify.app"]
```

1. Clone/fork this repo.
2. Add your URL(s) to the origin whitelist in `server.js`.
3. Deploy the app to a service like Heroku or a VPS and make sure Node.js is installed.
4. Start the app by running `node server.js` from the installation directory.
5. Prefix your API requests with the server's url (eg. `https://my-cors-proxy-server.com/https://api.thirdparty.com/data`)
6. Wave goodbye to CORS issues.
