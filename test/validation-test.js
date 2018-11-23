const assert = require("assert");
const User = require('../src/user');

describe('validation records', ()=> {

    it('requires a user name', ()=> {
        const user = new User({name: undefined});
        const validationResult = user.validateSync(); // <--- validates against schema created with mongoose        

        const {message} = validationResult.errors.name;

        assert("Name is required", message);
    });

});