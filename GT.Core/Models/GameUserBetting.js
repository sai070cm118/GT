

class GameUserBetting
{
    constructor (_id,Game,User,BufferAmount,BetPositions,BetAmount,WinningAmount,ComissionAmount,CreditAmount,EntryAmount) {
        this._id=_id;
        this.GameId=Game._id;
        this.UserId=User._id;
        this.BufferAmount=BufferAmount;
        this.BetPositions=BetPositions;
        this.BetAmount=BetAmount;
        this.WinningAmount=WinningAmount;
        this.ComissionAmount=ComissionAmount;
        this.CreditAmount=CreditAmount;
        this.EntryAmount=EntryAmount;
    }
}


module.exports=GameUserBetting;