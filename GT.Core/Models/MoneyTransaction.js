

class MoneyTransaction
{
    constructor (_id,Name,TransactionStatus,TransactionRef,CreditID,DebitID,CreditValue,DebitValue,ComissionValue,CreatedDate) {
        this._id=_id;
        this.Type=Type;
        this.Status=TransactionStatus._id;
        this.TransactionRef=TransactionRef;
        this.CreditID=CreditID;
        this.DebitID=DebitID;
        this.CreditValue=CreditValue;
        this.DebitValue=DebitValue;
        this.ComissionValue=ComissionValue;
        this.CreatedDate=CreatedDate;
    }
}


module.exports=MoneyTransaction;