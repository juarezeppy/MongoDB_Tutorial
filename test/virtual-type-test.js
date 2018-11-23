const assert = require('assert');
const User = require('../src/user');

describe('Virtual types', ()=> {
    it('postCount returns number of posts', (done)=> {
        const john = new User({
            name: "john",
            posts: [{title: "PostTitle"}]
        });

        john.save()
            .then(()=> User.findOne({name: 'john'}))
            .then((user)=>{
                assert(user.postCount === 1);
                done();
            })
    });

    
})