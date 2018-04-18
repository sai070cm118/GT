

class FreeCoinsTransaction
{
    constructor (_id,Type,Profile,Coins,TransactionRef,TransactionStatus) {
        this._id=_id;
        this.Type=Type;
        this.ProfileId=Profile._id;
        this.Coins=Coins;
        this.TransactionRef=TransactionRef;
        this.Status=TransactionStatus._id
    }
}


module.exports=FreeCoinsTransaction;