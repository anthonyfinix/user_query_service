const user_query_service = require('./dist').default;
const port = 3002
user_query_service({
    mongoURI: 'mongodb://localhost:27017/users',
    port
}).then(app => {
    app.listen(port, () => console.log('listening port '+port))
});