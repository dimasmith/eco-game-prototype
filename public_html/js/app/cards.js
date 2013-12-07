define(["app/model", "app/i18n"], function(model, translator) {
    return {
        modernizeManufactures: new model.Card({
            name: t("Modernize Manufacturing"),
            description: "Reduces Dioxide emmission by quarter for 200 of money and 50 of water",
            effect: function(game) {
                game.resources.money -= 200;
                game.resources.water -= 50;
                game.resources.dioxide = Math.floor(game.resources.dioxide / 4);
            }
        }),
        atomicEnergy: new model.Card({
            name: t("Use Atomic Energy"),
            description: "Increases energy level by 100 and reduces Dioxide by 20. Costs 200 of money",
            effect: function(game) {
                game.resources.money -= 200;
                game.resources.energy += 100;
                game.resources.dioxide -= 20;
            }
        }),
        takeMoneyAndGoAway: new model.Card({
            name: t("Take Money and Get Out"),
            description: "Take 1000 of Money and migrate to other Country",
            effect: function(game) {
                game.resources.money -= 1000;
            }
        })
    };
});