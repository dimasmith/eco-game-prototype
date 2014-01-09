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

	function IterationIndex(batchSize, arraySize){
		var _state = [];
		for(var i = 0; i < batchSize; i++){
			_state[i] = i;
		}

		this.state = function(newState){
			if(newState){
				_state = newState;
			}
			return _.clone(_state);
		}

		this.hasNext = function(){
			return _.reduce(_state, function(next, value, index){
				return next || (value < maxValue(index));
			}, false);			
		}

		this.increment = function(){
			doIncrement(batchSize - 1);
			return this;
		}

		function maxValue(index){
			return arraySize - batchSize + index;
		}

		function doIncrement(index){
			if(_state[index] < maxValue(index)){
				_state[index] += 1;
			} else {
				doIncrement(index - 1);
				_state[index] = _state[index - 1] + 1;
			}
		}
	}

	function Autoplay(){

		this.play = function(resources, cards){

		}
	}

	return {
		player: new Autoplay(), 
		Calculator: Calculator, 
		IterationIndex: IterationIndex };

})
