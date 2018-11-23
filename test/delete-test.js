const assert = require("assert");
const User = require("../src/user");

describe("Deleting a user", ()=> {
    let john;

    beforeEach((done)=> {
        john = new User({name: 'john'});
        john.save()
            .then(()=> done());
    });

    it('model instance remove', (done)=> {
        // remove john then search db to ensure john is not found
        john.remove()
            .then(()=>User.findOne({name: "john"}))
            .then((user)=> {
                assert(user === null)
                done();
            });
    });


    it('class method remove', (done)=> {
        User.deleteOne({name: 'john'})
        .then(()=>User.findOne({name: "john"}))
        .then((user)=> {
            assert(user === null)
            done();
        });
    });


    it('class method findAndRemove', (done)=> {
        User.findOneAndDelete({name: "john"})
        .then(()=>User.findOne({name: "john"}))
        .then((user)=> {
            assert(user === null)
            done();
        });
    });

    it('class method findByIdAndRemove', (done)=> {
        User.findByIdAndDelete(john._id)
        .then(()=>User.findOne({name: "john"}))
        .then((user)=> {
            assert(user === null)
            done();
        });
    });

});

