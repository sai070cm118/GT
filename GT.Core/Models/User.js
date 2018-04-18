
class User {
    constructor (_id,Email,RegistrationIP,RegistrationTime,EmailVerification,PasswordHash,Salt,Mobile,MobileVerificationOTP,GooglePlus,FacebookID
    ,KeepMe,RecoverType,RecoverHash,RecoverTimeStamp) {

        this._id = _id;
        this.Email= Email;this.RegistrationIP=RegistrationIP;
        this.RegistrationTime=RegistrationTime;
        this.EmailVerification=EmailVerification;

        this.PasswordHash=PasswordHash;
        this.Salt=Salt;

        this.Mobile= Mobile;
        this.MobileVerificationOTP=MobileVerificationOTP;

        this.GooglePlus=GooglePlus;
        this.FacebookID=FacebookID;

        this.KeepMe=KeepMe;
        
        this.RecoverType=RecoverType;
        this.RecoverHash=RecoverHash;
        this.RecoverTimeStamp=RecoverTimeStamp;
    }
}


module.exports=User;