const user_query_service = require('./dist').default;
const port = 3002
user_query_service({
    mongoURI: 'mongodb://localhost:27017/users',
    amqplibURL:"amqps://zutacfqe:3EfVmYuVBftoLLugUOfBAIGnvxvQ_JK_@puffin.rmq2.cloudamqp.com/zutacfqe",
    port
}).then(app => {
    app.listen(port, () => console.log('listening port '+port))
});