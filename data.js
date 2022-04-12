Data = (() => {
    let previousDataCraft = []
    let currentDataCraft = [];
    let workingDataCraft = [];
    function test() {
        setInterval(function () {
            let data = $.getJSON("https://api.hypixel.net/skyblock/bazaar").done((data) => {

                workingDataCraft = [];
                ///crafting
                let y = [
                    {
                        "key": "BROWN_MUSHROOM",
                        "value": "ENCHANTED_BROWN_MUSHROOM"
                    },
                    {
                        "key": "ENCHANTED_CACTUS_GREEN",
                        "value": "ENCHANTED_CACTUS"
                    },
                    {
                        "key": "PUMPKIN",
                        "value": "ENCHANTED_PUMPKIN"
                    },
                    {
                        "key": "PRISMARINE_SHARD",
                        "value": "ENCHANTED_PRISMARINE_SHARD"
                    },
                    {
                        "key": "RED_MUSHROOM",
                        "value": "ENCHANTED_RED_MUSHROOM"
                    },
                    {
                        "key": "MUTTON",
                        "value": "ENCHANTED_MUTTON"
                    },
                    {
                        "key": "DIAMOND",
                        "value": "ENCHANTED_DIAMOND"
                    },
                    {
                        "key": "SHARK_FIN",
                        "value": "ENCHANTED_SHARK_FIN"
                    },
                    {
                        "key": "COBBLESTONE",
                        "value": "ENCHANTED_COBBLESTONE"
                    },
                    {
                        "key": "RAW_FISH",
                        "value": "ENCHANTED_RAW_FISH"
                    },
                    {
                        "key": "SPIDER_EYE",
                        "value": "ENCHANTED_SPIDER_EYE"
                    },
                    {
                        "key": "PORK",
                        "value": "ENCHANTED_PORK"
                    },
                    {
                      "key": "ENCHANTED_PUMPKIN",
                        "value": "POLISHED_PUMPKIN"
                    },
                    {
                        "key": "PRISMARINE_CRYSTALS",
                        "value": "ENCHANTED_PRISMARINE_CRYSTALS"
                    },
                    {
                        "key": "ICE",
                        "value": "ENCHANTED_ICE"
                    },
                    /*                    {
                                            "key": "HUGE_MUSHROOM_1",
                                            "value": "ENCHANTED_HUGE_MUSHROOM_1"
                                        },
                                        {
                                            "key": "HUGE_MUSHROOM_2",
                                            "value": "ENCHANTED_HUGE_MUSHROOM_2"
                                        },*/
                    /*                    {
                                            "key": "STRING",
                                            "value": "ENCHANTED_STRING"
                                        },*/
                    {
                        "key": "RABBIT_FOOT",
                        "value": "ENCHANTED_RABBIT_FOOT"
                    },
                    {
                        "key": "REDSTONE",
                        "value": "ENCHANTED_REDSTONE"
                    },
                    {
                        "key": "SLIME_BALL",
                        "value": "ENCHANTED_SLIME_BALL"
                    },
                    {
                        "key": "SAND",
                        "value": "ENCHANTED_SAND"
                    },
                    {
                        "key": "RAW_CHICKEN",
                        "value": "ENCHANTED_RAW_CHICKEN"
                    },
                    {
                        "key": "ANCIENT_CLAW",
                        "value": "ENCHANTED_ANCIENT_CLAW"
                    },
                    {
                        "key": "SEEDS",
                        "value": "ENCHANTED_SEEDS"
                    },
                    {
                        "key": "HAY_BLOCK",
                        "value": "ENCHANTED_HAY_BLOCK"
                    },
                    {
                        "key": "INK_SACK",
                        "value": "ENCHANTED_INK_SACK"
                    },
                    {
                        "key": "FLINT",
                        "value": "ENCHANTED_FLINT"
                    },
                    {
                        "key": "MELON",
                        "value": "ENCHANTED_MELON"
                    },
                    {
                        "key": "BONE",
                        "value": "ENCHANTED_BONE"
                    },
                    {
                        "key": "FEATHER",
                        "value": "ENCHANTED_FEATHER"
                    },
                    {
                        "key": "NETHERRACK",
                        "value": "ENCHANTED_NETHERRACK"
                    },
                    {
                        "key": "SPONGE",
                        "value": "ENCHANTED_SPONGE"
                    },
                    {
                        "key": "ENCHANTED_BLAZE_POWDER",
                        "value": "ENCHANTED_BLAZE_ROD"
                    },
                    {
                        "key": "GHAST_TEAR",
                        "value": "ENCHANTED_GHAST_TEAR"
                    },
                    {
                        "key": "GLOWSTONE_DUST",
                        "value": "ENCHANTED_GLOWSTONE_DUST"
                    },
                    {
                        "key": "EMERALD",
                        "value": "ENCHANTED_EMERALD"
                    },
                    {
                        "key": "CLAY_BALL",
                        "value": "ENCHANTED_CLAY_BALL"
                    },
                    {
                        "key": "ENCHANTED_ICE",
                        "value": "ENCHANTED_PACKED_ICE"
                    },
                    {
                        "key": "WATER_LILY",
                        "value": "ENCHANTED_WATER_LILY"
                    },
                    {
                        "key": "COAL",
                        "value": "ENCHANTED_COAL"
                    },
                    {
                        "key": "ENDER_PEARL",
                        "value": "ENCHANTED_ENDER_PEARL"
                    },
                    {
                        "key": "QUARTZ",
                        "value": "ENCHANTED_QUARTZ"
                    },
                    {
                        "key": "RAW_BEEF",
                        "value": "ENCHANTED_RAW_BEEF"
                    },
                    {
                        "key": "MAGMA_CREAM",
                        "value": "ENCHANTED_MAGMA_CREAM"
                    },
                    {
                        "key": "ENCHANTED_SUGAR",
                        "value": "ENCHANTED_SUGAR_CANE"
                    },
                    /*                    {
                                            "key": "RABBIT_HIDE",
                                            "value": "ENCHANTED_RABBIT_HIDE"
                                        },*/
                    {
                        "key": "RABBIT",
                        "value": "ENCHANTED_RABBIT"
                    },
                    {
                        "key": "NETHER_STALK",
                        "value": "ENCHANTED_NETHER_STALK"
                    },
                    {
                        "key": "ROTTEN_FLESH",
                        "value": "ENCHANTED_ROTTEN_FLESH"
                    },
                    {
                        "key": "OBSIDIAN",
                        "value": "ENCHANTED_OBSIDIAN"
                    },
                    {
                        "key": "ENCHANTED_COAL",
                        "value": "ENCHANTED_COAL_BLOCK"
                    },
                    {
                        "key": "ENCHANTED_IRON",
                        "value": "ENCHANTED_IRON_BLOCK"
                    },
/*                    {
                        "key": "HARD_STONE",
                        "value": "ENCHANTED_HARD_STONE"
                    },*/
                    {
                        "key": "LEATHER",
                        "value": "ENCHANTED_LEATHER"
                    },
                    {
                        "key": "SNOW_BLOCK",
                        "value": "ENCHANTED_SNOW_BLOCK"
                    }
                ]
                let amount = 160
                for(let i = y.length-1; i >= 0; i--) {
                    let nonEnchanted = y[i].key
                    let enchanted = y[i].value
                    let cost = (getPrice(nonEnchanted) + 0.1) * amount; //this equals sell instant
                    let buyInstant = getBIN(nonEnchanted) //this is buy instant
                    let value = getValue(enchanted) - (getValue() * 0.011)
                    let profit = value - cost;
                    if (cost <= value) {
                        workingDataCraft.push({
                            item: nonEnchanted,
                            craft_into: enchanted,
                            crafting_cost: cost,
                            crafting_value: value,
                            crafting_profit: profit,
                            sd: getSupplyDemand(enchanted)
                        })
                    }
                }
                Object.entries(data["products"]).forEach(([key, value]) => {
                    if (data["products"][key]["buy_summary"][0] !== undefined) {
                        let buy = getPrice(key)
                        let sell = getValue(key) * 1.0011
                        let sed = getSupplyDemand(key)
                        let profit = sell - buy;
                        if (sell >= buy) {
/*                            workingDataCraft.push({
                                item: "",
                                craft_into: key,
                                crafting_cost: buy,
                                crafting_value: sell,
                                crafting_profit: profit,
                                sd: sed
                            })*/
                        }
                    }
                })

                function getPrice(item) {
                    if (item === null || item === undefined) {
                        return 0;
                    }
                    try {
                        return data["products"][item]["sell_summary"][0]["pricePerUnit"]
                    } catch (e) {
                        console.log(item)
                    }
                }

                function getSupplyDemand(item) {
                    let supply = data["products"][item]["quick_status"]["sellVolume"]
                    let demand = data["products"][item]["quick_status"]["buyVolume"]
                    return supply/demand*100;
                }

                function getBIN(item) {
                    return data["products"][item]["quick_status"]["buyPrice"]
                }

                function getValue(item) {
                    if (item === null || item === undefined) {
                        return 0;
                    }
                    return data["products"][item]["buy_summary"][0]["pricePerUnit"]
                }

                function getTotalCost(recipe) {
                    let cost = 0;
                    Object.entries(recipe).forEach(([key, value]) => {
                        cost += getPrice(value["item"]) * value["amount"]
                    })
                    return cost;
                }

                Object.entries(Recipes.list).forEach(([key, value]) => {
                    let totalCraftCost = getTotalCost(value["recipe"])
                    let totalValue = getValue(value["name"])
                    let profit = totalValue - totalCraftCost
                    if (totalCraftCost < totalValue) {
                        workingDataCraft.push({
                            item: "",
                            craft_into: value["name"],
                            crafting_cost: totalCraftCost,
                            crafting_value: totalValue,
                            crafting_profit: profit,
                            sd: getSupplyDemand(value["name"])
                        })
                    }
                })
            })
            update()
            console.log(workingDataCraft)
        }, 10000);

        function update() {
            previousDataCraft = currentDataCraft;
            currentDataCraft = workingDataCraft;
            resetTable()

            Object.entries(currentDataCraft).forEach(([key, value]) => {
                let status = getIfChange(value["craft_into"])
                addRow(value, status)
            })
        }

        function addRow(data, status) {
            let color;
            let profit = data["crafting_profit"]
            if (profit >= 1000 && profit <= 5000) {
                color = "orange"
            } else if (profit >= 5001 && profit <= 10000) {
                color  = "green"
            } else if (profit <= 999) {
                color = "red"
            } else if (profit >= 10001) {
                color = "blue"
            }
            let delta = ""
            if (status["status"] === "higher" || status["status"] === "lower") {
                delta = ` ${status["delta"]}%`
            }
            $(".sortable").append(`<tr class="${status["status"]}"><td>${data["item"]}</td><td>${data["craft_into"]}</td><td>${Math.round(data["crafting_cost"])}</td><td>${Math.round(data["crafting_value"])}</td><td style="color: ${color}">${Math.round(data["crafting_profit"])} ${delta}</td><td>${Math.round(data["sd"])}%</td></tr>`)

        }

        function resetTable() {
            let craftTable = $(".sortable")
            craftTable.empty();
            craftTable.append("    <tr>\n" +
                "        <th>Item</th>\n" +
                "        <th>Craft into</th>\n" +
                "        <th>Cost</th>\n" +
                "        <th>Value</th>\n" +
                "        <th>Profit</th>\n" +
                "        <th>Supply/Demand</th>\n" +
                "    </tr>")

        }

        function getIfChange(current) {
            let currentProfit;
            let previousProfit;
            Object.entries(currentDataCraft).forEach(([key, value]) => {
                if (value["craft_into"] === current) {
                    currentProfit = value["crafting_profit"]
                }
            })
            Object.entries(previousDataCraft).forEach(([key, value]) => {
                if (value["craft_into"] === current) {
                    previousProfit = value["crafting_profit"]
                }
            })

            console.log(`${currentProfit}, ${previousProfit}`)

            if (currentProfit === undefined || previousProfit === undefined) {
                return {
                    "status": "removed",
                    "delta": -1
                }
            }

            if (currentProfit === previousProfit) {
                return {
                    "status": "removed",
                    "delta": 0
                }
            }

            if (currentProfit < previousProfit) {
                return {
                    "status": "lower",
                    "delta": Math.round(((currentProfit-previousProfit)/previousProfit)*1000)/10
                }
            }

            if  (currentProfit > previousProfit) {
                return {
                    "status": "higher",
                    "delta": Math.round(((currentProfit-previousProfit)/previousProfit)*1000)/10
                }
            }
        }
    }


    return {
        test: test
    }
})()
Data.test()

