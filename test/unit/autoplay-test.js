define(["app/model", "balance/autoplay"], function(model, Play){
	describe("calculate resources and effects ", function(){
		describe("deficite resources", function(){
			var calculator;
			var resources;

			beforeEach(function(){
				calculator = new Play.Calculator();
				resources = {
					money: -100,
					energy: 100,
					water: 50,
					food: 150,
					dioxide: 10
				};
			});

			it("find deficite resources", function(){
				var deficites = calculator.deficiteResources(resources)

				expect(deficites).toContain({name: "money",	value: -100});
				expect(deficites.length).toEqual(1);

			});	

			it("deficite resources does not count dioxide", function(){
				resources.dioxide = -100;

				var deficites = calculator.deficiteResources(resources)

				expect(deficites).not.toContain({name: "dioxide", value: -100});				
			});

			it("count 0 as deficite", function(){
				resources.money = 0;

				var deficites = calculator.deficiteResources(resources)

				expect(deficites).toContain({name: "money", value: 0});
			});

			it("return empty array on no deficites", function(){
				resources.money = 10;

				var deficites = calculator.deficiteResources(resources)

				expect(deficites.length).toEqual(0);
			});
		});

		describe("card effect", function(){
			var calculator;

			beforeEach(function(){
				calculator = new Play.Calculator();
			});

			it("apply single effect card", function(){
				var resources = {money: 200};
				var card = new model.Card({resources: {money: 100}});

				resources = calculator.applyCard(card, resources);

				expect(resources.money).toEqual(200 + 100);
			});

			it("apply multiple card effects", function(){
				var resources = {money: 200, food: 100};
				var card = new model.Card({resources: {money: 100, food: 50}});

				resources = calculator.applyCard(card, resources);

				expect(resources.money).toEqual(200 + 100);
				expect(resources.food).toEqual(100 + 50);
			});

			it("passed resources remains immutable", function(){
				var resources = {money: 200};
				var card = new model.Card({resources: {money: 100}});

				var modified = calculator.applyCard(card, resources);

				expect(resources.money).toEqual(200);
			});
		});
		
	});
})