const mongoose = require('mongoose');
const keys = require('../config/keys');

console.log('keys :', keys);

before((done)=> {
    mongoose.connect(
        keys.mongoURI,
        { useNewUrlParser: true }
      );
    
    mongoose.connection
        .once('open', ()=> {
            console.log(`connected to: ${keys.mongoURI}`)
            done();
        })
        .on('error', (error)=> {
            console.warn('Warning', error);
        });


});




beforeEach((done)=> {
    mongoose.connection.collections.users.drop(()=> {
        // now run next test
        done();
    });
})
