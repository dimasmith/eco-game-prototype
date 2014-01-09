define(["app/model", "balance/autoplay"], function(model, Play){
	describe("resource calculator", function(){

		describe("when search for deficite resources", function(){
			var calculator;
			var resources;
			var negativeValue = -40;

			beforeEach(function(){
				calculator = new Play.Calculator();
				resources = {
					money: 100,
					energy: 100,
					water: 50,
					food: 150,
					dioxide: 10
				};
			});

			it("reports resource deficite when amount is negative", function(){
				resources.money = negativeValue;
				var deficites = calculator.deficiteResources(resources);

				expect(deficites).toContain({name: "money",	value: negativeValue});
				expect(deficites.length).toEqual(1);

			});	

			it("reports no deficite on dioxide when its amount is negative", function(){
				resources.dioxide = negativeValue;

				var deficites = calculator.deficiteResources(resources)

				expect(deficites).not.toContain({name: "dioxide", value: negativeValue});
			});

			it("reports resource deficite when its amount is 0", function(){
				resources.money = 0;

				var deficites = calculator.deficiteResources(resources)

				expect(deficites).toContain({name: "money", value: 0});
			});

			it("reports no resource deficite when all resources amounts are positive", function(){
				var deficites = calculator.deficiteResources(resources)

				expect(deficites.length).toEqual(0);
			});

			it("reports multiple resources deficite when its amounts is negative", function(){
				resources.money = negativeValue;
				resources.food = negativeValue;

				var deficites = calculator.deficiteResources(resources)

				expect(deficites).toContain({name: "money", value: negativeValue});
				expect(deficites).toContain({name: "food", value: negativeValue});
			});
		});

		describe("when applying card effects", function(){
			var calculator;
			var resources;

			beforeEach(function(){
				calculator = new Play.Calculator();
				resources = {money: 200, food: 100};
			});

			it("resource become increased for effect amount", function(){
				var card = new model.Card({resources: {money: 100}});

				resources = calculator.applyCard(card, resources);

				expect(resources.money).toEqual(200 + 100);
			});

			it("all resources become increased for effects amounts", function(){
				var card = new model.Card({resources: {money: 100, food: 50}});

				resources = calculator.applyCard(card, resources);

				expect(resources.money).toEqual(200 + 100);
				expect(resources.food).toEqual(100 + 50);
			});

			it("passed resources remains immutable", function(){
				var card = new model.Card({resources: {money: 100}});

				var modified = calculator.applyCard(card, resources);

				expect(resources.money).toEqual(200);
			});
		});

		describe("when applying effects of multiple cards", function(){
			var calculator;
			var resources;

			beforeEach(function(){
				calculator = new Play.Calculator();
				resources = {money: 200, food: 100};
			});

			it("card effects should be added", function(){
				var moneyCard = new model.Card({resources: {money: 200}});				
				var foodCard = new model.Card({resources: {food: 100}});

				var affectedResources = calculator.applyCards([moneyCard, foodCard], resources);

				expect(affectedResources).toEqual({money: 400, food: 200});
			});
		});

		describe("when sorting cards", function(){
			var cards;
			var calculator;

			beforeEach(function(){
				cards = {
					lowestDioxide: new model.Card({resources: {dioxide: -10}}),
					highestDioxide: new model.Card({resources: {dioxide: 10}}),
					mediumDioxide: new model.Card({resources: {money: -10}})
				};
				calculator = new Play.Calculator();
			});

			it("cards are sorted by dioxide in ascending order", function(){
				var sortedCards = calculator.sortCards(cards);

				expect(sortedCards).toEqual([
										cards.lowestDioxide, 
										cards.mediumDioxide, 
										cards.highestDioxide]);
			});
		});
		
	});
})