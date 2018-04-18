

class GamePosition
{
    constructor (_idId,Game,Title,Coins) {
        this._id=_id;
        this.GameId=Game._id;
        this.Title=Title;
        this.Coins=Coins;
    }
}


module.exports=GamePosition;