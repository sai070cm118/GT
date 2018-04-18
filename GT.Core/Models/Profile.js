

class Profile {
    constructor (_id,Email,FirstName,LastName,ProfileName,ProfilePic,Live,IsActive,Status,User,Friends,Account) {
        this._id=_id;
        this.Email=Email;
        this.FirstName=FirstName;
        this.LastName=LastName;
        this.ProfileName=ProfileName;
        this.ProfilePic=ProfilePic;
        this.Live=Live;
        this.IsActive=IsActive;
        this.Status=Status;
        this.User=User;
        this.Friends=Friends;
        this.Account=Account;
    }
}

module.exports=Profile;