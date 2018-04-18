

class GameChallenge
{
    constructor (_id,GameId,Title,NoOfPositions,ComissionPercent) {
        this.Id=_id;
        this.GameId=GameId;
        this.Title=Title;
        this.NoOfPositions=NoOfPositions;
        this.ComissionPercent=ComissionPercent;
    }
}


module.exports=GameChallenge;