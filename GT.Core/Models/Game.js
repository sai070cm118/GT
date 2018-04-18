

class Game
{
    constructor (_id,Challenge,Owner,CreatedOn,StartOn,EndAt,TotalPositions,RemainPositions,TotalWinningPositions,CreationAmount,WinningAmount,ComissionAmount,CreditAmount,GameStatus) {
        this._id=_id;
        this.ChallengeId=Challenge._id;
        this.Owner=Owner._id;
        this.CreatedOn=CreatedOn;
        this.StartOn=StartOn;
        this.TotalPositions=TotalPositions;
        this.RemainPositions=RemainPositions;
        this.TotalWinningPositions=TotalWinningPositions;
        this.CreationAmount=CreationAmount;
        this.WinningAmount=WinningAmount;
        this.ComissionAmount=ComissionAmount;
        this.CreditAmount=CreditAmount;
        this.Status=GameStatus._id;
    }
}


module.exports=Game;