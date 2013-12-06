var cards = {
    modernizeManufactures: new Card({
        name: "Modernize Manufacturing",
        description: "Reduces Dioxide emmission by quarter for 200 of money and 50 of water",
        effect: {
            money: -200,
            water: -50,
            dioxide: .25,
        }
    }),
    atomicEnergy: new Card({
        name: "Use Atomic Energy",
        description: "Increases energy level by 100 and reduces Dioxide by 20. Costs 200 of money",
        effect: {
            money: -200,
            energy: 100,
            dioxide: -20,
        }
    }),
    takeMoneyAndGoAway: new Card({
        name: "Take Money and Get Out",
        description: "Take 1000 of Money and migrate to other Country",
        effect: {
            money: -1000,            
        }
    })
};


