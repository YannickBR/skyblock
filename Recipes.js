Recipes = (() => {
    let list = []

    function registerFill(item_name, items, amount) {
        list.push({
            name: item_name,
            recipe: {
                0: {
                    item: items,
                    amount: amount
                },
                1: {
                    item: items,
                    amount: amount
                },
                2: {
                    item: items,
                    amount: amount
                },
                3: {
                    item: items,
                    amount: amount
                },
                4: {
                    item: items,
                    amount: amount
                },
                5: {
                    item: items,
                    amount: amount
                },
                6: {
                    item: items,
                    amount: amount
                },
                7: {
                    item: items,
                    amount: amount
                },
                8: {
                    item: items,
                    amount: amount
                }

        }
        })
    }

    function registerSingle(item_name, item1, amount1,
                            item2, amount2, item3, amount3,
                            item4, amount4, item5, amount5,
                            item6, amount6, item7, amount7,
                            item8, amount8, item9, amount9) {
        list.push({
            name: item_name,
            recipe: {
                0: {
                    item: item1,
                    amount: amount1
                },
                1: {
                    item: item2,
                    amount: amount2
                },
                2: {
                    item: item3,
                    amount: amount3
                },
                3: {
                    item: item4,
                    amount: amount4
                },
                4: {
                    item: item5,
                    amount: amount5
                },
                5: {
                    item: item6,
                    amount: amount6
                },
                6: {
                    item: item7,
                    amount: amount7
                },
                7: {
                    item: item8,
                    amount: amount8
                },
                8: {
                    item: item9,
                    amount: amount9
                },
            }
        })
    }


    return {
        registerSingle: registerSingle,
        registerFill: registerFill,
        list: list
    }
})()