const assert = require("assert");
const User = require("../src/user");

describe("Updating records", ()=> {
    let john;

    beforeEach((done)=> {
        john = new User({name: 'john', likes: 0});
        john.save()
            .then(()=> done());
    });

    function assertName(operation, done) {
        operation
        .then(()=>  User.find({})) // <---- finds all users
        .then((users) => {
            // console.log('users :', users);
            assert(users.length === 1);
            assert(users[0].name === "bubba");
            done();
        });
    }


    it('instace type using set and save', (done)=> {
        console.log('joe :', john);
        john.set('name', "bubba");
        console.log('joe :', john);
        assertName(john.save(), done);
    // example of usage might be...
    // function updateEmail(user)
    // function updatePhone(user)
    // user.save()  
    });


    it('A model instace can update', (done)=> {
        assertName(john.updateOne({name: "bubba"}), done)
    });

    it('A model class can update', (done)=> {
        // for every record with name john, replace with bubba
        assertName(
            User.updateMany({name: "john"}, {name:"bubba"}),
            done);
    });

    it('A model class can update one record', (done)=> {
        assertName(
            User.findOneAndUpdate({name: "john"}, {name: "bubba"}),
            done);
    });

    it('A model class can find a record with specific ID and update', (done)=> {
        assertName(
            User.findByIdAndUpdate(john._id, {name: "bubba"}),
            done);
    });

    it("a user can have their postCount incremented by 4", (done)=> {
        User.updateMany({name: 'john'}, {$inc: {likes: 4} })
        .then(()=> User.findOne({name:"john"}))
        .then(user=> {
            console.log('user :', user);
            assert(user.likes === 4);
            done();
        });
    });

});