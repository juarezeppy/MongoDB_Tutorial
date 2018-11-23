const assert = require('assert');
const User = require('../src/user');

describe('Read users out of the DB', ()=> {
    let john;

    beforeEach((done)=> {
        john = new User({name: 'john'});
        john.save()
            .then(()=> done());
    });

    it (`Finds all users with the name 'john'`, (done)=> {
        User.find({name: "john"}).then(users => {
            // must convert _id to a string because it is an object. See mongoDB collections
            // assert(users[0]._id.toString() === john._id.toString());
            done();
        });
    });


    it('Find a user with specific ID', (done)=> {
        User.findOne({_id: john._id}).then((user)=> {
            assert(user.name === "john");
            done();
        });
    });

});