class user {
    constructor(username,email){
        this.username = username
        this.email = email
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get username (){
        return this._username.toUpperCase()
    }

    set username(value){
        this._username = value
    }
}
const chai = new user('arman','example@google.com')
console.log(chai.username);
console.log(chai.email);
