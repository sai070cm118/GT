

export class IProfile{
    _id:string;
    Email:string;
    ProfileName: string;
    FirstName?:string;
    LastName?:string;
    ProfilePic?:string;
    Location?:string;
    Live?:boolean;
    IsActive?:boolean;
    Status?:number;
    User?:IUser;
    Account?:IAccount;
    UserGroups?:IUserGroup[];
    Transactions?:IMoneyTransaction[];
    AppGames?:IAppGame[];
    PaidGames?:IGame[];
    FreeGames?:IFreeGame[];
    Notifications?:any[];
    MyBettedPaidGames?:any[];
    MyBettedFreeGames?:any[];
    MyBoardGames?:string[];

    
    constructor(_id?:string,    Email?:string,    ProfileName?: string,    FirstName?:string, LastName?:string, ProfilePic?:string,    Location?:string,  Live?:boolean,  IsActive?:boolean,Status?:number,User?:IUser,Account?:IAccount,UserGroups?:IUserGroup[],Transactions?:IMoneyTransaction[],AppGames?:IAppGame[]) {
		this._id=_id;
        this.Email=Email;
        this.ProfileName=ProfileName;
        this.FirstName=FirstName;
        this.LastName=LastName;
        this.ProfilePic=ProfilePic;
        this.Location=Location;
        this.Live=Live;
        this.IsActive=IsActive;
        this.Status=Status;

        this.User= User || new IUser();
        this.Account= Account || new IAccount();
        this.UserGroups= UserGroups || new Array<IUserGroup>();
        this.Transactions= Transactions || new Array<IMoneyTransaction>();
        this.AppGames= AppGames || new Array<IAppGame>();
        this.PaidGames= new Array<IGame>();
        this.FreeGames= new Array<IFreeGame>();
        this.MyBettedPaidGames=[];
        this.MyBettedFreeGames=[];
        this.MyBoardGames=[];
    }
}

export class IUser{
    _id:string;
    Email:string;
    Password?:string;
    OldPassword?:string;
    Mobile?:string;
    KeepMe?:string;
    RecoverHash?:string;
}

export class IAccount{
    _id:string;
    Rupees:number;
    RealCoins:number;
    FreeCoins:number;
}

export class ITransactionType{
    _id:number;
    Name:string;
}


export class ITransactionStatus{
    _id:number;
    Name:string;
}


export class IMoneyTransaction{
    _id:number;
    Type:ITransactionType;
    Status:ITransactionStatus;
    TransactionRef:string;
    CreditOrDebit:string;
    AccountID:string;
    CreditDebitValue:string;
    CoinsValue:string;
    Charges:string;
    Description:string;
    CreatedDate:Date;

    
    constructor() {
        this.Type=new ITransactionType();
        this.Status=new ITransactionStatus();
    }
}



export class IUserGroup{
    _id?:string;
    IsGroup?:boolean;
    GroupName?:string;
    Participants?:IProfile[];
    Messages?:IMessage[];

    
    constructor() {
        this.Participants=new Array<IProfile>();
        this.Messages=new Array<IMessage>();
    }
}


export class IGameGroup{
    _id:string;
    GameId:number;
    IsFree:boolean;
    Participants:IProfile[];
    Messages:IMessage[];

    constructor() {
        this.Participants=new Array<IProfile>();
        this.Messages=new Array<IMessage>();
    }
}

export class IMessage{
    _id?:string;
    sender?:IProfile;
    message?:string;
    date?:Date;
    IsSent?:boolean;
    IsDelivered?:boolean;
    IsRead?:boolean;

    
    constructor() {
        this.sender=new IProfile();
    }
}

export class IGroupMessage{
    _id?:string;
    UserGroup:IUserGroup;
    Message:IMessage;
    constructor() {
        this.UserGroup=new IUserGroup();
        this.Message=new IMessage();
    }
}




export class IGameStatus{
    Id:number;
    Name:string;
}


export class IAppGame{
    _id:string;
    Name:string;
    Description:string;
    tablePrefix:string;
    IsFree:boolean;
    Positions:IPosition[];
    Challenges:IGameChallenge[];
    FreeGameChallenges:IFreeGameChallenge[];

    
    constructor() {
        this.Challenges=new Array<IGameChallenge>();
        this.FreeGameChallenges=new Array<IFreeGameChallenge>();
        this.Positions=new Array<IPosition>();
    }
}

