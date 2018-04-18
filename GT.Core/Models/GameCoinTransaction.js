

class GameCoinTransaction
{
    constructor (_id,Type,Status,CreditID,GameID,CreditValue,DebitValue,ComissionValue,CreatedDate) {
        this._id=_id;
        this.Type=Type;
        this.Status=Status;
        this.CreditID=CreditID;
        this.GameID=GameID;
        this.CreditValue=CreditValue;
        this.DebitValue=DebitValue;
        this.ComissionValue=ComissionValue;
        this.CreatedDate=CreatedDate;
    }
}


module.exports=GameCoinTransaction;