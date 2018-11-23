const assert = require('assert');
const User =  require('../src/user');

describe("Create User Test", ()=> {
    it('Saves a User', (done)=> {
        const john = new User({name: "John"}); // <--- creates a user object matching the schema

        john.save()
            .then(()=> {
                assert(!john.isNew); // <--- was john saved?
                done();
            }); 
            
    });
});