export class IPosition{
    _id:string;
    AppGame:IAppGame;
    Title:string;
    Coins:number;
    
    constructor() {
        this.AppGame=new IAppGame();
    }
}

export class IGameChallenge{
    _id:string;
    GameId:number;
    Title:string;
    BettablePositions:number;
    ComissionPercent:number;
    GameTime:Date;
    BoardPrice:number;
    NoOfPositions:number;
    CoinsPerEachPosition:number;
    Games:IGame[];

    
    constructor() {
        this.Games=new Array<IGame>();
    }
}

export class IFreeGameChallenge{
    _id:string;
    GameId:number;
    Title:string;
    BettablePositions:number;
    ComissionPercent:number;
    GameTime:Date;
    BoardPrice:number;
    NoOfPositions:number;
    CoinsPerEachPosition:number;
    FreeGames:IFreeGame[];

    
    constructor() {
        this.FreeGames=new Array<IFreeGame>();
    }
}


export class IGame{
    _id:string;
    GameUserBettings:IGameUserBetting[];
    GameGroup:IGameGroup;
    ChallengeId:string;
    Ownner;string;
    CreatedOn:Date;
    StartOn:Date;
    EndAt:Date;
    TotalPositions:number
    RemainPositions:number
    TotalWinningPositions:number
    CreationAmount:number
    WinningAmount:number
    ComissionAmount:number
    CreditAmount:number
    Status:IGameStatus
    WinningDetails:string
    
    
    constructor() {
        this.GameUserBettings=new Array<IGameUserBetting>();
        this.GameGroup=new IGameGroup();
        this.Status=new IGameStatus();
    }
}

export class IFreeGame{
    _id:string;
    GameUserBettings:IFreeGameUserBetting[];
    GameGroup:IGameGroup;
    ChallengeId:string;
    Ownner;string;
    CreatedOn:Date;
    StartOn:Date;
    EndAt:Date;
    TotalPositions:number
    RemainPositions:number
    TotalWinningPositions:number
    CreationAmount:number
    WinningAmount:number
    ComissionAmount:number
    CreditAmount:number
    Status:IGameStatus
    WinningDetails:string

    
    constructor() {
        this.GameUserBettings=new Array<IFreeGameUserBetting>();
        this.GameGroup=new IGameGroup();
        this.Status=new IGameStatus();
    }
}

export class IGameUserBetting{
    _id:string;
    Game:IGame;
    User:IProfile;
    BufferAmount:number;
    WinningAmount:number;
    ComissionAmount:number;
    CreditAmount:number;
    EntryAmount:number;
    IsAmountCredited:boolean;

    constructor() {
        this.Game=new IGame();
        this.User=new IProfile();
    }
}

export class IFreeGameUserBetting{
    _id:string;
    Game:IFreeGame;
    User:IProfile;
    BufferAmount:number;
    WinningAmount:number;
    ComissionAmount:number;
    CreditAmount:number;
    EntryAmount:number;
    IsAmountCredited:boolean;

    
    constructor() {
        this.Game=new IFreeGame();
        this.User=new IProfile();
    }
}


export class IGameBetPosition{
    _id:string;
    UserBet:IGameUserBetting;
    Position:IPosition;

    constructor() {
        this.UserBet=new IGameUserBetting();
        this.Position=new IPosition();
    }
}

export class IFreeGameBetPosition{
    _id:string;
    UserBet:IFreeGameUserBetting;
    Position:IPosition;

    
    constructor() {
        this.UserBet=new IFreeGameUserBetting();
        this.Position=new IPosition();
    }
}

export class IGameWinPosition{
    _id:string;
    Game:IGame;
    Position:IPosition;

    
    constructor() {
        this.Game=new IGame();
        this.Position=new IPosition();
    }
}

export class IFreeGameWinPosition{
    _id:string;
    Game:IFreeGame;
    Position:IPosition;

    
    constructor() {
        this.Game=new IFreeGame();
        this.Position=new IPosition();
    }
}

export class ISocketMessage{
    Type:string;
    error:string;
    data:any;
}
