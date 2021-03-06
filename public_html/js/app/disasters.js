define(["app/model", "app/i18n"], function(model, translator) {
    return {
        flood: new model.Disaster({
            name: t("Flood"),
            type: "bad",
            description: t("Water level increases. It flows over fields reducing food amount. Drinking water becomes polluted with mud. Money spent to resolve problems"),
            probability: function(game) {                
                return game.resources.dioxide / 20;
            },
            effect: function(game) {
                game.resources.money -= 100;
                game.resources.water -= 10;
                game.resources.food -= 10;
            }
        })
    };
});
