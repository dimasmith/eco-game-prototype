define(["app/cards", "underscore"], function(cards, _){

	function Calculator(){
		var waistableResources = ["money", "energy", "water", "food"];
		var resourceNames = ["money", "energy", "water", "food", "dioxide"];

		this.deficiteResources = function(resources){
			return _.chain(resources)
				.map(function(value, name){
					return {name: name, value: value};
				}).reject(function(val){
					return val.name === "dioxide";
				}).filter(function(val){
					return val.value <= 0;
				}).value();
		}

		this.applyCard = function(card, resources){			
			var r = _.clone(resources);
			_.each(r, function(value, name){
				r[name] = value + card.effectFor(name).value();
			});
			return r;
		}
	}

	function Autoplay(){
		
		var waistableResources = ["money", "energy", "water", "food"];
		var resourceNames = ["money", "energy", "water", "food", "dioxide"];

		function deficiteResources(resources){
			return _.chain(resources)
				.map(function(value, name){
					return {name: name, value: value};
				}).reject(function(val){
					return val.name === "dioxide";
				}).filter(function(val){
					return val.value <= 0;
				}).value();
		}

		this.play = function(){
			console.log(deficiteResources({ money: -100, energy: 100, water: 100, food: 100, dioxide: 100 }));
		}
	}

	return {player: new Autoplay(), Calculator: Calculator};

})
