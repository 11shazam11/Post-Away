import { ApplicatioError } from "../../error-handeler/application-error.js";

export default class UserModel{
    constructor(name,email,password,id){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        
    }

    //function for getting all users
    static getAllUsersmodel(){
        return users;
    }

    //adding user
    static addUserModel(data){
        let {name,email,password} = data;
        console.log(name,email,password);
        let newuser = new UserModel(name,email,password);
        newuser.id = users.length+1;
        users.push(newuser);
        return newuser;
    }

    //login user
    static loginUserModel(email,password){
        let found = users.find(u => u.email == email && u.password == password);
        if(!found){
            throw new ApplicatioError("Invalid Credentials",404);
        }
        return found;
    }


}

// All Users
var users = [
    new UserModel("User1","user1y@gmail.com","pass1",1),
    new UserModel("User2","user2@gmail.com","pass2",2),
    new UserModel("User3","user3@gmail.com","pass3",3)
]