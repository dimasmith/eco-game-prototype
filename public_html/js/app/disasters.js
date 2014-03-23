define(["app/model", "app/i18n"], function(model, translator) {
    return {
        flood: new model.Disaster({
            name: t("Flood"),
            type: "bad",
            image: "flood.jpg",
            description: t("Water level increases. It flows over fields reducing food amount. Drinking water becomes polluted with mud. Money spent to resolve problems"),
            probability: function(game) {                
                return 99;
            },
            effect: function(game) {
                game.resources.money -= 100;
                game.resources.water -= 10;
                game.resources.food -= 10;
            },
        }),
        drought: new model.Disaster({
            name: t("Drought"),
            type: "bad",
            description: t("drought"),
            probability: function(game) {                
                return game.resources.dioxide / 20;
            },
            effect: function(game) {
                game.resources.money -= 100;
                game.resources.water -= 10;
                game.resources.food -= 10;
            },
            image: 'drought.jpg'
        }),
        hurricane: new model.Disaster({
            name: t("Hurricane"),
            type: "bad",
            description: t("hurricane"),
            probability: function(game) {                
                return game.resources.dioxide / 20;
            },
            effect: function(game) {
                game.resources.money -= 100;
                game.resources.water -= 10;
                game.resources.food -= 10;
            },
            image: 'hurricane.jpg'
        }),
    };
});
