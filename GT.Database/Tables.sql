
CREATE TABLE TransactionType(
   Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   Name VARCHAR(20)
)ENGINE=InnoDB;

CREATE TABLE TransactionStatus(
   Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   Name VARCHAR(20)
)ENGINE=InnoDB;

CREATE TABLE OfflineTransactionType(
   Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   Name VARCHAR(20)
)ENGINE=InnoDB;

CREATE TABLE GameType(
   Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   Name VARCHAR(20) NOT NULL,
   Positions VARCHAR(512) NULL,
   CommissionPercent float NOT NULL,
   GameTableStructure VARCHAR(512) NOT NULL,
   BettingTableStructure VARCHAR(512) NOT NULL
)ENGINE=InnoDB;


CREATE TABLE Profile(
   Id INT NOT NULL PRIMARY KEY,
   FirstName VARCHAR(100) NULL,
   LastName VARCHAR(50) NULL,
   ProfileName VARCHAR(20) NULL,
   ProfilePic VARCHAR(10) NULL,
   Live	BIT NULL	-- 1-OnLine, 0-OffLine
)ENGINE=InnoDB;

CREATE TABLE User(
   Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   Email VARCHAR(50) NOT NULL,
   Mobile VARCHAR(15) NULL,
   PasswordHash VARCHAR(256) NULL,
   Salt VARCHAR(256) NULL,
   GooglePlus VARCHAR(20) NULL,
   FacebookID VARCHAR(20) NULL,
   KeepMe VARCHAR(256) NULL,
   EmailVerification VARCHAR(256) NULL,
   MobileVerificationOTP VARCHAR(10) NULL,
   RegistrationIP VARCHAR(50) NULL,
   RegistraionTime VARCHAR(10) NULL,
   RecoverType BIT NULL,
   RecoverHash VARCHAR(256) NULL,
   RecoverTimeStamp VARCHAR(10) NULL,
   CONSTRAINT FK_Profile_ToTable
   FOREIGN KEY (Id) REFERENCES Profile(id)
)ENGINE=InnoDB;


CREATE TABLE Account(
   Id INT NOT NULL PRIMARY KEY,
   Rupees FLOAT,
   RealChips int,
   FreeChips int,
   CONSTRAINT FK_Account_ToTable 
   FOREIGN KEY (Id) REFERENCES Profile(id)
)ENGINE=InnoDB;

CREATE TABLE Friend(
   Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   MyId INT NOT NULL,
   FriendId INT NOT NULL,
   Live BIT NULL,
   CONSTRAINT FK_Friend_ToTable 
   FOREIGN KEY (MyId) REFERENCES Profile(Id),
   FOREIGN KEY (FriendId) REFERENCES Profile(Id)
)ENGINE=InnoDB;

CREATE TABLE OfflineMoney(
   Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   ProfileId INT NOT NULL,
   Rupees FLOAT NOT NULL,
   TransactionRef VARCHAR(30) NOT NULL,
   Type INT NOT NULL,
   Status INT NOT NULL,
   CONSTRAINT FK_OfflineMoney_ToTable 
   FOREIGN KEY (ProfileId) REFERENCES Profile(Id),
   FOREIGN KEY (Type) REFERENCES OfflineTransactionType(Id),
   FOREIGN KEY (Status) REFERENCES TransactionStatus(Id)
)ENGINE=InnoDB;

CREATE TABLE Transaction(
   Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   Type INT NOT NULL,
   Status INT NOT NULL,
   CreditID INT NOT NULL,
   DebitID INT NOT NULL,
   CreditValue Float NOT NULL,
   DebitValue Float NOT NULL,
   ComissionValue Float NULL,
   CreatedDate DATETIME NOT NULL,
   CONSTRAINT FK_Transaction_ToTable 
   FOREIGN KEY (Type) REFERENCES TransactionType(Id),
   FOREIGN KEY (Status) REFERENCES TransactionStatus(Id),
   FOREIGN KEY (CreditID) REFERENCES Profile(Id),
   FOREIGN KEY (DebitID) REFERENCES Profile(Id)   
)ENGINE=InnoDB;

CREATE TABLE RunningGame(
   Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   Type INT NOT NULL,
   GameID INT NOT NULL,
   CreatedBy INT NOT NULL,
   Status BIT NOT NULL, -- 1-Running, 2-Ended
   GameTable VARCHAR(20) NOT NULL,
   BettingTable VARCHAR(20) NOT NULL,
   CONSTRAINT FK_RunningGame_ToTable 
   FOREIGN KEY (Type) REFERENCES GameType(Id),
   FOREIGN KEY (CreatedBy) REFERENCES Profile(Id)
)ENGINE=InnoDB;











