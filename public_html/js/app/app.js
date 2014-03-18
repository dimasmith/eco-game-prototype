define(["app/model", "app/view", "app/rules", "app/disasters", "app/cards", "app/i18n-ui", "jquery"],
        function(model, view, rules, disasters, cards, translator, $) {

            function GameListener(view) {

                this.onGameStart = function(event) {
                    view.render(event);
                };

                this.onGameOver = function(event) {
                    view.gameOver(event);
                };

                this.onDisaster = function(event) {
                    view.showDisasterNotification(event);
                };

                this.onFinishMove = function(event) {
                    view.render(event);
                };

                this.onCardPick = function() {
                    view.pickCard();
                };

                this.onCardBeyondLimit = function(move) {
                    view.showCardBeyondLimitNotification(move);
                };
            }

            $(document).ready(function() {
                $('#starting').removeClass('preload');
                translator.translateUI();
                var game = new model.Game({
                    rules: rules,
                    cards: cards,
                    disasters: disasters
                });
                var welcome = new view.Welcome();

                var v = new view.View(game);
                
                game.addListener(new GameListener(v));
                
                $('.select-avatar .av-1').addClass('active');
                $('.user-info .avatar').attr('class', 'avatar').addClass('av-1');
                
                $('#starting input').change(function(){
                    if ($('.username input').val() != '' && $('.select-avatar .avatar.active').length) {
                        $('.btn.start-game').removeClass('disabled');
                    } else {
                        $('.btn.start-game').addClass('disabled');
                    }
                });
                
                $('.start-game').on('click', function(){
                    if ($('.username input').val() != '' && $('.select-avatar .avatar.active').length) {
                        $('.user-info .user-name span.name').html($('.username input').val());
                        
                        game.start();
                        $('.welcome-screen').hide();
                        $('.game-screen').show();   
                    }
                });
            });

        }
);