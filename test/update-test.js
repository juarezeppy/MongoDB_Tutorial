const assert = require("assert");
const User = require("../src/user");

describe("Updating records", ()=> {
    let john;

    beforeEach((done)=> {
        john = new User({name: 'john'});
        john.save()
            .then(()=> done());
    });


    it('instace type using set and save', ()=> {
        console.log('joe :', john);
        john.set('name', "bubba");
        console.log('joe :', john);
    });


});