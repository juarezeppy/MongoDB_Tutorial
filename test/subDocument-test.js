const assert = require("assert");
const User = require('../src/user');

describe('validation user posts', ()=> {
    it('can create a subdocument', (done)=> {
        const john = new User({
            name: 'john',
            posts: [{title: "blog1"}]
        });


        john.save()
            .then(()=> User.findOne({name: 'john'}))
            .then(user => {
                console.log('user :', user);
                assert(user.posts[0].title === 'blog1');
                done();
            });
    })
});