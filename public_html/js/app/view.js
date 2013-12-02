function View(game) {
    var self = this;
    $(".game-move-complete").click(function() {
        self.hideNotifications();
        game.completeMove();
    });
    
    this.hideNotifications = function(){
        $(".notification").hide();
    };
    
    this.render = function() {        
        this.renderMoveNumber();
        this.renderResources();
        this.renderCards();
    };
    
    this.renderMoveNumber = function(){
      $(".game-move-number").text(game.moveNumber());  
    };
    
    this.renderResources = function(){
        $(".game-state-money").text(game.resources.money);
        $(".game-state-energy").text(game.resources.energy);
        $(".game-state-food").text(game.resources.food);
        $(".game-state-water").text(game.resources.water);
        $(".game-state-dioxide").text(game.resources.dioxide);  
    };
    
    this.renderCards = function(){
        this.renderDeck();
        this.renderCardsOnHands();
    };
    
    this.renderDeck = function(){
        var cardTable = $(".game-available-cards");
        $(".card", cardTable).remove();
        var cards = game.deck().availableCards();        
        for(var index in cards){
            var card = cards[index];
            var cardNode = renderCard(card);
            cardNode.click(function(){
                var card = $(this).data("card");
                game.pickCard(card);
            });
            cardTable.prepend(cardNode);
        }
    };
    
    this.renderCardsOnHands = function(){
        var cardTable = $(".game-cards-on-hands");
        $(".card", cardTable).remove();
        var cards = game.currentMove().cardsOnHands();        
        for(var index in cards){
            var card = cards[index];            
            var cardNode = renderCard(card);            
            cardNode.click(function(){
                var card = $(this).data("card");
                game.returnCard(card);
            });            
            cardTable.prepend(cardNode);
        }
    };
    
    var renderCard = function(card){
        var template = $($("#card-template").html()).clone();
        $(".card-name", template).text(card.name());
        $(".card-description", template).text(card.description());
        template.data("card", card);
        return template;
    }
    
    this.onGameOver = function(event) {
        $(".game-screen").hide();
        $(".game-result-screen").removeClass("hidden");

        var resultText;
        if (event.result === "lose") {
            resultText = "You lost";
        } else {
            resultText = "You won!!!";
        }
        $(".game-result").text(resultText);

        if (event.reason) {
            $(".game-result-reason").text(event.reason);
        }
    };
    
    this.onDisaster = function(event){
        var disaster = event.disaster;
        $(".game-disaster-name").text(disaster.name());
        $(".game-disaster-description").text(disaster.description());
        $(".game-disaster").show();        
    };
    
    this.onFinishMove = function(event){
        this.render();
    };
    
    this.onCardPick = function(){
        this.renderCards();
    };
    
    game.addListener(this);

}
;



