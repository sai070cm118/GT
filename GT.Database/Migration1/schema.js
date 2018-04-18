var Schema = {
  TransactionType: {
    Id: {type: 'increments', nullable: false, primary: true},
    Name: {type: 'string', maxlength: 30, nullable: false}
  },

  TransactionStatus: {
    Id: {type: 'increments', nullable: false, primary: true},
    Name: {type: 'string', maxlength: 30, nullable: false}
  },

  OfflineTransactionType: {
    Id: {type: 'increments', nullable: false, primary: true},
    Name: {type: 'string', maxlength: 30, nullable: false}
  },

  GameType: {
    Id: {type: 'increments', nullable: false, primary: true},
    Name: {type: 'string', maxlength: 30, nullable: false},
    Positions: {type: 'string', maxlength: 512, nullable: false},
    CommissionPercent: {type: 'float', nullable: false},
    GameTableStructure: {type: 'string', maxlength: 512, nullable: false},
    BettingTableStructure: {type: 'string', maxlength: 512, nullable: false},
  },

  Profile: {
    Id: {type: 'string', maxlength: 24, nullable: false, primary: true},
    PrimaryEmail:{type: 'string', maxlength: 50, nullable: true, unique: true},
    FirstName: {type: 'string', maxlength: 256, nullable: true},
    LastName: {type: 'string', maxlength: 256, nullable: true},
    ProfileName: {type: 'string',maxlength: 512, nullable: true},
    ProfilePic: {type: 'string', maxlength: 1024, nullable: true},
    Live: {type: 'bit',  nullable: true},
    IsActive:{type:'bit'}
  },

  User: {
	  Id: {type: 'string', maxlength: 24, nullable: false, primary: true,references:'Profile.Id'},
    Email: {type: 'string', maxlength: 50, nullable: true, unique: true},
    Mobile: {type: 'string', maxlength: 15, nullable: true, unique: true},
    PasswordHash: {type: 'string',maxlength: 512, nullable: true},
    Salt: {type: 'string', maxlength: 256, nullable: true},
    GooglePlus: {type: 'string', maxlength: 30, nullable: true, unique: true},
    FacebookID: {type: 'string', maxlength: 30, nullable: true, unique: true},
    KeepMe: {type: 'string', maxlength: 256, nullable: true},
    EmailVerification: {type: 'string', maxlength: 256, nullable: true},
    MobileVerificationOTP: {type: 'string', maxlength: 10, nullable: true},
    RegistrationIP: {type: 'string', maxlength: 50, nullable: true},
    RegistrationTime: {type: 'string', maxlength: 10, nullable: true},
    RecoverType: {type: 'bit', nullable: true},
    RecoverHash: {type: 'string', maxlength: 256, nullable: true},
    RecoverTimeStamp: {type: 'string', maxlength: 10, nullable: true},
    IsEmailVerified: {type: 'bit', nullable: true},
    IsMobileVerified: {type: 'bit', nullable: true}
  },

  Account: {
	  Id: {type: 'string', maxlength: 24, nullable: false, primary: true,references:'Profile.Id'},
    Rupees: {type: 'float',unsigned: true, nullable: false, unsigned: false},
    RealChips: {type: 'integer',unsigned: true, nullable: false, unsigned:false},
    FreeChips: {type: 'integer',unsigned: true, maxlength: 150, nullable: false}
  },

  Friend: {
    Id: {type: 'integer', nullable: false, primary: true},
    MyId: {type: 'string', maxlength: 24, nullable: false,references:'Profile.Id'},
    FriendId: {type: 'string', maxlength: 24, nullable: false,references:'Profile.Id'},
    Live: {type: 'bit', nullable: false}
  },

  OfflineMoney: {
    Id: {type: 'increments', nullable: false, primary: true},
    ProfileId: {type: 'string', maxlength: 24, nullable: false,references:'Profile.Id'},
    Rupees: {type: 'float', nullable: false, unsigned: false},
    TransactionRef: {type: 'string',maxlength:30, nullable: false, unsigned: false},
    Type: {type: 'integer', nullable: false,unsigned: true,references:'OfflineTransactionType.Id'},
    Status: {type: 'integer', nullable: false,references:'TransactionStatus.Id',unsigned: true}
  },

  
  Transaction: {
    Id: {type: 'increments', nullable: false, primary: true},
    Type: {type: 'integer', nullable: false, unsigned: true,references:'TransactionType.Id'},
    Status: {type: 'integer', nullable: false, unsigned: true,references:'TransactionStatus.Id'},
    CreditID: {type: 'string', maxlength: 24, nullable: false,references:'Profile.Id'},
    DebitID: {type: 'string', maxlength: 24, nullable: false,references:'Profile.Id'},
    CreditValue: {type: 'float', nullable: false, unsigned: true},
    DebitValue: {type: 'float', nullable: false, unsigned: true},
    ComissionValue: {type: 'float', nullable: false, unsigned: true},
    CreatedDate: {type: 'datetime', nullable: false}
  },

  RunningGame: {
    Id: {type: 'string', maxlength: 24, nullable: false, primary: true},
    Type: {type: 'integer', nullable: false, unsigned: true,references:'GameType.Id'},
    Creator: {type: 'string', maxlength: 24, nullable: false,references:'Profile.Id'},
    Status: {type: 'integer', nullable: false, unsigned: true},
    CreditValue: {type: 'float', nullable: false, unsigned: true},
    GameTable: {type: 'string',maxlength:512, nullable: false},
    BettingTable: {type: 'string',maxlength:512, nullable: false}
  }

};

module.exports = Schema;