define(["app/cards"], function(cards){

	function Balance(cards){
		var resources = {
				money: 0, 
				energy: 0, 
				water :0, 
				food :0, 
				dioxide: 0
			}
		var startingResources = {
				money: 1000, 
				energy: 20, 
				water :20, 
				food :30, 
				dioxide: 75
			}
		var cardsCount = 0;
		var deviations = [];	
		var deviationThreshold = 15;	

		function calculateTotals(){
			for(cardId in cards){
				var card = cards[cardId];
				for (resourceName in resources){
					resources[resourceName] += card.effectFor(resourceName).value();
				}
			}
		}

		function calculateDeviations(){
			for(cardId in cards){
				var card = cards[cardId];
				var cardDeviation = {cardName: card.name(), resourceDeviations: {}}
				for (resourceName in startingResources){					
					var deviation = 0;
					var resourceDeviation = {};
					var cardEffect = card.effectFor(resourceName).value();					
					var resource = startingResources[resourceName];
					if (cardEffect != 0){
						deviation = Math.abs(cardEffect) / Math.abs(resource) * 100;
					} 
					cardDeviation.resourceDeviations[resourceName] = 
					{
						deviation: Math.round(deviation),
						value: cardEffect,
						initial: resource,
						aboveThreshold: deviation > deviationThreshold

					};
				}
				deviations.push(cardDeviation);
			}			
		}

		calculateTotals();
		calculateDeviations();

		this.totals = function(){
			return resources;
		}

		this.deviations = function(){
			return deviations;
		}

		this.dump = function(){
			console.log(resources);
			console.log(deviations);
		}

	}



	return new Balance(cards);
})