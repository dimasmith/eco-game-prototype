define(["app/cards", "underscore"], function(cards, _){

	function Calculator(){
		var waistableResources = ["money", "energy", "water", "food"];
		var resourceNames = ["money", "energy", "water", "food", "dioxide"];
		var self = this;

		this.deficiteResources = function(resources){
			return _.chain(resources)
				.map(function(value, name){
					return {name: name, value: value};
				}).reject(function(val){
					return val.name === "dioxide";
				}).filter(function(val){
					return val.value <= 0;
				}).value();
		};

		this.applyCards = function(cards, resources){
			var r = _.clone(resources);
			_.each(cards, function(card){
				r = self.applyCard(card, r);				
			});
			return r;
		}

		this.applyCard = function(card, resources){			
			var r = _.clone(resources);
			_.each(r, function(value, name){
				r[name] = value + card.effectFor(name).value();
			});
			return r;
		};

		this.sortCards = function(cards){
			return _.sortBy(cards, function(card){
				return card.effectFor("dioxide").value();				
			});
		};
	}

	function Autoplay(){

		this.play = function(resources, cards){

		}
	}

	return {player: new Autoplay(), Calculator: Calculator};

})
