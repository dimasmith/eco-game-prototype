define(["app/model", "app/i18n"], function(model, translator) {
    return {
        card01: new model.Card({
            name: t("Import food"),
            description: "",
            resources:  {
                money : -300,
                energy : -150,
                food : 300,
                dioxide : 15
            }
        }),
        card02: new model.Card({
            name: t("Impose a tax on fuel"),
            description: "",
            resources:  {
                money : 100,
                dioxide : -15
            }
        }),
        card03: new model.Card({
            name: t("Increase the number of forest"),
            description: "",
            resources:  {
                money : -5,
                dioxide : -10
            }
        }),
        card04: new model.Card({
            name: t("Shift from coal to natural gas"),
            description: "",
            resources:  {
                money : -150,
                energy : 300,
                dioxide : 50
            }
        }),
        card05: new model.Card({
            name: t("Enter fuel subsidies"),
            description: "",
            resources:  {
                money : -50,
                dioxide : 20
            }
        }),
        card06: new model.Card({
            name: t("Encourage the use of fossil fuels"),
            description: "",
            resources:  {
                money : 50,
                energy : 150,
                dioxide : 10
            }
        }),
        card07: new model.Card({
            name: t("To build a gas power plant"),
            description: "",
            resources:  {
                money : -150,
                energy : 300,
                dioxide : 25
            }
        }),
        card08: new model.Card({
            name: t("Build a wind power"),
            description: "",
            resources:  {
                money : -50,
                energy : 200,
                dioxide : -20
            }
        }),
        card09: new model.Card({
            name: t("Export food"),
            description: "",
            resources:  {
                money : 350,
                energy : -150,
                food : -300,
                dioxide : 15
            }
        }),
        card10: new model.Card({
            name: t("Promote recycling of waste"),
            description: "",
            resources:  {
                money : -200,
                energy : 50,
                dioxide : 5
            }
        }),
        card11: new model.Card({
            name: t("Provide external support"),
            description: "",
            resources:  {
                money : -200
            }
        }),
        card12: new model.Card({
            name: t("Introduce a carbon tax"),
            description: "",
            resources:  {
                money : 400,
                dioxide : -20
            }
        }),
        card13: new model.Card({
            name: t("Export green technology"),
            description: "",
            resources:  {
                money : 300,
                dioxide : -20
            }
        }),
        card14: new model.Card({
            name: t("Explore the possibilities of nuclear power"),
            description: "",
            resources:  {
                money : -100
            }
        }),
        card15: new model.Card({
            name: t("Ensure the use of biogas from garbage"),
            description: "",
            resources:  {
                money : -300,
                energy : 250,
                dioxide : -25
            }
        }),
        card16: new model.Card({
            name: t("To support emissions trading"),
            description: "",
            resources:  {
                money : -100,
                dioxide : -20
            }
        }),
        card17: new model.Card({
            name: t("To increase industrial energy efficiency"),
            description: "",
            resources:  {
                money : -50,
                energy : 150,
                dioxide : -10
            }
        }),
        card18: new model.Card({
            name: t("Invest in rail infrastructure"),
            description: "",
            resources:  {
                money : -50,
                energy : 150,
                dioxide : -10
            }
        }),
        card19: new model.Card({
            name: t("To support the development of small farms"),
            description: "",
            resources:  {
                money : -100,
                food : 150,
                water : -100,
                dioxide : -5
            }
        }),
        card20: new model.Card({
            name: t("Promote the development and use of renewable energy"),
            description: "",
            resources:  {
                money : 250,
                energy : 100,
                water : -20,
                dioxide : -20
            }
        }),
        card21: new model.Card({
            name: t("To support the development of organic farming"),
            description: "",
            resources:  {
                money : -150,
                food : 100,
                water : -150,
                dioxide : -5
            }
        }),
        card22: new model.Card({
            name: t("Conduct a campaign to reduce packaging"),
            description: "",
            resources:  {
                money : -50,
                energy : 50,
                dioxide : -5
            }
        }),
        card23: new model.Card({
            name: t("Improve the quality of highways"),
            description: "",
            resources:  {
                money : -50,
                energy : -100,
                dioxide : 10
            }
        }),
        card24: new model.Card({
            name: t("Establish rules for energy efficient construction"),
            description: "",
            resources:  {
                money : -50,
                energy : 150,
                dioxide : -5
            }
        }),
        card25: new model.Card({
            name: t("Investing in water infrastructure"),
            description: "",
            resources:  {
                money : -150,
                water : 150
            }
        }),
        card26: new model.Card({
            name: t("Increase the number of water treatment plants"),
            description: "",
            resources:  {
                money : -200,
                water : 500,
                dioxide : 20
            }
        }),
        card27: new model.Card({
            name: t("Require efficient use of gas in terms of household"),
            description: "",
            resources:  {
                money : -20,
                energy : 50,
                dioxide : -5
            }
        }),
        card28: new model.Card({
            name: t("Import green technology"),
            description: "",
            resources:  {
                money : -200,
                dioxide : -25
            }
        }),
        card29: new model.Card({
            name: t("Export energy"),
            description: "",
            resources:  {
                money : 200,
                energy : -1000,
                dioxide : -10
            }
        }),
        card30: new model.Card({
            name: t("Investing in transportation infrastructure"),
            description: "",
            resources:  {
                money : -100,
                energy : 50,
                dioxide : -5
            }
        })
    };
});

