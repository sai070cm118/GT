var Schema = {

  Profile: {
    _id: {type: 'string', maxlength: 24, nullable: false, primary: true},
    Email:{type: 'string', maxlength: 50, nullable: false, unique: true},
    FirstName: {type: 'string', maxlength: 256, nullable: true},
    LastName: {type: 'string', maxlength: 256, nullable: true},
    ProfileName: {type: 'string',maxlength: 512, nullable: true},
    ProfilePic: {type: 'string', maxlength: 1024, nullable: true},
    Location:{type:'string',maxlength:64,nullable:true},
    Live: {type: 'bit',  nullable: false},
    IsActive:{type:'bit',  nullable: false},
    Status: {type: 'integer', nullable: false, unsigned: true}
  },

  User: {
	  _id: {type: 'string', maxlength: 24, nullable: false, primary: true,references:'Profile._id'},
    Email: {type: 'string', maxlength: 50, nullable: false, unique: true},
    RegistrationIP: {type: 'string', maxlength: 50, nullable: false},
    RegistrationTime: {type: 'datetime',  nullable: false},
    EmailVerification: {type: 'string', maxlength: 256, nullable: true},

    PasswordHash: {type: 'string',maxlength: 512, nullable: true},
    Salt: {type: 'string', maxlength: 256, nullable: true},

    Mobile: {type: 'string', maxlength: 15, nullable: true, unique: true},
    TempMobile: {type: 'string', maxlength: 15, nullable: true},
    MobileVerificationOTP: {type: 'string', maxlength: 10, nullable: true},
    
    GooglePlus: {type: 'string', maxlength: 30, nullable: true},
    FacebookID: {type: 'string', maxlength: 30, nullable: true},

    KeepMe: {type: 'string', maxlength: 256, nullable: true},

    RecoverType: {type: 'bit', nullable: true},
    RecoverHash: {type: 'string', maxlength: 256, nullable: true},
    RecoverTimeStamp: {type: 'datetime',  nullable: true}
  },

  Account: {
	  _id: {type: 'string', maxlength: 24, nullable: false, primary: true,references:'Profile._id'},
    Rupees: {type: 'float',unsigned: true, nullable: false, unsigned: false},
    RealCoins: {type: 'integer',unsigned: true, nullable: false, unsigned:false},
    FreeCoins: {type: 'integer',unsigned: true, maxlength: 150, nullable: false}
  },

  TransactionType: {
    _id: {type: 'increments', nullable: false, primary: true},
    Name: {type: 'string', maxlength: 30, nullable: false}
  },

  TransactionStatus: {
    _id: {type: 'increments', nullable: false, primary: true},
    Name: {type: 'string', maxlength: 30, nullable: false}
  },
  
  MoneyTransaction: {
    _id: {type: 'increments', nullable: false, primary: true},
    Type: {type: 'integer', nullable: false, unsigned: true,references:'TransactionType._id'},
    Status: {type: 'integer', nullable: false, unsigned: true,references:'TransactionStatus._id'},
    TransactionRef: {type: 'string',maxlength:30, nullable: false, unsigned: false},
    CreditOrDebit: {type: 'bit', nullable: false},
    AccountID: {type: 'string', maxlength: 24, nullable: false,references:'Profile._id'},
    CreditDebitValue: {type: 'float', nullable: false, unsigned: true},
    CoinsValue: {type: 'float', nullable: false, unsigned: true},
    Charges: {type: 'float', nullable: false, unsigned: true},
    Description: {type: 'string',nullable: false},
    CreatedDate: {type: 'datetime', nullable: false}
  },

  GameStatus:{
    _id: {type: 'increments', nullable: false, primary: true},
    Name: {type: 'string', maxlength: 30,nullable: false}
  },
 
  AppGame:{
    _id: {type: 'increments', nullable: false, primary: true},
    Name: {type: 'string', maxlength: 100,nullable: false},
    Description: {type: 'string',maxlength: 100, nullable: true},
    tablePrefix: {type: 'string', maxlength: 100,nullable: false},
    IsFree:{type: 'bit', nullable: false}
  },
  GamePosition:{
    _id: {type: 'increments', nullable: false, primary: true},
    GameId: {type: 'integer', unsigned: true,nullable: false,references:'AppGame._id'},
    Title: {type: 'string', maxlength: 30,nullable: false},
    Coins: {type: 'integer',  unsigned: true}
  },
  GameChallenge:{
    _id: {type: 'increments', nullable: false, primary: true},
    GameId: {type: 'integer', unsigned: true,nullable: false,references:'AppGame._id'},
    Title: {type: 'string', maxlength: 30,nullable: false},
    BettablePositions: {type: 'integer',unsigned: true},
    ComissionPercent:{type: 'integer',  unsigned: true},
    GameTime:{type: 'integer',  unsigned: true},
    BoardPrice:{type: 'integer',  unsigned: true},
    NoOfPositions:{type: 'integer',  unsigned: true},
    CoinsPerEachPosition:{type: 'integer',  unsigned: true}
  },
  Game:{
    _id: {type: 'increments', nullable: false, primary: true},
    ChallengeId: {type: 'integer', nullable: false, unsigned: true,references:'GameChallenge._id'},
    Owner: {type: 'string', maxlength: 24, nullable: false,references:'Profile._id'},
    CreatedOn:{type: 'datetime', nullable: false},
    StartOn:{type: 'datetime', nullable: false},
    EndAt:{type: 'datetime', nullable: false},
    TotalPositions: {type: 'integer', nullable: true, unsigned: true},
    RemainPositions: {type: 'integer', nullable: true, unsigned: true},
    TotalWinningPositions: {type: 'integer', nullable: true, unsigned: true},
    CreationAmount: {type: 'integer', nullable: true, unsigned: true},
    WinningAmount: {type: 'integer', nullable: true, unsigned: true},
    ComissionAmount: {type: 'integer', nullable: true, unsigned: true},
    CreditAmount: {type: 'integer', nullable: true, unsigned: true},
    Status: {type: 'integer', nullable: false,unsigned: true,references:'GameStatus._id'},
    WinningDetails:{type: 'string', nullable: true}
  },
  GameWinPosition:{
    _id: {type: 'increments', nullable: false, primary: true},
    GameId: {type: 'integer', nullable: false, unsigned: true,references:'Game._id'},
    PositionId: {type: 'integer', nullable: false, unsigned: true,references:'GamePosition._id'}
  },
  GameUserBetting:{
    _id: {type: 'increments', nullable: false, primary: true},
    GameId: {type: 'integer', nullable: false, unsigned: true,references:'Game._id'},
    UserId: {type: 'string', maxlength: 24, nullable: false,references:'Profile._id'},
    BufferAmount: {type: 'integer', nullable: true, unsigned: true},
    BetPositions: {type: 'integer', nullable: true, unsigned: true},
    BetAmount: {type: 'integer', nullable: true, unsigned: true},
    WinningAmount: {type: 'integer', nullable: true, unsigned: true},
    ComissionAmount: {type: 'integer', nullable: true, unsigned: true},
    CreditAmount: {type: 'integer', nullable: true, unsigned: true},
    EntryAmount: {type: 'integer', nullable: true, unsigned: true},
    IsAmountCredited:{type: 'bit', nullable: true}
  },
  GameBetPosition:{
    _id: {type: 'increments', nullable: false, primary: true},
    BetId: {type: 'integer', nullable: false, unsigned: true, references:'GameUserBetting._id', },
    PositionId: {type: 'integer', nullable: false, unsigned: true,references:'GamePosition._id'}
  },
  FreeGameChallenge:{
    _id: {type: 'increments', nullable: false, primary: true},
    GameId: {type: 'integer', unsigned: true,nullable: false,references:'AppGame._id'},
    Title: {type: 'string', maxlength: 30,nullable: false},
    BettablePositions: {type: 'integer',unsigned: true},
    ComissionPercent:{type: 'integer',  unsigned: true},
    GameTime:{type: 'integer',  unsigned: true},
    BoardPrice:{type: 'integer',  unsigned: true},
    NoOfPositions:{type: 'integer',  unsigned: true},
    CoinsPerEachPosition:{type: 'integer',  unsigned: true}
  },
  FreeGame:{
    _id: {type: 'increments', nullable: false, primary: true},
    ChallengeId: {type: 'integer', nullable: false, unsigned: true,references:'FreeGameChallenge._id'},
    Owner: {type: 'string', maxlength: 24, nullable: false,references:'Profile._id'},
    CreatedOn:{type: 'datetime', nullable: false},
    StartOn:{type: 'datetime', nullable: false},
    EndAt:{type: 'datetime', nullable: false},
    TotalPositions: {type: 'integer', nullable: true, unsigned: true},
    RemainPositions: {type: 'integer', nullable: true, unsigned: true},
    TotalWinningPositions: {type: 'integer', nullable: true, unsigned: true},
    CreationAmount: {type: 'integer', nullable: true, unsigned: true},
    WinningAmount: {type: 'integer', nullable: true, unsigned: true},
    ComissionAmount: {type: 'integer', nullable: true, unsigned: true},
    CreditAmount: {type: 'integer', nullable: true, unsigned: true},
    Status: {type: 'integer', nullable: false,unsigned: true,references:'GameStatus._id'},
    WinningDetails:{type: 'string', nullable: true}
  },
  FreeGameWinPosition:{
    _id: {type: 'increments', nullable: false, primary: true},
    GameId: {type: 'integer', nullable: false, unsigned: true,references:'FreeGame._id'},
    PositionId: {type: 'integer', nullable: false, unsigned: true,references:'GamePosition._id'}
  },
  FreeGameUserBetting:{
    _id: {type: 'increments', nullable: false, primary: true},
    GameId: {type: 'integer', nullable: false, unsigned: true,references:'FreeGame._id'},
    UserId: {type: 'string', maxlength: 24, nullable: false,references:'Profile._id'},
    BufferAmount: {type: 'integer', nullable: true, unsigned: true},
    BetPositions: {type: 'integer', nullable: true, unsigned: true},
    BetAmount: {type: 'integer', nullable: true, unsigned: true},
    WinningAmount: {type: 'integer', nullable: true, unsigned: true},
    ComissionAmount: {type: 'integer', nullable: true, unsigned: true},
    CreditAmount: {type: 'integer', nullable: true, unsigned: true},
    EntryAmount: {type: 'integer', nullable: true, unsigned: true},
    IsAmountCredited:{type: 'bit', nullable: true}
  },
  FreeGameBetPosition:{
    _id: {type: 'increments', nullable: false, primary: true},
    BetId: {type: 'integer', nullable: false, unsigned: true, references:'FreeGameUserBetting._id', },
    PositionId: {type: 'integer', nullable: false, unsigned: true,references:'GamePosition._id'}
  }
};

module.exports = Schema;