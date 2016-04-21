# Websocket auth sample
A demo app that uses JWT authentication with socket.io and express.

## Running
```
$ npm install
$ npm start
```
Then, go to http://localhost:8000/login to get a JWT token. If needed, you must update the `views/index.html` file with the
new token. After updates, see the navigator console at http://localhost:8000.

## References
* http://socket.io/
* https://jwt.io/
* http://expressjs.com/
* https://auth0.com/blog/2014/01/15/auth-with-socket-io/
