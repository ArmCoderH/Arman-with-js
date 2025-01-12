class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME : ${this.username}`);
    }
}

class room extends user {
    constructor(username,email,password){
        super(username)///retireve all data from the user class
        this.email = email
        this.password = password
    }

    addcourse(){
        console.log(`A new course is : ${this.username}`);
    }
}

const chai = new room('arman','example@google.com','123')

chai.logMe()
chai.addcourse()

