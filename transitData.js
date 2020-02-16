var trainStations = {
    //blue line stations
    saddleTowne: { 
        xCord: 1517,
        yCord: 31
    },
    martindale: {
        xCord: 1492,
        yCord: 81
    },
    westwinds: {
        xCord: 1442,
        yCord: 119
    },
    whitehorn: {
        xCord: 1392,
        yCord: 131
    },
    rundle : {
        xCord: 1342,
        yCord: 180
    },
    marlborough :  {
        xCord: 1293,
        yCord: 206
    },
    franklin :  {
        xCord: 1242,
        yCord: 243
    },
    maxBell :  {
        xCord: 1180,
        yCord: 281
    },
    zoo :  {
        xCord: 1130,
        yCord: 281
    },
    bridgeLand :  {
        xCord: 1068,
        yCord: 293
    },
    cityHall :  {
        xCord: 955,
        yCord: 455
    },
    firstStreet :  {
        xCord: 868,
        yCord: 455
    },
    fourthStreet : {
        xCord: 769,
        yCord: 455
    },
    seventhStreet : {
        xCord: 681,
        yCord: 455
    },
    downtownWest : {
        xCord: 581,
        yCord: 468
    },
    sunalta : {
        xCord: 507,
        yCord: 480
    },
    shaganappi : {
        xCord: 432,
        yCord: 493
    },
    westbrook : {
        xCord: 344,
        yCord: 493
    },
    fourtyFifthStreet : {
        xCord: 270,
        yCord: 493
    },
   sirocco : {
        xCord: 194,
        yCord: 493
    },
    sixtyNinthStreet : {
        xCord: 119,
        yCord: 493
    },
    
    //red line stations
    eigthStreet : {
        xCord: 1500,
        yCord: 100
    },
    sixthStreet : {
        yCord: 100
    },
    thirdStreet : {
        xCord: 1500,
        yCord: 100
    },
    centreStreet : {
        xCord: 1500,
        yCord: 100
    },
    tuscany : {
        xCord: 1500,
        yCord: 100
    },
    crowfoot : {
        xCord: 1500,
        yCord: 100
    },
    dalhousie : {
        xCord: 1500,
        yCord: 100
    },
    brentwood : {
        xCord: 1500,
        yCord: 100
    },
    university : {
        xCord: 1500,
        yCord: 100
    },
    banffTrail : {
        xCord: 1500,
        yCord: 100
    },
    lionsPark : {
        xCord: 1500,
        yCord: 100
    },
    sait : {
        xCord: 1500,
        yCord: 100
    },
    sunnyside : {
        xCord: 1500,
        yCord: 100
    },
    victoriaPark : {
        xCord: 1500,
        yCord: 100
    },
    erlton : {
        xCord: 1500,
        yCord: 100
    },
    thirtyNinth : {
        xCord: 1500,
        yCord: 100
    },
    chinook: {
        xCord: 1500,
        yCord: 100
    },
    heritage : {
        xCord: 1500,
        yCord: 100
    },
    southland : {
        xCord: 1500,
        yCord: 100
    },
    anderson : {
        xCord: 1500,
        yCord: 100
    },
    canyonMeadows : {
        xCord: 1500,
        yCord: 100
    },
    fishCreek : {
        xCord: 1500,
        yCord: 100
    },
    shawnessy : {
        xCord: 1500,
        yCord: 100
    },
    somerset : {
        xCord: 1500,
        yCord: 100
    }
}

//saddletowne - 69th street
var blueLine69St = [
    trainStations.saddleTowne,
    trainStations.martindale,
    trainStations.westwinds,
    trainStations.whitehorn,
    trainStations.rundle,
    trainStations.marlborough,
    trainStations.franklin,
    trainStations.maxBell,
    trainStations.zoo,
    trainStations.bridgeLand,
    trainStations.cityHall,
    trainStations.firstStreet,
    trainStations.fourthStreet,
    trainStations.seventhStreet,
    trainStations.downtownWest,
    trainStations.sunalta,
    trainStations.shaganappi,
    trainStations.westbrook,
    trainStations.fourtyFifthStreet,
    trainStations.sirocco,
    trainStations.sixtyNinthStreet
] 

//69th street - saddletowne
var blueLineSaddletowne = [
    trainStations.sixtyNinthStreet,
    trainStations.sirocco,
    trainStations.fourtyFifthStreet,
    trainStations.westbrook,
    trainStations.shaganappi,
    trainStations.sunalta,
    trainStations.downtownWest,
    trainStations.eighthStreet,
    trainStations.sixthStreet,
    trainStations.thirdStreet,
    trainStations.centerStreet,
    trainStations.cityHall,
    trainStations.bridgeLand,
    trainStations.zoo,
    trainStations.maxBell,
    trainStations.franklin,
    trainStations.marlborough,
    trainStations.rundle,
    trainStations.whitehorn,
    trainStations.westwinds,
    trainStations.martindale,
    trainStations.saddleTown        
]

//somerset - tuscany
var redLineTuscany = [
    trainStations.somerset,
    trainStations.shawnessy,
    trainStations.fishCreek,
    trainStations.canyonMeadows,
    trainStations.anderson,
    trainStations.southland,
    trainStations.heritage,
    trainStations.chinook,
    trainStations.thirtyNinth,
    trainStations.erlton,
    trainStations.victoriaPark,
    trainStations.cityHall,
    trainStations.firstStreet,
    trainStations.fourthStreet,
    trainStations.seventhStreet,
    trainStations.sunnyside,
    trainStations.sait,
    trainStations.lionsPark,
    trainStations.banffTrail,
    trainStations.university,
    trainStations.brentwood,
    trainStations.dalhousie,
    trainStations.crowfoot,
    trainStations.tuscany
]

//tuscany - somerset
var redLineSomerset = [
    trainStations.tuscany,
    trainStations.crowfoot,
    trainStations.dalhousie,
    trainStations.brentwood,
    trainStations.university,
    trainStations.banffTrail,
    trainStations.lionsPark,
    trainStations.sait,
    trainStations.sunnyside,
    trainStations.eigthStreet,
    trainStations.sixthStreet,
    trainStations.thirdStreet,
    trainStations.centreStreet,
    trainStations.cityHall,
    trainStations.victoriaPark,
    trainStations.erlton,
    trainStations.thirtyNinth,
    trainStations.chinook,
    trainStations.heritage,
    trainStations.southland,
    trainStations.anderson,
    trainStations.canyonMeadows,
    trainStations.fishCreek,
    trainStations.shawnessy,
    trainStations.somerset
]