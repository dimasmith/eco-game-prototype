define(["app/model", "app/view", "app/rules", "app/disasters", "app/cards", "app/i18n", "jquery"],
        function(model, view, rules, disasters, cards, translator, $) {
            $(document).ready(function() {

                var game = new model.Game({
                    rules: rules,
                    cards: cards,
                    disasters: disasters
                });

                var v = new view.View(game);

                game.start();
                v.render();

                $(".i18n").each(function() {
                    var el = $(this);
                    el.text(t(el.text()));
                });

                $(".i18n-title").each(function() {
                    var el = $(this);
                    el.attr("title", t(el.attr("title")));
                });

            });

        }
);