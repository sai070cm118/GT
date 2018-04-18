

class GameBetPosition
{
    constructor (_id,GameUserBet,PositionId) {
        this._id=_id;
        this.BetId=GameUserBet._id;
        this.PositionId=PositionId;
    }
}


module.exports=GameBetPosition;