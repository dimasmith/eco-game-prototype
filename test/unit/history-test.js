define(["app/history"], function(history){

	describe("History", function(){
		it("should be enabled only if local storage is available", function(){
			expect(history.enabled()).toBe(window.localStorage !== undefined);
		});
	});

	describe("History", function(){

		beforeEach(function(){
			history.clear();
		});

		it("should save result to local storage", function(){
			var snapshot = {resources: {water: 100, money: 200}};
			history.save(snapshot);
			var snapshots = history.get();
			expect(snapshots).toContain(snapshot);
		});

		it("should save multiple resutls to local storage", function(){
			var snapshot_1 = {resources: {water: 100, money: 200}};
			var snapshot_2 = {resources: {food: 300, money: 100}};
			history.save(snapshot_1);
			history.save(snapshot_2);
			var snapshots = history.get();
			expect(snapshots).toContain(snapshot_1);
			expect(snapshots).toContain(snapshot_2);
		});

		it("should remove all snapshots on clear call", function(){
			history.clear();
			var snapshots = history.get();
			expect(snapshots.length).toBe(0);
		});

		it("should save up to 10 snapshots", function(){
			var firstSnapshot = {value: 0};
			var lastSnapshot = {value: history.capacity()};
			for(var i = 0; i < history.capacity(); i++){
				var snapshot = { value: i };
				history.save(snapshot);
			};
			history.save(lastSnapshot);
			var snapshots = history.get();
			expect(snapshots).toContain(lastSnapshot);
			expect(snapshots).not.toContain(firstSnapshot);
		});
	});



});