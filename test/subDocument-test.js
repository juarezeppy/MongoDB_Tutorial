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

    it('can add subdocuments to an existing record', (done)=> {
        const john = new User({
            name: 'john',
            posts: [{title: "blog1"}]
        });

        john.save()
            .then(()=> User.findOne({name: 'john'}))
            .then(user => {
                user.posts.push({title: 'blog2'});
                return user.save();
            })
            .then(() => User.findOne({name:'john'}))
            .then(user => {
                assert(user.posts[1].title === 'blog2');
                done();
            })
    })

    it('can remove subdocument', (done)=> {
        const john = new User({
            name: 'john',
            posts: [{title: "blog1"}]
        });

        john.save()
            .then(()=> User.findOne({name: 'john'}))
            .then(user => {
                console.log('user :', user);
                user.posts.pop();
                return user.save();

                // alternatively we could have done this...
                // const postToDelete = user.posts[3];
                // postToDelete.remove();
                // return user.save();

            })
            .then(() => User.findOne({name:'john'}))
            .then(user => {
                console.log('user :', user);
                assert(user.posts.length === 0);
                done();
            })
    })
});