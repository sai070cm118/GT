
create table User(
    Id BIGINT,
    SocialAccId,
    Provider,
    Email,
    MobileNo,
    IsEmailVerified,
    IsMobileVerified,
    EmailVerificationHash,
    MobileVerificationOtp,
    AccoutRecoverHash,
    AccoutRecoverOtp,
    CreatedIP,
    SocialAccountId,
);

create table Profile(
    Id,
    FirstName,
    LastName,
    ProfileName,
    ProfilePic,
    IsOnline
);

create table friends(
    UserId,
    FriendId,
    IsFriend
);

create table Account(
    Id BIGINT,
    Rupees,
    IsTransactionInProgress,
    TransactionExecutionRef
);

create table AddMoney()(
    Id,
    Rupees,
    TransactionRef,
    Type,
    Status
);

create table FreeCoins(
    Id BIGINT,
    Coins,
);

create table GameCoins(
    Id BIGINT,
    Coins,
);

create table TransactionType(
    Id INT,
    Name,
    comissionPercent
);

create table TransactionStatus(
    Id INT,
    Name
);

create table Transaction(
    Id BIGINT,
    Type Int,
    CreditAccountId,
    DebitAccountId,
    CreditValue,
    DebitValue,
    ComissionValue,
    TransactionRef,
    CreatedDate
);

create table GameTypes(
    Id,
    Name,
    Game Name,
    Positions, (Json format)
    Status,
    Game Commission percent
);

create table RunningGamesList(
    Id,
    typeid,
    GameId,

);

--create 3 tables for each game creation and bettings once game completed will store the details in Mongo database for backup.
--1) Game details and Status
--2) Bettings
--3) Mongotable for chat

create table [Gameid]_details(
    Sequence ID
    Owner(creator)
    Started ON
    Ended On
    Status
    Owner Chips
    totalSlots
    Remaining slots
    Bettings Chips
    OwnerGameResultChips
    Commission,
    IsGameCompleted,
    IsOwnPosition 1     -- positions comes from GameTypes table how many posion in json that no of columns will create
    IsOwnPosition 2
    IsOwnPosition 3
    IsOwnPosition .
    IsOwnPosition .
);


create table [Gameid]_bets(
    Better ID
    Bet Position 1      -- positions comes from GameTypes table how many posion in json that no of columns will create
    Bet Position 2
    Bet Position 3
    Bet Position .
    Bet Position .    
    Bet Chips
    Won Chips
    Commission Chips
);

------------------------
    -- Add Money
    -- Withdraw Money
    -- Convert to Coins
    -- Convert to Money
    -- Convert to Game
------------------------


/*


Mongodb models

1) Chat
    a) SenderId
    b) ReceiverId
    c) Message
    d) DateTime

2) One model for every Game (Model Name = GameId)
    a) SenderId
    b) Message
    c) DateTime


*/
---------------------