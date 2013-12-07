define(["app/model"], function(model) {
    return {
        dioxideBelowThresholdRule: new model.Rule({
            threshold: 10,
            condition: function(game) {
                return game.resources.dioxide <= this.threshold;
            },
            effect: function(game) {
                game.win(t("You dioxide level is below ") + this.threshold);
            }}),
        lackOfResourcesLosesGame: new model.Rule({
            condition: function(game) {
                return game.resources.money <= 0 ||
                        game.resources.energy <= 0 ||
                        game.resources.water <= 0 ||
                        game.resources.food <= 0;
            },
            effect: function(game) {
                game.lose(t("You have lack of some vital resources"));
            }})
    };
});