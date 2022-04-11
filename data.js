Data = (() => {

    function test() {
        setInterval(function () {
            let data = $.getJSON("https://api.hypixel.net/skyblock/bazaar").done((data) => {
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

                $(".sortable").empty()
                $(".sortable").append("    <tr>" +
                    "        <th>Item</th>" +
                    "        <th>Craft into</th>" +
                    "        <th>Cost</th>" +
                    "        <th>Value</th>" +
                    "        <th>Profit</th>" +
                    "<th>Supply/Demand</th>" +
                    "    </tr>")
                $(".data").empty()
                for(let i = y.length-1; i >= 0; i--) {
                    let nonEnchanted = y[i].key
                    let enchanted = y[i].value
                    let cost = (getPrice(nonEnchanted) + 0.1) * amount;
                    let value = getValue(enchanted) - (getValue() * 0.011)
                    let profit = value - cost;
                    if (cost <= value) {
                        if (profit >= 1000 && profit <= 5000) {
                            $(".sortable").append(`<tr><td>${nonEnchanted}</td><td>${enchanted}</td><td>${Math.round(cost)}</td><td>${Math.round(value)}</td><td style="color: orange">${Math.round(value - cost)}</td><td>${Math.round(getSupplyDemand(enchanted))}%</td><tr></tr>`)
                        } else if (profit >= 5001 && profit <= 10000) {
                            $(".sortable").append(`<tr><td>${nonEnchanted}</td><td>${enchanted}</td><td>${Math.round(cost)}</td><td>${Math.round(value)}</td><td style="color: green">${Math.round(value - cost)}</td><td>${Math.round(getSupplyDemand(enchanted))}%</td><tr></tr>`)
                        } else if (profit <= 999) {
                            $(".sortable").append(`<tr><td>${nonEnchanted}</td><td>${enchanted}</td><td>${Math.round(cost)}</td><td>${Math.round(value)}</td><td style="color: red">${Math.round(value - cost)}</td><td>${Math.round(getSupplyDemand(enchanted))}%</td><tr></tr>`)
                        } else if (profit >= 10001) {
                            $(".sortable").append(`<tr><td>${nonEnchanted}</td><td>${enchanted}</td><td>${Math.round(cost)}</td><td>${Math.round(value)}</td><td style="color: blue">${Math.round(value - cost)}</td><td>${Math.round(getSupplyDemand(enchanted))}%</td><tr></tr>`)
                        }
                    }
                }
                Object.entries(data["products"]).forEach(([key, value]) => {
                    if (data["products"][key]["buy_summary"][0] !== undefined) {
                        let buy = data["products"][key]["buy_summary"][0]["pricePerUnit"] * 1.011
                        let sell = data["products"][key]["sell_summary"][0]["pricePerUnit"]
                        if (sell >= buy) {

                            $(".data").append(`<p>
                ${key}: (BUY: ${buy}, SELL: ${sell})
                </p>`)
                        }
                    }
                })

                function getPrice(item) {
                    if (item === null || item === undefined) {
                        return 0;
                    }
                    return data["products"][item]["sell_summary"][0]["pricePerUnit"]
                }

                function getSupplyDemand(item) {
                    let supply = data["products"][item]["quick_status"]["sellVolume"]
                    let demand = data["products"][item]["quick_status"]["buyVolume"]
                    return supply/demand*100;
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
                        if (profit >= 1000 && profit <= 5000) {
                            $(".sortable").append(`<tr></tr><td> </td><td>${value["name"]}</td><td>${Math.round(totalCraftCost)}</td><td>${Math.round(totalValue)}</td><td style="color: orange">${Math.round(totalValue -totalCraftCost)}</td><td>${Math.round(getSupplyDemand(value["name"]))}%</td><tr></tr>`)
                        } else if (profit >= 5001 && profit <= 10000) {
                            $(".sortable").append(`<tr></tr><td> </td><td>${value["name"]}</td><td>${Math.round(totalCraftCost)}</td><td>${Math.round(totalValue)}</td><td style="color: green">${Math.round(totalValue -totalCraftCost)}</td><td>${Math.round(getSupplyDemand(value["name"]))}%</td><tr></tr>`)
                        } else if (profit <= 999) {
                            $(".sortable").append(`<tr></tr><td> </td><td>${value["name"]}</td><td>${Math.round(totalCraftCost)}</td><td>${Math.round(totalValue)}</td><td style="color: red">${Math.round(totalValue -totalCraftCost)}</td><td>${Math.round(getSupplyDemand(value["name"]))}%</td><tr></tr>`)
                        } else if (profit >= 10001) {
                            $(".sortable").append(`<tr></tr><td> </td><td>${value["name"]}</td><td>${Math.round(totalCraftCost)}</td><td>${Math.round(totalValue)}</td><td style="color: blue">${Math.round(totalValue -totalCraftCost)}</td><td>${Math.round(getSupplyDemand(value["name"]))}%</td><tr></tr>`)
                        }
                    }
                })
            })

        }, 5000);
    }


    return {
        test: test
    }
})()
Data.test()

