define(["balance/balance", "jquery"], function(balance, $){
	function View(balance) {

		var resourceNames = ["money", "food", "energy", "water", "dioxide"];

		function renderDeviations(deviations){
			$deviationsTable = $("#deviations > tbody");
			for(var i = 0; i < deviations.length; i++){
				var cardDeviation = deviations[i];				
				$deviationsTable.append(
					createDeviationRow(cardDeviation));
			}
		}

		function createDeviationRow(deviation){
			$row = $($("#deviations-row-template").html());			
			$row.find(".deviations-card-name").text(deviation.cardName);

			for(var i = 0; i < resourceNames.length; i++){
				var resourceName = resourceNames[i];				
				renderResourceDeviation($row, resourceName, deviation);
			}
			return $row;
		}

		function renderResourceDeviation($row, resourceName, deviation){
			var cell = $row.find(".deviations-" + resourceName);
			cell.text(resourceDescription(
					deviation, resourceName));
			if (deviation.resourceDeviations[resourceName].aboveThreshold){
				cell.addClass("warning");
			}
		}

		function resourceDescription(deviation, resource){
			var value = deviation.resourceDeviations[resource];
			return value.deviation + " (" + value.initial + "/" + value.value + ")";
		}

		function renderTotals(totals){
			var table = $("#deviations");
			for(var i = 0; i < resourceNames.length; i++){
				var resourceName = resourceNames[i];				
				table.find(".total-" + resourceName).text(totals[resourceName]);
			}
		}

		this.render = function(){
			renderDeviations(balance.deviations());
			renderTotals(balance.totals());
		}
	}

	return new View(balance);
})