define(["jquery"], function($) {
    
    function Welcome(player) {
        var self = this;
        $('.select-country ul li a').on('click', function(){
            var country = $(this).html();
            $('.select-country button').html(country + ' <span class="caret">');
            $('.user-info .country').html(country);
            player.region($(this).text());
        });
        $('.select-avatar .avatar').on('click', function(){
            $('.select-avatar .avatar').removeClass('active');
            $(this).addClass('active');
            var avatar = $(this).data("avatar");
            player.avatar(avatar);
            $('.user-info .avatar').attr('class', 'avatar').addClass(avatar);
        });
    }
    
    function View(game) {
        var self = this;
        $(".game-move-complete").click(function() {
            self.hideNotifications();
            game.completeMove();
        });

        this.hideNotifications = function() {
            $(".notification").hide();
        };

        this.render = function() {
            this.renderMoveNumber();
            this.renderResources();
            this.renderCards();
        };

        this.renderMoveNumber = function() {
            $(".game-move-number").removeClass('active').eq(game.moveNumber() - 1).addClass('active');
        };

        this.renderResources = function() {
            //['money', 'energy', 'food', 'water', 'dioxide'] => game.availableResources()
            $.each(['money', 'energy', 'food', 'water', 'dioxide'], function(index, resource){
                $(".game-state-" + resource).text(game.resources[resource]);
            });
        };

        this.renderCards = function() {
            this.renderDeck();
            this.renderCardsOnHands();
        };

        var makeDeckCardClickHandler = function(card){
            return function(){
                game.pickCard(card);
            };
        };
        
        var makeDeckCardOnHandClickHandler = function(card){
            return function(){
                game.returnCard(card);
            };
        };

        this.renderDeck = function() {
            var cardTable = $(".game-available-cards");
            $(".card", cardTable).remove();
            var cards = game.deck().availableCards();
            for (var index in cards) {
                var card = cards[index];
                var cardNode = renderCard(card);
                cardNode.click(makeDeckCardClickHandler(card));
                cardTable.prepend(cardNode);
            }
        };

        this.renderCardsOnHands = function() {
            var cardTable = $(".game-cards-on-hands");
            $(".card", cardTable).remove();
            var cards = game.currentMove().cardsOnHands();
            for (var index in cards) {
                var card = cards[index];
                var cardNode = renderCard(card);
                cardNode.click(makeDeckCardOnHandClickHandler(card));
                cardTable.prepend(cardNode);
            }
        };

        var renderCard = function(card) {
            var template = $($("#card-template").html());
            $(".card-name", template).text(card.name());
            $(".card-description", template).text(card.description());

            for (var resource in game.resources) {
                var resourceProgress = $("." + resource + " .progress-bar", template);
                var progressClass = "progress-bar-info";
                var effect = card.effectFor(resource);
                switch (effect.type()) {
                    case "good":
                        progressClass = "progress-bar-success";
                        break;
                    case "bad":
                        progressClass = "progress-bar-danger";
                        break;
                    case "neutral":
                        progressClass = "progress-bar-info";
                        break;
                }
                resourceProgress.addClass(progressClass).css("width", effect.weightedValue() + "%")
                        .parent().attr("title", effect.value());
            }            
            return template;
        };

        this.gameOver = function(event, history) {
            $(".game-screen").hide();
            $(".game-result-screen").removeClass("hidden");

            var resultText;
            var resultClass;
            if (event.result === "lose") {
                resultText = t("You lost");
                resultClass = "alert-danger";
            } else {
                resultText = t("You won!!!");
                resultClass = "alert-success";
            }
            var resourceHTML = '<br />';
            for (var key in game.resources) {
                resourceHTML += '<label>' + t(key.capitalize()) + '</label>: ' + game.resources[key] + '<br />';
            }
            $(".game-result").html(resultText).addClass(resultClass);

            if (event.reason) {
                $(".game-result-reason").html(event.reason + resourceHTML).addClass(resultClass);
            }
        };

        this.showDisasterNotification = function(event) {
            var disaster = event.disaster;
            var disasterViewClass = (disaster.type() === "bad") ? " alert-danger" :  "alert-success";         
            var modalWindow = '<div style="background:url(static/images/'+disaster.image()+') no-repeat 0 0;background-size: 100% 100%;" class="modal fade '+disasterViewClass+'" id="modalWindow" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';
            modalWindow += '<h4 class="modal-title">'+disaster.name()+'</h4></div><div class="modal-body">' + disaster.description();
            modalWindow += '</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>';
            $('body').append(modalWindow);
            $('#modalWindow').modal();
        };

        this.onFinishMove = function(event) {
            this.render();
        };

        this.pickCard = function() {
            $(".game-alert").hide();
            this.renderCards();
        };
        
        this.showCardBeyondLimitNotification = function(move){
            $(".game-alert").addClass("alert-warning").text(t("You cannot take more than") + " " + move.cardLimit() + " " + t("cards")).show();
        };

    }    
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
    return {View: View, Welcome: Welcome};

});