const user_service = require('./dist').default;

user_service({
    mongoURI: 'mongodb+srv://anthonyfinix:anthonyfinix123@user.8kkfq.mongodb.net/user?retryWrites=true&w=majority'
}).then(app => {
    app.listen(3000, () => {
        console.log('listening')
    })
});