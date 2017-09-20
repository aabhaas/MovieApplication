export class LoginDetails{
    name : string;
     password :string;
    emailId :string;
    contactNo :string;

    constructor(loginDetails){
        this.emailId=loginDetails.emailID;
        this.contactNo=loginDetails.contactNo;
        this.name=loginDetails.name;
        this.password= loginDetails.password;
    }
}