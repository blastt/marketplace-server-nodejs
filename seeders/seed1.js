module.exports = function(db) {
    let users = [
        {
            //id: 1,
            username: 'user1',
            email: 'example@mail.dd',
            login: 'user',
            password: '1234'
        }
    ]
    
    const gameCsgo = {
        //id: 1,
        name: "CS:GO",
        value: "csgo",
        rank: 1
    };
    
    const gameDota2 = {
        //id: 2,
        name: "Dota 2",
        value: "dota2",
        rank: 2
    }
    
    const gameValorant = {
        //id: 3,
        name: "Valorant",
        value: "valorant",
        rank: 3
    }
    
    const gamePulyaDura = {
        //id: 4,
        name: "Pulya Dura",
        value: "pulyadura",
        rank: 4
    
    }
    
    let games = [gameCsgo, gameDota2, gameValorant, gamePulyaDura];
    
    let offers = [
    
        {
            //id: 1,
            header: 'CS:GO Account',
            description: 'Descr',
            accountLogin: 'example',
            sellerPaysCharge: true,
            accountCreatedDate: new Date(),
            price: 1050,
            userId: 1
        },
        {
            //id: 2,
            header: 'CS:GO Account LEM',
            description: 'Descr2',
            accountLogin: 'example2',
            sellerPaysCharge: false,
            accountCreatedDate: new Date(),
            price: 700,
            userId: 1
        },
        {
            //id: 3,
            header: 'CS:GO Account Global',
            description: 'Descr',
            accountLogin: 'example',
            sellerPaysCharge: true,
            accountCreatedDate: new Date(),
            price: 890,
            userId: 1
        },
        {
            //id: 4,
            header: 'cs go account',
            description: 'Descr',
            accountLogin: 'example',
            sellerPaysCharge: true,
            accountCreatedDate: new Date(),
            price: 1200,
            userId: 1
        },
        {
            //id: 5,
            header: 'dota 2 7k mmr',
            description: 'Descr',
            accountLogin: 'example',
            sellerPaysCharge: true,
            accountCreatedDate: new Date(),
            price: 1000,
            userId: 1
        },
        {
            //id: 6,
            header: 'Valorant',
            description: 'Descr2',
            accountLogin: 'example',
            sellerPaysCharge: true,
            accountCreatedDate: new Date(),
            price: 1300,
            userId: 1
        },
        {
            //id: 7,
            header: 'ppp',
            description: 'Descr254',
            accountLogin: 'example22',
            sellerPaysCharge: true,
            accountCreatedDate: new Date(),
            price: 1100,
            userId: 1
        }
    ]
    
    db.sequelize.sync({ alter: true, force: true })
        .then((data) => db.game.bulkCreate(games))
        .then((data) => db.user.bulkCreate(users))
        .then((data) => db.offer.bulkCreate(offers))     
        .then((data) => db.offer_game.bulkCreate([
            { offerId: 1, gameId: 1 },
            { offerId: 1, gameId: 2 },
            { offerId: 2, gameId: 1 },
            { offerId: 3, gameId: 3 },
            { offerId: 4, gameId: 1 },
            { offerId: 4, gameId: 4 },
            { offerId: 5, gameId: 1 },
            { offerId: 5, gameId: 2 },
            { offerId: 5, gameId: 3 },
            { offerId: 6, gameId: 1 },
            { offerId: 7, gameId: 3 }
        ]))    
        .then((data) => console.log('games seed created'))
        .catch((data) => console.log('something went wrong!!!' + data))
}
