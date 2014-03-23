define(["app/model"], function(Model){

	function GameHistory(){

		var key = "_eco_game_history";
		var storage = window.localStorage;
		var snapshots = JSON.parse(storage.getItem(key)) || [];
		var _capacity = 10;

		function save(){
			storage.setItem(key, JSON.stringify(snapshots));
		}

		this.enabled = function(){
			return storage !== undefined;
		},

		this.save = function(snapshot){
			snapshots.unshift(snapshot);
			while (snapshots.length > _capacity){
				snapshots.pop();
			}
			save();
		};

		this.get = function(){
			return snapshots;
		};

		this.clear = function(){
			snapshots = [];
			save();
		};

		this.capacity = function(){
			return _capacity;
		};


	}

	return new GameHistory();

});